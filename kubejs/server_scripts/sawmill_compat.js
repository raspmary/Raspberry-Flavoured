// script by asof

/*
ok, so.
"WOOD" gets swapped out for stuff like "spruce, oak, river..."
"MOD" gets swapped out for the mod namespace the woodtype is from, e.g. "minecraft, atmospheric, quark..."
when there's an array, it means "try every single one of these in order til one reaches a valid item"
*/

/**
 * documenting it so it gets hinted properly
 * @type {[ material: string, outputCount: number, outputItem: string | string[], mods: string[] ][]}
 */
let outputTypes = [
  ["log",4,"WOOD_trapdoor",["MOD:"]],
  ["log",4,"WOOD_door",["MOD:"]],
  ["log",4,["WOOD_stairs","WOOD_planks_stairs"],["MOD:"]],
  ["log",8,["WOOD_slab","WOOD_planks_slab"],["MOD:"]],
  ["log",4,"WOOD_sign",["MOD:"],"incomplete"],
  ["log",3,"WOOD_post",["quark:","MOD:","everycomp:q/MOD/"]],
  ["log",8,"WOOD_fence",["MOD:"]],
  ["log",8,"WOOD_railing",["architects_palette:","everycomp:ap/MOD/"]],

  //god is dead.
  //["log",4,"WOOD_boards",["architects_palette:","everycomp:ap/MOD/"],"incomplete"],
  
  //these ones look nicer, and some wierd bug is making these two not able to register at once.
  ["log",4,"WOOD_boards",["woodworks:","MOD:","everycomp:abnww/MOD/"],"incomplete"],

  ["log",4,"WOOD_fence_gate",["MOD:"]],
  ["log",1,"WOOD_boat",["MOD:","boatload:"],"incomplete"],
  ["log",8,"sign_post_WOOD",["supplementaries:","supplementaries:MOD/"]],
  ["log",1,"hollow_WOOD_log",["quark:","everycomp:q/MOD/"],"incomplete"],
  ["log",1,"WOOD_cabinet",["farmersdelight:","MOD:","abnormals_delight:","everycomp:fd/MOD/"]],
  
  //this bit's nice. no conficts here!
  ["log",1,"WOOD_drawer",["another_furniture:","everycomp:af/MOD/"]],
  ["log",2,"WOOD_table",["another_furniture:","everycomp:af/MOD/"]],
  ["log",4,"WOOD_shutter",["another_furniture:","everycomp:af/MOD/"]],
  ["log",4,"WOOD_shelf",["another_furniture:","everycomp:af/MOD/"]],
  ["log",4,"WOOD_chair",["another_furniture:","everycomp:af/MOD/"]],
  ["log",2,"WOOD_bench",["another_furniture:","everycomp:af/MOD/"]]
]

for(let recipe of outputTypes){
  //convert single strings into arrays with a single element, so we can always use a for loop to iterate over them.
  if(typeof recipe[2] == "string") recipe[2] = [recipe[2]]

  //log recipes with output counts divisible by 4 can be pretty easily converted to plank recipes.
  if(recipe[0] == "log" && recipe[1]%4 == 0){
    //Object.assign is the easiest way to clone an array in this version of javascript.
    let editedRecipe = Object.assign([],recipe)
    editedRecipe[0] = "plank"
    editedRecipe[1] /= 4
    outputTypes.push(editedRecipe)
  }
}

//uses this format for compatability with /kjs inventory. just fill your inventory up with planks and run the command to get a new thing to paste here.
let woodtypes = ['minecraft:oak_planks', 'minecraft:spruce_planks', 'minecraft:jungle_planks', 'minecraft:birch_planks', 'minecraft:acacia_planks', 'minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:crimson_planks', 'minecraft:warped_planks', 'windswept:chestnut_planks', 'ecologics:coconut_planks', 'ecologics:azalea_planks', 'architects_palette:twisted_planks', 'environmental:willow_planks', 'environmental:cherry_planks', 'environmental:wisteria_planks', 'upgrade_aquatic:driftwood_planks', 'autumnity:maple_planks', 'atmospheric:rosewood_planks', 'atmospheric:morado_planks', 'atmospheric:yucca_planks', 'quark:bamboo_planks', 'mynethersdelight:powdery_planks']

