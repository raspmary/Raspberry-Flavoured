// priority: 0

WorldgenEvents.add(event => {
  const { anchors } = event
  
  event.addOre(ore => {
    ore.id = 'kubejs:ore_rocky_dirt'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('minecraft:dirt', 'caverns_and_chasms:rocky_dirt')
    ore.count([8, 24])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(0),
        anchors.absolute(300)
      )
    ore.size = 25
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre(ore => {
    ore.id = 'kubejs:ore_coarse_dirt'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('minecraft:dirt', 'minecraft:coarse_dirt')
    ore.count([8, 24])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(0),
        anchors.absolute(300)
      )
    ore.size = 35
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre(ore => {
    ore.id = 'kubejs:ore_coarse_snow'
    ore.biomes = '#forge:is_snowy'
    ore.addTarget('minecraft:snow_block', 'architects_palette:coarse_snow')
    ore.count([8, 24])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(0),
        anchors.absolute(300)
      )
    ore.size = 50
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })

  event.addOre(ore => {
    ore.id = 'kubejs:ore_deepslate_gravel'
    ore.biomes = '#minecraft:is_overworld'
    ore.addTarget('#minecraft:deepslate_ore_replaceables', 'raspberry:deepslate_gravel')
    ore.count([9, 12])
      .squared()
      .uniformHeight(
        anchors.aboveBottom(0),
        anchors.absolute(0)
      )
    ore.size = 25
    ore.noSurface = 0
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre(ore => {
    ore.id = 'kubejs:ore_lead_nether'
    ore.biomes = 'minecraft:nether_wastes'
    ore.addTarget('minecraft:netherrack', 'kubejs:nether_lead_ore')
    ore.count([10, 30])
      .squared()
      .uniformHeight(
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
		'upgrade_aquatic:patch_flowering_rush',
		'upgrade_aquatic:trees_river',
		'twigs:azalea_flowers',
		'twigs:patch_seashell_land',
		'twigs:patch_seashell_water',
		'ecologics:trees_walnut',
		'nethersdelight:patch_propelplant',
		'culturaldelights:wild_cucumbers_placed',
		'modestmining:shell_placed'
	])
	event.removeFeatureById('surface_structures', [
		'yungsextras:swamp/misc/swamp_ogre'
	])
	event.removeFeatureById('underground_structures', [
		'minecraft:monster_room'
	])
})