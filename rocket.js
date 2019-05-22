class Rocket {
	constructor(name) {
		this.name = name;
	}

	buyFuel() {
		
	}
}

function launch(rocket) {

}

function buyFuel() {

	let fuelCost = game.basicRocket.fuel.cost * game.basicRocket.fuel.max;

	if (game.basicRocket.fuel.amount === 0) {
		document.getElementById('basicBtnLaunch').classList.remove('pure-button-disabled')
		if (game.money >= fuelCost) {								
			game.money -= fuelCost;
			game.basicRocket.fuel.amount = game.basicRocket.fuel.max;
			game.basicRocket.fuel.cost = game.basicRocket.fuel.cost * (1 + (0.0002 * game.basicRocket.fuel.max) * game.basicRocket.fuel.scaleDown);
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}	else if (game.money < fuelCost) {		
			var halp = Math.floor(game.money / game.basicRocket.fuel.cost);
			game.basicRocket.fuel.amount += halp;
			game.money -= game.basicRocket.fuel.cost * halp;
			halp = 0;		
		}
	}
}