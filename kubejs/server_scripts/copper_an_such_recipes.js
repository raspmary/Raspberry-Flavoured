// script by asof

let excluded=[
  /caverns_and_chasms:.*toolbox/,
  /copperized:.*bars/,
  /copperized:.*door/,
  /copperized:.*button/,
  /sullysmod:.*button/,
  /architects_palette:.*nub/,
  /twigs:.*pillar/,
  /vertical_slab/,
  /friendsandfoes/,
  /alloyed/
]

ServerEvents.recipes(event=>{

  function scrape(input,output,byproduct,chance){
    event.recipes.farmersdelight.cutting(
      [Item.of(input)],
      "#forge:tools/axes",
      byproduct?[
        Item.of(output),
        Item.of(byproduct).withChance(chance),
      ]:[Item.of(output)],
      "minecraft:item.axe.wax_off",
    )
    
  }

  function patinafy(input,output){
    const patina = Item.of("additionaladditions:copper_patina")
    if(!input.match(/door/)) event.custom({
      "type": "create:item_application",
      "ingredients": [Item.of(input),patina],
      "results": [Item.of(output)]
    })
    event.recipes.minecraft.crafting_shapeless(Item.of(output),[Item.of(input),patina])
  }

  function brushWax(input,output){
    event.recipes.farmersdelight.cutting(
      [Item.of(input)],
      "kubejs:copper_brush_wax",
      [Item.of(output)],
      "minecraft:item.honeycomb.wax_on"
    )
  }

  function fixId(i){
    if(i=='caverns_and_chasms:lightning_rod') return 'minecraft:lightning_rod'
    if(i=="minecraft:copper") return "minecraft:copper_block"
    if(!i.startsWith("oreganized:waxed_") && i.match(/concrete_powder/)) return i.replace("oreganized:","minecraft:")
    return i
  }

  Ingredient.of(/oxidized/).itemIds.forEach(i=>{
    if(i.match(/waxed_/)) return;
    if(i=='caverns_and_chasms:oxidized_copper_golem') return;
    if(excluded.some(r=>i.match(r))) return;


    let oxidized = fixId(i)
    let weathered = fixId(i.replace("oxidized_","weathered_"))
    let exposed = fixId(i.replace("oxidized_","exposed_"))
    let base = fixId(i.replace("oxidized_",""))

    let chance = 1;
    if(i.match(/slab/)) chance = 0.5;
    
    scrape(oxidized,weathered,'additionaladditions:copper_patina',chance)
    scrape(weathered,exposed,'additionaladditions:copper_patina',chance)
    scrape(exposed,base,'additionaladditions:copper_patina',chance)

    patinafy(base,exposed)
    patinafy(exposed,weathered)
    patinafy(weathered,oxidized)
  })

  Ingredient.of(/waxed_/).itemIds.forEach(i=>{
    if(excluded.some(r=>i.match(r))) return;
    let waxed = fixId(i)
    let unwaxed = fixId(i.replace("waxed_",""))
    scrape(waxed,unwaxed)
    brushWax(unwaxed,waxed)
  })
})