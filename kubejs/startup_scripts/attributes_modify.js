// priority: 0

const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")

// Attribute values
const electrumHelmetArmour = new $AttributeModifier("f39fa22c-2e79-4147-a69f-1404ae881500", "generic.armor", 5, "ADDITION")
const electrumChestplateArmour = new $AttributeModifier("705baac9-f06f-4d04-97c5-85ccdcf2409c", "generic.armor", 7, "ADDITION")
const electrumLeggingsArmour = new $AttributeModifier("1854877c-911a-4380-836c-116611144f8b", "generic.armor", 6, "ADDITION")
const electrumBootsArmour = new $AttributeModifier("844f4b0a-6fe0-42c3-baf6-60601199cd85", "generic.armor", 4, "ADDITION")

const electrumHelmetSpeed = new $AttributeModifier("1ceb2194-31e5-4e70-a890-ad940882e4a5", "generic.movement_speed", 0.06, "MULTIPLY_BASE")
const electrumChestplateSpeed = new $AttributeModifier("f7f3feb2-3099-4c1c-8ee2-f920e32d7591", "generic.movement_speed", 0.08, "MULTIPLY_BASE")
const electrumLeggingsSpeed = new $AttributeModifier("c4822ccc-635c-42de-b667-2d9684a13aac", "generic.movement_speed", 0.1, "MULTIPLY_BASE")
const electrumBootsSpeed = new $AttributeModifier("6bebb8d2-f3a0-4fe0-9ceb-ac6179061994", "generic.movement_speed", 0.12, "MULTIPLY_BASE")

const roseGoldHelmetMagProt = new $AttributeModifier("1df33c7e-aac7-4c2d-8e14-8a4540f80766", "caverns_and_chasms:magic_protection", 0.125, "ADDITION")
const roseGoldChestplateMagProt = new $AttributeModifier("28eaeebe-88dc-4b93-bce0-71f7805b8b76", "caverns_and_chasms:magic_protection", 0.2, "ADDITION")
const roseGoldLeggingsMagProt = new $AttributeModifier("197274db-98d0-4dfb-ab36-b452acb600ef", "caverns_and_chasms:magic_protection", 0.2, "ADDITION")
const roseGoldBootsMagProt = new $AttributeModifier("acb332d4-14ce-45bf-b653-b814cb457b02", "caverns_and_chasms:magic_protection", 0.125, "ADDITION")

const sanguineHelmetLifesteal = new $AttributeModifier("4e857af6-37cf-4d9e-82bf-2e78a8156cdd", "caverns_and_chasms:lifesteal", 0.05, "ADDITION")
const sanguineChestplateLifesteal = new $AttributeModifier("7e817302-aa59-4a51-81e9-0559866d66e6", "caverns_and_chasms:lifesteal", 0.15, "ADDITION")
const sanguineLeggingsLifesteal = new $AttributeModifier("2ebde93d-eaa7-4df7-b562-a427de634c14", "caverns_and_chasms:lifesteal", 0.15, "ADDITION")
const sanguineBootsLifesteal = new $AttributeModifier("e0ba6892-11b6-4bc1-a093-c6969dd45e19", "caverns_and_chasms:lifesteal", 0.05, "ADDITION")

const necromiumHelmetWeakness = new $AttributeModifier("027e5479-8edf-4bbd-ba7d-4a2e0c6b4057", "caverns_and_chasms:weakness_aura", 1, "ADDITION")
const necromiumChestplateWeakness = new $AttributeModifier("85faf159-4717-44ac-96e5-0a2560bc1386", "caverns_and_chasms:weakness_aura", 2, "ADDITION")
const necromiumLeggingsWeakness = new $AttributeModifier("95ea8bd9-15c2-4b0d-a860-206aa1731baa", "caverns_and_chasms:weakness_aura", 2, "ADDITION")
const necromiumBootsWeakness = new $AttributeModifier("75d266c2-dde4-4a4f-9f7a-6444f622df1e", "caverns_and_chasms:weakness_aura", 1, "ADDITION")

