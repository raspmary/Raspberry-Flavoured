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
        event.shapeless('8x minecraft:'+allColour+'_concrete_powder', ['minecraft:'+allColour+'_dye', '2x supplementaries:ash', '3x gravel', '3x sand'])
    })
	
	noWhiteAllColours.forEach(noWhiteAllColour => {
        event.shapeless('8x minecraft:'+noWhiteAllColour+'_carpet', ['8x minecraft:white_carpet', noWhiteAllColour+'_dye']).id('minecraft:'+noWhiteAllColour+'_carpet_from_white_carpet')
		event.shapeless('another_furniture:'+noWhiteAllColour+'_lamp', ['another_furniture:white_lamp', noWhiteAllColour+'_dye'])
		event.shapeless('another_furniture:'+noWhiteAllColour+'_sofa', ['another_furniture:white_sofa', noWhiteAllColour+'_dye'])
    })
	
	event.shapeless('9x amethyst_shard', ['twigs:polished_amethyst'])
	event.shapeless('9x create:rose_quartz', ['create:rose_quartz_block'])
	event.shapeless('9x create:polished_rose_quartz', ['create:rose_quartz_tiles'])
	event.shapeless('9x string', ['architects_palette:spool'])
	event.shapeless('8x kubejs:charcoal_lump', ['charcoal'])
	event.shapeless('charcoal', ['8x kubejs:charcoal_lump'])
	event.shapeless('4x ecologics:surface_moss', ['minecraft:moss_block']).id('ecologics:surface_moss')
	event.shapeless('2x minecraft:bone_meal', ['bone']).id('minecraft:bone_meal')
	event.shapeless('2x minecraft:bone_meal', ['architects_palette:withered_bone'])
	event.shapeless('autumnity:pumpkin_bread', ['autumnity:syrup_bottle', 'farmersdelight:pumpkin_slice', 'farmersdelight:wheat_dough']).id('create_central_kitchen:crafting/pumpkin_bread_from_dough_and_pumpkin_slice')
	event.shapeless('farmersdelight:melon_popsicle', ['neapolitan:ice_cubes', 'minecraft:melon_slice', 'minecraft:stick']).id('abnormals_delight:neapolitan/melon_popsicle')
	event.shapeless('4x additionaladditions:copper_patina', ['additionaladditions:patina_block'])
	event.shapeless('2x architects_palette:algal_blend', ['clay_ball', 'kelp', 'kelp', 'clay_ball']).id('architects_palette:algal_blend')
	event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', '#raspberry_flavoured:moss']).id('architects_palette:heavy_mossy_stone_bricks')
	event.shapeless('2x twigs:packed_silt', ['2x twigs:silt', 'farmersdelight:straw']).id('twigs:packed_silt')
	event.shapeless('minecraft:leather', ['2x rabbit_hide']).id('minecraft:leather')
	event.shapeless('3x culturaldelights:corn_dough', ['water_bucket', '3x #raspberry_flavoured:corn_dough_ingredients']).id('culturaldelights:corn_dough')
	event.shapeless('3x culturaldelights:corn_dough', ['#forge:eggs', '3x #raspberry_flavoured:corn_dough_ingredients'])
	event.shapeless('minecraft:globe_banner_pattern', ['minecraft:paper', ['supplementaries:globe', 'supplementaries:globe_sepia']])
	event.shapeless('twigs:mossy_bricks', ['minecraft:bricks', '#raspberry_flavoured:moss'])
	event.shapeless('twigs:twisting_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:warped_roots', 'minecraft:twisting_vines']]).id('twigs:twisting_polished_blackstone_bricks')
	event.shapeless('twigs:weeping_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:crimson_roots', 'minecraft:weeping_vines']]).id('twigs:weeping_polished_blackstone_bricks')
	event.shapeless(Item.of('minecraft:potion',4,{Potion:"minecraft:water"}).strongNBT(), ['minecraft:water_bucket', '4x minecraft:glass_bottle'])
	event.shapeless('minecraft:water_bucket', ['minecraft:bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()])
	event.shapeless('neapolitan:milk_bottle', ['minecraft:glass_bottle', '3x ecologics:coconut_slice'])
	event.shapeless('3x neapolitan:banana_bunch', ['neapolitan:banana_bundle'])
	event.shapeless('3x farmersdelight:wheat_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x #farmersdelight:wheat_or_flour']).id('farmersdelight:wheat_dough_from_water')
	event.shapeless('3x culturaldelights:corn_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x #raspberry_flavoured:corn_dough_ingredients']).id('culturaldelights:corn_dough')
	event.shapeless('24x quark:rusty_iron_plate', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x iron_ingot']).id('quark:building/crafting/rusty_iron_plate_manual_only')
	event.shapeless('8x quark:rusty_iron_plate', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x quark:iron_plate']).id('quark:building/crafting/rusty_iron_plate2_manual_only')
	event.shapeless('8x mud', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x dirt']).id('minecraft:mud_manual_only')
	event.shapeless('3x sob:cinder_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x create:cinder_flour']).id('sob:sob/crafting/cinder_dough')
	event.shapeless('4x andesite', ['granite', '3x cobblestone'])
	event.shapeless('kubejs:prickly_pear_pie', ['4x kubejs:prickly_pear_pie_slice'])
	event.shapeless('cake', ['sweet_berries', '#forge:milk', 'sweet_berries', 'sugar', '#forge:eggs', 'sugar', '3x #farmersdelight:wheat_or_flour']).id('minecraft:cake')
	event.shapeless('neapolitan:mint_chops', ['#forge:raw_mutton', 'neapolitan:mint_leaves']).id('neapolitan:mint/mint_chops')
	event.shapeless('caverns_and_chasms:cupric_campfire', ['campfire', 'additionaladditions:copper_patina']).id('caverns_and_chasms:cupric_campfire')
	event.shapeless('2x stick', ['#raspberry_flavoured:wooden_tools'])
	event.shapeless('etched:album_jukebox', ['note_block', 'diamond']).id('etched:album_jukebox')
	event.shapeless('supplementaries:speaker_block', ['note_block', 'hopper']).id('supplementaries:speaker_block')
	event.shapeless('ecologics:coconut_chest_boat', ['#forge:chests/wooden', 'ecologics:coconut_boat']).id('ecologics:coconut_chest_boat')
	event.shapeless('ecologics:azalea_chest_boat', ['#forge:chests/wooden', 'ecologics:azalea_boat']).id('ecologics:azalea_chest_boat')
	event.shapeless('3x mynethersdelight:hoglin_sausage', ['bone_meal', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), 'nethersdelight:hoglin_loin'])
	event.shapeless('gray_dye', ['2x supplementaries:ash'])
	event.shapeless('6x fire_charge', ['gunpowder', '#minecraft:coals']).id('minecraft:fire_charge')
	event.shapeless('golden_apple', ['apple', 'gold_ingot']).id('minecraft:golden_apple')
	event.shapeless('golden_carrot', ['carrot', 'gold_ingot']).id('minecraft:golden_carrot')
	event.shapeless('glistering_melon_slice', ['melon_slice', 'gold_ingot']).id('minecraft:glistering_melon_slice')
	event.shapeless('kubejs:golden_strawberries', ['neapolitan:strawberries', 'gold_ingot'])
	event.shapeless('ender_eye', ['ender_pearl', 'gold_ingot', 'fire_charge']).id('minecraft:ender_eye')
	event.shapeless('skull_banner_pattern', ['paper', ['skeleton_skull', 'wither_skeleton_skull']]).id('minecraft:skull_banner_pattern')
	event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'chain']).id('create:crafting/kinetics/encased_chain_drive')
	event.shapeless('create:gearshift', ['create:andesite_casing', 'create:shaft', '#minecraft:planks', 'redstone'])
	event.shapeless('create:gearshift', ['create:clutch', '#minecraft:planks'])
	event.shapeless('twigs:twig', ['#raspberry_flavoured:saplings_with_twigs'])
	event.shapeless('8x create:controller_rail', ['8x powered_rail', 'create:electron_tube'])

