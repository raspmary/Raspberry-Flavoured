// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	function removeItemRecipes(s) {
		event.remove({input: s})
		event.remove({output: s})
	}

	event.remove({ id: 'supplementaries:pulley' })
	event.remove({ id: 'culturaldelights:beef_burrito' })
	event.remove({ id: 'culturaldelights:chicken_taco' })
	event.remove({ id: 'culturaldelights:eggplant_burger' })
	event.remove({ id: 'culturaldelights:fish_taco' })
	event.remove({ id: 'culturaldelights:mutton_sandwich' })
	event.remove({ id: 'culturaldelights:pork_wrap' })
	event.remove({ id: 'minecraft:pumpkin_pie' })
	event.remove({ id: 'environmental:apple_pie' })
	event.remove({ id: 'environmental:cherry_pie' })
	event.remove({ id: 'environmental:truffle_pie' })
	event.remove({ id: 'upgrade_aquatic:mulberry_pie' })
	event.remove({ id: 'windswept:mutton_pie' })
	event.remove({ id: 'brewinandchewin:quiche_mushroom' })
	event.remove({ id: 'brewinandchewin:quiche_bacon' })
	event.remove({ id: 'brewinandchewin:pizza' })
	event.remove({ id: 'brewinandchewin:ham_and_cheese_sandwich' })
	event.remove({ id: 'endersdelight:chorus_pie' })
	event.remove({ id: 'endersdelight:crawling_sandwich' })
	event.remove({ id: 'farmersrespite:rose_hip_pie' })
	event.remove({ id: 'farmersrespite:nether_wart_sourdough' })
	event.remove({ id: 'farmersdelight:stuffed_potato' })
	event.remove({ id: 'abnormalsdelight:melon_popsicle' })
	event.remove({ id: 'farmersdelight:barbecue_stick' })
	event.remove({ id: 'nethersdelight:nether_skewer' })
	event.remove({ id: 'endersdelight:crispy_skewer' })
	event.remove({ id: 'miners_delight:improvised_barbecue_stick' })
	event.remove({ id: 'create_confectionery:chocolate_candy_1_recipe' })
	event.remove({ id: 'create_confectionery:chocolate_candy_2_recipe' })
	event.remove({ id: 'create_confectionery:chocolate_candy_3_recipe' })
	event.remove({ id: 'create_confectionery:white_chocolate_candy_1_recipe' })
	event.remove({ id: 'create_confectionery:white_chocolate_candy_2_recipe' })
	event.remove({ id: 'create_confectionery:white_chocolate_candy_3_recipe' })
	event.remove({ id: 'create_confectionery:black_chocolate_candy_1_recipe' })
	event.remove({ id: 'create_confectionery:black_chocolate_candy_2_recipe' })
	event.remove({ id: 'create_confectionery:black_chocolate_candy_3_recipe' })
	event.remove({ id: 'create_confectionery:ruby_chocolate_candy_1_recipe' })
	event.remove({ id: 'create_confectionery:ruby_chocolate_candy_2_recipe' })
	event.remove({ id: 'create_confectionery:ruby_chocolate_candy_3_recipe' })
	event.remove({ id: 'create_confectionery:music_disc_the_bright_side_recipe' })
	event.remove({ id: 'farmersdelight:paper_from_tree_bark' })
	event.remove({ id: 'abnormals_delight:maple_glazed_bacon' })
	event.remove({ id: 'minecraft:chest' })
	event.remove({ id: 'minecraft:trapped_chest' })
	event.remove({ id: 'minecraft:sugar_from_sugar_cane' })
	event.remove({ id: 'minecraft:paper' })
	event.remove({ id: 'additionaladditions:patina_cyan_dye' })
	event.remove({ id: 'overweight_farming:overweight_golden_apple_block' })
	event.remove({ id: 'windswept:wooden_bucket' })
	event.remove({ id: 'windswept:leather_from_frozen_flesh_smoking' })
	event.remove({ id: 'farmersdelight:cod_roll' })
	event.remove({ id: 'farmersdelight:salmon_roll' })
	event.remove({ id: 'culturaldelights:calamari_roll' })
	event.remove({ id: 'culturaldelights:tropical_roll' })
	event.remove({ id: 'culturaldelights:egg_roll' })
	event.remove({ id: 'culturaldelights:pufferfish_roll' })
	event.remove({ id: 'culturaldelights:rice_ball' })
	event.remove({ id: 'culturaldelights:avocado_toast' })
	event.remove({ id: 'endersdelight:strange_eclair' })
	event.remove({ id: 'upgrade_aquatic:glass_door' })
	event.remove({ id: 'upgrade_aquatic:glass_trapdoor' })
	event.remove({ id: 'upgrade_aquatic:mulberry_bread' })
	event.remove({ id: 'spelunkery:lodestone' })
	event.remove({ id: 'create_confectionery:soothing_hot_chocolate_recipe' })
	event.remove({ id: 'create_confectionery:caramelized_marshmellow_recipe_2' })
	event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
	event.remove({ id: 'neapolitan:chocolate/chocolate_spider_eye' })
	event.remove({ id: 'neapolitan:mixed/chocolate_strawberries' })
	event.remove({ id: 'neapolitan:mixed/vanilla_chocolate_fingers' })
	event.remove({ id: 'neapolitan:mixed/mint_chocolate' })
	event.remove({ id: 'dustrial_decor:rusty_iron_nugget' })
	event.remove({ id: 'dustrial_decor:rusty_iron_ingot' })
	event.remove({ id: 'dustrial_decor:rusty_sheet_metal' })
	event.remove({ id: 'quark:building/crafting/rusty_iron_plate' })
	event.remove({ id: 'quark:building/crafting/rusty_iron_plate2' })
	event.remove({ id: 'create:mixing/mud_by_mixing' })
	event.remove({ id: 'environmental:mud' })
	event.remove({ id: 'evoked:power_husk_with_life_rune' })
	event.remove({ id: 'crittersandcompanions:iron_dragonfly_armor' })
	event.remove({ id: 'crittersandcompanions:gold_dragonfly_armor' })
	event.remove({ id: 'crittersandcompanions:diamond_dragonfly_armor' })
	event.remove({ id: 'minecraft:blaze_powder' })
	event.remove({ id: 'minecraft:suspicious_stew' })
	event.remove({ id: 'upgrade_aquatic:bone_meal_from_tooth' })
	event.remove({ id: 'architects_palette:bone_meal' })
	event.remove({ id: 'atmospheric:passionfruit_tart' })
	event.remove({ id: 'spelunkery:iron_ingot_from_smelting_raw_iron' })
	event.remove({ id: 'nethersdelight:gold_nugget_from_smelting_machete' })
	event.remove({ id: 'nethersdelight:iron_nugget_from_smelting_machete' })
	event.remove({ id: 'oreganized:lead_nugget_from_smelting' })
	event.remove({ id: 'ecologics:cooked_prickly_pear_from_smoking' })
	event.remove({ id: 'ecologics:cooked_prickly_pear_from_campfire_cooking' })
	event.remove({ id: 'create_enchantment_industry:crafting/printer' })
	event.remove({ id: 'minecraft:painting' })
	event.remove({ id: 'quark:building/crafting/chests/mixed_chest' })
	event.remove({ id: 'quark:building/crafting/chests/chest_trapped' })
	event.remove({ id: 'minecraft:baked_squid' })
	event.remove({ id: 'minecraft:lead' })
	event.remove({ id: 'alloyed:mechanical_crafting/steel_shears' })
	event.remove({ id: 'alloyed:mechanical_crafting/steel_fishing_rod' })
	event.remove({ output: 'abundant_atmosphere:cooked_frog_leg' })
	event.remove({ output: 'environmental:mud_ball' })
	event.remove({ output: 'culturaldelights:smoked_tomato' })
	event.remove({ output: 'abundant_atmosphere:roasted_mushrooms' })
	event.remove({ output: 'quark:oak_chest' })
	event.remove({ output: 'quark:spruce_chest' })
	event.remove({ output: 'quark:birch_chest' })
	event.remove({ output: 'quark:jungle_chest' })
	event.remove({ output: 'quark:acacia_chest' })
	event.remove({ output: 'quark:dark_oak_chest' })
	event.remove({ output: 'quark:crimson_chest' })
	event.remove({ output: 'quark:warped_chest' })
	event.remove({ output: 'quark:mangrove_chest' })
	event.remove({ output: 'quark:oak_trapped_chest' })
	event.remove({ output: 'quark:spruce_trapped_chest' })
	event.remove({ output: 'quark:birch_trapped_chest' })
	event.remove({ output: 'quark:jungle_trapped_chest' })
	event.remove({ output: 'quark:acacia_trapped_chest' })
	event.remove({ output: 'quark:dark_oak_trapped_chest' })
	event.remove({ output: 'quark:crimson_trapped_chest' })
	event.remove({ output: 'quark:warped_trapped_chest' })
	event.remove({ output: 'quark:mangrove_trapped_chest' })
	event.remove({ output: 'toms_storage:ts.trim' })
	event.remove({ output: 'toms_storage:ts.open_crate' })
	event.remove({ output: 'toms_storage:ts.inventory_cable_framed' })
	event.remove({ output: 'toms_storage:ts.inventory_cable_connector_filtered' })
	event.remove({ output: 'toms_storage:ts.inventory_cable_connector_framed' })
	event.remove({ output: 'toms_storage:ts.inventory_proxy' })
	event.remove({ output: 'toms_storage:ts.crafting_terminal' })
	event.remove({ output: 'toms_storage:ts.inventory_hopper_basic' })
	event.remove({ output: 'toms_storage:ts.level_emitter' })
	event.remove({ output: 'toms_storage:ts.inventory_cable_connector_filtered' })
	event.remove({ output: 'toms_storage:ts.paint_kit' })
	event.remove({ output: 'toms_storage:ts.wireless_terminal' })
	event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' })
	event.remove({ output: 'toms_storage:ts.item_filter' })
	event.remove({ output: 'toms_storage:ts.polymorphic_item_filter' })
	event.remove({ output: 'toms_storage:ts.tag_item_filter' })
	event.remove({ output: 'create_enchantment_industry:experience_rotor' })
	event.remove({ output: 'dustrial_decor:sheet_metal' })
	event.remove({ output: 'dustrial_decor:sheet_metal_plating' })
	event.remove({ output: 'dustrial_decor:sheet_metal_plating_slab' })
	event.remove({ output: 'dustrial_decor:sheet_metal_plating_stairs' })
	event.remove({ output: 'dustrial_decor:sheet_metal_paneling' })
	event.remove({ output: 'dustrial_decor:sheet_metal_siding' })
	event.remove({ output: 'dustrial_decor:sheet_metal_walling' })
	event.remove({ output: 'dustrial_decor:sheet_metal_treading' })
	event.remove({ output: 'dustrial_decor:sheet_metal_treading_slab' })
	event.remove({ output: 'dustrial_decor:sheet_metal_treading_stairs' })
	event.remove({ output: 'dustrial_decor:sheet_metal_trapdoor' })
	event.remove({ output: 'dustrial_decor:sheet_metal_door' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_plating' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_plating_slab' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_plating_stairs' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_paneling' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_siding' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_walling' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_treading' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_treading_slab' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_treading_stairs' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_trapdoor' })
	event.remove({ output: 'dustrial_decor:rusty_sheet_metal_door' })
	event.remove({ output: 'dustrial_decor:cinder_block' })
	event.remove({ output: 'dustrial_decor:polished_cinder_block' })
	event.remove({ output: 'dustrial_decor:cinder_bricks' })
	event.remove({ output: 'dustrial_decor:cinder_brick_slab' })
	event.remove({ output: 'dustrial_decor:cinder_brick_stairs' })
	event.remove({ output: 'dustrial_decor:cardboard' })
	event.remove({ output: 'dustrial_decor:cardboard_box' })
	event.remove({ output: 'dustrial_decor:smooth_cardboard' })
	event.remove({ output: 'dustrial_decor:smooth_cardboard_slab' })
	event.remove({ output: 'dustrial_decor:smooth_cardboard_stairs' })
	event.remove({ output: 'dustrial_decor:folded_cardboard' })
	event.remove({ output: 'dustrial_decor:cardboard_scrap' })
	event.remove({ output: 'dustrial_decor:cardboard_trapdoor' })
	event.remove({ output: 'dustrial_decor:cardboard_door' })
	event.remove({ output: 'dustrial_decor:rusty_iron_ingot' })
	event.remove({ output: 'dustrial_decor:rusty_iron_nugget' })
	event.remove({ output: 'dustrial_decor:rusty_iron_block' })
	event.remove({ output: 'dustrial_decor:rusty_iron_trapdoor' })
	event.remove({ output: 'dustrial_decor:rusty_iron_door' })
	event.remove({ output: 'dustrial_decor:black_light' })
	event.remove({ input: 'dustrial_decor:sheet_metal' })
	event.remove({ input: 'dustrial_decor:rusty_sheet_metal' })
	event.remove({ input: 'dustrial_decor:cardboard' })
	event.remove({ output: 'architects_palette:stone_nub' })
	event.remove({ output: 'architects_palette:smooth_stone_nub' })
	event.remove({ output: 'architects_palette:sandstone_nub' })
	event.remove({ output: 'architects_palette:andesite_nub' })
	event.remove({ output: 'architects_palette:granite_nub' })
	event.remove({ output: 'architects_palette:diorite_nub' })
	event.remove({ output: 'architects_palette:blackstone_nub' })
	event.remove({ output: 'architects_palette:deepslate_nub' })
	event.remove({ output: 'architects_palette:bone_nub' })
	event.remove({ output: 'architects_palette:nub_of_ender' })
	event.remove({ output: 'architects_palette:iron_nub' })
	event.remove({ output: 'architects_palette:gold_nub' })
	event.remove({ output: 'architects_palette:diamond_nub' })
	event.remove({ output: 'architects_palette:emerald_nub' })
	event.remove({ output: 'architects_palette:netherite_nub' })
	event.remove({ output: 'architects_palette:plating_nub' })
	event.remove({ output: 'architects_palette:sunmetal_nub' })
	event.remove({ output: 'architects_palette:polished_glowstone_nub' })
	event.remove({ output: 'architects_palette:nether_brass_nub' })
	event.remove({ input: 'naturalist:cattail_fluff' })
	event.remove({ input: 'naturalist:duck_egg' })

	removeItemRecipes('create_confectionery:ruby_chocolate_bucket')
	removeItemRecipes('create_confectionery:ruby_chocolate_bricks')
	removeItemRecipes('create_confectionery:ruby_chocolate_brick_slab')
	removeItemRecipes('create_confectionery:ruby_chocolate_brick_stairs')
	removeItemRecipes('architects_palette:nether_brass_chain')
	removeItemRecipes('naturalist:cooked_egg')
	removeItemRecipes('naturalist:duck')
	removeItemRecipes('naturalist:cooked_duck')
	removeItemRecipes('naturalist:venison')
	removeItemRecipes('naturalist:cooked_venison')
	removeItemRecipes('naturalist:lizard_tail')
	removeItemRecipes('naturalist:cooked_lizard_tail')
	removeItemRecipes('naturalist:bass')
	removeItemRecipes('naturalist:cooked_bass')
	removeItemRecipes('naturalist:catfish')
	removeItemRecipes('naturalist:cooked_catfish')
	removeItemRecipes('naturalist:reptile_hide')
	removeItemRecipes('naturalist:snail_shell')
	removeItemRecipes('spelunkery:raw_nephrite')
	removeItemRecipes('spelunkery:nephrite')
	removeItemRecipes('spelunkery:nephrite_slab')
	removeItemRecipes('spelunkery:nephrite_stairs')
	removeItemRecipes('spelunkery:nephrite_wall')
	removeItemRecipes('spelunkery:polished_nephrite')
	removeItemRecipes('spelunkery:polished_nephrite_slab')
	removeItemRecipes('spelunkery:polished_nephrite_stairs')
	removeItemRecipes('spelunkery:polished_nephrite_wall')
	removeItemRecipes('spelunkery:polished_nephrite_bricks')
	removeItemRecipes('spelunkery:polished_nephrite_brick_slab')
	removeItemRecipes('spelunkery:polished_nephrite_brick_stairs')
	removeItemRecipes('spelunkery:polished_nephrite_brick_wall')
	removeItemRecipes('spelunkery:nephrite_chunk')
	removeItemRecipes('spelunkery:nephrite_charm')
	removeItemRecipes('spelunkery:carved_nephrite')
	removeItemRecipes('spelunkery:nephrite_siphon')
	removeItemRecipes('spelunkery:nephrite_spout')
	removeItemRecipes('spelunkery:nephrite_diode')
	removeItemRecipes('culturaldelights:squid')
	removeItemRecipes('culturaldelights:cooked_squid')
	removeItemRecipes('culturaldelights:glow_squid')
	removeItemRecipes('culturaldelights:raw_calamari')
	removeItemRecipes('culturaldelights:cooked_calamari')
	removeItemRecipes('miners_delight:copper_pot')
	removeItemRecipes('miners_delight:wild_cave_carrots')
	removeItemRecipes('miners_delight:cave_carrot_crate')
	removeItemRecipes('miners_delight:gossypium')
	removeItemRecipes('miners_delight:copper_cup')
	removeItemRecipes('miners_delight:water_cup')
	removeItemRecipes('miners_delight:milk_cup')
	removeItemRecipes('miners_delight:powder_snow_cup')
	removeItemRecipes('miners_delight:cave_carrot')
	removeItemRecipes('miners_delight:baked_cave_carrot')
	removeItemRecipes('miners_delight:silverfish_eggs')
	removeItemRecipes('miners_delight:weird_caviar')
	removeItemRecipes('miners_delight:pasta_with_veggieballs')
	removeItemRecipes('miners_delight:cave_soup')
	removeItemRecipes('create_central_kitchen:miners_cooking_guide')
	
	removeItemRecipes('abundant_atmosphere:ash_log')
	removeItemRecipes('abundant_atmosphere:ash_wood')
	removeItemRecipes('abundant_atmosphere:stripped_ash_log')
	removeItemRecipes('abundant_atmosphere:stripped_ash_wood')
	removeItemRecipes('abundant_atmosphere:ash_planks')
	removeItemRecipes('abundant_atmosphere:ash_stairs')
	removeItemRecipes('abundant_atmosphere:ash_slab')
	removeItemRecipes('abundant_atmosphere:ash_sign')
	removeItemRecipes('abundant_atmosphere:ash_fence')
	removeItemRecipes('abundant_atmosphere:ash_fence_gate')
	removeItemRecipes('abundant_atmosphere:ash_leaves')
	removeItemRecipes('abundant_atmosphere:hanging_ash_leaves')
	removeItemRecipes('abundant_atmosphere:ash_sapling')
	removeItemRecipes('abundant_atmosphere:ash_door')
	removeItemRecipes('abundant_atmosphere:ash_trapdoor')
	removeItemRecipes('abundant_atmosphere:ash_pressure_plate')
	removeItemRecipes('abundant_atmosphere:ash_button')
	removeItemRecipes('abundant_atmosphere:ash_boat')
	removeItemRecipes('abundant_atmosphere:ash_chest_boat')
	removeItemRecipes('supplementaries:abundant_atmosphere/hanging_sign_ash')
	removeItemRecipes('supplementaries:abundant_atmosphere/sign_post_ash')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/ash_beehive')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_planter_box')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_shutter')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_table')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_chair')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_shelf')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_drawer')
	removeItemRecipes('everycomp:af/abundant_atmosphere/ash_bench')
	removeItemRecipes('everycomp:c/abundant_atmosphere/ash_window')
	removeItemRecipes('everycomp:c/abundant_atmosphere/ash_window_pane')
	removeItemRecipes('everycomp:fd/abundant_atmosphere/ash_cabinet')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_bookshelf')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_post')
	removeItemRecipes('everycomp:q/abundant_atmosphere/stripped_ash_post')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_ladder')
	removeItemRecipes('everycomp:q/abundant_atmosphere/hollow_ash_log')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_chest')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_trapped_chest')
	removeItemRecipes('everycomp:q/abundant_atmosphere/ash_hedge')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/ash_boards')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/ash_leaf_pile')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/ash_railing')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/ash_board_slab')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/ash_board_wall')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/ash_boards')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/ash_board_stairs')
	removeItemRecipes('abundant_atmosphere:gourdrot_log')
	removeItemRecipes('abundant_atmosphere:gourdrot_wood')
	removeItemRecipes('abundant_atmosphere:stripped_gourdrot_log')
	removeItemRecipes('abundant_atmosphere:stripped_gourdrot_wood')
	removeItemRecipes('abundant_atmosphere:gourdrot_planks')
	removeItemRecipes('abundant_atmosphere:gourdrot_stairs')
	removeItemRecipes('abundant_atmosphere:gourdrot_slab')
	removeItemRecipes('abundant_atmosphere:gourdrot_sign')
	removeItemRecipes('abundant_atmosphere:gourdrot_fence')
	removeItemRecipes('abundant_atmosphere:gourdrot_fence_gate')
	removeItemRecipes('abundant_atmosphere:gourdrot_leaves')
	removeItemRecipes('abundant_atmosphere:gourdrot_sapling')
	removeItemRecipes('abundant_atmosphere:gourdrot_door')
	removeItemRecipes('abundant_atmosphere:gourdrot_trapdoor')
	removeItemRecipes('abundant_atmosphere:gourdrot_pressure_plate')
	removeItemRecipes('abundant_atmosphere:gourdrot_button')
	removeItemRecipes('abundant_atmosphere:gourdrot_boat')
	removeItemRecipes('abundant_atmosphere:gourdrot_chest_boat')
	removeItemRecipes('supplementaries:abundant_atmosphere/hanging_sign_gourdrot')
	removeItemRecipes('supplementaries:abundant_atmosphere/sign_post_gourdrot')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/gourdrot_beehive')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_planter_box')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_shutter')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_table')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_chair')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_shelf')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_drawer')
	removeItemRecipes('everycomp:af/abundant_atmosphere/gourdrot_bench')
	removeItemRecipes('everycomp:c/abundant_atmosphere/gourdrot_window')
	removeItemRecipes('everycomp:c/abundant_atmosphere/gourdrot_window_pane')
	removeItemRecipes('everycomp:fd/abundant_atmosphere/gourdrot_cabinet')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_bookshelf')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_post')
	removeItemRecipes('everycomp:q/abundant_atmosphere/stripped_gourdrot_post')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_ladder')
	removeItemRecipes('everycomp:q/abundant_atmosphere/hollow_gourdrot_log')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_chest')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_trapped_chest')
	removeItemRecipes('everycomp:q/abundant_atmosphere/gourdrot_hedge')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/gourdrot_boards')
	removeItemRecipes('everycomp:abnww/abundant_atmosphere/gourdrot_leaf_pile')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/gourdrot_railing')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/gourdrot_board_slab')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/gourdrot_board_wall')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/gourdrot_boards')
	removeItemRecipes('everycomp:ap/abundant_atmosphere/gourdrot_board_stairs')
	removeItemRecipes('ecologics:walnut_planks')
	removeItemRecipes('ecologics:walnut_sign')
	removeItemRecipes('ecologics:walnut_fence_gate')
	removeItemRecipes('ecologics:walnut_door')
	removeItemRecipes('ecologics:walnut_trapdoor')
	removeItemRecipes('ecologics:walnut_boat')
	removeItemRecipes('ecologics:walnut')
	removeItemRecipes('ecologics:walnut_leaves')
	removeItemRecipes('ecologics:stripped_walnut_wood')
	removeItemRecipes('ecologics:walnut_wood')
	removeItemRecipes('ecologics:walnut_fence')
	removeItemRecipes('ecologics:stripped_walnut_log')
	removeItemRecipes('ecologics:walnut_stairs')
	removeItemRecipes('ecologics:walnut_slab')
	removeItemRecipes('ecologics:walnut_log')
	removeItemRecipes('ecologics:walnut_button')
	removeItemRecipes('ecologics:walnut_pressure_plate')
	removeItemRecipes('ecologics:walnut_sapling')
	removeItemRecipes('supplementaries:ecologics/sign_post_walnut')
	removeItemRecipes('supplementaries:ecologics/hanging_sign_walnut')
	removeItemRecipes('ecologics:walnut_chest_boat')
	removeItemRecipes('everycomp:af/ecologics/walnut_table')
	removeItemRecipes('everycomp:af/ecologics/walnut_chair')
	removeItemRecipes('everycomp:af/ecologics/walnut_shelf')
	removeItemRecipes('everycomp:af/ecologics/walnut_drawer')
	removeItemRecipes('everycomp:abnww/ecologics/walnut_beehive')
	removeItemRecipes('everycomp:af/ecologics/walnut_planter_box')
	removeItemRecipes('everycomp:af/ecologics/walnut_bench')
	removeItemRecipes('everycomp:c/ecologics/walnut_window')
	removeItemRecipes('everycomp:af/ecologics/walnut_shutter')
	removeItemRecipes('everycomp:q/ecologics/walnut_ladder')
	removeItemRecipes('everycomp:abnww/ecologics/walnut_leaf_pile')
	removeItemRecipes('everycomp:abnww/ecologics/walnut_boards')
	removeItemRecipes('everycomp:q/ecologics/stripped_walnut_post')
	removeItemRecipes('everycomp:q/ecologics/walnut_post')
	removeItemRecipes('everycomp:q/ecologics/walnut_hedge')
	removeItemRecipes('everycomp:ap/ecologics/walnut_board_stairs')
	removeItemRecipes('everycomp:ap/ecologics/walnut_boards')
	removeItemRecipes('everycomp:ap/ecologics/walnut_board_wall')
	removeItemRecipes('everycomp:q/ecologics/walnut_trapped_chest')
	removeItemRecipes('everycomp:q/ecologics/walnut_bookshelf')
	removeItemRecipes('everycomp:fd/ecologics/walnut_cabinet')
	removeItemRecipes('everycomp:q/ecologics/walnut_chest')
	removeItemRecipes('everycomp:ap/ecologics/walnut_board_slab')
	removeItemRecipes('everycomp:ap/ecologics/walnut_railing')
	removeItemRecipes('everycomp:c/ecologics/walnut_window_pane')
	removeItemRecipes('everycomp:q/ecologics/hollow_walnut_log')
	removeItemRecipes('ecologics:flowering_azalea_planks')
	removeItemRecipes('ecologics:flowering_azalea_log')
	removeItemRecipes('ecologics:flowering_azalea_wood')
	removeItemRecipes('ecologics:flowering_azalea_slab')
	removeItemRecipes('ecologics:flowering_azalea_stairs')
	removeItemRecipes('ecologics:flowering_azalea_fence')
	removeItemRecipes('ecologics:flowering_azalea_fence_gate')
	removeItemRecipes('quark:flowering_azalea_hedge')
	removeItemRecipes('ecologics:flowering_azalea_chest_boat')
	removeItemRecipes('ecologics:flowering_azalea_boat')
	removeItemRecipes('ecologics:flowering_azalea_sign')
	removeItemRecipes('ecologics:flowering_azalea_trapdoor')
	removeItemRecipes('ecologics:flowering_azalea_door')
	removeItemRecipes('supplementaries:ecologics/hanging_sign_flowering_azalea')
	removeItemRecipes('supplementaries:ecologics/sign_post_flowering_azalea')
	removeItemRecipes('woodworks:flowering_azalea_leaf_pile')
	removeItemRecipes('everycomp:abnww/ecologics/flowering_azalea_beehive')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_planter_box')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_bench')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_drawer')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_shelf')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_chair')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_table')
	removeItemRecipes('everycomp:af/ecologics/flowering_azalea_shutter')
	removeItemRecipes('everycomp:c/ecologics/flowering_azalea_window')
	removeItemRecipes('everycomp:c/ecologics/flowering_azalea_window_pane')
	removeItemRecipes('everycomp:fd/ecologics/flowering_azalea_cabinet')
	removeItemRecipes('everycomp:q/ecologics/flowering_azalea_bookshelf')
	removeItemRecipes('everycomp:q/ecologics/flowering_azalea_post')
	removeItemRecipes('everycomp:q/ecologics/stripped_flowering_azalea_post')
	removeItemRecipes('everycomp:ap/ecologics/flowering_azalea_railing')
	removeItemRecipes('everycomp:abnww/ecologics/flowering_azalea_boards')
	removeItemRecipes('everycomp:q/ecologics/flowering_azalea_trapped_chest')
	removeItemRecipes('everycomp:q/ecologics/flowering_azalea_chest')
	removeItemRecipes('everycomp:q/ecologics/hollow_flowering_azalea_log')
	removeItemRecipes('everycomp:q/ecologics/flowering_azalea_ladder')
	removeItemRecipes('everycomp:ap/ecologics/flowering_azalea_board_slab')
	removeItemRecipes('everycomp:ap/ecologics/flowering_azalea_board_wall')
	removeItemRecipes('everycomp:ap/ecologics/flowering_azalea_boards')
	removeItemRecipes('everycomp:ap/ecologics/flowering_azalea_board_stairs')
	removeItemRecipes('windswept:holly_planks')
	removeItemRecipes('windswept:holly_chest_boat')
	removeItemRecipes('windswept:holly_boat')
	removeItemRecipes('windswept:holly_trapped_chest')
	removeItemRecipes('windswept:holly_fence_gate')
	removeItemRecipes('windswept:holly_trapdoor')
	removeItemRecipes('windswept:holly_button')
	removeItemRecipes('windswept:holly_pressure_plate')
	removeItemRecipes('windswept:holly_door')
	removeItemRecipes('windswept:holly_chest')
	removeItemRecipes('windswept:holly_post')
	removeItemRecipes('windswept:stripped_holly_post')
	removeItemRecipes('windswept:holly_cabinet')
	removeItemRecipes('windswept:holly_beehive')
	removeItemRecipes('windswept:holly_sign')
	removeItemRecipes('windswept:holly_stairs')
	removeItemRecipes('windswept:holly_boards')
	removeItemRecipes('windswept:holly_ladder')
	removeItemRecipes('windswept:holly_fence')
	removeItemRecipes('windswept:holly_bookshelf')
	removeItemRecipes('windswept:holly_slab')
	removeItemRecipes('windswept:holly_wood')
	removeItemRecipes('windswept:stripped_holly_wood')
	removeItemRecipes('windswept:stripped_holly_log')
	removeItemRecipes('windswept:holly_log')
	removeItemRecipes('everycomp:ap/windswept/holly_railing')
	removeItemRecipes('everycomp:ap/windswept/holly_board_slab')
	removeItemRecipes('everycomp:ap/windswept/holly_board_wall')
	removeItemRecipes('everycomp:ap/windswept/holly_boards')
	removeItemRecipes('everycomp:ap/windswept/holly_board_stairs')
	removeItemRecipes('everycomp:c/windswept/holly_window_pane')
	removeItemRecipes('everycomp:q/windswept/hollow_holly_log')
	removeItemRecipes('everycomp:af/windswept/holly_chair')
	removeItemRecipes('everycomp:af/windswept/holly_table')
	removeItemRecipes('everycomp:af/windswept/holly_shutter')
	removeItemRecipes('everycomp:c/windswept/holly_window')
	removeItemRecipes('everycomp:af/windswept/holly_bench')
	removeItemRecipes('everycomp:af/windswept/holly_planter_box')
	removeItemRecipes('supplementaries:windswept/sign_post_holly')
	removeItemRecipes('everycomp:af/windswept/holly_drawer')
	removeItemRecipes('everycomp:af/windswept/holly_shelf')
	removeItemRecipes('supplementaries:windswept/hanging_sign_holly')
	removeItemRecipes('everycomp:ap/quark/ancient_board_stairs')
	removeItemRecipes('everycomp:abnww/quark/ancient_boards')
	removeItemRecipes('everycomp:abnww/quark/ancient_leaf_pile')
	removeItemRecipes('everycomp:ap/quark/ancient_railing')
	removeItemRecipes('everycomp:ap/quark/ancient_board_slab')
	removeItemRecipes('everycomp:ap/quark/ancient_board_wall')
	removeItemRecipes('everycomp:ap/quark/ancient_boards')
	removeItemRecipes('everycomp:fd/quark/ancient_cabinet')
	removeItemRecipes('everycomp:af/quark/ancient_chair')
	removeItemRecipes('everycomp:af/quark/ancient_table')
	removeItemRecipes('supplementaries:quark/hanging_sign_ancient')
	removeItemRecipes('everycomp:c/quark/ancient_window_pane')
	removeItemRecipes('everycomp:c/quark/ancient_window')
	removeItemRecipes('everycomp:af/quark/ancient_shutter')
	removeItemRecipes('everycomp:af/quark/ancient_planter_box')
	removeItemRecipes('everycomp:af/quark/ancient_bench')
	removeItemRecipes('everycomp:af/quark/ancient_drawer')
	removeItemRecipes('everycomp:abnww/quark/ancient_beehive')
	removeItemRecipes('supplementaries:quark/sign_post_ancient')
	removeItemRecipes('everycomp:af/quark/ancient_shelf')
	removeItemRecipes('supplementaries:quark/hanging_sign_blossom')
	removeItemRecipes('supplementaries:quark/sign_post_blossom')
	removeItemRecipes('everycomp:abnww/quark/blossom_beehive')
	removeItemRecipes('everycomp:af/quark/blossom_planter_box')
	removeItemRecipes('everycomp:af/quark/blossom_bench')
	removeItemRecipes('everycomp:af/quark/blossom_drawer')
	removeItemRecipes('everycomp:abnww/quark/lavender_blossom_leaf_pile')
	removeItemRecipes('everycomp:abnww/quark/pink_blossom_leaf_pile')
	removeItemRecipes('everycomp:abnww/quark/orange_blossom_leaf_pile')
	removeItemRecipes('everycomp:abnww/quark/red_blossom_leaf_pile')
	removeItemRecipes('everycomp:abnww/quark/blue_blossom_leaf_pile')
	removeItemRecipes('everycomp:abnww/quark/yellow_blossom_leaf_pile')
	removeItemRecipes('everycomp:ap/quark/blossom_railing')
	removeItemRecipes('everycomp:ap/quark/blossom_board_slab')
	removeItemRecipes('everycomp:ap/quark/blossom_board_stairs')
	removeItemRecipes('everycomp:ap/quark/blossom_boards')
	removeItemRecipes('everycomp:ap/quark/blossom_board_wall')
	removeItemRecipes('everycomp:c/quark/blossom_window')
	removeItemRecipes('everycomp:c/quark/blossom_window_pane')
	removeItemRecipes('everycomp:fd/quark/blossom_cabinet')
	removeItemRecipes('everycomp:abnww/quark/blossom_boards')
	removeItemRecipes('everycomp:af/quark/blossom_shelf')
	removeItemRecipes('everycomp:af/quark/blossom_chair')
	removeItemRecipes('everycomp:af/quark/blossom_table')
	removeItemRecipes('everycomp:af/quark/blossom_shutter')
	
	event.smoking('abundant_atmosphere:roasted_mushrooms', '#forge:mushrooms').id('kubejs:roasted_mushrooms_smoking').xp(0.35)
	event.campfireCooking('abundant_atmosphere:roasted_mushrooms', '#forge:mushrooms').id('kubejs:roasted_mushrooms_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').id('kubejs:smoked_eggplant_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').id('kubejs:smoked_cut_eggplant_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant').id('kubejs:smoked_white_eggplant_campfire').cookingTime(600)
	event.campfireCooking('minecraft:brick', 'minecraft:clay_ball').id('kubejs:brick_campfire').cookingTime(300)
	event.campfireCooking('minecraft:nether_brick', 'minecraft:netherrack').id('kubejs:nether_brick_campfire').cookingTime(300)
	event.campfireCooking('supplementaries:ash_brick', 'supplementaries:ash').id('kubejs:ash_brick_campfire').cookingTime(300)
	
	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:beef_burrito'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','#forge:cooked_beef']),
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','#culturaldelights:avocados']),
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','farmersdelight:cooked_rice'])
	]).transitionalItem('kubejs:incomplete_beef_burrito').loops(1).id('kubejs:beef_burrito_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:chicken_taco'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#forge:cooked_chicken']),
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#culturaldelights:cucumbers']),
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_chicken_taco').loops(1).id('kubejs:chicken_taco_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:eggplant_burger'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#culturaldelights:smoked_regular_eggplants']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#forge:salad_ingredients']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#culturaldelights:cucumbers']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_eggplant_burger').loops(1).id('kubejs:eggplant_burger_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:fish_taco'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','#forge:cooked_fishes']),
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_fish_taco').loops(1).id('kubejs:fish_taco_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:pork_wrap'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','#forge:cooked_pork']),
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','minecraft:apple'])
	]).transitionalItem('kubejs:incomplete_pork_wrap').loops(1).id('kubejs:pork_wrap_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:mutton_sandwich'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','#forge:cooked_mutton']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','minecraft:beetroot']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','incubation:fried_egg'])
	]).transitionalItem('kubejs:incomplete_mutton_sandwich').loops(1).id('kubejs:mutton_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('minecraft:pumpkin_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('create_central_kitchen:incomplete_pumpkin_pie',['create_central_kitchen:incomplete_pumpkin_pie','farmersdelight:pumpkin_slice']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_pumpkin_pie',['create_central_kitchen:incomplete_pumpkin_pie','minecraft:sugar']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_pumpkin_pie',['create_central_kitchen:incomplete_pumpkin_pie','#balm:eggs'])
	]).transitionalItem('create_central_kitchen:incomplete_pumpkin_pie').loops(1).id('kubejs:pumpkin_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('upgrade_aquatic:mulberry_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createFilling('create_central_kitchen:incomplete_mulberry_pie',['create_central_kitchen:incomplete_mulberry_pie',Fluid.of('create_central_kitchen:mulberry_jam',250)]),
		event.recipes.createDeploying('create_central_kitchen:incomplete_mulberry_pie',['create_central_kitchen:incomplete_mulberry_pie','minecraft:sugar']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_mulberry_pie',['create_central_kitchen:incomplete_mulberry_pie','#balm:eggs'])
	]).transitionalItem('create_central_kitchen:incomplete_mulberry_pie').loops(1).id('kubejs:mulberry_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('environmental:cherry_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('create_central_kitchen:incomplete_cherry_pie',['create_central_kitchen:incomplete_cherry_pie','environmental:cherries']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_cherry_pie',['create_central_kitchen:incomplete_cherry_pie','environmental:cherries']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_cherry_pie',['create_central_kitchen:incomplete_cherry_pie','minecraft:sugar']),
		event.recipes.createDeploying('create_central_kitchen:incomplete_cherry_pie',['create_central_kitchen:incomplete_cherry_pie','#balm:eggs'])
	]).transitionalItem('create_central_kitchen:incomplete_cherry_pie').loops(1).id('kubejs:cherry_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('environmental:apple_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_apple_pie',['kubejs:incomplete_apple_pie','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_apple_pie',['kubejs:incomplete_apple_pie','minecraft:apple']),
		event.recipes.createDeploying('kubejs:incomplete_apple_pie',['kubejs:incomplete_apple_pie','minecraft:apple']),
		event.recipes.createDeploying('kubejs:incomplete_apple_pie',['kubejs:incomplete_apple_pie','#balm:eggs'])
	]).transitionalItem('kubejs:incomplete_apple_pie').loops(1).id('kubejs:apple_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('environmental:truffle_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_truffle_pie',['kubejs:incomplete_truffle_pie','environmental:truffle']),
		event.recipes.createDeploying('kubejs:incomplete_truffle_pie',['kubejs:incomplete_truffle_pie','minecraft:brown_mushroom']),
		event.recipes.createDeploying('kubejs:incomplete_truffle_pie',['kubejs:incomplete_truffle_pie','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_truffle_pie',['kubejs:incomplete_truffle_pie','#balm:eggs'])
	]).transitionalItem('kubejs:incomplete_truffle_pie').loops(1).id('kubejs:truffle_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('windswept:mutton_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_mutton_pie',['kubejs:incomplete_mutton_pie','#forge:cooked_mutton']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_pie',['kubejs:incomplete_mutton_pie','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_pie',['kubejs:incomplete_mutton_pie','#balm:eggs'])
	]).transitionalItem('kubejs:incomplete_mutton_pie').loops(1).id('kubejs:mutton_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('endersdelight:chorus_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_chorus_pie',['kubejs:incomplete_chorus_pie','minecraft:chorus_fruit']),
		event.recipes.createDeploying('kubejs:incomplete_chorus_pie',['kubejs:incomplete_chorus_pie','create:wheat_flour']),
		event.recipes.createDeploying('kubejs:incomplete_chorus_pie',['kubejs:incomplete_chorus_pie','minecraft:sugar'])
	]).transitionalItem('kubejs:incomplete_chorus_pie').loops(2).id('kubejs:chorus_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:quiche'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#brewinandchewin:bacon_or_mushroom']),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#balm:eggs']),
		event.recipes.createFilling('kubejs:incomplete_quiche',['kubejs:incomplete_quiche',Fluid.of('minecraft:milk',250)]),
		event.recipes.createFilling('kubejs:incomplete_quiche',['kubejs:incomplete_quiche',Fluid.of('kubejs:flaxen_cheese',250)])
	]).transitionalItem('kubejs:incomplete_quiche').loops(1).id('kubejs:quiche_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersrespite:rose_hip_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_rose_hip_pie',['kubejs:incomplete_rose_hip_pie','farmersrespite:rose_hips']),
		event.recipes.createFilling('kubejs:incomplete_rose_hip_pie',['kubejs:incomplete_rose_hip_pie',Fluid.of('create:honey',250)]),
		event.recipes.createDeploying('kubejs:incomplete_rose_hip_pie',['kubejs:incomplete_rose_hip_pie','minecraft:sugar'])
	]).transitionalItem('kubejs:incomplete_rose_hip_pie').loops(2).id('kubejs:rose_hip_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:butterscotch_cinnamon_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createFilling('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie',Fluid.of('kubejs:butterscotch',250)]),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','create:wheat_flour']),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','kubejs:cinnamon'])
	]).transitionalItem('kubejs:incomplete_butterscotch_cinnamon_pie').loops(3).id('kubejs:butterscotch_cinnamon_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:pizza'),
	],'farmersdelight:wheat_dough',[
		event.recipes.createFilling('kubejs:incomplete_pizza',['kubejs:incomplete_pizza',Fluid.of('create_central_kitchen:tomato_sauce',250)]),
		event.recipes.createFilling('kubejs:incomplete_pizza',['kubejs:incomplete_pizza',Fluid.of('kubejs:flaxen_cheese',250)]),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','farmersdelight:beef_patty']),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_pizza').loops(1).id('kubejs:pizza_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:ham_and_cheese_sandwich', 3),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','farmersdelight:smoked_ham']),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','minecraft:bread']),
		event.recipes.createFilling('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich',Fluid.of('kubejs:flaxen_cheese',250)]),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','minecraft:bread'])
	]).transitionalItem('kubejs:incomplete_ham_and_cheese_sandwich').loops(1).id('kubejs:ham_and_cheese_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersrespite:nether_wart_sourdough'),
	],'minecraft:soul_soil',[
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','create:cinder_flour']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','minecraft:nether_wart'])
	]).transitionalItem('kubejs:incomplete_souldough').loops(1).id('kubejs:souldough_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('endersdelight:crawling_sandwich'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_crawling_sandwich',['kubejs:incomplete_crawling_sandwich','endersdelight:mite_crust']),
		event.recipes.createDeploying('kubejs:incomplete_crawling_sandwich',['kubejs:incomplete_crawling_sandwich','#endersdelight:shulker_loot']),
		event.recipes.createDeploying('kubejs:incomplete_crawling_sandwich',['kubejs:incomplete_crawling_sandwich','minecraft:chorus_fruit'])
	]).transitionalItem('kubejs:incomplete_crawling_sandwich').loops(1).id('kubejs:crawling_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:stuffed_potato'),
	],'minecraft:baked_potato',[
		event.recipes.createDeploying('kubejs:incomplete_stuffed_potato',['kubejs:incomplete_stuffed_potato','#forge:cooked_beef']),
		event.recipes.createFilling('kubejs:incomplete_stuffed_potato',['kubejs:incomplete_stuffed_potato',Fluid.of('minecraft:milk',250)])
	]).transitionalItem('kubejs:incomplete_stuffed_potato').loops(1).id('kubejs:stuffed_potato_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:melon_popsicle'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_melon_popsicle',['kubejs:incomplete_melon_popsicle','minecraft:melon_slice']),
		event.recipes.createDeploying('kubejs:incomplete_melon_popsicle',['kubejs:incomplete_melon_popsicle','neapolitan:ice_cubes']),
		event.recipes.createDeploying('kubejs:incomplete_melon_popsicle',['kubejs:incomplete_melon_popsicle','neapolitan:ice_cubes'])
	]).transitionalItem('kubejs:incomplete_melon_popsicle').loops(1).id('kubejs:melon_popsicle_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:barbecue_stick'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_barbecue_stick',['kubejs:incomplete_barbecue_stick','#farmersdelight:barbecue_meats']),
		event.recipes.createDeploying('kubejs:incomplete_barbecue_stick',['kubejs:incomplete_barbecue_stick','#forge:crops/onion']),
		event.recipes.createDeploying('kubejs:incomplete_barbecue_stick',['kubejs:incomplete_barbecue_stick','#forge:crops/tomato'])
	]).transitionalItem('kubejs:incomplete_barbecue_stick').loops(1).id('kubejs:barbecue_stick_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('nethersdelight:nether_skewer'),
	],'minecraft:blaze_rod',[
		event.recipes.createDeploying('kubejs:incomplete_nether_skewer',['kubejs:incomplete_nether_skewer','#nethersdelight:raw_strider']),
		event.recipes.createDeploying('kubejs:incomplete_nether_skewer',['kubejs:incomplete_nether_skewer','minecraft:crimson_fungus']),
		event.recipes.createDeploying('kubejs:incomplete_nether_skewer',['kubejs:incomplete_nether_skewer','minecraft:crimson_fungus'])
	]).transitionalItem('kubejs:incomplete_nether_skewer').loops(1).id('kubejs:nether_skewer_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('miners_delight:improvised_barbecue_stick', 2),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','miners_delight:baked_tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','minecraft:stick']),
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_improvised_barbecue_stick').loops(1).id('kubejs:improvised_barbecue_stick_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('endersdelight:crispy_skewer'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_crispy_skewer',['kubejs:incomplete_crispy_skewer','endersdelight:mite_crust']),
		event.recipes.createDeploying('kubejs:incomplete_crispy_skewer',['kubejs:incomplete_crispy_skewer','minecraft:chorus_fruit']),
		event.recipes.createDeploying('kubejs:incomplete_crispy_skewer',['kubejs:incomplete_crispy_skewer','minecraft:popped_chorus_fruit'])
	]).transitionalItem('kubejs:incomplete_crispy_skewer').loops(1).id('kubejs:crispy_skewer_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:cod_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_cod_roll',['kubejs:incomplete_cod_roll','farmersdelight:cod_slice']),
		event.recipes.createDeploying('kubejs:incomplete_cod_roll',['kubejs:incomplete_cod_roll','farmersdelight:cod_slice'])
	]).transitionalItem('kubejs:incomplete_cod_roll').loops(1).id('kubejs:cod_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:salmon_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_salmon_roll',['kubejs:incomplete_salmon_roll','farmersdelight:salmon_slice']),
		event.recipes.createDeploying('kubejs:incomplete_salmon_roll',['kubejs:incomplete_salmon_roll','farmersdelight:salmon_slice'])
	]).transitionalItem('kubejs:incomplete_salmon_roll').loops(1).id('kubejs:salmon_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:egg_roll', 4),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_egg_roll').loops(1).id('kubejs:egg_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:pufferfish_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_pufferfish_roll',['kubejs:incomplete_pufferfish_roll','minecraft:pufferfish']),
		event.recipes.createDeploying('kubejs:incomplete_pufferfish_roll',['kubejs:incomplete_pufferfish_roll','minecraft:pufferfish'])
	]).transitionalItem('kubejs:incomplete_pufferfish_roll').loops(1).id('kubejs:pufferfish_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:tropical_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','minecraft:tropical_fish']),
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','minecraft:tropical_fish']),
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_tropical_roll').loops(1).id('kubejs:tropical_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:calamari_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','miners_delight:tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','miners_delight:tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_calamari_roll').loops(1).id('kubejs:calamari_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:rice_ball', 5),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','minecraft:dried_kelp']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','minecraft:sweet_berries']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','#forge:raw_fishes/salmon']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','farmersdelight:cooked_rice'])
	]).transitionalItem('kubejs:incomplete_rice_ball').loops(1).id('kubejs:rice_ball_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:kipper_sandwich'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','brewinandchewin:kippers']),
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','#culturaldelights:avocados']),
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','incubation:fried_egg'])
	]).transitionalItem('kubejs:incomplete_kipper_sandwich').loops(1).id('kubejs:kipper_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('atmospheric:passionfruit_tart'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_passionfruit_tart',['kubejs:incomplete_passionfruit_tart','atmospheric:passionfruit']),
		event.recipes.createDeploying('kubejs:incomplete_passionfruit_tart',['kubejs:incomplete_passionfruit_tart','atmospheric:passionfruit']),
		event.recipes.createDeploying('kubejs:incomplete_passionfruit_tart',['kubejs:incomplete_passionfruit_tart','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_passionfruit_tart',['kubejs:incomplete_passionfruit_tart','#balm:eggs'])
	]).transitionalItem('kubejs:incomplete_passionfruit_tart').loops(1).id('kubejs:passionfruit_tart_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:prickly_pear_tart'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_tart',['kubejs:incomplete_prickly_pear_tart','ecologics:cooked_prickly_pear']),
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_tart',['kubejs:incomplete_prickly_pear_tart','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_tart',['kubejs:incomplete_prickly_pear_tart','#balm:eggs'])
	]).transitionalItem('kubejs:incomplete_prickly_pear_tart').loops(1).id('kubejs:prickly_pear_tart_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:smore'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createDeploying('kubejs:incomplete_smore',['kubejs:incomplete_smore','create_confectionery:marshmallow']),
		event.recipes.createDeploying('kubejs:incomplete_smore',['kubejs:incomplete_smore','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_smore').loops(1).id('kubejs:smore_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:neapolitan_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:vanilla_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:chocolate_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:strawberry_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_neapolitan_ice_cream_sandwich').loops(1).id('kubejs:neapolitan_ice_cream_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:respiteful_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:green_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:black_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:yellow_tea_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_respiteful_ice_cream_sandwich').loops(1).id('kubejs:respiteful_ice_cream_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('create_confectionery:marshmallow_on_a_stick'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_marshmallow_stick',['kubejs:incomplete_marshmallow_stick','create_confectionery:marshmallow']),
		event.recipes.createDeploying('kubejs:incomplete_marshmallow_stick',['kubejs:incomplete_marshmallow_stick','create_confectionery:marshmallow'])
	]).transitionalItem('kubejs:incomplete_marshmallow_stick').loops(1).id('kubejs:marshmallow_stick_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:preserved_skewer'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_preserved_skewer',['kubejs:incomplete_preserved_skewer','brewinandchewin:kippers']),
		event.recipes.createDeploying('kubejs:incomplete_preserved_skewer',['kubejs:incomplete_preserved_skewer','brewinandchewin:jerky']),
		event.recipes.createDeploying('kubejs:incomplete_preserved_skewer',['kubejs:incomplete_preserved_skewer','culturaldelights:cut_pickle']),
		event.recipes.createDeploying('kubejs:incomplete_preserved_skewer',['kubejs:incomplete_preserved_skewer','minecraft:stick'])
	]).transitionalItem('kubejs:incomplete_preserved_skewer').loops(1).id('kubejs:preserved_skewer_assembly')
})