const necromiumSlowness1 = new $AttributeModifier("2f11b25f-2d5f-403d-a07d-e91bb41e79ad", "caverns_and_chasms:slowness_infliction", 1, "ADDITION")
const necromiumSlowness2 = new $AttributeModifier("2fb2a85b-9d2f-4e4b-b3b2-d5a47ed3d07e", "caverns_and_chasms:slowness_infliction", 3, "ADDITION")

const steelKnockback1 = new $AttributeModifier("0d592c6c-b2e2-438c-acc8-f21d078ae50c", "generic.attack_knockback", 1, "ADDITION")
const steelKnockback2 = new $AttributeModifier("a8cac253-08ff-4f8a-900e-0a5500922124", "generic.attack_knockback", 2, "ADDITION")

const swordRange = new $AttributeModifier("a5824ce5-1d4c-40b0-a1a6-d6a574da39e7", "forge:attack_range", 0.5, "ADDITION")
const specialRange = new $AttributeModifier("a5824ce5-1d4c-40b0-a1a6-d6a574da39e7", "forge:attack_range", 1, "ADDITION")

const snowBootsSpeed = new $AttributeModifier("f256c2df-9ce5-4c07-9021-91fa1c5551c9", "windswept:snow_speed", 0.25, "ADDITION")

const maskStealth = new $AttributeModifier("eb073e79-4059-4245-a1bc-9a0973f320ed", "environmental:stealth", 0.5, "ADDITION")

const gogglesReach = new $AttributeModifier("cbbbe0cf-b086-459f-bf38-09a1828d0776", "forge:reach_distance", 1, "ADDITION")