// Shaped crafting
	allColours.forEach(allColour => {
        event.shaped('3x minecraft:'+allColour+'_banner', ['AAA', 'AAA', ' B '], {A: 'minecraft:'+allColour+'_wool', B: 'stick'}).id('minecraft:'+allColour+'_banner')
        event.shaped('3x supplementaries:flag_'+allColour, ['AAA', 'AAA', 'B  '], {A: 'minecraft:'+allColour+'_wool', B: 'stick'}).id('supplementaries:flags/flag_'+allColour)
        event.shaped('minecraft:'+allColour+'_bed', ['AAA', 'CCC', 'BBB'], {A: 'minecraft:'+allColour+'_wool', B: '#minecraft:planks', C: 'kubejs:cloth_scrap'}).id('minecraft:'+allColour+'_bed')
    })
	
	event.shaped('minecraft:white_bed', ['AAA', 'CCC', 'BBB'], {A: 'supplementaries:feather_block', B: '#minecraft:planks', C: 'kubejs:cloth_scrap'}).id('supplementaries:bed_from_feather_block')
	event.shaped('twigs:polished_amethyst', ['AAA', 'AAA', 'AAA'], {A: 'amethyst_shard'}).id('twigs:polished_amethyst')
	event.shaped('create:rose_quartz_block', ['AAA', 'AAA', 'AAA'], {A: 'create:rose_quartz'})
	event.shaped('create:rose_quartz_tiles', ['AAA', 'AAA', 'AAA'], {A: 'create:polished_rose_quartz'})
	event.shaped('architects_palette:spool', ['AAA', 'AAA', 'AAA'], {A: 'string'}).id('architects_palette:spool')
	event.shaped('cobblestone', ['AAA', 'AAA', 'AAA'], {A: 'twigs:pebble'}).id('twigs:cobblestone_from_pebble')
	event.shaped('2x quark:stick_block', ['AAA', 'AAA', 'AAA'], {A: 'twigs:twig'})
	event.shaped('2x minecraft:flower_pot', ['ABA', ' A '], {A: 'minecraft:brick', B: 'minecraft:dirt'}).id('minecraft:flower_pot')
	event.shaped('6x alloyed:steel_trapdoor', ['AAA', 'AAA'], {A: 'alloyed:steel_ingot'}).id('alloyed:crafting/steel_trapdoor')
	event.shaped('6x architects_palette:twisted_trapdoor', ['AAA', 'AAA'], {A: 'architects_palette:twisted_planks'}).id('architects_palette:twisted_trapdoor')
	event.shaped('another_furniture:furniture_hammer', ['BBB', 'BAB', ' A '], {A: 'minecraft:stick', B: 'copper_ingot'}).id('another_furniture:furniture_hammer')
	event.shaped('4x architects_palette:tuff_bricks', ['BA', 'AA'], {A: 'minecraft:tuff', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:tuff_bricks')
	event.shaped('4x architects_palette:calcite_bricks', ['BA', 'AA'], {A: 'minecraft:calcite', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:calcite_bricks')
	event.shaped('4x architects_palette:dripstone_bricks', ['BA', 'AA'], {A: 'minecraft:dripstone_block', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:dripstone_bricks')
	event.shaped('4x twigs:smooth_basalt_bricks', ['BA', 'AA'], {A: 'minecraft:smooth_basalt', B: 'paletteblocks:cobblestone_bricks'}).id('twigs:smooth_basalt_bricks')
	event.shaped('4x architects_palette:sunstone', ['AB', 'BA'], {A: 'minecraft:basalt', B: 'architects_palette:sunmetal_brick'}).id('architects_palette:sunstone')
	event.shaped('8x architects_palette:plating_block', [' B ', 'BAB', ' B '], {A: ['#forge:ingots/iron', '#forge:ingots/lead'], B: ['#forge:nuggets/iron', '#forge:nuggets/lead']}).id('architects_palette:plating_block')
	event.shaped('4x architects_palette:nether_brass_torch', ['AC', 'B '], {A: '#minecraft:coals', B: 'minecraft:stick', C: 'additionaladditions:copper_patina'}).id('architects_palette:nether_brass_torch')
	event.shaped('incubation:twig_nest', ['A A', 'AAA'], {A: 'twigs:twig'})
	event.shaped('etched:blank_music_disc', ['AAA', 'A A', 'AAA'], {A: 'minecraft:disc_fragment_5'})
	event.shaped('quark:torch_arrow', ['A', 'B'], {A: '#minecraft:coals', B: 'minecraft:arrow'}).id('quark:tools/crafting/torch_arrow')
	event.shaped('minecraft:glass', ['AA', 'AA'], {A: 'quark:clear_shard'}).id('quark:tweaks/crafting/clear_glass')
	event.shaped('minecraft:moss_block', ['AA', 'AA'], {A: 'ecologics:surface_moss'})
	event.shaped('4x minecraft:pumpkin', ['AA', 'AA'], {A: 'autumnity:large_pumpkin_slice'})
	event.shaped('4x additionaladditions:amethyst_lamp', ['AA', 'AA'], {A: 'redstone_lamp'}).id('additionaladditions:amethyst_lamp')
	event.shaped('create:peculiar_bell', [' B ', 'BAB', ' B '], {A: 'minecraft:bell', B: 'create:brass_ingot'}).id('create:crafting/curiosities/peculiar_bell')
	event.shaped('2x minecraft:ender_chest', ['AAA', 'ABA', 'AAA'], {A: 'obsidian', B: 'ender_eye'}).id('minecraft:ender_chest')
	event.shaped('8x minecraft:copper_block', ['AA', 'AA'], {A: 'minecraft:copper_ingot'})
	event.shaped('4x supplementaries:slice_map', [' A ', 'ABA', ' A '], {A: 'minecraft:map', B: 'caverns_and_chasms:depth_gauge'}).id('supplementaries:slice_map')
	event.shaped('etched:etching_table', ['BC', 'DD', 'AA'], {A: '#minecraft:planks', B: 'diamond', C: 'iron_ingot', D: 'alloyed:bronze_sheet'}).id('etched:etching_table')
	event.shaped('etched:radio', ['B', 'C', 'A'], {A: '#minecraft:planks', B: 'iron_nugget', C: 'alloyed:bronze_ingot'}).id('etched:radio')
	event.shaped('4x note_block', ['CAC', 'ABA', 'CAC'], {A: '#minecraft:planks', B: 'redstone', C: 'alloyed:bronze_sheet'}).id('minecraft:note_block')
	event.shaped('etched:boombox', [' B ', 'BAB'], {A: 'etched:album_jukebox', B: 'iron_ingot'}).id('etched:boombox')
	event.shaped('4x spectral_arrow', [' B ', 'BAB', ' B '], {A: 'naturalist:glow_goop', B: 'arrow'}).id('naturalist:spectral_arrow_from_glow_goop')
	event.shaped('kubejs:prickly_pear_pie', [' C ', 'CCC', 'BAB'], {A: 'farmersdelight:pie_crust', B: 'sugar', C: ['ecologics:prickly_pear', 'ecologics:cooked_prickly_pear']})
	event.shaped('shield', [' A ', 'ABA', ' A '], {A: 'create:iron_sheet', B: '#minecraft:planks'}).id('minecraft:shield')
	event.shaped('2x upgrade_aquatic:prismarine_rod', ['A', 'A'], {A: 'prismarine_shard'}).id('upgrade_aquatic:prismarine_rod')
	event.shaped('6x copperized:copper_trapdoor', ['AAA', 'AAA'], {A: 'copper_ingot'}).id('copperized:copper_trapdoor')
	event.shaped('2x architects_palette:entwine_rod', ['ABA'], {A: 'iron_nugget', B: 'ender_pearl'}).id('architects_palette:entwine_rod')
	event.shaped('architects_palette:gilded_sandstone', ['AB', 'BA'], {A: 'sandstone', B: ['spelunkery:raw_gold_nugget', 'gold_nugget']}).id('architects_palette:gilded_sandstone')
	event.shaped('2x twigs:silt_shingles', ['AA'], {A: 'twigs:packed_silt'}).id('twigs:silt_shingles')
	event.shaped('2x caverns_and_chasms:dripstone_shingles', ['AA'], {A: 'dripstone_block'}).id('caverns_and_chasms:dripstone_shingles')
	event.shaped('12x create:andesite_alloy', ['AB', 'BA'], {A: '#raspberry_flavoured:sturdy_stone', B: 'create:zinc_ingot'}).id('create:crafting/materials/andesite_alloy_from_zinc')
	event.shaped('caverns_and_chasms:toolbox', [' A ', 'ABA'], {A: 'copper_ingot', B: ['copperandtuffbackport:chiseled_copper', 'copperandtuffbackport:waxed_chiseled_copper']}).id('caverns_and_chasms:toolbox')
	event.shaped('caverns_and_chasms:tuning_fork', ['B B', 'B B', ' A '], {A: 'copper_ingot', B: 'create:copper_nugget'}).id('caverns_and_chasms:tuning_fork')
	event.shaped('exposure:camera', ['BAB', 'ACA', 'BAB'], {A: 'gold_ingot', B: '#minecraft:planks', C: '#forge:glass'}).id('exposure:camera')
	event.shaped('2x exposure:black_and_white_film', ['ABB', 'ACC', 'ADD'], {A: 'iron_ingot', B: 'bone_meal', C: 'gunpowder', D: 'dried_kelp'}).id('exposure:black_and_white_film')
	event.shaped('2x exposure:color_film', ['ABB', 'ACC', 'ADD'], {A: 'gold_ingot', B: 'amethyst_shard', C: 'create:rose_quartz', D: 'dried_kelp'}).id('exposure:color_film')
	event.shaped('vc_gliders:paraglider_wood', ['ABA', 'ABA', 'BCB'], {A: 'create:white_sail', B: 'stick', C: 'feather'}).id('vc_gliders:paraglider_wood')
	event.shaped('8x minecraft:scaffolding', ['ABA', 'A A', 'A A'], {A: '#raspberry_flavoured:bamboolikes', B: ['string', 'farmersdelight:canvas']}).id('minecraft:scaffolding')
	event.shaped('6x hopper', ['A A', 'ABA', ' A '], {A: 'iron_ingot', B: ['#forge:chests/wooden', '#forge:barrels/wooden']}).id('minecraft:hopper')
	event.shaped('3x hopper', ['A A', 'ABA', ' A '], {A: 'oreganized:lead_ingot', B: ['#forge:chests/wooden', '#forge:barrels/wooden']})
	event.shaped('upgrade_aquatic:bedroll', ['BB', 'CC', 'AA'], {A: 'farmersdelight:canvas', B: '#minecraft:wool', C: 'kubejs:cloth_scrap'}).id('upgrade_aquatic:bedroll')
	event.shaped('8x caverns_and_chasms:amethyst_block', ['AAA', 'ABA', 'AAA'], {A: 'amethyst_block', B: 'amethyst_shard'}).id('caverns_and_chasms:amethyst_block')
	event.shaped('8x caverns_and_chasms:cut_amethyst', ['AAA', 'A A', 'AAA'], {A: 'amethyst_block'}).id('caverns_and_chasms:cut_amethyst')
	event.shaped('6x twigs:cut_amethyst', ['ABA', 'BAB', 'ABA'], {A: 'amethyst_block', B: 'amethyst_shard'}).id('twigs:cut_amethyst')
	event.shaped('4x sullysmod:polished_jade_block', ['AA', 'AA'], {A: 'amethyst_block'}).id('sullysmod:crafting/polished_jade_block')
	event.shaped('webasemod:diamond_bat', ['A', 'A', 'B'], {A: 'amethyst_shard', B: 'iron_ingot'}).id('webasemod:diamond_bat')
	event.shaped('alloyed:steel_fishing_rod', [' AB', 'ABC', 'B C'], {A: 'create:iron_sheet', B: 'stick', C: 'string'})
	event.shaped('3x supplementaries:iron_gate', ['BAB', 'BAB'], {A: ['iron_ingot', 'oreganized:lead_ingot'], B: ['iron_nugget', 'oreganized:lead_nugget']}).id('supplementaries:iron_gate')
	event.shaped('minecraft:smithing_table', ['AA', 'BB', 'BB'], {A: ['iron_ingot', 'oreganized:lead_ingot'], B: '#minecraft:planks'}).id('minecraft:smithing_table')
	event.shaped('supplementaries:spring_launcher', ['BBB', 'ACA', 'ADA'], {A: ['iron_ingot', 'oreganized:lead_ingot'], B: '#minecraft:planks', C: 'slime_block', D: 'piston'}).id('supplementaries:spring_launcher')
	event.shaped('quark:echorang', ['ABC', '  B', '  A'], {A: 'echo_shard', B: 'create:sturdy_sheet', C: 'quark:soul_bead'}).id('quark:tools/smithing/echorang_smithing')
	event.shaped('2x name_tag', [' CA', 'CBC', 'CC '], {A: 'chain', B: 'farmersdelight:canvas', C: ['paper', 'kubejs:cloth_scrap']})
	event.shaped('saddle', ['BCB', 'BBB', ' A '], {A: 'chain', B: '#minecraft:leather_cuts', C: 'kubejs:cloth_scrap'})
	event.shaped('architects_palette:ender_pearl_block', ['AA', 'AA'], {A: 'ender_pearl'}).id('architects_palette:ender_pearl_block')
	event.shaped('6x chain', ['A', 'B', 'A'], {A: 'oreganized:lead_nugget', B: 'oreganized:lead_ingot'}).id('minecraft:chain')
	event.shaped('create:mechanical_drill', ['DBD', 'CBC', ' A '], {A: 'alloyed:steel_casing', B: 'alloyed:steel_ingot', C: 'alloyed:steel_sheet', D: 'alloyed:steel_nugget'}).id('create:crafting/kinetics/mechanical_drill')
	event.shaped('create:mechanical_saw', [' C ', 'CBC', ' A '], {A: 'alloyed:steel_casing', B: 'alloyed:steel_ingot', C: 'alloyed:steel_sheet'}).id('create:crafting/kinetics/mechanical_saw')
	event.shaped('create:mechanical_roller', ['C', 'A', 'B'], {A: 'alloyed:steel_casing', B: 'create:crushing_wheel', C: 'create:electron_tube'}).id('create:crafting/kinetics/mechanical_roller')
	event.shaped('create:encased_fan', ['C', 'A', 'B'], {A: 'alloyed:steel_casing', B: 'create:propeller', C: 'create:shaft'}).id('create:crafting/kinetics/encased_fan')
	event.shaped('kubejs:bone_knife', ['B', 'A'], {A: 'stick', B: '#brewinandchewin:bone_or_withered_bone'})
	event.shaped('2x heartstone:heartstone', [' A ', 'ABA', ' A '], {A: 'spelunkery:cinnabar', B: 'ender_eye'}).id('heartstone:heartstone')
	
	event.shaped('4x architects_palette:mushy_myonite_bricks', ['AA', 'AA'], {A: 'architects_palette:cerebral_block'})
	event.shaped('4x architects_palette:cerebral_block', ['AA', 'AA'], {A: 'kubejs:exolite'}).id('architects_palette:cerebral_block')
	event.shaped('kubejs:chiseled_exolite', ['A', 'A'], {A: 'architects_palette:cerebral_slab'})
	event.shaped('kubejs:chiseled_exolite_tiles', ['A', 'A'], {A: 'architects_palette:cerebral_tile_slab'})
	
	event.shaped('leather_horse_armor', ['  A', 'ABA', 'CAC'], {A: '#minecraft:leather_cuts', B: 'kubejs:cloth_scrap', C: 'farmersdelight:straw'}).id('minecraft:leather_horse_armor')
	event.shaped('iron_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'create:iron_sheet', B: 'kubejs:cloth_scrap'})
	event.shaped('golden_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'create:golden_sheet', B: 'kubejs:cloth_scrap'})
	event.shaped('diamond_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'diamond', B: 'kubejs:cloth_scrap'})
	
	event.shaped('leather_helmet', ['ABA', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_helmet')
	event.shaped('leather_chestplate', ['A A', 'ABA', 'ABA'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_chestplate')
	event.shaped('leather_leggings', ['BAB', 'A A', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_leggings')
	event.shaped('leather_boots', ['B B', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_boots')
	
	event.shaped('kubejs:lead_pickaxe', ['BBB', ' A ', ' A '], {A: 'stick', B: 'oreganized:lead_ingot'})
	event.shaped('kubejs:lead_axe', ['BB', 'BA', ' A'], {A: 'stick', B: 'oreganized:lead_ingot'})
	event.shaped('kubejs:lead_shovel', ['B', 'A', 'A'], {A: 'stick', B: 'oreganized:lead_ingot'})
	event.shaped('kubejs:lead_hoe', ['BB', ' A', ' A'], {A: 'stick', B: 'oreganized:lead_ingot'})
	event.shaped('kubejs:lead_sword', ['B', 'B', 'A'], {A: 'stick', B: 'oreganized:lead_ingot'})
	event.shaped('kubejs:lead_knife', ['B', 'A'], {A: 'stick', B: 'oreganized:lead_ingot'})
	
	event.shaped('minecart', ['A A', 'AAA'], {A: 'oreganized:lead_ingot'}).id('minecraft:minecart')
	event.shaped('oreganized:shrapnel_bomb_minecart', ['A', 'B'], {A: 'oreganized:shrapnel_bomb', B: 'minecart'}).id('oreganized:shrapnel_bomb_minecart')
	event.shaped('oreganized:shrapnel_bomb_minecart', ['ABA', 'AAA'], {A: 'oreganized:lead_ingot', B: 'oreganized:shrapnel_bomb'})
	event.shaped('supplementaries:dispenser_minecart', ['ABA', 'AAA'], {A: 'oreganized:lead_ingot', B: 'dispenser'})
	event.shaped('2x create:minecart_coupling', ['  A', ' B ', 'A  '], {A: 'oreganized:lead_ingot', B: 'oreganized:lead_nugget'}).id('create:crafting/curiosities/minecart_coupling')
	event.shaped('8x rail', ['A A', 'ABA', 'A A'], {A: 'oreganized:lead_nugget', B: 'stick'}).id('minecraft:rail')
	event.shaped('8x powered_rail', ['A A', 'CBC', 'A A'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'gold_nugget'}).id('minecraft:powered_rail')
	event.shaped('8x powered_rail', ['A A', 'CBC', 'A A'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'copper_ingot'})
	event.shaped('8x detector_rail', ['ACA', 'ABA', 'ADA'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'stone_pressure_plate', D: 'redstone'}).id('minecraft:detector_rail')
	event.shaped('8x activator_rail', ['ACA', 'ABA', 'ACA'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'redstone'}).id('minecraft:activator_rail')
	event.shaped('8x caverns_and_chasms:spiked_rail', ['D D', 'ABA', 'DCD'], {A: 'oreganized:silver_nugget', B: 'stick', C: 'redstone', D: 'oreganized:lead_nugget'}).id('caverns_and_chasms:spiked_rail')
	event.shaped('8x create:controller_rail', ['A A', 'CBC', 'ADA'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'gold_nugget', D: 'create:electron_tube'}).id('create:crafting/kinetics/controller_rail')
	event.shaped('8x create:controller_rail', ['A A', 'CBC', 'ADA'], {A: 'oreganized:lead_nugget', B: 'stick', C: 'copper_ingot', D: 'create:electron_tube'})
	
	event.shaped('caverns_and_chasms:cupric_lantern', [' B ', 'BAB', ' B '], {A: 'caverns_and_chasms:cupric_torch', B: 'iron_nugget'}).id('caverns_and_chasms:cupric_lantern')
	event.shaped('endergetic:ender_lantern', [' B ', 'BAB', ' B '], {A: 'endergetic:ender_torch', B: 'iron_nugget'}).id('endergetic:ender_lantern')
	event.shaped('3x twigs:lamp', ['AAA', 'BBB', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'torch'}).id('twigs:lamp')
	event.shaped('3x twigs:soul_lamp', ['AAA', 'BBB', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'soul_torch'}).id('twigs:soul_lamp')
	event.shaped('3x twigs:crimson_shroomlamp', ['AAA', 'BBB', 'AAA'], {A: 'crimson_planks', B: 'shroomlight'}).id('twigs:crimson_shroomlamp')
	event.shaped('3x twigs:warped_shroomlamp', ['AAA', 'BBB', 'AAA'], {A: 'warped_planks', B: 'shroomlight'}).id('twigs:warped_shroomlamp')
	
	event.shaped('4x minecraft:emerald_block', ['AA', 'AA'], {A: 'spelunkery:rough_lazurite_block'}).id('minecraft:lapis_block')
	event.shaped('4x supplementaries:lapis_bricks', ['AA', 'AA'], {A: 'minecraft:emerald_block'}).id('supplementaries:lapis_bricks')
	event.shaped('6x kubejs:lapis_slab', ['AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('4x kubejs:lapis_stairs', ['A  ', 'AA ', 'AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('6x kubejs:lapis_wall', ['AAA', 'AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('6x kubejs:lazurite_slab', ['AAA'], {A: 'spelunkery:rough_lazurite_block'})
	event.shaped('4x kubejs:lazurite_stairs', ['A  ', 'AA ', 'AAA'], {A: 'spelunkery:rough_lazurite_block'})
	event.shaped('6x kubejs:lazurite_wall', ['AAA', 'AAA'], {A: 'spelunkery:rough_lazurite_block'})
	
	event.shaped('beehive', ['CCC', 'ABA', 'AAA'], {A: 'oak_planks', B: 'honeycomb', C: 'oak_slab'}).id('woodworks:oak_beehive')
	event.shaped('woodworks:spruce_beehive', ['CCC', 'ABA', 'AAA'], {A: 'spruce_planks', B: 'honeycomb', C: 'spruce_slab'}).id('woodworks:spruce_beehive')
	event.shaped('woodworks:birch_beehive', ['CCC', 'ABA', 'AAA'], {A: 'birch_planks', B: 'honeycomb', C: 'birch_slab'}).id('woodworks:birch_beehive')
	event.shaped('woodworks:jungle_beehive', ['CCC', 'ABA', 'AAA'], {A: 'jungle_planks', B: 'honeycomb', C: 'jungle_slab'}).id('woodworks:jungle_beehive')
	event.shaped('woodworks:acacia_beehive', ['CCC', 'ABA', 'AAA'], {A: 'acacia_planks', B: 'honeycomb', C: 'acacia_slab'}).id('woodworks:acacia_beehive')
	event.shaped('woodworks:dark_oak_beehive', ['CCC', 'ABA', 'AAA'], {A: 'dark_oak_planks', B: 'honeycomb', C: 'dark_oak_slab'}).id('woodworks:dark_oak_beehive')
	event.shaped('woodworks:mangrove_beehive', ['CCC', 'ABA', 'AAA'], {A: 'mangrove_planks', B: 'honeycomb', C: 'mangrove_slab'}).id('woodworks:mangrove_beehive')
	event.shaped('woodworks:crimson_beehive', ['CCC', 'ABA', 'AAA'], {A: 'crimson_planks', B: 'honeycomb', C: 'crimson_slab'}).id('woodworks:crimson_beehive')
	event.shaped('woodworks:warped_beehive', ['CCC', 'ABA', 'AAA'], {A: 'warped_planks', B: 'honeycomb', C: 'warped_slab'}).id('woodworks:warped_beehive')
	event.shaped('atmospheric:rosewood_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:rosewood_planks', B: 'honeycomb', C: 'atmospheric:rosewood_slab'}).id('atmospheric:rosewood_beehive')
	event.shaped('atmospheric:morado_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:morado_planks', B: 'honeycomb', C: 'atmospheric:morado_slab'}).id('atmospheric:morado_beehive')
	event.shaped('atmospheric:yucca_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:yucca_planks', B: 'honeycomb', C: 'atmospheric:yucca_slab'}).id('atmospheric:yucca_beehive')
	event.shaped('atmospheric:aspen_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:aspen_planks', B: 'honeycomb', C: 'atmospheric:aspen_slab'}).id('atmospheric:aspen_beehive')
	event.shaped('autumnity:maple_beehive', ['CCC', 'ABA', 'AAA'], {A: 'autumnity:maple_planks', B: 'honeycomb', C: 'autumnity:maple_slab'}).id('autumnity:maple_beehive')
	event.shaped('environmental:willow_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:willow_planks', B: 'honeycomb', C: 'environmental:willow_slab'}).id('environmental:willow_beehive')
	event.shaped('environmental:cherry_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:cherry_planks', B: 'honeycomb', C: 'environmental:cherry_slab'}).id('environmental:cherry_beehive')
	event.shaped('environmental:wisteria_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:wisteria_planks', B: 'honeycomb', C: 'environmental:wisteria_slab'}).id('environmental:wisteria_beehive')
	event.shaped('upgrade_aquatic:driftwood_beehive', ['CCC', 'ABA', 'AAA'], {A: 'upgrade_aquatic:driftwood_planks', B: 'honeycomb', C: 'upgrade_aquatic:driftwood_slab'}).id('upgrade_aquatic:driftwood_beehive')
	event.shaped('upgrade_aquatic:river_beehive', ['CCC', 'ABA', 'AAA'], {A: 'upgrade_aquatic:river_planks', B: 'honeycomb', C: 'upgrade_aquatic:river_slab'}).id('upgrade_aquatic:river_beehive')
	event.shaped('windswept:chestnut_beehive', ['CCC', 'ABA', 'AAA'], {A: 'windswept:chestnut_planks', B: 'honeycomb', C: 'windswept:chestnut_slab'}).id('windswept:chestnut_beehive')
	event.shaped('everycomp:abnww/quark/bamboo_beehive', ['CCC', 'ABA', 'AAA'], {A: 'quark:bamboo_planks', B: 'honeycomb', C: 'quark:bamboo_planks_slab'}).id('everycomp:abnww/quark/bamboo_beehive')
	event.shaped('everycomp:abnww/architects_palette/twisted_beehive', ['CCC', 'ABA', 'AAA'], {A: 'architects_palette:twisted_planks', B: 'honeycomb', C: 'architects_palette:twisted_slab'}).id('everycomp:abnww/architects_palette/twisted_beehive')
	event.shaped('everycomp:abnww/ecologics/azalea_beehive', ['CCC', 'ABA', 'AAA'], {A: 'ecologics:azalea_planks', B: 'honeycomb', C: 'ecologics:azalea_slab'}).id('everycomp:abnww/ecologics/azalea_beehive')
	event.shaped('everycomp:abnww/ecologics/coconut_beehive', ['CCC', 'ABA', 'AAA'], {A: 'ecologics:coconut_planks', B: 'honeycomb', C: 'ecologics:coconut_slab'}).id('everycomp:abnww/ecologics/coconut_beehive')
	
	event.shaped('kubejs:music_disc_shimmer', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'quark:glow_shroom'})
	event.shaped('kubejs:music_disc_frontier', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'hay_block'})
	event.shaped('kubejs:music_disc_origin', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'sweet_berries'})
	event.shaped('kubejs:music_disc_savour', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'glow_berries'})
	event.shaped('kubejs:music_disc_eleven', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'music_disc_11'})
	event.shaped('kubejs:music_disc_droopy1', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: '#forge:heads'})

// Smelting
	event.smelting('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant')
	event.smelting('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant')
	event.smelting('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant')
	event.smelting('minecraft:glass', '#minecraft:sand').cookingTime(200).id('minecraft:glass')
	event.smelting('minecraft:glass', 'quark:dirty_glass').cookingTime(100).id('quark:tweaks/smelting/clean_glass')
	event.smelting('minecraft:glass', 'create:tiled_glass').cookingTime(40).id('create:smelting/glass_from_tiled_glass')
	event.smelting('minecraft:glass', 'create:framed_glass').cookingTime(40).id('create:smelting/glass_from_framed_glass')
	event.smelting('minecraft:glass', 'create:horizontal_framed_glass').cookingTime(40).id('create:smelting/glass_from_horizontal_framed_glass')
	event.smelting('minecraft:glass', 'create:vertical_framed_glass').cookingTime(40).id('create:smelting/glass_from_vertical_framed_glass')
	event.smelting('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(200)
	event.smelting('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(200)
	event.smelting('2x slime_ball', 'atmospheric:aloe_gel_block').cookingTime(300)
	event.smelting('gold_ingot', 'gilded_blackstone').cookingTime(200)
	event.smelting('kubejs:exolite', 'kubejs:cobbled_exolite').cookingTime(200)
	event.smelting('oreganized:lead_ingot', 'kubejs:nether_lead_ore').cookingTime(200)
	
// Blasting
	event.blasting('gold_ingot', 'gilded_blackstone').cookingTime(100)
	event.blasting('oreganized:lead_ingot', 'kubejs:nether_lead_ore').cookingTime(100)

// Baking
	event.custom({type: 'clayworks:baking', cookingtime: 100, experience: 0.1, ingredient: {tag: 'minecraft:sand'}, result: 'minecraft:glass'}).id('clayworks:glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 50, ingredient: {item: 'quark:dirty_glass'}, result: 'minecraft:glass'}).id('clayworks:quark/clean_glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:tiled_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:horizontal_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:vertical_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'ecologics:coconut_husk'}, result: 'kubejs:charcoal_lump'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'farmersdelight:tree_bark'}, result: 'kubejs:charcoal_lump'})
	event.custom({type: 'clayworks:baking', cookingtime: 150, ingredient: {item: 'atmospheric:aloe_gel_block'}, result: Item.of('minecraft:slime_ball',2)})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'kubejs:cobbled_exolite'}, result: 'kubejs:exolite'})

// Campfire
	event.campfireCooking('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant').cookingTime(600)
	event.campfireCooking('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(600)
	event.campfireCooking('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(600)
	
// Smithing
	event.smithing('minecraft:recovery_compass', 'minecraft:compass', 'quark:soul_bead').id('minecraft:recovery_compass')
	event.smithing('create:copper_diving_helmet', 'copperized:copper_helmet', '#forge:glass').id('create:crafting/appliances/copper_diving_helmet')
	event.smithing('create:copper_diving_boots', 'copperized:copper_boots', 'create:andesite_alloy').id('create:crafting/appliances/copper_diving_boots')
	event.smithing('kubejs:rose_gold_horse_armor', 'minecraft:iron_horse_armor', 'additionaladditions:rose_gold_alloy')
	event.smithing('kubejs:steel_horse_armor', 'minecraft:iron_horse_armor', 'alloyed:steel_ingot')
	event.smithing('kubejs:electrum_horse_armor', 'minecraft:diamond_horse_armor', 'oreganized:electrum_ingot')
	event.smithing('spelunkery:echo_fork', 'caverns_and_chasms:tuning_fork', 'minecraft:echo_shard').id('spelunkery:echo_fork')
	event.smithing('sullysmod:jade_shield', 'shield', 'amethyst_shard').id('sullysmod:smithing/jade_shield_smithing')
	
// Stonecutting
	event.stonecutting('4x iron_bars', 'iron_ingot').id('minecraft:iron_bars')
	event.stonecutting('4x iron_bars', 'oreganized:lead_ingot')
	event.stonecutting('4x alloyed:steel_bars', 'alloyed:steel_ingot').id('alloyed:crafting/steel_bars')
	event.stonecutting('4x architects_palette:entwine_bars', 'architects_palette:entwine_rod').id('architects_palette:entwine_bars')
	event.stonecutting('4x architects_palette:sunmetal_bars', 'architects_palette:sunmetal_brick').id('architects_palette:sunmetal_bars')
	event.stonecutting('4x caverns_and_chasms:silver_bars', 'oreganized:silver_ingot').id('caverns_and_chasms:silver_bars')
	event.stonecutting('4x create:small_rose_quartz_tiles', 'create:rose_quartz_tiles')
	
// Sawing	
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'minecraft:carved_pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'autumnity:large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'minecraft:pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'minecraft:carved_pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:carved_pumpkin'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:carved_large_pumpkin_slice'}, result: 'minecraft:carved_pumpkin', count: 1})

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
//	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:amethyst_block'}], tool: {type: 'farmersdelight:tool_action', action: 'pickaxe_dig'}, 
//	result: [{item: 'minecraft:amethyst_shard', count: 1}]}).id('farmersdelight:cutting/amethyst_block')
	event.custom({type: 'farmersdelight:cutting', ingredients: [[{tag: 'minecraft:music_discs'}, {item: 'etched:blank_music_disc'}]], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:disc_fragment_5', count: 2}, {item: 'minecraft:disc_fragment_5', count: 1, chance: 0.2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:corn_cob'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 1}, {item: 'culturaldelights:corn_kernels', count: 1, chance: 0.25}, {item: 'farmersdelight:straw', count: 1, chance: 0.25}]}).id('culturaldelights:cutting/corn_kernels')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_corn'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 2, chance: 0.5}, {item: 'minecraft:wheat_seeds', count: 2, chance: 0.25}, {item: 'farmersdelight:straw', count: 1, chance: 0.25}]}).id('culturaldelights:cutting/wild_corn')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_eggplants'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:eggplant_seeds', count: 1}, {item: 'minecraft:light_gray_dye', count: 2, chance: 0.5}]}).id('culturaldelights:cutting/wild_eggplants')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_tea_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:tea_seeds', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_coffee_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:coffee_beans', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:leather'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:rabbit_hide', count: 1}, {item: 'minecraft:rabbit_hide', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:prickly_pear_pie'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'kubejs:prickly_pear_pie_slice', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:big_dripleaf'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:small_dripleaf', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cobblestone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:gravel', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cobblestone'}], tool: {type: 'farmersdelight:tool_action', action: 'pickaxe_dig'}, 
	result: [{item: 'twigs:pebble', count: 9}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:nether_brick'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'create:cinder_flour', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:sculk'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:sculk_vein', count: 1}, {item: 'minecraft:sculk_vein', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'miners_delight:baked_squid'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'miners_delight:baked_tentacles', count: 3}, {item: 'miners_delight:baked_tentacles', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{tag: 'raspberry_flavoured:wooden_tools'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:stick', count: 3}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:grass_block'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:wheat_seeds', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:mycelium'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:wheat_seeds', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:podzol'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:coarse_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:rooted_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:hanging_roots', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'caverns_and_chasms:rocky_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'twigs:pebble', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:charcoal'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:black_dye', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:bone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 3}, {item: 'minecraft:bone_meal', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:withered_bone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 3}, {item: 'minecraft:bone_meal', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'ecologics:seashell'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 1}, {item: 'minecraft:bone_meal', count: 1, chance: 0.2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:cloth_scrap'}], tool: {tag: 'forge:shears'}, 
	result: [{item: 'minecraft:string', count: 1, chance: 0.35}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{tag: 'raspberry_flavoured:saplings_with_twigs'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'twigs:twig', count: 2}]})

