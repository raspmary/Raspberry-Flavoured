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
	event.create('ink').stillTexture('kubejs:fluid/ink_still').flowingTexture('kubejs:fluid/ink_flow')
	event.create('latex').stillTexture('kubejs:fluid/latex_still').flowingTexture('kubejs:fluid/latex_flow')
	event.create('cooking_oil').stillTexture('kubejs:fluid/cooking_oil_still').flowingTexture('kubejs:fluid/cooking_oil_flow')
	
	event.create('butter').stillTexture('kubejs:fluid/butter_still').flowingTexture('kubejs:fluid/butter_flow').noBucket().noBlock()
	event.create('coleslaw').stillTexture('kubejs:fluid/coleslaw').flowingTexture('kubejs:fluid/coleslaw').noBucket().noBlock()
	event.create('blazing_chili').stillTexture('kubejs:fluid/blazing_chili').flowingTexture('kubejs:fluid/blazing_chili').noBucket().noBlock()
	event.create('strawberry_banana_smoothie').stillTexture('kubejs:fluid/strawberry_banana_smoothie_still').flowingTexture('kubejs:fluid/strawberry_banana_smoothie_flow').noBucket().noBlock()
	event.create('avocado_lemon_smoothie').stillTexture('kubejs:fluid/avocado_lemon_smoothie_still').flowingTexture('kubejs:fluid/avocado_lemon_smoothie_flow').noBucket().noBlock()
	event.create('cherry_cream_soda').stillTexture('kubejs:fluid/cherry_cream_soda_still').flowingTexture('kubejs:fluid/cherry_cream_soda_flow').noBucket().noBlock()
	
	event.create('cactus_juice').thinTexture(0x4B8C37).noBucket().noBlock()
	event.create('lemonade').thinTexture(0xF9F93B).noBucket().noBlock()
	event.create('mint_green_tea').thinTexture(0x6BCF87).noBucket().noBlock()
	event.create('vanilla_milk_tea').thinTexture(0xD3A872).noBucket().noBlock()
	event.create('pickerelweed_juice').thinTexture(0x519991).noBucket().noBlock()
	
	// don't ask
	event.create('wooden_pickaxe').stillTexture('kubejs:fluid/wooden_pickaxe').flowingTexture('kubejs:fluid/wooden_pickaxe')
})

