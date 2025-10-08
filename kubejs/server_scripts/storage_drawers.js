// script by Kobber
const LockAttribute = Java.loadClass(
  "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
);

function setDrawerData(block) {
  // Add fill level upgrade
  if (block.entityData.Upgrades.length == 0) {
    var fill_level_upgrade_item = Item.of("storagedrawers:fill_level_upgrade");
    block.entity.upgrades().addUpgrade(fill_level_upgrade_item);
  }

  // Enable item count display
  block.entity.getDrawerAttributes().setIsShowingQuantity(true);
}

BlockEvents.placed("storagedrawers:oak_full_drawers_1", (event) => {
  setDrawerData(event.block);
});

BlockEvents.placed("kubejs:empty_item_drawer", (event) => {
  // Replace empty drawer with real drawer when placed
  var props = event.block.properties;
  event.block.set("storagedrawers:oak_full_drawers_1", props);
  setDrawerData(event.block);
});

BlockEvents.broken("storagedrawers:oak_full_drawers_1", (event) => {
  // Remove upgrade when block is broken
  // - This fixes drawers not stacking in inventory after they have been placed and picked up again
  event.block.entity.upgrades().setUpgrade(0, Item.empty);
  
  // Drop empty drawer item if drawer is empty
  if (event.block.entity.getGroup().getDrawer(0).isEmpty()) {
    event.block.set("minecraft:air");
    event.block.popItem("kubejs:empty_item_drawer");
  }
});

// Toggle lock when right clicking
BlockEvents.rightClicked("storagedrawers:oak_full_drawers_1", (event) => {
  if (event.player.isCrouching() && event.player.mainHandItem.isEmpty() == true) {
    var attrs = event.block.entity.getDrawerAttributes();
    var locked = attrs.isItemLocked(LockAttribute.LOCK_POPULATED);
    attrs.setItemLocked(LockAttribute.LOCK_EMPTY, !locked);
    attrs.setItemLocked(LockAttribute.LOCK_POPULATED, !locked);
  }
});