// Cooking
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:cactus'}, {item: 'minecraft:cactus'}, {item: 'minecraft:sugar'}], result: {item: 'kubejs:cactus_juice', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:melon_slice'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:melon_juice', count: 2}}).id('farmersdelight:melon_juice')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:apple'}, {item: 'minecraft:apple'}, {item: 'kubejs:cinnamon'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:apple_cider', count: 2}}).id('farmersdelight:cooking/apple_cider')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'farmersrespite:green_tea', count: 1}}).id('farmersrespite:brewing/green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea_leaves'}, {item: 'farmersrespite:yellow_tea_leaves'}], result: {item: 'farmersrespite:yellow_tea', count: 1}}).id('farmersrespite:brewing/yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea_leaves'}, {item: 'farmersrespite:black_tea_leaves'}], result: {item: 'farmersrespite:black_tea', count: 1}}).id('farmersrespite:brewing/black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:dandelion'}, {item: 'minecraft:dandelion'}, {tag: 'farmersrespite:tea_leaves'}], result: {item: 'farmersrespite:dandelion_tea', count: 1}}).id('farmersrespite:brewing/dandelion_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0.35, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:rose_hips'}, {item: 'farmersrespite:rose_hips'}], result: {item: 'farmersrespite:rose_hip_tea', count: 1}}).id('farmersrespite:brewing/rose_hip_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_berries'}, {item: 'minecraft:glow_berries'}], result: {item: 'farmersrespite:gamblers_tea', count: 1}}).id('farmersrespite:brewing/gamblers_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:crimson_fungus'}, {item: 'minecraft:fermented_spider_eye'}], result: {item: 'farmersrespite:purulent_tea', count: 1}}).id('farmersrespite:brewing/purulent_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_beans'}, {item: 'farmersrespite:coffee_beans'}], result: {item: 'farmersrespite:coffee', count: 1}}).id('farmersrespite:brewing/coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:chocolate_bar'}, {item: 'farmersrespite:coffee_beans'}, {tag: 'forge:milk'}], result: {item: 'respiteful:mocha_coffee', count: 1}}).id('respiteful:brewing/mocha_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'environmental:cherries'}, {item: 'environmental:cherries'}, {item: 'farmersrespite:black_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:adzuki_milk_tea', count: 1}}).id('respiteful:brewing/adzuki_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:dried_vanilla_pods'}, {item: 'farmersrespite:yellow_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:vanilla_milk_tea', count: 1}}).id('respiteful:brewing/vanilla_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:mint_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'respiteful:mint_green_tea', count: 1}}).id('respiteful:brewing/mint_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'minecraft:leaves'}, {tag: 'minecraft:leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 1.0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'farmersrespite:tea_leaves'}, {tag: 'farmersrespite:tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 2}}).id('create_central_kitchen:brewing/builders_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 1.25, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'minecraft:cocoa_beans_or_powder'}, {tag: 'minecraft:cocoa_beans_or_powder'}, {tag: 'minecraft:cocoa_beans_or_powder'}, {tag: 'forge:milk'}, {item: 'minecraft:sugar'}], result: {item: 'farmersdelight:hot_cocoa', count: 2}}).id('farmersdelight:cooking/hot_cocoa')
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
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0.35, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'culturaldelights:regular_eggplants'}, {item: 'farmersdelight:tomato_sauce'}, {tag: 'forge:eggs'}, {item: 'farmersdelight:onion'}], result: {item: 'culturaldelights:fried_eggplant_pasta', count: 1}}).id('culturaldelights:cooking/fried_eggplant_pasta')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'forge:raw_fishes'}, {tag: 'forge:raw_fishes'}, {tag: 'raspberry_flavoured:cat_prey'}, {tag: 'forge:eggs'}], result: {item: 'kubejs:cat_food', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'raspberry_flavoured:stone'}, {tag: 'raspberry_flavoured:stone'}], result: {item: 'kubejs:stoup', count: 1}})
	
