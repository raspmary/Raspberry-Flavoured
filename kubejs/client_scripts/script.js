// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

JEIEvents.removeCategories(event => {
    console.log(event.getCategoryIds())

    const removeCategories = [
    'brewinandchewin:flaxen_cheese_ripening',
    'brewinandchewin:scarlet_cheese_ripening',
    'miners_delight:cooking',
    'minecraft:anvil'
    ]

    removeCategories.forEach((catid) => {
        // console.log('Removing category id for: ' + catid)
        event.remove(catid)
    })
})

ItemEvents.tooltip(tooltip => {
  tooltip.add(['abnormals_delight:vanilla_cake_slice'], "§9Vanilla Scent (0:05)")
  tooltip.add(['abnormals_delight:chocolate_cake_slice'], "§9Sugar Rush (0:10)")
  tooltip.add(['abnormals_delight:banana_cake_slice'], "§9Agility (0:10)")
  tooltip.add(['abnormals_delight:mint_cake_slice'], "§9Berserking (0:15)")
  tooltip.add(['abnormals_delight:adzuki_cake_slice'], "§9Harmony (0:10)")
  tooltip.add(['abnormals_delight:yucca_gateau_slice'], "§9Persistence (0:15)")
  tooltip.add(['abnormals_delight:strawberry_cake_slice'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:strawberries'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:white_strawberries'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:strawberry_scones'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:strawberry_ice_cream'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:chocolate_strawberries'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:strawberry_banana_smoothie'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:strawberry_bean_bonbons'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:chocolate_milkshake'], "§7When drunk or given to a mob:")
  tooltip.add(['neapolitan:chocolate_milkshake'], "§9 Clears Beneficial Effects")
  tooltip.add(['neapolitan:strawberry_milkshake'], "§7When drunk or given to a mob:")
  tooltip.add(['neapolitan:strawberry_milkshake'], "§9 Clears Harmful Effects")
  tooltip.add(['neapolitan:vanilla_milkshake'], "§7When drunk or given to a mob:")
  tooltip.add(['neapolitan:vanilla_milkshake'], "§9 Clears All Effects")
  tooltip.add(['neapolitan:banana_milkshake'], "§7When drunk:")
  tooltip.add(['neapolitan:banana_milkshake'], "§9 Swap Effects with Nearby Mob")
  tooltip.add(['neapolitan:mint_milkshake'], "§7When drunk:")
  tooltip.add(['neapolitan:mint_milkshake'], "§9 Take Effects from Nearby Mob")
  tooltip.add(['neapolitan:adzuki_milkshake'], "§7When drunk:")
  tooltip.add(['neapolitan:adzuki_milkshake'], "§9 Give Effects to Nearby Mob")
  tooltip.add(['neapolitan:neapolitan_ice_cream'], "§9Minor Instant Health")
  tooltip.add(['neapolitan:neapolitan_ice_cream'], "§9Sugar Rush II (0:20)")
  tooltip.add(['neapolitan:neapolitan_ice_cream'], "§9Vanilla Scent (0:10)")
  tooltip.add(['neapolitan:neapolitan_ice_cream'], "§cChilled (0:07)")
  tooltip.add(['neapolitan:vanilla_ice_cream'], "§9Vanilla Scent (0:20)")
  tooltip.add(['neapolitan:vanilla_ice_cream'], "§cChilled (0:05)")
  tooltip.add(['respiteful:black_tea_ice_cream'], "§9Maturity II (0:30)")
  tooltip.add(['respiteful:black_tea_ice_cream'], "§cChilled (0:05)")
  tooltip.add(['respiteful:respiteful_ice_cream'], "§9Vitality (0:45)")
  tooltip.add(['respiteful:respiteful_ice_cream'], "§9Tenacity (0:45)")
  tooltip.add(['respiteful:respiteful_ice_cream'], "§9Maturity (0:45)")
  tooltip.add(['respiteful:respiteful_ice_cream'], "§cChilled (0:07)")
  tooltip.add(['buzzier_bees:honey_apple'], "§7When eaten:")
  tooltip.add(['buzzier_bees:honey_apple'], "§9 Clears Levitation")
  tooltip.add(['buzzier_bees:honey_bread'], "§7When eaten:")
  tooltip.add(['buzzier_bees:honey_bread'], "§9 Clears Bad Omen")
  tooltip.add(['buzzier_bees:glazed_porkchop'], "§7When eaten:")
  tooltip.add(['buzzier_bees:glazed_porkchop'], "§9 Clears Fatigue")
  tooltip.add(['minecraft:honey_bottle'], "§7When eaten:")
  tooltip.add(['minecraft:honey_bottle'], "§9 Clears Poison")
  
  tooltip.addAdvanced('bigbrain:buckler', (item, advanced, text) => {
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
	text.remove(1)
  })
  tooltip.addAdvanced('minecraft:disc_fragment_5', (item, advanced, text) => {
	text.remove(1)
  })
  tooltip.addAdvanced('toms_storage:ts.inventory_connector', (item, advanced, text) => {
    if (!tooltip.shift) {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, [Text.of('')])
      text.add(3, [Text.of('Merges all of the connected ').color('#C7954B'), Text.of('storage blocks').color('#EEDA78')])
      text.add(4, [Text.of('into one, allowing for a ').color('#C7954B'), Text.of('Storage Terminal').color('#EEDA78')])
      text.add(5, [Text.of('to be placed on it to access ').color('#C7954B'), Text.of('all items').color('#EEDA78')])
      text.add(6, [Text.of('contained in ').color('#C7954B'), Text.of('all of the storage blocks at once.').color('#EEDA78')])
    }
  })
  tooltip.addAdvanced('toms_storage:ts.storage_terminal', (item, advanced, text) => {
    if (!tooltip.shift) {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, [Text.of('')])
      text.add(3, [Text.of('Gives access to ').color('#C7954B'), Text.of('all items').color('#EEDA78'), Text.of(' in the').color('#C7954B')])
      text.add(4, [Text.of('connected storage blocks ').color('#EEDA78'), Text.of('when').color('#C7954B')])
      text.add(5, [Text.of('placed on a ').color('#C7954B'), Text.of('Storage Merger.').color('#EEDA78')])
    }
  })
  tooltip.addAdvanced('toms_storage:ts.inventory_cable_connector', (item, advanced, text) => {
    if (!tooltip.shift) {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
	  text.remove(1)
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, [Text.of('')])
      text.add(3, [Text.of('Connects storage blocks to ').color('#C7954B'), Text.of('Storage').color('#EEDA78')])
      text.add(4, [Text.of('Mergers. ').color('#EEDA78'), Text.of('Use ').color('#C7954B'), Text.of('Connector Cables').color('#EEDA78'), Text.of(' to').color('#C7954B')])
      text.add(5, [Text.of('connect blocks over long distances.').color('#C7954B')])
    }
  })
  tooltip.addAdvanced('toms_storage:ts.inventory_cable', (item, advanced, text) => {
    if (!tooltip.shift) {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
	  text.remove(1)
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, [Text.of('')])
      text.add(3, [Text.of('Connects ').color('#C7954B'), Text.of('Storage Connectors').color('#EEDA78')])
      text.add(4, [Text.of('with ').color('#C7954B'), Text.of('Storage Mergers.').color('#EEDA78')])
    }
  })
  tooltip.addAdvanced('createaddition:diamond_grit_sandpaper', (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, [Text.of('')])
      text.add(3, [Text.of('Can be used to ').color('#C7954B'), Text.of('refine materials').color('#EEDA78'), Text.of('. The').color('#C7954B')])
      text.add(4, [Text.of('process can be automated with a').color('#C7954B')])
      text.add(5, [Text.of('Deployer.').color('#C7954B')])
      text.add(6, [Text.of('')])
      text.add(7, [Text.of('When Used').gray()])
      text.add(8, [Text.of(' Applies polish to items held in the').color('#C7954B')])
      text.add(9, [Text.of(' offhand ').color('#EEDA78'), Text.of('or lying on the ').color('#C7954B'), Text.of('floor ').color('#EEDA78'), Text.of('when').color('#C7954B')])
      text.add(10, [Text.of(' looking at them').color('#EEDA78')])
    }
  })
})