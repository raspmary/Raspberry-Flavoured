// priority: 0

Platform.mods.kubejs.name = 'Raspberry Flavoured'

// Tool tiers
ItemEvents.toolTierRegistry (event => {
  event.add('rosegold', tier => {
    tier.uses = 896
    tier.attackDamageBonus = 2.0
    tier.speed = 12.5
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
  event.add('copper', tier => {
    tier.uses = 256
    tier.attackDamageBonus = 2.0
    tier.speed = 5.5
    tier.level = 1
    tier.enchantmentValue = 5
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
})

// Fluids
StartupEvents.registry('fluid', event => 
{
    event.create('cake_batter').displayName('Cake Batter').stillTexture('kubejs:fluid/cake_batter_still').flowingTexture('kubejs:fluid/cake_batter_flow').noBlock()
	event.create('flaxen_cheese').displayName('Flaxen Cheese').stillTexture('kubejs:fluid/flaxen_cheese_still').flowingTexture('kubejs:fluid/flaxen_cheese_flow')
	event.create('scarlet_cheese').displayName('Scarlet Cheese').stillTexture('kubejs:fluid/scarlet_cheese_still').flowingTexture('kubejs:fluid/scarlet_cheese_flow')
	event.create('butterscotch').displayName('Butterscotch').stillTexture('kubejs:fluid/butterscotch_still').flowingTexture('kubejs:fluid/butterscotch_flow').noBlock()
})

StartupEvents.registry('item', event => {
// Tools
	event.create('rose_gold_knife', 'farmersdelight:knife').displayName('Rose Gold Knife').tier('rosegold').attackDamageBaseline(1.5).speedBaseline(-2.0)
	event.create('copper_knife', 'farmersdelight:knife').displayName('Copper Knife').tier('copper').attackDamageBaseline(0).speedBaseline(-2.0)
// Items
	event.create('raw_ammonite').displayName('Ammonite')
	event.create('soul_salt').displayName('Soul Salt')
	event.create('oats').displayName('Oats')
	event.create('corn_flour').displayName('Corn Flour').group('misc')
	event.create('charcoal_lump').displayName('Lump of Charcoal').burnTime(200).group('misc')
// Food & drinks
	event.create('spoiled_carrot').displayName('Spoiled Carrot').group('food').food(food => {
		food
    		.hunger(1)
    		.saturation(0.4)
			.effect('blindness', 900, 0, 0.5)
        	})
	event.create('cinnamon').displayName('Cinnamon').food(food => {
		food
			.effect('kubejs:coughing', 100, 0, 100)
			.alwaysEdible()
        	})
	event.create('cinnamon_roll').displayName('Cinnamon Roll').food(food => {
		food
    		.hunger(6)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 3000, 0, 100)
        	})
	event.create('sugar_cookie').displayName('Sugar Cookie').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('cinnamon_cracker').displayName('Cinnamon Cracker').food(food => {
		food
    		.hunger(2)
    		.saturation(0.9)
			.fastToEat()
        	})
	event.create('candy_cane').displayName('Peppermint Candy Cane').rarity('uncommon').food(food => {
		food
    		.hunger(2)
    		.saturation(0.3)
			.effect('neapolitan:sugar_rush', 200, 0, 100)
			.alwaysEdible()
			.fastToEat()
        	})
	event.create('caramelized_marshmellow_on_a_stick').displayName('Caramelized Marshmallows on a Stick').maxStackSize(16).food(food => {
		food
    		.hunger(6)
			.saturation(0.4)
			.effect('farmersdelight:comfort', 1800, 0, 100)
			.alwaysEdible()
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:stick')
        	})
        	})
	event.create('butterscotch_cinnamon_pie_slice').displayName('Butterscotch Cinnamon Pie Slice').food(food => {
		food
    		.hunger(3)
    		.saturation(0.65)
			.effect('speed', 1200, 0, 100)
			.effect('farmersdelight:comfort', 6000, 0, 100)
			.fastToEat()
        	})
	event.create('kipper_sandwich').displayName('Kipper Sandwich').food(food => {
		food
    		.hunger(10)
    		.saturation(0.5)
			.effect('water_breathing', 1200, 0, 100)
			.effect('brewinandchewin:satisfaction', 1800, 0, 100)
        	})
	event.create('preserved_skewer').displayName('Preserved Skewer').food(food => {
		food
    		.hunger(6)
    		.saturation(0.6)
			.effect('water_breathing', 600, 0, 100)
        	})
	event.create('corn_fritters').displayName('Corn Fritters').food(food => {
		food
    		.hunger(5)
    		.saturation(0.7)
			.fastToEat()
        	})
	event.create('bass_slice').displayName('Raw Bass Slice').food(food => {
		food
    		.hunger(1)
    		.saturation(0.1)
			.fastToEat()
        	})
	event.create('cooked_bass_slice').displayName('Cooked Bass Slice').food(food => {
		food
    		.hunger(2)
    		.saturation(0.55)
			.fastToEat()
        	})
	event.create('bass_roll').displayName('Bass Roll').food(food => {
		food
    		.hunger(7)
    		.saturation(0.6)
        	})
	event.create('crab_meat').displayName('Raw Crab Meat').food(food => {
		food
    		.hunger(2)
    		.saturation(0.2)
        	})
	event.create('oat_bar').displayName('Oat Bar').food(food => {
		food
    		.hunger(5)
    		.saturation(0.65)
			.effect('neapolitan:agility', 300, 0, 100)
        	})
	event.create('prickly_pear_tart').displayName('Prickly Pear Tart').food(food => {
		food
    		.hunger(7)
    		.saturation(0.5)
			.effect('farmersdelight:comfort', 3000, 0, 100)
        	})
	event.create('butterscotch_vanilla_ice_cream').displayName('Butterscotch Vanilla Ice Cream').maxStackSize(16).rarity('uncommon').food(food => {
		food
    		.hunger(7)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 100, 0, 70)
			.effect('farmersdelight:comfort', 900, 0, 100)
			.effect('neapolitan:vanilla_scent', 400, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('oatmeal').displayName('Oatmeal').maxStackSize(16).food(food => {
		food
    		.hunger(5)
    		.saturation(0.5)
			.effect('farmersdelight:comfort', 600, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('squid_stir_fry').displayName('Squid Stir Fry').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.6)
			.effect('farmersdelight:nourishment', 2400, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('bacon_and_fried_corn').displayName('Bacon and Fried Corn').maxStackSize(16).food(food => {
		food
    		.hunger(9)
    		.saturation(0.85)
			.effect('farmersdelight:nourishment', 2400, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('turkey_chowder').displayName('Turkey Chowder').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.7)
			.effect('farmersdelight:nourishment', 4800, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('pasta_with_turkey').displayName('Turkey Pasta').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.65)
			.effect('farmersdelight:nourishment', 5400, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('chevon_and_potatoes').displayName('Chevon and Potatoes').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.5)
			.effect('farmersdelight:nourishment', 2400, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('goat_noodle_soup').displayName('Goat Noodle Soup').maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.95)
			.effect('farmersdelight:comfort', 6000, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('cinnamon_mint_curry').displayName('Cinnamon Mint Curry').maxStackSize(16).food(food => {
		food
    		.hunger(10)
    		.saturation(0.7)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
			.effect('neapolitan:berserking', 900, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('eggplant_parmesan').displayName('Plate of Eggplant Parmesan').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(11)
    		.saturation(0.7)
			.effect('farmersdelight:nourishment', 6000, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('prismatic_ice_cream').displayName('Prismatic Ice Cream').containerItem('minecraft:bowl').maxStackSize(16).food(food => {
		food
    		.hunger(12)
    		.saturation(0.4)
			.effect('neapolitan:agility', 1000, 0, 100)
			.effect('neapolitan:harmony', 400, 0, 100)
			.effect('neapolitan:berserking', 1200, 0, 100)
			.effect('cofh_core:chilled', 140, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:bowl')
        	})
        	})
	event.create('smore').displayName("Marshmallow Sandwich").food(food => {
		food
    		.hunger(6)
    		.saturation(0.7)
			.effect('farmersdelight:comfort', 2700, 0, 100)
        	})
	event.create('neapolitan_ice_cream_sandwich').displayName("Neapolitan Ice Cream Sandwich").maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('instant_health', 1, 0, 100)
			.effect('neapolitan:sugar_rush', 1200, 1, 100)
			.effect('neapolitan:vanilla_scent', 1200, 0, 100)
        	})
	event.create('respiteful_ice_cream_sandwich').displayName("Respiteful Ice Cream Sandwich").maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('respiteful:vitality', 1800, 0, 100)
			.effect('respiteful:tenacity', 1800, 0, 100)
			.effect('respiteful:maturity', 1800, 0, 100)
        	})
	event.create('prismatic_ice_cream_sandwich').displayName("Prismatic Ice Cream Sandwich").maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('cofh_core:chilled', 60, 0, 100)
			.effect('neapolitan:agility', 1600, 0, 100)
			.effect('neapolitan:harmony', 900, 0, 100)
			.effect('neapolitan:berserking', 1900, 0, 100)
        	})
	event.create('cactus_juice').displayName('Cactus Juice').containerItem('minecraft:glass_bottle').maxStackSize(16).food(food => {
		food
    		.hunger(3)
    		.saturation(0.4)
    		.effect('windswept:thorns', 600, 0, 100)
			.alwaysEdible()
			.eaten(ctx => {
        		ctx.player.giveInHand('minecraft:glass_bottle')
        	})
        	})
		.useAnimation("drink")
	event.create('soulstice_sake').displayName('Soulstice Sake').maxStackSize(16).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('slow_falling', 3300, 0, 100)
			.effect('upgrade_aquatic:restfulness', 1, 1, 100)
			.alwaysEdible()
			.eaten(ctx => {
        		ctx.player.giveInHand('brewinandchewin:tankard')
        	})
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy (5:00)")
        .tooltip("§9Slow Falling (2:45)")
		.tooltip("§9Restfulness II")
	event.create('buzzing_bourbon').displayName('Buzzing Bourbon').maxStackSize(16).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('buzzier_bees:sunny', 9000, 0, 100)
			.effect('upgrade_aquatic:vibing', 3600, 0, 100)
			.alwaysEdible()
			.eaten(ctx => {
        		ctx.player.giveInHand('brewinandchewin:tankard')
        	})
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy (5:00)")
        .tooltip("§9Sunny (7:30)")
		.tooltip("§9Vibing (3:00)")
	event.create('prickly_gin').displayName('Prickly Gin').maxStackSize(16).food(food => {
		food
    		.effect('brewinandchewin:tipsy', 6000, 1, 100)
			.effect('windswept:thorns', 9000, 0, 100)
			.alwaysEdible()
			.eaten(ctx => {
        		ctx.player.giveInHand('brewinandchewin:tankard')
        	})
        	})
		.useAnimation("drink")
		.tooltip("§cTipsy II (5:00)")
        .tooltip("§9Thorns (7:30)")
	
	event.create('bar_of_black_chocolate').displayName('Bar of Dark Chocolate').food(food => {
		food
    		.hunger(6)
    		.saturation(0.3)
			.effect('atmospheric:persistence', 1200, 1, 100)
        	})
	event.create('black_chocolate_glazed_berries').displayName('Dark Chocolate Berries').food(food => {
		food
    		.hunger(7)
    		.saturation(0.7)
			.effect('atmospheric:persistence', 1200, 1, 100)
        	})
	event.create('black_chocolate_glazed_marshmallow').displayName('Dark Chocolate Marshmallows').food(food => {
		food
    		.hunger(5)
    		.saturation(0.5)
			.effect('atmospheric:persistence', 1200, 1, 100)
			.alwaysEdible()
        	})
	event.create('bar_of_white_chocolate').displayName('Bar of White Chocolate').food(food => {
		food
    		.hunger(4)
    		.saturation(0.4)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
        	})
	event.create('white_chocolate_glazed_berries').displayName('White Chocolate Berries').food(food => {
		food
    		.hunger(5)
    		.saturation(0.7)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
        	})
	event.create('white_chocolate_glazed_marshmallow').displayName('White Chocolate Marshmallows').food(food => {
		food
    		.hunger(3)
    		.saturation(0.5)
			.effect('upgrade_aquatic:restfulness', 1, 0, 100)
			.alwaysEdible()
        	})
})
// Blocks
StartupEvents.registry('block', event => {
	event.create('wheat_flour_bag').soundType('wool').hardness(0.8).displayName('Bag of Flour').tagBlock('farmersdelight:mineable/knife')
	event.create('gingerbread_block').hardness(1).displayName('Gingerbread Block').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('gingerbread_bricks').hardness(1).displayName('Gingerbread Bricks').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('lead_ore').material('stone').hardness(3).displayName('Lead Ore').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('copper_block').soundType('copper').hardness(3).displayName('Block of Copper').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('dark_chocolate_block').hardness(2).displayName('Block of Dark Chocolate').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement').hardness(2).displayName('Dark Chocolate Pavement').tagBlock('minecraft:mineable/axe')
	event.create('chiseled_dark_chocolate_pavement').hardness(2).displayName('Chiseled Dark Chocolate Pavement').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_slab', 'slab').hardness(2).displayName('Dark Chocolate Pavement Slab').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_stairs', 'stairs').hardness(2).displayName('Dark Chocolate Pavement Stairs').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_pavement_wall', 'wall').hardness(2).displayName('Dark Chocolate Pavement Wall').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tiles').hardness(2).displayName('Dark Chocolate Tiles').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_slab', 'slab').hardness(2).displayName('Dark Chocolate Tile Slab').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_stairs', 'stairs').hardness(2).displayName('Dark Chocolate Tile Stairs').tagBlock('minecraft:mineable/axe')
	event.create('dark_chocolate_tile_wall', 'wall').hardness(2).displayName('Dark Chocolate Tile Wall').tagBlock('minecraft:mineable/axe')
	
	event.create('white_chocolate_block').hardness(2).displayName('Block of White Chocolate').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement').hardness(2).displayName('White Chocolate Pavement').tagBlock('minecraft:mineable/axe')
	event.create('chiseled_white_chocolate_pavement').hardness(2).displayName('Chiseled White Chocolate Pavement').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_slab', 'slab').hardness(2).displayName('White Chocolate Pavement Slab').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_stairs', 'stairs').hardness(2).displayName('White Chocolate Pavement Stairs').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_pavement_wall', 'wall').hardness(2).displayName('White Chocolate Pavement Wall').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tiles').hardness(2).displayName('White Chocolate Tiles').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_slab', 'slab').hardness(2).displayName('White Chocolate Tile Slab').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_stairs', 'stairs').hardness(2).displayName('White Chocolate Tile Stairs').tagBlock('minecraft:mineable/axe')
	event.create('white_chocolate_tile_wall', 'wall').hardness(2).displayName('White Chocolate Tile Wall').tagBlock('minecraft:mineable/axe')
	
	event.create('stuffed_pumpkin_two', 'farmersdelight:feast').servingItems('farmersdelight:stuffed_pumpkin').hasLeftovers(false).displayName('Stuffed Pumpkin 2')
	event.create('eggplant_parmesan_block', 'farmersdelight:feast').servingItems('kubejs:eggplant_parmesan').hasLeftovers(true).box(0, 0, 0, 16, 5, 16, true).displayName('Eggplant Parmesan')
	
	event.create('butterscotch_cinnamon_pie', 'farmersdelight:pie').soundType('wool').sliceItem('kubejs:butterscotch_cinnamon_pie_slice').displayName('Butterscotch Cinnamon Pie').tagBlock('farmersdelight:mineable/knife')
})

