// priority: 0

// Tool tiers
ItemEvents.toolTierRegistry (event => {
  event.add('rosegold', tier => {
    tier.uses = 1000
    tier.attackDamageBonus = 2.0
    tier.speed = 12.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = '#raspberry_flavoured:rose_gold_repair_materials'
  })
  event.add('copper', tier => {
    tier.uses = 350
    tier.attackDamageBonus = 2.0
    tier.speed = 5.0
    tier.level = 1
    tier.enchantmentValue = 5
    tier.repairIngredient = '#raspberry_flavoured:copper_repair_materials'
  })
  event.add('bone', tier => {
    tier.uses = 150
    tier.attackDamageBonus = 2.0
    tier.speed = 3.5
    tier.level = 0
    tier.enchantmentValue = 10
    tier.repairIngredient = '#raspberry_flavoured:bone_repair_materials'
  })
})

// Fluids
StartupEvents.registry('fluid', event => 
{
	event.create('batter').stillTexture('kubejs:fluid/batter_still').flowingTexture('kubejs:fluid/batter_flow')
	event.create('flaxen_cheese').stillTexture('kubejs:fluid/flaxen_cheese_still').flowingTexture('kubejs:fluid/flaxen_cheese_flow')
	event.create('scarlet_cheese').stillTexture('kubejs:fluid/scarlet_cheese_still').flowingTexture('kubejs:fluid/scarlet_cheese_flow')
	event.create('ink').stillTexture('kubejs:fluid/ink_still').flowingTexture('kubejs:fluid/ink_flow')
	event.create('latex').stillTexture('kubejs:fluid/latex_still').flowingTexture('kubejs:fluid/latex_flow')
	event.create('cooking_oil').stillTexture('kubejs:fluid/cooking_oil_still').flowingTexture('kubejs:fluid/cooking_oil_flow')
	event.create('strawberry_banana_smoothie').stillTexture('kubejs:fluid/strawberry_banana_smoothie_still').flowingTexture('kubejs:fluid/strawberry_banana_smoothie_flow').noBucket().noBlock()
	event.create('cherry_cream_soda').stillTexture('kubejs:fluid/cherry_cream_soda_still').flowingTexture('kubejs:fluid/cherry_cream_soda_flow').noBucket().noBlock()
	
	event.create('cactus_juice').thinTexture(0x4B8C37).noBucket().noBlock
	event.create('lemonade').thinTexture(0xF9F93B).noBucket().noBlock()
	event.create('mint_green_tea').thinTexture(0x6BCF87).noBucket().noBlock()
	event.create('vanilla_milk_tea').thinTexture(0xD3A872).noBucket().noBlock()
	event.create('pickerelweed_juice').thinTexture(0x519991).noBucket().noBlock
	
	// don't ask
	event.create('wooden_pickaxe').displayName('Wooden Pickaxe Fluid').stillTexture('kubejs:fluid/wooden_pickaxe').flowingTexture('kubejs:fluid/wooden_pickaxe')
})

// Misc. item attributes
ItemEvents.modification(event => {
	// Burn time
	event.modify('atmospheric:large_kousa_boat', item => {
		item.burnTime = 2400
    })
	event.modify('twigs:twig', item => {
		item.burnTime = 200
    })
	event.modify('environmental:tall_dead_bush', item => {
		item.burnTime = 100
    })
	event.modify('kubejs:heating_cask', item => {
		item.burnTime = 900
    })
	event.modify('minecraft:mushroom_stem', item => {
		item.burnTime = 800
    })
	event.modify('quark:glow_shroom_stem', item => {
		item.burnTime = 800
    })
	event.modify([
	'minecraft:campfire',
	'minecraft:soul_campfire',
	'endergetic:ender_campfire',
	'caverns_and_chasms:cupric_campfire'
	], item => {
		item.burnTime = 600
    })
	event.modify([
	'minecraft:torch',
	'minecraft:soul_torch',
	'endergetic:ender_torch',
	'caverns_and_chasms:cupric_torch'
	], item => {
		item.burnTime = 250
    })
	
	// Common items
	event.modify([
	'supplementaries:quiver',
	'supplementaries:bomb',
	'supplementaries:bomb_projectile',
	'create_confectionery:candy_cane_block'
	], item => {
        item.rarity = 'common'
    })
	
	// Uncommon items
	event.modify([
	'minecraft:golden_carrot',
	'minecraft:glistering_melon_slice',
	'minecraft:ender_eye',
	'minecraft:golden_apple',
	'minecraft:bell',
	'minecraft:disc_fragment_5',
	'create:peculiar_bell',
	'oreganized:silver_mirror',
	'clash:spear',
	'clash:swept_axe',
	'clash:greatblade',
	'mace_backport:mace',
	'kubejs:rose_gold_rapier',
	'spelunkery:portal_fluid_bucket',
	'environmental:thief_hood',
	'environmental:healer_pouch',
	'environmental:architect_belt',
	'environmental:wanderer_boots',
	'quark:echorang',
	'heartstone:heartstone',
	'bigbrain:buckler',
	'quark:black_rune',
	'quark:blue_rune',
	'quark:brown_rune',
	'quark:cyan_rune',
	'quark:gray_rune',
	'quark:green_rune',
	'quark:light_blue_rune',
	'quark:light_gray_rune',
	'quark:lime_rune',
	'quark:magenta_rune',
	'quark:orange_rune',
	'quark:pink_rune',
	'quark:purple_rune',
	'quark:red_rune',
	'quark:white_rune',
	'quark:yellow_rune',
	'caverns_and_chasms:bejeweled_apple',
	'minecraft:petrified_oak_slab',
	'supplementaries:bomb_spiky',
	'supplementaries:bomb_spiky_projectile',
	'aquaculture:goldfish',
	'kubejs:spirited_exopearl',
	'moyai:moyai'
	], item => {
        item.rarity = 'uncommon'
    })
	
	// Rare items
	event.modify([
	'create:haunted_bell',
	'minecraft:trident',
	'minecraft:nether_star',
	'minecraft:globe_banner_pattern',
	'quark:rainbow_rune',
	'supplementaries:bomb_blue',
	'supplementaries:bomb_blue_projectile'
	], item => {
        item.rarity = 'rare'
    })
	
	// Epic items
	event.modify([
	'quark:monster_box'
	], item => {
        item.rarity = 'epic'
    })
	
	// Crafting remainders
	event.modify('minecraft:potion', item => {
		item.craftingRemainder = Item.of('minecraft:glass_bottle').item
	})
	event.modify('kubejs:latex_bottle', item => {
		item.craftingRemainder = Item.of('minecraft:glass_bottle').item
	})
	event.modify('kubejs:latex_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('kubejs:batter_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('kubejs:cooking_oil_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('kubejs:batter', item => {
		item.craftingRemainder = Item.of('minecraft:bowl').item
	})
	event.modify('kubejs:caramelized_marshmellow_on_a_stick', item => {
		item.craftingRemainder = Item.of('minecraft:stick').item
	})
	event.modify('ecologics:coconut_slice', item => {
		item.craftingRemainder = Item.of('ecologics:coconut_husk').item
	})
})
// Enchantments
StartupEvents.registry('enchantment', event => {
    event.create('rose_lifesteal')
        .postAttack(
            (user, target, level) => {
                user.health += 1
            })
    event.create('guard_break')
        .maxLevel(3)
        .weapon()
        .postAttack(
            (user, target, level) => {
                target.invulnerableTime -= (level)
            })
})