// Fake attributes
const roseGoldRapierLifesteal = new $AttributeModifier("3e05eb54-d73c-4798-88aa-d2e85e2ecede", "caverns_and_chasms:lifesteal", 1, "ADDITION")
const goldToolsLuck = new $AttributeModifier("08c86a3e-9c08-4699-93e8-18a21b4dadb7", "kubejs:luck", 1, "ADDITION")
const leatherFalling1 = new $AttributeModifier("62b10ab0-c5da-49d8-a42e-2483f07cd7c4", "kubejs:feather_falling", 0.12, "ADDITION")
const leatherFalling2 = new $AttributeModifier("9eb823d1-3296-471c-bb6e-e6afabd36d74", "kubejs:feather_falling", 0.24, "ADDITION")
const leatherFalling3 = new $AttributeModifier("c1a40d40-a79e-4409-b5c2-f8a8980ea71b", "kubejs:feather_falling", 0.36, "ADDITION")
const leatherFalling4 = new $AttributeModifier("efb7ca02-5c46-4922-a92b-c1ad5c697f1f", "kubejs:feather_falling", 0.48, "ADDITION")
const goldArmourFireProt = new $AttributeModifier("5deccdc7-6911-4e5b-a4b9-bd85ed836313", "kubejs:fire_protection", 0.08, "ADDITION")
const goldArmourFireProtHigh = new $AttributeModifier("ee256b4d-e85d-489b-a313-a7db3593e092", "kubejs:fire_protection", 0.16, "ADDITION")
const netheriteArmourFireProt = new $AttributeModifier("c758a669-71e1-4761-b9f1-fa835b4a74fe", "kubejs:fire_protection", 0.24, "ADDITION")
const netheriteArmourFireProtHigh = new $AttributeModifier("999b7316-a44e-412d-ad9d-b9dcee32ca50", "kubejs:fire_protection", 0.32, "ADDITION")
const diamondArmourProjProt = new $AttributeModifier("8dac7f12-5057-47d2-a4be-82c2919eb864", "kubejs:projectile_protection", 0.16, "ADDITION")
const diamondArmourProjProtHigh = new $AttributeModifier("181abd4b-57ba-4eb9-ab4d-d6b9aca4a161", "kubejs:projectile_protection", 0.24, "ADDITION")
const chainmailThorns = new $AttributeModifier("31729baa-84e8-4bad-b340-19b41970d144", "kubejs:thorns", 1, "ADDITION")
const copperSynergy = new $AttributeModifier("4ab88f11-5676-4377-9960-e872109bc3c0", "kubejs:thunder_synergy", 1, "ADDITION")
const turtleSynergy = new $AttributeModifier("1a3d2609-7d70-4396-8092-49850fac7211", "kubejs:aquatic_synergy", 10, "ADDITION")
const netheriteFireAspect1 = new $AttributeModifier("b79b687a-3730-46ba-826b-86633724eece", "kubejs:fire_aspect", 1, "ADDITION")
const netheriteFireAspect2 = new $AttributeModifier("a580f2cf-b946-48f6-a8a7-5d5fb2b9338f", "kubejs:fire_aspect", 2, "ADDITION")
const electrumKinetic1 = new $AttributeModifier("82c441a4-09d4-4791-b4f1-9069df821081", "raspberry:kinetic_damage", 1, "ADDITION")
const electrumKinetic2 = new $AttributeModifier("6fa187e7-ab11-47f4-873a-43853deecdc8", "raspberry:kinetic_damage", 2, "ADDITION")
const silverMirrorSmite = new $AttributeModifier("588e79ad-093b-4cc5-a10a-d546fba92328", "kubejs:smite", 15, "ADDITION")
const bowDamage = new $AttributeModifier("5884dd70-b738-4c36-a94b-83de8546e2a8", "kubejs:ranged_damage", 8.5, "ADDITION")
const crossbowDamage = new $AttributeModifier("5627f77e-4775-4b0c-9f74-aaa02f190040", "kubejs:ranged_damage", 11, "ADDITION")
const tridentDamage = new $AttributeModifier("75d47485-6c07-464e-b294-1bf18bef6dd1", "kubejs:ranged_damage", 20, "ADDITION")
const kunaiDamage = new $AttributeModifier("a9737969-401e-41cd-94c8-2a5834cf6713", "kubejs:ranged_damage", 3, "ADDITION")

ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", (event) => {
// Electrum armour stats
	if (event.itemStack.id == "oreganized:electrum_helmet" && event.slotType == "head") {
		event.removeAttribute("minecraft:generic.armor")
		event.addModifier("minecraft:generic.armor", electrumHelmetArmour)
	}
	if (event.itemStack.id == "oreganized:electrum_chestplate" && event.slotType == "chest") {
		event.removeAttribute("minecraft:generic.armor")
		event.addModifier("minecraft:generic.armor", electrumChestplateArmour)
	}
	if (event.itemStack.id == "oreganized:electrum_leggings" && event.slotType == "legs") {
		event.removeAttribute("minecraft:generic.armor")
		event.addModifier("minecraft:generic.armor", electrumLeggingsArmour)
	}
	if (event.itemStack.id == "oreganized:electrum_boots" && event.slotType == "feet") {
		event.removeAttribute("minecraft:generic.armor")
		event.addModifier("minecraft:generic.armor", electrumBootsArmour)
	}
  
// Electrum armour speed
	if (event.itemStack.id == "oreganized:electrum_helmet" && event.slotType == "head") {
		event.removeAttribute("minecraft:generic.movement_speed")
		event.addModifier("minecraft:generic.movement_speed", electrumHelmetSpeed)
	}
	if (event.itemStack.id == "oreganized:electrum_chestplate" && event.slotType == "chest") {
		event.removeAttribute("minecraft:generic.movement_speed")
		event.addModifier("minecraft:generic.movement_speed", electrumChestplateSpeed)
	}
	if (event.itemStack.id == "oreganized:electrum_leggings" && event.slotType == "legs") {
		event.removeAttribute("minecraft:generic.movement_speed")
		event.addModifier("minecraft:generic.movement_speed", electrumLeggingsSpeed)
	}
	if (event.itemStack.id == "oreganized:electrum_boots" && event.slotType == "feet") {
		event.removeAttribute("minecraft:generic.movement_speed")
		event.addModifier("minecraft:generic.movement_speed", electrumBootsSpeed)
	}
  
