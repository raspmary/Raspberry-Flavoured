// priority: 0

StartupEvents.registry('sound_event', (event) => {
	
// Block sounds
	const blockSounds = [
	'grass_block',
	'clay',
	'netherwood',
	'bamboowood',
	'altwood1',
	'stoneore',
	'blackstone',
	'squishy',
	'stickywood',
	'clothwood',
	'glasswood',
	'netherglasswood',
	'altglasswood1',
	'bambooglasswood',
	'forge',
	'gravel',
	'cobweb',
	'sponge',
	'wetsponge',
	'rubber',
	'sandstone',
	'soul_sandstone',
	'brick_variant',
	'pot',
	'prismarine',
	'bookshelf',
	'book',
	'hanging_sign',
	'alt_hanging_sign',
	'bamboo_hanging_sign',
	'nether_hanging_sign',
	'tnt',
	'obsidian',
	'iron'
	]
	blockSounds.forEach(block => {
		event.create('sound.'+block+'.break')
		event.create('sound.'+block+'.place')
		event.create('sound.'+block+'.fall')
		event.create('sound.'+block+'.step')
		event.create('sound.'+block+'.hit')
	})
	event.create('sound.soul_salt.break')
	event.create('sound.soul_salt.place')
	event.create('sound.glowstone.break')
	event.create('sound.glowstone.place')
	event.create('sound.workstation.break')
	event.create('sound.workstation.place')
	event.create('sound.small.break')
	event.create('sound.small.place')
	
// Misc sounds
	event.create('spawner.spawn')
	event.create('copper_brush.brush')
	event.create('copper_patina.apply')
	event.create('sound.swing')
	
// Advancement sounds
	event.create('advancement.regular')
	event.create('advancement.task')
	event.create('advancement.goal')
	event.create('advancement.challenge')
	event.create('advancement.nether')
	event.create('advancement.nether_alt')
	event.create('advancement.mystery')
	event.create('advancement.joke')
	event.create('advancement.pizza')
	event.create('advancement.happyhour')
	
// Misc
	event.create('crowbar.hit')
})