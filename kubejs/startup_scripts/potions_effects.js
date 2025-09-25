// priority: 0

const $EntityDamageSource = Java.loadClass(`net.minecraft.world.damagesource.EntityDamageSource`);

StartupEvents.registry('mob_effect', event => {
	event.create('coughing')
		.effectTick((entity, lvl) => global.coughingEffect(entity, lvl))
		.color('#0')
		.harmful();
})

global.coughingEffect = (entity, lvl) => {
	let coughingDamage = new $EntityDamageSource('coughing', entity)
	if (entity.level.clientSide) return
	entity.attack(coughingDamage, lvl + 1)
}

StartupEvents.registry('mob_effect', event => {
	event.create('satiation')
		.effectTick((entity, lvl) => global.foodRegenEffect(entity, lvl))
		.color('#0')
		.beneficial();
})

global.foodRegenEffect = (entity, lvl) => {
	if (entity.age % 200 || !entity.isPlayer()) return
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
    event.create('blindness').addEffect(new MobEffectInstance('minecraft:blindness', 3600));
    event.create('levitation').addEffect(new MobEffectInstance('minecraft:levitation', 600));
    event.create('decay').addEffect(new MobEffectInstance('minecraft:wither', 600));
    event.create('mad_prospector').addEffect(new MobEffectInstance('minecraft:haste', 600));
})