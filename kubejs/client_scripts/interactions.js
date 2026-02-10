// prevent flicker when using saplings on nylium
BlockEvents.rightClicked(event => {
  const { item, block } = event

  if (item.id === 'architects_palette:twisted_sapling') return

  if (item.hasTag('minecraft:saplings') && block.hasTag('minecraft:nylium')) {
    event.cancel()
  }
})

// prevent flicker when trying to convert poismoss to a path block
BlockEvents.rightClicked(event => {
  const { block, item, hand } = event;
  
  if (block.id === 'endergetic:poismoss' && item.hasTag('forge:tools/shovels')) {
    event.cancel();
  }
});