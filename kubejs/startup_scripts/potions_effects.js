// priority: 0

const $EntityDamageSource = Java.loadClass(`net.minecraft.world.damagesource.EntityDamageSource`);

StartupEvents.registry('mob_effect', event => {
	event.create('coughing')
		.effectTick((entity, lvl) => global.coughingEffect(entity, lvl))
		.color('#A95C2B')
		.harmful();
})

global.coughingEffect = (entity, lvl) => {
	let coughingDamage = new $EntityDamageSource('coughing', entity)
	if (entity.level.clientSide) return
	entity.attack(coughingDamage, lvl + 1)
}

StartupEvents.registry('mob_effect', event => {
	event.create('food_regeneration')
		.effectTick((entity, lvl) => global.foodRegenEffect(entity, lvl))
		.color('#B88458')
		.beneficial();
})

global.foodRegenEffect = (entity, lvl) => {
	if (entity.age % 100 || !entity.isPlayer()) return
    const entityFood = entity.getFoodLevel() 
    const regenAmount = lvl + 1
	if (entityFood == 20) {
		entity.addFood(regenAmount, (regenAmount / (regenAmount * 2)))
	} else {
		entity.addFood(regenAmount, 0)
	}
}

const MobEffectInstance = Java.loadClass(`net.minecraft.world.effect.MobEffectInstance`);

StartupEvents.registry('potion', event => {
    event.create('blindness').addEffect(new MobEffectInstance('minecraft:blindness', 1200));
    event.create('long_blindness').addEffect(new MobEffectInstance('minecraft:blindness', 2400));
    event.create('levitation').addEffect(new MobEffectInstance('minecraft:levitation', 600));
    event.create('strong_levitation').addEffect(new MobEffectInstance('minecraft:levitation', 300, 1));
    event.create('long_levitation').addEffect(new MobEffectInstance('minecraft:levitation', 1200));
    event.create('decay').addEffect(new MobEffectInstance('minecraft:wither', 600));
    event.create('strong_decay').addEffect(new MobEffectInstance('minecraft:wither', 300, 1));
    event.create('long_decay').addEffect(new MobEffectInstance('minecraft:wither', 1200));
})

MoreJSEvents.registerPotionBrewing(event => {
    event.removeByPotion(null, null, "additionaladditions:haste_potion");
	event.removeByPotion(null, null, "additionaladditions:long_haste_potion");
	event.removeByPotion(null, null, "additionaladditions:strong_haste_potion");
    event.removeByPotion(null, null, "quark:resilience");
	event.removeByPotion(null, null, "quark:long_resilience");
	event.removeByPotion(null, null, "quark:strong_resilience");
	event.removeByPotion(null, "windswept:holly_berries", null);
	event.removeByPotion(null, "minecraft:turtle_helmet", null);
    event.removeByPotion(null, null, "caverns_and_chasms:rewind");
    event.removeByPotion(null, null, "minecraft:awkward");
    event.removeByPotion(null, null, "minecraft:mundane");
    event.removeByPotion(null, null, "minecraft:thick");
	event.removeByPotion(null, null, "minecraft:swiftness");
	event.removeByPotion(null, null, "minecraft:invisibility");
	event.removeByPotion(null, null, "oreganized:stunning");
	event.removeByPotion(null, "caverns_and_chasms:spinel", null);
	event.removeByPotion(null, null, "caverns_and_chasms:tether_potion");
	
    event.addPotionBrewing("minecraft:crimson_fungus", "minecraft:awkward");
    event.addPotionBrewing("minecraft:warped_fungus", "minecraft:thick");
	
    event.addPotionBrewing("minecraft:ender_eye", "minecraft:awkward", "caverns_and_chasms:rewind");
	
    event.addPotionBrewing("oreganized:lead_ingot", "minecraft:awkward", "oreganized:stunning");
	
    event.addPotionBrewing("minecraft:scute", "minecraft:awkward", "minecraft:turtle_master");
	
    event.addPotionBrewing("autumnity:snail_shell_piece", "minecraft:awkward", "quark:resilience");
    event.addPotionBrewing("minecraft:redstone", "quark:resilience", "quark:long_resilience");
    event.addPotionBrewing("minecraft:glowstone_dust", "quark:resilience", "quark:strong_resilience");
	
    event.addPotionBrewing("kubejs:spoiled_carrot", "minecraft:awkward", "kubejs:blindness");
    event.addPotionBrewing("minecraft:redstone", "kubejs:blindness", "kubejs:long_blindness");
    event.addPotionBrewing("minecraft:warped_fungus", "minecraft:night_vision", "kubejs:blindness");
    event.addPotionBrewing("minecraft:warped_fungus", "minecraft:long_night_vision", "kubejs:long_blindness");
	
    event.addPotionBrewing("minecraft:warped_fungus", "minecraft:slow_falling", "kubejs:levitation");
    event.addPotionBrewing("minecraft:warped_fungus", "minecraft:long_slow_falling", "kubejs:long_levitation");
    event.addPotionBrewing("minecraft:redstone", "kubejs:levitation", "kubejs:long_levitation");
    event.addPotionBrewing("minecraft:glowstone_dust", "kubejs:levitation", "kubejs:strong_levitation");
	
    event.addPotionBrewing("minecraft:wither_rose", "minecraft:awkward", "kubejs:decay");
    event.addPotionBrewing("minecraft:redstone", "kubejs:decay", "kubejs:long_decay");
    event.addPotionBrewing("minecraft:glowstone_dust", "kubejs:decay", "kubejs:strong_decay");
	
    event.addPotionBrewing("minecraft:amethyst_shard", "minecraft:awkward", "minecraft:invisibility");
	
    event.addPotionBrewing("neapolitan:chocolate_bar", "minecraft:awkward", "minecraft:swiftness");
	
    event.addPotionBrewing("minecraft:poisonous_potato", "minecraft:awkward", "minecraft:poison");
}) 