// Brewing
	event.recipes.farmersdelight.cooking(['crimson_fungus', 'crimson_fungus'], Item.of('minecraft:potion',2,{Potion:"minecraft:awkward"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking(['warped_fungus', 'warped_fungus'], Item.of('minecraft:potion',2,{Potion:"minecraft:thick"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'golden_carrot', 'windswept:nightshade'], Item.of('minecraft:potion',4,{Potion:"minecraft:night_vision"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'amethyst_shard', 'quartz'], Item.of('minecraft:potion',4,{Potion:"minecraft:invisibility"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'rabbit_foot', 'slime_ball'], Item.of('minecraft:potion',4,{Potion:"minecraft:leaping"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'magma_cream', 'blaze_powder'], Item.of('minecraft:potion',4,{Potion:"minecraft:fire_resistance"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'neapolitan:chocolate_bar', 'supplementaries:sugar_cube'], Item.of('minecraft:potion',4,{Potion:"minecraft:swiftness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:thick"}).strongNBT(), 'slime_ball', 'honey_bottle'], Item.of('minecraft:potion',4,{Potion:"minecraft:slowness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'scute', 'turtle_egg'], Item.of('minecraft:potion',4,{Potion:"minecraft:turtle_master"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'pufferfish', 'nautilus_shell'], Item.of('minecraft:potion',4,{Potion:"minecraft:water_breathing"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'glistering_melon_slice', 'neapolitan:strawberries'], Item.of('minecraft:potion',4,{Potion:"minecraft:healing"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:thick"}).strongNBT(), 'quark:cactus_block', 'magma_block'], Item.of('minecraft:potion',4,{Potion:"minecraft:harming"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:thick"}).strongNBT(), 'spider_eye', 'poisonous_potato'], Item.of('minecraft:potion',4,{Potion:"minecraft:poison"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'ghast_tear', 'melon_slice'], Item.of('minecraft:potion',4,{Potion:"minecraft:regeneration"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'iron_ingot', 'blaze_rod'], Item.of('minecraft:potion',4,{Potion:"minecraft:strength"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:thick"}).strongNBT(), 'twigs:twig', 'architects_palette:withered_bone'], Item.of('minecraft:potion',4,{Potion:"minecraft:weakness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'buzzier_bees:four_leaf_clover', 'gold_nugget'], Item.of('minecraft:potion',4,{Potion:"minecraft:luck"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:"minecraft:awkward"}).strongNBT(), 'supplementaries:feather_block', 'environmental:yak_hair'], Item.of('minecraft:potion',4,{Potion:"minecraft:slow_falling"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
// Fermenting
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 750, experience: 1.0, temperature: 4, container: {item: 'minecraft:bowl'}, fluiditem: {tag: 'forge:milk'}, ingredients: [{item: 'minecraft:glow_berries'}, {item: 'minecraft:glow_berries'}, {item: 'minecraft:glow_berries'}, {item: 'minecraft:sugar'}], result: {item: 'berry_good:glowgurt', count: 2}}).id('berry_good:glowgurt')
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 500, experience: 0.3, temperature: 3, ingredients: [{tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}], result: {item: 'brewinandchewin:jerky', count: 3}}).id('brewinandchewin:fermenting/jerky')
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 500, experience: 0.4, temperature: 3, ingredients: [{tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}, {item: 'kubejs:soul_salt'}], result: {item: 'brewinandchewin:jerky', count: 5}})
	
// Warping
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:logs'}], result: {item: 'architects_palette:twisted_log'}}).id('architects_palette:warping/twisted_log_from_logs')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:stripped_logs'}], result: {item: 'architects_palette:stripped_twisted_log'}}).id('architects_palette:warping/twisted_stripped_log_from_logs')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:wood'}], result: {item: 'architects_palette:twisted_wood'}}).id('architects_palette:warping/twisted_wood_from_wood')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'raspberry_flavoured:stripped_wood'}], result: {item: 'architects_palette:stripped_twisted_wood'}}).id('architects_palette:warping/twisted_stripped_wood_from_wood')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:carrot'}], result: {item: 'kubejs:spoiled_carrot'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:red_mushroom'}], result: {item: 'minecraft:crimson_fungus'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:brown_mushroom'}], result: {item: 'minecraft:warped_fungus'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:music_disc_cat'}], result: {item: 'kubejs:music_disc_dog'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'forge:cobblestone'}], result: {item: 'minecraft:blackstone'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'minecraft:dirt'}], result: {item: 'minecraft:soul_soil'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'quark:midori_block'}], result: {item: 'minecraft:purpur_block'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'quark:midori_block_slab'}], result: {item: 'minecraft:purpur_slab'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'quark:midori_block_stairs'}], result: {item: 'minecraft:purpur_stairs'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'quark:midori_pillar'}], result: {item: 'minecraft:purpur_pillar'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'atmospheric:kousa_chest'}], result: {item: 'quark:purpur_chest'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'atmospheric:kousa_trapped_chest'}], result: {item: 'quark:purpur_trapped_chest'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{tag: 'minecraft:sand'}], result: {item: 'minecraft:soul_sand'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'create:peculiar_bell'}], result: {item: 'create:haunted_bell'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'farmersdelight:tomato'}], result: {item: 'farmersdelight:rotten_tomato'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:brick'}], result: {item: 'minecraft:nether_brick'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'kubejs:music_disc_droopy1'}], result: {item: 'kubejs:music_disc_droopy2'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:potato'}], result: {item: 'minecraft:poisonous_potato'}})
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'mynethersdelight:hoglin_trophy'}], result: {item: 'mynethersdelight:zoglin_trophy'}}).id('mynethersdelight:zoglin_trophy')
	
