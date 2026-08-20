// priority: 0

// main

// potion advancement
PlayerEvents.inventoryChanged(event => {
	if (event.item.hasTag('raspberry_flavoured:potions') && event.item.nbt.Potion !== "minecraft:water" && event.item.nbt.Potion !== "minecraft:awkward") {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:main/potion`)
	}
})

// exploration

// bomb advancement & creeper spores advancement
ItemEvents.rightClicked(event => {
  if (event.item.id === 'savage_and_ravage:creeper_spores') {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:exploration/creeper_spores`)
  }
  if (event.item.hasTag('raspberry_flavoured:bombs')) {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:exploration/bomb`)
  }
})

// fragile stone advancement
BlockEvents.broken(event => {
  if (event.block.hasTag('raspberry_flavoured:fragile_blocks')) {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:exploration/fragile_stone`)
  }
})

// weather cycle advancement
BlockEvents.rightClicked(event => {
  if (event.block.id === 'supplementaries:wind_vane' && event.item.id === 'savage_and_ravage:wand_of_freezing') {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:exploration/weather_cycle`)
  }
})