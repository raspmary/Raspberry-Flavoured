// priority: 0

// setting the mobs that can be sheared for feathers
const featheryFucks = ['minecraft:chicken', 'environmental:duck']

// shearing chickens and ducks
ItemEvents.entityInteracted(event => {
    if (event.item.hasTag('forge:shears') && featheryFucks.includes(event.target.type) && !event.target.health == 0 && !event.target.isBaby()) {
        // swing hand, damage item, shear sound and damage mob
		event.player.swing(event.hand, true)
        event.player.damageHeldItem(event.hand, 1)
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.sheep.shear', 'players', 1, 1)
        event.server.runCommandSilent(`particle supplementaries:feather ${event.target.x} ${event.target.y+0.5} ${event.target.z} 0.2 0 0.2 0.05 3 force`)
		event.target.attack(1)
		event.target.invulnerableTime = 0

        // set item, spawn it
        let itemEntity = event.level.createEntity("item")
        itemEntity.item = ('minecraft:feather')
        itemEntity.y = event.target.y + 0.5
        itemEntity.x = event.target.x
        itemEntity.z = event.target.z
        itemEntity.motionY = 0.27
        itemEntity.spawn()
    }
})

// shearing turkeys
ItemEvents.entityInteracted(event => {
    if (event.item.hasTag('forge:shears') && event.target.type == "autumnity:turkey" && !event.target.health == 0 && !event.target.isBaby()) {
        // swing hand, damage item, shear sound and damage & anger turkey
		event.player.swing(event.hand, true)
        event.player.damageHeldItem(event.hand, 1)
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.sheep.shear', 'players', 1, 1)
        event.server.runCommandSilent(`particle supplementaries:feather ${event.target.x} ${event.target.y+0.75} ${event.target.z} 0.2 0 0.2 0.075 3 force`)
		event.target.attack(1)
		event.target.invulnerableTime = 0
		if (!event.player.isCreative()) {
			event.target.mergeNbt({AngerTime:600})
			event.target.setTarget(event.player)
		}

        // set item, spawn it
        let itemEntity = event.level.createEntity("item")
        itemEntity.item = ('minecraft:feather')
        itemEntity.y = event.target.y + 0.5
        itemEntity.x = event.target.x
        itemEntity.z = event.target.z
        itemEntity.motionY = 0.28
        itemEntity.spawn()
    }
})

// shearing bears
ItemEvents.entityInteracted(event => {
    if (event.item.id === "ecologics:crab_claw" && event.target.type == "naturalist:bear") {
        event.player.swing(event.hand, true)
        if (event.target.nbt.Sheared == 0 && !event.target.isBaby()) {
            // damage item, shear sound, set bear to sheared and make it angry
            event.player.damageHeldItem(event.hand, 1)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.sheep.shear', 'players', 1, 1)
			event.target.mergeNbt({Sheared:1})
            if (!event.player.isCreative()) {
				event.target.mergeNbt({AngerTime:600})
				event.target.setTarget(event.player)
			}
			
			// minimum and maximum amount of fur drops
			let furMax = 3
			let furMin = 1
			
			// spawn fur
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('naturalist:bear_fur')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.item.count = Math.floor(Math.random() * (furMax - furMin + 1) + furMin)
			itemEntity.motionY = 0.36
			itemEntity.spawn()
        }
    }
})

// taming ocelots
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food' && event.target.type === 'minecraft:ocelot') {
		event.player.swing(event.hand, true)

        if (event.target.nbt.Trusting == 1) {
		    if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:bowl')
            }

            const catVars = [
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
            const random = Math.floor(Math.random() * catVars.length)

            let ocelotData = event.target.nbt
            delete ocelotData.UUID

            event.server.runCommandSilent(`particle minecraft:heart ${event.target.x} ${event.target.y} ${event.target.z} 0.5 0.25 0.5 0.125 5 force`)

            let cat = event.player.level.getBlock(event.target.x, event.target.y, event.target.z).createEntity("cat")
            cat.mergeNbt(ocelotData)
            cat.mergeNbt({Owner: event.player.stringUuid})
            cat.mergeNbt({VariantID: catVars[random]})
            cat.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
            cat.spawn()
            event.target.discard()
        }
    }
})

// feeding cat food
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food') {
        if (event.target.type === 'minecraft:cat') {
		event.player.swing(event.hand, true)
        if (!event.player.isCreative()) {
            event.item.count --
            event.player.giveInHand('minecraft:bowl')
        }
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.generic.eat', 'players', 1, 1)
        event.server.runCommandSilent(`particle farmersdelight:star ${event.target.x} ${event.target.y+0.5} ${event.target.z} 0.2 0 0.2 0.05 4 force`)
        event.target.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
        }
    }
})

// loot bag item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'kubejs:loot_bag') {
	// remove one loot bag if the player isnt in creative
		if (!event.player.isCreative()) {
		event.item.count --
		}
		// swing arm, play the bundle sound and spawn loot
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'item.bundle.drop_contents', 'players', 1, 1)
		event.server.runCommandSilent(`execute as ${event.entity.username} run loot spawn ${event.player.x} ${event.player.y+0.2} ${event.player.z} loot additionaladditions:mysterious_bundle`)
    }
})

// recovery compass item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'minecraft:recovery_compass') {
		event.player.swing(event.hand, true)
        // "event.player.x.toFixed(3)" and "event.player.z.toFixed(3)" are the player's X and Z coords cut off at 3 decimals, like how caverns and chasms does it
		event.player.displayClientMessage('Latitude: ' + event.player.x.toFixed(3) + ', Longitude: ' + event.player.z.toFixed(3), true)
    }
})

// custom right click on block with water bottle interactions
BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.wateringMap = {
        'minecraft:sand': 'minecraft:clay'
    }
    Object.keys(global.wateringMap).forEach((value) => {
        // set what item tills
        if (event.item.id === 'minecraft:potion' && event.item.nbt.Potion == 'minecraft:water') {
            if (event.block.id === value) {
                event.server.schedule(2, callback => {
                    event.player.stopUsingItem()
                })
                // remove the water from the player's hand and give back an empty bottle if theyre not in creative
                if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:glass_bottle')
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.empty', 'players', 1, 1)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.generic.splash', 'players', 1, 1)
                event.block.set(global.wateringMap[event.block.id])
            }  
        }
    })
})

// right click on water interaction (WIP)
ItemEvents.rightClicked(event => {
    // check held item
    if (event.item.id === 'minecraft:barrier') {
        // check player looking at water
        if (event.player.rayTrace().block.id === 'minecraft:water') {
            // subtract held item if not in creative, play bottle fill sound, give result item
            if (!event.player.isCreative()) {
                event.item.count --
            }
            event.player.swing(event.hand, true)
            event.server.runCommandSilent(`playsound minecraft:item.bottle.fill block @p ${event.player.rayTrace().block.x} ${event.player.rayTrace().block.y} ${event.player.rayTrace().block.z}`)
            event.player.giveInHand('minecraft:structure_void')
        } 
    }
})

// EntityEvents.hurt(event => {
//     if (event.source.player.mainHandItem.id === 'kubejs:crowbar') {
//     event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'kubejs:crowbar.hit', 'players', 0.75, 1)
//     }
// })