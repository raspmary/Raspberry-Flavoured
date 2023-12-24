// priority: 0

ServerEvents.recipes(event => {
	const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
	const noWhiteAllColours = ['orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
	
// Shapeless crafting
	allColours.forEach(allColour => {
        event.shapeless('8x minecraft:'+allColour+'_stained_glass', ['8x minecraft:glass', allColour+'_dye']).id('minecraft:'+allColour+'_stained_glass')
        event.shapeless('8x minecraft:'+allColour+'_stained_glass_pane', ['8x minecraft:glass_pane', allColour+'_dye']).id('minecraft:'+allColour+'_stained_glass_pane_from_glass_pane')
        event.shapeless('8x minecraft:'+allColour+'_terracotta', ['8x minecraft:terracotta', allColour+'_dye']).id('minecraft:'+allColour+'_terracotta')
        event.shapeless('8x quark:'+allColour+'_shingles', ['8x quark:shingles', allColour+'_dye']).id('quark:building/crafting/shingles/'+allColour+'_shingles_dye')
        event.shapeless('8x clayworks:'+allColour+'_terracotta_bricks', ['8x clayworks:terracotta_bricks', allColour+'_dye']).id('clayworks:'+allColour+'_terracotta_bricks_from_'+allColour+'_dye')
        event.shapeless('8x twigs:'+allColour+'_packed_silt', ['8x twigs:packed_silt', allColour+'_dye']).id('twigs:'+allColour+'_packed_silt')
        event.shapeless('8x twigs:'+allColour+'_silt_shingles', ['8x twigs:silt_shingles', allColour+'_dye']).id('twigs:'+allColour+'_silt_shingles')
        event.shapeless('8x oreganized:'+allColour+'_crystal_glass', ['8x minecraft:'+allColour+'_stained_glass', 'oreganized:lead_ingot']).id('oreganized:'+allColour+'_crystal_glass')
        event.shapeless('8x oreganized:'+allColour+'_crystal_glass_pane', ['8x minecraft:'+allColour+'_stained_glass_pane', 'oreganized:lead_ingot'])
    })
	
	noWhiteAllColours.forEach(noWhiteAllColour => {
        event.shapeless('8x minecraft:'+noWhiteAllColour+'_carpet', ['8x minecraft:white_carpet', noWhiteAllColour+'_dye']).id('minecraft:'+noWhiteAllColour+'_carpet_from_white_carpet')
		event.shapeless('another_furniture:'+noWhiteAllColour+'_lamp', ['another_furniture:white_lamp', noWhiteAllColour+'_dye'])
		event.shapeless('another_furniture:'+noWhiteAllColour+'_sofa', ['another_furniture:white_sofa', noWhiteAllColour+'_dye'])
    })
	
	event.shapeless('9x minecraft:amethyst_shard', ['twigs:polished_amethyst'])
	event.shapeless('8x kubejs:charcoal_lump', ['charcoal'])
	event.shapeless('charcoal', ['8x kubejs:charcoal_lump'])
	event.shapeless('4x ecologics:surface_moss', ['minecraft:moss_block']).id('ecologics:surface_moss')
	event.shapeless('2x minecraft:bone_meal', ['architects_palette:withered_bone'])
	event.shapeless('abnormals_delight:passionfruit_glazed_duck', ['#forge:cooked_duck', '2x #forge:fruits/passionfruit', 'minecraft:baked_potato', 'minecraft:bowl']).id('abnormals_delight:passionfruit_glazed_duck')
	event.shapeless('autumnity:pumpkin_bread', ['autumnity:syrup_bottle', 'farmersdelight:pumpkin_slice', 'farmersdelight:wheat_dough']).id('create_central_kitchen:crafting/pumpkin_bread_from_dough_and_pumpkin_slice')
	event.shapeless('farmersdelight:melon_popsicle', ['neapolitan:ice_cubes', 'minecraft:melon_slice', 'minecraft:stick']).id('abnormals_delight:neapolitan/melon_popsicle')
	event.shapeless('4x additionaladditions:copper_patina', ['additionaladditions:patina_block'])
	event.shapeless('2x architects_palette:algal_blend', ['clay_ball', 'kelp', 'kelp', 'clay_ball']).id('architects_palette:algal_blend')
	event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', '#raspberry_flavoured:moss']).id('architects_palette:heavy_mossy_stone_bricks')
	event.shapeless('2x twigs:packed_silt', ['2x twigs:silt', 'farmersdelight:straw']).id('twigs:packed_silt')
	event.shapeless('minecraft:leather', ['2x rabbit_hide']).id('minecraft:leather')
	event.shapeless('3x culturaldelights:corn_dough', ['water_bucket', '3x #raspberry_flavoured:corn_dough_ingredients']).id('culturaldelights:corn_dough')
	event.shapeless('3x culturaldelights:corn_dough', ['#balm:eggs', '3x #raspberry_flavoured:corn_dough_ingredients'])
	event.shapeless('minecraft:globe_banner_pattern', ['minecraft:paper', ['supplementaries:globe', 'supplementaries:globe_sepia']])
	event.shapeless('twigs:mossy_bricks', ['minecraft:bricks', '#raspberry_flavoured:moss'])
	event.shapeless('twigs:twisting_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:warped_roots', 'minecraft:twisting_vines']]).id('twigs:twisting_polished_blackstone_bricks')
	event.shapeless('twigs:weeping_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:crimson_roots', 'minecraft:weeping_vines']]).id('twigs:weeping_polished_blackstone_bricks')
	event.shapeless(Item.of('minecraft:potion',4,{Potion:"minecraft:water"}).strongNBT(), ['minecraft:water_bucket', '4x minecraft:glass_bottle'])
	event.shapeless(Item.of('minecraft:potion',3,{Potion:"minecraft:water"}).strongNBT(), ['minecraft:water_bucket', '3x minecraft:glass_bottle'])
	event.shapeless('minecraft:water_bucket', ['minecraft:bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()])
	event.shapeless('neapolitan:milk_bottle', ['minecraft:glass_bottle', '3x ecologics:coconut_slice'])

// Shaped crafting
	allColours.forEach(allColour => {
        event.shaped('3x minecraft:'+allColour+'_banner', ['AAA', 'AAA', ' B '], {A: 'minecraft:'+allColour+'_wool', B: 'stick'}).id('minecraft:'+allColour+'_banner')
        event.shaped('3x supplementaries:flag_'+allColour, ['AAA', 'AAA', 'B  '], {A: 'minecraft:'+allColour+'_wool', B: 'stick'}).id('supplementaries:flags/flag_'+allColour)
    })
	
	event.shaped('twigs:polished_amethyst', ['AAA', 'AAA', 'AAA'], {A: 'minecraft:amethyst_shard'}).id('twigs:polished_amethyst')
	event.shaped('2x minecraft:flower_pot', ['ABA', ' A '], {A: 'minecraft:brick', B: 'minecraft:dirt'}).id('minecraft:flower_pot')
	event.shaped('6x alloyed:steel_trapdoor', ['AAA', 'AAA'], {A: 'alloyed:steel_ingot'}).id('alloyed:crafting/steel_trapdoor')
	event.shaped('6x architects_palette:twisted_trapdoor', ['AAA', 'AAA'], {A: 'architects_palette:twisted_planks'}).id('architects_palette:twisted_trapdoor')
	event.shaped('another_furniture:furniture_hammer', [' BB', ' AB', 'A  '], {A: 'minecraft:stick', B: '#minecraft:planks'}).id('another_furniture:furniture_hammer')
	event.shaped('4x architects_palette:tuff_bricks', ['BA', 'AA'], {A: 'minecraft:tuff', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:tuff_bricks')
	event.shaped('4x architects_palette:calcite_bricks', ['BA', 'AA'], {A: 'minecraft:calcite', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:calcite_bricks')
	event.shaped('4x architects_palette:dripstone_bricks', ['BA', 'AA'], {A: 'minecraft:dripstone_block', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:dripstone_bricks')
	event.shaped('4x twigs:smooth_basalt_bricks', ['BA', 'AA'], {A: 'minecraft:smooth_basalt', B: 'paletteblocks:cobblestone_bricks'}).id('twigs:smooth_basalt_bricks')
	event.shaped('4x architects_palette:sunstone', ['AB', 'BA'], {A: 'minecraft:basalt', B: 'architects_palette:sunmetal_brick'}).id('architects_palette:sunstone')
	event.shaped('8x architects_palette:plating_block', [' B ', 'BAB', ' B '], {A: ['#forge:ingots/iron', '#forge:ingots/lead'], B: ['#forge:nuggets/iron', '#forge:nuggets/lead']}).id('architects_palette:plating_block')
	event.shaped('3x architects_palette:hazard_sign', [' A ', 'ABA'], {A: ['#forge:nuggets/iron', '#forge:nuggets/lead'], B: 'create_dd:hazard_block'}).id('architects_palette:hazard_sign')
	event.shaped('4x architects_palette:nether_brass_torch', ['AC', 'B '], {A: '#minecraft:coals', B: 'minecraft:stick', C: 'additionaladditions:copper_patina'}).id('architects_palette:nether_brass_torch')
	event.shaped('twigs:lamp', ['AAA', 'BBB', 'AAA'], {A: 'iron_ingot', B: 'torch'}).id('twigs:lamp')
	event.shaped('twigs:soul_lamp', ['AAA', 'BBB', 'AAA'], {A: 'iron_ingot', B: 'soul_torch'}).id('twigs:soul_lamp')
	event.shaped('3x minecraft:bone_block', ['AAA', 'AAA', 'AAA'], {A: 'bone'})
	event.shaped('incubation:twig_nest', ['A A', 'AAA'], {A: 'twigs:twig'})
	event.shaped('etched:blank_music_disc', ['AAA', 'A A', 'AAA'], {A: 'minecraft:disc_fragment_5'})
	event.shaped('supplementaries:altimeter', [' A ', 'ABA', ' A '], {A: 'copper_ingot', B: 'spelunkery:cinnabar'})
	event.shaped('quark:torch_arrow', ['A', 'B'], {A: '#minecraft:coals', B: 'minecraft:arrow'}).id('quark:tools/crafting/torch_arrow')
	event.shaped('minecraft:glass', ['AA', 'AA'], {A: 'quark:clear_shard'}).id('quark:tweaks/crafting/clear_glass')
	event.shaped('minecraft:moss_block', ['AA', 'AA'], {A: 'ecologics:surface_moss'})
	event.shaped('4x minecraft:pumpkin', ['AA', 'AA'], {A: 'autumnity:large_pumpkin_slice'})
	event.shaped('create:peculiar_bell', [' B ', 'BAB', ' B '], {A: 'minecraft:bell', B: 'create:brass_ingot'}).id('create:crafting/curiosities/peculiar_bell')
	event.shaped('2x minecraft:end_crystal', ['AAA', 'ABA', 'ACA'], {A: '#forge:glass/colorless', B: 'minecraft:ender_eye', C: 'minecraft:ghast_tear'}).id('minecraft:end_crystal')
	event.shaped('kubejs:music_disc_shimmer', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'quark:glow_shroom'})
	event.shaped('kubejs:music_disc_frontier', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'hay_block'})
	event.shaped('2x minecraft:ender_chest', ['AAA', 'ABA', 'AAA'], {A: 'obsidian', B: 'ender_eye'}).id('minecraft:ender_chest')
	event.shaped('8x minecraft:copper_block', ['AA', 'AA'], {A: 'minecraft:copper_ingot'})
	event.shaped('4x supplementaries:slice_map', [' A ', 'ABA', ' A '], {A: 'minecraft:map', B: 'supplementaries:altimeter'}).id('supplementaries:slice_map')

// Smelting
	event.smelting('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').xp(0.35)
	event.smelting('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').xp(0.35)
	event.smelting('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant').xp(0.35)
	event.smelting('minecraft:glass', '#minecraft:sand').cookingTime(200).xp(0.1).id('minecraft:glass')
	event.smelting('minecraft:glass', 'quark:dirty_glass').cookingTime(100).id('quark:tweaks/smelting/clean_glass')
	event.smelting('minecraft:glass', 'create:tiled_glass').cookingTime(40).id('create:smelting/glass_from_tiled_glass')
	event.smelting('minecraft:glass', 'create:framed_glass').cookingTime(40).id('create:smelting/glass_from_framed_glass')
	event.smelting('minecraft:glass', 'create:horizontal_framed_glass').cookingTime(40).id('create:smelting/glass_from_horizontal_framed_glass')
	event.smelting('minecraft:glass', 'create:vertical_framed_glass').cookingTime(40).id('create:smelting/glass_from_vertical_framed_glass')
	event.smelting('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(200)
	event.smelting('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(200)

// Smoking
	event.campfireCooking('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(600)
	event.campfireCooking('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(600)

// Baking
	event.custom({type: 'clayworks:baking', cookingtime: 100, experience: 0.1, ingredient: {tag: 'minecraft:sand'}, result: 'minecraft:glass'}).id('clayworks:glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 50, ingredient: {item: 'quark:dirty_glass'}, result: 'minecraft:glass'}).id('clayworks:quark/clean_glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:tiled_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:horizontal_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:vertical_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'ecologics:coconut_husk'}, result: 'kubejs:charcoal_lump'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'farmersdelight:tree_bark'}, result: 'kubejs:charcoal_lump'})

// Campfire
	event.campfireCooking('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant').cookingTime(600)
	
// Smithing
	event.smithing('minecraft:recovery_compass', 'minecraft:compass', 'quark:soul_bead').id('minecraft:recovery_compass')
	
// Stonecutting
	event.stonecutting('4x alloyed:steel_bars', 'alloyed:steel_ingot').id('alloyed:crafting/steel_bars')
	event.stonecutting('4x architects_palette:entwine_bars', 'architects_palette:entwine_rod').id('architects_palette:entwine_bars')
	event.stonecutting('4x architects_palette:sunmetal_bars', 'architects_palette:sunmetal_brick').id('architects_palette:sunmetal_bars')

// Cutting board
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:dripstone_block'}], tool: {type: 'farmersdelight:tool_action', action: 'pickaxe_dig'}, 
	result: [{item: 'minecraft:pointed_dripstone', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:yucca_wood'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_yucca_wood', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:yucca_log'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_yucca_log', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:rosewood'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_rosewood', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:rosewood_log'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_rosewood_log', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'twigs:twig'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:stick', count: 2}, {item: 'minecraft:stick', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:amethyst_block'}], tool: {type: 'farmersdelight:tool_action', action: 'pickaxe_dig'}, 
	result: [{item: 'minecraft:amethyst_shard', count: 1, chance: 0.5}, {item: 'minecraft:amethyst_shard', count: 1, chance: 0.25}]}).id('farmersdelight:cutting/amethyst_block')
	event.custom({type: 'farmersdelight:cutting', ingredients: [[{tag: 'minecraft:music_discs'}, {item: 'etched:blank_music_disc'}]], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:disc_fragment_5', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:corn_cob'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 1}, {item: 'culturaldelights:corn_kernels', count: 1, chance: 0.25}, {item: 'farmersdelight:straw', count: 1, chance: 0.25}]}).id('culturaldelights:cutting/corn_kernels')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_corn'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 2, chance: 0.5}, {item: 'minecraft:wheat_seeds', count: 2, chance: 0.25}, {item: 'farmersdelight:straw', count: 1, chance: 0.25}]}).id('culturaldelights:cutting/wild_corn')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_cucumbers'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:cucumber_seeds', count: 1}, {item: 'minecraft:yellow_dye', count: 2, chance: 0.5}]}).id('culturaldelights:cutting/wild_cucumbers')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_eggplants'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:eggplant_seeds', count: 1}, {item: 'minecraft:light_gray_dye', count: 2, chance: 0.5}]}).id('culturaldelights:cutting/wild_eggplants')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_tea_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:tea_seeds', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_coffee_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:coffee_beans', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_tea_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:tea_seeds', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:leather'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:rabbit_hide', count: 1}, {item: 'minecraft:rabbit_hide', count: 1, chance: 0.5}]})

