// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
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
	event.remove({ id: 'miners_delight:improvised_barbecue_stick' })
	event.remove({ id: 'endersdelight:crispy_skewer' })
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
	
	event.smoking('abundant_atmosphere:roasted_mushrooms', '#forge:mushrooms').id('kubejs:roasted_mushrooms_smoking').xp(0.35)
	event.campfireCooking('abundant_atmosphere:roasted_mushrooms', '#forge:mushrooms').id('kubejs:roasted_mushrooms_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').id('kubejs:smoked_eggplant_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').id('kubejs:smoked_cut_eggplant_campfire').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_corn', 'culturaldelights:corn_cob').id('kubejs:smoked_corn_campfire').cookingTime(600)
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
		event.recipes.createFilling('kubejs:incomplete_quiche',['kubejs:incomplete_quiche',Fluid.of('minecraft:milk',250)]),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','brewinandchewin:flaxen_cheese_wedge']),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#balm:eggs'])
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
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','kubejs:cinnamon']),
		event.recipes.createFilling('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie',Fluid.of('kubejs:butterscotch',250)]),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','create:wheat_flour'])
	]).transitionalItem('kubejs:incomplete_butterscotch_cinnamon_pie').loops(3).id('kubejs:butterscotch_cinnamon_pie_assembly')
	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:pizza'),
	],'farmersdelight:wheat_dough',[
		event.recipes.createFilling('kubejs:incomplete_pizza',['kubejs:incomplete_pizza',Fluid.of('create_central_kitchen:tomato_sauce',250)]),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','brewinandchewin:flaxen_cheese_wedge']),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','farmersdelight:beef_patty']),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_pizza').loops(1).id('kubejs:pizza_assembly')
	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:ham_and_cheese_sandwich', 3),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','farmersdelight:smoked_ham']),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','minecraft:bread']),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','brewinandchewin:flaxen_cheese_wedge']),
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
		event.recipes.createDeploying('kubejs:incomplete_improvised_barbecue_stick',['kubejs:incomplete_improvised_barbecue_stick','miners_delight:baked_cave_carrot']),
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
})

ServerEvents.tags('item', event => {
	event.get('forge:mushrooms').add('abundant_atmosphere:poreshroom')
	event.get('forge:mushrooms').add('abundant_atmosphere:poreshroom_shelf')
	event.get('forge:mushrooms').add('abundant_atmosphere:foxfire_mushroom')
	event.get('forge:mushrooms').add('abundant_atmosphere:foxfire_shelf')
	event.get('forge:mushrooms').add('abundant_atmosphere:catsbane')
	event.get('forge:mushrooms').add('abundant_atmosphere:catsbane_shelf')
	event.get('forge:mushrooms').add('spelunkery:milly_bubcap')
	event.get('forge:mushrooms').add('spelunkery:button_mushroom')
	event.get('forge:mushrooms').add('spelunkery:crimini')
	event.get('forge:mushrooms').add('spelunkery:portabella')
	event.get('forge:mushrooms').add('spelunkery:inkcap_mushroom')
	event.get('forge:mushrooms').add('spelunkery:white_inkcap_mushroom')
	event.get('forge:vegetables').add('miners_delight:cave_carrot')
	event.get('forge:raw_fishes').add('babyfat:ranchu')
	event.get('quark:seed_pouch_holdable').add('quark:glow_shroom')
	event.get('quark:seed_pouch_holdable').add('spelunkery:phosphor_fungus')
	event.get('quark:seed_pouch_holdable').add('spelunkery:mushgloom')
	event.get('quark:seed_pouch_holdable').add('neapolitan:mint_sprout')
	event.get('forge:tools').add('kubejs:rose_gold_knife')
	event.get('forge:tools/knives').add('kubejs:rose_gold_knife')
	event.get('forge:tools').add('kubejs:copper_knife')
	event.get('forge:tools/knives').add('kubejs:copper_knife')
	event.get('brewinandchewin:raw_meats').add('#forge:raw_goat')
	event.get('forge:crops/cabbage').add('kubejs:lettuce_leaf')
	event.get('forge:salad_ingredients').add('kubejs:lettuce_leaf')
	event.get('autumnity:snail_food').add('babyfat:water_lettuce')
	event.get('autumnity:snail_food').add('kubejs:lettuce_leaf')
	event.get('autumnity:snail_tempt_items').add('babyfat:water_lettuce')
	event.get('autumnity:snail_tempt_items').add('kubejs:lettuce_leaf')
	event.get('supplementaries:chains').add('architects_palette:nether_brass_chain')
	event.get('minecraft:leaves').add('abundant_atmosphere:gourdrot_leaves')
	event.get('minecraft:leaves').add('abundant_atmosphere:ash_leaves')
	event.get('forge:plates').add('kubejs:lead_sheet')
	event.get('forge:plates/lead').add('kubejs:lead_sheet')
	event.get('crittersandcompanions:ferret_food').add('farmersdelight:chicken_cuts')
	event.get('forge:cooked_eggs').remove('farmersdelight:fried_egg')
	event.get('minecraft:fishes').remove('crittersandcompanions:koi_fish')
	event.get('minecraft:flowers').remove('nethersdelight:mimicarnation')
	event.get('minecraft:small_flowers').remove('nethersdelight:mimicarnation')
})