ServerEvents.tags('item', event => {
	event.get('forge:mushrooms')
		.add('abundant_atmosphere:poreshroom')
	    .add('abundant_atmosphere:poreshroom_shelf')
	    .add('abundant_atmosphere:foxfire_mushroom')
	    .add('abundant_atmosphere:foxfire_shelf')
	    .add('abundant_atmosphere:catsbane')
	    .add('abundant_atmosphere:catsbane_shelf')
	    .add('spelunkery:milly_bubcap')
	    .add('spelunkery:button_mushroom')
	    .add('spelunkery:crimini')
	    .add('spelunkery:portabella')
	    .add('spelunkery:inkcap_mushroom')
	    .add('spelunkery:white_inkcap_mushroom')
	
	event.get('quark:seed_pouch_holdable')
		.add('quark:glow_shroom')
	    .add('spelunkery:phosphor_fungus')
	    .add('spelunkery:mushgloom')
	    .add('neapolitan:mint_sprout')
	
	event.get('forge:tools')
		.add('kubejs:rose_gold_knife')
		.add('kubejs:copper_knife')
	
	event.get('forge:tools/knives')
		.add('kubejs:rose_gold_knife')
		.add('kubejs:copper_knife')
	
	event.get('brewinandchewin:raw_meats')
		.add('#forge:raw_goat')
	
	event.get('minecraft:leaves')
		.add('abundant_atmosphere:gourdrot_leaves')
		.add('abundant_atmosphere:ash_leaves')
	
	event.get('crittersandcompanions:ferret_food')
		.add('farmersdelight:chicken_cuts')
	
	event.get('forge:stripped_logs')
		.add('environmental:stripped_willow_log')
		.add('environmental:stripped_cherry_log')
		.add('environmental:stripped_wisteria_log')
		.add('upgrade_aquatic:stripped_river_log')
		.add('upgrade_aquatic:stripped_driftwood_log')
		.add('autumnity:stripped_maple_log')
		.add('autumnity:sappy_maple_log')
		.add('atmospheric:stripped_rosewood_log')
		.add('atmospheric:stripped_morado_log')
		.add('atmospheric:stripped_yucca_log')
		.add('atmospheric:stripped_aspen_log')
		.add('quark:stripped_ancient_log')
	
	event.get('forge:stripped_wood')
		.add('environmental:stripped_willow_wood')
		.add('environmental:stripped_cherry_wood')
		.add('environmental:stripped_wisteria_wood')
		.add('upgrade_aquatic:stripped_river_wood')
		.add('upgrade_aquatic:stripped_driftwood')
		.add('autumnity:stripped_maple_wood')
		.add('autumnity:sappy_maple_wood')
		.add('atmospheric:stripped_rosewood')
		.add('atmospheric:stripped_morado_wood')
		.add('atmospheric:stripped_yucca_wood')
		.add('atmospheric:stripped_aspen_wood')
		.add('quark:stripped_ancient_wood')
	
	event.get('forge:cooked_eggs')
		.remove('farmersdelight:fried_egg')
		.remove('naturalist:cooked_egg')
	
	event.get('forge:eggs')
		.remove('naturalist:duck_egg')
	
	event.get('minecraft:is_meat')
		.remove('naturalist:duck')
	    .remove('naturalist:cooked_duck')
	    .remove('naturalist:venison')
	    .remove('naturalist:cooked_venison')
	    .remove('naturalist:lizard_tail')
	    .remove('naturalist:cooked_lizard_tail')
	    .remove('naturalist:bass')
	    .remove('naturalist:cooked_bass')
	    .remove('naturalist:catfish')
	    .remove('naturalist:cooked_catfish')
	
	event.get('naturalist:bear_tempt_items')
		.remove('naturalist:venison')
	
	event.get('minecraft:fishes')
		.remove('crittersandcompanions:koi_fish')
	
	event.get('minecraft:flowers')
		.remove('nethersdelight:mimicarnation')
	
	event.get('minecraft:small_flowers')
		.remove('nethersdelight:mimicarnation')
	
	event.get('forge:dough')
		.remove('create:dough')
	
	event.get('forge:dough/wheat')
		.remove('create:dough')
	
	event.get('forge:plates')
		.remove('createaddition:zinc_sheet')
	
	event.get('forge:plates_zinc')
		.remove('createaddition:zinc_sheet')
	
	event.get('minecraft:piglin_loved')
		.remove('minecraft:enchanted_golden_apple')
	
	event.removeAllTagsFrom('createaddition:cake_base_baked')
	event.removeAllTagsFrom('createaddition:chocolate_cake')
	event.removeAllTagsFrom('createaddition:seed_oil_bucket')
	event.removeAllTagsFrom('createaddition:bioethanol_bucket')
	event.removeAllTagsFrom('create_enchantment_industry:hyper_experience_bottle')
	event.removeAllTagsFrom('farmersdelight:milk_bottle')
	
	event.get('minecraft:saplings')
		.add('culturaldelights:avocado_sapling')
	
	event.get('create:upright_on_belt')
		.add('neapolitan:milk_bottle')
	
	event.get('naturalist:bear_tempt_items')
		.add('environmental:venison')
		
	event.get('minecraft:music_discs')
		.add('kubejs:music_disc_eleven')
		.add('kubejs:music_disc_dog')
		.add('kubejs:music_disc_halland')
		.add('kubejs:music_disc_dalarna')
		.add('kubejs:music_disc_halland_dalarna')
})

