// priority: 0

let music_list = {
    "music_disc_eleven": "Eleven",
	"music_disc_dog": "Dog",
	"music_disc_death": "Death",
	"music_disc_droopy1": "Droopy Likes Your Face",
	"music_disc_droopy2": "Droopy Likes Ricochet",
	"music_disc_shimmer": "Shimmer",
	"music_disc_frontier": "Frontier",
	"music_disc_origin": "Origin",
	"music_disc_savour": "Savour",
	"music_disc_fruitiger": "Fruitiger",
	"music_disc_redstone_baby": "Redstone Baby",
	"music_disc_raveyard": "Raveyard"
}

StartupEvents.registry('sound_event', (event) => {
    Object.keys(music_list).forEach((value) => {
        event.create(`music.${value}`)
    })
	event.create('music.music_disc_exostep')
})

StartupEvents.registry('item', event => {
// Music disc items
	Object.keys(music_list).forEach((value, index) => {
        event.create(value, "music_disc")
            .song(`kubejs:music.${value}`, 1)
            .analogOutput(1)
            .displayName('Music Disc')
			.maxStackSize(16)
			.group('misc')
    })
	event.create('music_disc_exostep', 'music_disc').glow(true).rarity('epic').song('kubejs:music.music_disc_exostep', 1).analogOutput(1).displayName('Music Disc').maxStackSize(16)
})