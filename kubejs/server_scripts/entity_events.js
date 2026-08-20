// priority: 0
const disabledEntities = [
    'minecraft:experience_orb', 
    'minecraft:experience_bottle', 
    'minecraft:villager', 
    'minecraft:wandering_trader', 
    'minecraft:trader_llama',
    'sullysmod:copper_golem'
]
EntityEvents.spawned(event => {
    const entity = event.entity
	// remove disabled entities
    if (disabledEntities.includes(entity.type)) {
        if (entity.type == 'minecraft:wandering_trader' || entity.type == 'minecraft:trader_llama') {
            event.level.gameRules.set('doTraderSpawning', false)
        }
        event.server.schedule(1, callback => {
            entity.discard()
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

	// replace zombie villagers & skeleton villagers
    if (entity.type == 'minecraft:zombie_villager') {
        let regularZombie = entity.block.createEntity('minecraft:zombie')
        regularZombie.spawn()
        event.server.schedule(1, callback => {
            entity.discard()
        })
    }
    if (entity.type == 'savage_and_ravage:skeleton_villager') {
        let regularSkeleton = entity.block.createEntity('minecraft:skeleton')
        regularSkeleton.spawn()
        event.server.schedule(1, callback => {
            entity.discard()
        })
    }
	
    const catVariants = [
    "minecraft:white",
    "minecraft:black",
    "minecraft:red",
    "minecraft:siamese",
    "minecraft:british_shorthair",
    "minecraft:calico",
    "minecraft:persian",
    "minecraft:ragdoll",
    "minecraft:tabby",
    "minecraft:all_black",
    "minecraft:jellie",
    "moremobvariants:doug",
    "moremobvariants:gray_tabby",
    "moremobvariants:tortoiseshell"
    ]
    const randomCat = Math.floor(Math.random() * catVariants.length)

	// replace ocelots with cats as a fallback
    if (entity.type == 'minecraft:ocelot') {
        let cat = entity.block.createEntity('minecraft:cat')
        cat.mergeNbt({VariantID: catVariants[randomCat]})
        cat.spawn()
        event.server.schedule(1, callback => {
            entity.discard()
        })
    }
})

// flag entities when spawned
EntityEvents.checkSpawn(event => {
    if (event.type == 'SPAWNER') {
        event.entity.persistentData.isFromSpawner = true
    }
})

// play spawner sounds & particles
EntityEvents.spawned(event => {
    if (event.entity.persistentData.isFromSpawner) {
        
        event.level.spawnParticles('minecraft:flame', true, event.entity.x, event.entity.y, event.entity.z, 0, 0, 0, 20, 0.075)
        event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'kubejs:spawner.spawn', 'players', 1, 1)
        
        event.entity.persistentData.isFromSpawner = false
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

//EntityEvents.hurt(event => {
//    const entity = event.entity
//    if (entity.hasEffect('kubejs:infested') && entity.invulnerableTime < 5 && Math.floor(Math.random() * 2.75) == 0) {
//        let silverfish = entity.block.createEntity('minecraft:silverfish')
//            silverfish.y = entity.y + 0.05 + Math.random()
//            silverfish.x = entity.x + Math.random()
//            silverfish.z = entity.z + Math.random()
//            silverfish.level.spawnParticles('minecraft:poof', true, silverfish.x, silverfish.y, silverfish.z, 0, 0, 0, 7, 0.075)
//            silverfish.spawn()
//    }
//})