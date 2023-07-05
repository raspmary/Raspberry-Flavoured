// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

Platform.mods.kubejs.name = 'Raspberry Flavoured'

ItemEvents.toolTierRegistry (event => {
  event.add('rosegold', tier => {
    tier.uses = 896
    tier.attackDamageBonus = 2.0
    tier.speed = 6.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = 'minecraft:air'
  })
})
ItemEvents.toolTierRegistry (event => {
  event.add('copper', tier => {
    tier.uses = 256
    tier.attackDamageBonus = 2.0
    tier.speed = 6.0
    tier.level = 1
    tier.enchantmentValue = 5
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
})

StartupEvents.registry('fluid', event => 
{
    event.create('cake_batter').displayName('Cake Batter').stillTexture('kubejs:fluid/cake_batter_still').flowingTexture('kubejs:fluid/cake_batter_flow')
	event.create('butterscotch').displayName('Butterscotch').stillTexture('kubejs:fluid/butterscotch_still').flowingTexture('kubejs:fluid/butterscotch_flow').noBucket().noBlock()
})

StartupEvents.registry('item', event => {
	event.create('rose_gold_knife', 'knife').displayName('Rose Gold Knife').tier('rosegold').attackDamageBaseline(1.5).speedBaseline(-2.0)
	event.create('copper_knife', 'knife').displayName('Copper Knife').tier('copper').attackDamageBaseline(0).speedBaseline(-2.0)
	event.create('raw_ammonite').displayName('Ammonite')
	event.create('lead_sheet').displayName('Lead Sheet')
	event.create('crab_bucket').displayName('Bucket of Crab')
	event.create('soul_salt').displayName('Soul Salt')
	event.create('fragrant_tree_bark').displayName('Fragrant Tree Bark')
	event.create('oats').displayName('Oats')
	event.create('cinnamon').displayName('Cinnamon').food(food => {
		food
    		.hunger(1)
    		.saturation(0.25)
			.effect('instant_damage', 1, 0, 100)
        	})
	event.create('cinnamon_roll').displayName('Cinnamon Roll').food(food => {
		food
    		.hunger(6)
    		.saturation(0.75)
			.effect('farmersdelight:comfort', 3000, 0, 100)
        	})
	event.create('lettuce_leaf').displayName('Lettuce Leaf').food(food => {
		food
    		.hunger(1)
    		.saturation(0)
			.fastToEat()
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
    		.hunger(11)
    		.saturation(0.51)
			.effect('water_breathing', 1200, 0, 100)
        	})
	event.create('corn_fritters').displayName('Corn Fritters').food(food => {
		food
    		.hunger(5)
    		.saturation(0.8)
			.fastToEat()
        	})
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
	event.create('bone_broth_cup').displayName('Bone Broth Cup').maxStackSize(16).food(food => {
		food
    		.hunger(7)
    		.saturation(0.66)
			.effect('haste', 1800, 0, 100)
			.effect('farmersdelight:comfort', 1200, 0, 100)
			.eaten(ctx => {
        		ctx.player.giveInHand('miners_delight:copper_cup')
        	})
        	})
		.useAnimation("drink")
		.tooltip("§9Comfort (1:00)")
        .tooltip("§9Haste (1:30)")
		.tooltip("")
		.tooltip("§5When Applied:")
        .tooltip("§9+10% Attack Speed")
	event.create('butterscotch_vanilla_ice_cream').displayName('Butterscotch Vanilla Ice Cream').maxStackSize(16).food(food => {
		food
    		.hunger(7)
    		.saturation(0.5)
			.effect('slowness', 100, 2, 100)
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
	event.create('pasta_with_turkey').displayName('Pasta with Turkey').maxStackSize(16).food(food => {
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
    		.hunger(12)
    		.saturation(0.95)
			.effect('farmersdelight:comfort', 3000, 0, 100)
			.effect('farmersdelight:nourishment', 3000, 0, 100)
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
	event.create('smore').displayName("Marshmallow Sandwich").food(food => {
		food
    		.hunger(6)
    		.saturation(0.7)
        	})
	event.create('neapolitan_ice_cream_sandwich').displayName("Neapolitan Ice Cream Sandwich").maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('instant_health', 1, 0, 100)
			.effect('neapolitan:sugar_rush', 1200, 1, 100)
			.effect('neapolitan:vanilla_scent', 1200, 0, 100)
        	})
	event.create('respiteful_ice_cream_sandwich').displayName("Respiteful Ice Cream Sandwich").maxStackSize(16).food(food => {
		food
    		.hunger(13)
    		.saturation(0.5)
			.effect('respiteful:vitality', 1800, 0, 100)
			.effect('respiteful:tenacity', 1800, 0, 100)
			.effect('respiteful:maturity', 1800, 0, 100)
        	})
	
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
        	})
	event.create('bar_of_ruby_chocolate').displayName('Bar of Ruby Chocolate').food(food => {
		food
    		.hunger(5)
    		.saturation(0.3)
			.effect('brewinandchewin:sweet_heart', 600, 2, 100)
        	})
	event.create('ruby_chocolate_glazed_berries').displayName('Ruby Chocolate Berries').food(food => {
		food
    		.hunger(6)
    		.saturation(0.8)
			.effect('brewinandchewin:sweet_heart', 600, 2, 100)
        	})
	event.create('ruby_chocolate_glazed_marshmallow').displayName('Ruby Chocolate Marshmallows').food(food => {
		food
    		.hunger(4)
    		.saturation(0.6)
			.effect('brewinandchewin:sweet_heart', 600, 2, 100)
        	})
	
	event.create('incomplete_beef_burrito','create:sequenced_assembly').displayName('Incomplete Beef Burrito').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_chicken_taco','create:sequenced_assembly').displayName('Incomplete Chicken Taco').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_eggplant_burger','create:sequenced_assembly').displayName('Incomplete Eggplant Burger').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_fish_taco','create:sequenced_assembly').displayName('Incomplete Fish Taco').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})		
	event.create('incomplete_mutton_sandwich','create:sequenced_assembly').displayName('Incomplete Mutton Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_pork_wrap','create:sequenced_assembly').displayName('Incomplete Pork Wrap').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_apple_pie','create:sequenced_assembly').displayName('Incomplete Apple Tart').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_truffle_pie','create:sequenced_assembly').displayName('Incomplete Truffle Tart').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_mutton_pie','create:sequenced_assembly').displayName('Incomplete Mutton Tart').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_butterscotch_cinnamon_pie','create:sequenced_assembly').displayName('Incomplete Butterscotch Cinnamon Pie').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_stuffed_potato','create:sequenced_assembly').displayName('Incomplete Stuffed Potato').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_melon_popsicle','create:sequenced_assembly').displayName('Incomplete Melon Popsicle').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_barbecue_stick','create:sequenced_assembly').displayName('Incomplete Meat Skewer').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_nether_skewer','create:sequenced_assembly').displayName('Incomplete Nether Skewer').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_improvised_barbecue_stick','create:sequenced_assembly').displayName('Incomplete Deepskewer').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_crispy_skewer','create:sequenced_assembly').displayName('Incomplete Ender Skewer').food(food => {
		food
    		.hunger(1)
    		.saturation(0)
        	})
	event.create('incomplete_crawling_sandwich','create:sequenced_assembly').displayName('Incomplete Crawling Sandwich').food(food => {
		food
    		.hunger(1)
    		.saturation(0.3)
        	})
	event.create('incomplete_souldough','create:sequenced_assembly').displayName('Incomplete Souldough').food(food => {
		food
    		.hunger(1)
    		.saturation(0.3)
        	})
	event.create('incomplete_ham_and_cheese_sandwich','create:sequenced_assembly').displayName('Incomplete Ham and Cheese Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_rose_hip_pie','create:sequenced_assembly').displayName('Incomplete Rose Hip Pie').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_quiche','create:sequenced_assembly').displayName('Incomplete Quiche').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_chorus_pie','create:sequenced_assembly').displayName('Incomplete Chorus Pie').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_pizza','create:sequenced_assembly').displayName('Incomplete Pizza')
	event.create('incomplete_cod_roll','create:sequenced_assembly').displayName('Incomplete Cod Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_salmon_roll','create:sequenced_assembly').displayName('Incomplete Salmon Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_egg_roll','create:sequenced_assembly').displayName('Incomplete Egg Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_pufferfish_roll','create:sequenced_assembly').displayName('Incomplete Pufferfish Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_tropical_roll','create:sequenced_assembly').displayName('Incomplete Tropical Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_calamari_roll','create:sequenced_assembly').displayName('Incomplete Calamari Roll').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_rice_ball','create:sequenced_assembly').displayName('Incomplete Rice Ball').food(food => {
		food
    		.hunger(1)
    		.saturation(0.6)
        	})
	event.create('incomplete_kipper_sandwich','create:sequenced_assembly').displayName('Incomplete Kipper Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
})