woodtypes = woodtypes.map(i=>{
  let [mod,plankId] = i.split(":")
  //chop out the name of the wood from the planks using a lookahead. i'm not explaining all of regex here.
  return [mod,plankId.match(/.+(?=_planks)/)]
})

// used to catch bugs early, and give clearer error messages. Causes a kubejs error if passed a falsey argument.
function assert(condition,message){
  if(!condition){
    throw new Error(message)
  }
}

ServerEvents.recipes(e=>{
  //kind of a nuclear option, sorry.
  e.remove({type:"woodworks:sawmill"})

  //event.custom basically acts like json recipes, pretty convenient if there's no addon.
  function addSawmill(material,count,result){
    let recipe = {
      "type": "woodworks:sawmill",
      "count": count,
      "ingredient": material.toJson(),
      "result": result.id
    }
    return e.custom(recipe)
  }

  //these ones aren't wood-dependant, so they're done without the larger system
  addSawmill(Ingredient.of("#minecraft:logs"),8,Item.of("minecraft:stick"))
  addSawmill(Ingredient.of("#minecraft:planks"),2,Item.of("minecraft:stick"))
  
  woodtypes.forEach(([originMod,woodType])=>{
    //console.log(`wood type! ${originMod}:${woodType}`)
    for(let [material,outputCount,outputs,mods,incomplete] of outputTypes){
      //stores the ingredient ultimately being used for the sawing recipe.
      let inputItem
      //tracks if the log is a "stem", like the warped and crimson fungus logs.
      let isStem
  
      if(material=="log"){
        //for logs, generate the "#mod:wood_logs" tag, which is mercifully standardized across all *mods* in RF.
        inputItem = Ingredient.of(`#${originMod}:${woodType}_logs`)
        if(inputItem.itemIds.length == 0){
          //wait. CURSE YOU MOJANG. there's also "stems".
          inputItem = Ingredient.of(`#${originMod}:${woodType}_stems`)
          isStem = true;
        }
      }else if(material=="plank"){
        //same for the planks
        inputItem = Ingredient.of(`${originMod}:${woodType}_planks`)
      }
      //console.log(inputItem.itemIds)
  
      //invalid tags show up as an empty list of valid ingredients.
      assert(inputItem.itemIds.length > 0,`empty tag for mod "${originMod}", wood type "${woodType}", did you mistype something?`)
      //single invalid item ingredients show up as a barrier, for whatever reason.
      assert(inputItem.itemIds[0] != "minecraft:barrier",`mod "${originMod}" has no wood type "${woodType}", did you mistype something?`)
  
      let result;

      //for each mod prefix, combine the id with the potential prefix (to deal with the fact that a particular item can come from like one of three mods)
      for(let mod of mods){
        //do the same for every potential id (to deal with bamboo_planks_stairs vs spruce_stairs, for example.)
        for(let output of outputs){
          let id = mod.replace("MOD",originMod)+output.replace("WOOD",woodType).replace("log",isStem?"stem":"log")
          result = Item.of(id)
          //if it's not air, it's a valid item, we can stop looking
          if(result.id != "minecraft:air") break
        }
        //if it's not air, it's a valid item, we can stop looking
        if(result.id != "minecraft:air") break
      }

      //if it is still air after all that searching, and that product was supposed to be complete, it means that some part was wrong.
      if(!incomplete){
        assert(result.id != "minecraft:air", `result item "${outputs.join(",")}" doesn't seem to exist for "${originMod}:${woodType}", did you mistype something?`)
      }
  
      //create the sawmill recipe.
      addSawmill(inputItem,outputCount,result)
        .id(`raspberry_flavoured:sawmill_${woodType}_${outputs[0].toLowerCase()}_${material}`)
    }
  })
})