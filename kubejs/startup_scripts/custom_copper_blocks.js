StartupEvents.registry('block', event => {
	function copperTick(e, nextBlock) {
		const block = e.block
	 
		if (Math.random() > 64/1100) return
	 
		let a = 0
		let b = 0
		const c = (b + 1) / (a + 1)
		const m = block.id ? 0.75 : 1
	 
		if (Math.random() > m * c * c) return
	 
		block.set(nextBlock, block.properties)
	}
	event.create('copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/copper_pillar')
	.randomTick((e) => {
		copperTick(e, 'kubejs:exposed_copper_pillar')
	})

	event.create('exposed_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/exposed_copper_pillar')
	.randomTick((e) => {
		copperTick(e, 'kubejs:weathered_copper_pillar')
	})

	event.create('weathered_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/weathered_copper_pillar')
	.randomTick((e) => {
		copperTick(e, 'kubejs:oxidized_copper_pillar')
	})

	event.create('oxidized_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/oxidized_copper_pillar')

	event.create('waxed_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/copper_pillar')

	event.create('waxed_exposed_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/exposed_copper_pillar')

	event.create('waxed_weathered_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/weathered_copper_pillar')

	event.create('waxed_oxidized_copper_pillar')
    .soundType('copper')
    .hardness(3).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    .property(BlockProperties.AXIS)
    .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
    .model('kubejs:block/copper/oxidized_copper_pillar')
})