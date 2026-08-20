// adds missing conversion tags. script by noodleblitz
// add tags a non-wooden block set by adding an entry to blocksetTypes
// add tags for a wooden block set by adding its plank id to woodtypes and any missing block names to outputTypes
ServerEvents.tags('item', event => {
	function addTag(blockset, count, itemId)
	{	
		// only add tag if item exists
		if (Item.of(itemId) == 'minecraft:air') return

		let counts = [2, 4, 8]
		let countTags = ['_half', '_quarter', '_eighth']
	
		// create and add tag
		let tag = 'raspberry_flavoured:' + blockset
		for (let ii = 0; ii < counts.length; ii++)
		{
			if (count == counts[ii])
			{
				tag += countTags[ii]
				break
			}
		}

		event.get(tag)
			.add(itemId)
	}

	// add tags for items common across blocksets
	function addCommonTags(blockset, mod, blocks, dye)
	{
		if (typeof blocks == 'string') blocks = [blocks]

		blocks.forEach(block => {
			block = block.replace('BLOCK', blockset)
		
			addTag(dye + blockset, 1, mod + dye + block)
			addTag(dye + blockset, 1, mod + dye + block + 's') // bricks, shingles, etc
			addTag(dye + blockset, 1, mod + dye + block + '_stairs')
			addTag(dye + blockset, 2, mod + dye + block + '_slab')
			addTag(dye + blockset, 2, mod + dye + block + '_wall')
			
			addTag(dye + blockset, 1, mod + dye + block + '_pillar')
			addTag(dye + blockset, 1, mod + dye + 'chiseled_' + block)
			addTag(dye + blockset, 1, mod + dye + 'chiseled_' + block + 's')
			addTag(dye + blockset, 1, mod + dye + block + '_plating')
		})
	}

	const dyes = [
		'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
	]

	const coralstones = [
		'bubble', 'horn', 'tube', 'brain', 'fire', 'acan', 'finger', 'star', 'moss', 'petal', 'branch', 'rock', 'pillow', 'silk', 'chrome', 'prismarine', 'elder_prismarine', 'dead'
	]

	// [blockset blocks mod dyed]
	let blocksetTypes = [
		['entwine', 'BLOCK', 'architects_palette:'],
		['esoterrack', ['BLOCK', 'BLOCK_brick'], 'architects_palette:'],
		['shellstone', ['BLOCK', 'cut_BLOCK', 'BLOCK_brick', 'smooth_BLOCK'], 'naturalist:'],
		['silt', ['packed_BLOCK', 'BLOCK_shingle'], 'twigs:', 'dyed'],
		['wardstone', ['BLOCK', 'BLOCK_brick'], 'architects_palette:'],
		['abyssaline', ['BLOCK', 'BLOCK_brick', 'BLOCK_tile'], 'architects_palette:'],
		['snail_shell', ['BLOCK_brick', 'BLOCK_tile'], 'autumnity:'],
		['ice', 'BLOCK', 'minecraft:'], ['ice', 'BLOCK_brick', 'ecologics:'],
		['dirt', 'BLOCK', 'minecraft:'], ['dirt', 'BLOCK_bricks', 'quark:'],
		['packed_ice', ['BLOCK'], 'minecraft:'], ['packed_ice', 'BLOCK_brick', 'windswept:'], ['packed_ice', ['BLOCK', 'polished_BLOCK'], 'architects_palette:'],
		['blue_ice', ['BLOCK'], 'minecraft:'], ['blue_ice', 'BLOCK_brick', 'windswept:'],
		['chocolate', 'BLOCK_bricks', 'create_confectionary:'], ['chocolate', ['BLOCK_brick', 'BLOCK_tile'], 'neapolitan:'],
		['snow', 'BLOCK_block', 'minecraft:'], ['snow', 'BLOCK_brick', 'windswept:'],
		['onyx', ['BLOCK', 'BLOCK_brick'], 'architects_palette:'],
		['flint', ['BLOCK', 'BLOCK_block', 'polished_BLOCK', 'BLOCK_tile'], 'architects_palette:'],
		['scute', ['BLOCK', 'BLOCK_pavement', 'BLOCK_shingle'], 'upgrade_aquatic:'],
		['bone', 'BLOCK_block', 'minecraft:'], ['bone', ['osseous', 'osseous_brick', 'osseous_skull'], 'architects_palette:'],
		['sugilite', ['BLOCK', 'polished_BLOCK'], 'caverns_and_chasms:'],
		['netherrack', 'BLOCK', 'minecraft:'], ['netherrack', 'polished_BLOCK', 'paletteblocks:'], ['netherrack', 'BLOCK_brick', 'quark:'],
		['bloodstone', ['BLOCK', 'polished_BLOCK', 'polished_BLOCK_brick', 'cracked_polished_BLOCK_brick'], 'twigs:'],
		['large_brick', ['adobe_brick', 'cracked_adobe_brick'], 'modestmasonry:'],
		['mossy_large_brick', ['mossy_adobe_brick'], 'modestmasonry:'],
		['moonshale', ['BLOCK', 'BLOCK_brick', 'cracked_BLOCK_brick', 'BLOCK_flagstone'], 'architects_palette:'],
		['plating', ['BLOCK_block', 'BLOCK'], 'architects_palette:'],
		['honeycomb', 'BLOCK_block', 'minecraft:'], ['honeycomb', ['BLOCK_brick', 'BLOCK_tile'], 'buzzier_bees:'],
		['hadaline', ['BLOCK', 'BLOCK_brick', 'BLOCK_tile', 'chiseled_BLOCK_brick'], 'architects_palette:'],
		['tooth', ['BLOCK_tile', 'BLOCK_brick'], 'upgrade_aquatic:'],
		['craterstone', 'BLOCK', 'architects_palette:'],
		['nebulite', ['BLOCK', 'polished_BLOCK'], 'architects_palette:'],
		['algal_brick', ['BLOCK', 'cracked_BLOCK', 'chiseled_BLOCK'], 'architects_palette:'],
		['overgrown_algal_brick', 'BLOCK', 'architects_palette:'],
		['withered_bone', 'BLOCK_block', 'minecraft:'], ['withered_bone', ['withered', 'withered_osseous_brick', 'withered_osseous_skull'], 'architects_palette:'],
		['bronze', ['sunmetal', 'sunmetal_block'], 'architects_palette:'],
		['seashell', ['BLOCK_block', 'BLOCK_tile'], 'ecologics:'],
		['griefer_plate', ['blast_proof_plate', 'blast_proof_tile'], 'savage_and_ravage:'],
		['sanguine_plate', 'BLOCK_plate', 'caverns_and_chasms:'],
		['rusty_iron', 'BLOCK_plate', 'quark:'],
		['gloomy_tile', 'BLOCK', 'savage_and_ravage:'],
		['kelpy_stone', ['kelpy_cobblestone', 'BLOCK_bricks'], 'upgrade_aquatic:'],
		['tread_plate', 'BLOCK', 'architects_palette:'],
		['weeping_polished_blackstone', 'BLOCK_brick', 'twigs:'],
		['twisting_polished_blackstone', 'BLOCK_brick', 'twigs:'],
		['iron_plate', 'BLOCK', 'quark:'],
		['hazard', ['BLOCK', 'BLOCK_block'], 'architects_palette:'],
		['entrails', 'BLOCK', 'architects_palette:'],
		['cement', ['BLOCK', 'polished_BLOCK', 'BLOCK_brick'], 'modestmasonry:']
	]
	
	// add tags
	for (let [blockset, blocks, mod, dyed] of blocksetTypes) {
		addCommonTags(blockset, mod, blocks, '')
		if (dyed) dyes.forEach(dye => { 
			addCommonTags(blockset, mod, blocks, dye + '_')
		})
	}

	// tag each coralstone separately
	let mod = 'upgrade_aquatic:'
	let blockset = 'coralstone'
	let block = 'BLOCK'

	addCommonTags(blockset, mod, block, '')
	coralstones.forEach(type => {
		addCommonTags(type + '_' + blockset, mod, block, '')
	})

	// add wood tags, code in this section largely taken from sawmill_compat.js
	// number names mods
	// number is the amount that 1 log makes, names and mods prioritize search from left to right
	let outputTypes = [
		[4, "WOOD_planks", ["MOD:"]],
  		[4,"WOOD_trapdoor",["MOD:"]],
  		[4,"WOOD_door",["MOD:"]],
  		[4,["WOOD_stairs","WOOD_planks_stairs"],["MOD:"]],
  		[8,["WOOD_slab","WOOD_planks_slab"],["MOD:"]],
  		[4,"WOOD_sign",["MOD:"]],
  		[3,"WOOD_post",["quark:","MOD:","everycomp:q/MOD/"]],
  		[8,"WOOD_fence",["MOD:"]],
  		[8,"WOOD_railing",["architects_palette:","everycomp:ap/MOD/"]],
  		[4, "WOOD_ladder",["MOD:","everycomp:q/MOD/","quark:"]],
    	[4,"WOOD_boards",["woodworks:","everycomp:abnww/MOD/", "MOD:"]],

  		[4,"WOOD_fence_gate",["MOD:"]],
  		[1,"WOOD_boat",["MOD:","boatload:"]],
  		[8,"sign_post_WOOD",["supplementaries:","supplementaries:MOD/"]],
  		[1,"hollow_WOOD_log",["everycomp:q/MOD/","quark:"]],
  		[1,"WOOD_cabinet",["everycomp:fd/MOD/","farmersdelight:","MOD:","abnormals_delight:"]],

		[4, "WOOD_boards", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[4, "WOOD_board_stairs", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[8, "WOOD_board_slab", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[8, "WOOD_board_wall", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[4, "WOOD_pillar", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[4, "WOOD_tiles", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[4, "WOOD_tile_stairs", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[8, "WOOD_tile_slab", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[8, "WOOD_tile_wall", ["modestmasonry:", "everycomp:mm/MOD/"]],
		[4, "WOOD_trim", ["hnh:", "everycomp:hnh/MOD/"]],
		[4,"carved_WOOD_planks",["modestmasonry:","everycomp:mm/MOD/"]],
		[4,"WOOD_carved_plank_stairs",["modestmasonry:","everycomp:mm/MOD/"]],
		[8,"WOOD_carved_plank_slab",["modestmasonry:","everycomp:mm/MOD/"]],
		[8,"WOOD_carved_plank_wall",["modestmasonry:","everycomp:mm/MOD/"]],

  
  		[1,"WOOD_drawer",["another_furniture:","everycomp:af/MOD/"]],
  		[2,"WOOD_table",["another_furniture:","everycomp:af/MOD/"]],
  		[4,"WOOD_shutter",["another_furniture:","everycomp:af/MOD/"]],
  		[4,"WOOD_shelf",["another_furniture:","everycomp:af/MOD/"]],
  		[4,"WOOD_chair",["another_furniture:","everycomp:af/MOD/"]],
  		[2,"WOOD_bench",["another_furniture:","everycomp:af/MOD/"]]
	]

	for(let recipe of outputTypes){
  		if(typeof recipe[1] == "string") recipe[1] = [recipe[1]]
	}

	let woodtypes = [
	'minecraft:oak_planks', 
	'minecraft:spruce_planks', 
	'minecraft:jungle_planks', 
	'minecraft:birch_planks', 
	'minecraft:acacia_planks', 
	'minecraft:dark_oak_planks', 
	'minecraft:mangrove_planks', 
	'minecraft:crimson_planks', 
	'minecraft:warped_planks', 
	'windswept:chestnut_planks', 
	'ecologics:coconut_planks', 
	'ecologics:azalea_planks', 
	'architects_palette:twisted_planks', 
	'environmental:willow_planks', 
	'environmental:cherry_planks', 
	'environmental:wisteria_planks', 
	'upgrade_aquatic:driftwood_planks', 
	'autumnity:maple_planks', 
	'atmospheric:rosewood_planks', 
	'atmospheric:morado_planks',
	'atmospheric:yucca_planks', 
	'atmospheric:grimwood_planks', 
	'quark:bamboo_planks', 
	'mynethersdelight:powdery_planks'
	]

	woodtypes = woodtypes.map(i=>{
  		let [mod,plankId] = i.split(":")
  		//chop out the name of the wood from the planks using a lookahead. i'm not explaining all of regex here.
  		return [mod,plankId.match(/.+(?=_planks)/)]
	})
	
	// do oak ladders separately bc they don't have oak in the name
	addTag('oak',4,'minecraft:ladder')

	// choral panel set is river panels in disguise
	addTag('twisted', 4, 'everycomp:mm/upgrade_aquatic/river_boards')
	addTag('twisted', 4, 'everycomp:mm/upgrade_aquatic/river_board_stairs')
	addTag('twisted', 8, 'everycomp:mm/upgrade_aquatic/river_board_slab')
	addTag('twisted', 8, 'everycomp:mm/upgrade_aquatic/river_board_wall')
  
  	// fine wood
	addTag('fine_wood',1,"raspberry:fine_wood")
  	addTag('fine_wood',1,"raspberry:fine_wood_stairs")
  	addTag('fine_wood',2,"raspberry:fine_wood_slab")
  	addTag('fine_wood',2,"raspberry:fine_wood_wall")

	woodtypes.forEach(([originMod,woodType])=>{
    		for(let [outputCount,outputs,mods,incomplete] of outputTypes){
      			let inputItem
      			let isStem
  
        		let logItem = Ingredient.of(`#${originMod}:${woodType}_logs`)
        		if(logItem.itemIds.length == 0){
          			logItem = Ingredient.of(`#${originMod}:${woodType}_stems`)
          			isStem = true;
        		}

			// tag logs in order to unify EMI pages
			if (isStem)
			{
				event.get('raspberry_flavoured:' + woodType)
					.add(`#${originMod}:${woodType}_stems`)
			}
			else
			{
				event.get('raspberry_flavoured:' + woodType)
					.add(`#${originMod}:${woodType}_logs`)
			}
      	  
      			let result;
			let id;

      			for(let mod of mods){
        			for(let output of outputs){
          				id = mod.replace("MOD",originMod)+output.replace("WOOD",woodType).replace("log",isStem?"stem":"log")

          				result = Item.of(id)
          				if(result.id != "minecraft:air") break
        			}
        			if(result.id != "minecraft:air") break
      			}
			          
			addTag(woodType,outputCount,result.id)
		}
  	})
})