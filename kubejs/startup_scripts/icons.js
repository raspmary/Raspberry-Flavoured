// priority: 0

StartupEvents.registry('item', event => {
	const tabIcons = ['building', 'combat', 'deco', 'hotbar', 'inventory', 'machine', 'magic', 'misc', 'search', 'tools', 'transport', 'food']
	tabIcons.forEach(icon => {
		event.create(icon+'_icon').texture('kubejs:icons/'+icon+'_icon')
	})
})