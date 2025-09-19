// priority: 0

// Misc. food events
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
ItemEvents.foodEaten('cookscollection:cooking_oil', event =>{
	let rainCheck = event.level.isRaining()
	let thunderCheck = event.level.isThundering()
	if (rainCheck === true || thunderCheck === true) {
		event.player.potionEffects.add('minecraft:levitation', 200, 0, true, false)
	}
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
	'respiteful:snow_top_coffee'
	], event =>{
	event.player.setRemainingFireTicks(0)
})

// Returns stick
ItemEvents.foodEaten([
	'kubejs:caramelized_marshmellow_on_a_stick',
	'kubejs:preserved_skewer',
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

// Returns blaze rod
ItemEvents.foodEaten([
	'mynethersdelight:spicy_skewer'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:blaze_rod')
		})
	}
})

// Returns bowl
ItemEvents.foodEaten([
	'kubejs:corn_fritters',
	'kubejs:oatmeal',
	'kubejs:mixed_oatmeal',
	'kubejs:squid_stir_fry',
	'kubejs:turkey_stew',
	'kubejs:pasta_with_turkey',
	'kubejs:mutton_udon',
	'kubejs:cinnamon_mint_curry',
	'kubejs:eggplant_parmesan',
	'kubejs:prismatic_ice_cream',
	'kubejs:cat_food',
//	'kubejs:stoup',
	'kubejs:takoyaki',
	'kubejs:glow_ink_pasta',
	'kubejs:white_fish_soup',
	'kubejs:tambaqui_curry',
	'kubejs:pollock_with_vegetables',
	'kubejs:pasta_with_tuna',
	'kubejs:rollmops',
	'kubejs:spicy_crab_cakes',
	'kubejs:coconut_crusted_gar'
	], event => {
		if (!event.player.isCreative()) {
			event.server.schedule(1, callback => {
				event.player.giveInHand('minecraft:bowl')
		})
	}
})

// Returns glass bottle
ItemEvents.foodEaten([
	'kubejs:cactus_juice',
	'kubejs:cherry_cream_soda',
	'kubejs:pickerelweed_juice',
	'kubejs:builders_tea'
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
})