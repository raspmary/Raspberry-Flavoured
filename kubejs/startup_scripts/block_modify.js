BlockEvents.modification(event => {
	function breakFast(x, q) {
		event.modify(x, block => {block.destroySpeed = q})
	}
	function howExplode(x, q) {
		event.modify(x, block => {block.explosionResistance = q})
	}
	
// Set block breaking speed
	breakFast('minecraft:cobblestone', 1.5)
	breakFast('minecraft:mossy_cobblestone', 1.5)
	breakFast('minecraft:cobblestone_stairs', 1.5)
	breakFast('minecraft:cobblestone_wall', 1.5)
	breakFast('minecraft:mossy_cobblestone_wall', 1.5)
	breakFast('minecraft:cobblestone_slab', 1.5)
	breakFast('minecraft:mossy_cobblestone_stairs', 1.5)
	breakFast('minecraft:mossy_cobblestone_slab', 1.5)
	breakFast('paletteblocks:cobblestone_bricks', 1.5)
	breakFast('paletteblocks:mossy_cobblestone_bricks', 1.5)
	breakFast('paletteblocks:cracked_cobblestone_bricks', 1.5)
	breakFast('paletteblocks:cobblestone_brick_slab', 1.5)
	breakFast('paletteblocks:mossy_cobblestone_brick_slab', 1.5)
	breakFast('paletteblocks:cobblestone_brick_stairs', 1.5)
	breakFast('paletteblocks:mossy_cobblestone_brick_stairs', 1.5)
	breakFast('paletteblocks:cobblestone_brick_wall', 1.5)
	breakFast('paletteblocks:mossy_cobblestone_brick_wall', 1.5)
	breakFast('upgrade_aquatic:kelpy_cobblestone', 1.5)
	breakFast('upgrade_aquatic:kelpy_cobblestone_stairs', 1.5)
	breakFast('upgrade_aquatic:kelpy_cobblestone_slab', 1.5)
	breakFast('upgrade_aquatic:kelpy_cobblestone_wall', 1.5)
	breakFast('atmospheric:kousa_chest', 1.5)
	breakFast('atmospheric:kousa_trapped_chest', 1.5)
	breakFast('minecraft:deepslate_gold_ore', 3.5)
	breakFast('minecraft:deepslate_iron_ore', 3.5)
	breakFast('minecraft:deepslate_coal_ore', 3.5)
	breakFast('minecraft:deepslate_lapis_ore', 3.5)
	breakFast('minecraft:deepslate_diamond_ore', 3.5)
	breakFast('minecraft:deepslate_redstone_ore', 3.5)
	breakFast('minecraft:deepslate_emerald_ore', 3.5)
	breakFast('minecraft:deepslate_copper_ore', 3.5)
	breakFast('create:deepslate_zinc_ore', 3.5)
	breakFast('oreganized:deepslate_silver_ore', 3.5)
	breakFast('oreganized:deepslate_lead_ore', 3.5)
	breakFast('minecraft:deepslate', 2.0)
	breakFast('minecraft:cobbled_deepslate', 2.0)
	breakFast('minecraft:cobbled_deepslate_stairs', 2.0)
	breakFast('minecraft:cobbled_deepslate_slab', 2.0)
	breakFast('minecraft:cobbled_deepslate_wall', 2.0)
	breakFast('minecraft:polished_deepslate', 2.0)
	breakFast('minecraft:polished_deepslate_stairs', 2.0)
	breakFast('minecraft:polished_deepslate_slab', 2.0)
	breakFast('minecraft:polished_deepslate_wall', 2.0)
	breakFast('minecraft:deepslate_tiles', 2.0)
	breakFast('minecraft:deepslate_tile_stairs', 2.0)
	breakFast('minecraft:deepslate_tile_slab', 2.0)
	breakFast('minecraft:deepslate_tile_wall', 2.0)
	breakFast('minecraft:deepslate_bricks', 2.0)
	breakFast('minecraft:deepslate_brick_stairs', 2.0)
	breakFast('minecraft:deepslate_brick_slab', 2.0)
	breakFast('minecraft:deepslate_brick_wall', 2.0)
	breakFast('minecraft:chiseled_deepslate', 2.0)
	breakFast('minecraft:cracked_deepslate_bricks', 2.0)
	breakFast('minecraft:cracked_deepslate_tiles', 2.0)
	breakFast('create:cut_deepslate', 2.0)
	breakFast('create:cut_deepslate_stairs', 2.0)
	breakFast('create:cut_deepslate_slab', 2.0)
	breakFast('create:cut_deepslate_wall', 2.0)
	breakFast('create:polished_cut_deepslate', 2.0)
	breakFast('create:polished_cut_deepslate_stairs', 2.0)
	breakFast('create:polished_cut_deepslate_slab', 2.0)
	breakFast('create:polished_cut_deepslate_wall', 2.0)
	breakFast('create:cut_deepslate_bricks', 2.0)
	breakFast('create:cut_deepslate_brick_stairs', 2.0)
	breakFast('create:cut_deepslate_brick_slab', 2.0)
	breakFast('create:cut_deepslate_brick_wall', 2.0)
	breakFast('create:small_deepslate_bricks', 2.0)
	breakFast('create:small_deepslate_brick_stairs', 2.0)
	breakFast('create:small_deepslate_brick_slab', 2.0)
	breakFast('create:small_deepslate_brick_wall', 2.0)
	breakFast('create:layered_deepslate', 2.0)
	breakFast('create:deepslate_pillar', 2.0)
	breakFast('quark:deepslate_furnace', 2.0)
	breakFast('supplementaries:deepslate_lamp', 2.0)
	breakFast('minecraft:budding_amethyst', 8)
	breakFast('minecraft:skeleton_skull', 0.3)
	breakFast('minecraft:wither_skeleton_skull', 0.3)
	breakFast('minecraft:player_head', 0.3)
	breakFast('minecraft:zombie_head', 0.3)
	breakFast('minecraft:creeper_head', 0.3)
	breakFast('minecraft:dragon_head', 0.3)
	breakFast('supplementaries:enderman_head', 0.3)
	breakFast('minecraft:clay', 0.3)
	breakFast('minecraft:gravel', 0.3)
	breakFast('supplementaries:raked_gravel', 0.3)
	breakFast('minecraft:sand', 0.3)
	breakFast('minecraft:red_sand', 0.3)
	breakFast('minecraft:soul_sand', 0.3)
	breakFast('atmospheric:arid_sand', 0.3)
	breakFast('atmospheric:red_arid_sand', 0.3)
	breakFast('quark:gravisand', 0.3)
	breakFast('minecraft:sponge', 0.3)
	breakFast('minecraft:wet_sponge', 0.3)
	breakFast('minecraft:mud', 0.3)
	breakFast('minecraft:muddy_mangrove_roots', 0.3)
	breakFast('minecraft:white_concrete_powder', 0.3)
	breakFast('minecraft:orange_concrete_powder', 0.3)
	breakFast('minecraft:magenta_concrete_powder', 0.3)
	breakFast('minecraft:light_blue_concrete_powder', 0.3)
	breakFast('minecraft:yellow_concrete_powder', 0.3)
	breakFast('minecraft:lime_concrete_powder', 0.3)
	breakFast('minecraft:pink_concrete_powder', 0.3)
	breakFast('minecraft:gray_concrete_powder', 0.3)
	breakFast('minecraft:light_gray_concrete_powder', 0.3)
	breakFast('minecraft:cyan_concrete_powder', 0.3)
	breakFast('minecraft:purple_concrete_powder', 0.3)
	breakFast('minecraft:blue_concrete_powder', 0.3)
	breakFast('minecraft:brown_concrete_powder', 0.3)
	breakFast('minecraft:green_concrete_powder', 0.3)
	breakFast('minecraft:red_concrete_powder', 0.3)
	breakFast('minecraft:black_concrete_powder', 0.3)
	breakFast('oreganized:waxed_white_concrete_powder', 0.3)
	breakFast('oreganized:waxed_orange_concrete_powder', 0.3)
	breakFast('oreganized:waxed_magenta_concrete_powder', 0.3)
	breakFast('oreganized:waxed_light_blue_concrete_powder', 0.3)
	breakFast('oreganized:waxed_yellow_concrete_powder', 0.3)
	breakFast('oreganized:waxed_lime_concrete_powder', 0.3)
	breakFast('oreganized:waxed_pink_concrete_powder', 0.3)
	breakFast('oreganized:waxed_gray_concrete_powder', 0.3)
	breakFast('oreganized:waxed_light_gray_concrete_powder', 0.3)
	breakFast('oreganized:waxed_cyan_concrete_powder', 0.3)
	breakFast('oreganized:waxed_purple_concrete_powder', 0.3)
	breakFast('oreganized:waxed_blue_concrete_powder', 0.3)
	breakFast('oreganized:waxed_brown_concrete_powder', 0.3)
	breakFast('oreganized:waxed_green_concrete_powder', 0.3)
	breakFast('oreganized:waxed_red_concrete_powder', 0.3)
	breakFast('oreganized:waxed_black_concrete_powder', 0.3)
	breakFast('additionaladditions:patina_block', 0.3)
	breakFast('supplementaries:sugar_cube', 0.3)
	breakFast('incubation:hay_nest', 0.3)
	breakFast('incubation:twig_nest', 0.3)
	breakFast('neapolitan:banana_bundle', 0.9)
	breakFast('kubejs:eggplant_parmesan_block', 0.5)
	breakFast('kubejs:butterscotch_cinnamon_pie', 0.5)
	breakFast('kubejs:prickly_pear_pie', 0.5)
	breakFast('ecologics:seashell', 0)
	breakFast('spelunkery:magnetite', 16.0)
	breakFast('minecraft:campfire', 1.0)
	breakFast('minecraft:soul_campfire', 1.0)
	breakFast('caverns_and_chasms:cupric_campfire', 1.0)
	breakFast('minecraft:chain', 0.5)
	breakFast('supplementaries:safe', 8.5)
	breakFast('minecraft:lapis_block', 1.5)
	breakFast('minecraft:emerald_block', 1.5)
	breakFast('spelunkery:rough_lazurite_block', 1.5)
	breakFast('minecraft:end_stone', 0.5)
	breakFast('minecraft:white_bed', 1.25)
	breakFast('minecraft:orange_bed', 1.25)
	breakFast('minecraft:magenta_bed', 1.25)
	breakFast('minecraft:light_blue_bed', 1.25)
	breakFast('minecraft:yellow_bed', 1.25)
	breakFast('minecraft:lime_bed', 1.25)
	breakFast('minecraft:pink_bed', 1.25)
	breakFast('minecraft:gray_bed', 1.25)
	breakFast('minecraft:light_gray_bed', 1.25)
	breakFast('minecraft:cyan_bed', 1.25)
	breakFast('minecraft:purple_bed', 1.25)
	breakFast('minecraft:blue_bed', 1.25)
	breakFast('minecraft:brown_bed', 1.25)
	breakFast('minecraft:green_bed', 1.25)
	breakFast('minecraft:red_bed', 1.25)
	breakFast('minecraft:black_bed', 1.25)
	breakFast('minecraft:red_bed', 1.25)
	breakFast('domesticationinnovation:pet_bed_white', 0.75)
	breakFast('domesticationinnovation:pet_bed_orange', 0.75)
	breakFast('domesticationinnovation:pet_bed_magenta', 0.75)
	breakFast('domesticationinnovation:pet_bed_light_blue', 0.75)
	breakFast('domesticationinnovation:pet_bed_yellow', 0.75)
	breakFast('domesticationinnovation:pet_bed_lime', 0.75)
	breakFast('domesticationinnovation:pet_bed_pink', 0.75)
	breakFast('domesticationinnovation:pet_bed_gray', 0.75)
	breakFast('domesticationinnovation:pet_bed_light_gray', 0.75)
	breakFast('domesticationinnovation:pet_bed_cyan', 0.75)
	breakFast('domesticationinnovation:pet_bed_purple', 0.75)
	breakFast('domesticationinnovation:pet_bed_blue', 0.75)
	breakFast('domesticationinnovation:pet_bed_brown', 0.75)
	breakFast('domesticationinnovation:pet_bed_green', 0.75)
	breakFast('domesticationinnovation:pet_bed_red', 0.75)
	breakFast('domesticationinnovation:pet_bed_black', 0.75)
	breakFast('domesticationinnovation:pet_bed_red', 0.75)
	breakFast('naturalist:bear', 0.35)
	
// Set block explosion resistance
	howExplode('minecraft:end_stone', 0.5)
	
// Set exolite blocks' destroy speed
	event.modify([
	'architects_palette:cerebral_block',
	'architects_palette:cerebral_slab',
	'architects_palette:cerebral_stairs',
	'architects_palette:cerebral_wall',
	'architects_palette:cerebral_tiles',
	'architects_palette:cerebral_tile_slab',
	'architects_palette:cerebral_tile_stairs',
	'architects_palette:cerebral_tile_wall',
	'architects_palette:cerebral_pillar',
	'architects_palette:myonite_slab',
	'architects_palette:myonite_stairs',
	'architects_palette:myonite_wall',
	'architects_palette:myonite_brick_slab',
	'architects_palette:myonite_brick_stairs',
	'architects_palette:myonite_brick_wall',
	'architects_palette:mushy_myonite_bricks',
	'architects_palette:mushy_myonite_brick_slab',
	'architects_palette:mushy_myonite_brick_stairs',
	'architects_palette:mushy_myonite_brick_wall'
	], block => {block.destroySpeed = 2})
	
// Set exolite blocks' explosion resistance
	event.modify([
	'architects_palette:cerebral_block',
	'architects_palette:cerebral_slab',
	'architects_palette:cerebral_stairs',
	'architects_palette:cerebral_wall',
	'architects_palette:cerebral_tiles',
	'architects_palette:cerebral_tile_slab',
	'architects_palette:cerebral_tile_stairs',
	'architects_palette:cerebral_tile_wall',
	'architects_palette:cerebral_pillar',
	'architects_palette:myonite_slab',
	'architects_palette:myonite_stairs',
	'architects_palette:myonite_wall',
	'architects_palette:myonite_brick_slab',
	'architects_palette:myonite_brick_stairs',
	'architects_palette:myonite_brick_wall',
	'architects_palette:mushy_myonite_bricks',
	'architects_palette:mushy_myonite_brick_slab',
	'architects_palette:mushy_myonite_brick_stairs',
	'architects_palette:mushy_myonite_brick_wall'
	], block => {block.explosionResistance = 9})
	
// Make deepslate ores un-blow-up-able	
	event.modify([
	'oreganized:silver_ore',
	'oreganized:deepslate_silver_ore',
	'minecraft:deepslate_coal_ore',
	'minecraft:deepslate_iron_ore',
	'minecraft:deepslate_copper_ore',
	'minecraft:deepslate_gold_ore',
	'minecraft:deepslate_redstone_ore',
	'minecraft:deepslate_emerald_ore',
	'minecraft:deepslate_lapis_ore',
	'minecraft:deepslate_diamond_ore',
	'create:deepslate_zinc_ore',
	'oreganized:deepslate_lead_ore'
	], block => {block.explosionResistance = 1200})
	
// Set blocks to not require tool
	event.modify([
	'quark:dirt_bricks',
	'quark:dirt_bricks_slab',
	'quark:dirt_bricks_stairs',
	'quark:dirt_bricks_wall',
	'create_confectionery:chocolate_bricks',
	'create_confectionery:chocolate_bricks_stairs',
	'create_confectionery:chocolate_bricks_slab',
	'create_confectionery:black_chocolate_bricks',
	'create_confectionery:black_chocolate_bricks_stairs',
	'create_confectionery:black_chocolate_bricks_slab',
	'create_confectionery:white_chocolate_bricks',
	'create_confectionery:white_chocolate_bricks_stairs',
	'create_confectionery:white_chocolate_bricks_slab',
	'minecraft:end_stone',
	'woodworks:sawmill'
	], block => {block.requiresTool = false})
})