// Rose gold armour magic protection  
	if (event.itemStack.id == "additionaladditions:rose_gold_helmet" && event.slotType == "head") {
		event.addModifier("caverns_and_chasms:magic_protection", roseGoldHelmetMagProt)
	}
	if (event.itemStack.id == "additionaladditions:rose_gold_chestplate" && event.slotType == "chest") {
		event.addModifier("caverns_and_chasms:magic_protection", roseGoldChestplateMagProt)
	}
	if (event.itemStack.id == "additionaladditions:rose_gold_leggings" && event.slotType == "legs") {
		event.addModifier("caverns_and_chasms:magic_protection", roseGoldLeggingsMagProt)
	}
	if (event.itemStack.id == "additionaladditions:rose_gold_boots" && event.slotType == "feet") {
		event.addModifier("caverns_and_chasms:magic_protection", roseGoldBootsMagProt)
	}
  
// Sanguine armour lifesteal
	if (event.itemStack.id == "caverns_and_chasms:sanguine_helmet" && event.slotType == "head") {
		event.removeAttribute("caverns_and_chasms:lifesteal")
		event.addModifier("caverns_and_chasms:lifesteal", sanguineHelmetLifesteal)
	}
	if (event.itemStack.id == "caverns_and_chasms:sanguine_chestplate" && event.slotType == "chest") {
		event.removeAttribute("caverns_and_chasms:lifesteal")
		event.addModifier("caverns_and_chasms:lifesteal", sanguineChestplateLifesteal)
	}
	if (event.itemStack.id == "caverns_and_chasms:sanguine_leggings" && event.slotType == "legs") {
		event.removeAttribute("caverns_and_chasms:lifesteal")
		event.addModifier("caverns_and_chasms:lifesteal", sanguineLeggingsLifesteal)
	}
	if (event.itemStack.id == "caverns_and_chasms:sanguine_boots" && event.slotType == "feet") {
		event.removeAttribute("caverns_and_chasms:lifesteal")
		event.addModifier("caverns_and_chasms:lifesteal", sanguineBootsLifesteal)
	}
  
// Necromium armour weakness
	if (event.itemStack.id == "caverns_and_chasms:necromium_helmet" && event.slotType == "head") {
		event.removeAttribute("caverns_and_chasms:weakness_aura")
		event.addModifier("caverns_and_chasms:weakness_aura", necromiumHelmetWeakness)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_chestplate" && event.slotType == "chest") {
		event.removeAttribute("caverns_and_chasms:weakness_aura")
		event.addModifier("caverns_and_chasms:weakness_aura", necromiumChestplateWeakness)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_leggings" && event.slotType == "legs") {
		event.removeAttribute("caverns_and_chasms:weakness_aura")
		event.addModifier("caverns_and_chasms:weakness_aura", necromiumLeggingsWeakness)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_boots" && event.slotType == "feet") {
		event.removeAttribute("caverns_and_chasms:weakness_aura")
		event.addModifier("caverns_and_chasms:weakness_aura", necromiumBootsWeakness)
	}

// Necromium tools slowness
	if (event.itemStack.id == "caverns_and_chasms:necromium_sword" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness2)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_axe" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness2)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_pickaxe" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness1)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_shovel" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness1)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_hoe" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness1)
	}
	if (event.itemStack.id == "abnormals_delight:necromium_knife" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:slowness_infliction", necromiumSlowness1)
	}

// Steel knockback
	if (event.itemStack.id == "alloyed:steel_sword" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback2)
	}
	if (event.itemStack.id == "alloyed:steel_axe" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback2)
	}
	if (event.itemStack.id == "mace_backport:mace" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback2)
	}
	if (event.itemStack.id == "alloyed:steel_pickaxe" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback1)
	}
	if (event.itemStack.id == "alloyed:steel_shovel" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback1)
	}
	if (event.itemStack.id == "alloyed:steel_hoe" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback1)
	}
	if (event.itemStack.id == "alloyed:steel_knife" && event.slotType == "mainhand") {
		event.addModifier("generic.attack_knockback", steelKnockback1)
	}

