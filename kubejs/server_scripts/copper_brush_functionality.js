// priority: 1

// script by asof

const brushColors = {
  inactive: Color.rgba(192,192,192,255),
  wax: Color.rgba(255,192,0,255),
  errored: Color.RED,
}

/**
 * 
 * @param {Internal.Player} player 
 */
function processBrushPreview(player){
  for(let item of [player.mainHandItem,player.offHandItem]){

    let transformCount = 0;
    let status = "???";
    let success = false;
    let color = brushColors.inactive;

    if (item.id.match(/kubejs:copper_brush_/)) {
      let target_block = player.rayTrace(30, false).block;

      if(item.nbt.contains("pos") && target_block !== null){

        let damage = item.damageValue;

        let [x,y,z] = item.nbt.getIntArray("pos")
        let area = AABB.of(
          Math.min(target_block.x,x),
          Math.min(target_block.y,y),
          Math.min(target_block.z,z),
          Math.max(target_block.x,x),
          Math.max(target_block.y,y),
          Math.max(target_block.z,z)
        )

        switch(item.id){
          case "kubejs:copper_brush_wax":  
            if((area.xsize+1)*(area.ysize+1)*(area.zsize+1) > 1024){
              status = "Area too big!";
              color = brushColors.errored;
              break;
            }

            let broken;

            let creativeMode = player.isCreative();

            regionloop: for(let lx = area.minX; lx <= area.maxX; lx++){ 
              for(let ly = area.minY; ly <= area.maxY; ly++){ 
                for(let lz = area.minZ; lz <= area.maxZ; lz++){
                  

                  if(global.waxable[target_block.level.getBlock(lx,ly,lz).id]){
                    //stop if you run out of durability
                    if(!creativeMode && damage+transformCount >= item.getMaxDamage()){
                      // this is a cool feature i like it.
                      broken = true;
                      break regionloop;
                    }
                    transformCount++;
                  }
                }
              }
            }

            if(transformCount==0){
              status = "info.kubejs.copper_brush.nothing_waxable";
              success = false
              color = brushColors.inactive;
            } else {
              if(broken){
                status = "info.kubejs.copper_brush.insufficient_durability"
                success = true
                color = brushColors.errored;
              }else{
                status = "info.kubejs.copper_brush.all_good"
                success = true
                color = brushColors.wax;
              }
            }
            break;
        }
      }

      let data = NBT.compoundTag()
      data.putInt("transform_count", transformCount);
      data.putBoolean("success", success);
      data.putString("status", status);
      data.putInt("color", color.argbJS);
      player.sendData("brush_state_change", data);
    }
  }
}

function sendBrushResult(player,status,color,transform_count){
  let data = NBT.compoundTag()
  data.putInt("transform_count",transform_count);
  data.putString("status", status);
  data.putInt("color", color.argbJS);
  player.sendData("brush_result",data);
}

PlayerEvents.tick(event => {
  if(event.server.tickCount%10){
    processBrushPreview(event.player)
  }
})

ServerEvents.recipes(e=>{
  let newWaxable = {};
  e.forEachRecipe({"input":"minecraft:honeycomb","output":/^[^:]+:waxed/},recipe=>{
    let inputId =  recipe.originalRecipe.getIngredients().get(0).itemIds[0]
    let outputId = recipe.originalRecipe.resultItem.id
    if(!outputId.match("_door")){
      newWaxable[inputId] = outputId
    }
  })
  Ingredient.of(/^kubejs:waxed/).itemIds.forEach(i=>{
    let unwaxed = Item.of(i.replace("waxed_",""))
    if(unwaxed.id !== "minecraft:air") newWaxable[unwaxed.id] = i
  })
  global.waxable = newWaxable;
})

BlockEvents.rightClicked(event=>{
  if(!global.waxable){
    Utils.server.tell(Text.red("ERROR: no waxing recipes stored!"))
    return;
  }
  if(event.item.id !== "kubejs:copper_brush_wax") return;
  if(event.block.id == "farmersdelight:cutting_board") return;
  if(event.block.id == "create:deployer") return;
  
  event.player.swing(event.hand, true)
  event.player.addItemCooldown(event.item,5);
  let block = event.block;
  let nbt = event.item.nbt

  let damage = event.item.getDamageValue()

  if(event.item.nbt.contains("pos")){
    if(!event.player.isCrouching()){
      let transformCount = 0;
      let creativeMode = event.player.isCreative();
      let broken;
  
      let [x,y,z] = nbt.getIntArray("pos")
  
      let area = AABB.of(x,y,z,block.x,block.y,block.z)

      if((area.xsize+1)*(area.ysize+1)*(area.zsize+1) > 1024){
        sendBrushResult(event.player,"info.kubejs.copper_brush.fail_too_big",brushColors.errored,0)
      }else{
        regionloop: for(let lx = area.minX; lx <= area.maxX; lx++){ 
          for(let ly = area.minY; ly <= area.maxY; ly++){ 
            for(let lz = area.minZ; lz <= area.maxZ; lz++){
  
              let iterBlock = event.level.getBlock(lx,ly,lz)
              if(global.waxable[iterBlock.id]){
                transformCount++;
                iterBlock.set(global.waxable[iterBlock.id],iterBlock.properties)
                event.level.spawnParticles("minecraft:wax_on",true,
                  lx+0.5,ly+0.5,lz+0.5, //position
                  0.5,0.5,0.5, //variation
                  10, //count
                  0.1 //speed
                )
                //stop if you run out of durability
                if(!creativeMode && damage+transformCount >= event.item.getMaxDamage()){
                  // this is a cool feature i like it.
                  broken = true;
                  break regionloop;
                }
              }
    
            }
          }
        } //end of looping over region
        
        if(transformCount>0){
          if(!creativeMode) event.player.damageHeldItem(event.hand,transformCount);
          sendBrushResult(event.player,broken?"info.kubejs.copper_brush.partial_success":"info.kubejs.copper_brush.success",brushColors.wax,transformCount)
          let center = area.center;
          event.level.runCommandSilent(`/playsound minecraft:item.honeycomb.wax_on block @a ${center.x()} ${center.y()} ${center.z()} 1 1 1`)
        }else{
          sendBrushResult(event.player,"info.kubejs.copper_brush.did_nothing",brushColors.inactive,0)
        }
      }


      

      nbt.remove("pos")
    }else{
      sendBrushResult(event.player,"info.kubejs.copper_brush.dismiss",brushColors.inactive,0)
      nbt.remove("pos")
    }
  }else{
    nbt.putIntArray("pos",[block.x,block.y,block.z])
  }
  processBrushPreview(event.player)
  event.item.nbt = nbt
})