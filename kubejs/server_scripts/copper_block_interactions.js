// priority: 0

global.scrapableBlocksMap = {
    'kubejs:exposed_copper_pillar': 'kubejs:copper_pillar',
    'kubejs:weathered_copper_pillar': 'kubejs:exposed_copper_pillar',
    'kubejs:oxidized_copper_pillar': 'kubejs:weathered_copper_pillar'
}

global.waxOffMap = {
    'kubejs:waxed_copper_pillar': 'kubejs:copper_pillar',
    'kubejs:waxed_exposed_copper_pillar': 'kubejs:exposed_copper_pillar',
    'kubejs:waxed_weathered_copper_pillar': 'kubejs:weathered_copper_pillar',
    'kubejs:waxed_oxidized_copper_pillar': 'kubejs:oxidized_copper_pillar'
}

global.waxOnMap = {
    'kubejs:copper_pillar': 'kubejs:waxed_copper_pillar',
    'kubejs:exposed_copper_pillar': 'kubejs:waxed_exposed_copper_pillar',
    'kubejs:weathered_copper_pillar': 'kubejs:waxed_weathered_copper_pillar',
    'kubejs:oxidized_copper_pillar': 'kubejs:waxed_oxidized_copper_pillar'
}

// interactions
BlockEvents.rightClicked(event => {
    Object.keys(global.scrapableBlocksMap).forEach((value) => {
        if (event.item.hasTag('forge:tools/axes')) {
            if (event.block.id === value) {
                // damage axe
                if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
                }
                // swing hand, play sounds and transform block
                let copperProps = event.block.getProperties()
                event.player.swing(event.hand, true)
                event.level.spawnParticles('minecraft:scrape', true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.4, 0.4, 0.4, 25, 0.3)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:item.axe.scrape', 'players', 1, 1)
                event.block.set(global.scrapableBlocksMap[event.block.id], copperProps)
            }  
        }
    })
    Object.keys(global.waxOffMap).forEach((value) => {
        if (event.item.hasTag('forge:tools/axes')) {
            if (event.block.id === value) {
                // damage axe
                if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
                }
                // swing hand, play sounds and transform block
                let copperProps = event.block.getProperties()
                event.player.swing(event.hand, true)
                event.level.spawnParticles('minecraft:wax_off', true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.4, 0.4, 0.4, 25, 0.3)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:item.axe.wax_off', 'players', 1, 1)
                event.block.set(global.waxOffMap[event.block.id], copperProps)
            }  
        }
    })
    Object.keys(global.waxOnMap).forEach((value) => {
        if (event.item.id === 'minecraft:honeycomb') {
            if (event.block.id === value) {
                // reduce item
                if (!event.player.isCreative()) {
                    event.item.count --
                }
                // swing hand, play sounds and transform block
                let copperProps = event.block.getProperties()
                event.player.swing(event.hand, true)
                event.level.spawnParticles('minecraft:wax_on', true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.4, 0.4, 0.4, 25, 0.3)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:item.honeycomb.wax_on', 'players', 1, 1)
                event.block.set(global.waxOnMap[event.block.id], copperProps)
                event.server.schedule(0.0001, callback => {
                    event.player.stopUsingItem()
                })
            }  
        }
    })
})

ServerEvents.recipes(event => {
    event.shapeless('kubejs:waxed_copper_pillar', ['kubejs:copper_pillar', 'honeycomb']).id('kubejs:waxed_copper_pillar')
    event.shapeless('kubejs:waxed_exposed_copper_pillar', ['kubejs:exposed_copper_pillar', 'honeycomb']).id('kubejs:waxed_exposed_copper_pillar')
    event.shapeless('kubejs:waxed_weathered_copper_pillar', ['kubejs:weathered_copper_pillar', 'honeycomb']).id('kubejs:waxed_weathered_copper_pillar')
    event.shapeless('kubejs:waxed_oxidized_copper_pillar', ['kubejs:oxidized_copper_pillar', 'honeycomb']).id('kubejs:waxed_oxidized_copper_pillar')
})