BlockEvents.modification(event => {
// Block blast resistance
  event.modify('oreganized:silver_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('oreganized:deepslate_silver_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_coal_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_iron_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_copper_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_gold_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_redstone_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_emerald_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_lapis_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('minecraft:deepslate_diamond_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('create:deepslate_zinc_ore', block => {
    block.explosionResistance = 1200
  })
  event.modify('oreganized:deepslate_lead_ore', block => {
    block.explosionResistance = 1200
  })
  // Tool requirement
  event.modify('quark:dirt_bricks', block => {
    block.requiresTool = false
  })
  event.modify('quark:dirt_bricks_slab', block => {
    block.requiresTool = false
  })
  event.modify('quark:dirt_bricks_stairs', block => {
    block.requiresTool = false
  })
  event.modify('quark:dirt_bricks_wall', block => {
    block.requiresTool = false
  })
})

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
	
	event.modify('minecraft:golden_carrot', item => {
        item.rarity = 'uncommon'
    })
	event.modify('supplementaries:candy', item => {
        item.rarity = 'uncommon'
    })
	event.modify('create_confectionery:candy_cane_block', item => {
        item.rarity = 'uncommon'
    })
	event.modify('minecraft:glistering_melon_slice', item => {
        item.rarity = 'uncommon'
    })
	event.modify('atmospheric:shimmering_passionfruit', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:butterscotch_cinnamon_pie', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:butterscotch_cinnamon_pie_slice', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:gingerbread_block', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:gingerbread_bricks', item => {
        item.rarity = 'uncommon'
    })
	event.modify('minecraft:bell', item => {
        item.rarity = 'uncommon'
    })
	event.modify('create:peculiar_bell', item => {
        item.rarity = 'uncommon'
    })
	event.modify('create:haunted_bell', item => {
        item.rarity = 'rare'
    })
	event.modify('minecraft:disc_fragment_5', item => {
        item.rarity = 'rare'
    })
	
	event.modify('minecraft:potion', item => {
		item.craftingRemainder = Item.of('minecraft:glass_bottle').item
	})
	event.modify('ecologics:coconut_slice', item => {
		item.craftingRemainder = Item.of('ecologics:coconut_husk').item
	})
})