ServerEvents.tags('block', event => {
	event.get('auditory:basalt_sounds').add('create:cut_granite')
	event.get('auditory:basalt_sounds').add('create:cut_granite_stairs')
	event.get('auditory:basalt_sounds').add('create:cut_granite_slab')
	event.get('auditory:basalt_sounds').add('create:cut_granite_wall')
	event.get('auditory:basalt_sounds').add('create:cut_diorite')
	event.get('auditory:basalt_sounds').add('create:cut_diorite_stairs')
	event.get('auditory:basalt_sounds').add('create:cut_diorite_slab')
	event.get('auditory:basalt_sounds').add('create:cut_diorite_wall')
	event.get('auditory:basalt_sounds').add('create:cut_andesite')
	event.get('auditory:basalt_sounds').add('create:cut_andesite_stairs')
	event.get('auditory:basalt_sounds').add('create:cut_andesite_slab')
	event.get('auditory:basalt_sounds').add('create:cut_andesite_wall')
	event.get('auditory:basalt_sounds').add('quark:limestone')
	event.get('auditory:basalt_sounds').add('quark:limestone_stairs')
	event.get('auditory:basalt_sounds').add('quark:limestone_slab')
	event.get('auditory:basalt_sounds').add('quark:limestone_wall')
	event.get('auditory:basalt_sounds').add('quark:jasper')
	event.get('auditory:basalt_sounds').add('quark:jasper_stairs')
	event.get('auditory:basalt_sounds').add('quark:jasper_slab')
	event.get('auditory:basalt_sounds').add('quark:jasper_wall')
	event.get('auditory:basalt_sounds').add('quark:shale')
	event.get('auditory:basalt_sounds').add('quark:shale_stairs')
	event.get('auditory:basalt_sounds').add('quark:shale_slab')
	event.get('auditory:basalt_sounds').add('quark:shale_wall')
	event.get('auditory:basalt_sounds').add('quark:myalite')
	event.get('auditory:basalt_sounds').add('quark:myalite_stairs')
	event.get('auditory:basalt_sounds').add('quark:myalite_slab')
	event.get('auditory:basalt_sounds').add('quark:myalite_wall')
	event.get('auditory:basalt_sounds').add('quark:permafrost')
	event.get('auditory:basalt_sounds').add('quark:permafrost_stairs')
	event.get('auditory:basalt_sounds').add('quark:permafrost_slab')
	event.get('auditory:basalt_sounds').add('quark:permafrost_wall')
	
	event.get('auditory:clay_brick_sounds').add('abundant_atmosphere:mixed_bricks')
	event.get('auditory:clay_brick_sounds').add('abundant_atmosphere:mixed_brick_stairs')
	event.get('auditory:clay_brick_sounds').add('abundant_atmosphere:mixed_brick_slab')
	event.get('auditory:clay_brick_sounds').add('abundant_atmosphere:mixed_brick_wall')
	event.get('auditory:clay_brick_sounds').add('supplementaries:ash_bricks')
	event.get('auditory:clay_brick_sounds').add('supplementaries:ash_bricks_stairs')
	event.get('auditory:clay_brick_sounds').add('supplementaries:ash_bricks_slab')
	event.get('auditory:clay_brick_sounds').add('supplementaries:ash_bricks_wall')
	event.get('auditory:clay_brick_sounds').add('supplementaries:lapis_bricks')
	event.get('auditory:clay_brick_sounds').add('supplementaries:lapis_bricks_stairs')
	event.get('auditory:clay_brick_sounds').add('supplementaries:lapis_bricks_slab')
	event.get('auditory:clay_brick_sounds').add('supplementaries:lapis_bricks_wall')
	event.get('auditory:clay_brick_sounds').add('sootychimneys:brick_chimney')
	event.get('auditory:clay_brick_sounds').add('sootychimneys:dirty_brick_chimney')
	event.get('auditory:clay_brick_sounds').add('clayworks:chiseled_bricks')
	event.get('auditory:clay_brick_sounds').add('architects_palette:olivestone_bricks')
	event.get('auditory:clay_brick_sounds').add('architects_palette:olivestone_brick_stairs')
	event.get('auditory:clay_brick_sounds').add('architects_palette:olivestone_brick_slab')
	event.get('auditory:clay_brick_sounds').add('architects_palette:olivestone_brick_wall')
	event.get('auditory:clay_brick_sounds').add('architects_palette:cracked_olivestone_bricks')
	event.get('auditory:clay_brick_sounds').add('autumnity:snail_shell_bricks')
	event.get('auditory:clay_brick_sounds').add('autumnity:snail_shell_brick_stairs')
	event.get('auditory:clay_brick_sounds').add('autumnity:snail_shell_brick_slab')
	event.get('auditory:clay_brick_sounds').add('autumnity:snail_shell_brick_wall')
	event.get('auditory:clay_brick_sounds').add('autumnity:chiseled_snail_shell_bricks')
	event.get('auditory:clay_brick_sounds').add('nethersdelight:blackstone_furnace')
	
	event.get('auditory:stone_brick_sounds').add('minecraft:end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('minecraft:end_stone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('minecraft:end_stone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('minecraft:end_stone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('minecraft:polished_blackstone_bricks')
	event.get('auditory:stone_brick_sounds').add('minecraft:polished_blackstone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('minecraft:polished_blackstone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('minecraft:polished_blackstone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('minecraft:cracked_polished_blackstone_bricks')
	event.get('auditory:stone_brick_sounds').add('sootychimneys:stone_brick_chimney')
	event.get('auditory:stone_brick_sounds').add('sootychimneys:dirty_stone_brick_chimney')
	event.get('auditory:stone_brick_sounds').add('architects_palette:abyssaline_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:abyssaline_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:chiseled_abyssaline_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:hadaline_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:hadaline_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:chiseled_hadaline_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:myonite_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:myonite_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('architects_palette:myonite_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:myonite_brick_wall')
	event.get('auditory:stone_brick_sounds').add('architects_palette:mushy_myonite_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:mushy_myonite_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('architects_palette:mushy_myonite_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:mushy_myonite_brick_wall')
	event.get('auditory:stone_brick_sounds').add('architects_palette:heavy_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:heavy_mossy_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:heavy_cracked_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:choral_end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:cracked_end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:chiseled_end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:heavy_end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:heavy_cracked_end_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:onyx_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:onyx_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('architects_palette:onyx_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:onyx_brick_wall')
	event.get('auditory:stone_brick_sounds').add('architects_palette:oracle_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:oracle_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('architects_palette:oracle_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:oracle_brick_wall')
	event.get('auditory:stone_brick_sounds').add('architects_palette:dark_oracle_bricks')
	event.get('auditory:stone_brick_sounds').add('architects_palette:dark_oracle_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('architects_palette:dark_oracle_brick_slab')
	event.get('auditory:stone_brick_sounds').add('architects_palette:dark_oracle_brick_wall')
	event.get('auditory:stone_brick_sounds').add('dustrial_decor:cinder_bricks')
	event.get('auditory:stone_brick_sounds').add('dustrial_decor:cinder_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('dustrial_decor:cinder_brick_slab')
	event.get('auditory:stone_brick_sounds').add('upgrade_aquatic:kelpy_stone_bricks')
	event.get('auditory:stone_brick_sounds').add('upgrade_aquatic:kelpy_stone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('upgrade_aquatic:kelpy_stone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('upgrade_aquatic:kelpy_stone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:cobblestone_bricks')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:cobblestone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:cobblestone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:cobblestone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:cracked_cobblestone_bricks')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:mossy_cobblestone_bricks')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:mossy_cobblestone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:mossy_cobblestone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('paletteblocks:mossy_cobblestone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('quark:sandstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:sandstone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:sandstone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:sandstone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:red_sandstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:red_sandstone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:red_sandstone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:red_sandstone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:soul_sandstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:soul_sandstone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:soul_sandstone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:soul_sandstone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('atmospheric:arid_sandstone_bricks')
	event.get('auditory:stone_brick_sounds').add('atmospheric:arid_sandstone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('atmospheric:arid_sandstone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('atmospheric:arid_sandstone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('atmospheric:red_arid_sandstone_bricks')
	event.get('auditory:stone_brick_sounds').add('atmospheric:red_arid_sandstone_brick_stairs')
	event.get('auditory:stone_brick_sounds').add('atmospheric:red_arid_sandstone_brick_slab')
	event.get('auditory:stone_brick_sounds').add('atmospheric:red_arid_sandstone_brick_wall')
	event.get('auditory:stone_brick_sounds').add('quark:blackstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:blackstone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:blackstone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:blackstone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:granite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:granite_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:granite_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:granite_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_granite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:diorite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:diorite_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:diorite_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:diorite_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_diorite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:andesite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:andesite_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:andesite_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:andesite_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_andesite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:calcite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:calcite_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:calcite_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:calcite_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_calcite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:dripstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:dripstone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:dripstone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:dripstone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_dripstone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:tuff_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:tuff_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:tuff_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:tuff_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_tuff_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:limestone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:limestone_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:limestone_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:limestone_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_limestone_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:jasper_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:jasper_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:jasper_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:jasper_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_jasper_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:shale_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:shale_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:shale_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:shale_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_shale_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:myalite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:myalite_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:myalite_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:myalite_bricks_wall')
	event.get('auditory:stone_brick_sounds').add('quark:chiseled_myalite_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:permafrost_bricks')
	event.get('auditory:stone_brick_sounds').add('quark:permafrost_bricks_stairs')
	event.get('auditory:stone_brick_sounds').add('quark:permafrost_bricks_slab')
	event.get('auditory:stone_brick_sounds').add('quark:permafrost_bricks_wall')
	
	event.get('auditory:netherrack_sounds').add('architects_palette:molten_nether_bricks')
	
	event.get('auditory:small_object_sounds').add('minecraft:cocoa')
	
	event.get('auditory:gold_sounds').add('minecraft:beacon')
	event.get('auditory:gold_sounds').add('create:blaze_burner')
	event.get('auditory:gold_sounds').add('create:track')
	event.get('auditory:gold_sounds').add('create:copycat_panel')
	event.get('auditory:gold_sounds').add('create:copycat_step')
	event.get('auditory:gold_sounds').add('toms_storage:ts.trim')
	event.get('auditory:gold_sounds').add('quark:magnet')
	
	event.get('auditory:metal_sounds').add('farmersdelight:stove')
	event.get('auditory:metal_sounds').add('#minecraft:anvil')
	
	event.get('auditory:raw_ore_block_sounds').add('nethersdelight:blackstone_stove')
	
	event.get('auditory:obsidian_sounds').add('endersdelight:endstone_stove')
	
	event.get('auditory:spawner_sounds').add('quark:monster_box')
	
	event.get('auditory:gourd_sounds').add('farmersdelight:stuffed_pumpkin_block')
	event.get('auditory:gourd_sounds').add('farmersdelight:honey_glazed_ham_block')
	event.get('auditory:gourd_sounds').add('farmersdelight:shepherds_pie_block')
	event.get('auditory:gourd_sounds').add('farmersdelight:roast_chicken_block')
	event.get('auditory:gourd_sounds').add('farmersdelight:rice_roll_medley_block')
	event.get('auditory:gourd_sounds').add('culturaldelights:exotic_roll_medley')
	event.get('auditory:gourd_sounds').add('miners_delight:stuffed_squid')
	event.get('auditory:gourd_sounds').add('nethersdelight:stuffed_hoglin')
	event.get('auditory:gourd_sounds').add('kubejs:eggplant_parmesan_block')
	
	event.get('minecraft:soul_fire_base_blocks').add('spelunkery:rock_salt_block')
	
	event.get('minecraft:soul_fire_base_blocks').add('supplementaries:soap_block')
	
	event.get('forge:smashable').add('create:framed_glass_door')
	event.get('forge:smashable').add('create:framed_glass_trapdoor')
	event.get('forge:smashable').add('#forge:glass')
	event.get('forge:smashable').add('#forge:glass_panes')
	
	event.get('minecraft:flowers').remove('nethersdelight:mimicarnation')
	
	event.get('minecraft:small_flowers').remove('nethersdelight:mimicarnation')
	
	event.removeAll('auditory:leaf_sounds')
	event.removeAll('auditory:plant_sounds')
	
	event.get('auditory:plant_sounds').add('#minecraft:saplings')
	event.get('auditory:plant_sounds').add('#minecraft:flowers')
	event.get('auditory:plant_sounds').add('#minecraft:replaceable_plants')
	event.get('auditory:plant_sounds').add('abundant_atmosphere:cave_sprouts')
	event.get('auditory:plant_sounds').add('abundant_atmosphere:tall_cave_sprouts')
	event.get('auditory:plant_sounds').add('minecraft:brown_mushroom')
	event.get('auditory:plant_sounds').add('minecraft:red_mushroom')
	event.get('auditory:plant_sounds').add('quark:glow_shroom')
	event.get('auditory:plant_sounds').add('farmersdelight:brown_mushroom_colony')
	event.get('auditory:plant_sounds').add('farmersdelight:red_mushroom_colony')
	event.get('auditory:plant_sounds').add('dolt_compat:glowshroom_colony')
	event.get('auditory:plant_sounds').add('minecraft:sugar_cane')
	event.get('auditory:plant_sounds').add('nethersdelight:propelplant_cane')
	event.get('auditory:plant_sounds').add('nethersdelight:propelplant_berry_stem')
	event.get('auditory:plant_sounds').add('nethersdelight:propelplant_berry_cane')
	event.get('auditory:plant_sounds').add('nethersdelight:propelplant_stem')
	event.get('auditory:leaf_sounds').add('#minecraft:leaves')
	event.get('auditory:leaf_sounds').add('#woodworks:leaf_piles')
	
	event.get('brewinandchewin:freeze_sources').add('#auditory:ice_sounds')
	
	event.get('minecraft:needs_stone_tool').remove('minecraft:copper_ore')
	event.get('minecraft:needs_stone_tool').remove('minecraft:deepslate_copper_ore')
	event.get('minecraft:needs_stone_tool').remove('minecraft:copper_block')
	event.get('minecraft:needs_stone_tool').remove('minecraft:exposed_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:weathered_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:oxidized_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:exposed_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:weathered_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:oxidized_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:exposed_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:weathered_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:oxidized_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:exposed_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:weathered_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:oxidized_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_copper_block')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_exposed_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_weathered_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_oxidized_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_exposed_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_weathered_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_oxidized_cut_copper')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_exposed_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_weathered_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_oxidized_cut_copper_stairs')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_exposed_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_weathered_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('minecraft:waxed_oxidized_cut_copper_slab')
	event.get('minecraft:needs_stone_tool').remove('create:copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_shingles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_shingle_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_shingle_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:exposed_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:weathered_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:oxidized_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_tiles')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_tile_slab')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_exposed_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_weathered_copper_tile_stairs')
	event.get('minecraft:needs_stone_tool').remove('create:waxed_oxidized_copper_tile_stairs')
	
	event.get('minecraft:needs_iron_tool').remove('create:zinc_ore')
	event.get('minecraft:needs_stone_tool').add('create:zinc_ore')
	event.get('minecraft:needs_iron_tool').remove('create:deepslate_zinc_ore')
	event.get('minecraft:needs_stone_tool').add('create:deepslate_zinc_ore')
	event.get('minecraft:needs_iron_tool').remove('create:zinc_block')
	event.get('minecraft:needs_stone_tool').add('create:zinc_block')
	event.get('minecraft:needs_iron_tool').remove('create:raw_zinc_block')
	event.get('minecraft:needs_stone_tool').add('create:raw_zinc_block')
})

const captureItem = 'minecraft:bucket'
const capturedCrab = 'kubejs:crab_bucket'
BlockEvents.rightClicked(event => {
    if (event.item.id === capturedCrab) {
        let pos = event.player.rayTrace().block.offset(event.facing)
        event.server.runCommandSilent(`summon quark:crab ${pos.x} ${pos.y} ${pos.z} ${event.item.nbt.CapturedData}`)
        event.server.runCommandSilent(`summon minecraft:item ${event.player.x} ${event.player.y} ${event.player.z} {PickupDelay:1,Item:{id:"${captureItem}",Count:1b}}`)
        event.server.runCommandSilent(`playsound minecraft:item.bucket.empty_powder_snow player @p ${pos.x} ${pos.y} ${pos.z}`)
		event.item.count--
        event.player.swing()
    }
})
ItemEvents.entityInteracted(event => {
    if (event.item.id === captureItem && event.target.type == 'quark:crab') {
        event.server.runCommandSilent(`playsound minecraft:item.bucket.fill_powder_snow player @p ${event.player.x} ${event.player.y} ${event.player.z}`)
        event.item.count --
        let nbt = event.target.fullNBT
        delete nbt.UUID
        event.server.runCommandSilent(`summon minecraft:item ${event.player.x} ${event.player.y} ${event.player.z} {PickupDelay:1,Item:{id:"${capturedCrab}",Count:1b,tag:{CapturedData: ${nbt}}}}`)
		event.target.discard()
		event.player.swing()
    }
})