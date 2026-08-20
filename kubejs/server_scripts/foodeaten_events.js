// priority: 0

// Misc. food events
ItemEvents.foodEaten('kubejs:sporedough', event =>{
	event.entity.block.createExplosion().strength(0.775).damagesTerrain(false).explode()
})
ItemEvents.foodEaten('create:blaze_cake', event =>{
	event.player.setRemainingFireTicks(400)
})
ItemEvents.foodEaten('cookscollection:cooking_oil', event =>{
	let rainCheck = event.level.isRaining()
	let thunderCheck = event.level.isThundering()
	if (rainCheck === true || thunderCheck === true) {
		event.player.potionEffects.add('minecraft:levitation', 100, 0, true, false)
	}
})

// Food cooldowns
const strawberryFood = [
	'neapolitan:strawberries',
	'neapolitan:white_strawberries',
	'neapolitan:strawberry_scones',
	'neapolitan:strawberry_ice_cream',
	'neapolitan:strawberry_milkshake',
	'neapolitan:chocolate_strawberries',
	'neapolitan:strawberry_banana_smoothie',
	'abnormals_delight:strawberry_cake_slice'
]
ItemEvents.foodEaten(event => {
	if (strawberryFood.includes(event.item.id)) {
    	event.player.addItemCooldown(event.item.id, 60)
	}
})

ItemEvents.foodEaten('minecraft:golden_carrot', event =>{
    event.player.addItemCooldown('minecraft:golden_carrot', 30)
})
ItemEvents.foodEaten('minecraft:glistering_melon_slice', event =>{
	event.player.heal(2)
    event.player.addItemCooldown('minecraft:glistering_melon_slice', 60)
})
ItemEvents.foodEaten('minecraft:golden_apple', event =>{
    event.player.addItemCooldown('minecraft:golden_apple', 100)
})
ItemEvents.foodEaten('kubejs:golden_strawberries', event =>{
	event.player.heal(4)
    event.player.addItemCooldown('kubejs:golden_strawberries', 140)
})
ItemEvents.foodEaten('minecraft:enchanted_golden_apple', event =>{
    event.player.addItemCooldown('minecraft:enchanted_golden_apple', 240)
})

// Make custom BnC drinks apply increasing tipsy effect
ItemEvents.foodEaten(['kubejs:soulstice_sake', 'kubejs:buzzing_bourbon'], event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 1)
			if (nbt.Duration < 6000) {
				nbt.Duration = 6000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})
ItemEvents.foodEaten('kubejs:prickly_gin', event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 2)
			if (nbt.Duration < 6000) {
				nbt.Duration = 6000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})
ItemEvents.foodEaten('kubejs:foul_fernet', event =>{
	event.player.activeEffects.forEach(effect => {
		if (effect.descriptionId == 'effect.brewinandchewin.tipsy' && effect.amplifier < 9) {
			let nbt = effect.save({})
			nbt.Amplifier = NBT.b(nbt.Amplifier + 3)
			if (nbt.Duration < 12000) {
				nbt.Duration = 12000
			}
			let newInstance = effect.load(nbt)
			event.player.forceAddEffect(newInstance, event.player)
		}
	})
})

// Fire extinguishing foods
ItemEvents.foodEaten([
	'abnormals_delight:dune_platter',
	'kubejs:foul_fernet',
	'kubejs:prismatic_ice_cream',
	'kubejs:neapolitan_ice_cream_sandwich',
	'kubejs:respiteful_ice_cream_sandwich',
	'kubejs:prismatic_ice_cream_sandwich',
	'neapolitan:vanilla_ice_cream',
	'neapolitan:vanilla_milkshake',
	'neapolitan:banana_ice_cream',
	'neapolitan:banana_milkshake',
	'neapolitan:mint_ice_cream',
	'neapolitan:mint_milkshake',
	'neapolitan:adzuki_ice_cream',
	'neapolitan:adzuki_milkshake',
	'neapolitan:strawberry_ice_cream',
	'neapolitan:strawberry_milkshake',
	'neapolitan:chocolate_ice_cream',
	'neapolitan:chocolate_milkshake',
	'respiteful:green_tea_ice_cream',
	'respiteful:yellow_tea_ice_cream',
	'respiteful:black_tea_ice_cream',
	'respiteful:coffee_ice_cream',
	'respiteful:snow_top_green_tea',
	'respiteful:snow_top_yellow_tea',
	'respiteful:snow_top_black_tea',
	'respiteful:snow_top_coffee',
	'kubejs:snow_top_green_tea',
	'kubejs:snow_top_yellow_tea',
	'kubejs:snow_top_black_tea',
	'kubejs:snow_top_coffee',
	'kubejs:lemon_fudge',
	'minecraft:chorus_fruit'
	], event =>{
	event.player.setRemainingFireTicks(0)
})

// Returns stick
ItemEvents.foodEaten([
	'raspberry:marshmallow_on_a_stick',
	'raspberry:caramelized_marshmallow_on_a_stick',
	'raspberry:charred_marshmallow_on_a_stick',
	'kubejs:incomplete_marshmallow_stick',
	'kubejs:preserved_skewer',
	'kubejs:incomplete_preserved_skewer',
	'farmersdelight:melon_popsicle',
	'kubejs:incomplete_melon_popsicle',
	'farmersdelight:barbecue_stick',
	'kubejs:incomplete_meat_skewer',
	'miners_delight:improvised_barbecue_stick',
	'kubejs:incomplete_lush_skewer',
	'culturaldelights:elote'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:stick')
		})
	}
})

// Returns blaze rod
ItemEvents.foodEaten([
	'mynethersdelight:spicy_skewer',
	'kubejs:incomplete_spicy_skewer'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:blaze_rod')
		})
	}
})

// Returns bowl
ItemEvents.foodEaten(event => {
	if (event.item.hasTag('raspberry_flavoured:all_bowl_foods') && event.item.id.includes('kubejs')) {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:bowl')
			})
		}
	}
})

// Returns bucket
ItemEvents.foodEaten([
	'kubejs:popcorn_bucket',
	'kubejs:incomplete_popcorn_bucket'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:bucket')
		})
	}
})

// Returns glass bottle
ItemEvents.foodEaten([
	'kubejs:cactus_juice',
	'kubejs:cherry_cream_soda',
	'kubejs:pickerelweed_juice',
	'kubejs:builders_tea',
	'kubejs:avocado_lemon_smoothie',
	'kubejs:snow_top_green_tea',
	'kubejs:snow_top_yellow_tea',
	'kubejs:snow_top_black_tea',
	'kubejs:snow_top_coffee'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:glass_bottle')
		})
	}
})

// Returns tankard
ItemEvents.foodEaten([
	'kubejs:soulstice_sake',
	'kubejs:buzzing_bourbon',
	'kubejs:prickly_gin',
	'kubejs:foul_fernet'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('brewinandchewin:tankard')
		})
	}
})

// Thrasher jumping alt. fix (by grom_pe)
ItemEvents.foodEaten(event => {
	if (event.player) {
		event.player.jumping = false;
	}

//ItemEvents.foodEaten('minecraft:apple', event =>{
//    event.server.runCommandSilent(`spreadplayers ${event.player.x} ${event.player.z} 0 8 false ${event.player.username}`)
//})
})