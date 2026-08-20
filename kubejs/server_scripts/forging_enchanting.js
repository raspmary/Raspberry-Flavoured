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
	
// Smith-enchanting
	function smithEnchanting(templateItem, [enchantment]) {
		event.custom({type: 'miningmaster:gem_smithing_recipe', blacklist: {tag: 'miningmaster:gem_enchanting_blacklist'}, gem: {item: templateItem}, enchantments: [enchantment]})
	}
	
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
	
	smithEnchanting('kubejs:enduring_tablet', ['ensorcellation:vitality'])
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
	
	smithEnchanting('kubejs:recollection_tablet', ['ensorcellation:soulbound'])
	
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