// Forging
	function forgingTemplate(catalystItem, resultItem) {
		event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}], catalyst: {item: catalystItem}, result: {item: resultItem}})
	}
	function forgingTemplateTag(catalystTag, resultItem) {
		event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}], catalyst: {tag: catalystTag}, result: {item: resultItem}})
	}
	function modifyingWeapon(material, catalystItem, resultItem) {
		event.custom({type: 'miningmaster:forging_recipe', gems: [{item: material}, {item: material}, {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'}, {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}], catalyst: {item: catalystItem}, result: {item: resultItem}})
	}
	allColours.forEach(allColour => {
        event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'supplementaries:antique_ink'}, {item: 'minecraft:'+allColour+'_dye'}], catalyst: {item: 'quark:blank_rune'}, result: {item: 'quark:'+allColour+'_rune'}})
    })
	
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'}, {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}], catalyst: {tag: 'forge:stone'}, result: {item: 'quark:blank_rune', count: 2}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'quark:red_rune'}, {item: 'quark:orange_rune'}, {item: 'quark:yellow_rune'}, {item: 'quark:lime_rune'}, {item: 'quark:light_blue_rune'}, {item: 'quark:blue_rune'}, {item: 'quark:magenta_rune'}, {item: 'quark:pink_rune'}, {item: 'quark:white_rune'}], catalyst: {item: 'quark:blank_rune'}, result: {item: 'quark:rainbow_rune', count: 3}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'savage_and_ravage:creeper_spore_sack'}, {item: 'savage_and_ravage:creeper_spores'}, {item: 'savage_and_ravage:creeper_spores'}, {item: 'savage_and_ravage:creeper_spores'}, {item: 'savage_and_ravage:creeper_spores'}], catalyst: {item: 'minecraft:leather_helmet'}, result: {item: 'environmental:thief_hood'}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'supplementaries:feather_block'}, {item: 'supplementaries:feather_block'}, {item: 'supplementaries:feather_block'}, {item: 'supplementaries:sugar_cube'}, {item: 'supplementaries:sugar_cube'}], catalyst: {item: 'minecraft:leather_boots'}, result: {item: 'environmental:wanderer_boots'}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:iron_ingot'}, {item: 'minecraft:iron_ingot'}, {item: 'minecraft:iron_ingot'}, {item: 'create:rose_quartz'}, {item: 'create:rose_quartz'}, {tag: 'raspberry_flavoured:golden_healers'}, {tag: 'raspberry_flavoured:golden_healers'}], catalyst: {item: 'minecraft:leather_chestplate'}, result: {item: 'environmental:healer_pouch'}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:iron_ingot'}, {item: 'minecraft:iron_ingot'}, {item: 'minecraft:iron_ingot'}, {item: 'create:rose_quartz'}, {item: 'create:rose_quartz'}, {item: 'create:extendo_grip'}], catalyst: {item: 'minecraft:leather_leggings'}, result: {item: 'environmental:architect_belt'}})
	
	forgingTemplate('minecraft:echo_shard', 'kubejs:smithing_template_1')
	forgingTemplate('alloyed:steel_ingot', 'kubejs:smithing_template_2')
	forgingTemplate('minecraft:nautilus_shell', 'kubejs:smithing_template_3')
	forgingTemplate('minecraft:blue_ice', 'kubejs:smithing_template_4')
	forgingTemplate('oreganized:silver_ingot', 'kubejs:smithing_template_5')
	forgingTemplate('minecraft:spider_eye', 'kubejs:smithing_template_6')
	forgingTemplate('minecraft:gold_ingot', 'kubejs:smithing_template_7')
	forgingTemplate('buzzier_bees:four_leaf_clover', 'kubejs:smithing_template_8')
	forgingTemplate('upgrade_aquatic:thrasher_tooth', 'kubejs:smithing_template_9')
	forgingTemplate('minecraft:prismarine_shard', 'kubejs:smithing_template_10')
	forgingTemplate('minecraft:lightning_rod', 'kubejs:smithing_template_11')
	forgingTemplate('minecraft:ender_pearl', 'kubejs:smithing_template_12')
	forgingTemplate('create:fluid_tank', 'kubejs:smithing_template_13')
	forgingTemplateTag('raspberry_flavoured:non_leather_horse_armour', 'kubejs:smithing_template_14')
	forgingTemplate('minecraft:ghast_tear', 'kubejs:smithing_template_15')
	forgingTemplate('supplementaries:spring_launcher', 'kubejs:smithing_template_16')
	forgingTemplate('spelunkery:magnetite_chunk', 'kubejs:smithing_template_17')
	forgingTemplate('minecraft:enchanted_golden_apple', 'kubejs:smithing_template_18')
	forgingTemplate('minecraft:anvil', 'kubejs:smithing_template_19')
	forgingTemplate('minecraft:glowstone', 'kubejs:smithing_template_20')
	forgingTemplate('minecraft:rabbit_foot', 'kubejs:smithing_template_21')
	forgingTemplate('create:extendo_grip', 'kubejs:smithing_template_22')
	forgingTemplate('quark:soul_bead', 'kubejs:smithing_template_23')
	forgingTemplate('minecraft:slime_block', 'kubejs:smithing_template_24')
	
	modifyingWeapon('minecraft:netherite_ingot', 'minecraft:netherite_axe', 'clash:swept_axe')
	modifyingWeapon('oreganized:electrum_ingot', 'oreganized:electrum_sword', 'clash:spear')
	modifyingWeapon('caverns_and_chasms:necromium_ingot', 'abnormals_delight:necromium_knife', 'clash:greatblade')
	modifyingWeapon('alloyed:steel_ingot', 'alloyed:steel_axe', 'mace_backport:mace')
	modifyingWeapon('additionaladditions:rose_gold_alloy', 'additionaladditions:rose_gold_sword', 'kubejs:rose_gold_rapier')
	
