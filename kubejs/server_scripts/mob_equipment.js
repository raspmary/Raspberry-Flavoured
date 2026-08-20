// priority: 0

// make mobs not drop equipment
    const blacklistEntities = ['create:carriage_contraption', 'create:contraption', 'create:crafting_blueprint', 'create:gantry_contraption', 'create:seat', 'create:stationary_contraption', 'minecraft:pig', 'minecraft:strider', 'minecraft:horse', 'minecraft:wolf', 'minecraft:cat', 'minecraft:axolotl', 'minecraft:fox', 'minecraft:rabbit', 'minecraft:frog', 'environmental:slabfish']
EntityEvents.spawned((event) => {
    const { entity } = event;
    if (!entity.alive || !entity.isMonster() || blacklistEntities.includes(entity.type)) return;
    entity.mergeNbt({
      	ArmorDropChances: [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)],
      	HandDropChances: [NBT.f(0), NBT.f(0)],
    })
	if (entity.hasCustomName()) return
	entity.mergeNbt({
		PersistenceRequired: 0
	})
});

// misc. mob equipment
EntityEvents.spawned(event => {
    const entity = event.entity
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
	
	// remove vex swords
    if (entity.type === 'minecraft:vex') {
        entity.setItemSlot("mainhand", Item.of('minecraft:air'))
        entity.setItemSlot("offhand", Item.of('minecraft:air'))
    }

	// forgotten weapons
    if (entity.type == 'quark:forgotten') {
		entity.mergeNbt({
			sheathed: {
				ForgeCaps: {"dungeons_libraries:built_in_enchantments": {}}, 
				id: "kubejs:bone_knife", 
				tag: {
					"quark:RuneAttached": 1, 
					Enchantments: [
						{id: "minecraft:unbreaking", lvl: 1}
					], 
				Damage: 0, 
				"quark:RuneColor": {id: "quark:rainbow_rune", Count: 1}}, 
				Count: 1
			}, 
			HandItems: [
				{id: "minecraft:bow", tag: {
					"quark:RuneAttached": 1, 
					Enchantments: [
						{id: "minecraft:unbreaking", lvl: 1}
					], 
					Damage: 0, 
					"quark:RuneColor": {id: "quark:rainbow_rune", Count: 1}
				}, 
				Count: 1
				}, 
				{}
			]
		})
		if (entity.hasCustomName()) return
		entity.mergeNbt({
			PersistenceRequired: 0
		})
    }
})

// tiered equipment dependent mob drops
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
		
		if (entity.headArmorItem === 'minecraft:copper_helmet' || entity.chestArmorItem === 'minecraft:copper_chestplate' || entity.legsArmorItem === 'minecraft:copper_leggings' || entity.feetArmorItem === 'minecraft:copper_boots') {
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
			// max number here is 1, min number is 0
			itemEntity.item.count = Math.floor(Math.random() * (1 - 0 + 1) + 0)
			itemEntity.motionY = 0.15
			itemEntity.motionX = 0.075
			itemEntity.spawn()
		}
	}
})

// misc. equipment dependent mob drops
EntityEvents.death(event => {
    const entity = event.entity
	// make skeletons holding bows drop arrows
    if (entity.type === 'minecraft:skeleton') {
        if (entity.mainHandItem === 'minecraft:bow' || entity.offHandItem === 'minecraft:bow') {
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
        if (entity.mainHandItem === 'minecraft:prismarine_shard' || entity.offHandItem === 'minecraft:prismarine_shard') {
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
        if (entity.mainHandItem === 'minecraft:fishing_rod' || entity.offHandItem === 'minecraft:fishing_rod') {
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
        if (entity.mainHandItem === 'kubejs:raw_ammonite' || entity.offHandItem === 'kubejs:raw_ammonite') {
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

// Necromium healing
BlockEvents.broken(event => {
	if (event.player.mainHandItem == 'caverns_and_chasms:necromium_pickaxe' && event.block.hasTag('minecraft:mineable/pickaxe')) {
		if (Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) {
			event.player.heal(1)
		}
	}
	if (event.player.mainHandItem == 'caverns_and_chasms:necromium_shovel' && event.block.hasTag('minecraft:mineable/shovel')) {
		if (Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) {
			event.player.heal(1)
		}
	}
	if (event.player.mainHandItem == 'caverns_and_chasms:necromium_axe' && event.block.hasTag('minecraft:mineable/axe')) {
		if (Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) {
			event.player.heal(1)
		}
	}
	if (event.player.mainHandItem == 'caverns_and_chasms:necromium_hoe' && event.block.hasTag('minecraft:mineable/hoe')) {
		if (Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) {
			event.player.heal(1)
		}
	}
	if (event.player.mainHandItem == 'abnormals_delight:necromium_knife' && event.block.hasTag('farmersdelight:mineable/knife')) {
		if (Math.floor(Math.random() * (1 - 0 + 1) + 0) == 0) {
			event.player.heal(1)
		}
	}
})