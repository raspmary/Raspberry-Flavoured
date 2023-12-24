// priority: 0

ItemEvents.foodEaten('minecraft:glistering_melon_slice', event =>{
	event.player.health += 2
})
ItemEvents.foodEaten('minecraft:golden_carrot', event =>{
	event.player.removeEffect('minecraft:blindness')
})
ItemEvents.foodEaten('buzzier_bees:honey_bread', event =>{
	event.player.removeEffect('minecraft:slowness')
})
ItemEvents.foodEaten('buzzier_bees:honey_bread', event =>{
	event.player.removeEffect('minecraft:weakness')
})
ItemEvents.foodEaten('buzzier_bees:honey_apple', event =>{
	event.player.removeEffect('minecraft:hunger')
})
ItemEvents.foodEaten('buzzier_bees:glazed_porkchop', event =>{
	event.player.removeEffect('minecraft:nausea')
})