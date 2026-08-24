// priority: 1
// script by asof

ServerEvents.recipes(event => {
	// add redstone to buttons
	event.forEachRecipe({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:buttons",
		not: {input: "#minecraft:buttons"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(8)
		event.shapeless(output,[ingredients[0],"minecraft:redstone"])
	})
	event.shapeless('8x quark:iron_button', ['#forge:ingots/iron', 'redstone']).id('quark:automation/crafting/iron_button')
	event.shapeless('8x quark:gold_button', ['#forge:ingots/gold', 'redstone']).id('quark:automation/crafting/gold_button')
	// event.shapeless('8x caverns_and_chasms:silver_button', ['#forge:ingots/silver', 'redstone']).id('caverns_and_chasms:silver_button')
	event.shapeless('8x caverns_and_chasms:copper_button', ['#forge:ingots/copper', 'redstone']).id('caverns_and_chasms:copper_button')
	
	// add redstone to pressure plates
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#minecraft:pressure_plates",
		not: {input: "#minecraft:pressure_plates"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(8)
		event.shaped(output, ['AAB'], {A: ingredients[0], B: 'redstone'})
	})
	
	// chiseled blocks
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#raspberry_flavoured:chiseled_blocks",
		not: {input: "#raspberry_flavoured:chiseled_blocks"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(2)
		event.shaped(output, ['AA', 'AA'], {A: ingredients[0]})
	})
	
	// stair shape
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#minecraft:stairs",
		not: {input: "#minecraft:stairs"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(3)
		event.shaped(output, ['A ', 'AA'], {A: ingredients[0]})
	})
	
	// slab shape
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#minecraft:slabs",
		not: {input: "#minecraft:slabs"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(4)
		event.shaped(output, ['AA'], {A: ingredients[0]})
		event.shaped(ingredients[0], ['A', 'A'], {A: recipe.originalRecipeResult.withCount(1)})
	})
	
	// wall shape & return recipe
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#minecraft:walls",
		not: {input: "#minecraft:walls"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(6)
		event.shaped(output, ['AAA'], {A: ingredients[0]})
		event.shaped(ingredients[0], ['A', 'A'], {A: recipe.originalRecipeResult.withCount(1)})
	})
	
	// double walls from stonecutter
	event.forEachRecipe({
		type: "minecraft:stonecutting",
		output: "#minecraft:walls",
		not: {input: "#minecraft:walls"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(2)
		event.stonecutting(output, ingredients[0])
	})
	
	// triple bookshelves
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#forge:bookshelves",
		not: {input: "#forge:bookshelves"}
	}, recipe => {
		if (recipe == null) return;
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(3)
		event.shaped(output, ['AAA', 'BBB', 'AAA'], {A: ingredients[0], B: ingredients[3]})
	})
	
	// hanging signs
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#supplementaries:hanging_signs",
		not: {input: "#supplementaries:hanging_signs"}
	}, recipe => {
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(3)
		event.shaped(output, ['A A', 'BBB', 'BBB'], {A: 'chain', B: ingredients[3]})
	})
	
	// shutters
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#another_furniture:shutters",
		not: {input: "#another_furniture:shutters"}
	}, recipe => {
		recipe.remove()
		let ingredients = recipe.originalRecipeIngredients
		let output = recipe.originalRecipeResult.withCount(6)
		event.shaped(output, ['AA', 'AA', 'AA'], {A: ingredients[0]})
	})
})