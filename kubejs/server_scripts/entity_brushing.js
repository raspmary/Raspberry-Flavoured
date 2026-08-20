// priority: 0

// cooldowns in ticks
const turtleBrushCooldown = 24000
const snailBrushCooldown = 24000
const featherBrushCooldown = 6000
const stringBrushCooldown = 9000
const yakBrushCooldown = 6000

// reduce brush cooldown
LevelEvents.tick(event => {
    let levelEntities = event.level.entities
    let brushableEntities = levelEntities.filter(entity => {
        return entity.entityType.tags.anyMatch((tag) => tag.location() == 'raspberry_flavoured:brushable')
    })
    if (brushableEntities.length) {
        brushableEntities.forEach(entity => {
            if (entity.persistentData.brushCooldown > 0) {
                entity.persistentData.brushCooldown--
            }
        })
    }
})

// brushing entity
ItemEvents.entityInteracted('kubejs:copper_brush', (event => {
    let entity = event.getTarget()
    let player = event.getPlayer()
    let level = event.getLevel()
    if (entity.isBaby() || !entity.isAlive() || entity.nbt.Sheared == 1 || !entity.entityType.tags.anyMatch((tag) => tag.location() == 'raspberry_flavoured:brushable')) return
        if (!entity.persistentData.brushCooldown) {

		let itemEntity = event.level.createEntity("item")

		// brushing turtles or snails
        if (entity.type === 'minecraft:turtle') {
            entity.persistentData.brushCooldown = turtleBrushCooldown
			itemEntity.item = ('minecraft:scute')
			event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:farming/shell_brush`)
        }
        if (entity.type === 'autumnity:snail') {
            entity.persistentData.brushCooldown = snailBrushCooldown
			itemEntity.item = ('autumnity:snail_shell_piece')
			event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberry_flavoured:farming/shell_brush`)
        }
		
		// brushing for feathers
        if (entity.entityType.tags.anyMatch((tag) => tag.location() == 'raspberry_flavoured:feather_brushable')) {
            entity.persistentData.brushCooldown = featherBrushCooldown
			itemEntity.item = ('minecraft:feather')
        }
		
		// brushing for string
        if (entity.entityType.tags.anyMatch((tag) => tag.location() == 'raspberry_flavoured:string_brushable')) {
            entity.persistentData.brushCooldown = stringBrushCooldown
			itemEntity.item = ('minecraft:string')
        }
		
		// brushing yaks
        if (entity.type === 'environmental:yak') {
            entity.persistentData.brushCooldown = yakBrushCooldown
			itemEntity.item = ('environmental:yak_hair')
        }

			itemEntity.y = entity.boundingBox.maxY + 0.15
			itemEntity.x = entity.x
			itemEntity.z = entity.z
			itemEntity.motionY = 0.2
			itemEntity.spawn()
		
            level.playSound(null, entity.x, entity.y, entity.z, 'kubejs:copper_brush.brush_mob', 'players', 1, 1)
            level.spawnParticles('minecraft:poof', true, entity.x, entity.boundingBox.maxY + 0.15, entity.z, 0.25, 0, 0.25, 5, 0.05)

		if (!player.isCreative()) {
			player.damageHeldItem(event.hand, 1)
        }
        player.swing(event.hand, true)
    } else {
        player.swing(event.hand, true)
    }
}))