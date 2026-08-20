// priority: 0

// loot bags (script by asof)
ItemEvents.rightClicked(event => {
	// goodie bag
    if (event.item.id === 'kubejs:loot_bag') {
		// take away if not in creative, swing hand, play bundle sound
		if (!event.player.isCreative()) {
			event.item.count --
		}
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'kubejs:sound.loot_bag.open', 'players', 1, 1)
		
		// loot
		let items = Utils.rollChestLoot('kubejs:bags/loot_bag')
		
		// give items
		event.server.schedule(1, () => {
			for(let item of items) event.player.giveInHand(item)
		})
	}
	// witch bag
    if (event.item.id === 'kubejs:witch_bag') {
		// take away if not in creative, swing hand, play bundle sound
		if (!event.player.isCreative()) {
			event.item.count --
		}
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'kubejs:sound.witch_bag.open', 'players', 1, 1)
		
		// loot
		let items = Utils.rollChestLoot('kubejs:bags/witch_bag')
		
		// give items
		event.server.schedule(1, () => {
			for(let item of items) event.player.giveInHand(item)
		})
	}
	// herb bag
    if (event.item.id === 'kubejs:herb_bag') {
		// take away if not in creative, swing hand, play bundle sound
		if (!event.player.isCreative()) {
			event.item.count --
		}
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'kubejs:sound.loot_bag.open', 'players', 1, 1)
		
		// loot
		let items = Utils.rollChestLoot('kubejs:bags/herb_bag')
		
		// give items
		event.server.schedule(1, () => {
			for(let item of items) event.player.giveInHand(item)
		})
	}
	// can of bait
    if (event.item.id === 'kubejs:bait_can') {
		// take away if not in creative, swing hand, play bundle sound
		if (!event.player.isCreative()) {
			event.item.count --
		}
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'kubejs:sound.bait_can.open', 'players', 1, 1)
		
		// loot
		let items = Utils.rollChestLoot('kubejs:bags/bait_can')
		
		// give items
		event.server.schedule(1, () => {
			for(let item of items) event.player.giveInHand(item)
		})
	}
	// message in a bottle
    if (event.item.id === 'aquaculture:message_in_a_bottle') {
		event.player.swing(event.hand, true)
		event.server.runCommandSilent(`particle minecraft:item glass_bottle ${event.player.x} ${event.player.y+1} ${event.player.z} 0.1 0.1 0.1 0.1 20 force`)
		
		// loot
		let items = Utils.rollChestLoot('kubejs:bags/message_in_a_bottle')
		
		// give items
		event.server.schedule(1, () => {
			for(let item of items) event.player.giveInHand(item)
		})
	}
})