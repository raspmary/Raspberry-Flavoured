ItemEvents.modification(event => {
	function stackTo16(x) {
		event.modify(x, item => {item.maxStackSize = 16})
	}
	function stackTo64(x) {
		event.modify(x, item => {item.maxStackSize = 64})
	}
	function stackTo1(x) {
		event.modify(x, item => {item.maxStackSize = 1})
	}
	stackTo1('kubejs:eggplant_parmesan_block')
	stackTo1('culturaldelights:exotic_roll_medley')
	stackTo16('ecologics:tropical_stew')
	stackTo16('respiteful:green_tea_ice_cream')
	stackTo16('respiteful:yellow_tea_ice_cream')
	stackTo16('respiteful:black_tea_ice_cream')
	stackTo16('respiteful:coffee_ice_cream')
	stackTo16('respiteful:respiteful_ice_cream')
	stackTo16('create:blaze_cake')
	stackTo16('minecraft:cake')
	stackTo16('farmersdelight:apple_pie')
	stackTo16('farmersdelight:sweet_berry_cheesecake')
	stackTo16('farmersdelight:chocolate_pie')
	stackTo16('kubejs:butterscotch_cinnamon_pie')
	stackTo16('createaddition:honey_cake')
	stackTo16('neapolitan:chocolate_cake')
	stackTo16('neapolitan:strawberry_cake')
	stackTo16('neapolitan:vanilla_cake')
	stackTo16('neapolitan:banana_cake')
	stackTo16('neapolitan:mint_cake')
	stackTo16('neapolitan:adzuki_cake')
	stackTo16('brewinandchewin:quiche')
	stackTo16('farmersrespite:coffee_cake')
	stackTo16('farmersrespite:rose_hip_pie')
	stackTo16('respiteful:green_tea_cake')
	stackTo16('respiteful:yellow_tea_cake')
	stackTo16('respiteful:black_tea_cake')
	stackTo16('brewinandchewin:pizza')
	stackTo16('minecraft:potion')
	stackTo16('minecraft:splash_potion')
	stackTo16('minecraft:lingering_potion')
	stackTo16('minecraft:enchanted_book')
	stackTo16('minecraft:dragon_breath')
	stackTo64('minecraft:oak_boat')
	stackTo64('minecraft:oak_chest_boat')
	stackTo64('minecraft:spruce_boat')
	stackTo64('minecraft:spruce_chest_boat')
	stackTo64('minecraft:birch_boat')
	stackTo64('minecraft:birch_chest_boat')
	stackTo64('minecraft:jungle_boat')
	stackTo64('minecraft:jungle_chest_boat')
	stackTo64('minecraft:acacia_boat')
	stackTo64('minecraft:acacia_chest_boat')
	stackTo64('minecraft:dark_oak_boat')
	stackTo64('minecraft:dark_oak_chest_boat')
	stackTo64('minecraft:mangrove_boat')
	stackTo64('minecraft:mangrove_chest_boat')
	stackTo64('boatload:oak_furnace_boat')
	stackTo64('boatload:large_oak_boat')
	stackTo64('boatload:spruce_furnace_boat')
	stackTo64('boatload:large_spruce_boat')
	stackTo64('boatload:birch_furnace_boat')
	stackTo64('boatload:large_birch_boat')
	stackTo64('boatload:jungle_furnace_boat')
	stackTo64('boatload:large_jungle_boat')
	stackTo64('boatload:acacia_furnace_boat')
	stackTo64('boatload:large_acacia_boat')
	stackTo64('boatload:dark_oak_furnace_boat')
	stackTo64('boatload:large_dark_oak_boat')
	stackTo64('boatload:mangrove_furnace_boat')
	stackTo64('boatload:large_mangrove_boat')
	stackTo64('boatload:crimson_boat')
	stackTo64('boatload:crimson_chest_boat')
	stackTo64('boatload:crimson_furnace_boat')
	stackTo64('boatload:large_crimson_boat')
	stackTo64('boatload:warped_boat')
	stackTo64('boatload:warped_chest_boat')
	stackTo64('boatload:warped_furnace_boat')
	stackTo64('boatload:large_warped_boat')
	stackTo64('ecologics:coconut_boat')
	stackTo64('ecologics:azalea_boat')
	stackTo64('ecologics:coconut_chest_boat')
	stackTo64('ecologics:azalea_chest_boat')
	stackTo64('atmospheric:rosewood_boat')
	stackTo64('atmospheric:rosewood_chest_boat')
	stackTo64('atmospheric:morado_boat')
	stackTo64('atmospheric:morado_chest_boat')
	stackTo64('atmospheric:yucca_boat')
	stackTo64('atmospheric:yucca_chest_boat')
	stackTo64('atmospheric:aspen_boat')
	stackTo64('atmospheric:aspen_chest_boat')
	stackTo64('atmospheric:aspen_furnace_boat')
	stackTo64('atmospheric:large_aspen_boat')
	stackTo64('atmospheric:yucca_furnace_boat')
	stackTo64('atmospheric:large_yucca_boat')
	stackTo64('atmospheric:morado_furnace_boat')
	stackTo64('atmospheric:large_morado_boat')
	stackTo64('atmospheric:rosewood_furnace_boat')
	stackTo64('atmospheric:large_rosewood_boat')
	stackTo64('atmospheric:kousa_furnace_boat')
	stackTo64('atmospheric:large_kousa_boat')
	stackTo64('autumnity:maple_boat')
	stackTo64('autumnity:maple_chest_boat')
	stackTo64('autumnity:maple_furnace_boat')
	stackTo64('autumnity:large_maple_boat')
	stackTo64('environmental:willow_boat')
	stackTo64('environmental:willow_chest_boat')
	stackTo64('environmental:wisteria_furnace_boat')
	stackTo64('environmental:large_wisteria_boat')
	stackTo64('environmental:cherry_boat')
	stackTo64('environmental:cherry_chest_boat')
	stackTo64('environmental:cherry_furnace_boat')
	stackTo64('environmental:large_cherry_boat')
	stackTo64('environmental:wisteria_boat')
	stackTo64('environmental:wisteria_chest_boat')
	stackTo64('environmental:willow_furnace_boat')
	stackTo64('environmental:large_willow_boat')
	stackTo64('upgrade_aquatic:driftwood_boat')
	stackTo64('upgrade_aquatic:driftwood_chest_boat')
	stackTo64('upgrade_aquatic:river_boat')
	stackTo64('upgrade_aquatic:river_chest_boat')
	stackTo64('upgrade_aquatic:river_furnace_boat')
	stackTo64('upgrade_aquatic:large_river_boat')
	stackTo64('upgrade_aquatic:driftwood_furnace_boat')
	stackTo64('upgrade_aquatic:large_driftwood_boat')
	stackTo64('windswept:chestnut_boat')
	stackTo64('windswept:chestnut_chest_boat')
	stackTo64('windswept:chestnut_furnace_boat')
	stackTo64('windswept:large_chestnut_boat')
	stackTo64('windswept:holly_furnace_boat')
	stackTo64('windswept:large_holly_boat')
	stackTo64('minecraft:minecart')
	stackTo64('minecraft:chest_minecart')
	stackTo64('minecraft:furnace_minecart')
	stackTo64('minecraft:tnt_minecart')
	stackTo64('minecraft:hopper_minecart')
	stackTo64('minecraft:command_block_minecart')
	stackTo64('supplementaries:dispenser_minecart')
	stackTo64('oreganized:shrapnel_bomb_minecart')
	stackTo64('etched:jukebox_minecart')
	stackTo64('minecraft:snowball')
	stackTo64('minecraft:ender_pearl')
	stackTo64('minecraft:egg')
	stackTo64('environmental:duck_egg')
	stackTo64('autumnity:turkey_egg')
	stackTo64('quark:egg_parrot_red_blue')
	stackTo64('quark:egg_parrot_blue')
	stackTo64('quark:egg_parrot_green')
	stackTo64('quark:egg_parrot_yellow_blue')
	stackTo64('quark:egg_parrot_grey')
	stackTo64('farmersdelight:rotten_tomato')
	stackTo64('minecraft:spyglass')
	stackTo64('minecraft:white_bed')
	stackTo64('minecraft:orange_bed')
	stackTo64('minecraft:magenta_bed')
	stackTo64('minecraft:light_blue_bed')
	stackTo64('minecraft:yellow_bed')
	stackTo64('minecraft:lime_bed')
	stackTo64('minecraft:pink_bed')
	stackTo64('minecraft:gray_bed')
	stackTo64('minecraft:light_gray_bed')
	stackTo64('minecraft:cyan_bed')
	stackTo64('minecraft:purple_bed')
	stackTo64('minecraft:blue_bed')
	stackTo64('minecraft:brown_bed')
	stackTo64('minecraft:green_bed')
	stackTo64('minecraft:red_bed')
	stackTo64('minecraft:black_bed')
	stackTo64('minecraft:saddle')
	stackTo64('minecraft:iron_horse_armor')
	stackTo64('minecraft:golden_horse_armor')
	stackTo64('minecraft:diamond_horse_armor')
	stackTo64('minecraft:leather_horse_armor')
	stackTo64('minecraft:bucket')
	stackTo64('minecraft:oak_sign')
	stackTo64('minecraft:spruce_sign')
	stackTo64('minecraft:birch_sign')
	stackTo64('minecraft:jungle_sign')
	stackTo64('minecraft:acacia_sign')
	stackTo64('minecraft:dark_oak_sign')
	stackTo64('minecraft:mangrove_sign')
	stackTo64('minecraft:crimson_sign')
	stackTo64('minecraft:warped_sign')
	stackTo64('quark:bamboo_sign')
	stackTo64('supplementaries:hanging_sign_oak')
	stackTo64('supplementaries:hanging_sign_spruce')
	stackTo64('supplementaries:hanging_sign_birch')
	stackTo64('supplementaries:hanging_sign_jungle')
	stackTo64('supplementaries:hanging_sign_acacia')
	stackTo64('supplementaries:hanging_sign_dark_oak')
	stackTo64('supplementaries:hanging_sign_mangrove')
	stackTo64('supplementaries:hanging_sign_crimson')
	stackTo64('supplementaries:hanging_sign_warped')
	stackTo64('supplementaries:quark/hanging_sign_bamboo')
	stackTo64('supplementaries:ecologics/hanging_sign_azalea')
	stackTo64('supplementaries:ecologics/hanging_sign_coconut')
	stackTo64('supplementaries:windswept/hanging_sign_chestnut')
	stackTo64('supplementaries:architects_palette/hanging_sign_twisted')
	stackTo64('supplementaries:environmental/hanging_sign_willow')
	stackTo64('supplementaries:environmental/hanging_sign_cherry')
	stackTo64('supplementaries:environmental/hanging_sign_wisteria')
	stackTo64('supplementaries:upgrade_aquatic/hanging_sign_driftwood')
	stackTo64('supplementaries:upgrade_aquatic/hanging_sign_river')
	stackTo64('supplementaries:autumnity/hanging_sign_maple')
	stackTo64('supplementaries:atmospheric/hanging_sign_rosewood')
	stackTo64('supplementaries:atmospheric/hanging_sign_morado')
	stackTo64('supplementaries:atmospheric/hanging_sign_yucca')
	stackTo64('supplementaries:atmospheric/hanging_sign_aspen')
	stackTo64('supplementaries:sign_post_oak')
	stackTo64('supplementaries:sign_post_spruce')
	stackTo64('supplementaries:sign_post_birch')
	stackTo64('supplementaries:sign_post_jungle')
	stackTo64('supplementaries:sign_post_acacia')
	stackTo64('supplementaries:sign_post_dark_oak')
	stackTo64('supplementaries:sign_post_mangrove')
	stackTo64('supplementaries:sign_post_crimson')
	stackTo64('supplementaries:sign_post_warped')
	stackTo64('supplementaries:quark/sign_post_bamboo')
	stackTo64('supplementaries:ecologics/sign_post_azalea')
	stackTo64('supplementaries:ecologics/sign_post_coconut')
	stackTo64('supplementaries:windswept/sign_post_chestnut')
	stackTo64('supplementaries:architects_palette/sign_post_twisted')
	stackTo64('supplementaries:environmental/sign_post_willow')
	stackTo64('supplementaries:environmental/sign_post_cherry')
	stackTo64('supplementaries:environmental/sign_post_wisteria')
	stackTo64('supplementaries:upgrade_aquatic/sign_post_driftwood')
	stackTo64('supplementaries:upgrade_aquatic/sign_post_river')
	stackTo64('supplementaries:autumnity/sign_post_maple')
	stackTo64('supplementaries:atmospheric/sign_post_rosewood')
	stackTo64('supplementaries:atmospheric/sign_post_morado')
	stackTo64('supplementaries:atmospheric/sign_post_yucca')
	stackTo64('supplementaries:atmospheric/sign_post_aspen')
	stackTo64('ecologics:coconut_sign')
	stackTo64('ecologics:azalea_sign')
	stackTo64('atmospheric:rosewood_sign')
	stackTo64('atmospheric:morado_sign')
	stackTo64('atmospheric:yucca_sign')
	stackTo64('atmospheric:aspen_sign')
	stackTo64('autumnity:maple_sign')
	stackTo64('environmental:willow_sign')
	stackTo64('environmental:cherry_sign')
	stackTo64('environmental:wisteria_sign')
	stackTo64('upgrade_aquatic:driftwood_sign')
	stackTo64('upgrade_aquatic:river_sign')
	stackTo64('windswept:chestnut_sign')
	stackTo64('minecraft:armor_stand')
	stackTo64('minecraft:white_banner')
	stackTo64('minecraft:orange_banner')
	stackTo64('minecraft:magenta_banner')
	stackTo64('minecraft:light_blue_banner')
	stackTo64('minecraft:yellow_banner')
	stackTo64('minecraft:lime_banner')
	stackTo64('minecraft:pink_banner')
	stackTo64('minecraft:gray_banner')
	stackTo64('minecraft:light_gray_banner')
	stackTo64('minecraft:cyan_banner')
	stackTo64('minecraft:purple_banner')
	stackTo64('minecraft:blue_banner')
	stackTo64('minecraft:brown_banner')
	stackTo64('minecraft:green_banner')
	stackTo64('minecraft:red_banner')
	stackTo64('minecraft:black_banner')
	stackTo64('supplementaries:flag_white')
	stackTo64('supplementaries:flag_orange')
	stackTo64('supplementaries:flag_magenta')
	stackTo64('supplementaries:flag_light_blue')
	stackTo64('supplementaries:flag_yellow')
	stackTo64('supplementaries:flag_lime')
	stackTo64('supplementaries:flag_pink')
	stackTo64('supplementaries:flag_gray')
	stackTo64('supplementaries:flag_light_gray')
	stackTo64('supplementaries:flag_cyan')
	stackTo64('supplementaries:flag_purple')
	stackTo64('supplementaries:flag_blue')
	stackTo64('supplementaries:flag_brown')
	stackTo64('supplementaries:flag_green')
	stackTo64('supplementaries:flag_red')
	stackTo64('supplementaries:flag_black')
})