// Smith-enchanting
	function smithEnchanting(templateItem, [enchantment]) {
		event.custom({type: 'miningmaster:gem_smithing_recipe', blacklist: {tag: 'miningmaster:gem_enchanting_blacklist'}, gem: {item: templateItem}, enchantments: [enchantment]})
	}
	smithEnchanting('kubejs:smithing_template_1', ['minecraft:swift_sneak'])
	smithEnchanting('kubejs:smithing_template_1', ['ensorcellation:phalanx'])
	smithEnchanting('kubejs:smithing_template_2', ['minecraft:knockback'])
	smithEnchanting('kubejs:smithing_template_2', ['ensorcellation:bulwark'])
	smithEnchanting('kubejs:smithing_template_3', ['minecraft:respiration'])
	smithEnchanting('kubejs:smithing_template_3', ['minecraft:depth_strider'])
	smithEnchanting('kubejs:smithing_template_4', ['minecraft:frost_walker'])
	smithEnchanting('kubejs:smithing_template_4', ['ensorcellation:frost_aspect'])
	smithEnchanting('kubejs:smithing_template_5', ['minecraft:smite'])
	smithEnchanting('kubejs:smithing_template_6', ['minecraft:bane_of_arthropods'])
	smithEnchanting('kubejs:smithing_template_6', ['allurement:spread_of_ailments'])
	smithEnchanting('kubejs:smithing_template_7', ['minecraft:quick_charge'])
	smithEnchanting('kubejs:smithing_template_7', ['ensorcellation:quick_draw'])
	smithEnchanting('kubejs:smithing_template_7', ['additional_enchantments:faster_attacks'])
	smithEnchanting('kubejs:smithing_template_8', ['ensorcellation:angler'])
	smithEnchanting('kubejs:smithing_template_9', ['minecraft:impaling'])
	smithEnchanting('kubejs:smithing_template_9', ['minecraft:piercing'])
	smithEnchanting('kubejs:smithing_template_9', ['ensorcellation:trueshot'])
	smithEnchanting('kubejs:smithing_template_9', ['farmersdelight:backstabbing'])
	smithEnchanting('kubejs:smithing_template_10', ['minecraft:riptide'])
	smithEnchanting('kubejs:smithing_template_10', ['minecraft:sweeping'])
	smithEnchanting('kubejs:smithing_template_10', ['clash:whirling'])
	smithEnchanting('kubejs:smithing_template_11', ['minecraft:channeling'])
	smithEnchanting('kubejs:smithing_template_12', ['supplementaries:stasis'])
	smithEnchanting('kubejs:smithing_template_12', ['ensorcellation:displacement'])
	smithEnchanting('kubejs:smithing_template_12', ['ensorcellation:damage_ender'])
	smithEnchanting('kubejs:smithing_template_13', ['create:capacity'])
	smithEnchanting('kubejs:smithing_template_14', ['ensorcellation:cavalier'])
	smithEnchanting('kubejs:smithing_template_15', ['ensorcellation:leech'])
	smithEnchanting('kubejs:smithing_template_15', ['allurement:vengeance'])
	smithEnchanting('kubejs:smithing_template_16', ['allurement:launch'])
	smithEnchanting('kubejs:smithing_template_17', ['minecraft:lure'])
	smithEnchanting('kubejs:smithing_template_17', ['allurement:reeling'])
	smithEnchanting('kubejs:smithing_template_18', ['ensorcellation:vitality'])
	smithEnchanting('kubejs:smithing_template_19', ['allurement:shockwave'])
	smithEnchanting('kubejs:smithing_template_20', ['usefulspyglass:marking'])
	smithEnchanting('kubejs:smithing_template_21', ['miningmaster:knight_jump'])
	smithEnchanting('kubejs:smithing_template_22', ['ensorcellation:reach'])
	smithEnchanting('kubejs:smithing_template_23', ['minecraft:soul_speed'])
	smithEnchanting('kubejs:smithing_template_23', ['additional_enchantments:homing'])
	smithEnchanting('kubejs:smithing_template_24', ['minecraft:multishot'])
	smithEnchanting('kubejs:smithing_template_24', ['ensorcellation:volley'])
	smithEnchanting('kubejs:smithing_template_24', ['kubejs:guard_break'])
	
// Grindstone polishing
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_cinnabar'}], result: {item: 'spelunkery:cinnabar'}, experience: 0})
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_diamond'}], result: {item: 'minecraft:diamond'}, experience: 0})
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'create:rose_quartz'}], result: {item: 'create:polished_rose_quartz'}, experience: 0})
	
// Pressing
	event.recipes.create.pressing(['2x minecraft:disc_fragment_5', Item.of('minecraft:disc_fragment_5', 3).withChance(0.3)], '#minecraft:music_discs')

// Compacting
	event.recipes.create.compacting([Fluid.of('minecraft:milk',125), Item.of('ecologics:coconut_husk').withChance(0.125)], 'ecologics:coconut_slice')
	event.recipes.create.compacting([Fluid.of('minecraft:milk',250), Item.of('ecologics:coconut_husk').withChance(0.25)], 'ecologics:coconut')
	event.recipes.create.compacting(['12x supplementaries:candy'], ['paper', 'create_confectionery:cocoa_butter', 'sugar'])
	event.recipes.create.compacting(['8x architects_palette:hazard_block'], ['4x black_concrete_powder', '4x yellow_concrete_powder', Fluid.of('minecraft:water',1000)])
	event.recipes.create.compacting(['kubejs:oat_bar'], ['kubejs:oats', 'neapolitan:banana', 'sugar'])
	event.recipes.create.compacting(['quark:slime_in_a_bucket'], ['bucket', 'slime_block', Fluid.of('minecraft:water',1000)])
	event.recipes.create.compacting([Item.of('minecraft:rabbit_hide'), Fluid.of('minecraft:water',500)], '#raspberry_flavoured:cacti')
	event.recipes.create.compacting(['paper'], '2x neapolitan:banana_frond')
	event.recipes.create.compacting(['12x chain'], ['2x oreganized:lead_nugget', 'oreganized:lead_ingot'])
	event.recipes.create.compacting(['4x calcite'], ['4x #raspberry_flavoured:basalt', 'bone_meal'])

// Mixing
	event.recipes.create.mixing('additionaladditions:rose_gold_alloy', ['copper_ingot', 'copper_ingot', 'copper_ingot', 'gold_ingot', 'gold_ingot', 'gold_ingot'])
	event.recipes.create.mixing('2x alloyed:steel_ingot', ['2x iron_ingot', 'fire_charge']).heated().id('alloyed:mixing/steel_ingot')
	event.recipes.create.mixing('2x alloyed:steel_ingot', ['3x oreganized:lead_ingot', 'fire_charge']).heated()
	event.recipes.create.mixing('4x architects_palette:algal_blend', ['clay_ball', 'clay_ball', 'kelp', 'kelp'])
	event.recipes.create.mixing('culturaldelights:corn_dough', ['kubejs:corn_flour', Fluid.of('minecraft:water',250)])
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:melon_juice',500), ['melon_slice', 'melon_slice', 'melon_slice', 'melon_slice', 'sugar']).heated().id('create_central_kitchen:mixing/melon_juice')
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:apple_cider',500), ['2x apple', 'sugar', 'kubejs:cinnamon']).heated().id('create_central_kitchen:mixing/apple_cider')
	event.recipes.create.mixing('slime_ball', ['create:wheat_flour', Fluid.of('create_central_kitchen:aloe_gel',250)]).heated()
	event.recipes.create.mixing('8x architects_palette:sunmetal_brick', ['6x #minecraft:soul_fire_base_blocks', '2x create:golden_sheet']).heated()
	event.recipes.create.mixing('8x architects_palette:wardstone_brick', ['4x spelunkery:rough_lazurite_block', '2x kubejs:soul_salt', '2x warped_fungus']).heated()
	event.recipes.create.mixing('20x architects_palette:entwine_rod', ['5x ender_pearl', 'create:iron_sheet']).heated()
	event.recipes.create.mixing('2x architects_palette:gilded_sandstone', ['2x sandstone', ['spelunkery:raw_gold_nugget', 'gold_nugget'], ['spelunkery:raw_gold_nugget', 'gold_nugget']])
	event.recipes.create.mixing('caverns_and_chasms:necromium_ingot', ['3x netherite_scrap', '3x oreganized:silver_ingot']).superheated().id('caverns_and_chasms:necromium_ingot')
	event.recipes.create.mixing('12x create:andesite_alloy', ['#raspberry_flavoured:sturdy_stone', 'create:zinc_ingot']).id('create:mixing/andesite_alloy_from_zinc')
	event.recipes.create.mixing('3x caverns_and_chasms:sanguine_plating', ['5x rotten_flesh', '2x oreganized:silver_ingot', '2x ghast_tear']).heated().id('caverns_and_chasms:sanguine_plating')
	event.recipes.create.mixing('12x fire_charge', ['gunpowder', '#minecraft:coals']).heated()
	event.recipes.create.mixing('8x kubejs:cobbled_exolite', ['4x cobblestone', '4x #minecraft:soul_fire_base_blocks', 'ender_pearl']).heated()
	event.recipes.create.mixing('2x ender_eye', ['2x ender_pearl', 'gold_ingot', 'fire_charge'])
	event.recipes.create.mixing(Fluid.of('spelunkery:portal_fluid',250), ['3x create:powdered_obsidian', '2x warped_fungus', Fluid.of('oreganized:molten_lead',250)]).superheated()
	
