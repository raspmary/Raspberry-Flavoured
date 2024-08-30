// priority: 0

PlayerEvents.tick(event => {
    let { player, level } = event
    if (player.age % 79 != 0) return
    let campfireblocktick = BlockPos.findClosestMatch(player.block.pos, 3, 3, pos => {
        let islitlevel = level.getBlock(pos).blockState.lightEmission
        if (islitlevel == 0) return false
        if (!level.getBlock(pos).hasTag("minecraft:campfires")) return
        return true
    })
    campfireblocktick.ifPresent(() => player.potionEffects.add('farmersdelight:comfort', 90, 0, false, false))
})