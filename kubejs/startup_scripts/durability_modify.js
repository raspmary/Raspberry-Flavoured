ItemEvents.modification(event => {
	function maxDura(modifiedItem, modifiedAmount) {
		event.modify(modifiedItem, item => {item.maxDamage = modifiedAmount})
	}

// Misc
	maxDura('supplementaries:flute', 200)
	maxDura('naturalist:bug_net', 200)
	maxDura('minecraft:fishing_rod', 350)
	maxDura('minecraft:carrot_on_a_stick', 350)
	maxDura('minecraft:warped_fungus_on_a_stick', 350)
	maxDura('minecraft:bow', 350)
	maxDura('supplementaries:slingshot', 350)
	maxDura('supplementaries:wrench', 500)
	maxDura('another_furniture:furniture_hammer', 500)
	maxDura('aquaculture:iron_fishing_rod', 900)
	maxDura('farmersdelight:skillet', 900)
	maxDura('minecraft:crossbow', 900)
	
	maxDura('minecraft:trident', 2000)
	
	maxDura('savage_and_ravage:mask_of_dishonesty', 1000)
	maxDura('savage_and_ravage:conch_of_conjuring', 1000)
	maxDura('savage_and_ravage:wand_of_freezing', 1500)
	
	maxDura('create:potato_cannon', 750)
	maxDura('create:extendo_grip', 750)
	maxDura('vc_gliders:paraglider_wood', 700)
	maxDura('create:super_glue', 100)
	maxDura('ecologics:crab_claw', 150)
	maxDura('create:sand_paper', 150)
	
	maxDura('minecraft:turtle_helmet', 650)
	maxDura('autumnity:snail_shell_chestplate', 800)
	maxDura('environmental:yak_pants', 250)
	maxDura('windswept:snow_boots', 350)
	
// Main tools & weapons
	// Wood or flint
	event.modify([
	'minecraft:wooden_pickaxe',
	'minecraft:wooden_axe',
	'minecraft:wooden_shovel',
	'minecraft:wooden_hoe',
	'minecraft:wooden_sword',
	'farmersdelight:flint_knife',
	'minecraft:flint_and_steel'
	], item => {item.maxDamage = 150})
	
	// Gold
	event.modify([
	'minecraft:golden_pickaxe',
	'minecraft:golden_axe',
	'minecraft:golden_shovel',
	'minecraft:golden_hoe',
	'minecraft:golden_sword',
	'farmersdelight:golden_knife'
	], item => {item.maxDamage = 200})
	
	// Copper
	event.modify([
	'minecraft:stone_pickaxe',
	'minecraft:stone_axe',
	'minecraft:stone_shovel',
	'minecraft:stone_hoe',
	'minecraft:stone_sword',
	'minecraft:shears'
	], item => {item.maxDamage = 350})
	
	// Iron
	event.modify([
	'minecraft:iron_pickaxe',
	'minecraft:iron_axe',
	'minecraft:iron_shovel',
	'minecraft:iron_hoe',
	'minecraft:iron_sword',
	'farmersdelight:iron_knife'
	], item => {item.maxDamage = 700})
	
	// Rose gold
	event.modify([
	'additionaladditions:rose_gold_pickaxe',
	'additionaladditions:rose_gold_axe',
	'additionaladditions:rose_gold_shovel',
	'additionaladditions:rose_gold_hoe',
	'additionaladditions:rose_gold_sword'
	], item => {item.maxDamage = 1000})
	
	// Steel
	event.modify([
	'alloyed:steel_pickaxe',
	'alloyed:steel_axe',
	'alloyed:steel_shovel',
	'alloyed:steel_hoe',
	'alloyed:steel_sword',
	'alloyed:steel_knife',
	'mace_backport:mace'
	], item => {item.maxDamage = 3000})
	
	// Diamond
	event.modify([
	'minecraft:diamond_pickaxe',
	'minecraft:diamond_axe',
	'minecraft:diamond_shovel',
	'minecraft:diamond_hoe',
	'minecraft:diamond_sword',
	'farmersdelight:diamond_knife',
	'alloyed:steel_shears'
	], item => {item.maxDamage = 2200})
	
	// Electrum
	event.modify([
	'oreganized:electrum_pickaxe',
	'oreganized:electrum_axe',
	'oreganized:electrum_shovel',
	'oreganized:electrum_hoe',
	'oreganized:electrum_sword',
	'oreganized:electrum_knife',
	'clash:spear'
	], item => {item.maxDamage = 4000})
	
	// Necromium
	event.modify([
	'caverns_and_chasms:necromium_pickaxe',
	'caverns_and_chasms:necromium_axe',
	'caverns_and_chasms:necromium_shovel',
	'caverns_and_chasms:necromium_hoe',
	'caverns_and_chasms:necromium_sword',
	'abnormals_delight:necromium_knife',
	'clash:greatblade'
	], item => {item.maxDamage = 6000})
	
	// Netherite
	event.modify([
	'minecraft:netherite_pickaxe',
	'minecraft:netherite_axe',
	'minecraft:netherite_shovel',
	'minecraft:netherite_hoe',
	'minecraft:netherite_sword',
	'farmersdelight:netherite_knife',
	'clash:swept_axe'
	], item => {item.maxDamage = 8000})
	
	
	
// Armour
	// Leather
	event.modify([
	'minecraft:leather_helmet',
	'minecraft:leather_chestplate',
	'minecraft:leather_leggings',
	'minecraft:leather_boots',
	'shieldexp:wooden_shield'
	], item => {item.maxDamage = 125})

	// Gold
	event.modify([
	'minecraft:golden_helmet',
	'minecraft:golden_chestplate',
	'minecraft:golden_leggings',
	'minecraft:golden_boots'
	], item => {item.maxDamage = 175})

	// Chainmail
	event.modify([
	'minecraft:chainmail_helmet',
	'minecraft:chainmail_chestplate',
	'minecraft:chainmail_leggings',
	'minecraft:chainmail_boots'
	], item => {item.maxDamage = 200})

	// Copper
	event.modify([
	'copperized:copper_helmet',
	'copperized:copper_chestplate',
	'copperized:copper_leggings',
	'copperized:copper_boots',
	'create:copper_diving_helmet',
	'create:copper_diving_boots',
	'shieldexp:golden_shield'
	], item => {item.maxDamage = 250})

	// Iron
	event.modify([
	'minecraft:iron_helmet',
	'minecraft:iron_chestplate',
	'minecraft:iron_leggings',
	'minecraft:iron_boots',
	'minecraft:shield'
	], item => {item.maxDamage = 500})

	// Rose gold
	event.modify([
	'additionaladditions:rose_gold_helmet',
	'additionaladditions:rose_gold_chestplate',
	'additionaladditions:rose_gold_leggings',
	'additionaladditions:rose_gold_boots'
	], item => {item.maxDamage = 625})

	// Steel
	event.modify([
	'alloyed:steel_helmet',
	'alloyed:steel_chestplate',
	'alloyed:steel_leggings',
	'alloyed:steel_boots'
	], item => {item.maxDamage = 850})

	// Diamond
	event.modify([
	'minecraft:diamond_helmet',
	'minecraft:diamond_chestplate',
	'minecraft:diamond_leggings',
	'minecraft:diamond_boots'
	], item => {item.maxDamage = 800})

	// Electrum
	event.modify([
	'oreganized:electrum_helmet',
	'oreganized:electrum_chestplate',
	'oreganized:electrum_leggings',
	'oreganized:electrum_boots'
	], item => {item.maxDamage = 1125})

	// Necromium
	event.modify([
	'caverns_and_chasms:necromium_helmet',
	'caverns_and_chasms:necromium_chestplate',
	'caverns_and_chasms:necromium_leggings',
	'caverns_and_chasms:necromium_boots'
	], item => {item.maxDamage = 1425})

	// Netherite
	event.modify([
	'minecraft:netherite_helmet',
	'minecraft:netherite_chestplate',
	'minecraft:netherite_leggings',
	'minecraft:netherite_boots'
	], item => {item.maxDamage = 1750})

	// Griefer
	event.modify([
	'savage_and_ravage:griefer_helmet',
	'savage_and_ravage:griefer_chestplate',
	'savage_and_ravage:griefer_leggings',
	'savage_and_ravage:griefer_boots',
	'shieldexp:griefer_shield'
	], item => {item.maxDamage = 1000})

	// Sanguine
	event.modify([
	'caverns_and_chasms:sanguine_helmet',
	'caverns_and_chasms:sanguine_chestplate',
	'caverns_and_chasms:sanguine_leggings',
	'caverns_and_chasms:sanguine_boots',
	'shieldexp:iron_shield'
	], item => {item.maxDamage = 1000})
})