ItemEvents.modification(event => {
// Fuel (fuel amount is x * 200)
	// 0.5 
	event.modify([
	'environmental:tall_dead_bush'
	], item => {
		item.burnTime = 100
    })
	
	// 1
	event.modify([
	'twigs:twig'
	], item => {
		item.burnTime = 200
    })
	
	// 1.25
	event.modify([
	'minecraft:torch',
	'minecraft:soul_torch',
	'endergetic:ender_torch',
	'caverns_and_chasms:cupric_torch'
	], item => {
		item.burnTime = 250
    })
	
	// 1.5
	event.modify([
	'raspberry:charred_marshmallow_on_a_stick'
	], item => {
		item.burnTime = 300
    })
	
	// 3
	event.modify([
	'minecraft:campfire',
	'minecraft:soul_campfire',
	'endergetic:ender_campfire',
	'caverns_and_chasms:cupric_campfire',
	'mynethersdelight:bullet_pepper',
	'mynethersdelight:magma_cake_slice'
	], item => {
		item.burnTime = 600
    })
	
	// 4
	event.modify([
	'minecraft:mushroom_stem',
	'quark:glow_shroom_stem',
	'minecraft:blaze_powder',
	'mynethersdelight:hot_cream_cone',
	'architects_palette:charcoal_block',
	'kubejs:charred_wood'
	], item => {
		item.burnTime = 800
    })
	
	// 4.5
	event.modify([
	'kubejs:heating_cask'
	], item => {
		item.burnTime = 900
    })
	
	// 8
	event.modify('modestmining:coke_chunk', item => {
		item.burnTime = 1600
    })
	
	// 12
	event.modify([
	'atmospheric:large_kousa_boat',
	'mynethersdelight:hot_cream'
	], item => {
		item.burnTime = 2400
    })
	
	// 21
	event.modify([
	'raspberry:magma_cake'
	], item => {
		item.burnTime = 4200
    })
	
	// 30
	event.modify('mynethersdelight:bullet_pepper_crate', item => {
		item.burnTime = 6000
    })
	
	// 64
	event.modify('modestmining:coke', item => {
		item.burnTime = 12800
    })
	
	// 640
	event.modify('modestmining:coke_block', item => {
		item.burnTime = 128000
    })
	
// Rarity
	// Common items
	event.modify([
	'supplementaries:quiver',
	'supplementaries:bomb',
	'supplementaries:bomb_projectile',
	'oreganized:silver_mirror',
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
	'clash:spear',
	'clash:swept_axe',
	'clash:greatblade',
	'mace_backport:mace',
	'kubejs:rose_gold_rapier',
	'spelunkery:portal_fluid_bucket',
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
	'kubejs:sunken_exopearl',
	'kubejs:arcane_exopearl',
	'kubejs:warded_exopearl',
	'moyai:moyai',
	'minecraft:piglin_banner_pattern',
	'heart_crystals:heart_crystal_shard',
	'heart_crystals:heart_banner_pattern',
	'kubejs:golden_worm_crate'
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
	'supplementaries:bomb_blue_projectile',
	'additionaladditions:gilded_netherite_sword'
	], item => {
        item.rarity = 'rare'
    })
	
	// Epic items
	event.modify([
	'quark:monster_box',
	'minecraft:totem_of_undying',
	'savage_and_ravage:mask_of_dishonesty',
	'savage_and_ravage:conch_of_conjuring',
	'savage_and_ravage:wand_of_freezing'
	], item => {
        item.rarity = 'epic'
    })
	
// Enchantment glint
    event.modify('heart_crystals:heart_crystal', item => {
        const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")
        const builder = new ItemBuilder("heart_crystals:heart_crystal").glow(true);
        item.setItemBuilder(builder);
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
	event.modify('kubejs:coleslaw', item => {
		item.craftingRemainder = Item.of('minecraft:bowl').item
	})
	event.modify('raspberry:marshmallow_on_a_stick', item => {
		item.craftingRemainder = Item.of('minecraft:stick').item
	})
	event.modify('raspberry:caramelized_marshmallow_on_a_stick', item => {
		item.craftingRemainder = Item.of('minecraft:stick').item
	})
	event.modify('raspberry:charred_marshmallow_on_a_stick', item => {
		item.craftingRemainder = Item.of('minecraft:stick').item
	})
	event.modify('ecologics:coconut_slice', item => {
		item.craftingRemainder = Item.of('ecologics:coconut_husk').item
	})
	event.modify('spelunkery:portal_fluid_bottle', item => {
		item.craftingRemainder = Item.of('minecraft:glass_bottle').item
	})
	event.modify('spelunkery:portal_fluid_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_copper_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_zinc_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_lead_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_iron_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_gold_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_silver_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_rose_gold_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_bronze_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_brass_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_steel_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_electrum_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_necromium_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('raspberry:molten_netherite_bucket', item => {
		item.craftingRemainder = Item.of('minecraft:bucket').item
	})
	event.modify('berry_good:glowgurt', item => {
		item.craftingRemainder = Item.of('minecraft:bowl').item
	})
	event.modify('farmersdelight:bone_broth', item => {
		item.craftingRemainder = Item.of('minecraft:bowl').item
	})
	event.modify('brewinandchewin:rice_wine', item => {
		item.craftingRemainder = Item.of('brewinandchewin:tankard').item
	})
	
	event.modify('minecraft:beetroot_soup', item => {
		item.craftingRemainder = null
	})
})
// Enchantments
StartupEvents.registry('enchantment', event => {
	// used exclusively on rose gold rapiers
    event.create('rose_lifesteal')
        .postAttack(
            (user, target, level) => {
                user.health += 1
            })
	// reduces targets' invulnerability timer
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
    event.create('alone').width(32).height(48)
    event.create('apple').width(16).height(16)
    event.create('betrayal').width(48).height(64)
    event.create('carpitalism').width(16).height(16)
    event.create('civilization').width(48).height(64)
    event.create('epiphany').width(32).height(32)
    event.create('fool_me_twice').width(48).height(64)
    event.create('four_pixels').width(48).height(32)
    event.create('grimbly').width(64).height(64)
    event.create('investigation').width(64).height(64)
    event.create('miniature').width(48).height(48)
    event.create('mirror_mirror').width(32).height(32)
    event.create('ride_fast').width(64).height(64)
    event.create('six_months').width(48).height(32)
    event.create('sun').width(48).height(48)
    event.create('white_eyes').width(64).height(48)
})

// Custom eyes of ender
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')
StartupEvents.registry('entity_type', event => {
    event.create('spirited_exopearl', "minecraft:eye_of_ender")
	.renderScale(0.45, 0.45, 0.45)
	.textureLocation(entity => {
        return "kubejs:textures/item/spirited_exopearl.png"
    })
    .item(item => {
        item.signalTo(context => {
            const { level, player, hand } = context
            let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:spirited_exopearl_located')
            let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
            return foundPos == null ? player.blockPosition() : foundPos
        })
    })
    event.create('sunken_exopearl', "minecraft:eye_of_ender")
	.renderScale(0.45, 0.45, 0.45)
	.textureLocation(entity => {
        return "kubejs:textures/item/sunken_exopearl.png"
    })
    .item(item => {
        item.signalTo(context => {
            const { level, player, hand } = context
            let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:sunken_exopearl_located')
            let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
            return foundPos == null ? player.blockPosition() : foundPos
        })
    })
    event.create('arcane_exopearl', "minecraft:eye_of_ender")
	.renderScale(0.45, 0.45, 0.45)
	.textureLocation(entity => {
        return "kubejs:textures/item/arcane_exopearl.png"
    })
    .item(item => {
        item.signalTo(context => {
            const { level, player, hand } = context
            let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:arcane_exopearl_located')
            let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
            return foundPos == null ? player.blockPosition() : foundPos
        })
    })
    event.create('warded_exopearl', "minecraft:eye_of_ender")
	.renderScale(0.45, 0.45, 0.45)
	.textureLocation(entity => {
        return "kubejs:textures/item/warded_exopearl.png"
    })
    .item(item => {
        item.signalTo(context => {
            const { level, player, hand } = context
            let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:warded_exopearl_located')
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
    event.createCustom('kubejs:silk_touch', () => new $RangedAttribute("Silk Touch", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:draining_touch', () => new $RangedAttribute("Draining Touch", 0, 0, 30).setSyncable(true))
    event.createCustom('kubejs:heat_touch', () => new $RangedAttribute("Heat Touch", 0, 0, 30).setSyncable(true))
})