// priority: 0

StartupEvents.registry('item', event => {
	event.create('incomplete_redstone_link','create:sequenced_assembly').displayName('Incomplete Redstone Link')
	event.create('incomplete_glue','create:sequenced_assembly').displayName('Incomplete Super Glue')
	event.create('incomplete_pizza','create:sequenced_assembly').displayName('Incomplete Pizza')
	event.create('incomplete_respiteful_ice_cream','create:sequenced_assembly').displayName('Incomplete Respiteful Ice Cream')
	event.create('incomplete_prismatic_ice_cream','create:sequenced_assembly').displayName('Incomplete Prismatic Ice Cream')
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
	event.create('incomplete_bass_roll','create:sequenced_assembly').displayName('Incomplete Bass Roll').food(food => {
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
	event.create('incomplete_passionfruit_tart','create:sequenced_assembly').displayName('Incomplete Passionfruit Tart').food(food => {
		food
    		.hunger(1)
    		.saturation(0.6)
        	})
	event.create('incomplete_prickly_pear_tart','create:sequenced_assembly').displayName('Incomplete Prickly Pear Tart').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_smore','create:sequenced_assembly').displayName('Incomplete Marshmallow Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_neapolitan_ice_cream_sandwich','create:sequenced_assembly').displayName('Incomplete Neapolitan Ice Cream Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_respiteful_ice_cream_sandwich','create:sequenced_assembly').displayName('Incomplete Respiteful Ice Cream Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_prismatic_ice_cream_sandwich','create:sequenced_assembly').displayName('Incomplete Prismatic Ice Cream Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
	event.create('incomplete_marshmallow_stick','create:sequenced_assembly').displayName('Incomplete Marshmallow Stick').food(food => {
		food
    		.hunger(1)
    		.saturation(0.3)
        	})
	event.create('incomplete_preserved_skewer','create:sequenced_assembly').displayName('Incomplete Preserved Skewer').food(food => {
		food
    		.hunger(1)
    		.saturation(0.3)
        	})
	event.create('incomplete_duck_sandwich','create:sequenced_assembly').displayName('Incomplete Duck Sandwich').food(food => {
		food
    		.hunger(2)
    		.saturation(0.6)
        	})
})