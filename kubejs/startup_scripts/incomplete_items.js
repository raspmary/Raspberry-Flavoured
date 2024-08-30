// priority: 0

StartupEvents.registry('item', event => {
// Incomplete items
	const incompleteItems = [
	'incomplete_redstone_link',
	'incomplete_glue',
	'incomplete_pizza',
	'incomplete_respiteful_ice_cream',
	'incomplete_prismatic_ice_cream',
	'incomplete_blaze_tart'
	]
    
    incompleteItems.forEach(incompleteItem => {
        event.create(incompleteItem, 'create:sequenced_assembly')
    })
	
// Incomplete foods
	const incompleteRegularFoods = [
	'incomplete_beef_burrito',
	'incomplete_chicken_taco',
	'incomplete_fish_taco'	,
	'incomplete_mutton_sandwich',
	'incomplete_pork_wrap',
	'incomplete_apple_pie',
	'incomplete_truffle_pie',
	'incomplete_mutton_pie',
	'incomplete_butterscotch_cinnamon_pie',
	'incomplete_stuffed_potato',
	'incomplete_melon_popsicle',
	'incomplete_meat_skewer',
	'incomplete_nether_skewer',
	'incomplete_deepskewer',
	'incomplete_ham_and_cheese_sandwich',
	'incomplete_rose_hip_pie',
	'incomplete_quiche',
	'incomplete_cod_roll',
	'incomplete_salmon_roll',
	'incomplete_egg_roll',
	'incomplete_pufferfish_roll',
	'incomplete_tropical_roll',
	'incomplete_calamari_roll',
	'incomplete_bass_roll',
	'incomplete_kipper_sandwich',
	'incomplete_prickly_pear_pie',
	'incomplete_smore',
	'incomplete_neapolitan_ice_cream_sandwich',
	'incomplete_respiteful_ice_cream_sandwich',
	'incomplete_prismatic_ice_cream_sandwich'
	]
    
    incompleteRegularFoods.forEach(incompleteRegularFood => {
        event.create(incompleteRegularFood, 'create:sequenced_assembly').food(food => {food.hunger(2).saturation(0.6)})
    })
	
// Small incomplete foods
	const incompleteSmallFoods = [
	'incomplete_souldough',
	'incomplete_marshmallow_stick',
	'incomplete_rice_ball'
	]
    
    incompleteSmallFoods.forEach(incompleteSmallFood => {
        event.create(incompleteSmallFood, 'create:sequenced_assembly').food(food => {food.hunger(1).saturation(0.3)})
    })
})