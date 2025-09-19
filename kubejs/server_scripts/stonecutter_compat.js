// priority: 0

ServerEvents.recipes(event => {
// Remove existing recipes
    const removedRecipes = [
	'#create:stone_types/deepslate',
	'#create:stone_types/granite',
	'#create:stone_types/diorite',
	'#create:stone_types/andesite',
	'#create:stone_types/calcite',
	'#create:stone_types/tuff',
	'#create:stone_types/dripstone'
	]
	
    const blockTags = [
	'#raspberry_flavoured:stone',
	'#raspberry_flavoured:deepslate',
	'#raspberry_flavoured:granite',
	'#raspberry_flavoured:diorite',
	'#raspberry_flavoured:andesite',
	'#raspberry_flavoured:calcite',
	'#raspberry_flavoured:tuff',
	'#raspberry_flavoured:dripstone',
	'#raspberry_flavoured:quartz',
	'#raspberry_flavoured:basalt',
	'#raspberry_flavoured:blackstone',
	'#raspberry_flavoured:glance',
	'#raspberry_flavoured:copper',
	'#raspberry_flavoured:exposed_copper',
	'#raspberry_flavoured:weathered_copper',
	'#raspberry_flavoured:oxidized_copper',
	'#raspberry_flavoured:waxed_copper',
	'#raspberry_flavoured:waxed_exposed_copper',
	'#raspberry_flavoured:waxed_weathered_copper',
	'#raspberry_flavoured:waxed_oxidized_copper',
	'#raspberry_flavoured:lapis',
	'#raspberry_flavoured:gravel',
	'#raspberry_flavoured:deepslate_gravel',
	'#raspberry_flavoured:blackstone_gravel',
	'#raspberry_flavoured:sandstone',
	'#raspberry_flavoured:red_sandstone',
	'#raspberry_flavoured:soul_sandstone',
	'#raspberry_flavoured:arid_sandstone',
	'#raspberry_flavoured:red_arid_sandstone',
	'#raspberry_flavoured:gilded_sandstone',
	'#raspberry_flavoured:amethyst',
	'#raspberry_flavoured:mossy_stone',
	'#raspberry_flavoured:purpur',
	'#raspberry_flavoured:midori',
	'#raspberry_flavoured:duskbound',
	'#raspberry_flavoured:brick',
	'#raspberry_flavoured:silt_brick',
	'#raspberry_flavoured:ash_brick',
	'#raspberry_flavoured:mossy_brick',
	'#raspberry_flavoured:nether_brick',
	'#raspberry_flavoured:red_nether_brick',
	'#raspberry_flavoured:blue_nether_brick',
	'#raspberry_flavoured:mud',
	'#raspberry_flavoured:prismarine',
	'#raspberry_flavoured:dark_prismarine',
	'#raspberry_flavoured:luminous_prismarine',
	'#raspberry_flavoured:rock_salt',
	'#raspberry_flavoured:white_concrete',
	'#raspberry_flavoured:orange_concrete',
	'#raspberry_flavoured:magenta_concrete',
	'#raspberry_flavoured:light_blue_concrete',
	'#raspberry_flavoured:yellow_concrete',
	'#raspberry_flavoured:lime_concrete',
	'#raspberry_flavoured:pink_concrete',
	'#raspberry_flavoured:gray_concrete',
	'#raspberry_flavoured:light_gray_concrete',
	'#raspberry_flavoured:cyan_concrete',
	'#raspberry_flavoured:purple_concrete',
	'#raspberry_flavoured:blue_concrete',
	'#raspberry_flavoured:brown_concrete',
	'#raspberry_flavoured:green_concrete',
	'#raspberry_flavoured:red_concrete',
	'#raspberry_flavoured:black_concrete',
	'#raspberry_flavoured:terracotta',
	'#raspberry_flavoured:white_terracotta',
	'#raspberry_flavoured:orange_terracotta',
	'#raspberry_flavoured:magenta_terracotta',
	'#raspberry_flavoured:light_blue_terracotta',
	'#raspberry_flavoured:yellow_terracotta',
	'#raspberry_flavoured:lime_terracotta',
	'#raspberry_flavoured:pink_terracotta',
	'#raspberry_flavoured:gray_terracotta',
	'#raspberry_flavoured:light_gray_terracotta',
	'#raspberry_flavoured:cyan_terracotta',
	'#raspberry_flavoured:purple_terracotta',
	'#raspberry_flavoured:blue_terracotta',
	'#raspberry_flavoured:brown_terracotta',
	'#raspberry_flavoured:green_terracotta',
	'#raspberry_flavoured:red_terracotta',
	'#raspberry_flavoured:black_terracotta',
	'#raspberry_flavoured:steel',
	'#raspberry_flavoured:obsidian',
	'#raspberry_flavoured:crying_obsidian'
	]
    
    removedRecipes.forEach(recipe => {
		event.remove({input: recipe, type: 'minecraft:stonecutting'})
		event.remove({output: recipe, type: 'minecraft:stonecutting'})
    })
    
    blockTags.forEach(tag => {
		event.remove({input: tag, type: 'minecraft:stonecutting'})
		event.remove({output: tag, type: 'minecraft:stonecutting'})
		event.remove({input: tag + '_slab', type: 'minecraft:stonecutting'})
		event.remove({output: tag + '_slab', type: 'minecraft:stonecutting'})
		Ingredient.of(tag).itemIds.forEach(id => {
			event.stonecutting('1x ' + id, tag)
		})
		Ingredient.of(tag + '_slab').itemIds.forEach(id => {
			event.stonecutting('2x ' + id, tag)
			event.stonecutting('1x ' + id, tag + '_slab')
		})
    })	
	
	// Copycats
	Ingredient.of('#raspberry_flavoured:copycats').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, '#raspberry_flavoured:copycats')
    })
	Ingredient.of('#raspberry_flavoured:half_copycats').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, '#raspberry_flavoured:copycats')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:half_copycats')
    })
	Ingredient.of('#raspberry_flavoured:quarter_copycats').itemIds.forEach(id => {
		event.stonecutting('4x ' + id, '#raspberry_flavoured:copycats')
		event.stonecutting('2x ' + id, '#raspberry_flavoured:half_copycats')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:quarter_copycats')
    })
	
	// Sand -> Sandstone
	Ingredient.of('#raspberry_flavoured:sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'sand')
    })
	Ingredient.of('#raspberry_flavoured:sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'sand')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'red_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'red_sand')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'soul_sand')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'soul_sand')
    })
	Ingredient.of('#raspberry_flavoured:arid_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'atmospheric:arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:arid_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'atmospheric:arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_arid_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'atmospheric:red_arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_arid_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'atmospheric:red_arid_sand')
    })
})