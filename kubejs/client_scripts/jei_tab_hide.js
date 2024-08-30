// priority: 0

JEIEvents.removeCategories(event => {
    console.log(event.getCategoryIds())

    const removeCategories = [
    'brewinandchewin:flaxen_cheese_ripening',
    'brewinandchewin:scarlet_cheese_ripening',
    'miners_delight:cooking',
    'minecraft:anvil',
    'minecraft:brewing',
	'create_dd:also_mystery_conversion',
	'create_dd:industrial_fan_freezing',
	'create_dd:industrial_fan_superheating',
	'pollen:grindstone',
	'copperized:axe_scraping', 
	'copperized:oxidation', 
	'copperized:waxing'
    ]

    removeCategories.forEach((catid) => {
        event.remove(catid)
    })
})