StartupEvents.registry('block', event => {
	event.create('wheat_flour_bag').material('wool').hardness(0.8).displayName('Bag of Flour').tagBlock('farmersdelight:mineable/knife')
	
	event.create('stuffed_pumpkin_two', 'feast').servingItems('farmersdelight:stuffed_pumpkin').hasLeftovers(false).displayName('Stuffed Pumpkin 2')
	event.create('eggplant_parmesan_block', 'feast').servingItems('kubejs:eggplant_parmesan').hasLeftovers(true).box(0, 0, 0, 16, 5, 16, true).displayName('Eggplant Parmesan')
	
	event.create('butterscotch_cinnamon_pie', 'pie').material('wool').sliceItem('kubejs:butterscotch_cinnamon_pie_slice').displayName('Butterscotch Cinnamon Pie').tagBlock('farmersdelight:mineable/knife')
})

BlockEvents.modification(event => {
  event.modify('minecraft:budding_amethyst', block => {
    block.destroySpeed = 8
  })
  event.modify('minecraft:skeleton_skull', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:wither_skeleton_skull', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:player_head', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:zombie_head', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:creeper_head', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:dragon_head', block => {
    block.destroySpeed = 0.3
  })
  event.modify('supplementaries:enderman_head', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:clay', block => {
    block.destroySpeed = 0.3
  })
  event.modify('minecraft:gravel', block => {
    block.destroySpeed = 0.3
  })
  event.modify('supplementaries:raked_gravel', block => {
    block.destroySpeed = 0.3
  })
  event.modify('kubejs:eggplant_parmesan_block', block => {
    block.destroySpeed = 0.5
  })
  event.modify('kubejs:butterscotch_cinnamon_pie', block => {
    block.destroySpeed = 0.5
  })
})