// Milling
	event.recipes.create.milling(['2x farmersrespite:coffee_beans', 'minecraft:red_dye'], 'farmersrespite:coffee_berries').id('create_central_kitchen:milling/coffee_berries')
	event.recipes.create.milling(['kubejs:corn_flour', Item.of('kubejs:corn_flour',2).withChance(0.5), Item.of('farmersdelight:straw').withChance(0.25)], 'culturaldelights:corn_cob')
	event.recipes.create.milling('kubejs:corn_flour', 'culturaldelights:corn_kernels')
	event.recipes.create.milling(['kubejs:corn_flour', Item.of('minecraft:wheat_seeds').withChance(0.5), Item.of('farmersdelight:straw').withChance(0.35)], 'culturaldelights:wild_corn')
	event.recipes.create.milling(['culturaldelights:eggplant_seeds', 'light_gray_dye'], 'culturaldelights:wild_eggplants')
	event.recipes.create.milling(['farmersrespite:coffee_beans', 'black_dye'], 'farmersrespite:wild_coffee_bush')
	event.recipes.create.milling(['2x bone_meal', Item.of('minecraft:bone_meal',1).withChance(0.2)], 'ecologics:seashell')
	event.recipes.create.milling(['sugar', 'red_dye', Item.of('minecraft:beetroot_seeds').withChance(0.1)], 'beetroot').id('create:milling/beetroot')
	event.recipes.create.milling(['black_dye', Item.of('minecraft:black_dye').withChance(0.35)], 'spelunkery:inkcap_mushroom')
	event.recipes.create.milling(['white_dye', Item.of('minecraft:white_dye').withChance(0.35)], 'spelunkery:white_inkcap_mushroom')
	event.recipes.create.milling(['create:cinder_flour'], 'nether_brick')
	event.recipes.create.milling(['2x sculk_vein', Item.of('sculk_vein').withChance(0.75)], 'sculk')
	event.recipes.create.milling(['4x blue_dye', Item.of('blue_dye',2).withChance(0.5)], '#raspberry_flavoured:just_lapis_blocks').id('create:milling/lapis_lazuli')
	event.recipes.create.milling(['2x blue_dye', Item.of('spelunkery:raw_gold_nugget').withChance(0.75)], '#raspberry_flavoured:gilded_lazurite_blocks')
	event.recipes.create.milling(['3x stick'], '#raspberry_flavoured:wooden_tools')
	event.recipes.create.milling(['flint', Item.of('twigs:pebble').withChance(0.5)], 'gravel').id('create:milling/gravel')
	event.recipes.create.milling(['black_dye', Item.of('supplementaries:ash').withChance(0.75)], 'charcoal').id('create:milling/charcoal')
	event.recipes.create.milling(['3x bone_meal', Item.of('minecraft:bone_meal',3).withChance(0.25), Item.of('minecraft:white_dye').withChance(0.25)], 'bone').id('create:milling/bone')
	event.recipes.create.milling(['3x bone_meal', Item.of('minecraft:bone_meal',4).withChance(0.25), Item.of('minecraft:black_dye').withChance(0.25)], 'architects_palette:withered_bone')
	event.recipes.create.milling([Item.of('minecraft:string').withChance(0.7)], 'kubejs:cloth_scrap')
	event.recipes.create.milling([Item.of('minecraft:bone_meal').withChance(0.2)], 'calcite').id('create:milling/calcite')

// Crushing
	event.recipes.create.crushing(['2x spelunkery:rough_cinnabar', Item.of('redstone').withChance(0.5), Item.of('twigs:pebble',4).withChance(0.12)], 'redstone_ore').id('create:crushing/redstone_ore')
	event.recipes.create.crushing(['create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'kubejs:lead_ore').id('create:crushing/lead_ore')
	event.recipes.create.crushing(['spelunkery:rough_diamond', Item.of('spelunkery:rough_diamond').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'diamond_ore').id('create:crushing/diamond_ore')
	event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper'), Item.of('twigs:pebble',4).withChance(0.12)], 'copper_ore').id('create:crushing/copper_ore')
	event.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver'), Item.of('twigs:pebble',4).withChance(0.12)], 'oreganized:silver_ore').id('create:crushing/silver_ore')
	event.recipes.create.crushing(['coal', Item.of('coal').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'coal_ore').id('create:crushing/coal_ore')
	event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'iron_ore').id('create:crushing/iron_ore')
	event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'gold_ore').id('create:crushing/gold_ore')
	event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'create:zinc_ore').id('create:crushing/zinc_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_copper_ore').id('create:crushing/deepslate_copper_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.25), Item.of('spelunkery:raw_magnetite_nugget',2).withChance(0.15), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_iron_ore').id('create:crushing/deepslate_iron_ore')
	event.recipes.create.crushing(['3x spelunkery:rough_cinnabar', Item.of('minecraft:redstone').withChance(0.5), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_redstone_ore').id('create:crushing/deepslate_redstone_ore')
	event.recipes.create.crushing(['2x spelunkery:rough_diamond', Item.of('spelunkery:rough_diamond').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_diamond_ore').id('create:crushing/deepslate_diamond_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'oreganized:deepslate_lead_ore').id('create:crushing/deepslate_lead_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'create:deepslate_zinc_ore').id('create:crushing/deepslate_zinc_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_gold_ore').id('create:crushing/deepslate_gold_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'oreganized:deepslate_silver_ore').id('create:crushing/deepslate_silver_ore')
	event.recipes.create.crushing(['2x coal', Item.of('coal',2).withChance(0.5), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_coal_ore').id('create:crushing/deepslate_coal_ore')
	event.recipes.create.crushing(['2x quartz', Item.of('quartz',2).withChance(0.12), Item.of('netherrack').withChance(0.12)], 'nether_quartz_ore').id('create:crushing/nether_quartz_ore')
	event.recipes.create.crushing(['18x spelunkery:raw_gold_nugget', Item.of('netherrack').withChance(0.125)], 'nether_gold_ore').id('create:crushing/nether_gold_ore')
	event.recipes.create.crushing(['18x spelunkery:raw_lead_nugget', Item.of('netherrack').withChance(0.125)], 'kubejs:nether_lead_ore')
	event.recipes.create.crushing(['9x create:crushed_raw_copper'], 'raw_copper_block').id('create:crushing/raw_copper_block')
	event.recipes.create.crushing(['9x create:crushed_raw_iron'], 'raw_iron_block').id('create:crushing/raw_iron_block')
	event.recipes.create.crushing(['9x create:crushed_raw_gold'], 'raw_gold_block').id('create:crushing/raw_gold_block')
	event.recipes.create.crushing(['9x create:crushed_raw_zinc'], 'create:raw_zinc_block').id('create:crushing/raw_zinc_block')
	event.recipes.create.crushing(['9x create:crushed_raw_silver'], 'oreganized:raw_silver_block').id('create:crushing/raw_silver_block')
	event.recipes.create.crushing(['9x create:crushed_raw_lead'], 'oreganized:raw_lead_block').id('create:crushing/raw_lead_block')
	event.recipes.create.crushing(['create:crushed_raw_copper'], 'raw_copper').id('create:crushing/raw_copper')
	event.recipes.create.crushing(['create:crushed_raw_iron'], 'raw_iron').id('create:crushing/raw_iron')
	event.recipes.create.crushing(['create:crushed_raw_gold'], 'raw_gold').id('create:crushing/raw_gold')
	event.recipes.create.crushing(['create:crushed_raw_zinc'], 'create:raw_zinc').id('create:crushing/raw_zinc')
	event.recipes.create.crushing(['create:crushed_raw_silver'], 'oreganized:raw_silver').id('create:crushing/raw_silver_ore')
	event.recipes.create.crushing(['create:crushed_raw_lead'], 'oreganized:raw_lead').id('create:crushing/raw_lead_ore')
	event.recipes.create.crushing(['gravel', Item.of('twigs:pebble',2).withChance(0.5)], 'cobblestone')
	event.recipes.create.crushing(['18x spelunkery:raw_gold_nugget', Item.of('minecraft:blackstone').withChance(0.125)], 'gilded_blackstone')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone_stairs')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone_pillar')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:chiseled_gilded_sandstone')
	event.recipes.create.crushing(['5x blue_dye', Item.of('blue_dye',2).withChance(0.8)], '#raspberry_flavoured:just_lapis_blocks')
	event.recipes.create.crushing(['3x blue_dye', Item.of('spelunkery:raw_gold_nugget',2).withChance(0.75)], '#raspberry_flavoured:gilded_lazurite_blocks')
	event.recipes.create.crushing(['sand', Item.of('minecraft:flint').withChance(0.15), Item.of('minecraft:clay_ball').withChance(0.05), Item.of('twigs:pebble').withChance(0.2)], 'gravel').id('create:crushing/gravel')
	
// Splashing
	event.recipes.create.splashing('culturaldelights:corn_dough', 'kubejs:corn_flour')
	
// Filling
	const fillingTippedArrows = [
	"minecraft:night_vision",
	"minecraft:long_night_vision",
	"minecraft:invisibility",
	"minecraft:long_invisibility",
	"minecraft:leaping",
	"minecraft:long_leaping",
	"minecraft:strong_leaping",
	"minecraft:fire_resistance",
	"minecraft:long_fire_resistance",
	"minecraft:swiftness",
	"minecraft:long_swiftness",
	"minecraft:strong_swiftness",
	"minecraft:slowness",
	"minecraft:long_slowness",
	"minecraft:strong_slowness",
	"minecraft:turtle_master",
	"minecraft:long_turtle_master",
	"minecraft:strong_turtle_master",
	"minecraft:water_breathing",
	"minecraft:long_water_breathing",
	"minecraft:healing",
	"minecraft:strong_healing",
	"minecraft:harming",
	"minecraft:strong_harming",
	"minecraft:poison",
	"minecraft:long_poison",
	"minecraft:strong_poison",
	"minecraft:regeneration",
	"minecraft:long_regeneration",
	"minecraft:strong_regeneration",
	"minecraft:strength",
	"minecraft:long_strength",
	"minecraft:strong_strength",
	"minecraft:weakness",
	"minecraft:long_weakness",
	"minecraft:luck",
	"minecraft:slow_falling",
	"minecraft:long_slow_falling"
	]
    
    fillingTippedArrows.forEach(fillingTippedArrow => {
        event.recipes.create.filling(Item.of('minecraft:tipped_arrow', 1, {Potion:fillingTippedArrow}), [Fluid.of('create:potion', 10, {Bottle:"LINGERING", Potion:fillingTippedArrow}), 'arrow'])
    })
	
	event.recipes.create.filling('map', [Fluid.of('kubejs:ink',10), 'paper'])
	event.recipes.create.filling('spelunkery:portal_fluid_bottle', [Fluid.of('spelunkery:portal_fluid',250), 'glass_bottle'])
	
// Emptying
	event.recipes.create.emptying([Fluid.of('kubejs:ink',500), 'minecraft:glass_bottle'], 'supplementaries:antique_ink')
	event.recipes.create.emptying([Fluid.of('kubejs:ink',100)], 'ink_sac')
	event.recipes.create.emptying([Fluid.of('spelunkery:portal_fluid',250), 'minecraft:glass_bottle'], 'spelunkery:portal_fluid_bottle')
	event.recipes.create.emptying([Fluid.of('spelunkery:portal_fluid',1000), 'minecraft:bucket'], 'spelunkery:portal_fluid_bucket')
	
// Sequenced assembly
	event.recipes.createSequencedAssembly([
		Item.of('create:redstone_link',2),
	],'create:brass_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:sculk_sensor']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:redstone_torch']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','create:brass_sheet']),
		event.recipes.createPressing('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link'])
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
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_chicken_taco').loops(1).id('kubejs:chicken_taco_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:eggplant_burger'),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#culturaldelights:smoked_regular_eggplants']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#forge:salad_ingredients']),
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
		Item.of('brewinandchewin:quiche'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#brewinandchewin:bacon_or_mushroom']),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_quiche',['kubejs:incomplete_quiche','#forge:eggs']),
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
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','sugar']),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','create_confectionery:cocoa_butter']),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','create:wheat_flour']),
		event.recipes.createDeploying('kubejs:incomplete_butterscotch_cinnamon_pie',['kubejs:incomplete_butterscotch_cinnamon_pie','kubejs:cinnamon'])
	]).transitionalItem('kubejs:incomplete_butterscotch_cinnamon_pie').loops(3).id('kubejs:butterscotch_cinnamon_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:prickly_pear_pie'),
	],'farmersdelight:pie_crust',[
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_pie',['kubejs:incomplete_prickly_pear_pie','ecologics:cooked_prickly_pear']),
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_pie',['kubejs:incomplete_prickly_pear_pie','ecologics:cooked_prickly_pear']),
		event.recipes.createDeploying('kubejs:incomplete_prickly_pear_pie',['kubejs:incomplete_prickly_pear_pie','minecraft:sugar'])
	]).transitionalItem('kubejs:incomplete_prickly_pear_pie').loops(2).id('kubejs:prickly_pear_pie_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:pizza'),
	],'farmersdelight:wheat_dough',[
		event.recipes.createFilling('kubejs:incomplete_pizza',['kubejs:incomplete_pizza',Fluid.of('create_central_kitchen:tomato_sauce',250)]),
		event.recipes.createFilling('kubejs:incomplete_pizza',['kubejs:incomplete_pizza',Fluid.of('kubejs:flaxen_cheese',250)]),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','farmersdelight:beef_patty']),
		event.recipes.createDeploying('kubejs:incomplete_pizza',['kubejs:incomplete_pizza','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_pizza').loops(1).id('kubejs:pizza_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:ham_and_cheese_sandwich', 2),
	],'minecraft:bread',[
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','farmersdelight:smoked_ham']),
		event.recipes.createFilling('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich',Fluid.of('kubejs:flaxen_cheese',250)]),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','minecraft:bread'])
	]).transitionalItem('kubejs:incomplete_ham_and_cheese_sandwich').loops(1).id('kubejs:ham_and_cheese_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersrespite:nether_wart_sourdough'),
	],'minecraft:soul_soil',[
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','create:cinder_flour']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','create:cinder_flour']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','minecraft:crimson_fungus'])
	]).transitionalItem('kubejs:incomplete_souldough').loops(1).id('kubejs:souldough_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('farmersrespite:nether_wart_sourdough'),
	],'minecraft:soul_soil',[
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','sob:cinder_dough']),
		event.recipes.createDeploying('kubejs:incomplete_souldough',['kubejs:incomplete_souldough','minecraft:crimson_fungus'])
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
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#farmersdelight:barbecue_meats']),
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#forge:crops/onion']),
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#forge:crops/tomato'])
	]).transitionalItem('kubejs:incomplete_meat_skewer').loops(1).id('kubejs:meat_skewer_assembly')

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
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:baked_tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','minecraft:stick']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_deepskewer').loops(1).id('kubejs:deepskewer_assembly')

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
		Item.of('create:blaze_cake'),
	],'create:cinder_flour',[
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','#forge:eggs']),
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','create:cinder_flour']),
		event.recipes.createFilling('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart',Fluid.of('minecraft:lava',250)]),
		event.recipes.createPressing('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart'])
	]).transitionalItem('kubejs:incomplete_blaze_tart').loops(1).id('create:filling/blaze_cake')

