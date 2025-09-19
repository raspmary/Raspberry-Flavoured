// script by asof

let {CreateClient, SpecialTextures} = global.java.create;

let brushState = {
  transformCount: 0,
  visCount: 0,
  success: false,
  status: "???",
  color: Color.MAGENTA_DYE
}
NetworkEvents.dataReceived("brush_state_change", event => {
  brushState.transformCount = event.getData().getInt("transform_count");
  brushState.success = event.getData().getBoolean("success");
  brushState.status = event.getData().getString("status");
  brushState.color = Color.of(event.getData().getInt("color"));
});

NetworkEvents.dataReceived("brush_result",event=>{
  brushState.transformCount = event.getData().getInt("transform_count");
  brushState.status = event.getData().getString("status");
  brushState.color = Color.of(event.getData().getInt("color"));
  event.player.setStatusMessage(
    Text.translate(brushState.status,Text.yellow(brushState.transformCount.toFixed(0)))
    .color(brushState.color)
  );
})

ClientEvents.tick(event => {
  for(let item of [event.player.mainHandItem,event.player.offHandItem]){
    if (item.id == "kubejs:copper_brush_wax") {
      if(brushState.status == "???") return;
      
      let target_block = event.player.rayTrace(5, false).block;

      if(target_block == null) return;
      if(!item.nbt.contains("pos")) return;
      
      let [x,y,z] = item.nbt.getIntArray("pos");


      brushState.visCount = brushState.visCount*0.4 + brushState.transformCount*0.6
      event.player.setStatusMessage(
        Text.translate(brushState.status,Text.yellow(brushState.visCount.toFixed(0)))
        .color(brushState.color)
      );

      let box = AABB.of(
        Math.min(target_block.x,x),
        Math.min(target_block.y,y),
        Math.min(target_block.z,z),
        Math.max(target_block.x,x)+1,
        Math.max(target_block.y,y)+1,
        Math.max(target_block.z,z)+1
      )

      CreateClient.OUTLINER.showAABB("wax", box)
      .colored(brushState.color.getRgbJS())
      .withFaceTextures(SpecialTextures.GLUE, SpecialTextures.GLUE)
      .disableLineNormals()
      .disableCull()
      .lineWidth(0.07)
    }
  }
});