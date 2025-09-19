// priority: 0

StartupEvents.registry('item', event => {
	const enchantedTablets = [
	'aquatic_tablet',
	'beastly_tablet',
	'cyclic_tablet',
	'enduring_tablet',
	'flinging_tablet',
	'glacial_tablet',
	'hallowed_tablet',
	'haunted_tablet',
	'heavy_tablet',
	'infested_tablet',
	'otherworldly_tablet',
	'piercing_tablet',
	'pulling_tablet',
	'silent_tablet',
	'swift_tablet'
	]
	
	event.create('blank_tablet').texture('kubejs:item/enchanted_tablets/blank_tablet').group('brewing')
	event.create('everlasting_tablet').glow(true).rarity('epic').texture('kubejs:item/enchanted_tablets/everlasting_tablet').group('brewing')
	
	enchantedTablets.forEach(tablet => {
		event.create(tablet).glow(true).rarity('rare').texture('kubejs:item/enchanted_tablets/'+tablet).group('brewing')
	})
	
// Incomplete tablets
	const incompleteTablets = [
	'incomplete_blank_tablet',
	'incomplete_aquatic_tablet',
	'incomplete_beastly_tablet',
	'incomplete_cyclic_tablet',
	'incomplete_enduring_tablet',
	'incomplete_everlasting_tablet',
	'incomplete_flinging_tablet',
	'incomplete_glacial_tablet',
	'incomplete_hallowed_tablet',
	'incomplete_haunted_tablet',
	'incomplete_heavy_tablet',
	'incomplete_infested_tablet',
	'incomplete_otherworldly_tablet',
	'incomplete_piercing_tablet',
	'incomplete_pulling_tablet',
	'incomplete_silent_tablet',
	'incomplete_swift_tablet'
	]
    
    incompleteTablets.forEach(incompleteTablet => {
        event.create(incompleteTablet, 'create:sequenced_assembly').texture('kubejs:item/enchanted_tablets/incomplete/'+incompleteTablet)
    })
})