// Electrum kinetic damage
	if (event.itemStack.id == "oreganized:electrum_sword" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic2)
	}
	if (event.itemStack.id == "oreganized:electrum_pickaxe" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic1)
	}
	if (event.itemStack.id == "oreganized:electrum_axe" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic2)
	}
	if (event.itemStack.id == "oreganized:electrum_shovel" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic1)
	}
	if (event.itemStack.id == "oreganized:electrum_hoe" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic1)
	}
	if (event.itemStack.id == "oreganized:electrum_knife" && event.slotType == "mainhand") {
		event.removeAttribute("raspberry:kinetic_damage")
		event.addModifier("raspberry:kinetic_damage", electrumKinetic2)
	}
	if (event.itemStack.id == "clash:spear" && event.slotType == "mainhand") {
		event.addModifier("raspberry:kinetic_damage", electrumKinetic2)
	}
	
// Turtle helmet aquatic
//	if (event.itemStack.id == "minecraft:turtle_helmet" && event.slotType == "head") {
//		event.addModifier("kubejs:aquatic_synergy", turtleSynergy)
//	}

// Snow boots speed
	if (event.itemStack.id == "windswept:snow_boots" && event.slotType == "feet") {
		event.removeAttribute("windswept:snow_speed")
		event.addModifier("windswept:snow_speed", snowBootsSpeed)
	}
	
// Mask of dishonesty stealth
	if (event.itemStack.id == "savage_and_ravage:mask_of_dishonesty" && event.slotType == "head") {
		event.removeAttribute("environmental:stealth")
		event.addModifier("environmental:stealth", maskStealth)
	}
	
// Goggles reach
	if (event.itemStack.id == "create:goggles" && event.slotType == "head") {
		event.addModifier("forge:reach_distance", gogglesReach)
	}