// Cooking
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:cactus'}, {item: 'minecraft:cactus'}, {item: 'minecraft:sugar'}], result: {item: 'kubejs:cactus_juice', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:melon_juice', count: 1}}).id('farmersdelight:melon_juice')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:apple'}, {item: 'kubejs:cinnamon'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:apple_cider', count: 1}}).id('farmersdelight:cooking/apple_cider')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'farmersrespite:green_tea', count: 1}}).id('farmersrespite:brewing/green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea_leaves'}, {item: 'farmersrespite:yellow_tea_leaves'}], result: {item: 'farmersrespite:yellow_tea', count: 1}}).id('farmersrespite:brewing/yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea_leaves'}, {item: 'farmersrespite:black_tea_leaves'}], result: {item: 'farmersrespite:black_tea', count: 1}}).id('farmersrespite:brewing/black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:dandelion'}, {item: 'minecraft:dandelion'}, {tag: 'farmersrespite:tea_leaves'}], result: {item: 'farmersrespite:dandelion_tea', count: 1}}).id('farmersrespite:brewing/dandelion_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:rose_hips'}, {item: 'farmersrespite:rose_hips'}], result: {item: 'farmersrespite:rose_hip_tea', count: 1}}).id('farmersrespite:brewing/rose_hip_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_berries'}, {item: 'minecraft:glow_berries'}], result: {item: 'farmersrespite:gamblers_tea', count: 1}}).id('farmersrespite:brewing/gamblers_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:nether_wart'}, {item: 'minecraft:fermented_spider_eye'}], result: {item: 'farmersrespite:purulent_tea', count: 1}}).id('farmersrespite:brewing/purulent_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_beans'}, {item: 'farmersrespite:coffee_beans'}], result: {item: 'farmersrespite:coffee', count: 1}}).id('farmersrespite:brewing/coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:chocolate_bar'}, {item: 'farmersrespite:coffee_beans'}, {tag: 'forge:milk'}], result: {item: 'respiteful:mocha_coffee', count: 1}}).id('respiteful:brewing/mocha_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'environmental:cherries'}, {item: 'environmental:cherries'}, {item: 'farmersrespite:black_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:adzuki_milk_tea', count: 1}}).id('respiteful:brewing/adzuki_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:dried_vanilla_pods'}, {item: 'farmersrespite:yellow_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:vanilla_milk_tea', count: 1}}).id('respiteful:brewing/vanilla_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:mint_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'respiteful:mint_green_tea', count: 1}}).id('respiteful:brewing/mint_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'minecraft:leaves'}, {tag: 'minecraft:leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'farmersrespite:tea_leaves'}, {tag: 'farmersrespite:tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 2}}).id('create_central_kitchen:brewing/builders_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'minecraft:cocoa_beans_or_powder'}, {tag: 'minecraft:cocoa_beans_or_powder'}, {tag: 'forge:milk'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:hot_cocoa', count: 1}}).id('farmersdelight:cooking/hot_cocoa')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_green_tea', count: 1}}).id('farmersrespite:brewing/long_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_yellow_tea', count: 1}}).id('farmersrespite:brewing/long_yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_black_tea', count: 1}}).id('farmersrespite:brewing/long_black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_coffee', count: 1}}).id('farmersrespite:brewing/long_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_green_tea', count: 1}}).id('farmersrespite:brewing/strong_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_yellow_tea', count: 1}}).id('farmersrespite:brewing/strong_yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_black_tea', count: 1}}).id('farmersrespite:brewing/strong_black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_coffee', count: 1}}).id('farmersrespite:brewing/strong_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'forge:raw_goat'}, {item: 'minecraft:potato'}, {item: 'farmersdelight:rice'}, {item: 'farmersdelight:tomato_sauce'}], result: {item: 'windswept:goat_stew', count: 1}}).id('windswept:cooking/goat_stew')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'forge:raw_fishes/perch'}, {item: 'minecraft:red_mushroom'}, {item: 'farmersdelight:rice'}, {item: 'farmersdelight:tomato'}], result: {item: 'abnormals_delight:perch_with_mushrooms', count: 1}}).id('abnormals_delight:perch_with_mushrooms')
	
// Warping
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:logs'}], result: {item: 'architects_palette:twisted_log'}}).id('architects_palette:warping/twisted_log_from_logs')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:stripped_logs'}], result: {item: 'architects_palette:stripped_twisted_log'}}).id('architects_palette:warping/twisted_stripped_log_from_logs')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:wood'}], result: {item: 'architects_palette:twisted_wood'}}).id('architects_palette:warping/twisted_wood_from_wood')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:stripped_wood'}], result: {item: 'architects_palette:stripped_twisted_wood'}}).id('architects_palette:warping/twisted_stripped_wood_from_wood')
	
