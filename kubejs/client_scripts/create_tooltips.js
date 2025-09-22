// script by Uncandango / unknownrj

const $ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const $TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier")
const $Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette")

ClientEvents.lang("en_us", (event) => {
  event.addAll(
    createTooltip("toms_storage:ts.inventory_connector")
      .addSummary("Not to be confused with the _Portable Storage Interface_! Internally merges all of the connected _storage blocks_' inventories into one.")
      .addBehaviour(["When R-Clicked", "Displays the _maximum amount_ of connected storage slots and how many are _currently available_."])
      .addBehaviour(["When Used with Storage Terminal", "Can manually access _all items_ inside of all inventories merged together by the _Storage Interface_."])
      .build()
  )
  event.addAll(
    createTooltip("toms_storage:ts.storage_terminal")
      .addSummary("Grants access to _all items_ inside of a _storage block_ it's placed on in a nifty menu with _various functions_, even accessing containers without visible _UIs_ like _Item Vaults_.")
      .addBehaviour(["When Placed on Storage Interface", "Can manually access _all items_ inside of all inventories merged together by the _Storage Interface_."])
      .build()
  )
  event.addAll(
    createTooltip("storagedrawers:oak_full_drawers_1")
      .addSummary("Allows for _bulk storage_ of a _single type of item_. Up to _80 stacks_ of one item can be stored. If mined while full, stored items will _remain inside_.")
      .addBehaviour(["When L-Clicked", "Takes out a _single item_. If sneaking, takes out an _entire stack_."])
      .addBehaviour(["When R-Clicked with Any Item", "Stores _entire held stack_. If right-clicked twice in _quick succession_, will store _all of the same type of item_ within the player's _inventory_."])
      .addBehaviour(["When Sneak-R-Clicked with Empty Hand", "Locks the _Item Drawer_ to a type of item. When all items inside the _Item Drawer_ are taken out, the lock will _act as a filter_, only accepting _items of the same type_."])
      .build()
  )
  event.addAll(
    createTooltip("storagedrawers:controller")
      .addSummary("Allows for _easy item deposit_ into connected _Item Drawers_. Can only take items out using a _Hopper_ or _Chute_.")
      .addBehaviour(["When R-Clicked with Any Item", "Automatically stores _entire held stack_ into the nearest _Item Drawer_ with a matching _item type_."])
      .build()
  )
})

function createTooltip(/** @type {Special.Item} */ itemId){
  return new CreateTooltipBuilder(itemId)
}

function CreateTooltipBuilder(itemId) {
  this.itemId = Item.of(itemId).idLocation
  this.descriptionId = Item.of(itemId).descriptionId
  this.summary = ""
  this.conditions = []
  this.behaviours = []
  this.controls = []
  this.actions = []
  this.palette = $Palette.STANDARD_CREATE
}
CreateTooltipBuilder.prototype = {
  addSummary: function (/**@type {string} */ summary) {
    this.summary = summary
    return this
  },
  addBehaviour: function (/**@type {string[]} */ conditionAndBehaviour) {
    this.conditions.push(conditionAndBehaviour[0])
    this.behaviours.push(conditionAndBehaviour[1])
    return this
  },
  addAction: function (/**@type {string[]} */ controlsAndActions) {
    this.controls.push(controlsAndActions[0])
    this.actions.push(controlsAndActions[1])
    return this
  },
  setPalette: function (/**@type {Internal.TooltipHelper$Palette} */ palette) {
    this.palette = palette
    return this
  },
  build: function () {
    $TooltipModifier.REGISTRY.registerDeferred(this.itemId, (item) => new $ItemDescription(item, this.palette))
    let map = Utils.newMap()
    map.putIfAbsent(this.descriptionId + ".tooltip", this.itemId.path.toUpperCase())
    if (this.summary != "") {
      map.putIfAbsent(this.descriptionId + ".tooltip.summary", this.summary)
    }
    for (let index = 0; index < this.conditions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.condition" + (index + 1), this.conditions[index])
    }
    for (let index = 0; index < this.behaviours.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.behaviour" + (index + 1), this.behaviours[index])
    }
    for (let index = 0; index < this.controls.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.control" + (index + 1), this.controls[index])
    }
    for (let index = 0; index < this.actions.length; index++) {
      map.putIfAbsent(this.descriptionId + ".tooltip.action" + (index + 1), this.actions[index])
    }
    return map
  }
}
