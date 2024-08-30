// priority: 0

EntityEvents.spawned(event => {
    const entity = event.entity
	const wearyFucks = ['minecraft:zombie', 'minecraft:husk', 'minecraft:skeleton', 'minecraft:wither_skeleton', 'minecraft:stray', 'minecraft:drowned', 'windswept:chilled']
	const quiverFucks = ['minecraft:skeleton', 'minecraft:stray']
	
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
	
    if (wearyFucks.includes(entity.type)) {
		// replace drowned tridents with prismarine shard
        if (entity.mainHandItem == 'minecraft:trident') {
            entity.setItemSlot("mainhand", Item.of('minecraft:prismarine_shard'))
        }
		if (entity.offHandItem == 'minecraft:trident') {
            entity.setItemSlot("offhand", Item.of('minecraft:prismarine_shard'))
        }
		
		// replace silver tools
        if (entity.mainHandItem == 'caverns_and_chasms:silver_sword') {
            entity.setItemSlot("mainhand", Item.of('minecraft:stone_sword'))
        }
		if (entity.offHandItem == 'caverns_and_chasms:silver_sword') {
            entity.setItemSlot("offhand", Item.of('minecraft:stone_sword'))
        }
        if (entity.mainHandItem == 'caverns_and_chasms:silver_axe') {
            entity.setItemSlot("mainhand", Item.of('minecraft:stone_axe'))
        }
		if (entity.offHandItem == 'caverns_and_chasms:silver_axe') {
            entity.setItemSlot("offhand", Item.of('minecraft:stone_axe'))
        }
        if (entity.mainHandItem == 'caverns_and_chasms:silver_shovel') {
            entity.setItemSlot("mainhand", Item.of('minecraft:stone_shovel'))
        }
		if (entity.offHandItem == 'caverns_and_chasms:silver_shovel') {
            entity.setItemSlot("offhand", Item.of('minecraft:stone_shovel'))
        }
        if (entity.mainHandItem == 'caverns_and_chasms:silver_pickaxe') {
            entity.setItemSlot("mainhand", Item.of('minecraft:stone_pickaxe'))
        }
		if (entity.offHandItem == 'caverns_and_chasms:silver_pickaxe') {
            entity.setItemSlot("offhand", Item.of('minecraft:stone_pickaxe'))
        }
        if (entity.mainHandItem == 'caverns_and_chasms:silver_hoe') {
            entity.setItemSlot("mainhand", Item.of('minecraft:stone_hoe'))
        }
		if (entity.offHandItem == 'caverns_and_chasms:silver_hoe') {
            entity.setItemSlot("offhand", Item.of('minecraft:stone_hoe'))
        }
		
		// replace silver armour
        if (entity.headArmorItem == 'caverns_and_chasms:silver_helmet') {
            entity.headArmorItem = 'copperized:copper_helmet'
        }
        if (entity.feetArmorItem == 'caverns_and_chasms:silver_boots') {
            entity.feetArmorItem = 'copperized:copper_boots'
        }
        if (entity.chestArmorItem == 'caverns_and_chasms:silver_chestplate') {
            entity.chestArmorItem = 'copperized:copper_chestplate'
        }
        if (entity.legsArmorItem == 'caverns_and_chasms:silver_leggings') {
            entity.legsArmorItem = 'copperized:copper_leggings'
        }
		
		// replace explorer gear
        if (entity.headArmorItem == 'environmental:thief_hood') {
            entity.headArmorItem = 'minecraft:iron_helmet'
        }
        if (entity.feetArmorItem == 'environmental:healer_pouch') {
            entity.feetArmorItem = 'minecraft:iron_boots'
        }
        if (entity.chestArmorItem == 'environmental:architect_belt') {
            entity.chestArmorItem = 'minecraft:iron_chestplate'
        }
        if (entity.legsArmorItem == 'environmental:wanderer_boots') {
            entity.legsArmorItem = 'minecraft:iron_leggings'
        }
    }
})