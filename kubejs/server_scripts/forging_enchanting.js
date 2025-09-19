// priority: 0

ServerEvents.recipes(event => {
// Special weapons
	function modifyingWeapon(material, catalystItem, resultItem) {
	event.custom({type: 'modestmining:forging_shaped', cooktime: 300, 
	pattern: [' CB', 'DAD', 'BC '],
	key: {A: {item: catalystItem}, B: {item: material}, C: {item: 'architects_palette:withered_bone'}, D: {item: 'create:polished_rose_quartz'}}, 
	result: {item: resultItem}})
	}
	modifyingWeapon('minecraft:netherite_ingot', 'minecraft:netherite_axe', 'clash:swept_axe')
	modifyingWeapon('oreganized:electrum_ingot', 'oreganized:electrum_sword', 'clash:spear')
	modifyingWeapon('caverns_and_chasms:necromium_ingot', 'abnormals_delight:necromium_knife', 'clash:greatblade')
	modifyingWeapon('alloyed:steel_ingot', 'alloyed:steel_axe', 'mace_backport:mace')
	modifyingWeapon('additionaladditions:rose_gold_alloy', 'additionaladditions:rose_gold_sword', 'kubejs:rose_gold_rapier')
	// Rose gold rapier
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:rose_gold_rapier'),
	],'additionaladditions:rose_gold_sword',[
		event.recipes.createDeploying('kubejs:incomplete_rose_gold_rapier',['kubejs:incomplete_rose_gold_rapier', 'additionaladditions:rose_gold_alloy']),
		event.recipes.createDeploying('kubejs:incomplete_rose_gold_rapier',['kubejs:incomplete_rose_gold_rapier', '#forge:gems/quartz']),
		event.recipes.createDeploying('kubejs:incomplete_rose_gold_rapier',['kubejs:incomplete_rose_gold_rapier', 'architects_palette:withered_bone']),
		event.recipes.createPressing('kubejs:incomplete_rose_gold_rapier',['kubejs:incomplete_rose_gold_rapier'])
	]).transitionalItem('kubejs:incomplete_rose_gold_rapier').loops(2).id('kubejs:assembly/rose_gold_rapier')
	// Steel mace
	event.recipes.createSequencedAssembly([
		Item.of('mace_backport:mace'),
	],'alloyed:steel_axe',[
		event.recipes.createDeploying('kubejs:incomplete_steel_mace',['kubejs:incomplete_steel_mace', 'alloyed:steel_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_steel_mace',['kubejs:incomplete_steel_mace', '#forge:gems/quartz']),
		event.recipes.createDeploying('kubejs:incomplete_steel_mace',['kubejs:incomplete_steel_mace', 'architects_palette:withered_bone']),
		event.recipes.createPressing('kubejs:incomplete_steel_mace',['kubejs:incomplete_steel_mace'])
	]).transitionalItem('kubejs:incomplete_steel_mace').loops(2).id('kubejs:assembly/steel_mace')
	// Electrum spear
	event.recipes.createSequencedAssembly([
		Item.of('clash:spear'),
	],'oreganized:electrum_sword',[
		event.recipes.createDeploying('kubejs:incomplete_electrum_spear',['kubejs:incomplete_electrum_spear', 'oreganized:electrum_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_electrum_spear',['kubejs:incomplete_electrum_spear', '#forge:gems/quartz']),
		event.recipes.createDeploying('kubejs:incomplete_electrum_spear',['kubejs:incomplete_electrum_spear', 'architects_palette:withered_bone']),
		event.recipes.createPressing('kubejs:incomplete_electrum_spear',['kubejs:incomplete_electrum_spear'])
	]).transitionalItem('kubejs:incomplete_electrum_spear').loops(2).id('kubejs:assembly/electrum_spear')
	// Necromium claymore
	event.recipes.createSequencedAssembly([
		Item.of('clash:greatblade'),
	],'abnormals_delight:necromium_knife',[
		event.recipes.createDeploying('kubejs:incomplete_necromium_claymore',['kubejs:incomplete_necromium_claymore', 'caverns_and_chasms:necromium_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_necromium_claymore',['kubejs:incomplete_necromium_claymore', '#forge:gems/quartz']),
		event.recipes.createDeploying('kubejs:incomplete_necromium_claymore',['kubejs:incomplete_necromium_claymore', 'architects_palette:withered_bone']),
		event.recipes.createPressing('kubejs:incomplete_necromium_claymore',['kubejs:incomplete_necromium_claymore'])
	]).transitionalItem('kubejs:incomplete_necromium_claymore').loops(2).id('kubejs:assembly/necromium_claymore')
	// Netherite broad axe
	event.recipes.createSequencedAssembly([
		Item.of('clash:swept_axe'),
	],'netherite_axe',[
		event.recipes.createDeploying('kubejs:incomplete_netherite_broad_axe',['kubejs:incomplete_netherite_broad_axe', 'netherite_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_netherite_broad_axe',['kubejs:incomplete_netherite_broad_axe', '#forge:gems/quartz']),
		event.recipes.createDeploying('kubejs:incomplete_netherite_broad_axe',['kubejs:incomplete_netherite_broad_axe', 'architects_palette:withered_bone']),
		event.recipes.createPressing('kubejs:incomplete_netherite_broad_axe',['kubejs:incomplete_netherite_broad_axe'])
	]).transitionalItem('kubejs:incomplete_netherite_broad_axe').loops(2).id('kubejs:assembly/netherite_broad_axe')

// Enchanting tablets

// Forge
	// Blank
	event.custom({type: 'modestmining:forging_shaped', cooktime: 300, 
	pattern: [' B ', 'BAB', ' B '],
	key: {A: {tag: 'forge:stone'}, B: {item: 'minecraft:amethyst_shard'}}, 
	result: {item: 'kubejs:blank_tablet', count: 4}})
	// Aquatic
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'aquaculture:goldfish'}, {item: 'minecraft:nautilus_shell'}, {item: 'minecraft:nautilus_shell'}
	], result: {item: 'kubejs:aquatic_tablet'}})
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, {item: 'kubejs:crystalfish'}
	], result: {item: 'kubejs:aquatic_tablet'}})
	// Beastly
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, 
	{item: 'minecraft:feather'}, {item: 'minecraft:feather'}, {item: 'minecraft:feather'}
	], result: {item: 'kubejs:beastly_tablet'}})
	// Cyclic
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}
	], result: {item: 'kubejs:cyclic_tablet'}})
	// Enduring
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{tag: 'raspberry_flavoured:golden_healers'}, {tag: 'raspberry_flavoured:golden_healers'}, {item: 'environmental:truffle'}
	], result: {item: 'kubejs:enduring_tablet'}})
	// Everlasting
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'kubejs:stardust'}, {item: 'create:powdered_obsidian'}, {item: 'create:powdered_obsidian'}
	], result: {item: 'kubejs:everlasting_tablet'}})
	// Flinging
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, 
	{item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}
	], result: {item: 'kubejs:flinging_tablet'}})
	// Glacial
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, 
	{item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}
	], result: {item: 'kubejs:glacial_tablet'}})
	// Hallowed
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'oreganized:silver_ingot'}, {item: 'oreganized:silver_ingot'}, {item: 'spelunkery:rock_salt'}, 
	{item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}
	], result: {item: 'kubejs:hallowed_tablet'}})
	// Haunted
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'quark:soul_bead'}, {item: 'quark:soul_bead'}, 
	{item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, 
	{item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}
	], result: {item: 'kubejs:haunted_tablet'}})
	// Heavy
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'alloyed:steel_ingot'}, {item: 'alloyed:steel_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}
	], result: {item: 'kubejs:heavy_tablet'}})
	// Infested
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'minecraft:red_mushroom'}, {item: 'minecraft:red_mushroom'}, {item: 'minecraft:spider_eye'}, {item: 'savage_and_ravage:creeper_spores'}
	], result: {item: 'kubejs:infested_tablet'}})
	// Otherworldly
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}, {item: 'architects_palette:twisted_sapling'}, {item: 'architects_palette:twisted_sapling'}
	], result: {item: 'kubejs:otherworldly_tablet'}})
	// Piercing
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}
	], result: {item: 'kubejs:piercing_tablet'}})
	// Pulling
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}
	], result: {item: 'kubejs:pulling_tablet'}})
	// Silent
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}
	], result: {item: 'kubejs:silent_tablet'}})
	// Swift
	event.custom({type: 'modestmining:forging', cooktime: 200, 
	ingredients: [
	{item: 'kubejs:blank_tablet'}, 
	{item: 'create:golden_sheet'}, {item: 'create:golden_sheet'}, {item: 'create:golden_sheet'}, 
	{item: 'create:golden_sheet'}, {item: 'create:golden_sheet'}, {item: 'create:golden_sheet'}
	], result: {item: 'kubejs:swift_tablet'}})

