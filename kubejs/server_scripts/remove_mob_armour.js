// priority: 0

EntityEvents.spawned((event) => {
    const { entity } = event;
    const blacklistEntities = ['create:carriage_contraption', 'create:contraption', 'create:crafting_blueprint', 'create:gantry_contraption', 'create:seat', 'create:stationary_contraption', 'minecraft:pig', 'minecraft:strider', 'minecraft:horse', 'minecraft:wolf', 'minecraft:cat', 'minecraft:axolotl', 'minecraft:fox', 'minecraft:rabbit', 'minecraft:frog', 'environmental:slabfish']
    if (!entity.alive || blacklistEntities.includes(entity.type)) return;
  
    entity.mergeNbt({
      ArmorDropChances: [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)],
      HandDropChances: [NBT.f(0), NBT.f(0)],
    })
});

EntityEvents.spawned((event) => {
    const { entity, entity: { nbt } } = event;
    const blacklistEntities = ['create:carriage_contraption', 'create:contraption', 'create:crafting_blueprint', 'create:gantry_contraption', 'create:seat', 'create:stationary_contraption', 'minecraft:pig', 'minecraft:strider', 'minecraft:horse', 'minecraft:wolf', 'minecraft:cat', 'minecraft:axolotl', 'minecraft:fox', 'minecraft:rabbit', 'minecraft:frog', 'environmental:slabfish']
    if (!entity.alive || blacklistEntities.includes(entity.type)) return;
  
    nbt.put('ArmorDropChances', NBT.listTag([NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)]));
    nbt.put('HandDropChances', NBT.listTag([NBT.f(0), NBT.f(0)]));
    entity.mergeNbt(nbt);
});