// Pressing
	event.recipes.create.pressing(['minecraft:disc_fragment_5', Item.of('minecraft:disc_fragment_5').withChance(0.5)], '#minecraft:music_discs')

// Compacting
	event.recipes.create.compacting([Fluid.of('minecraft:milk',125), Item.of('ecologics:coconut_husk').withChance(0.125)], 'ecologics:coconut_slice')
	event.recipes.create.compacting([Fluid.of('minecraft:milk',250), Item.of('ecologics:coconut_husk').withChance(0.25)], 'ecologics:coconut')

// Mixing
	event.recipes.create.mixing('additionaladditions:rose_gold_alloy', ['copper_ingot', 'copper_ingot', 'copper_ingot', 'gold_ingot', 'gold_ingot', 'gold_ingot'])
	event.recipes.create.mixing('4x alloyed:steel_ingot', ['iron_ingot', 'iron_ingot', 'iron_ingot', 'iron_ingot', 'fire_charge', 'fire_charge']).heated().id('alloyed:mixing/steel_ingot')
	event.recipes.create.mixing('4x architects_palette:algal_blend', ['clay_ball', 'clay_ball', 'kelp', 'kelp'])
	event.recipes.create.mixing('4x architects_palette:cerebral_plate', ['tuff', 'tuff', 'quartz', '#minecraft:coals']).heated().id('architects_palette:cerebral_plate')
	event.recipes.create.mixing('culturaldelights:corn_dough', ['kubejs:corn_flour', Fluid.of('minecraft:water',250)])
	
