// priority: 0

EntityEvents.spawned(event => {
	// give skeletons quivers
    const entity = event.entity
	const quiverFucks = ['minecraft:skeleton', 'minecraft:stray', 'dungeons_mobs:mossy_skeleton', 'dungeons_mobs:sunken_skeleton']
	
    if (quiverFucks.includes(entity.type)) {
        let randQuiverFirst = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        let randQuiverSecond = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        if (randQuiverFirst === randQuiverSecond) {
            event.server.schedule(1, callback => {
            if (entity.mainHandItem === 'minecraft:bow') {
                entity.mergeNbt({Quiver: {ForgeCaps: {Parent: {Size: 6, Items: [{Slot: 0, id: "minecraft:arrow", Count: 1}], SelectedSlot: 0}}, id: "supplementaries:quiver", Count: 1}})
                }
            })
        }
    }
	
	// replace drowned's tridents with prismarine shard
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:trident') {
            entity.setItemSlot("mainhand", Item.of('minecraft:prismarine_shard'))
        }
    }
	// replace drowned's nautilus shells with ammonite
    if (entity.type === 'minecraft:drowned') {
        if (entity.offHandItem === 'minecraft:nautilus_shell') {
            entity.setItemSlot("offhand", Item.of('kubejs:raw_ammonite'))
        }
    }
	
	// remove vex swords
    if (entity.type === 'minecraft:vex') {
        entity.setItemSlot("mainhand", Item.of('minecraft:air'))
    }

	// frostbitten snowballs
    if (entity.type == 'dungeons_mobs:frozen_zombie') {
        if (entity.mainHandItem === 'minecraft:snowball') {
            entity.setItemSlot("mainhand", Item.of('minecraft:air'))
        }
        if (entity.offHandItem === 'minecraft:snowball') {
            entity.setItemSlot("offhand", Item.of('minecraft:air'))
        }
        let snowballChance = Math.floor(Math.random() * (4 - 0 + 1) + 0)
		event.server.schedule(1, callback => {
			if (snowballChance === 4) {
				entity.setItemSlot("mainhand", Item.of('minecraft:snowball'))
			}
		})
    }

	// replace chilled with frostbitten as a fallback
    if (entity.type == 'windswept:chilled') {
        let iceZombie = entity.block.createEntity('dungeons_mobs:frozen_zombie')
        iceZombie.setItemSlot("mainhand", Item.of('minecraft:snowball'))
        iceZombie.spawn()
        event.server.schedule(1, callback => {
            entity.discard()
        })
    }

	// replace zombie villagers with zombies as a fallback
    if (entity.type == 'minecraft:zombie_villager') {
        let regularZombie = entity.block.createEntity('minecraft:zombie')
        regularZombie.spawn()
        event.server.schedule(1, callback => {
            entity.discard()
        })
    }
})

// spawner sounds & particles
EntityEvents.checkSpawn(event => {
	if (event.type == 'SPAWNER') {
		event.level.spawnParticles('minecraft:flame', true, event.entity.x, event.entity.y, event.entity.z, 0, 0, 0, 20, 0.075)
		event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'kubejs:spawner.spawn', 'players', 1, 1)
	}
})

EntityEvents.death(event => {
    const entity = event.entity
	// make skeletons holding bows drop arrows
    if (entity.type === 'minecraft:skeleton') {
        if (entity.mainHandItem === 'minecraft:bow') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:arrow')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 2, min number is 0
			itemEntity.item.count = Math.floor(Math.random() * (2 - 0 + 1) + 0)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding prismarine drop them
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:prismarine_shard') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:prismarine_shard')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding fishing rods drop worms
    if (entity.type === 'minecraft:drowned') {
        if (entity.mainHandItem === 'minecraft:fishing_rod') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('aquaculture:worm')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 2
			itemEntity.item.count = Math.floor(Math.random() * (3 - 2 + 1) + 2)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
	// make drowned holding ammonite drop them
    if (entity.type === 'minecraft:drowned') {
        if (entity.offHandItem === 'kubejs:raw_ammonite') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('kubejs:raw_ammonite')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
        }
	}
})

// equipment dependent mob drops
EntityEvents.death(event => {
    const entity = event.entity
	if (entity.type !== 'minecraft:player') {
		if (entity.headArmorItem === 'minecraft:leather_helmet' || entity.chestArmorItem === 'minecraft:leather_chestplate' || entity.legsArmorItem === 'minecraft:leather_leggings' || entity.feetArmorItem === 'minecraft:leather_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:rabbit_hide')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:chainmail_helmet' || entity.chestArmorItem === 'minecraft:chainmail_chestplate' || entity.legsArmorItem === 'minecraft:chainmail_leggings' || entity.feetArmorItem === 'minecraft:chainmail_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:chain')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.item.count = 1
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:iron_helmet' || entity.chestArmorItem === 'minecraft:iron_chestplate' || entity.legsArmorItem === 'minecraft:iron_leggings' || entity.feetArmorItem === 'minecraft:iron_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:iron_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'minecraft:golden_helmet' || entity.chestArmorItem === 'minecraft:golden_chestplate' || entity.legsArmorItem === 'minecraft:golden_leggings' || entity.feetArmorItem === 'minecraft:golden_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:gold_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'copperized:copper_helmet' || entity.chestArmorItem === 'copperized:copper_chestplate' || entity.legsArmorItem === 'copperized:copper_leggings' || entity.feetArmorItem === 'copperized:copper_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('create:copper_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
		
		if (entity.headArmorItem === 'alloyed:steel_helmet' || entity.chestArmorItem === 'alloyed:steel_chestplate' || entity.legsArmorItem === 'alloyed:steel_leggings' || entity.feetArmorItem === 'alloyed:steel_boots') {
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('alloyed:steel_nugget')
			itemEntity.y = entity.y + 0.25
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			// max number here is 3, min number is 1
			itemEntity.item.count = Math.floor(Math.random() * (3 - 1 + 1) + 1)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
	}
})

// make wrenches apply wrenched to mobs
EntityEvents.hurt(event => {
    if (event.source.player && event.source.player.mainHandItem.id == 'supplementaries:wrench') {
		event.entity.potionEffects.add('cofh_core:wrenched', 10, 9, false, false)
    }
})

// add sound to boats & minecarts that are missing
EntityEvents.spawned(event => {
	if (event.entity.type === 'ecologics:boat' || event.entity.type === 'ecologics:chest_boat') {
		event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.wood.place', 'players', 1, 1)
	}
	if (event.entity.type === 'oreganized:shrapnel_bomb_minecart') {
		event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.netherite_block.place', 'players', 1, 1.325)
	}
})

// thrasher hunger fix (by grom_pe)
EntityEvents.death(event => {
	var entity = event.entity;
	if ((entity.type == "upgrade_aquatic:thrasher" || entity.type == "upgrade_aquatic:great_thrasher") && event.getSource().type == "player")
	{
		var player = event.getSource().getPlayer();
		event.server.schedule(40, function(callback)
		{
			player.jumping = false;
		});
	}
})

// potion advancement
PlayerEvents.inventoryChanged(event => {
	if (event.item.hasTag('raspberry_flavoured:potions') && event.item.nbt.Potion !== "minecraft:water" && event.item.nbt.Potion !== "minecraft:awkward") {
		event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:main/potion`)
	}
})