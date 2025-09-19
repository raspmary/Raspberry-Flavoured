// script by Kobber
const LockAttribute = Java.loadClass(
  "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
);

BlockEvents.placed("storagedrawers:oak_full_drawers_1", (event) => {
  // Add fill level upgrade
  if (event.block.entityData.Upgrades.length == 0) {
    var fill_level_upgrade_item = Item.of("storagedrawers:fill_level_upgrade");
    event.block.entity.upgrades().addUpgrade(fill_level_upgrade_item);
  }

  // Enable item count display
  event.block.entity.getDrawerAttributes().setIsShowingQuantity(true);
});

// Remove upgrade when block is broken
// - This fixes drawers not stacking in inventory after they have been placed and picked up again
BlockEvents.broken("storagedrawers:oak_full_drawers_1", (event) => {
  event.block.entity.upgrades().setUpgrade(0, Item.empty);
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