ServerEvents.tags('block', event => {
	event.get('auditory:basalt_sounds')
		.add('create:andesite_alloy_block')
	    .add('create:cut_granite')
	    .add('create:cut_granite_stairs')
	    .add('create:cut_granite_slab')
	    .add('create:cut_granite_wall')
	    .add('create:cut_diorite')
	    .add('create:cut_diorite_stairs')
	    .add('create:cut_diorite_slab')
	    .add('create:cut_diorite_wall')
	    .add('create:cut_andesite')
	    .add('create:cut_andesite_stairs')
	    .add('create:cut_andesite_slab')
	    .add('create:cut_andesite_wall')
	    .add('quark:limestone')
	    .add('quark:limestone_stairs')
	    .add('quark:limestone_slab')
	    .add('quark:limestone_wall')
	    .add('quark:jasper')
	    .add('quark:jasper_stairs')
	    .add('quark:jasper_slab')
	    .add('quark:jasper_wall')
	    .add('quark:shale')
	    .add('quark:shale_stairs')
	    .add('quark:shale_slab')
	    .add('quark:shale_wall')
	    .add('quark:myalite')
	    .add('quark:myalite_stairs')
	    .add('quark:myalite_slab')
	    .add('quark:myalite_wall')
	    .add('quark:permafrost')
	    .add('quark:permafrost_stairs')
	    .add('quark:permafrost_slab')
	    .add('quark:permafrost_wall')
	    .add('kubejs:gingerbread_block')
	    .add('create_confectionery:gingerbread_stairs')
	    .add('create_confectionery:gingerbread_slab')
	    .add('kubejs:gingerbread_bricks')
	    .add('create_confectionery:gingerbread_brick_stairs')
	    .add('create_confectionery:gingerbread_brick_slab')
	
	event.get('auditory:clay_brick_sounds')
		.add('abundant_atmosphere:mixed_bricks')
	    .add('abundant_atmosphere:mixed_brick_stairs')
	    .add('abundant_atmosphere:mixed_brick_slab')
	    .add('abundant_atmosphere:mixed_brick_wall')
	    .add('supplementaries:ash_bricks')
	    .add('supplementaries:ash_bricks_stairs')
	    .add('supplementaries:ash_bricks_slab')
	    .add('supplementaries:ash_bricks_wall')
	    .add('supplementaries:lapis_bricks')
	    .add('supplementaries:lapis_bricks_stairs')
	    .add('supplementaries:lapis_bricks_slab')
	    .add('supplementaries:lapis_bricks_wall')
	    .add('sootychimneys:brick_chimney')
	    .add('sootychimneys:dirty_brick_chimney')
	    .add('clayworks:chiseled_bricks')
	    .add('architects_palette:olivestone_bricks')
	    .add('architects_palette:olivestone_brick_stairs')
	    .add('architects_palette:olivestone_brick_slab')
	    .add('architects_palette:olivestone_brick_wall')
	    .add('architects_palette:cracked_olivestone_bricks')
	    .add('autumnity:snail_shell_bricks')
	    .add('autumnity:snail_shell_brick_stairs')
	    .add('autumnity:snail_shell_brick_slab')
	    .add('autumnity:snail_shell_brick_wall')
	    .add('autumnity:chiseled_snail_shell_bricks')
	    .add('nethersdelight:blackstone_furnace')
	    .add('farmersdelight:stove')
	
	event.get('auditory:stone_brick_sounds')
		.add('minecraft:end_stone_bricks')
	    .add('minecraft:end_stone_brick_stairs')
	    .add('minecraft:end_stone_brick_slab')
	    .add('minecraft:end_stone_brick_wall')
	    .add('minecraft:polished_blackstone_bricks')
	    .add('minecraft:polished_blackstone_brick_stairs')
	    .add('minecraft:polished_blackstone_brick_slab')
	    .add('minecraft:polished_blackstone_brick_wall')
	    .add('minecraft:cracked_polished_blackstone_bricks')
	    .add('sootychimneys:stone_brick_chimney')
	    .add('sootychimneys:dirty_stone_brick_chimney')
	    .add('architects_palette:abyssaline_bricks')
	    .add('architects_palette:abyssaline_brick_slab')
	    .add('architects_palette:chiseled_abyssaline_bricks')
	    .add('architects_palette:hadaline_bricks')
	    .add('architects_palette:hadaline_brick_slab')
	    .add('architects_palette:chiseled_hadaline_bricks')
	    .add('architects_palette:myonite_bricks')
	    .add('architects_palette:myonite_brick_stairs')
	    .add('architects_palette:myonite_brick_slab')
	    .add('architects_palette:myonite_brick_wall')
	    .add('architects_palette:mushy_myonite_bricks')
	    .add('architects_palette:mushy_myonite_brick_stairs')
	    .add('architects_palette:mushy_myonite_brick_slab')
	    .add('architects_palette:mushy_myonite_brick_wall')
	    .add('architects_palette:heavy_stone_bricks')
	    .add('architects_palette:heavy_mossy_stone_bricks')
	    .add('architects_palette:heavy_cracked_stone_bricks')
	    .add('architects_palette:choral_end_stone_bricks')
	    .add('architects_palette:cracked_end_stone_bricks')
	    .add('architects_palette:chiseled_end_stone_bricks')
	    .add('architects_palette:heavy_end_stone_bricks')
	    .add('architects_palette:heavy_cracked_end_stone_bricks')
	    .add('architects_palette:onyx_bricks')
	    .add('architects_palette:onyx_brick_stairs')
	    .add('architects_palette:onyx_brick_slab')
	    .add('architects_palette:onyx_brick_wall')
	    .add('architects_palette:oracle_bricks')
	    .add('architects_palette:oracle_brick_stairs')
	    .add('architects_palette:oracle_brick_slab')
	    .add('architects_palette:oracle_brick_wall')
	    .add('architects_palette:dark_oracle_bricks')
	    .add('architects_palette:dark_oracle_brick_stairs')
	    .add('architects_palette:dark_oracle_brick_slab')
	    .add('architects_palette:dark_oracle_brick_wall')
	    .add('dustrial_decor:cinder_bricks')
	    .add('dustrial_decor:cinder_brick_stairs')
	    .add('dustrial_decor:cinder_brick_slab')
	    .add('upgrade_aquatic:kelpy_stone_bricks')
	    .add('upgrade_aquatic:kelpy_stone_brick_stairs')
	    .add('upgrade_aquatic:kelpy_stone_brick_slab')
	    .add('upgrade_aquatic:kelpy_stone_brick_wall')
	    .add('paletteblocks:cobblestone_bricks')
	    .add('paletteblocks:cobblestone_brick_stairs')
	    .add('paletteblocks:cobblestone_brick_slab')
	    .add('paletteblocks:cobblestone_brick_wall')
	    .add('paletteblocks:cracked_cobblestone_bricks')
	    .add('paletteblocks:mossy_cobblestone_bricks')
	    .add('paletteblocks:mossy_cobblestone_brick_stairs')
	    .add('paletteblocks:mossy_cobblestone_brick_slab')
	    .add('paletteblocks:mossy_cobblestone_brick_wall')
	    .add('quark:sandstone_bricks')
	    .add('quark:sandstone_bricks_stairs')
	    .add('quark:sandstone_bricks_slab')
	    .add('quark:sandstone_bricks_wall')
	    .add('quark:red_sandstone_bricks')
	    .add('quark:red_sandstone_bricks_stairs')
	    .add('quark:red_sandstone_bricks_slab')
	    .add('quark:red_sandstone_bricks_wall')
	    .add('quark:soul_sandstone_bricks')
	    .add('quark:soul_sandstone_bricks_stairs')
	    .add('quark:soul_sandstone_bricks_slab')
	    .add('quark:soul_sandstone_bricks_wall')
	    .add('atmospheric:arid_sandstone_bricks')
	    .add('atmospheric:arid_sandstone_brick_stairs')
	    .add('atmospheric:arid_sandstone_brick_slab')
	    .add('atmospheric:arid_sandstone_brick_wall')
	    .add('atmospheric:red_arid_sandstone_bricks')
	    .add('atmospheric:red_arid_sandstone_brick_stairs')
	    .add('atmospheric:red_arid_sandstone_brick_slab')
	    .add('atmospheric:red_arid_sandstone_brick_wall')
	    .add('quark:blackstone_bricks')
	    .add('quark:blackstone_bricks_stairs')
	    .add('quark:blackstone_bricks_slab')
	    .add('quark:blackstone_bricks_wall')
	    .add('quark:granite_bricks')
	    .add('quark:granite_bricks_stairs')
	    .add('quark:granite_bricks_slab')
	    .add('quark:granite_bricks_wall')
	    .add('quark:chiseled_granite_bricks')
	    .add('quark:diorite_bricks')
	    .add('quark:diorite_bricks_stairs')
	    .add('quark:diorite_bricks_slab')
	    .add('quark:diorite_bricks_wall')
	    .add('quark:chiseled_diorite_bricks')
	    .add('quark:andesite_bricks')
	    .add('quark:andesite_bricks_stairs')
	    .add('quark:andesite_bricks_slab')
	    .add('quark:andesite_bricks_wall')
	    .add('quark:chiseled_andesite_bricks')
	    .add('quark:calcite_bricks')
	    .add('quark:calcite_bricks_stairs')
	    .add('quark:calcite_bricks_slab')
	    .add('quark:calcite_bricks_wall')
	    .add('quark:chiseled_calcite_bricks')
	    .add('quark:dripstone_bricks')
	    .add('quark:dripstone_bricks_stairs')
	    .add('quark:dripstone_bricks_slab')
	    .add('quark:dripstone_bricks_wall')
	    .add('quark:chiseled_dripstone_bricks')
	    .add('quark:tuff_bricks')
	    .add('quark:tuff_bricks_stairs')
	    .add('quark:tuff_bricks_slab')
	    .add('quark:tuff_bricks_wall')
	    .add('quark:chiseled_tuff_bricks')
	    .add('quark:limestone_bricks')
	    .add('quark:limestone_bricks_stairs')
	    .add('quark:limestone_bricks_slab')
	    .add('quark:limestone_bricks_wall')
	    .add('quark:chiseled_limestone_bricks')
	    .add('quark:jasper_bricks')
	    .add('quark:jasper_bricks_stairs')
	    .add('quark:jasper_bricks_slab')
	    .add('quark:jasper_bricks_wall')
	    .add('quark:chiseled_jasper_bricks')
	    .add('quark:shale_bricks')
	    .add('quark:shale_bricks_stairs')
	    .add('quark:shale_bricks_slab')
	    .add('quark:shale_bricks_wall')
	    .add('quark:chiseled_shale_bricks')
	    .add('quark:myalite_bricks')
	    .add('quark:myalite_bricks_stairs')
	    .add('quark:myalite_bricks_slab')
	    .add('quark:myalite_bricks_wall')
	    .add('quark:chiseled_myalite_bricks')
	    .add('quark:permafrost_bricks')
	    .add('quark:permafrost_bricks_stairs')
	    .add('quark:permafrost_bricks_slab')
	    .add('quark:permafrost_bricks_wall')
	
	event.get('auditory:netherrack_sounds')
		.add('architects_palette:molten_nether_bricks')
	
	event.get('auditory:small_object_sounds')
		.add('minecraft:cocoa')
	
	event.get('auditory:gold_sounds')
		.add('minecraft:beacon')
	    .add('create:blaze_burner')
	    .add('create_enchantment_industry:blaze_enchanter')
	    .add('create_central_kitchen:blaze_stove')
	    .add('create:track')
	    .add('create:copycat_panel')
	    .add('create:copycat_step')
	    .add('toms_storage:ts.trim')
	    .add('quark:magnet')
	    .add('toms_storage:ts.inventory_cable')
	    .add('toms_storage:ts.storage_terminal')
	
	event.get('auditory:metal_sounds')
		.add('#minecraft:anvil')
	    .add('toms_storage:ts.inventory_cable_connector')
	    .add('toms_storage:ts.inventory_connector')
	    .add('create_enchantment_industry:printer')
	    .add('create_enchantment_industry:disenchanter')
	    .add('alloyed:bronze_bell')
	    .add('alloyed:steel_door')
	    .add('alloyed:locked_steel_door')
	
	event.get('auditory:raw_ore_block_sounds')
		.add('nethersdelight:blackstone_stove')
	
	event.get('auditory:obsidian_sounds')
		.add('endersdelight:endstone_stove')
	
	event.get('auditory:spawner_sounds')
		.add('quark:monster_box')
	
	event.get('auditory:gourd_sounds')
		.add('farmersdelight:stuffed_pumpkin_block')
	    .add('farmersdelight:honey_glazed_ham_block')
	    .add('farmersdelight:shepherds_pie_block')
	    .add('farmersdelight:roast_chicken_block')
	    .add('farmersdelight:rice_roll_medley_block')
	    .add('culturaldelights:exotic_roll_medley')
	    .add('nethersdelight:stuffed_hoglin')
	    .add('miners_delight:stuffed_squid')
	    .add('kubejs:eggplant_parmesan_block')
	    .add('kubejs:dark_chocolate_block')
	    .add('kubejs:dark_chocolate_pavement')
	    .add('kubejs:chiseled_dark_chocolate_pavement')
	    .add('kubejs:dark_chocolate_pavement_slab')
	    .add('kubejs:dark_chocolate_pavement_stairs')
	    .add('kubejs:dark_chocolate_pavement_wall')
	    .add('kubejs:dark_chocolate_tiles')
	    .add('kubejs:dark_chocolate_tile_slab')
	    .add('kubejs:dark_chocolate_tile_stairs')
		.add('kubejs:dark_chocolate_tile_wall')	
	    .add('kubejs:white_chocolate_block')
	    .add('kubejs:white_chocolate_pavement')
	    .add('kubejs:chiseled_white_chocolate_pavement')
	    .add('kubejs:white_chocolate_pavement_slab')
	    .add('kubejs:white_chocolate_pavement_stairs')
	    .add('kubejs:white_chocolate_pavement_wall')
	    .add('kubejs:white_chocolate_tiles')
	    .add('kubejs:white_chocolate_tile_slab')
	    .add('kubejs:white_chocolate_tile_stairs')
	    .add('kubejs:white_chocolate_tile_wall')
	    .add('ecologics:coconut')
	    .add('neapolitan:banana_bundle')
	
	event.get('minecraft:soul_fire_base_blocks')
		.add('spelunkery:rock_salt_block')
	
	event.get('minecraft:soul_fire_base_blocks')
		.add('supplementaries:soap_block')
	
	event.get('forge:smashable')
		.add('create:framed_glass_door')
	    .add('create:framed_glass_trapdoor')
	    .add('#forge:glass')
	    .add('#forge:glass_panes')
	
	event.get('minecraft:flowers')
		.remove('nethersdelight:mimicarnation')
	
	event.get('minecraft:small_flowers')
		.remove('nethersdelight:mimicarnation')
	
	event.removeAll('auditory:leaf_sounds')
	event.removeAll('auditory:plant_sounds')
	
	event.get('auditory:plant_sounds')
		.add('#minecraft:saplings')
	    .add('#minecraft:flowers')
	    .add('#minecraft:replaceable_plants')
	    .add('abundant_atmosphere:cave_sprouts')
	    .add('abundant_atmosphere:tall_cave_sprouts')
	    .add('minecraft:brown_mushroom')
	    .add('minecraft:red_mushroom')
	    .add('quark:glow_shroom')
	    .add('farmersdelight:brown_mushroom_colony')
	    .add('farmersdelight:red_mushroom_colony')
	    .add('dolt_compat:glowshroom_colony')
	    .add('minecraft:sugar_cane')
	    .add('nethersdelight:propelplant_cane')
	    .add('nethersdelight:propelplant_berry_stem')
	    .add('nethersdelight:propelplant_berry_cane')
	    .add('nethersdelight:propelplant_stem')
		
	event.get('auditory:leaf_sounds')
	    .add('#minecraft:leaves')
	    .add('#woodworks:leaf_piles')
		
	event.get('minecraft:saplings')
		.add('culturaldelights:avocado_sapling')
		
	event.get('auditory:ice_sounds')
		.add('ecologics:thin_ice')
		
	event.get('brewinandchewin:freeze_sources')
		.add('#auditory:ice_sounds')
	
	event.get('create:wrench_pickup')
		.add('toms_storage:ts.inventory_cable_connector')
	    .add('toms_storage:ts.inventory_cable')
	    .add('toms_storage:ts.storage_terminal')
	    .add('toms_storage:ts.inventory_connector')
	    .add('toms_storage:ts.inventory_connector')
	    .add('oreganized:exposer')
	    .add('minecraft:dispenser')
	    .add('minecraft:dropper')
	    .add('minecraft:lightning_rod')
	    .add('minecraft:redstone_lamp')
	    .add('minecraft:note_block')
	    .add('upgrade_aquatic:elder_eye')
	    .add('upgrade_aquatic:elder_guardian_spine')
	    .add('upgrade_aquatic:guardian_spine')
	    .add('quark:ender_watcher')
	    .add('quark:magnet')
	    .add('quark:pipe')
	    .add('quark:encased_pipe')
	    .add('supplementaries:cog_block')
	    .add('supplementaries:relayer')
	    .add('supplementaries:spring_launcher')
	    .add('supplementaries:speaker_block')
	    .add('supplementaries:redstone_illuminator')
	    .add('supplementaries:bellows')
	    .add('supplementaries:clock_block')
	    .add('supplementaries:crystal_display')
	    .add('supplementaries:wind_vane')
	    .add('supplementaries:faucet')
	    .add('additionaladditions:amethyst_lamp')
	
	event.get('minecraft:needs_stone_tool')
		.remove('minecraft:copper_ore')
		.remove('minecraft:deepslate_copper_ore')
		.remove('minecraft:copper_block')
	    .remove('minecraft:exposed_copper')
	    .remove('minecraft:weathered_copper')
	    .remove('minecraft:oxidized_copper')
	    .remove('minecraft:cut_copper')
	    .remove('minecraft:exposed_cut_copper')
	    .remove('minecraft:weathered_cut_copper')
	    .remove('minecraft:oxidized_cut_copper')
	    .remove('minecraft:cut_copper_stairs')
	    .remove('minecraft:exposed_cut_copper_stairs')
	    .remove('minecraft:weathered_cut_copper_stairs')
	    .remove('minecraft:oxidized_cut_copper_stairs')
	    .remove('minecraft:cut_copper_slab')
	    .remove('minecraft:exposed_cut_copper_slab')
	    .remove('minecraft:weathered_cut_copper_slab')
	    .remove('minecraft:oxidized_cut_copper_slab')
	    .remove('minecraft:waxed_copper_block')
	    .remove('minecraft:waxed_exposed_copper')
	    .remove('minecraft:waxed_weathered_copper')
	    .remove('minecraft:waxed_oxidized_copper')
	    .remove('minecraft:waxed_cut_copper')
	    .remove('minecraft:waxed_exposed_cut_copper')
	    .remove('minecraft:waxed_weathered_cut_copper')
	    .remove('minecraft:waxed_oxidized_cut_copper')
	    .remove('minecraft:waxed_cut_copper_stairs')
	    .remove('minecraft:waxed_exposed_cut_copper_stairs')
	    .remove('minecraft:waxed_weathered_cut_copper_stairs')
	    .remove('minecraft:waxed_oxidized_cut_copper_stairs')
	    .remove('minecraft:waxed_cut_copper_slab')
	    .remove('minecraft:waxed_exposed_cut_copper_slab')
	    .remove('minecraft:waxed_weathered_cut_copper_slab')
	    .remove('minecraft:waxed_oxidized_cut_copper_slab')
	    .remove('create:copper_shingles')
	    .remove('create:exposed_copper_shingles')
	    .remove('create:weathered_copper_shingles')
	    .remove('create:oxidized_copper_shingles')
	    .remove('create:copper_shingle_slab')
	    .remove('create:exposed_copper_shingle_slab')
	    .remove('create:weathered_copper_shingle_slab')
	    .remove('create:oxidized_copper_shingle_slab')
	    .remove('create:copper_shingle_stairs')
	    .remove('create:exposed_copper_shingle_stairs')
	    .remove('create:weathered_copper_shingle_stairs')
	    .remove('create:oxidized_copper_shingle_stairs')
	    .remove('create:waxed_copper_shingles')
	    .remove('create:waxed_exposed_copper_shingles')
	    .remove('create:waxed_weathered_copper_shingles')
	    .remove('create:waxed_oxidized_copper_shingles')
	    .remove('create:waxed_copper_shingle_slab')
	    .remove('create:waxed_exposed_copper_shingle_slab')
	    .remove('create:waxed_weathered_copper_shingle_slab')
	    .remove('create:waxed_oxidized_copper_shingle_slab')
	    .remove('create:waxed_copper_shingle_stairs')
	    .remove('create:waxed_exposed_copper_shingle_stairs')
	    .remove('create:waxed_weathered_copper_shingle_stairs')
	    .remove('create:waxed_oxidized_copper_shingle_stairs')
	    .remove('create:copper_tiles')
	    .remove('create:exposed_copper_tiles')
	    .remove('create:weathered_copper_tiles')
	    .remove('create:oxidized_copper_tiles')
	    .remove('create:copper_tile_slab')
	    .remove('create:exposed_copper_tile_slab')
	    .remove('create:weathered_copper_tile_slab')
	    .remove('create:oxidized_copper_tile_slab')
	    .remove('create:copper_tile_stairs')
	    .remove('create:exposed_copper_tile_stairs')
	    .remove('create:weathered_copper_tile_stairs')
	    .remove('create:oxidized_copper_tile_stairs')
	    .remove('create:waxed_copper_tiles')
	    .remove('create:waxed_exposed_copper_tiles')
	    .remove('create:waxed_weathered_copper_tiles')
	    .remove('create:waxed_oxidized_copper_tiles')
	    .remove('create:waxed_copper_tile_slab')
	    .remove('create:waxed_exposed_copper_tile_slab')
	    .remove('create:waxed_weathered_copper_tile_slab')
	    .remove('create:waxed_oxidized_copper_tile_slab')
	    .remove('create:waxed_copper_tile_stairs')
	    .remove('create:waxed_exposed_copper_tile_stairs')
	    .remove('create:waxed_weathered_copper_tile_stairs')
	    .remove('create:waxed_oxidized_copper_tile_stairs')
	
	event.get('minecraft:needs_iron_tool')
		.remove('create:zinc_ore')
		.remove('create:deepslate_zinc_ore')
		.remove('create:zinc_block')
		.remove('create:raw_zinc_block')
	
	event.get('minecraft:needs_stone_tool')
		.add('create:zinc_ore')
	    .add('create:deepslate_zinc_ore')
	    .add('create:zinc_block')
	    .add('create:raw_zinc_block')
})