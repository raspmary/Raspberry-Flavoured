// priority: 0

WorldgenEvents.add(event => {
  const { anchors } = event

  event.addOre(ore => {
    ore.id = 'kubejs:silver_test'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('#minecraft:stone_ore_replaceables', 'oreganized:silver_ore')
    ore.addTarget('#minecraft:deepslate_ore_replaceables', 'oreganized:deepslate_silver_ore')
    ore.count([3, 6])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(45),
        anchors.absolute(11)
      )
    ore.size = 3
    ore.noSurface = 0.25
    ore.worldgenLayer = 'underground_ores'
  })

  event.addOre(ore => {
    ore.id = 'kubejs:coal_more'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:coal_ore')
    ore.addTarget('#minecraft:deepslate_ore_replaceables', 'minecraft:deepslate_coal_ore')
    ore.count([1, 3])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(4),
        anchors.aboveBottom(24)
      )
    ore.size = 4
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre(ore => {
    ore.id = 'kubejs:rocky_dirt'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('minecraft:dirt', 'caverns_and_chasms:rocky_dirt')
    ore.count([7, 20])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(10),
        anchors.absolute(200)
      )
    ore.size = 35
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre(ore => {
    ore.id = 'kubejs:lead_nether'
    ore.biomes = 'minecraft:nether_wastes'
    ore.addTarget('minecraft:netherrack', 'kubejs:nether_lead_ore')
    ore.count([10, 30])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(5),
        anchors.absolute(250)
      )
    ore.size = 8
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_decoration'
  })
})

WorldgenEvents.remove(event => {
	event.removeFeatureById('underground_ores', [
		'miningmaster:ore_dive_aquamarine', 
		'miningmaster:ore_divine_beryl', 
		'miningmaster:ore_fire_ruby',
		'miningmaster:ore_haste_peridot', 
		'miningmaster:ore_heart_rhodonite', 
		'miningmaster:ore_ice_sapphire', 
		'miningmaster:ore_kinetic_opal', 
		'miningmaster:ore_lucky_citrine', 
		'miningmaster:malachite_meteorite', 
		'miningmaster:ore_gem_random_nether', 
		'miningmaster:ore_gem_random_overworld', 
		'miningmaster:ore_power_pyrite', 
		'miningmaster:ore_spider_kunzite', 
		'miningmaster:ore_spirit_garnet', 
		'miningmaster:ore_unbreaking_iolite',
		'caverns_and_chasms:ore_spinel_buried',
		'caverns_and_chasms:ore_silver_soul',
		'caverns_and_chasms:ore_spinel',
		'sullysmod:jade_ore'
	])
	event.removeFeatureById('vegetal_decoration', [
		'naturalist:patch_cattail', 
		'naturalist:patch_duckweed',
		'upgrade_aquatic:beachgrass_dunes',
		'upgrade_aquatic:patch_pickerelweed',
		'upgrade_aquatic:patch_pickerelweed_extra',
		'upgrade_aquatic:patch_flowering_rush',
		'upgrade_aquatic:trees_river',
		'twigs:azalea_flowers',
		'twigs:patch_seashell_land',
		'twigs:patch_seashell_water',
		'ecologics:trees_walnut',
		'nethersdelight:patch_propelplant'
	])
})