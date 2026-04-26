// priority: 1

// adds stonecutter recipes for blocksets covered by more_conversion_tags.js and removes some redundant/unobtainable recipes. script by noodleblitz
ServerEvents.recipes(event => {
	// retrieve wood types
	let woodtypes = ['minecraft:oak_planks', 'minecraft:spruce_planks', 'minecraft:jungle_planks', 'minecraft:birch_planks', 'minecraft:acacia_planks', 'minecraft:dark_oak_planks', 'minecraft:mangrove_planks', 'minecraft:crimson_planks', 'minecraft:warped_planks', 'windswept:chestnut_planks', 'ecologics:coconut_planks', 'ecologics:azalea_planks', 'architects_palette:twisted_planks', 'environmental:willow_planks', 'environmental:cherry_planks', 'environmental:wisteria_planks', 'upgrade_aquatic:driftwood_planks', 'autumnity:maple_planks', 'atmospheric:rosewood_planks', 'atmospheric:morado_planks', 'atmospheric:yucca_planks', 'atmospheric:grimwood_planks', 'quark:bamboo_planks', 'mynethersdelight:powdery_planks']
	
	woodtypes = woodtypes.map(i=>{
  		let [mod,plankId] = i.split(":")
  		return [mod,plankId.match(/.+(?=_planks)/)]
	})

	function addWoodRecipes(woodType, woodTag)
	{
		let prefix = '#raspberry_flavoured:' + woodType + '_'

		let woodIds = Ingredient.of([woodTag, '#raspberry_flavoured:' + woodType]).itemIds
		let barkedIds = Ingredient.of('#raspberry_flavoured:barked_logs').itemIds
		
		// do not add recipes that output unstripped logs/wood
		outer: for (let id of woodIds) {
			for (let testId of barkedIds) {
				if (id == testId)
				{
					continue outer
				}
			}

			event.stonecutting('1x ' + id, '#raspberry_flavoured:' + woodType)
		}

		let halfTag = prefix + 'half'
		Ingredient.of([halfTag, halfTag + '_output']).itemIds.forEach(id => {
			event.stonecutting('2x ' + id, woodTag)
		})

		let quarterTag = prefix + 'quarter'
		Ingredient.of([quarterTag, quarterTag + '_output']).itemIds.forEach(id => {
			event.stonecutting('4x ' + id, woodTag)
			event.stonecutting('2x ' + id, halfTag)
			event.stonecutting('1x ' + id, quarterTag)
		})

		let eighthTag = prefix + 'eighth'
		Ingredient.of([eighthTag, eighthTag + '_output']).itemIds.forEach(id => {
			event.stonecutting('8x ' + id, woodTag)
			event.stonecutting('4x ' + id, halfTag)
			event.stonecutting('2x ' + id, quarterTag)
			event.stonecutting('1x ' + id, eighthTag)
		})
	}

	woodtypes.forEach(([originMod,woodType])=>{
		let woodTag = `#${originMod}:${woodType}_logs`
		let logItem = Ingredient.of(woodTag)
		let unstrippedLogId = `${originMod}:${woodType}_log`
		let unstrippedWoodId = `${originMod}:${woodType}_wood`
		

        if(logItem.itemIds.length == 0){
          	woodTag = `#${originMod}:${woodType}_stems`
        }

		if (woodType == 'warped' || woodType == 'crimson'){
			unstrippedLogId = `${originMod}:${woodType}_stem`;
			unstrippedWoodId = `${originMod}:${woodType}_hyphae`;
		}

		if (woodType == 'driftwood' || woodType == 'grimwood' || woodType == 'rosewood'){
			unstrippedWoodId = `${originMod}:${woodType}`
		}

		console.log(unstrippedLogId)
		console.log(unstrippedWoodId)
		console.log(woodTag)
		
		// add one-to-one conversions between unstripped logs and unstripped wood
		if (woodType != 'bamboo' && woodType != 'powdery'){
			event.stonecutting('1x ' + unstrippedLogId, unstrippedWoodId)
			event.stonecutting('1x ' + unstrippedWoodId, unstrippedLogId)
		}
		addWoodRecipes(woodType, woodTag)
	})

	const removedRecipes = [
		'atmospheric:ivory_travertine',
		'atmospheric:peach_travertine',
		'atmospheric:persimmon_travertine',
		'atmospheric:cut_saffron_travertine',
		'atmospheric:cut_peach_travertine',
		'upgrade_aquatic:tongue_kelpy_cobblestone',
		'upgrade_aquatic:polar_kelpy_cobblestone',
		'upgrade_aquatic:ochre_kelpy_cobblestone',
		'upgrade_aquatic:ochre_kelpy_cobblestone',
		'upgrade_aquatic:thorny_kelpy_cobblestone',
		'upgrade_aquatic:polar_kelpy_stone_bricks',
		'upgrade_aquatic:thorny_kelpy_stone_bricks',
		'upgrade_aquatic:ochre_kelpy_stone_bricks',
		'upgrade_aquatic:tongue_kelpy_stone_bricks',
		'quark:shale_bricks',
		'quark:jasper_bricks',
		'quark:limestone_bricks',
		'quark:cobblestone_bricks',
		'quark:mossy_cobblestone_bricks'
	]
	
	// including all the block tags again so redundant wall recipes can be removed. to merge this script and stonecutter_compat.js, copy over the new tags into blocktags (from marked breakpoint)
	// and copy line that removes the wall recipes
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
	'#raspberry_flavoured:crying_obsidian',
	'#raspberry_flavoured:lachryte',
	'#raspberry_flavoured:exolite',
	'#raspberry_flavoured:glowstone',
	'#raspberry_flavoured:entwine',
	'#raspberry_flavoured:asurine',
	'#raspberry_flavoured:crimsite',
	'#raspberry_flavoured:limestone',
	'#raspberry_flavoured:ochrum',
	'#raspberry_flavoured:scoria',
	'#raspberry_flavoured:scorchia',
	'#raspberry_flavoured:veridium',
	'#raspberry_flavoured:esoterrack',
	'#raspberry_flavoured:silt',
	'#raspberry_flavoured:white_silt',
	'#raspberry_flavoured:orange_silt',
	'#raspberry_flavoured:magenta_silt',
	'#raspberry_flavoured:light_blue_silt',
	'#raspberry_flavoured:yellow_silt',
	'#raspberry_flavoured:lime_silt',
	'#raspberry_flavoured:pink_silt',
	'#raspberry_flavoured:gray_silt',
	'#raspberry_flavoured:light_gray_silt',
	'#raspberry_flavoured:cyan_silt',
	'#raspberry_flavoured:purple_silt',
	'#raspberry_flavoured:blue_silt',
	'#raspberry_flavoured:brown_silt',
	'#raspberry_flavoured:green_silt',
	'#raspberry_flavoured:red_silt',
	'#raspberry_flavoured:black_silt',
	'#raspberry_flavoured:shellstone',
	'#raspberry_flavoured:wardstone',
	'#raspberry_flavoured:abyssaline',
	'#raspberry_flavoured:coralstone',
	'#raspberry_flavoured:bubble_coralstone',
	'#raspberry_flavoured:horn_coralstone',
	'#raspberry_flavoured:tube_coralstone',
	'#raspberry_flavoured:brain_coralstone',
	'#raspberry_flavoured:fire_coralstone',
	'#raspberry_flavoured:acan_coralstone',
	'#raspberry_flavoured:finger_coralstone',
	'#raspberry_flavoured:star_coralstone',
	'#raspberry_flavoured:moss_coralstone',
	'#raspberry_flavoured:petal_coralstone',
	'#raspberry_flavoured:branch_coralstone',
	'#raspberry_flavoured:rock_coralstone',
	'#raspberry_flavoured:pillow_coralstone',
	'#raspberry_flavoured:silk_coralstone',
	'#raspberry_flavoured:chrome_coralstone',
	'#raspberry_flavoured:prismarine_coralstone',
	'#raspberry_flavoured:elder_prismarine_coralstone',
	'#raspberry_flavoured:dead_coralstone',
	'#raspberry_flavoured:snail_shell',
	'#raspberry_flavoured:dirt',
	'#raspberry_flavoured:ice',
	'#raspberry_flavoured:chocolate',
	'#raspberry_flavoured:snow',
	'#raspberry_flavoured:onyx',
	'#raspberry_flavoured:flint',
	'#raspberry_flavoured:scute',
	'#raspberry_flavoured:blue_ice',
	'#raspberry_flavoured:bone',
	'#raspberry_flavoured:packed_ice',
	'#raspberry_flavoured:sugilite',
	'#raspberry_flavoured:netherrack',
	'#raspberry_flavoured:bloodstone',
	'#raspberry_flavoured:adobe_brick',
	'#raspberry_flavoured:mossy_adobe_brick',
	'#raspberry_flavoured:moonshale',
	'#raspberry_flavoured:plating',
	'#raspberry_flavoured:honeycomb',
	'#raspberry_flavoured:hadaline',
	'#raspberry_flavoured:tooth',
	'#raspberry_flavoured:craterstone',
	'#raspberry_flavoured:nebulite',
	'#raspberry_flavoured:algal_brick',
	'#raspberry_flavoured:overgrown_algal_brick',
	'#raspberry_flavoured:withered_bone',
	'#raspberry_flavoured:bronze',
	'#raspberry_flavoured:seashell',
	'#raspberry_flavoured:griefer_plate',
	'#raspberry_flavoured:sanguine_plate',
	'#raspberry_flavoured:rusty_iron',
	'#raspberry_flavoured:gloomy_tile',
	'#raspberry_flavoured:kelpy_stone',
	'#raspberry_flavoured:tread_plate',
	'#raspberry_flavoured:weeping_polished_blackstone',
	'#raspberry_flavoured:twisting_polished_blackstone',
	'#raspberry_flavoured:iron_plate'
	]

   	removedRecipes.forEach(recipe => {
		event.remove({input: recipe, type: 'minecraft:stonecutting'})
		event.remove({output: recipe, type: 'minecraft:stonecutting'})
    })
    
    blockTags.forEach(tag => {
		event.remove({input: tag, type: 'minecraft:stonecutting'})
		event.remove({output: tag, type: 'minecraft:stonecutting'})
		event.remove({input: tag + '_half', type: 'minecraft:stonecutting'})
		event.remove({output: tag + '_half', type: 'minecraft:stonecutting'})
		Ingredient.of(tag).itemIds.forEach(id => {
			event.remove({input: id, output: '#minecraft:walls', type: 'minecraft:stonecutting'}) 
			event.stonecutting('1x ' + id, tag)
		})
		Ingredient.of(tag + '_half').itemIds.forEach(id => {
			event.stonecutting('2x ' + id, tag)
			event.stonecutting('1x ' + id, tag + '_half')
		})
    })	
})