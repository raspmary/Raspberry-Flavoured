// priority: 0

const $HorseArmorItem = Java.loadClass('net.minecraft.world.item.HorseArmorItem')
const $Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', event => {
    event.createCustom('kubejs:electrum_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](12, 'kubejs:textures/entity/horse/armor/horse_armor_electrum.png', (new $Properties()).stacksTo(1))).displayName('Electrum Horse Armor')
	event.createCustom('kubejs:rose_gold_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](9, 'kubejs:textures/entity/horse/armor/horse_armor_rose_gold.png', (new $Properties()).stacksTo(1))).displayName('Rose Gold Horse Armor')
	event.createCustom('kubejs:steel_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](11, 'kubejs:textures/entity/horse/armor/horse_armor_steel.png', (new $Properties()).stacksTo(1))).displayName('Steel Horse Armor')
})