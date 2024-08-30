// priority: 0

StartupEvents.registry('item', event => {
// Tools
	event.create('rose_gold_rapier', 'farmersdelight:knife').group('combat').tier('rosegold').attackDamageBaseline(0).speedBaseline(0.0)
	event.create('rose_gold_knife', 'farmersdelight:knife').tier('rosegold').attackDamageBaseline(1.5).speedBaseline(-2.0)
	event.create('copper_knife', 'farmersdelight:knife').tier('copper').attackDamageBaseline(0).speedBaseline(-2.0)
	event.create('bone_knife', 'farmersdelight:knife').tier('bone').attackDamageBaseline(0).speedBaseline(-2.0).group('combat')
	
	event.create('lead_pickaxe', 'pickaxe').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('tools')
	event.create('lead_shovel', 'shovel').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('tools')
	event.create('lead_hoe', 'hoe').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('tools')
	event.create('lead_axe', 'axe').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('tools')
	event.create('lead_sword', 'sword').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('combat')
	event.create('lead_knife', 'farmersdelight:knife').tier('lead').attackDamageBaseline(0).speedBaseline(-2.0).group('combat')
	
// Items
	event.create('raw_ammonite')
	event.create('soul_salt')
	event.create('oats')
	event.create('corn_flour').group('misc')
	event.create('cloth_scrap').group('misc')
	event.create('loot_bag').maxStackSize(1).rarity('uncommon').group('misc')
	event.create('charcoal_lump').burnTime(200).group('misc')
	event.create('crowbar').maxStackSize(1).rarity('uncommon')
	
// Food & drinks
	event.create('spoiled_carrot').group('food').food(food => {
		food
    		.hunger(1)
    		.saturation(0.4)
			.effect('blindness', 900, 0, 0.5)
        	})
	event.create('cinnamon').food(food => {
		food
			.effect('kubejs:coughing', 100, 0, 100)
			.alwaysEdible()
        	})
	event.create('cinnamon_roll').food(food => {
		food
    		.hunger(6)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 3000, 0, 100)
        	})
	event.create('sugar_cookie').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('cinnamon_cracker').food(food => {
		food
    		.hunger(2)
    		.saturation(0.9)
			.fastToEat()
        	})
	event.create('candy_cane').food(food => {
		food
    		.hunger(2)
    		.saturation(0.3)
			.effect('neapolitan:sugar_rush', 200, 0, 100)
			.alwaysEdible()
			.fastToEat()
        	})
	event.create('caramelized_marshmellow_on_a_stick').maxStackSize(16).food(food => {
		food
    		.hunger(6)
			.saturation(0.4)
			.effect('farmersdelight:comfort', 1800, 0, 100)
			.alwaysEdible()
        	})
	event.create('butterscotch_cinnamon_pie_slice').food(food => {
		food
    		.hunger(3)
    		.saturation(0.65)
			.effect('speed', 1200, 0, 100)
			.effect('farmersdelight:comfort', 6000, 0, 100)
			.fastToEat()
        	})
	event.create('prickly_pear_pie_slice').group('food').food(food => {
		food
    		.hunger(3)
    		.saturation(0.3)
			.effect('speed', 600, 0, 100)
			.effect('windswept:thorns', 600, 0, 100)
			.fastToEat()
        	})
	event.create('kipper_sandwich').food(food => {
		food
    		.hunger(10)
    		.saturation(0.5)
			.effect('water_breathing', 1200, 0, 100)
			.effect('brewinandchewin:satisfaction', 1800, 0, 100)
        	})
	event.create('corn_fritters').food(food => {
		food
    		.hunger(5)
    		.saturation(0.7)
			.fastToEat()
        	})
	event.create('bass_slice').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('cooked_bass_slice').food(food => {
		food
    		.hunger(2)
    		.saturation(0.55)
			.fastToEat()
        	})
	event.create('bass_roll').food(food => {
		food
    		.hunger(7)
    		.saturation(0.6)
        	})
	event.create('crab_meat').food(food => {
		food
    		.hunger(2)
    		.saturation(0.2)
        	})
	event.create('oat_bar').food(food => {
		food
    		.hunger(5)
    		.saturation(0.65)
			.effect('neapolitan:agility', 400, 0, 100)
        	})
	event.create('oatmeal').maxStackSize(16).food(food => {
		food
    		.hunger(5)
    		.saturation(0.45)
			.effect('farmersdelight:comfort', 600, 0, 100)
        	})
	event.create('mixed_oatmeal').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(11)
    		.saturation(0.8)
			.effect('farmersdelight:comfort', 6000, 0, 100)
        	})
	event.create('squid_stir_fry').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.6)
			.effect('farmersdelight:comfort', 6000, 0, 100)
        	})
	event.create('turkey_chowder').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 7200, 0, 100)
        	})
	event.create('pasta_with_turkey').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.65)
			.effect('farmersdelight:comfort', 8400, 0, 100)
        	})
	event.create('mutton_udon').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.95)
			.effect('farmersdelight:comfort', 8400, 0, 100)
        	})
	event.create('cinnamon_mint_curry').maxStackSize(16).food(food => {
		food
    		.hunger(10)
    		.saturation(0.7)
			.effect('neapolitan:berserking', 900, 0, 100)
			.effect('farmersdelight:comfort', 4800, 0, 100)
        	})
	event.create('eggplant_parmesan').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(11)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 12000, 0, 100)
        	})
	event.create('prismatic_ice_cream').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.4)
			.effect('neapolitan:agility', 1000, 0, 100)
			.effect('neapolitan:harmony', 400, 0, 100)
			.effect('neapolitan:berserking', 1200, 0, 100)
			.effect('cofh_core:chilled', 140, 0, 100)
        	})
	event.create('smore').food(food => {
		food
    		.hunger(6)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 2700, 0, 100)
        	})
	event.create('neapolitan_ice_cream_sandwich').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('instant_health', 1, 0, 100)
			.effect('neapolitan:sugar_rush', 1200, 1, 100)
			.effect('neapolitan:vanilla_scent', 1200, 0, 100)
        	})
	event.create('respiteful_ice_cream_sandwich').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('respiteful:vitality', 1800, 0, 100)
			.effect('respiteful:tenacity', 1800, 0, 100)
			.effect('respiteful:maturity', 1800, 0, 100)
        	})
	event.create('prismatic_ice_cream_sandwich').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('neapolitan:agility', 1600, 0, 100)
			.effect('neapolitan:harmony', 900, 0, 100)
			.effect('neapolitan:berserking', 1900, 0, 100)
        	})
	event.create('cactus_juice').containerItem('minecraft:glass_bottle').maxStackSize(64).food(food => {
		food
    		.hunger(3)
    		.saturation(0.4)
    		.effect('windswept:thorns', 600, 0, 100)
			.alwaysEdible()
        	})
		.useAnimation("drink")
	event.create('soulstice_sake').maxStackSize(64).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('slow_falling', 3300, 0, 100)
			.effect('upgrade_aquatic:restfulness', 1, 1, 100)
			.alwaysEdible()
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy (5:00)")
        .tooltip("§9Slow Falling (2:45)")
		.tooltip("§9Restfulness II")
	event.create('buzzing_bourbon').maxStackSize(64).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('buzzier_bees:sunny', 9000, 0, 100)
			.effect('upgrade_aquatic:vibing', 3600, 0, 100)
			.alwaysEdible()
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy (5:00)")
        .tooltip("§9Sunny (7:30)")
		.tooltip("§9Vibing (3:00)")
	event.create('prickly_gin').maxStackSize(64).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 1, 100)
			.effect('windswept:thorns', 9000, 0, 100)
			.alwaysEdible()
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy II (5:00)")
        .tooltip("§9Thorns (7:30)")
	
	event.create('bar_of_black_chocolate').food(food => {
		food
    		.hunger(6)
    		.saturation(0.3)
			.effect('atmospheric:persistence', 1200, 1, 100)
        	})
	event.create('black_chocolate_glazed_berries').food(food => {
		food
    		.hunger(7)
    		.saturation(0.7)
			.effect('atmospheric:persistence', 1200, 1, 100)
        	})
	event.create('black_chocolate_glazed_marshmallow').food(food => {
		food
    		.hunger(5)
    		.saturation(0.5)
			.effect('atmospheric:persistence', 1200, 1, 100)
			.alwaysEdible()
        	})
	event.create('bar_of_white_chocolate').food(food => {
		food
    		.hunger(4)
    		.saturation(0.4)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
        	})
	event.create('white_chocolate_glazed_berries').food(food => {
		food
    		.hunger(5)
    		.saturation(0.7)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
        	})
	event.create('white_chocolate_glazed_marshmallow').food(food => {
		food
    		.hunger(3)
    		.saturation(0.5)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
			.alwaysEdible()
        	})
	event.create('sporedough').group('food').food(food => {
		food
    		.hunger(6)
    		.saturation(0.915)
			.alwaysEdible()
        	})
	event.create('cat_food').group('food').maxStackSize(16).food(food => {
		food
    		.hunger(3)
    		.saturation(0.3)
        	})
	event.create('golden_strawberries').rarity('uncommon').group('food').food(food => {
		food
    		.hunger(2)
    		.saturation(1.25)
			.fastToEat()
			.alwaysEdible()
        	})
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
			.effect('regeneration', 600, 0, 100)
			.effect('upgrade_aquatic:vibing', 600, 0, 100)
        	})
	event.create('stoup').maxStackSize(16).rarity('rare').food(food => {
		food
    		.hunger(2)
    		.saturation(1.2)
			.effect('instant_damage', 1, 1, 1)
			.effect('savage_and_ravage:weight', 600, 5, 1)
        	})
})