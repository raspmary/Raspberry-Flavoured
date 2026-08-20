// priority: 0

// Entity default attributes
EntityJSEvents.attributes(event => {
	// Max health modify
    event.modify('minecraft:rabbit', attribute => {
        attribute.add("minecraft:generic.max_health", 6)
    })
    event.modify('minecraft:bat', attribute => {
        attribute.add("minecraft:generic.max_health", 4)
    })
    event.modify('minecraft:phantom', attribute => {
        attribute.add("minecraft:generic.max_health", 12)
    })
    event.modify('minecraft:stray', attribute => {
        attribute.add("minecraft:generic.max_health", 10)
    })
    event.modify('minecraft:wither_skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
    })
    event.modify('minecraft:blaze', attribute => {
        attribute.add("minecraft:generic.max_health", 16)
    })
    event.modify('minecraft:piglin', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
    })
    event.modify('upgrade_aquatic:flare', attribute => {
        attribute.add("minecraft:generic.max_health", 12)
    })
    event.modify('naturalist:rhino', attribute => {
        attribute.add("minecraft:generic.max_health", 60)
    })
    event.modify('naturalist:boar', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
    })
    event.modify('naturalist:butterfly', attribute => {
        attribute.add("minecraft:generic.max_health", 6)
    })
    event.modify('naturalist:caterpillar', attribute => {
        attribute.add("minecraft:generic.max_health", 2)
    })
    event.modify('autumnity:turkey', attribute => {
        attribute.add("minecraft:generic.max_health", 8)
    })
    event.modify('dungeons_mobs:mossy_skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 10)
    })
    event.modify('dungeons_mobs:sunken_skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 10)
    })
    event.modify('dungeons_mobs:frozen_zombie', attribute => {
        attribute.add("minecraft:generic.max_health", 16)
    })
    event.modify('dungeons_mobs:wraith', attribute => {
        attribute.add("minecraft:generic.max_health", 14)
    })
    event.modify('dungeons_mobs:wildfire', attribute => {
        attribute.add("minecraft:generic.max_health", 65)
    })
    event.modify('dungeons_mobs:icy_creeper', attribute => {
        attribute.add("minecraft:generic.max_health", 30)
    })
    event.modify('caverns_and_chasms:deeper', attribute => {
        attribute.add("minecraft:generic.max_health", 20)
    })
    event.modify('caverns_and_chasms:peeper', attribute => {
        attribute.add("minecraft:generic.max_health", 15)
    })
    event.modify('minecraft:witch', attribute => {
        attribute.add("minecraft:generic.max_health", 30)
    })
    event.modify('minecraft:evoker', attribute => {
        attribute.add("minecraft:generic.max_health", 40)
    })
    event.modify('quark:forgotten', attribute => {
        attribute.add("minecraft:generic.max_health", 40)
    })
    event.modify('minecraft:wither', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
    })
	
	// Nerf movement speed
    event.modify('minecraft:zombie', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.25)
    })
    event.modify('minecraft:stray', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
    })
    event.modify('minecraft:wither_skeleton', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.25)
    })
    event.modify('dungeons_mobs:jungle_zombie', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
    })
    event.modify('dungeons_mobs:mossy_skeleton', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
    })
    event.modify('caverns_and_chasms:deeper', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
    })
    event.modify('caverns_and_chasms:peeper', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.1)
    })
    event.modify('savage_and_ravage:creepie', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.32)
    })
    event.modify('minecraft:cave_spider', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.28)
    })
    event.modify('neapolitan:plantain_spider', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.28)
    })
    event.modify('quark:forgotten', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.275)
    })
	
	// Modify armor
    event.modify('minecraft:witch', attribute => {
        attribute.add("minecraft:generic.armor", 6)
    })
    event.modify('minecraft:evoker', attribute => {
        attribute.add("minecraft:generic.armor", 9)
    })
    event.modify('quark:forgotten', attribute => {
        attribute.add("minecraft:generic.armor", 6)
    })
	
	// Buff wither
    event.modify('minecraft:wither', attribute => {
        attribute.add("minecraft:generic.armor", 14)
    })
	
	// Buff warden
    event.modify('minecraft:warden', attribute => {
        attribute.add("minecraft:generic.armor", 6)
        attribute.add("minecraft:generic.attack_damage", 40)
    })
	
	// Buff rabbits
    event.modify('minecraft:rabbit', attribute => {
        attribute.add("forge:step_height_addition", 0.45)
    })
	
	// Buff spiders
    event.modify('minecraft:spider', attribute => {
        attribute.add("minecraft:generic.follow_range", 20.0)
        attribute.add("forge:step_height_addition", 0.45)
    })
    event.modify('minecraft:cave_spider', attribute => {
        attribute.add("minecraft:generic.follow_range", 20.0)
        attribute.add("forge:step_height_addition", 0.45)
    })
    event.modify('neapolitan:plantain_spider', attribute => {
        attribute.add("minecraft:generic.follow_range", 20.0)
        attribute.add("forge:step_height_addition", 0.45)
    })
	
	// Modify withered
    event.modify('minecraft:wither_skeleton', attribute => {
        attribute.add("minecraft:generic.attack_damage", 0.5)
        attribute.add("minecraft:generic.knockback_resistance", 0.5)
    })
	
	// Nerf forgotten
    event.modify('quark:forgotten', attribute => {
        attribute.add("minecraft:generic.knockback_resistance", 0.4)
    })
	
	// Nerf thrashers
    event.modify('upgrade_aquatic:thrasher', attribute => {
        attribute.add("minecraft:generic.attack_damage", 3)
        attribute.add("minecraft:generic.max_health", 35)
        attribute.add("minecraft:generic.armor", 4)
    })
    event.modify('upgrade_aquatic:great_thrasher', attribute => {
        attribute.add("minecraft:generic.attack_damage", 4)
        attribute.add("minecraft:generic.armor", 8)
    })
})

EntityJSEvents.modifyEntity(event => {
	event.modify('minecraft:evoker', modifier => {
		modifier.mobType('undead')
	})
})