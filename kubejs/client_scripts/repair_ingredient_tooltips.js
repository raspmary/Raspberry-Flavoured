// priority: 0
// script by QinomeD

function joinComponents(separator, components) {
    var joined = Text.empty();
	var first = true;

	for (let i = 0; i < components.length; i++) {
        let t = components[i];
		
        if (first) {
			first = false;
		} else if (!separator.isEmpty()) {
			joined.append(separator);
		}

		joined.append(t);
	}

	return joined;
}

ItemEvents.tooltip(event => {
    const repairableItems = {
    'minecraft:turtle_helmet': 'item.minecraft.scute',
    'minecraft:flint_and_steel': 'item.minecraft.flint',
    'minecraft:shears': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'minecraft:bow': 'rf.repair.planks',
    'minecraft:crossbow': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'supplementaries:slingshot': 'rf.repair.planks',
    'minecraft:fishing_rod': 'rf.repair.planks',
    'aquaculture:iron_fishing_rod': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:carrot_on_a_stick': 'item.minecraft.carrot',
    'minecraft:warped_fungus_on_a_stick': 'item.minecraftwarped_fungus',
    'minecraft:trident': 'item.minecraft.prismarine_shard, item.upgrade_aquatic.thrasher_tooth',
    'another_furniture:furniture_hammer': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'kubejs:copper_brush': 'item.minecraft.feather',
    'kubejs:copper_brush_wax': 'item.minecraft.honeycomb',
    'create:super_glue': 'item.minecraft.slimeball',
    'naturalist:bug_net': 'block.minecraft.bamboo, block.quark.bamboo_planks',
    'supplementaries:flute': 'block.minecraft.bamboo, block.quark.bamboo_planks',
    'vc_gliders:paraglider_wood': 'block.create.white_sail, item.minecraft.phantom_membrane',
    'create:potato_cannon': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'create:extendo_grip': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'supplementaries:wrench': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'quark:echorang': 'item.minecraft.echo_shard',
	
    'savage_and_ravage:wand_of_freezing': 'item.quark.soul_bead',
    'savage_and_ravage:conch_of_conjuring': 'item.quark.soul_bead',
    'savage_and_ravage:mask_of_dishonesty': 'item.quark.soul_bead',
	
    'chalk:white_chalk': 'block.minecraft.calcite',
    'chalk:orange_chalk': 'block.minecraft.calcite',
    'chalk:magenta_chalk': 'block.minecraft.calcite',
    'chalk:light_blue_chalk': 'block.minecraft.calcite',
    'chalk:yellow_chalk': 'block.minecraft.calcite',
    'chalk:lime_chalk': 'block.minecraft.calcite',
    'chalk:pink_chalk': 'block.minecraft.calcite',
    'chalk:gray_chalk': 'block.minecraft.calcite',
    'chalk:light_gray_chalk': 'block.minecraft.calcite',
    'chalk:cyan_chalk': 'block.minecraft.calcite',
    'chalk:purple_chalk': 'block.minecraft.calcite',
    'chalk:blue_chalk': 'block.minecraft.calcite',
    'chalk:brown_chalk': 'block.minecraft.calcite',
    'chalk:green_chalk': 'block.minecraft.calcite',
    'chalk:red_chalk': 'block.minecraft.calcite',
    'chalk:black_chalk': 'block.minecraft.calcite',
	
    'minecraft:wooden_sword': 'rf.repair.planks',
    'minecraft:wooden_shovel': 'rf.repair.planks',
    'minecraft:wooden_pickaxe': 'rf.repair.planks',
    'minecraft:wooden_axe': 'rf.repair.planks',
    'minecraft:wooden_hoe': 'rf.repair.planks',
    'shieldexp:wooden_shield': 'rf.repair.planks',
    'farmersdelight:flint_knife': 'item.minecraft.flint',
    'kubejs:bone_knife': 'item.minecraft.bone, item.architects_palette.withered_bone, item.aquaculture.fish_bones',
	
    'minecraft:leather_helmet': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'minecraft:leather_chestplate': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'minecraft:leather_leggings': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'minecraft:leather_boots': 'item.minecraft.leather, item.minecraft.rabbit_hide',
	
    'minecraft:stone_sword': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'minecraft:stone_shovel': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'minecraft:stone_pickaxe': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'minecraft:stone_axe': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'minecraft:stone_hoe': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'kubejs:copper_knife': 'item.minecraft.copper_ingot, item.create.copper_sheet',
	
    'minecraft:chainmail_helmet': 'block.minecraft.chain',
    'minecraft:chainmail_chestplate': 'block.minecraft.chain',
    'minecraft:chainmail_leggings': 'block.minecraft.chain',
    'minecraft:chainmail_boots': 'block.minecraft.chain',
	
    'minecraft:golden_sword': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_shovel': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_pickaxe': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_axe': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_hoe': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'farmersdelight:golden_knife': 'item.minecraft.gold_ingot, item.create.golden_sheet',
	
    'minecraft:golden_helmet': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_chestplate': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_leggings': 'item.minecraft.gold_ingot, item.create.golden_sheet',
    'minecraft:golden_boots': 'item.minecraft.gold_ingot, item.create.golden_sheet',
	
    'copperized:copper_helmet': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'copperized:copper_chestplate': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'copperized:copper_leggings': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'copperized:copper_boots': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'create:copper_diving_boots': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'create:copper_diving_helmet': 'item.minecraft.copper_ingot, item.create.copper_sheet',
    'shieldexp:golden_shield': 'item.minecraft.copper_ingot, item.create.copper_sheet',
	
    'minecraft:iron_sword': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_shovel': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_pickaxe': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_axe': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_hoe': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'farmersdelight:iron_knife': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'farmersdelight:skillet': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:shield': 'item.minecraft.iron_ingot, item.create.iron_sheet',
	
    'minecraft:iron_helmet': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_chestplate': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_leggings': 'item.minecraft.iron_ingot, item.create.iron_sheet',
    'minecraft:iron_boots': 'item.minecraft.iron_ingot, item.create.iron_sheet',
	
    'additionaladditions:rose_gold_sword': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_shovel': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_pickaxe': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_axe': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_hoe': 'item.additionaladditions.rose_gold_alloy',
    'kubejs:rose_gold_knife': 'item.additionaladditions.rose_gold_alloy',
	
    'additionaladditions:rose_gold_helmet': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_chestplate': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_leggings': 'item.additionaladditions.rose_gold_alloy',
    'additionaladditions:rose_gold_boots': 'item.additionaladditions.rose_gold_alloy',
	
    'alloyed:steel_sword': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_shovel': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_pickaxe': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_axe': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_hoe': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_knife': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
	
    'alloyed:steel_helmet': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_chestplate': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_leggings': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
    'alloyed:steel_boots': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet',
	
    'minecraft:diamond_sword': 'item.minecraft.diamond',
    'minecraft:diamond_shovel': 'item.minecraft.diamond',
    'minecraft:diamond_pickaxe': 'item.minecraft.diamond',
    'minecraft:diamond_axe': 'item.minecraft.diamond',
    'minecraft:diamond_hoe': 'item.minecraft.diamond',
    'farmersdelight:diamond_knife': 'item.minecraft.diamond',
	
    'minecraft:diamond_helmet': 'item.minecraft.diamond',
    'minecraft:diamond_chestplate': 'item.minecraft.diamond',
    'minecraft:diamond_leggings': 'item.minecraft.diamond',
    'minecraft:diamond_boots': 'item.minecraft.diamond',
	
    'oreganized:electrum_sword': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_shovel': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_pickaxe': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_axe': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_hoe': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_knife': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
	
    'oreganized:electrum_helmet': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_chestplate': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_leggings': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'oreganized:electrum_boots': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
	
    'caverns_and_chasms:necromium_sword': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_shovel': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_pickaxe': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_axe': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_hoe': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'abnormals_delight:necromium_knife': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
	
    'caverns_and_chasms:necromium_helmet': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_chestplate': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_leggings': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'caverns_and_chasms:necromium_boots': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
	
    'minecraft:netherite_sword': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'minecraft:netherite_shovel': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'minecraft:netherite_pickaxe': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'minecraft:netherite_axe': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'minecraft:netherite_hoe': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'farmersdelight:netherite_knife': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
	
    'minecraft:netherite_helmet': 'item.minecraft.netherite_ingot',
    'minecraft:netherite_chestplate': 'item.minecraft.netherite_ingot',
    'minecraft:netherite_leggings': 'item.minecraft.netherite_ingot',
    'minecraft:netherite_boots': 'item.minecraft.netherite_ingot',
	
    'savage_and_ravage:griefer_helmet': 'item.savage_and_ravage.blast_proof_plating',
    'savage_and_ravage:griefer_chestplate': 'item.savage_and_ravage.blast_proof_plating',
    'savage_and_ravage:griefer_leggings': 'item.savage_and_ravage.blast_proof_plating',
    'savage_and_ravage:griefer_boots': 'item.savage_and_ravage.blast_proof_plating',
    'shieldexp:griefer_shield': 'item.savage_and_ravage.blast_proof_plating',
	
    'caverns_and_chasms:sanguine_helmet': 'item.caverns_and_chasms.sanguine_plating',
    'caverns_and_chasms:sanguine_chestplate': 'item.caverns_and_chasms.sanguine_plating',
    'caverns_and_chasms:sanguine_leggings': 'item.caverns_and_chasms.sanguine_plating',
    'caverns_and_chasms:sanguine_boots': 'item.caverns_and_chasms.sanguine_plating',
    'shieldexp:iron_shield': 'item.caverns_and_chasms.sanguine_plating',
	
    'environmental:thief_hood': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'environmental:healer_pouch': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'environmental:architect_belt': 'item.minecraft.leather, item.minecraft.rabbit_hide',
    'environmental:wanderer_boots': 'item.minecraft.leather, item.minecraft.rabbit_hide',
	
    'autumnity:snail_shell_chestplate': 'item.autumnity.snail_shell_piece',
    'environmental:yak_pants': 'item.environmental.yak_hair',
    'windswept:snow_boots': 'item.minecraft.iron_ingot, item.create.iron_sheet, item.oreganized.lead_ingot',
	
    'clash:spear': 'item.oreganized.electrum_ingot, block.minecraft.diamond_block',
    'clash:swept_axe': 'item.minecraft.netherite_ingot, block.minecraft.diamond_block',
    'clash:greatblade': 'item.caverns_and_chasms.necromium_ingot, block.minecraft.diamond_block',
    'kubejs:rose_gold_rapier': 'item.additionaladditions.rose_gold_alloy',
    'mace_backport:mace': 'item.alloyed.steel_ingot, item.alloyed.steel_sheet'
    }

    Object.keys(repairableItems).forEach(itemID => {
		let value = repairableItems[itemID]
		event.addAdvanced(itemID, (item, advanced, text) => {
			if (event.shift) {
				text.add([Text.translate('rf.repair.repaired_with').darkGreen(), joinComponents(Text.of(", "), value.split(", ").map((x) => Text.translate(x))).blue()])
			} else return
		})
    })
})