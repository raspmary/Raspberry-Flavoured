// priority: 0

const $EntityDamageSource = Java.loadClass(`net.minecraft.world.damagesource.EntityDamageSource`);

StartupEvents.registry('mob_effect', event => {
	event.create('coughing')
		.displayName("Coughing")
		.effectTick((entity, lvl) => global.coughingEffect(entity, lvl))
		.color('#A95C2B')
		.harmful();
})

global.coughingEffect = (entity, lvl) => {
	const damageSource = new $EntityDamageSource("coughing", entity);
	if (entity.level.clientSide) return;
	entity.attack(damageSource, lvl + 1);
}

const MobEffectInstance = Java.loadClass(`net.minecraft.world.effect.MobEffectInstance`);

StartupEvents.registry('potion', event => {
    event.create('blindness').addEffect(new MobEffectInstance('minecraft:blindness', 1200));
    event.create('long_blindness').addEffect(new MobEffectInstance('minecraft:blindness', 2400));
    event.create('levitation').addEffect(new MobEffectInstance('minecraft:levitation', 600));
    event.create('strong_levitation').addEffect(new MobEffectInstance('minecraft:levitation', 300, 1));
    event.create('long_levitation').addEffect(new MobEffectInstance('minecraft:levitation', 1200));
})

MoreJSEvents.registerPotionBrewing(event => {
    event.removeByPotion(null, null, "additionaladditions:haste_potion");
	event.removeByPotion(null, null, "additionaladditions:long_haste_potion");
	event.removeByPotion(null, null, "additionaladditions:strong_haste_potion");
    event.removeByPotion(null, null, "quark:resilience");
	event.removeByPotion(null, null, "quark:long_resilience");
	event.removeByPotion(null, null, "quark:strong_resilience");
	event.removeByPotion(null, "windswept:holly_berries", null);
    event.addPotionBrewing("minecraft:sweet_berries", "minecraft:awkward", "windswept:thorns");
    event.addPotionBrewing("autumnity:snail_shell_piece", "minecraft:awkward", "quark:resilience");
    event.addPotionBrewing("minecraft:redstone", "quark:resilience", "quark:long_resilience");
    event.addPotionBrewing("minecraft:glowstone_dust", "quark:resilience", "quark:strong_resilience");
    event.addPotionBrewing("kubejs:spoiled_carrot", "minecraft:awkward", "kubejs:blindness");
    event.addPotionBrewing("minecraft:redstone", "kubejs:blindness", "kubejs:long_blindness");
    event.addPotionBrewing("minecraft:fermented_spider_eye", "minecraft:slow_falling", "kubejs:levitation");
    event.addPotionBrewing("minecraft:fermented_spider_eye", "minecraft:long_slow_falling", "kubejs:long_levitation");
    event.addPotionBrewing("minecraft:redstone", "kubejs:levitation", "kubejs:long_levitation");
    event.addPotionBrewing("minecraft:glowstone_dust", "kubejs:levitation", "kubejs:strong_levitation");
}) 