// Milling
	event.recipes.create.milling(['2x farmersrespite:coffee_beans', 'minecraft:red_dye'], 'farmersrespite:coffee_berries').id('create_central_kitchen:milling/coffee_berries')
	event.recipes.create.milling(['4x bone_meal', Item.of('minecraft:bone_meal',3).withChance(0.25), Item.of('minecraft:black_dye').withChance(0.25)], 'architects_palette:withered_bone')
	event.recipes.create.milling(['kubejs:corn_flour', Item.of('kubejs:corn_flour',2).withChance(0.5), Item.of('farmersdelight:straw').withChance(0.25)], 'culturaldelights:corn_cob')
	event.recipes.create.milling('kubejs:corn_flour', 'culturaldelights:corn_kernels')
	event.recipes.create.milling(['culturaldelights:cucumber_seeds', 'yellow_dye'], 'culturaldelights:wild_cucumbers')
	event.recipes.create.milling(['kubejs:corn_flour', Item.of('minecraft:wheat_seeds').withChance(0.5), Item.of('farmersdelight:straw').withChance(0.35)], 'culturaldelights:wild_corn')
	event.recipes.create.milling(['culturaldelights:eggplant_seeds', 'light_gray_dye'], 'culturaldelights:wild_eggplants')
	event.recipes.create.milling(['farmersrespite:coffee_beans', 'black_dye'], 'farmersrespite:wild_coffee_bush')
	event.recipes.create.milling(['2x bone_meal', Item.of('minecraft:bone_meal',2).withChance(0.2)], 'ecologics:seashell')

