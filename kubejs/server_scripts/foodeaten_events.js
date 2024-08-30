// priority: 0

ItemEvents.foodEaten('minecraft:glistering_melon_slice', event =>{
	event.player.heal(2)
})
ItemEvents.foodEaten('kubejs:mixed_oatmeal', event =>{
	event.player.heal(3)
})
ItemEvents.foodEaten('kubejs:golden_strawberries', event =>{
	event.player.heal(4)
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
ItemEvents.foodEaten('kubejs:sporedough', event =>{
	event.entity.block.createExplosion().strength(0.775).damagesTerrain(false).explode()
})
ItemEvents.foodEaten('create:blaze_cake', event =>{
	event.player.setRemainingFireTicks(400)
})

ItemEvents.foodEaten([
	'kubejs:caramelized_marshmellow_on_a_stick',
	'farmersdelight:melon_popsicle',
	'farmersdelight:barbecue_stick',
	'miners_delight:improvised_barbecue_stick',
	'culturaldelights:elote'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:stick')
		})
	}
})
ItemEvents.foodEaten([
	'mynethersdelight:spicy_skewer'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:blaze_rod')
		})
	}
})
ItemEvents.foodEaten([
	'kubejs:oatmeal',
	'kubejs:mixed_oatmeal',
	'kubejs:squid_stir_fry',
	'kubejs:turkey_chowder',
	'kubejs:pasta_with_turkey',
	'kubejs:mutton_udon',
	'kubejs:cinnamon_mint_curry',
	'kubejs:eggplant_parmesan',
	'kubejs:prismatic_ice_cream',
	'kubejs:cat_food',
	'kubejs:stoup'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:bowl')
		})
	}
})
ItemEvents.foodEaten([
	'kubejs:cactus_juice'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:glass_bottle')
		})
	}
})
ItemEvents.foodEaten([
	'kubejs:soulstice_sake',
	'kubejs:buzzing_bourbon',
	'kubejs:prickly_gin'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('brewinandchewin:tankard')
		})
	}
})