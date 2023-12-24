// priority: 0

let music_list = {
    "music_disc_eleven": "Eleven",
	"music_disc_dog": "Dog",
	"music_disc_halland": "Halland",
	"music_disc_dalarna": "Dalarna",
	"music_disc_halland_dalarna": "Halland & Dalarna",
	"music_disc_shimmer": "Shimmer",
	"music_disc_frontier": "Frontier"
}

StartupEvents.registry('sound_event', (event) => {
    Object.keys(music_list).forEach((value) => {
        event.create(`music.${value}`)
    })
})

StartupEvents.registry('item', event => {
// Music disc items
	Object.keys(music_list).forEach((value, index) => {
        event
            .create(value, "music_disc")
            .song(`kubejs:music.${value}`, 1)
            .analogOutput(1)
            .texture(`kubejs:item/${value}`)
            .displayName('Music Disc')
    })
})