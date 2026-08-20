// priority: 0

ServerEvents.recipes(event => {
	event.stonecutting('4x iron_bars', 'iron_ingot').id('minecraft:iron_bars')
	event.stonecutting('4x caverns_and_chasms:copper_bars', 'copper_ingot')
	event.stonecutting('4x alloyed:steel_bars', 'alloyed:steel_ingot').id('alloyed:crafting/steel_bars')
	event.stonecutting('4x architects_palette:entwine_bars', 'architects_palette:entwine_rod').id('architects_palette:entwine_bars')
	event.stonecutting('4x architects_palette:sunmetal_bars', 'alloyed:bronze_ingot').id('architects_palette:sunmetal_bars')
	event.stonecutting('4x caverns_and_chasms:silver_bars', 'oreganized:silver_ingot').id('caverns_and_chasms:silver_bars')
	event.stonecutting('4x caverns_and_chasms:golden_bars', 'oreganized:lead_ingot').id('caverns_and_chasms:golden_bars')
	event.stonecutting('kubejs:chiseled_silt_bricks', 'twigs:silt_bricks')
	event.stonecutting('kubejs:chiseled_ash_bricks', 'supplementaries:ash_bricks')
	event.stonecutting('kubejs:trimmed_ash_bricks', 'supplementaries:ash_bricks')
	
	event.stonecutting('carved_pumpkin', 'pumpkin')
	event.stonecutting('autumnity:carved_large_pumpkin_slice', 'pumpkin')
	event.stonecutting('carved_pumpkin', 'autumnity:large_pumpkin_slice')
	event.stonecutting('autumnity:carved_large_pumpkin_slice', 'autumnity:large_pumpkin_slice')
	event.stonecutting('autumnity:carved_large_pumpkin_slice', 'carved_pumpkin')
	event.stonecutting('carved_pumpkin', 'autumnity:carved_large_pumpkin_slice')
	
	// Clear glass
	Ingredient.of('#forge:glass').itemIds.forEach(id => {
		if (id === 'minecraft:tinted_glass') return
		event.stonecutting('3x ' + id + '_pane', id)
    })
	
	// Clear glass
	Ingredient.of('#raspberry_flavoured:clear_glass').itemIds.forEach(id => {
		event.stonecutting(id, '#raspberry_flavoured:clear_glass')
    })
	Ingredient.of('#raspberry_flavoured:clear_glass_pane').itemIds.forEach(id => {
		event.stonecutting(id, '#raspberry_flavoured:clear_glass_pane')
    })
	
	// Copycats
	Ingredient.of('#raspberry_flavoured:copycat').itemIds.forEach(id => {
		event.remove({input: id, type: 'minecraft:stonecutting'})
		event.remove({output: id, type: 'minecraft:stonecutting'})
		event.stonecutting('2x ' + id, '#forge:ingots/zinc')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:copycat')
    })
	Ingredient.of('#raspberry_flavoured:copycat_half').itemIds.forEach(id => {
		event.remove({input: id, type: 'minecraft:stonecutting'})
		event.remove({output: id, type: 'minecraft:stonecutting'})
		event.stonecutting('4x ' + id, '#forge:ingots/zinc')
		event.stonecutting('2x ' + id, '#raspberry_flavoured:copycat')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:copycat_half')
    })
	Ingredient.of('#raspberry_flavoured:copycat_quarter').itemIds.forEach(id => {
		event.remove({input: id, type: 'minecraft:stonecutting'})
		event.remove({output: id, type: 'minecraft:stonecutting'})
		event.stonecutting('8x ' + id, '#forge:ingots/zinc')
		event.stonecutting('4x ' + id, '#raspberry_flavoured:copycat')
		event.stonecutting('2x ' + id, '#raspberry_flavoured:copycat_half')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:copycat_quarter')
    })
	
	// Sand -> Sandstone
	Ingredient.of('#raspberry_flavoured:sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, '#forge:sand/colorless')
    })
	Ingredient.of('#raspberry_flavoured:sandstone_half').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, '#forge:sand/colorless')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, '#forge:sand/red')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone_half').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, '#forge:sand/red')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'soul_sand')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone_half').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'soul_sand')
    })
})