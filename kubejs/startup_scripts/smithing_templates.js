// priority: 0

StartupEvents.registry('item', event => {
	const smithingTemplates = [
	'1',  // echo shard - swift sneak & phalanx - HAS TEXTURE (nöelle)
	'2',  // steel ingot - knockback & bulwark - HAS TEXTURE (nöelle)
	'3',  // nautilus shell - respiration & depth strider - HAS TEXTURE (bails)
	'4',  // blue ice - frost walker & frost aspect - HAS TEXTURE (nöelle)
	'5',  // silver ingot - smite - HAS TEXTURE (bails)
	'6',  // spider eye - bane of arthropods & spread of ailments - HAS TEXTURE (crab)
	'7',  // gold ingot - quick draw & swiftstrike - HAS TEXTURE (nöelle)
	'8',  // four leaf clover - angler's bounty - HAS TEXTURE (beb)
	'9',  // thrasher tooth - impaling, trueshot & backstabbing - HAS TEXTURE (nöelle)
	'10', // prismarine shard - riptide, sweeping edge & power swipe - HAS TEXTURE (noodleman)
	'11', // lightning rod - channeling - HAS TEXTURE (nöelle)
	'12', // ender pearl - stasis, displacement & ender disruption - HAS TEXTURE (bails)
	'13', // fluid tank - capacity - HAS TEXTURE (beb)
	'14', // horse armour - cavalier - HAS TEXTURE (jameslice)
	'15', // ghast tear - leech & vengeance - HAS TEXTURE (bails)
	'16', // spring launcher - launch - HAS TEXTURE (nöelle)
	'17', // magnetite - reeling & lure - HAS TEXTURE (crab)
	'18', // enchanted apple - vitality - HAS TEXTURE (noodleman)
	'19', // anvil - shockwave - HAS TEXTURE (nöelle)
	'20', // glowstone - marking - HAS TEXTURE (nöelle)
	'21', // rabbits foot - multi-leap - HAS TEXTURE (noodleman)
	'22', // extendo grip - reach - HAS TEXTURE (nöelle)
	'23', // soul bead - soul speed & homing - HAS TEXTURE (nöelle)
	'24' // slime block - volley - HAS TEXTURE (nöelle)
	]
	smithingTemplates.forEach(smithingTemplate => {
		event.create('smithing_template_'+smithingTemplate).displayName('Enchanted Tablet').glow(true).rarity('rare').group('brewing');
	})
})