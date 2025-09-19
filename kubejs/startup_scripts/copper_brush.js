// script by asof

StartupEvents.registry("item",event => {
  event.create("kubejs:copper_brush_wax")
    .maxDamage(200)
	.group('tools')
})

//by @reveter from the kubejs discord
StartupEvents.postInit(event => {
  if (!Platform.isClientEnvironment()) return;
  const $ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemProperties')

  /*
  // for future reference:
  let addCountPredicate = [
    "minecraft:oak_log",
  ]

  addCountPredicate.forEach(i=>{
    $ItemProperties.register(Item.of(i), new ResourceLocation('count'), (stack, world, living, seed) => {
      return stack.getCount() / stack.getMaxStackSize()
    })
  })
  */

  $ItemProperties.register(Item.of("kubejs:copper_brush_wax"), new ResourceLocation('selecting'), (stack, world, living, seed) => {
      return stack.nbt.contains("pos") ? 1 : 0
  })
})