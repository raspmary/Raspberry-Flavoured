// priority: 0

StartupEvents.registry('block', event => {
	event.create('wheat_flour_bag').soundType('wool').hardness(0.8).tagBlock('farmersdelight:mineable/knife')
	
	event.create('lead_ore').soundType('stone').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('nether_lead_ore').soundType('nether_ore').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('dark_chocolate_block').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('chiseled_dark_chocolate_pavement').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_slab', 'slab').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_stairs', 'stairs').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_wall', 'wall').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tiles').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_slab', 'slab').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_stairs', 'stairs').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_wall', 'wall').hardness(2).tagBlock('minecraft:mineable/axe')
	
	event.create('white_chocolate_block').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('chiseled_white_chocolate_pavement').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_slab', 'slab').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_stairs', 'stairs').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_wall', 'wall').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tiles').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_slab', 'slab').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_stairs', 'stairs').hardness(2).tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_wall', 'wall').hardness(2).tagBlock('minecraft:mineable/axe')
	
	event.create('lazurite_slab', 'slab').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lazurite_stairs', 'stairs').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lazurite_wall', 'wall').soundType('calcite').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_slab', 'slab').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_stairs', 'stairs').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('lapis_wall', 'wall').soundType('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('packed_choral_nylium').soundType('wart_block').hardness(1).resistance(1).tagBlock('minecraft:mineable/hoe')
	
	event.create('cobbled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('chiseled_exolite').soundType('netherrack').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('chiseled_exolite_tiles').soundType('deepslate_tiles').hardness(2).resistance(9).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('stuffed_pumpkin_two', 'farmersdelight:feast').servingItems('farmersdelight:stuffed_pumpkin').hasLeftovers(false)
	event.create('eggplant_parmesan_block', 'farmersdelight:feast').servingItems('kubejs:eggplant_parmesan').hasLeftovers(true).box(0, 0, 0, 16, 5, 16, true)
	
	event.create('butterscotch_cinnamon_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:butterscotch_cinnamon_pie_slice').tagBlock('farmersdelight:mineable/knife')
	event.create('prickly_pear_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:prickly_pear_pie_slice').tagBlock('farmersdelight:mineable/knife')
})