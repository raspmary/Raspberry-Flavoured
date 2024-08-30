// priority: 0

// Tool tiers
ItemEvents.toolTierRegistry (event => {
  event.add('rosegold', tier => {
    tier.uses = 896
    tier.attackDamageBonus = 2.0
    tier.speed = 12.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = 'additionaladditions:rose_gold_alloy'
  })
  event.add('copper', tier => {
    tier.uses = 256
    tier.attackDamageBonus = 2.0
    tier.speed = 5.0
    tier.level = 1
    tier.enchantmentValue = 5
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
  event.add('bone', tier => {
    tier.uses = 128
    tier.attackDamageBonus = 2.0
    tier.speed = 3.5
    tier.level = 0
    tier.enchantmentValue = 10
    tier.repairIngredient = 'minecraft:bone'
  })
  event.add('lead', tier => {
    tier.uses = 768
    tier.attackDamageBonus = 2.0
    tier.speed = 4.75
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = 'oreganized:lead_ingot'
  })
})

// Fluids
StartupEvents.registry('fluid', event => 
{
	event.create('cake_batter').stillTexture('kubejs:fluid/cake_batter_still').flowingTexture('kubejs:fluid/cake_batter_flow')
	event.create('flaxen_cheese').stillTexture('kubejs:fluid/flaxen_cheese_still').flowingTexture('kubejs:fluid/flaxen_cheese_flow')
	event.create('scarlet_cheese').stillTexture('kubejs:fluid/scarlet_cheese_still').flowingTexture('kubejs:fluid/scarlet_cheese_flow')
	event.create('ink').stillTexture('kubejs:fluid/ink_still').flowingTexture('kubejs:fluid/ink_flow')
	event.create('wooden_pickaxe').displayName('Wooden Pickaxe Fluid').stillTexture('kubejs:fluid/wooden_pickaxe').flowingTexture('kubejs:fluid/wooden_pickaxe')
})

// Misc. item attributes
ItemEvents.modification(event => {
	event.modify('minecraft:fishing_rod', item => {
		item.burnTime = 0
    })
	event.modify('atmospheric:large_kousa_boat', item => {
		item.burnTime = 2400
    })
	event.modify('twigs:twig', item => {
		item.burnTime = 200
    })
	
	event.modify([
	'minecraft:golden_carrot',
	'create_confectionery:candy_cane_block',
	'minecraft:glistering_melon_slice',
	'atmospheric:shimmering_passionfruit',
	'minecraft:golden_apple',
	'minecraft:bell',
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
	'heartstone:heartstone'
	], item => {
        item.rarity = 'uncommon'
    })
	event.modify([
	'create:haunted_bell',
	'minecraft:disc_fragment_5',
	'minecraft:trident',
	'minecraft:globe_banner_pattern'
	], item => {
        item.rarity = 'rare'
    })
	
	event.modify('minecraft:potion', item => {
		item.craftingRemainder = Item.of('minecraft:glass_bottle').item
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
                if (user.health < 12) {
                    user.health += 1
                }
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
    event.create('apple').width(16).height(16).tag('minecraft:placeable')
    event.create('betrayal').width(48).height(64).tag('minecraft:placeable')
    event.create('carpitalism').width(16).height(16).tag('minecraft:placeable')
    event.create('epiphany').width(32).height(32).tag('minecraft:placeable')
    event.create('fool_me_twice').width(48).height(64).tag('minecraft:placeable')
    event.create('four_pixels').width(48).height(32).tag('minecraft:placeable')
    event.create('investigation').width(64).height(64).tag('minecraft:placeable')
    event.create('six_months').width(48).height(32).tag('minecraft:placeable')
    event.create('sun').width(48).height(48).tag('minecraft:placeable')
    event.create('white_eyes').width(64).height(48).tag('minecraft:placeable')
})