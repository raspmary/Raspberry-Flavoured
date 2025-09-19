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

function tablet_tooltip(event, text, enchants) {
    if (!event.shift) {
        for (let i = 0; i < enchants.length; i++) {
            let enchant = enchants[i]

            text.add([Text.translate(`enchantment.${enchant[0].replace(":", ".")}`).gray()])
        }
    } else {
        for (let i = 0; i < enchants.length; i++) {
            let enchant = enchants[i]

            text.add([Text.translate(`enchantment.${enchant[0].replace(":", ".")}`).gray().underlined()])
            text.add([Text.translate('rf.ench.max_level').darkGray(), Text.translate(`enchantment.level.${enchant[1]}`).gray()])
            text.add([Text.translate('rf.ench.applied_to').darkGray(), joinComponents(Text.of(", "), enchant[2].map((x) => Text.translate(x))).gray()])
            for (let j = 0; j < enchant[3]; j++) {
                text.add([Text.translate(`rf.ench.${enchant[0].split(":")[1]}_${j+1}`).darkGray()]) // truly arcane line
            }
        }
    }
}

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:aquatic_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:respiration", 3, ["rf.ench.helmet", "item.create.copper_backtank"], 2],
            ["minecraft:depth_strider", 3, ["rf.ench.boots"], 1],
            ["domesticationinnovation:amphibious", 1, ["item.domesticationinnovation.collar_tag"], 2]
        ])
    })
	
	event.addAdvanced('kubejs:beastly_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["ensorcellation:cavalier", 3, ["rf.ench.melee_weapons"], 1],
            ["miningmaster:knight_jump", 3, ["rf.ench.leggings"], 2],
            ["domesticationinnovation:intimidation", 2, ["item.domesticationinnovation.collar_tag"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:cyclic_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:sweeping", 3, ["rf.ench.sword"], 1],
            ["minecraft:riptide", 3, ["item.minecraft.trident"], 2],
            ["allurement:vengeance", 3, ["rf.ench.armor"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:enduring_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["ensorcellation:vitality", 2, ["rf.ench.armor"], 3],
            ["domesticationinnovation:health_boost", 3, ["item.domesticationinnovation.collar_tag"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:everlasting_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:unbreaking", 3, ["rf.ench.any_equipment"], 1]
        ])
	})
	
	event.addAdvanced('kubejs:flinging_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["allurement:launch", 2, ["rf.ench.melee_weapons"], 1],
            ["ensorcellation:volley", 1, ["item.minecraft.bow", "item.minecraft.crossbow"], 1],
            ["domesticationinnovation:deflection", 1, ["item.domesticationinnovation.collar_tag"], 1]
        ])
	})
	
	event.addAdvanced('kubejs:glacial_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:frost_walker", 5, ["rf.ench.boots", "rf.ench.horse_armor"], 2],
            ["domesticationinnovation:frost_fang", 1, ["item.domesticationinnovation.collar_tag"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:hallowed_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:smite", 5, ["rf.ench.melee_weapons"], 1],
            ["minecraft:channeling", 1, ["item.minecraft.trident"], 2],
            ["usefulspyglass:marking", 3, ["item.minecraft.spyglass"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:haunted_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["additional_enchantments:homing", 1, ["rf.ench.ranged_weapons"], 1],
            ["minecraft:soul_speed", 3, ["rf.ench.boots"], 1],
            ["domesticationinnovation:total_recall", 1, ["item.domesticationinnovation.collar_tag"], 3]
        ])
	})
	
	event.addAdvanced('kubejs:heavy_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["kubejs:guard_break", 3, ["rf.ench.melee_weapons"], 1],
            ["additional_enchantments:bracewalk", 3, ["rf.ench.leggings"], 3],
            ["allurement:shockwave", 5, ["rf.ench.boots"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:infested_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["minecraft:bane_of_arthropods", 5, ["rf.ench.melee_weapons"], 3],
            ["allurement:spread_of_ailments", 3, ["item.minecraft.crossbow"], 1]
        ])
	})
	
	event.addAdvanced('kubejs:otherworldly_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["supplementaries:stasis", 1, ["rf.ench.ranged_weapons", "item.supplementaries.bubble_blower"], 3],
            ["ensorcellation:displacement", 3, ["rf.ench.chestplate"], 1],
            ["domesticationinnovation:tethered_teleport", 1, ["item.domesticationinnovation.collar_tag"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:piercing_tablet', (item, advanced, text) => {
		if (!event.shift) {
			text.add([Text.translate('enchantment.ensorcellation.trueshot').gray()])
			text.add([Text.translate('enchantment.minecraft.impaling').gray()])
		} else {
			text.add([Text.translate('enchantment.ensorcellation.trueshot').gray().underlined()])
			text.add([Text.translate('rf.ench.max_level').darkGray(), joinComponents(Text.of(" - "), [Text.translate('enchantment.level.2'), Text.translate('enchantment.level.4')]).gray()])
			text.add([Text.translate('rf.ench.applied_to').darkGray(), joinComponents(Text.of(", "), [Text.translate('item.minecraft.bow'), Text.translate('item.minecraft.crossbow')]).gray()])
			text.add([Text.translate('rf.ench.trueshot_1').darkGray()])
			
			text.add([Text.translate('enchantment.minecraft.impaling').gray().underlined()])
			text.add([Text.translate('rf.ench.max_level').darkGray(), Text.translate('enchantment.level.5').gray()])
			text.add([Text.translate('rf.ench.applied_to').darkGray(), Text.translate('item.minecraft.trident').gray()])
			text.add([Text.translate('rf.ench.impaling_1').darkGray()])
			text.add([Text.translate('rf.ench.impaling_2').darkGray()])
		}
	})
	
	event.addAdvanced('kubejs:pulling_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["allurement:reeling", 2, ["item.minecraft.crossbow"], 2],
            ["ensorcellation:reach", 3, ["rf.ench.chestplate"], 1]
        ])
	})
	
	event.addAdvanced('kubejs:silent_tablet', (item, advanced, text) => {
        tablet_tooltip(event, text, [
            ["farmersdelight:backstabbing", 3, ["rf.ench.knife"], 2],
            ["minecraft:swift_sneak", 3, ["rf.ench.leggings"], 1],
            ["domesticationinnovation:muffled", 1, ["item.domesticationinnovation.collar_tag"], 2]
        ])
	})
	
	event.addAdvanced('kubejs:swift_tablet', (item, advanced, text) => {
        if (!event.shift) {
			text.add([Text.translate('enchantment.additional_enchantments.faster_attacks').gray()])
			text.add([Text.translate('enchantment.ensorcellation.quick_draw').gray()])
		} else {
			text.add([Text.translate('enchantment.additional_enchantments.faster_attacks').gray().underlined()])
			text.add([Text.translate('rf.ench.max_level').darkGray(), Text.translate('enchantment.level.3').gray()])
			text.add([Text.translate('rf.ench.applied_to').darkGray(), Text.translate('rf.ench.melee_weapons').gray()])
			text.add([Text.translate('rf.ench.faster_attacks_1').darkGray()])
			
			text.add([Text.translate('enchantment.ensorcellation.quick_draw').gray().underlined()])
			text.add([Text.translate('rf.ench.max_level').darkGray(), joinComponents(Text.of(" - "), [Text.translate('enchantment.level.1'), Text.translate('enchantment.level.3')]).gray()])
			text.add([Text.translate('rf.ench.applied_to').darkGray(), joinComponents(Text.of(", "), [Text.translate('item.minecraft.bow'), Text.translate('item.minecraft.crossbow'), Text.translate('item.supplementaries.slingshot')]).gray()])
			text.add([Text.translate('rf.ench.quick_draw_1').darkGray()])
		}
	})
})