// Assembly
	// Blank
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:blank_tablet', 4),
	],'#forge:stone',[
		event.recipes.createDeploying('kubejs:incomplete_blank_tablet',['kubejs:incomplete_blank_tablet', 'amethyst_shard']),
		event.recipes.createDeploying('kubejs:incomplete_blank_tablet',['kubejs:incomplete_blank_tablet', 'amethyst_shard']),
		event.recipes.createPressing('kubejs:incomplete_blank_tablet',['kubejs:incomplete_blank_tablet'])
	]).transitionalItem('kubejs:incomplete_blank_tablet').loops(2).id('kubejs:assembly/blank_tablet')
	// Aquatic
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:aquatic_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_aquatic_tablet',['kubejs:incomplete_aquatic_tablet', 'nautilus_shell']),
		event.recipes.createDeploying('kubejs:incomplete_aquatic_tablet',['kubejs:incomplete_aquatic_tablet', 'nautilus_shell']),
		event.recipes.createDeploying('kubejs:incomplete_aquatic_tablet',['kubejs:incomplete_aquatic_tablet', 'aquaculture:goldfish'])
	]).transitionalItem('kubejs:incomplete_aquatic_tablet').loops(1).id('kubejs:assembly/aquatic_tablet')
	event.recipes.create.deploying('kubejs:aquatic_tablet', ['kubejs:blank_tablet', 'kubejs:crystalfish'])
	// Beastly
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:beastly_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_beastly_tablet',['kubejs:incomplete_beastly_tablet', 'naturalist:bear_fur']),
		event.recipes.createDeploying('kubejs:incomplete_beastly_tablet',['kubejs:incomplete_beastly_tablet', 'feather'])
	]).transitionalItem('kubejs:incomplete_beastly_tablet').loops(3).id('kubejs:assembly/beastly_tablet')
	// Cyclic
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:cyclic_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_cyclic_tablet',['kubejs:incomplete_cyclic_tablet', 'prismarine_shard']),
		event.recipes.createDeploying('kubejs:incomplete_cyclic_tablet',['kubejs:incomplete_cyclic_tablet', 'prismarine_shard']),
		event.recipes.createDeploying('kubejs:incomplete_cyclic_tablet',['kubejs:incomplete_cyclic_tablet', 'prismarine_shard'])
	]).transitionalItem('kubejs:incomplete_cyclic_tablet').loops(1).id('kubejs:assembly/cyclic_tablet')
	// Enduring
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:enduring_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_enduring_tablet',['kubejs:incomplete_enduring_tablet', '#raspberry_flavoured:golden_healers']),
		event.recipes.createDeploying('kubejs:incomplete_enduring_tablet',['kubejs:incomplete_enduring_tablet', '#raspberry_flavoured:golden_healers']),
		event.recipes.createDeploying('kubejs:incomplete_enduring_tablet',['kubejs:incomplete_enduring_tablet', 'environmental:truffle'])
	]).transitionalItem('kubejs:incomplete_enduring_tablet').loops(1).id('kubejs:assembly/enduring_tablet')
	// Everlasting
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:everlasting_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_everlasting_tablet',['kubejs:incomplete_everlasting_tablet', 'kubejs:stardust']),
		event.recipes.createDeploying('kubejs:incomplete_everlasting_tablet',['kubejs:incomplete_everlasting_tablet', 'create:powdered_obsidian']),
		event.recipes.createDeploying('kubejs:incomplete_everlasting_tablet',['kubejs:incomplete_everlasting_tablet', 'create:powdered_obsidian'])
	]).transitionalItem('kubejs:incomplete_everlasting_tablet').loops(1).id('kubejs:assembly/everlasting_tablet')
	// Flinging
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:flinging_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_flinging_tablet',['kubejs:incomplete_flinging_tablet', 'kubejs:rubber']),
		event.recipes.createDeploying('kubejs:incomplete_flinging_tablet',['kubejs:incomplete_flinging_tablet', 'kubejs:rubber']),
		event.recipes.createDeploying('kubejs:incomplete_flinging_tablet',['kubejs:incomplete_flinging_tablet', 'kubejs:rubber'])
	]).transitionalItem('kubejs:incomplete_flinging_tablet').loops(2).id('kubejs:assembly/flinging_tablet')
	// Glacial
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:glacial_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_glacial_tablet',['kubejs:incomplete_glacial_tablet', 'blue_ice']),
		event.recipes.createDeploying('kubejs:incomplete_glacial_tablet',['kubejs:incomplete_glacial_tablet', 'blue_ice']),
		event.recipes.createDeploying('kubejs:incomplete_glacial_tablet',['kubejs:incomplete_glacial_tablet', 'blue_ice'])
	]).transitionalItem('kubejs:incomplete_glacial_tablet').loops(2).id('kubejs:assembly/glacial_tablet')
	// Hallowed
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:hallowed_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_hallowed_tablet',['kubejs:incomplete_hallowed_tablet', 'oreganized:silver_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_hallowed_tablet',['kubejs:incomplete_hallowed_tablet', 'spelunkery:rock_salt']),
		event.recipes.createDeploying('kubejs:incomplete_hallowed_tablet',['kubejs:incomplete_hallowed_tablet', 'spelunkery:rock_salt'])
	]).transitionalItem('kubejs:incomplete_hallowed_tablet').loops(2).id('kubejs:assembly/hallowed_tablet')
	// Haunted
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:haunted_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_haunted_tablet',['kubejs:incomplete_haunted_tablet', 'quark:soul_bead']),
		event.recipes.createDeploying('kubejs:incomplete_haunted_tablet',['kubejs:incomplete_haunted_tablet', 'sculk_vein']),
		event.recipes.createDeploying('kubejs:incomplete_haunted_tablet',['kubejs:incomplete_haunted_tablet', 'sculk_vein']),
		event.recipes.createDeploying('kubejs:incomplete_haunted_tablet',['kubejs:incomplete_haunted_tablet', 'sculk_vein'])
	]).transitionalItem('kubejs:incomplete_haunted_tablet').loops(2).id('kubejs:assembly/haunted_tablet')
	// Heavy
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:heavy_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_heavy_tablet',['kubejs:incomplete_heavy_tablet', 'alloyed:steel_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_heavy_tablet',['kubejs:incomplete_heavy_tablet', 'oreganized:lead_ingot'])
	]).transitionalItem('kubejs:incomplete_heavy_tablet').loops(2).id('kubejs:assembly/heavy_tablet')
	// Infested
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:infested_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_infested_tablet',['kubejs:incomplete_infested_tablet', 'red_mushroom']),
		event.recipes.createDeploying('kubejs:incomplete_infested_tablet',['kubejs:incomplete_infested_tablet', 'red_mushroom']),
		event.recipes.createDeploying('kubejs:incomplete_infested_tablet',['kubejs:incomplete_infested_tablet', 'savage_and_ravage:creeper_spores']),
		event.recipes.createDeploying('kubejs:incomplete_infested_tablet',['kubejs:incomplete_infested_tablet', 'spider_eye'])
	]).transitionalItem('kubejs:incomplete_infested_tablet').loops(1).id('kubejs:assembly/infested_tablet')
	// Otherworldly
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:otherworldly_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_otherworldly_tablet',['kubejs:incomplete_otherworldly_tablet', 'architects_palette:twisted_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_otherworldly_tablet',['kubejs:incomplete_otherworldly_tablet', 'ender_pearl'])
	]).transitionalItem('kubejs:incomplete_otherworldly_tablet').loops(2).id('kubejs:assembly/otherworldly_tablet')
	// Piercing
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:piercing_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_piercing_tablet',['kubejs:incomplete_piercing_tablet', 'upgrade_aquatic:thrasher_tooth']),
		event.recipes.createDeploying('kubejs:incomplete_piercing_tablet',['kubejs:incomplete_piercing_tablet', 'upgrade_aquatic:thrasher_tooth']),
		event.recipes.createDeploying('kubejs:incomplete_piercing_tablet',['kubejs:incomplete_piercing_tablet', 'upgrade_aquatic:thrasher_tooth'])
	]).transitionalItem('kubejs:incomplete_piercing_tablet').loops(1).id('kubejs:assembly/piercing_tablet')
	// Pulling
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:pulling_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_pulling_tablet',['kubejs:incomplete_pulling_tablet', 'spelunkery:magnetite_chunk']),
		event.recipes.createDeploying('kubejs:incomplete_pulling_tablet',['kubejs:incomplete_pulling_tablet', 'spelunkery:magnetite_chunk']),
		event.recipes.createDeploying('kubejs:incomplete_pulling_tablet',['kubejs:incomplete_pulling_tablet', 'spelunkery:magnetite_chunk'])
	]).transitionalItem('kubejs:incomplete_pulling_tablet').loops(1).id('kubejs:assembly/pulling_tablet')
	// Silent
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:silent_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_silent_tablet',['kubejs:incomplete_silent_tablet', 'echo_shard']),
		event.recipes.createDeploying('kubejs:incomplete_silent_tablet',['kubejs:incomplete_silent_tablet', 'echo_shard']),
		event.recipes.createDeploying('kubejs:incomplete_silent_tablet',['kubejs:incomplete_silent_tablet', 'echo_shard'])
	]).transitionalItem('kubejs:incomplete_silent_tablet').loops(1).id('kubejs:assembly/silent_tablet')
	// Swift
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:swift_tablet'),
	],'kubejs:blank_tablet',[
		event.recipes.createDeploying('kubejs:incomplete_swift_tablet',['kubejs:incomplete_swift_tablet', 'create:golden_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_swift_tablet',['kubejs:incomplete_swift_tablet', 'create:golden_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_swift_tablet',['kubejs:incomplete_swift_tablet', 'create:golden_sheet'])
	]).transitionalItem('kubejs:incomplete_swift_tablet').loops(2).id('kubejs:assembly/swift_tablet')
	
// Smith-enchanting
	function smithEnchanting(templateItem, [enchantment]) {
		event.custom({type: 'miningmaster:gem_smithing_recipe', blacklist: {tag: 'miningmaster:gem_enchanting_blacklist'}, gem: {item: templateItem}, enchantments: [enchantment]})
	}
	
	smithEnchanting('kubejs:aquatic_tablet', ['ensorcellation:angler'])
	smithEnchanting('kubejs:aquatic_tablet', ['minecraft:respiration'])
	smithEnchanting('kubejs:aquatic_tablet', ['create:capacity'])
	smithEnchanting('kubejs:aquatic_tablet', ['minecraft:depth_strider'])
	smithEnchanting('kubejs:aquatic_tablet', ['domesticationinnovation:amphibious'])
	
	smithEnchanting('kubejs:beastly_tablet', ['ensorcellation:cavalier'])
	smithEnchanting('kubejs:beastly_tablet', ['miningmaster:knight_jump'])
	smithEnchanting('kubejs:beastly_tablet', ['domesticationinnovation:intimidation'])
	
	smithEnchanting('kubejs:cyclic_tablet', ['minecraft:sweeping'])
	smithEnchanting('kubejs:cyclic_tablet', ['minecraft:riptide'])
	smithEnchanting('kubejs:cyclic_tablet', ['allurement:vengeance'])
	
	smithEnchanting('kubejs:enduring_tablet', ['miningmaster:heartfelt'])
	smithEnchanting('kubejs:enduring_tablet', ['domesticationinnovation:health_boost'])
	
	smithEnchanting('kubejs:everlasting_tablet', ['minecraft:unbreaking'])
	
	smithEnchanting('kubejs:flinging_tablet', ['allurement:launch'])
	smithEnchanting('kubejs:flinging_tablet', ['minecraft:multishot'])
	smithEnchanting('kubejs:flinging_tablet', ['ensorcellation:volley'])
	smithEnchanting('kubejs:flinging_tablet', ['domesticationinnovation:deflection'])
	
	smithEnchanting('kubejs:glacial_tablet', ['minecraft:frost_walker'])
	smithEnchanting('kubejs:glacial_tablet', ['domesticationinnovation:frost_fang'])
	
	smithEnchanting('kubejs:hallowed_tablet', ['minecraft:smite'])
	smithEnchanting('kubejs:hallowed_tablet', ['minecraft:channeling'])
	smithEnchanting('kubejs:hallowed_tablet', ['usefulspyglass:marking'])
	
	smithEnchanting('kubejs:haunted_tablet', ['additional_enchantments:homing'])
	smithEnchanting('kubejs:haunted_tablet', ['minecraft:soul_speed'])
	smithEnchanting('kubejs:haunted_tablet', ['domesticationinnovation:total_recall'])
	
	smithEnchanting('kubejs:heavy_tablet', ['kubejs:guard_break'])
	smithEnchanting('kubejs:heavy_tablet', ['additional_enchantments:bracewalk'])
	smithEnchanting('kubejs:heavy_tablet', ['allurement:shockwave'])
	
	smithEnchanting('kubejs:infested_tablet', ['minecraft:bane_of_arthropods'])
	smithEnchanting('kubejs:infested_tablet', ['allurement:spread_of_ailments'])
	
	smithEnchanting('kubejs:otherworldly_tablet', ['supplementaries:stasis'])
	smithEnchanting('kubejs:otherworldly_tablet', ['additional_enchantments:straight_shot'])
	smithEnchanting('kubejs:otherworldly_tablet', ['ensorcellation:displacement'])
	smithEnchanting('kubejs:otherworldly_tablet', ['domesticationinnovation:tethered_teleport'])
	
	smithEnchanting('kubejs:piercing_tablet', ['minecraft:piercing'])
	smithEnchanting('kubejs:piercing_tablet', ['ensorcellation:trueshot'])
	smithEnchanting('kubejs:piercing_tablet', ['minecraft:impaling'])
	
	smithEnchanting('kubejs:pulling_tablet', ['allurement:reeling'])
	smithEnchanting('kubejs:pulling_tablet', ['ensorcellation:reach'])
	
	smithEnchanting('kubejs:silent_tablet', ['farmersdelight:backstabbing'])
	smithEnchanting('kubejs:silent_tablet', ['minecraft:swift_sneak'])
	smithEnchanting('kubejs:silent_tablet', ['domesticationinnovation:muffled'])
	
	smithEnchanting('kubejs:swift_tablet', ['additional_enchantments:faster_attacks'])
	smithEnchanting('kubejs:swift_tablet', ['ensorcellation:quick_draw'])
	smithEnchanting('kubejs:swift_tablet', ['minecraft:quick_charge'])
})

MoreJSEvents.filterAvailableEnchantments((event) => {
    event.remove("minecraft:protection");
    event.remove("minecraft:thorns");
    event.remove("minecraft:looting");
    event.remove("minecraft:mending");
    event.remove("minecraft:infinity");
    event.remove("minecraft:flame");
    event.remove("minecraft:efficiency");
    event.remove("minecraft:fortune");
    event.remove("minecraft:silk_touch");
    event.remove("minecraft:power");
    event.remove("minecraft:sharpness");
    event.remove("minecraft:loyalty");
    event.remove("additionaladditions:precision");
    event.remove("additionaladditions:speed");
    event.remove("cofh_core:holding");
});