// Paintings
StartupEvents.registry('painting_variant', event => {
    event.create('alone').width(32).height(48).tag('minecraft:placeable')
    event.create('apple').width(16).height(16).tag('minecraft:placeable')
    event.create('betrayal').width(48).height(64).tag('minecraft:placeable')
    event.create('carpitalism').width(16).height(16).tag('minecraft:placeable')
    event.create('civilization').width(48).height(64).tag('minecraft:placeable')
    event.create('epiphany').width(32).height(32).tag('minecraft:placeable')
    event.create('fool_me_twice').width(48).height(64).tag('minecraft:placeable')
    event.create('four_pixels').width(48).height(32).tag('minecraft:placeable')
    event.create('investigation').width(64).height(64).tag('minecraft:placeable')
    event.create('miniature').width(48).height(48).tag('minecraft:placeable')
    event.create('mirror_mirror').width(32).height(32).tag('minecraft:placeable')
    event.create('six_months').width(48).height(32).tag('minecraft:placeable')
    event.create('sun').width(48).height(48).tag('minecraft:placeable')
    event.create('white_eyes').width(64).height(48).tag('minecraft:placeable')
})

// Custom eyes of ender
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')
StartupEvents.registry('entity_type', event => {
    event.create('spirited_exopearl', "minecraft:eye_of_ender")
	.renderScale(0.45, 0.45, 0.45)
        .item(item => {
            item.signalTo(context => {
                const { level, player, hand } = context
                let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:spirited_exopearl_located')
                let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
                return foundPos == null ? player.blockPosition() : foundPos
            })
        })
})

// Fake custom attributes
const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
StartupEvents.registry('attribute', event => {
    event.createCustom('kubejs:luck', () => new $RangedAttribute("Luck", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:feather_falling', () => new $RangedAttribute("Falling Protection", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:fire_protection', () => new $RangedAttribute("Fire Protection", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:projectile_protection', () => new $RangedAttribute("Projectile Protection", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:thorns', () => new $RangedAttribute("Thorns", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:fire_aspect', () => new $RangedAttribute("Fire Infliction", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:smite', () => new $RangedAttribute("Undead Damage", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:ranged_damage', () => new $RangedAttribute("Ranged Damage", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:mining_speed', () => new $RangedAttribute("Mining Speed", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:thunder_synergy', () => new $RangedAttribute("Thunder Synergy", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:aquatic_synergy', () => new $RangedAttribute("Aquatic Synergy", 0, 0, 30).setSyncable(true))
})


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
        attribute.add("minecraft:generic.max_health", 16)
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
        attribute.add("minecraft:generic.max_health", 15)
    })
    event.modify('dungeons_mobs:wraith', attribute => {
        attribute.add("minecraft:generic.max_health", 15)
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
    event.modify('minecraft:wither', attribute => {
        attribute.add("minecraft:generic.max_health", 500)
    })
	
	// Nerf movement speed
    event.modify('minecraft:stray', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
    })
    event.modify('minecraft:wither_skeleton', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.2)
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
})

EntityJSEvents.modifyEntity(event => {
	event.modify('minecraft:creeper', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('savage_and_ravage:creepie', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('caverns_and_chasms:deeper', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('caverns_and_chasms:peeper', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('dungeons_mobs:icy_creeper', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('ecologics:coconut_crab', modifier => {
		modifier.mobType('arthropod')
	})
	event.modify('naturalist:snake', modifier => {
		modifier.mobType('arthropod')
	})
})