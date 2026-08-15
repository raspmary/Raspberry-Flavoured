// priority: 0

StartupEvents.registry('sound_event', (event) => {
// Block sounds
	const blockSounds = [
	'grass_block',
	'clay',
	'netherwood',
	'bamboowood',
	'altwood1',
	'altwood2',
	'stoneore',
	'blackstone',
	'squishy',
	'stickywood',
	'clothwood',
	'glasswood',
	'netherglasswood',
	'altglasswood1',
	'altglasswood2',
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
	'alt_hanging_sign2',
	'bamboo_hanging_sign',
	'nether_hanging_sign',
	'tnt',
	'obsidian',
	'iron',
	'arid_sand',
	'monkey_brush',
	'bone_brick'
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
	event.create('copper_brush.brush_mob')
	event.create('copper_patina.apply')
	event.create('sound.swing')
	event.create('sound.hammer.crack')
	event.create('sound.infest')
	event.create('sound.lachryte.extract')
	event.create('sound.loot_bag.open')
	event.create('sound.witch_bag.open')
	event.create('sound.bait_can.open')
	event.create('crowbar.hit')
	
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
	event.create('advancement.susie')
	
// Music
	event.create('music.overworld.arid')
})

let music_list = {
    "music_disc_eleven": "Eleven",
	"music_disc_dog": "Dog",
	"music_disc_death": "Death",
	"music_disc_droopy1": "Droopy",
	"music_disc_droopy2": "Remember",
	"music_disc_shimmer": "Shimmer",
	"music_disc_frontier": "Frontier",
	"music_disc_origin": "Origin",
	"music_disc_savour": "Savour",
	"music_disc_fruitiger": "Fruitiger",
	"music_disc_redstone_baby": "Redstone Baby",
	"music_disc_raveyard": "Raveyard",
	"music_disc_one": "One",
	"music_disc_artisan": "Artisan",
	"music_disc_pancake": "Pancake"
}

// Music disc sound registry
StartupEvents.registry('sound_event', (event) => {
    Object.keys(music_list).forEach((value) => {
        event.create(`music.${value}`)
    })
	event.create('music.music_disc_exostep')
})

// Music disc items
StartupEvents.registry('item', event => {
	Object.keys(music_list).forEach((value, index) => {
        event.create(value, "music_disc")
            .song(`kubejs:music.${value}`, 1)
            .analogOutput(1)
            .displayName('Music Disc')
			.maxStackSize(16)
    })
	event.create('music_disc_exostep', 'music_disc').glow(true).rarity('epic').song('kubejs:music.music_disc_exostep', 1).analogOutput(1).displayName('Music Disc').maxStackSize(16)
})