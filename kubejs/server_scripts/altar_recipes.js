// priority: 0

ServerEvents.recipes(event => {
// Enchanted tablets
	// Aquatic
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:nautilus_shell'}, {item: 'ecologics:seashell'}, {item: 'ecologics:seashell'}
	], result: {item: 'kubejs:aquatic_tablet'}})
	// Beastly
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:feather'}, {item: 'minecraft:feather'}, {item: 'minecraft:feather'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}
	], result: {item: 'kubejs:beastly_tablet'}})
	// Cyclic
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}
	], result: {item: 'kubejs:cyclic_tablet'}})
	// Enduring
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{tag: 'raspberry_flavoured:golden_healers'}, {item: 'environmental:truffle'}, {item: 'heart_crystals:heart_crystal_shard'}
	], result: {item: 'kubejs:enduring_tablet'}})
	// Everlasting
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'kubejs:stardust'}, {tag: 'forge:gems/obsidian'}, {tag: 'forge:gems/obsidian'}, {tag: 'forge:gems/obsidian'}
	], result: {item: 'kubejs:everlasting_tablet'}})
	// Flinging
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {tag: 'forge:ingots/rose_gold'}
	], result: {item: 'kubejs:flinging_tablet'}})
	// Glacial
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}
	], result: {item: 'kubejs:glacial_tablet'}})
	// Hallowed
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{tag: 'forge:ingots/silver'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}
	], result: {item: 'kubejs:hallowed_tablet'}})
	// Haunted
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'quark:soul_bead'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}
	], result: {item: 'kubejs:haunted_tablet'}})
	// Heavy
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{tag: 'forge:ingots/steel'}, {tag: 'forge:ingots/lead'}, {tag: 'forge:ingots/lead'}
	], result: {item: 'kubejs:heavy_tablet'}})
	// Infested
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'miners_delight:silverfish_eggs'}, {item: 'minecraft:spider_eye'}, {item: 'minecraft:spider_eye'}
	], result: {item: 'kubejs:infested_tablet'}})
	// Otherworldly
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:ender_pearl'}, {item: 'architects_palette:twisted_sapling'}, {item: 'architects_palette:twisted_sapling'}
	], result: {item: 'kubejs:otherworldly_tablet'}})
	// Piercing
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'minecraft:flint'}, {item: 'minecraft:flint'}
	], result: {item: 'kubejs:piercing_tablet'}})
	// Pulling
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}, {tag: 'raspberry:bait'}, {tag: 'raspberry:bait'}
	], result: {item: 'kubejs:pulling_tablet'}})
	// Recollection
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:ghast_tear'}, {item: 'minecraft:ghast_tear'}, {item: 'minecraft:chorus_fruit'}, {item: 'minecraft:chorus_fruit'}
	], result: {item: 'kubejs:recollection_tablet'}})
	// Silent
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}, {item: 'savage_and_ravage:creeper_spores'}, {item: 'savage_and_ravage:creeper_spores'}
	], result: {item: 'kubejs:silent_tablet'}})
	// Swift
	event.custom({type: 'modestmagic:infusing', base: {item: 'kubejs:blank_tablet'}, ingredients: [
	{item: 'create:golden_sheet'}, {item: 'create:golden_sheet'}, {tag: 'forge:gems/diamond'}, {tag: 'forge:gems/diamond'}
	], result: {item: 'kubejs:swift_tablet'}})
	
// Relics
	// Totem
	event.custom({type: 'modestmagic:infusing', base: {item: 'quark:soul_bead'}, ingredients: [
	{item: 'minecraft:gold_block'},
	{item: 'caverns_and_chasms:echo_block'}, 
	{item: 'kubejs:stardust'}, {item: 'kubejs:stardust'}, {item: 'kubejs:stardust'}
	], result: {item: 'minecraft:totem_of_undying'}})
	// Wand
	event.custom({type: 'modestmagic:infusing', base: {item: 'quark:soul_bead'}, ingredients: [
	{item: 'minecraft:diamond_block'},
	{item: 'upgrade_aquatic:prismarine_rod_bundle'},
	{item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}
	], result: {item: 'savage_and_ravage:wand_of_freezing'}})
	// Tome
	event.custom({type: 'modestmagic:infusing', base: {item: 'quark:soul_bead'}, ingredients: [
	{item: 'minecraft:book'},
	{item: 'upgrade_aquatic:tooth_block'},
	{item: 'minecraft:phantom_membrane'}, {item: 'minecraft:phantom_membrane'}, {item: 'minecraft:phantom_membrane'}
	], result: {item: 'savage_and_ravage:conch_of_conjuring'}})
	// Mask
	event.custom({type: 'modestmagic:infusing', base: {item: 'quark:soul_bead'}, ingredients: [
	{item: 'create:rose_quartz_tiles'},
	{item: 'oreganized:silver_block'},
	{item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}
	], result: {item: 'savage_and_ravage:mask_of_dishonesty'}})
	
