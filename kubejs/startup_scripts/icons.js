// priority: 0

StartupEvents.registry('item', event => {
	const tabIcons = ['building', 'combat', 'deco', 'hotbar', 'inventory', 'machine', 'magic', 'misc', 'search', 'tools', 'transport', 'food', 'iron_or_lead', 'pickaxe']
	tabIcons.forEach(tabIcon => {
		event.create(tabIcon+'_icon');
	})
})