ItemEvents.modification(event => {
	event.modify('ecologics:tropical_stew', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:green_tea_ice_cream', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:yellow_tea_ice_cream', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:black_tea_ice_cream', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:coffee_ice_cream', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:respiteful_ice_cream', item => {
        item.maxStackSize = 16
    })
	event.modify('create:blaze_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:cake', item => {
        item.maxStackSize = 16
    })
	event.modify('farmersdelight:apple_pie', item => {
        item.maxStackSize = 16
    })
	event.modify('farmersdelight:sweet_berry_cheesecake', item => {
        item.maxStackSize = 16
    })
	event.modify('farmersdelight:chocolate_pie', item => {
        item.maxStackSize = 16
    })
	event.modify('endersdelight:chorus_pie', item => {
        item.maxStackSize = 16
    })
	event.modify('createaddition:honey_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:chocolate_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:strawberry_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:vanilla_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:banana_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:mint_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('neapolitan:adzuki_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('brewinandchewin:quiche', item => {
        item.maxStackSize = 16
    })
	event.modify('farmersrespite:coffee_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('farmersrespite:rose_hip_pie', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:green_tea_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:yellow_tea_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('respiteful:black_tea_cake', item => {
        item.maxStackSize = 16
    })
	event.modify('brewinandchewin:pizza', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:potion', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:splash_potion', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:lingering_potion', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:enchanted_book', item => {
        item.maxStackSize = 16
    })
	event.modify('minecraft:snowball', item => {
        item.maxStackSize = 64
    })
	event.modify('toms_storage:ts.item_filter', item => {
        item.maxStackSize = 64
    })
	event.modify('toms_storage:ts.polymorphic_item_filter', item => {
        item.maxStackSize = 64
    })
	event.modify('toms_storage:ts.tag_item_filter', item => {
        item.maxStackSize = 64
    })
	
	event.modify('create_confectionery:gingerbread', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.6)
        }
    })
	event.modify('nethersdelight:hoglin_sirloin', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_beef', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_porkchop', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_cod', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_salmon', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('minecraft:cooked_chicken', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.5)
        }
    })
	event.modify('minecraft:baked_potato', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('minecraft:rabbit', item => {
        item.foodProperties = food => {
            food.hunger(1)
        }
    })
	event.modify('minecraft:cooked_rabbit', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('minecraft:cooked_mutton', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('abundant_atmosphere:frog_leg', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('abundant_atmosphere:cooked_frog_leg', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('windswept:cooked_goat', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('environmental:cooked_venison', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('environmental:duck', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('environmental:cooked_duck', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.5)
        }
    })
	event.modify('berry_good:sweet_berry_mince', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.25)
        }
    })
	event.modify('berry_good:sweet_berry_meatballs', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.6)
        }
    })
	event.modify('buzzier_bees:honey_apple', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('buzzier_bees:honey_bread', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.5)
        }
    })
	event.modify('quark:cooked_crab_leg', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('miners_delight:smoked_bat_wing', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('farmersdelight:beef_patty', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_bacon', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_cod_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_salmon_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('farmersdelight:cooked_chicken_cuts', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('farmersdelight:cooked_mutton_chops', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('farmersdelight:ham', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('farmersdelight:smoked_ham', item => {
        item.foodProperties = food => {
            food.hunger(8)
        }
    })
	event.modify('abnormals_delight:duck_fillet', item => {
        item.foodProperties = food => {
            food.hunger(1)
        }
    })
	event.modify('abnormals_delight:cooked_duck_fillet', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('abnormals_delight:cooked_venison_shanks', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('upgrade_aquatic:cooked_pike', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('abnormals_delight:cooked_pike_slice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('upgrade_aquatic:cooked_lionfish', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('upgrade_aquatic:cooked_perch', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.55)
        }
    })
	event.modify('minecraft:carrot', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('minecraft:apple', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('minecraft:bread', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('culturaldelights:tortilla', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('culturaldelights:tortilla_chips', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.5)
        }
    })
	event.modify('atmospheric:roasted_yucca_fruit', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('culturaldelights:avocado', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('culturaldelights:cut_avocado', item => {
        item.foodProperties = food => {
            food.hunger(1)
        }
    })
	event.modify('minecraft:honey_bottle', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.4)
        }
    })
	event.modify('upgrade_aquatic:mulberry', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5).fastToEat()
        }
    })
	event.modify('upgrade_aquatic:mulberry_jam_bottle', item => {
        item.foodProperties = food => {
            food.saturation(0.35)
        }
    })
	event.modify('farmersdelight:pumpkin_slice', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('minecraft:melon_slice', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('minecraft:sweet_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('minecraft:glow_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('windswept:goat_shanks', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('windswept:cooked_goat_shanks', item => {
        item.foodProperties = food => {
            food.fastToEat().hunger(2)
        }
    })
	event.modify('neapolitan:vanilla_fudge', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:strawberries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:white_strawberries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:chocolate_strawberries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:strawberry_bean_bonbons', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:strawberry_scones', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('atmospheric:aloe_leaves', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('upgrade_aquatic:boiled_blue_pickerelweed', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('upgrade_aquatic:boiled_purple_pickerelweed', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('autumnity:foul_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('brewinandchewin:kimchi', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('ecologics:coconut_slice', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('ecologics:cooked_prickly_pear', item => {
        item.foodProperties = food => {
            food.hunger(3).fastToEat()
        }
    })
	event.modify('ecologics:prickly_pear', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('create_confectionery:marshmallow', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('create_confectionery:candy_cane', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('create_confectionery:honey_candy', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:dried_vanilla_pods', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('windswept:chestnuts', item => {
        item.foodProperties = food => {
            food.hunger(1).fastToEat()
        }
    })
	event.modify('windswept:roasted_chestnuts', item => {
        item.foodProperties = food => {
            food.hunger(3).fastToEat()
        }
    })
	event.modify('berry_good:glowgurt', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.7).fastToEat()
        }
    })
	event.modify('minecraft:golden_carrot', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.75).effect('night_vision', 1200, 0, 100)
        }
    })
	event.modify('minecraft:golden_carrot', item => {
        item.rarity = 'uncommon'
    })
	event.modify('minecraft:glistering_melon_slice', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:butterscotch_cinnamon_pie', item => {
        item.rarity = 'uncommon'
    })
	event.modify('kubejs:butterscotch_cinnamon_pie_slice', item => {
        item.rarity = 'uncommon'
    })
	event.modify('minecraft:golden_apple', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('brewinandchewin:pizza_slice', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.9)
        }
    })
	event.modify('incubation:fried_egg', item => {
        item.foodProperties = food => {
            food.hunger(2).fastToEat()
        }
    })
	event.modify('brewinandchewin:ham_and_cheese_sandwich', item => {
        item.foodProperties = food => {
            food.hunger(10).saturation(0.6)
        }
    })
	event.modify('brewinandchewin:kippers', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('farmersrespite:nether_wart_sourdough', item => {
        item.foodProperties = food => {
            food.hunger(5)
        }
    })
	event.modify('minecraft:cookie', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 140, 0, 100)
        }
    })
	event.modify('culturaldelights:hearty_salad', item => {
        item.foodProperties = food => {
            food.hunger(9).saturation(0.7).removeEffect('farmersdelight:nourishment').effect('regeneration', 300, 0, 100).effect('farmersdelight:nourishment', 3600, 0, 100)
        }
    })
	event.modify('endersdelight:uncanny_cookies', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.2).fastToEat()
        }
    })
	event.modify('create:sweet_roll', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.65).effect('farmersdelight:comfort', 1800, 0, 100)
        }
    })
	event.modify('endersdelight:chorus_juice', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.2).effect('endersdelight:phasing', 600, 1, 100)
        }
    })
	event.modify('endersdelight:crispy_skewer', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5).effect('endersdelight:phasing', 600, 0, 100).effect('nausea', 400, 0, 100)
        }
    })
	event.modify('endersdelight:crawling_sandwich', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.6).effect('endersdelight:phasing', 600, 0, 100)
        }
    })
	event.modify('endersdelight:strange_eclair', item => {
        item.foodProperties = food => {
            food.saturation(0.75)
        }
    })
	event.modify('endersdelight:twisted_cereal_wood', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(0.5)
        }
    })
	event.modify('endersdelight:twisted_cereal_wood', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(0.5)
        }
    })
	event.modify('endersdelight:endermite_stew_wood', item => {
        item.foodProperties = food => {
            food.saturation(0.65)
        }
    })
	event.modify('endersdelight:pearl_pasta_wood', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(0.6).effect('endersdelight:phasing', 1800, 0, 100)
        }
    })
	event.modify('endersdelight:ender_paella_wood', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(0.6)
        }
    })
	event.modify('endersdelight:stuffed_shulker_bowl', item => {
        item.foodProperties = food => {
            food.hunger(10).saturation(0.75).effect('endersdelight:phasing', 2400, 1, 100)
        }
    })
	event.modify('miners_delight:baked_squid', item => {
        item.foodProperties = food => {
            food.saturation(0.5)
        }
    })
	event.modify('abnormals_delight:maple_glazed_bacon', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.8)
        }
    })
	event.modify('culturaldelights:eggplant_burger', item => {
        item.foodProperties = food => {
            food.hunger(10).saturation(0.7)
        }
    })
	event.modify('culturaldelights:smoked_eggplant', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.4)
        }
    })
	event.modify('culturaldelights:smoked_cut_eggplant', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.4)
        }
    })
	event.modify('windswept:wild_berries', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.1).fastToEat()
        }
    })
	event.modify('windswept:wild_berry_juice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.3).removeEffect('regeneration').effect('upgrade_aquatic:vibing', 1200, 0, 100)
        }
    })
	event.modify('farmersdelight:bone_broth', item => {
        item.foodProperties = food => {
            food.hunger(7)
        }
    })
	event.modify('minecraft:glistering_melon_slice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.65).effect('regeneration', 140, 0, 100).fastToEat()
        }
    })
	event.modify('overweight_farming:melon_juice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.6)
        }
    })
	event.modify('farmersdelight:hot_cocoa', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100).alwaysEdible()
        }
    })
	event.modify('create_confectionery:hot_chocolate_bottle', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('create_confectionery:soothing_hot_chocolate', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3000, 0, 100)
        }
    })
	event.modify('farmersrespite:green_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:yellow_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:black_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('respiteful:mint_green_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:vanilla_milk_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:adzuki_milk_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:mocha_coffee', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('ecologics:tropical_stew', item => {
        item.foodProperties = food => {
            food.effect('farmersdelight:comfort', 3600, 0, 100)
        }
    })
	event.modify('culturaldelights:pufferfish_roll', item => {
        item.foodProperties = food => {
            food.effect('water_breathing', 3000, 0, 100)
        }
    })
	event.modify('spelunkery:button_mushroom', item => {
        item.foodProperties = food => {
            food.removeEffect('haste')
        }
    })
	event.modify('spelunkery:portabella', item => {
        item.foodProperties = food => {
            food.removeEffect('haste')
        }
    })
	event.modify('create:chocolate_glazed_berries', item => {
        item.foodProperties = food => {
            food.hunger(5).effect('neapolitan:sugar_rush', 800, 2, 100)
        }
    })
	event.modify('create_confectionery:chocolate_glazed_marshmallow', item => {
        item.foodProperties = food => {
            food.hunger(3).effect('neapolitan:sugar_rush', 800, 2, 100)
        }
    })
	event.modify('create_confectionery:chocolate_candy_1', item => {
        item.foodProperties = food => {
            food.hunger(6).effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('create_confectionery:chocolate_candy_2', item => {
        item.foodProperties = food => {
            food.hunger(6).effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('create_confectionery:chocolate_candy_3', item => {
        item.foodProperties = food => {
            food.hunger(6).effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('create_confectionery:bar_of_white_chocolate', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('create_confectionery:white_chocolate_glazed_berries', item => {
        item.foodProperties = food => {
            food.hunger(5)
        }
    })
	event.modify('create_confectionery:white_chocolate_glazed_marshmallow', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('create_confectionery:white_chocolate_candy_1', item => {
        item.foodProperties = food => {
            food.hunger(6).effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('create_confectionery:white_chocolate_candy_2', item => {
        item.foodProperties = food => {
            food.hunger(6)
        }
    })
	event.modify('create_confectionery:white_chocolate_candy_3', item => {
        item.foodProperties = food => {
            food.hunger(6)
        }
    })
	event.modify('create_confectionery:black_chocolate_candy_1', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('create_confectionery:ruby_chocolate_candy_1', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 400, 0, 100)
        }
    })
	event.modify('farmersrespite:green_tea_cookie', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('abnormals_delight:vanilla_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:chocolate_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:banana_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:mint_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:strawberry_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:adzuki_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:yucca_gateau_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('farmersdelight:cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('farmersrespite:coffee_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:green_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:yellow_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:black_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('create_central_kitchen:honey_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('neapolitan:mint_candies', item => {
        item.foodProperties = food => {
            food.removeEffect('neapolitan:berserking').effect('neapolitan:berserking', 300, 0, 100)
        }
    })
	event.modify('farmersrespite:rose_hip_pie_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 300, 0, 100)
        }
    })
	event.modify('farmersrespite:rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 600, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 600, 1, 100)
        }
    })
	event.modify('farmersrespite:long_rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 900, 0, 100)
        }
    })
	event.modify('nethersdelight:strider_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance').effect('poison', 400, 0, 70)
        }
    })
	event.modify('nethersdelight:ground_strider', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance')
        }
    })
})

MoreJSEvents.registerPotionBrewing(event => {
    event.removeByPotion(null, null, "additionaladditions:haste_potion")
	event.removeByPotion(null, null, "additionaladditions:long_haste_potion")
	event.removeByPotion(null, null, "additionaladditions:strong_haste_potion")
})