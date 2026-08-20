// priority: 0

StartupEvents.registry('block', event => {
	const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

	event.create('wheat_flour_bag').soundType('wool').hardness(0.8).resistance(0.8).item(item => {item.group('decorations')})
	event.create('cinder_flour_bag').soundType('wool').hardness(0.8).resistance(0.8).item(item => {item.group('decorations')})
	event.create('corn_flour_bag').soundType('wool').hardness(0.8).resistance(0.8).item(item => {item.group('decorations')})
	event.create('cinnamon_bag').soundType('wool').hardness(0.8).resistance(0.8).item(item => {item.group('decorations')})
	event.create('oat_bag').soundType('wool').hardness(0.8).resistance(0.8).item(item => {item.group('decorations')})
	
	event.create('button_mushroom_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('crimini_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('portabella_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('milly_bubcap_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('crimson_fungus_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('warped_fungus_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('choral_fungus_basket').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	
	event.create('worm_crate').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('golden_worm_crate').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	event.create('grub_crate').soundType('wood').hardness(1.5).resistance(1.5).item(item => {item.group('decorations')})
	
	event.create('paper_block').soundType('wool').hardness(0.1).resistance(0.1).item(item => {item.group('building_blocks')})
	
	event.create('lead_ore').soundType('stone').hardness(3).resistance(1200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('nether_lead_ore').soundType('nether_ore').hardness(3).resistance(1200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('deposit').soundType('stone').hardness(3).resistance(3).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('deepslate_deposit').soundType('deepslate').hardness(4.5).resistance(4.5).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('blackstone_deposit').soundType('stone').hardness(3).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('bronze_block').soundType('copper').hardness(3).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('rose_gold_block').soundType('metal').hardness(3).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_steel').soundType('netherite_block').hardness(5).resistance(14).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('diamond_plating_block').soundType('metal').hardness(5).resistance(12).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('diamond_plating_stairs', 'stairs').soundType('metal').hardness(5).resistance(12).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('diamond_plating_slab', 'slab').soundType('metal').hardness(5).resistance(12).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('smooth_stone_stairs', 'stairs').soundType('stone').hardness(2).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('smooth_stone_wall', 'wall').soundType('stone').hardness(2).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('lazurite_slab', 'slab').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lazurite_stairs', 'stairs').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lazurite_wall', 'wall').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lapis_slab', 'slab').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lapis_stairs', 'stairs').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lapis_wall', 'wall').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('choral_cap').soundType('wart_block').hardness(1).resistance(1).tagBlock('minecraft:mineable/hoe').item(item => {item.group('building_blocks')})
	event.create('cracked_midori_block').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('cobbled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('chiseled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('chiseled_exolite_tiles').soundType('deepslate_tiles').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('oraclestone').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('oraclestone_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('oraclestone_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('oraclestone_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('celestone').soundType('basalt').hardness(1.25).resistance(4.2).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('feldspar_block').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_feldspar').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_feldspar_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_feldspar_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_feldspar_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('feldspar_bricks').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_brick_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_brick_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('feldspar_brick_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('lachryte').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_slab', 'slab').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_stairs', 'stairs').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_wall', 'wall').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_lachryte').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_lachryte_slab', 'slab').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_lachryte_stairs', 'stairs').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_lachryte_wall', 'wall').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('lachryte_bricks').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_brick_slab', 'slab').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_brick_stairs', 'stairs').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('lachryte_brick_wall', 'wall').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('chiseled_lachryte').soundType('shroomlight').hardness(1.5).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('enigmatic_tile_slab', 'slab').soundType('stone').hardness(8).resistance(600).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('enigmatic_tile_stairs', 'stairs').soundType('stone').hardness(8).resistance(600).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('enigmatic_tile_wall', 'wall').soundType('stone').hardness(8).resistance(600).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_sandstone_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_sandstone_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_sandstone_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_red_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_red_sandstone_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_red_sandstone_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_red_sandstone_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('polished_soul_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_soul_sandstone_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_soul_sandstone_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('polished_soul_sandstone_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('sandstone_tiles').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('sandstone_tile_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('sandstone_tile_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('sandstone_tile_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('red_sandstone_tiles').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('red_sandstone_tile_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('red_sandstone_tile_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('red_sandstone_tile_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('soul_sandstone_tiles').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('soul_sandstone_tile_slab', 'slab').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('soul_sandstone_tile_stairs', 'stairs').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('soul_sandstone_tile_wall', 'wall').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('cracked_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_red_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_soul_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('cracked_layered_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_layered_red_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_layered_soul_sandstone').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('cracked_sandstone_bricks').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_red_sandstone_bricks').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cracked_soul_sandstone_bricks').soundType('stone').hardness(0.8).resistance(0.8).requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('sandstone_pillar').item(item => {item.group('building_blocks')})
    .soundType('stone')
    .hardness(0.8).resistance(0.8)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/sandstone_pillar')
	event.create('red_sandstone_pillar').item(item => {item.group('building_blocks')})
    .soundType('stone')
    .hardness(0.8).resistance(0.8)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/red_sandstone_pillar')
	event.create('soul_sandstone_pillar').item(item => {item.group('building_blocks')})
    .soundType('stone')
    .hardness(0.8).resistance(0.8)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/soul_sandstone_pillar')
	
	event.create('cobbled_blackstone').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).textureAll('minecraft:block/blackstone_top').item(item => {item.group('building_blocks')})
	event.create('cobbled_blackstone_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cobbled_blackstone_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('cobbled_blackstone_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).item(item => {item.group('building_blocks')})
	
	event.create('deepslate_gravel_bricks').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('deepslate_gravel_brick_slab', 'slab').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('deepslate_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('deepslate_gravel_brick_wall', 'wall').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	
	event.create('blackstone_gravel_bricks').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('blackstone_gravel_brick_slab', 'slab').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('blackstone_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	event.create('blackstone_gravel_brick_wall', 'wall').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe').item(item => {item.group('building_blocks')})
	
	event.create('butterscotch_cinnamon_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:butterscotch_cinnamon_pie_slice').item(item => {item.group('food')})
	event.create('prickly_pear_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:prickly_pear_pie_slice').item(item => {item.group('food')})
	event.create('pumpkin_pie', 'farmersdelight:pie').soundType('wool').sliceItem('create_central_kitchen:pumpkin_pie_slice').item(item => {item.group('food')})
	
	event.create('straw_thatch').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('straw_thatch_slab', 'slab').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('straw_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('flax_thatch').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('flax_thatch_slab', 'slab').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('flax_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	event.create('bamboo_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5).item(item => {item.group('building_blocks')})
	
	event.create('cloth_scrap_block').textureAll('kubejs:block/cloth/cloth_scrap_block').soundType('wool').hardness(0.8).resistance(0.8).tagBlock('farmersdelight:mineable/knife').item(item => {item.group('building_blocks')})
	event.create('cloth_scrap_carpet', 'carpet').soundType('wool').hardness(0.1).resistance(0.1).tagBlock('farmersdelight:mineable/knife').item(item => {item.group('decorations')})
	allColours.forEach(colour => {
		event.create(colour+'_cloth_scrap_block').textureAll('kubejs:block/cloth/'+colour+'_cloth_scrap_block').soundType('wool').hardness(0.8).resistance(0.8).tagBlock('farmersdelight:mineable/knife').item(item => {item.group('building_blocks')})
		event.create(colour+'_cloth_scrap_carpet', 'carpet').soundType('wool').hardness(0.1).resistance(0.1).tagBlock('farmersdelight:mineable/knife').item(item => {item.group('decorations')})
		event.create(colour+'_canvas_rug', 'carpet').soundType('wool').hardness(0.2).resistance(0.2).item(item => {item.group('decorations')})
	})
	
	event.create('rubber_block').soundType('wool').hardness(1).resistance(1).bounciness(1).item(item => {item.group('building_blocks')})
	.fallenOn(entity => {
		if (entity.fallHeight > 5 && !entity.isSuppressingBounce()) {
		entity.level.playSound(null, entity.block.x, entity.block.y, entity.block.z, 'sullysmod:block.jade.ricochet', 'players', 1, 0.2)
		}
	})

	event.create('rubber_tire').item(item => {item.group('building_blocks')})
    .soundType('wool')
    .hardness(1).resistance(1).bounciness(1)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/rubber_tire')
	.fallenOn(entity => {
		if (entity.fallHeight > 5 && !entity.isSuppressingBounce()) {
		entity.level.playSound(null, entity.block.x, entity.block.y, entity.block.z, 'sullysmod:block.jade.ricochet', 'players', 1, 0.2)
		}
	})
	
	event.create('chiseled_silt_bricks').soundType('stone').hardness(2).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('chiseled_ash_bricks').soundType('stone').hardness(2).resistance(6).requiresTool(true).item(item => {item.group('building_blocks')})
	event.create('trimmed_ash_bricks').item(item => {item.group('building_blocks')})
    .soundType('stone')
    .hardness(2).resistance(6).requiresTool(true)
    .property(BlockProperties.FACING)
    .placementState(event => event.set(BlockProperties.FACING, event.clickedFace.getOpposite()))
    .model('kubejs:block/trimmed_ash_bricks')
	
	event.create('glance_pillar').item(item => {item.group('building_blocks')})
    .soundType('stone')
    .hardness(1.5).resistance(6).requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('oreganized:block/glance_pillar')
	
	event.create('latex_jungle_log').item(item => {item.group('building_blocks')})
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_jungle_log')
	
	event.create('latex_jungle_wood').item(item => {item.group('building_blocks')})
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_jungle_wood')
	
	event.create('latex_rosewood_log').item(item => {item.group('building_blocks')})
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_rosewood_log')
	
	event.create('latex_rosewood').item(item => {item.group('building_blocks')})
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_rosewood')
	
	event.create('bone_pile').item(item => {item.group('decorations')})
    .soundType('bone_block')
    .hardness(1).resistance(1)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/bone_pile')
	
	event.create('withered_bone_pile').item(item => {item.group('decorations')})
    .soundType('bone_block')
    .hardness(1).resistance(1)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/withered_bone_pile')
	
	event.create('charred_wood').item(item => {item.group('building_blocks')})
    .soundType('netherrack')
    .hardness(3).resistance(3).requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/charred_wood')

	event.create('heating_cask', 'cardinal').item(item => {item.group('decorations')})
	.soundType('wood')
	.hardness(2).resistance(3)
	.steppedOn(event => {
		if (event.entity.isCrouching() || !event.entity.isLiving()) return
		event.entity.attack(DamageSource.HOT_FLOOR, 1)
	})

	event.create('ice_crate').item(item => {item.group('decorations')})
	.soundType('wood')
	.hardness(2).resistance(3)
	.steppedOn(event => {
		let armor = event.entity.getArmorSlots()
		if (event.entity.isLiving()) {
			if (event.entity.ticksFrozen > 160) return
			if (armor[0].hasTag('minecraft:freeze_immune_wearables')) return
			event.entity.ticksFrozen += 4
		}
	})
})