// Crushing
	event.recipes.create.crushing(['2x spelunkery:rough_cinnabar', Item.of('redstone').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'redstone_ore').id('create:crushing/redstone_ore')
	event.recipes.create.crushing(['create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'kubejs:lead_ore').id('create:crushing/lead_ore')
	event.recipes.create.crushing(['spelunkery:rough_diamond', Item.of('spelunkery:rough_diamond').withChance(0.75), Item.of('create:experience_nugget',2).withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'diamond_ore').id('create:crushing/diamond_ore')
	event.recipes.create.crushing(['3x spelunkery:rough_lazurite', Item.of('spelunkery:rough_lazurite').withChance(0.5), Item.of('create:experience_nugget',2).withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'lapis_ore').id('create:crushing/lapis_ore')
	event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'copper_ore').id('create:crushing/copper_ore')
	event.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.75), Item.of('create:experience_nugget',3).withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'oreganized:silver_ore').id('create:crushing/silver_ore')
	event.recipes.create.crushing(['coal', Item.of('coal').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'coal_ore').id('create:crushing/coal_ore')
	event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'iron_ore').id('create:crushing/iron_ore')
	event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.75), Item.of('create:experience_nugget',2).withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'gold_ore').id('create:crushing/gold_ore')
	event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.75), Item.of('create:experience_nugget').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'create:zinc_ore').id('create:crushing/zinc_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_copper_ore').id('create:crushing/deepslate_copper_ore')
	
