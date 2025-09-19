// priority: 0

StartupEvents.registry('block', event => {
	const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

	event.create('wheat_flour_bag').soundType('wool').hardness(0.8).resistance(0.8)
	event.create('cinder_flour_bag').soundType('wool').hardness(0.8).resistance(0.8)
	event.create('corn_flour_bag').soundType('wool').hardness(0.8).resistance(0.8)
	event.create('cinnamon_bag').soundType('wool').hardness(0.8).resistance(0.8)
	event.create('oat_bag').soundType('wool').hardness(0.8).resistance(0.8)
	
	event.create('paper_block').soundType('wool').hardness(0.1).resistance(0.1)
	
	event.create('lead_ore').soundType('stone').hardness(3).resistance(1200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('nether_lead_ore').soundType('nether_ore').hardness(3).resistance(1200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('deposit').soundType('stone').hardness(3).resistance(3).requiresTool(true)
	event.create('deepslate_deposit').soundType('deepslate').hardness(4.5).resistance(4.5).requiresTool(true)
	event.create('blackstone_deposit').soundType('stone').hardness(3).resistance(6).requiresTool(true)
	
	event.create('bronze_block').soundType('copper').hardness(3).resistance(6).requiresTool(true)
	event.create('rose_gold_block').soundType('metal').hardness(3).resistance(6).requiresTool(true)
	
	event.create('polished_steel').soundType('netherite_block').hardness(5).resistance(14).requiresTool(true)
	
	event.create('smooth_stone_stairs', 'stairs').soundType('stone').hardness(2).resistance(6).requiresTool(true)
	event.create('smooth_stone_wall', 'wall').soundType('stone').hardness(2).resistance(6).requiresTool(true)
	
	event.create('lazurite_slab', 'slab').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lazurite_stairs', 'stairs').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lazurite_wall', 'wall').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_slab', 'slab').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_stairs', 'stairs').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_wall', 'wall').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('choral_cap').soundType('wart_block').hardness(1).resistance(1).tagBlock('minecraft:mineable/hoe')
	event.create('cracked_midori_block').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('cobbled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('chiseled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('chiseled_exolite_tiles').soundType('deepslate_tiles').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('eggplant_parmesan_block', 'farmersdelight:feast').servingItems('kubejs:eggplant_parmesan').hasLeftovers(true).box(0, 0, 0, 16, 5, 16, true)
	
	event.create('butterscotch_cinnamon_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:butterscotch_cinnamon_pie_slice')
	event.create('prickly_pear_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:prickly_pear_pie_slice')
	event.create('pumpkin_pie', 'farmersdelight:pie').soundType('wool').sliceItem('create_central_kitchen:pumpkin_pie_slice')
	
	event.create('straw_thatch').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('straw_thatch_slab', 'slab').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('straw_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('flax_thatch').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('flax_thatch_slab', 'slab').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('flax_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5)
	event.create('bamboo_thatch_stairs', 'stairs').soundType('wool').hardness(0.5).resistance(0.5)
	
	event.create('cloth_scrap_block').textureAll('kubejs:block/cloth/cloth_scrap_block').soundType('wool').hardness(0.8).resistance(0.8).tagBlock('farmersdelight:mineable/knife')
	event.create('cloth_scrap_carpet', 'carpet').soundType('wool').hardness(0.1).resistance(0.1).tagBlock('farmersdelight:mineable/knife')
	allColours.forEach(colour => {
		event.create(colour+'_cloth_scrap_block').textureAll('kubejs:block/cloth/'+colour+'_cloth_scrap_block').soundType('wool').hardness(0.8).resistance(0.8).tagBlock('farmersdelight:mineable/knife')
		event.create(colour+'_cloth_scrap_carpet', 'carpet').soundType('wool').hardness(0.1).resistance(0.1).tagBlock('farmersdelight:mineable/knife')
		event.create(colour+'_canvas_rug', 'carpet').soundType('wool').hardness(0.2).resistance(0.2)
	})
	
	event.create('rubber_block').soundType('wool').hardness(1).resistance(1).bounciness(1)
	.fallenOn(entity => {
		if (entity.fallHeight > 5 && !entity.isSuppressingBounce()) {
		entity.level.playSound(null, entity.block.x, entity.block.y, entity.block.z, 'sullysmod:block.jade.ricochet', 'players', 1, 0.2)
		}
	})

	event.create('rubber_tire')
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
	
	event.create('chiseled_silt_bricks').soundType('stone').hardness(2).resistance(6).requiresTool(true)
	event.create('chiseled_ash_bricks').soundType('stone').hardness(2).resistance(6).requiresTool(true)
	event.create('trimmed_ash_bricks')
    .soundType('stone')
    .hardness(2).resistance(6).requiresTool(true)
    .property(BlockProperties.FACING)
    .placementState(event => event.set(BlockProperties.FACING, event.clickedFace.getOpposite()))
    .model('kubejs:block/trimmed_ash_bricks')
	
	event.create('glance_pillar')
    .soundType('stone')
    .hardness(1.5).resistance(6).requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('oreganized:block/glance_pillar')
	
	event.create('latex_jungle_log')
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_jungle_log')
	
	event.create('latex_jungle_wood')
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_jungle_wood')
	
	event.create('latex_rosewood_log')
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_rosewood_log')
	
	event.create('latex_rosewood')
    .soundType('wood')
    .hardness(2).resistance(2)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/latex_rosewood')
	
//	event.create('stove', 'cardinal')
//  .soundType('nether_bricks')
//  .hardness(2).resistance(6)
//  .model('farmersdelight:block/stove')
	
//	event.create('nether_stove', 'cardinal')
// .soundType('nether_bricks')
//  .hardness(2).resistance(6)
//  .model('mynethersdelight:block/nether_stove')

	event.create('heating_cask', 'cardinal')
	.soundType('wood')
	.hardness(2).resistance(3)
	.steppedOn(event => {
		if (event.entity.isCrouching()) return
		event.entity.attack(DamageSource.HOT_FLOOR, 1)
	})

	event.create('ice_crate')
	.soundType('wood')
	.hardness(2).resistance(3)
	.steppedOn(event => {
		let armor = event.entity.getArmorSlots()
		if (event.entity.ticksFrozen > 160) return
		if (armor[0].hasTag('minecraft:freeze_immune_wearables')) return
		event.entity.ticksFrozen += 4
	})
	
	event.create('cobbled_blackstone').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).textureAll('minecraft:block/blackstone_top')
	event.create('cobbled_blackstone_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('cobbled_blackstone_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('cobbled_blackstone_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('deepslate_gravel_bricks').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_slab', 'slab').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_wall', 'wall').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	
	event.create('blackstone_gravel_bricks').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_slab', 'slab').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_wall', 'wall').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
})