// Fake attributes
	if (event.itemStack.id == "kubejs:rose_gold_rapier" && event.slotType == "mainhand") {
		event.addModifier("caverns_and_chasms:lifesteal", roseGoldRapierLifesteal)
	}
	
	if (event.itemStack.id == "minecraft:golden_sword" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	if (event.itemStack.id == "minecraft:golden_pickaxe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	if (event.itemStack.id == "minecraft:golden_axe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	if (event.itemStack.id == "minecraft:golden_shovel" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	if (event.itemStack.id == "minecraft:golden_hoe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	if (event.itemStack.id == "farmersdelight:golden_knife" && event.slotType == "mainhand") {
		event.addModifier("kubejs:luck", goldToolsLuck)
	}
	
	if (event.itemStack.id == "minecraft:netherite_sword" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect2)
	}
	if (event.itemStack.id == "minecraft:netherite_pickaxe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect1)
	}
	if (event.itemStack.id == "minecraft:netherite_axe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect2)
	}
	if (event.itemStack.id == "minecraft:netherite_shovel" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect1)
	}
	if (event.itemStack.id == "minecraft:netherite_hoe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect1)
	}
	if (event.itemStack.id == "farmersdelight:netherite_knife" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect2)
	}
	if (event.itemStack.id == "clash:swept_axe" && event.slotType == "mainhand") {
		event.addModifier("kubejs:fire_aspect", netheriteFireAspect2)
	}
	
	if (event.itemStack.id == "oreganized:silver_mirror" && event.slotType == "mainhand") {
		event.addModifier("kubejs:smite", silverMirrorSmite)
	}
	
	if (event.itemStack.id == "minecraft:bow" && event.slotType == "mainhand") {
		event.addModifier("kubejs:ranged_damage", bowDamage)
	}
	if (event.itemStack.id == "minecraft:crossbow" && event.slotType == "mainhand") {
		event.addModifier("kubejs:ranged_damage", crossbowDamage)
	}
	if (event.itemStack.id == "minecraft:trident" && event.slotType == "mainhand") {
		event.addModifier("kubejs:ranged_damage", tridentDamage)
	}
	if (event.itemStack.id == "caverns_and_chasms:kunai" && event.slotType == "mainhand") {
		event.addModifier("kubejs:ranged_damage", kunaiDamage)
	}
	
	if (event.itemStack.id == "minecraft:leather_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:feather_falling", leatherFalling1)
	}
	if (event.itemStack.id == "minecraft:leather_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:feather_falling", leatherFalling2)
	}
	if (event.itemStack.id == "minecraft:leather_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:feather_falling", leatherFalling3)
	}
	if (event.itemStack.id == "minecraft:leather_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:feather_falling", leatherFalling4)
	}
	
	if (event.itemStack.id == "minecraft:golden_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:fire_protection", goldArmourFireProt)
	}
	if (event.itemStack.id == "minecraft:golden_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:fire_protection", goldArmourFireProtHigh)
	}
	if (event.itemStack.id == "minecraft:golden_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:fire_protection", goldArmourFireProtHigh)
	}
	if (event.itemStack.id == "minecraft:golden_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:fire_protection", goldArmourFireProt)
	}
	
	if (event.itemStack.id == "minecraft:netherite_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:fire_protection", netheriteArmourFireProt)
	}
	if (event.itemStack.id == "minecraft:netherite_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:fire_protection", netheriteArmourFireProtHigh)
	}
	if (event.itemStack.id == "minecraft:netherite_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:fire_protection", netheriteArmourFireProtHigh)
	}
	if (event.itemStack.id == "minecraft:netherite_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:fire_protection", netheriteArmourFireProt)
	}
	
	if (event.itemStack.id == "minecraft:diamond_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:projectile_protection", diamondArmourProjProt)
	}
	if (event.itemStack.id == "minecraft:diamond_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:projectile_protection", diamondArmourProjProtHigh)
	}
	if (event.itemStack.id == "minecraft:diamond_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:projectile_protection", diamondArmourProjProtHigh)
	}
	if (event.itemStack.id == "minecraft:diamond_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:projectile_protection", diamondArmourProjProt)
	}
	
	if (event.itemStack.id == "minecraft:chainmail_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:thorns", chainmailThorns)
	}
	if (event.itemStack.id == "minecraft:chainmail_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:thorns", chainmailThorns)
	}
	if (event.itemStack.id == "minecraft:chainmail_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:thorns", chainmailThorns)
	}
	if (event.itemStack.id == "minecraft:chainmail_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:thorns", chainmailThorns)
	}
	
	if (event.itemStack.id == "copperized:copper_helmet" && event.slotType == "head") {
		event.addModifier("kubejs:thunder_synergy", copperSynergy)
	}
	if (event.itemStack.id == "copperized:copper_chestplate" && event.slotType == "chest") {
		event.addModifier("kubejs:thunder_synergy", copperSynergy)
	}
	if (event.itemStack.id == "copperized:copper_leggings" && event.slotType == "legs") {
		event.addModifier("kubejs:thunder_synergy", copperSynergy)
	}
	if (event.itemStack.id == "copperized:copper_boots" && event.slotType == "feet") {
		event.addModifier("kubejs:thunder_synergy", copperSynergy)
	}
	
	// Extra sword range
	if (event.itemStack.id == "minecraft:wooden_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "minecraft:stone_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "minecraft:golden_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "minecraft:iron_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "minecraft:diamond_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "additionaladditions:rose_gold_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "alloyed:steel_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "oreganized:electrum_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "caverns_and_chasms:necromium_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	if (event.itemStack.id == "minecraft:netherite_sword" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", swordRange)
	}
	
	// Extra special weapon range
	if (event.itemStack.id == "kubejs:rose_gold_rapier" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	if (event.itemStack.id == "mace_backport:mace" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	if (event.itemStack.id == "clash:spear" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	if (event.itemStack.id == "clash:greatblade" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	if (event.itemStack.id == "clash:swept_axe" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	if (event.itemStack.id == "minecraft:trident" && event.slotType == "mainhand") {
		event.addModifier("forge:attack_range", specialRange)
	}
	
// Remove drawer key stuff
	if (event.itemStack.id == "storagedrawers:drawer_key" && event.slotType == "mainhand") {
		event.removeAttribute("minecraft:generic.attack_damage")
		event.removeAttribute("minecraft:generic.attack_speed")
	}
})