// Splashing
	event.recipes.create.splashing('culturaldelights:corn_dough', 'kubejs:corn_flour')
	
// Emptying
	event.recipes.create.emptying([Fluid.of('create_enchantment_industry:ink',750), 'minecraft:glass_bottle'], 'supplementaries:antique_ink')
	
// Sequenced assembly
	event.recipes.createSequencedAssembly([
		Item.of('create:redstone_link'),
	],'create:brass_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:ender_pearl']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:redstone_torch'])
	]).transitionalItem('kubejs:incomplete_redstone_link').loops(1).id('kubejs:redstone_link_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('create:super_glue'),
	],'create:iron_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_glue',['kubejs:incomplete_glue','minecraft:slime_ball']),
		event.recipes.createDeploying('kubejs:incomplete_glue',['kubejs:incomplete_glue','minecraft:iron_nugget'])
	]).transitionalItem('kubejs:incomplete_glue').loops(1).id('kubejs:glue_assembly')
	
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
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','create:cinder_flour']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','minecraft:nether_wart'])
	]).transitionalItem('kubejs:incomplete_souldough').loops(1).id('kubejs:souldough_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('farmersrespite:nether_wart_sourdough'),
	],'minecraft:soul_soil',[
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','sob:cinder_dough']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','minecraft:nether_wart'])
	]).transitionalItem('kubejs:incomplete_souldough').loops(1).id('kubejs:souldough_assembly_alt')
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
		event.recipes.createDeploying('kubejs:incomplete_nether_skewer',['kubejs:incomplete_nether_skewer','nethersdelight:propelpearl']),
		event.recipes.createDeploying('kubejs:incomplete_nether_skewer',['kubejs:incomplete_nether_skewer','nethersdelight:propelpearl'])
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
		Item.of('kubejs:bass_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_bass_roll',['kubejs:incomplete_bass_roll','kubejs:bass_slice']),
		event.recipes.createDeploying('kubejs:incomplete_bass_roll',['kubejs:incomplete_bass_roll','kubejs:bass_slice']),
		event.recipes.createDeploying('kubejs:incomplete_bass_roll',['kubejs:incomplete_bass_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_bass_roll').loops(1).id('kubejs:bass_roll_assembly')

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
		Item.of('kubejs:prismatic_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:banana_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:adzuki_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:mint_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_prismatic_ice_cream_sandwich').loops(1).id('kubejs:prismatic_ice_cream_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('respiteful:respiteful_ice_cream'),
	],'respiteful:green_tea_ice_cream',[
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream',['kubejs:incomplete_respiteful_ice_cream',Fluid.of('create_central_kitchen:black_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream',['kubejs:incomplete_respiteful_ice_cream',Fluid.of('create_central_kitchen:yellow_tea_ice_cream',250)])
	]).transitionalItem('kubejs:incomplete_respiteful_ice_cream').loops(1).id('kubejs:respiteful_ice_cream_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:prismatic_ice_cream'),
	],'neapolitan:banana_ice_cream',[
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream',['kubejs:incomplete_prismatic_ice_cream',Fluid.of('create_central_kitchen:adzuki_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream',['kubejs:incomplete_prismatic_ice_cream',Fluid.of('create_central_kitchen:mint_ice_cream',250)])
	]).transitionalItem('kubejs:incomplete_prismatic_ice_cream').loops(1).id('kubejs:prismatic_ice_cream_assembly')

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

	event.recipes.createSequencedAssembly([
		Item.of('sob:duck_sandwich'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_duck_sandwich',['kubejs:incomplete_duck_sandwich','#forge:cooked_duck']),
		event.recipes.createDeploying('kubejs:incomplete_duck_sandwich',['kubejs:incomplete_duck_sandwich','upgrade_aquatic:boiled_blue_pickerelweed']),
		event.recipes.createDeploying('kubejs:incomplete_duck_sandwich',['kubejs:incomplete_duck_sandwich','upgrade_aquatic:boiled_purple_pickerelweed'])
	]).transitionalItem('kubejs:incomplete_duck_sandwich').loops(1).id('kubejs:duck_sandwich_assembly')

// Replace recipe inputs
	event.replaceInput({ input: 'oreganized:lead_ore' }, 'oreganized:lead_ore', 'kubejs:lead_ore')
	event.replaceInput({ input: 'nethersdelight:blackstone_furnace' }, 'nethersdelight:blackstone_furnace', 'quark:blackstone_furnace')
	event.replaceInput({ input: 'neapolitan:adzuki_beans' }, 'neapolitan:adzuki_beans', 'environmental:cherries')
	event.replaceInput({ input: 'neapolitan:roasted_adzuki_beans' }, 'neapolitan:roasted_adzuki_beans', 'environmental:cherries')
	event.replaceInput({ output: 'create:steam_engine' }, 'minecraft:copper_block', 'kubejs:copper_block')
	event.replaceInput({ output: 'create:copper_backtank' }, 'minecraft:copper_block', 'kubejs:copper_block')
	event.replaceInput({ output: 'minecraft:copper_ingot' }, 'minecraft:copper_block', 'kubejs:copper_block')
	event.replaceInput({ output: 'minecraft:shears' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
	event.replaceInput({ id: 'minecraft:crossbow' }, 'minecraft:tripwire_hook', 'minecraft:string')
	event.replaceInput({ id: 'quark:building/crafting/dirt_bricks' }, 'paletteblocks:cobblestone_bricks', 'minecraft:dirt')
	event.replaceInput({ id: 'twigs:cut_amethyst' }, 'twigs:polished_amethyst', 'minecraft:amethyst_block')
	event.replaceInput({ id: 'minecraft:compass' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ id: 'minecraft:clock' }, 'minecraft:redstone', 'spelunkery:cinnabar')

// Replace recipe outputs
	event.replaceOutput({ id: 'minecraft:copper_block' }, 'minecraft:copper_block', 'kubejs:copper_block')
})