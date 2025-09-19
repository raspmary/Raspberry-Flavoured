// priority: 0

const $HorseArmorItem = Java.loadClass('net.minecraft.world.item.HorseArmorItem')
const $Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', event => {
	event.createCustom('kubejs:copper_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](4, 'minecraft:textures/entity/horse/armor/horse_armor_copper.png', (new $Properties()).stacksTo(1)))
	event.createCustom('kubejs:rose_gold_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](9, 'minecraft:textures/entity/horse/armor/horse_armor_rose_gold.png', (new $Properties()).stacksTo(1)))
	event.createCustom('kubejs:steel_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](12, 'minecraft:textures/entity/horse/armor/horse_armor_steel.png', (new $Properties()).stacksTo(1)))
    event.createCustom('kubejs:electrum_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](13, 'minecraft:textures/entity/horse/armor/horse_armor_electrum.png', (new $Properties()).stacksTo(1)))
    event.createCustom('kubejs:necromium_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](14, 'minecraft:textures/entity/horse/armor/horse_armor_necromium.png', (new $Properties()).stacksTo(1)))
    event.createCustom('kubejs:netherite_horse_armor', () => new $HorseArmorItem['(int,net.minecraft.resources.ResourceLocation,net.minecraft.world.item.Item$Properties)'](15, 'minecraft:textures/entity/horse/armor/horse_armor_netherite.png', (new $Properties()).stacksTo(1)))
})