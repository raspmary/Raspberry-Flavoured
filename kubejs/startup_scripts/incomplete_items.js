// priority: 0

StartupEvents.registry('item', event => {
// Incomplete items
	const incompleteItems = [
	'incomplete_redstone_link',
	'incomplete_glue',
	'incomplete_pizza',
	'incomplete_respiteful_ice_cream',
	'incomplete_prismatic_ice_cream',
	'incomplete_blaze_tart',
	'incomplete_balloon',
	'incomplete_rose_gold_rapier',
	'incomplete_steel_mace',
	'incomplete_electrum_spear',
	'incomplete_necromium_claymore',
	'incomplete_netherite_broad_axe'
	]
    
    incompleteItems.forEach(item => {
        event.create(item, 'create:sequenced_assembly').texture('kubejs:item/incomplete/'+item)
    })
	
// Incomplete foods
	const incompleteRegularFoods = [
	'incomplete_eggplant_burger',
	'incomplete_beef_burrito',
	'incomplete_chicken_taco',
	'incomplete_fish_taco'	,
	'incomplete_mutton_sandwich',
	'incomplete_pork_wrap',
	'incomplete_apple_pie',
	'incomplete_mutton_pie',
	'incomplete_butterscotch_cinnamon_pie',
	'incomplete_stuffed_potato',
	'incomplete_melon_popsicle',
	'incomplete_meat_skewer',
	'incomplete_spicy_skewer',
	'incomplete_lush_skewer',
	'incomplete_preserved_skewer',
	'incomplete_ham_and_cheese_sandwich',
	'incomplete_rose_hip_pie',
	'incomplete_quiche',
	'incomplete_egg_roll',
	'incomplete_pufferfish_roll',
	'incomplete_tropical_roll',
	'incomplete_calamari_roll',
	'incomplete_kipper_sandwich',
	'incomplete_prickly_pear_pie',
	'incomplete_smore',
	'incomplete_neapolitan_ice_cream_sandwich',
	'incomplete_respiteful_ice_cream_sandwich',
	'incomplete_prismatic_ice_cream_sandwich',
	'incomplete_sporedough'
	]
    
    incompleteRegularFoods.forEach(item => {
        event.create(item, 'create:sequenced_assembly').texture('kubejs:item/incomplete/'+item).food(food => {food.hunger(2).saturation(0.6)})
    })
	
// Small incomplete foods
	const incompleteSmallFoods = [
	'incomplete_souldough',
	'incomplete_marshmallow_stick',
	'incomplete_rice_ball'
	]
    
    incompleteSmallFoods.forEach(item => {
        event.create(item, 'create:sequenced_assembly').texture('kubejs:item/incomplete/'+item).food(food => {food.hunger(1).saturation(0.3)})
    })
})