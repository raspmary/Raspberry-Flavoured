// priority: 0

ServerEvents.recipes(event => {
// Clear potion
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:awkward"
	}), [Fluid.of('minecraft:water',1000), 
		'crimson_fungus', 'warped_fungus'
	]).heated()
// Beneficial potions
	// Night vision
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:night_vision"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'golden_carrot', 'windswept:nightshade'
	]).heated()
	// Invisibility
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:invisibility"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'3x amethyst_shard', '3x #forge:gems/quartz'
	]).heated()
	// Jump boost
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:leaping"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'kubejs:rubber', '2x slime_ball'
	]).heated()
	// Fire resistance
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:fire_resistance"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'magma_cream', '2x blaze_powder', 'mynethersdelight:bullet_pepper'
	]).heated()
	// Speed
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:swiftness"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'supplementaries:sugar_cube', '2x honeycomb'
	]).heated()
	// Water breathing
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:water_breathing"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'aquaculture:goldfish', '2x nautilus_shell'
	]).heated()
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:water_breathing"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'kubejs:crystalfish'
	]).heated()
	// Instant health
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:healing"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x caverns_and_chasms:bejeweled_apple'
	]).heated()
	// Regeneration
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:regeneration"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'ghast_tear', 'farmersrespite:rose_hips'
	]).heated()
	// Strength
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:strength"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'alloyed:steel_ingot', 'naturalist:bear_fur'
	]).heated()
	// Slow falling
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:slow_falling"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'phantom_membrane', '2x miners_delight:bat_wing'
	]).heated()
	// Thorns
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"windswept:thorns"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'#raspberry_flavoured:cactus_blocks', '#raspberry_flavoured:prickly_fruit'
	]).heated()
	// Rewind
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"caverns_and_chasms:rewind"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x architects_palette:twisted_sapling', 'echo_shard'
	]).heated()
	// Health boost
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"environmental:vitality"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x environmental:truffle'
	]).heated()
	// Restfulness
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"upgrade_aquatic:restfulness"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'#minecraft:cocoa_beans_or_powder', 'kubejs:oats'
	]).heated()
	// Repellence
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"upgrade_aquatic:repellence"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'#raspberry_flavoured:exotic_fish', 'autumnity:foul_berries'
	]).heated()
	// Vibing
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"upgrade_aquatic:vibing"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'buzzier_bees:buttercup', 'neapolitan:dried_vanilla_pods'
	]).heated()
	// Extension
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"autumnity:extension"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'autumnity:snail_goo', Fluid.of('create_central_kitchen:sap', 250)
	]).heated()
	// Relief
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"atmospheric:relief"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'atmospheric:aloe_bundle', 'ecologics:azalea_flower'
	]).heated()
// Harmful potions
	// Slowness
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:slowness"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'autumnity:snail_goo', 'cobweb'
	]).heated()
	// Instant damage
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:harming"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'#raspberry_flavoured:exotic_fish', 'upgrade_aquatic:thrasher_tooth'
	]).heated()
	// Poison
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:poison"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'spider_eye', 'poisonous_potato', 'red_mushroom'
	]).heated()
	// Weakness
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:weakness"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x bone', '2x spelunkery:salt'
	]).heated()
	// Blindness
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"kubejs:blindness"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'kubejs:spoiled_carrot', 'sculk_vein'
	]).heated()
	// Levitation
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"kubejs:levitation"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'phantom_membrane', Fluid.of('kubejs:latex',250)
	]).heated()
	// Withering
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"kubejs:decay"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'architects_palette:withered_bone', 'wither_rose'
	]).heated()
	// Stunning
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"oreganized:stunning"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x create:crushed_raw_lead'
	]).heated()
	// Insomnia
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"upgrade_aquatic:insomnia"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'farmersrespite:coffee_beans', '#minecraft:coals'
	]).heated()
	// Worsening
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"atmospheric:worsening"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'atmospheric:aloe_bundle', 'atmospheric:yucca_flower'
	]).heated()
// Neutral potions
	// Snail master
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"minecraft:turtle_master"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'3x autumnity:snail_shell_piece'
	]).heated()
	// Forest dasher
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"naturalist:forest_dasher"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'2x environmental:venison', '4x carrot'
	]).heated()
	// Mad prospector
	event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"REGULAR", 
		Potion:"kubejs:mad_prospector"
	}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:"minecraft:awkward"}), 
		'diamond', '2x quark:glow_shroom'
	]).heated()

	const allPotions = [
	"minecraft:awkward",
	"minecraft:night_vision",
	"minecraft:invisibility",
	"minecraft:leaping",
	"minecraft:fire_resistance",
	"minecraft:swiftness",
	"minecraft:turtle_master",
	"minecraft:water_breathing",
	"minecraft:healing",
	"minecraft:regeneration",
	"minecraft:strength",
	"minecraft:slow_falling",
	"windswept:thorns",
	"naturalist:forest_dasher",
	"caverns_and_chasms:rewind",
	"environmental:vitality",
	"upgrade_aquatic:restfulness",
	"upgrade_aquatic:repellence",
	"upgrade_aquatic:vibing",
	"autumnity:extension",
	"atmospheric:relief",
	"minecraft:slowness",
	"minecraft:harming",
	"minecraft:poison",
	"minecraft:weakness",
	"oreganized:stunning",
	"upgrade_aquatic:insomnia",
	"atmospheric:worsening",
	"kubejs:blindness",
	"kubejs:levitation",
	"kubejs:decay",
	"kubejs:mad_prospector"
	]
    
    allPotions.forEach(potionName => {
		event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"SPLASH", 
			Potion:potionName
		}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:potionName}), 
			'gunpowder'
		]).heated()
		
		event.recipes.create.mixing(Fluid.of('create:potion', 1000, {Bottle:"LINGERING", 
			Potion:potionName
		}), [Fluid.of('create:potion', 1000, {Bottle:"REGULAR", Potion:potionName}), 
			'savage_and_ravage:creeper_spores'
		]).heated()
		
        event.recipes.create.filling(Item.of('minecraft:potion', 1, {Potion:potionName}), [Fluid.of('create:potion', 250, {Bottle:"REGULAR", Potion:potionName}), 'glass_bottle'])
        event.recipes.create.filling(Item.of('minecraft:splash_potion', 1, {Potion:potionName}), [Fluid.of('create:potion', 250, {Bottle:"SPLASH", Potion:potionName}), 'glass_bottle'])
        event.recipes.create.filling(Item.of('minecraft:lingering_potion', 1, {Potion:potionName}), [Fluid.of('create:potion', 250, {Bottle:"LINGERING", Potion:potionName}), 'glass_bottle'])
        event.recipes.create.filling(Item.of('minecraft:tipped_arrow', 1, {Potion:potionName}), [Fluid.of('create:potion', 10, {Bottle:"LINGERING", Potion:potionName}), 'arrow'])
    })
})