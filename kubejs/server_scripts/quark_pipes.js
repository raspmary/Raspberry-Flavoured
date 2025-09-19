// script by Kobber

// Add casing to pipe
ServerEvents.recipes(event => {
  event
    .custom({
      type: "create:item_application",
      ingredients: ["quark:pipe", "create:brass_casing"],
      results: "quark:encased_pipe",
      keepHeldItem: true,
    })
    .id("create:item_application/quark_pipe_manual_only");
  event
    .custom({
      type: "create:item_application",
      ingredients: ["quark:encased_pipe", "create:wrench"],
      results: "quark:pipe",
      keepHeldItem: true,
    })
    .id("create:item_application/quark_encased_pipe_manual_only");
});

// Place encased pipes when holding brass casing in off hand
BlockEvents.placed("quark:pipe", (event) => {
  if(event.player.offHandItem.is("create:brass_casing")) {
    var state = event.block.properties;
    event.block.set("quark:encased_pipe", state);
  }
});