// Heads
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'architects_palette:rotten_flesh_block'}, {item: 'architects_palette:rotten_flesh_block'}, {item: 'architects_palette:rotten_flesh_block'}, {item: 'architects_palette:rotten_flesh_block'}
	], result: {item: 'minecraft:zombie_head'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'savage_and_ravage:creeper_spore_sack'}, {item: 'savage_and_ravage:creeper_spore_sack'}, {item: 'savage_and_ravage:creeper_spore_sack'}, {item: 'savage_and_ravage:creeper_spore_sack'}
	], result: {item: 'minecraft:creeper_head'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'kubejs:bone_pile'}, {item: 'kubejs:bone_pile'}, {item: 'kubejs:bone_pile'}, {item: 'kubejs:bone_pile'}
	], result: {item: 'minecraft:skeleton_skull'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'kubejs:withered_bone_pile'}, {item: 'kubejs:withered_bone_pile'}, {item: 'kubejs:withered_bone_pile'}, {item: 'kubejs:withered_bone_pile'}
	], result: {item: 'minecraft:wither_skeleton_skull'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'architects_palette:ender_pearl_block'}, {item: 'architects_palette:ender_pearl_block'}, {item: 'architects_palette:ender_pearl_block'}, {item: 'architects_palette:ender_pearl_block'}
	], result: {item: 'supplementaries:enderman_head'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{tag: 'forge:storage_blocks/emerald'}, {tag: 'forge:storage_blocks/emerald'}, {tag: 'forge:storage_blocks/emerald'}, {tag: 'forge:storage_blocks/emerald'}
	], result: {item: 'caverns_and_chasms:mime_head'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'kubejs:deposit'}, {item: 'kubejs:deposit'}
	], result: {item: 'caverns_and_chasms:deeper_head'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'raspberry_flavoured:soul_blocks'}, ingredients: [
	{item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'quark:gunpowder_sack'}, {item: 'kubejs:deepslate_deposit'}, {item: 'kubejs:deepslate_deposit'}
	], result: {item: 'caverns_and_chasms:peeper_head'}})
	
// Other
	event.custom({type: 'modestmagic:infusing', base: {item: 'minecraft:echo_shard'}, ingredients: [
	{item: 'minecraft:sculk'}, {item: 'minecraft:sculk'}, {item: 'minecraft:sculk'},
	{item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}
	], result: {item: 'minecraft:sculk_sensor'}})
	event.custom({type: 'modestmagic:infusing', base: {item: 'minecraft:echo_shard'}, ingredients: [
	{item: 'minecraft:sculk'}, {item: 'minecraft:sculk'}, {item: 'minecraft:sculk'},
	{item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'}, {item: 'minecraft:sculk_vein'},
	{tag: 'forge:storage_blocks/bone'}, {tag: 'forge:storage_blocks/bone'}, {tag: 'forge:storage_blocks/bone'}
	], result: {item: 'minecraft:sculk_catalyst'}})
	event.custom({type: 'modestmagic:infusing', base: {tag: 'forge:gems/diamond'}, ingredients: [
	{item: 'minecraft:sculk'}, {item: 'minecraft:sculk'}, {item: 'minecraft:sculk'},
	{item: 'minecraft:sculk'}, {item: 'minecraft:sculk'}, {item: 'minecraft:sculk'}
	], result: {item: 'minecraft:echo_shard'}})
	
	event.custom({type: 'modestmagic:infusing', base: {tag: 'forge:gems/diamond'}, ingredients: [
	{item: 'heart_crystals:heart_crystal_shard'}, {item: 'heart_crystals:heart_crystal_shard'}, {item: 'heart_crystals:heart_crystal_shard'},
	{item: 'heart_crystals:heart_crystal_shard'}, {item: 'heart_crystals:heart_crystal_shard'}, {item: 'heart_crystals:heart_crystal_shard'}
	], result: {item: 'heart_crystals:heart_crystal'}}).id('heart_crystals:heart_crystal')
	
// Summoning
	// Summon slime
	event.custom({type: 'modestmagic:summoning', base: {item: 'savage_and_ravage:conch_of_conjuring'}, ingredients: [
	{item: 'minecraft:slime_ball'}, {item: 'minecraft:slime_ball'}, {item: 'minecraft:slime_ball'}, 
	{item: 'minecraft:slime_ball'}, {item: 'minecraft:slime_ball'}, {item: 'minecraft:slime_ball'}
	], consume_base: false, durability_taken: 100, result_entity: 'minecraft:slime', entity_nbt: {Size: 1}})
	// Summon magma cube
	event.custom({type: 'modestmagic:summoning', base: {item: 'savage_and_ravage:conch_of_conjuring'}, ingredients: [
	{item: 'minecraft:magma_cream'}, {item: 'minecraft:magma_cream'}, {item: 'minecraft:magma_cream'}, 
	{item: 'minecraft:magma_cream'}, {item: 'minecraft:magma_cream'}, {item: 'minecraft:magma_cream'}
	], consume_base: false, durability_taken: 100, result_entity: 'minecraft:magma_cube', entity_nbt: {Size: 1}})
	
	// Summon item
	// event.custom({type: 'modestmagic:summoning', base: {item: 'savage_and_ravage:conch_of_conjuring'}, ingredients: [
	// {item: 'ecologics:seashell'}, {item: 'ecologics:seashell'}, {item: 'ecologics:seashell'}, 
	// {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:nautilus_shell'}
	// ], consume_base: false, durability_taken: 100, result_entity: 'minecraft:item', entity_nbt: {Item: {id: 'minecraft:scute', Count: 1}}})
})