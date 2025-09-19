// priority: 0
StartupEvents.registry('item', event => {
// Tools
	event.create('rose_gold_rapier', 'farmersdelight:knife').group('combat').tier('rosegold').attackDamageBaseline(0).speedBaseline(0.0)
	event.create('rose_gold_knife', 'farmersdelight:knife').group('combat').tier('rosegold').attackDamageBaseline(1.5).speedBaseline(-2.0)
	event.create('copper_knife', 'farmersdelight:knife').group('combat').tier('copper').attackDamageBaseline(0).speedBaseline(-2.0)
	event.create('bone_knife', 'farmersdelight:knife').group('combat').tier('bone').attackDamageBaseline(0).speedBaseline(-2.0)
	
// Items
	event.create('raw_ammonite').group('misc')
	event.create('oats').group('misc')
	event.create('corn_flour').group('misc')
	event.create('cloth_scrap').group('misc')
	event.create('latex_bottle').group('misc')
	event.create('batter').group('misc')
	event.create('rubber').group('misc')
	event.create('loot_bag').maxStackSize(1).rarity('uncommon').group('misc')
	event.create('copper_brush').maxStackSize(1).maxDamage(200).group('tools')
	event.create('charcoal_lump').burnTime(200).group('misc')
	event.create('rose_gold_nugget').group('misc')
	event.create('rough_quartz_shard').group('misc')
	event.create('quartz_shard').group('misc')
	event.create('stardust').glow(true).rarity('rare').group('misc')
	
	event.create('dwarf_geode').group('misc')
	event.create('deepslate_dwarf_geode').group('misc')
	event.create('blackstone_dwarf_geode').group('misc')
	
// Food & drinks
	// Regular
	event.create('apple_slices').group('food').food(food => {
		food
    		.hunger(1)
    		.saturation(0.05)
			.fastToEat()
        	})
	event.create('cooked_fish').group('food').food(food => {
		food
    		.hunger(7)
    		.saturation(0.5)
        	})
	event.create('crystalfish').group('food').rarity('rare').food(food => {
		food
    		.hunger(4)
    		.saturation(0.8)
			.effect('water_breathing', 7200, 0, 1)
			.effect('dolphins_grace', 3600, 0, 1)
			.alwaysEdible()
        	})
	event.create('spoiled_carrot').group('food').food(food => {
		food
    		.hunger(1)
    		.saturation(0.4)
			.effect('blindness', 900, 0, 0.5)
			.effect('autumnity:foul_taste', 140, 0, 1)
        	})
	event.create('cinnamon').group('food').food(food => {
		food
			.effect('kubejs:coughing', 100, 0, 1)
			.alwaysEdible()
        	})
	event.create('cinnamon_roll').group('food').food(food => {
		food
    		.hunger(6)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 3000, 0, 1)
        	})
	event.create('cinnamon_cracker').group('food').food(food => {
		food
    		.hunger(2)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 400, 0, 0.1)
			.fastToEat()
        	})
	event.create('sugar_cookie').group('food').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('oat_cookie').group('food').food(food => {
		food
    		.hunger(2)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('candy_cane').group('food').food(food => {
		food
    		.hunger(2)
    		.saturation(0.3)
			.effect('neapolitan:sugar_rush', 200, 0, 1)
			.alwaysEdible()
			.fastToEat()
        	})
	event.create('butterscotch_cinnamon_pie_slice').group('food').food(food => {
		food
    		.hunger(3)
    		.saturation(0.65)
			.effect('farmersdelight:comfort', 6000, 0, 1)
			.fastToEat()
        	})
	event.create('prickly_pear_pie_slice').group('food').food(food => {
		food
    		.hunger(3)
    		.saturation(0.3)
			.effect('windswept:thorns', 600, 2, 1)
			.fastToEat()
        	})
	event.create('kipper_sandwich').group('food').food(food => {
		food
    		.hunger(12)
    		.saturation(0.8)
			.effect('water_breathing', 1200, 0, 1)
			.effect('kubejs:satiation', 1200, 0, 1)
        	})
	event.create('squid_sandwich').group('food').food(food => {
		food
    		.hunger(11)
    		.saturation(0.6)
			.effect('kubejs:satiation', 600, 0, 1)
        	})
	event.create('cave_burger').group('food').food(food => {
		food
    		.hunger(10)
    		.saturation(0.7)
			.effect('kubejs:satiation', 600, 0, 1)
        	})
	event.create('crab_meat').group('food').food(food => {
		food
    		.hunger(2)
    		.saturation(0.2)
			.effect('hunger', 600, 0, 0.3)
        	})
	event.create('oat_bar').group('food').food(food => {
		food
    		.hunger(5)
    		.saturation(0.65)
			.effect('neapolitan:agility', 400, 0, 1)
        	})
	event.create('bat_rolls').group('food').food(food => {
		food
    		.hunger(7)
    		.saturation(0.6)
			.effect('nausea', 600, 0, 0.5)
        	})
	event.create('sporedough').group('food').food(food => {
		food
    		.hunger(6)
    		.saturation(0.915)
			.alwaysEdible()
        	})
	event.create('golden_strawberries').group('food').rarity('uncommon').food(food => {
		food
    		.hunger(2)
    		.saturation(1.25)
			.alwaysEdible()
        	})
	event.create('maple_glazed_chestnuts').group('food').food(food => {
		food
    		.hunger(4)
    		.saturation(0.5)
			.effect('resistance', 240, 0, 1)
			.fastToEat()
        	})
	event.create('maple_toast').group('food').food(food => {
		food
    		.hunger(4)
    		.saturation(0.7)
			.effect('resistance', 340, 0, 1)
        	})
	event.create('cheesy_chip_wrap').group('food').food(food => {
		food
    		.hunger(10)
    		.saturation(0.8)
			.effect('kubejs:satiation', 600, 0, 1)
        	})
	event.create('smore').group('food').food(food => {
		food
    		.hunger(9)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 3000, 0, 1)
        	})
	event.create('neapolitan_ice_cream_sandwich').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 1)
			.effect('instant_health', 1, 0, 1)
			.effect('neapolitan:sugar_rush', 1200, 1, 1)
			.effect('neapolitan:vanilla_scent', 1200, 0, 1)
        	})
	event.create('respiteful_ice_cream_sandwich').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 1)
			.effect('respiteful:vitality', 1800, 0, 1)
			.effect('respiteful:tenacity', 1800, 0, 1)
			.effect('respiteful:maturity', 1800, 0, 1)
        	})
	event.create('prismatic_ice_cream_sandwich').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 1)
			.effect('neapolitan:agility', 1600, 0, 1)
			.effect('neapolitan:harmony', 900, 0, 1)
			.effect('neapolitan:berserking', 1900, 0, 1)
        	})
	
	// Bowl
	event.create('corn_fritters').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(6)
    		.saturation(0.7)
			.effect('kubejs:satiation', 1800, 0, 1)
        	})
	event.create('oatmeal').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(4)
    		.saturation(0.65)
			.effect('farmersdelight:comfort', 600, 0, 1)
        	})
	event.create('mixed_oatmeal').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(10)
    		.saturation(0.85)
			.effect('farmersdelight:comfort', 6000, 0, 1)
        	})
	event.create('turkey_stew').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(11)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 3600, 0, 1)
        	})
	event.create('mutton_udon').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 6000, 0, 1)
        	})
	event.create('squid_stir_fry').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.6)
			.effect('kubejs:satiation', 3600, 0, 1)
        	})
	event.create('pasta_with_turkey').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.75)
			.effect('kubejs:satiation', 5400, 0, 1)
        	})
	event.create('cinnamon_mint_curry').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.75)
			.effect('neapolitan:berserking', 900, 0, 1)
			.effect('kubejs:satiation', 4800, 0, 1)
        	})
	event.create('spicy_crab_cakes').group('food').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.8)
			.effect('mynethersdelight:b_pungent', 2400, 0, 1)
			.effect('kubejs:satiation', 6000, 0, 1)
        	})
	event.create('coconut_crusted_gar').group('food').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.7)
			.effect('mynethersdelight:b_pungent', 900, 0, 1)
			.effect('kubejs:satiation', 4800, 0, 1)
        	})
	event.create('eggplant_parmesan').group('food').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.75)
			.effect('kubejs:satiation', 6000, 0, 1)
        	})
	event.create('takoyaki').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.7)
			.effect('kubejs:satiation', 4200, 0, 1)
        	})
	event.create('glow_ink_pasta').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.75)
			.effect('kubejs:satiation', 6900, 0, 1)
			.effect('glowing', 3000, 0, 1)
        	})
	event.create('white_fish_soup').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(9)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 3600, 0, 1)
        	})
	event.create('tambaqui_curry').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.7)
			.effect('kubejs:satiation', 4800, 0, 1)
        	})
	event.create('pollock_with_vegetables').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.75)
			.effect('kubejs:satiation', 3000, 0, 1)
        	})
	event.create('pasta_with_tuna').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.8)
			.effect('kubejs:satiation', 4800, 0, 1)
        	})
	event.create('rollmops').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(14)
    		.saturation(0.6)
			.effect('kubejs:satiation', 2400, 0, 1)
        	})
	event.create('prismatic_ice_cream').group('food').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.4)
			.effect('neapolitan:agility', 1000, 0, 1)
			.effect('neapolitan:harmony', 400, 0, 1)
			.effect('neapolitan:berserking', 1200, 0, 1)
			.effect('cofh_core:chilled', 140, 0, 1)
        	})
	event.create('cat_food').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(3)
    		.saturation(0.3)
        	})
	
	// Stick
	event.create('caramelized_marshmellow_on_a_stick').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(6)
			.saturation(0.4)
			.effect('farmersdelight:comfort', 1800, 0, 1)
			.alwaysEdible()
        	})
	event.create('preserved_skewer').group('food').food(food => {
		food
    		.hunger(12)
			.saturation(0.8)
			.effect('water_breathing', 900, 0, 1)
			.effect('mynethersdelight:b_pungent', 400, 1, 1)
        	})
	
	// Bottle
	event.create('cactus_juice').group('food').containerItem('minecraft:glass_bottle').maxStackSize(64).food(food => {
		food
    		.effect('windswept:thorns', 3600, 1, 1)
    		.effect('nausea', 400, 0, 0.25)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('cherry_cream_soda').group('food').containerItem('minecraft:glass_bottle').maxStackSize(64).food(food => {
		food
    		.effect('neapolitan:harmony', 800, 0, 1)
    		.effect('neapolitan:vanilla_scent', 600, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('pickerelweed_juice').group('food').containerItem('minecraft:glass_bottle').maxStackSize(64).food(food => {
		food
    		.effect('water_breathing', 900, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('builders_tea').group('food').containerItem('minecraft:glass_bottle').maxStackSize(64).food(food => {
		food
    		.effect('haste', 6000, 0, 1)
    		.effect('respiteful:maturity', 600, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
			
	// Tankard
	event.create('soulstice_sake').group('food').food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 1)
			.effect('slow_falling', 3300, 0, 1)
			.effect('upgrade_aquatic:restfulness', 1, 1, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('buzzing_bourbon').group('food').food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 1)
			.effect('buzzier_bees:sunny', 9000, 0, 1)
			.effect('upgrade_aquatic:vibing', 3600, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('prickly_gin').group('food').food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 1, 1)
			.effect('windswept:thorns', 9000, 5, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('foul_fernet').group('food').food(food => {
		food
    		.effect('brewinandchewin:tipsy', 12000, 2, 1)
			.effect('autumnity:foul_taste', 12000, 2, 1)
			.effect('neapolitan:berserking', 3600, 0, 1)
			.alwaysEdible()
        	})
		.useAnimation("drink")
			
	// Joke
	event.create('raspberry_sprite').rarity('epic').food(food => {
		food
    		.hunger(4)
    		.saturation(0.45)
        	})
		.useAnimation("drink")
	event.create('star_berry').rarity('epic').food(food => {
		food
    		.hunger(2)
    		.saturation(0.9)
			.effect('regeneration', 600, 0, 1)
			.effect('upgrade_aquatic:vibing', 600, 0, 1)
        	})
	event.create('yoyleberry').rarity('epic').food(food => {
		food
    		.hunger(2)
    		.saturation(0.9)
			.effect('regeneration', 6000, 0, 1)
			.effect('resistance', 6000, 0, 1)
			.effect('strength', 6000, 0, 1)
			.effect('cofh_core:cold_resistance', 6000, 0, 1)
			.effect('cofh_core:magic_resistance', 6000, 0, 1)
			.effect('savage_and_ravage:weight', 6000, 0, 1)
        	})
//	event.create('stoup').maxStackSize(16).rarity('rare').food(food => {
//		food
//    		.hunger(2)
//    		.saturation(1.2)
//			.effect('instant_damage', 1, 1, 1)
//			.effect('savage_and_ravage:weight', 600, 5, 1)
//        	})
})