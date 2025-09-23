// priority: 0

KeyBindEvents.modify(event => {
	event.remove('Reload Menu | CTRL + ALT + ');
	event.remove('Toggle Customization Overlay | CTRL + ALT + ');
	
	event.remove('key.jei.nextCategory');
	event.remove('key.jei.showRecipe2');
	event.remove('key.jei.cheatOneItem2');
	event.remove('key.jei.bookmark');
	event.remove('key.jei.clearSearchBar');
	event.remove('key.jei.toggleCheatModeConfigButton');
	event.remove('key.jei.copy.recipe.id');
	event.remove('key.jei.previousSearch');
	event.remove('key.jei.focusSearch');
	event.remove('key.jei.nextSearch');
	event.remove('key.jei.toggleEditMode');
	event.remove('key.jei.previousRecipePage');
	event.remove('key.jei.recipeBack');
	event.remove('key.jei.cheatItemStack2');
	event.remove('key.jei.nextRecipePage');
	event.remove('key.jei.cheatItemStack');
	event.remove('key.jei.closeRecipeGui');
	event.remove('key.jei.toggleCheatMode');
	event.remove('key.jei.showUses');
	event.remove('key.jei.showUses2');
	event.remove('key.jei.toggleWildcardHideIngredient');
	event.remove('key.jei.previousCategory');
	event.remove('key.jei.showRecipe');
	event.remove('key.jei.cheatOneItem');
	event.remove('key.jei.previousPage');
	event.remove('key.jei.toggleHideIngredient');
	event.remove('key.jei.toggleOverlay');
	event.remove('key.jei.nextPage');
	event.remove('key.jei.toggleBookmarkOverlay');
	
	event.remove('key.modernfix.config');
	event.remove('key.exposure.camera_controls');
	event.remove('key.toms_storage.open_terminal');
	event.remove('key.toggleVisualItemContents');
	event.remove('key.toggleSelectedItemTooltips');
	event.remove('key.toggleCarriedItemTooltips');
	event.remove('key.dungeons_libraries.curiosintegration.description_slot1');
	event.remove('key.dungeons_libraries.curiosintegration.description_slot2');
	event.remove('key.dungeons_libraries.curiosintegration.description_slot3');
	event.remove('keybind.additional_enchantments.cycle_tipped');
	event.remove('keybind.additional_enchantments.cycle_homing');
	event.remove('keybind.additional_enchantments.cycle_explosive_tip');
	event.remove('keybind.additional_enchantments.cycle_perception');
	event.remove('keybind.additional_enchantments.ore_sight');
	event.remove('keybind.additional_enchantments.voiding');
	event.remove('key.endergetic.booflo_vest');
	event.remove('key.endergetic.booflo_slam');
	event.remove('auditory.sound_reload_key');
	event.remove('key.cofh.mode_change_increment');
	event.remove('key.cofh.mode_change_decrement');
	event.remove('key.entityculling.toggle');
	event.remove('key.curios.open.desc');
	event.remove('key.nostalgic_tweaks.open_config');
	event.remove('key.nostalgic_tweaks.toggle_fog');
	event.remove('placebo.toggleTrails');
	event.remove('placebo.toggleWings');
	event.remove('key.toastcontrol.clear');
	event.remove('key.mount_jump');
	event.remove('key.presencefootsteps.settings');
	event.remove('quark.keybind.variant_selector');
	event.remove('quark.keybind.change_hotbar');
	
	event.modifyCategory('quark.keybind.autorun', 'key.categories.movement');
	
	event.modifyCategory('create.keyinfo.toolbelt', 'key.categories.gameplay');
	event.modifyCategory('create.keyinfo.toolmenu', 'key.categories.gameplay');
	event.modifyCategory('key.map_atlases.open_minimap', 'key.categories.gameplay');
	event.modifyCategory('key.map_atlases.zoom_out_minimap', 'key.categories.gameplay');
	event.modifyCategory('key.map_atlases.zoom_in_minimap', 'key.categories.gameplay');
	event.modifyCategory('key.map_atlases.increase_slice', 'key.categories.gameplay');
	event.modifyCategory('key.map_atlases.decrease_slice', 'key.categories.gameplay');
	event.modifyCategory('quark.keybind.lock_rotation', 'key.categories.gameplay');
	event.modifyCategory('key.spyglass-improvements.use', 'key.categories.gameplay');
	event.modifyCategory('supplementaries.keybind.quiver', 'key.categories.gameplay');
	
	event.modifyCategory('create.keyinfo.ponder', 'key.categories.inventory');
	event.modifyCategory('quark.keybind.sort_player', 'key.categories.inventory');
	event.modifyCategory('quark.keybind.sort_container', 'key.categories.inventory');
	event.modifyCategory('quark.keybind.transfer_insert', 'key.categories.inventory');
	event.modifyCategory('quark.keybind.transfer_extract', 'key.categories.inventory');
	event.modifyCategory('quark.keybind.shift_lock', 'key.categories.inventory');
	
	event.modifyCategory('key.configured.open_mod_list', 'key.categories.misc');
	event.modifyCategory('key.naming_unconvention.reroll', 'key.categories.misc');
	event.modifyCategory('quark.keybind.camera_mode', 'key.categories.misc');
	event.modifyCategory('quark.keybind.back', 'key.categories.misc');
	event.modifyCategory('key.raised.hud.down', 'key.categories.misc');
	event.modifyCategory('key.raised.hud.up', 'key.categories.misc');
	event.modifyCategory('key.raised.chat.down', 'key.categories.misc');
	event.modifyCategory('key.raised.chat.up', 'key.categories.misc');
})