// Replace recipe inputs
	event.replaceInput({ input: 'oreganized:lead_ore' }, 'oreganized:lead_ore', 'kubejs:lead_ore')
	event.replaceInput({ input: 'nethersdelight:blackstone_furnace' }, 'nethersdelight:blackstone_furnace', 'quark:blackstone_furnace')
	event.replaceInput({ input: 'neapolitan:adzuki_beans' }, 'neapolitan:adzuki_beans', 'environmental:cherries')
	event.replaceInput({ input: 'neapolitan:roasted_adzuki_beans' }, 'neapolitan:roasted_adzuki_beans', 'environmental:cherries')
	event.replaceInput({ input: 'minecraft:jukebox' }, 'minecraft:jukebox', 'etched:album_jukebox')
	event.replaceInput({ input: 'minecraft:nether_wart' }, 'minecraft:nether_wart', 'minecraft:crimson_fungus')
	event.replaceInput({ input: 'upgrade_aquatic:mulberry' }, 'upgrade_aquatic:mulberry', 'minecraft:sweet_berries')
	event.replaceInput({ output: 'create:steam_engine' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceInput({ output: 'create:copper_backtank' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceInput({ output: 'minecraft:copper_ingot' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceInput({ output: 'minecraft:copper_ingot' }, 'minecraft:waxed_copper_block', 'copperandtuffbackport:waxed_chiseled_copper')
	event.replaceInput({ output: 'minecraft:shears' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
	event.replaceInput({ output: 'create:propeller' }, 'create:iron_sheet', 'alloyed:steel_sheet')
	event.replaceInput({ output: 'oreganized:exposer' }, '#forge:ingots/silver', 'oreganized:silver_nugget')
	event.replaceInput({ output: 'mynethersdelight:waxed_hoglin_trophy' }, 'minecraft:crimson_fungus', 'minecraft:honeycomb')
	event.replaceInput({ output: 'caverns_and_chasms:depth_gauge' }, '#forge:ingots/silver', 'oreganized:lead_ingot')
	event.replaceInput({ output: 'caverns_and_chasms:depth_gauge' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ output: 'caverns_and_chasms:barometer' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ output: 'architects_palette:myonite_slab' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_stairs' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_wall' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_slab' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_stairs' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_wall' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'farmersdelight:sweet_berry_cheesecake' }, 'minecraft:sweet_berries', 'minecraft:glow_berries')
	event.replaceInput({ output: 'alloyed:steel_sword' }, 'minecraft:iron_sword', 'kubejs:lead_sword')
	event.replaceInput({ output: 'alloyed:steel_axe' }, 'minecraft:iron_axe', 'kubejs:lead_axe')
	event.replaceInput({ output: 'alloyed:steel_pickaxe' }, 'minecraft:iron_pickaxe', 'kubejs:lead_pickaxe')
	event.replaceInput({ output: 'alloyed:steel_shovel' }, 'minecraft:iron_shovel', 'kubejs:lead_shovel')
	event.replaceInput({ output: 'alloyed:steel_hoe' }, 'minecraft:iron_hoe', 'kubejs:lead_hoe')
	event.replaceInput({ output: 'alloyed:steel_knife' }, 'farmersdelight:iron_knife', 'kubejs:lead_knife')
	event.replaceInput({ id: 'minecraft:crossbow' }, 'minecraft:tripwire_hook', 'minecraft:string')
	event.replaceInput({ id: 'quark:building/crafting/dirt_bricks' }, 'paletteblocks:cobblestone_bricks', 'minecraft:dirt')
	event.replaceInput({ id: 'twigs:cut_amethyst' }, 'twigs:polished_amethyst', 'minecraft:amethyst_block')
	event.replaceInput({ id: 'minecraft:compass' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ id: 'minecraft:clock' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ id: 'minecraft:iron_helmet' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_chestplate' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_leggings' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_boots' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'domesticationinnovation:wayward_lantern' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:golden_helmet' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_chestplate' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_leggings' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_boots' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'copperized:copper_helmet' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_chestplate' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_leggings' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_boots' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'supplementaries:hourglass' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'supplementaries:faucet' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
	event.replaceInput({ id: 'create:crafting/kinetics/goggles' }, 'minecraft:string', '#minecraft:leather_cuts')
	event.replaceInput({ id: 'twigs:rocky_dirt' }, 'twigs:pebble', 'minecraft:cobblestone')
	event.replaceInput({ id: 'architects_palette:pipe' }, 'architects_palette:plating_block', 'quark:iron_plate')
	event.replaceInput({ id: 'everycomp:q/culturaldelights/avocado_hedge' }, '#minecraft:oak_logs', '#minecraft:jungle_logs')
	event.replaceInput({ id: 'quark:building/crafting/azalea_hedge_oak' }, '#minecraft:oak_logs', '#ecologics:azalea_logs')
	event.replaceInput({ id: 'everycomp:q/ecologics/coconut_hedge' }, '#minecraft:oak_logs', '#ecologics:coconut_logs')
	event.replaceInput({ id: 'everycomp:q/architects_palette/twisted_hedge' }, '#minecraft:oak_logs', '#architects_palette:twisted_logs')
	event.replaceInput({ id: 'mynethersdelight:soul_nethers_stove_alt' }, 'minecraft:campfire', 'minecraft:soul_campfire')
	event.replaceInput({ id: 'mynethersdelight:soul_nethers_stove_alt' }, '#mynethersdelight:stove_soul_fuel', '#minecraft:coals')
	event.replaceInput({ id: 'mynethersdelight:hoglin_trophy_cure' }, 'minecraft:ghast_tear', 'minecraft:golden_apple')
	event.replaceInput({ id: 'architects_palette:cerebral_tiles' }, 'architects_palette:cerebral_block', 'architects_palette:mushy_myonite_bricks')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/chest_minecart' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/furnace_minecart' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/tnt_minecart' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/hopper_minecart' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ id: 'quark:building/crafting/furnaces/deepslate_minecart_tweaked' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ id: 'quark:building/crafting/furnaces/blackstone_minecart_tweaked' }, 'minecraft:iron_ingot', 'oreganized:lead_ingot')

// Replace recipe outputs
	event.replaceOutput({ id: 'minecraft:copper_block' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_oxeye_daisy' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_white_tulip' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_azure_bluet' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'create:copper_bars_from_ingots_copper_stonecutting' }, 'create:copper_bars', 'caverns_and_chasms:copper_bars')
})