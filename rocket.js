class Rocket {
	constructor(name, properties) {
		this.name = name;
		this.properties = JSON.parse(JSON.stringify(properties));
		this.updateUI();
	}	

	reset() {
		this.properties = JSON.parse(JSON.stringify(rocketTypes[0]));
		if (this.properties.auto) {
			document.getElementById('basicDisableAuto').classList.add('pure-button-active');		
			document.getElementById('basicBtnLaunch').style.display = 'none';
			document.getElementById('basicBtnFuel').style.display = 'none';
			this.launch();
		}
	}

	switchAuto() {
		
	}

	launch() {
		if (game.rockLimit > game.rockLaunched) {
			game.rockLaunched += 1;
			lore[1] = "You set up a launch pad in a field filled with flowers and one-leafed clovers. As you launch the rocket, you realize you won't be able to make any money for future launches, which is sad.";		
	
			var autoLaunch = setInterval(function () {
				if (this.properties.fuel.amount > 0) {
					let money = this.properties.moneyPerFuel * game.rockLimit;				
					game.money += money;
					this.properties.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (this.properties.auto === false) {
					lore[2] = "The day after the rocket launch, you recieve a letter saying \'That rocket launch was cool. Hope you can do more!\' with enough money to fund another launch. The letter is signed \'FM\'";
					game.rockLaunched = 0;				
					clearInterval(autoLaunch);
				}
			}.bind(this), 50);
		}
	}

	buyFuel() {		
		let fuelCost = this.properties.fuel.cost * this.properties.fuel.max;
		if (game.money >= fuelCost) {
			if (this.properties.fuel.amount === 0 ) { 
				game.money -= fuelCost;
				this.properties.fuel.amount = this.properties.fuel.max;
				this.properties.fuel.cost = parseFloat(this.properties.fuel.cost * (1 + (0.0002 * this.properties.fuel.max))).toFixed(2);
			} 
		}
	}

	buyUpgrade1() {}

	buyUpgrade2() {}

	buyUpgrade3() {}

	buyUpgrade4() {}
	
	updateUI() {}
}

let rocketTypes = [
	basicRocket = {
		moneyPerFuel: 10,
		auto: false,
		fuel: {
			amount: 150,
			cost: 3,
			max: 150,
			scaleDown: 1
		},
		up1: {
			cost: 2500,
			buys: 0,
			scaling: 1.3
		},
		up2: {
			cost: 4000,
			buys: 0,
			scaling: 1.4
		},
		up3: {
			cost: 6000,
			buys: 0,
			scaling: 1.5
		},
		techs: {
			techStart: false,
			cs1: 0,
			cs2: 0,
			cs3: 0,
			ef3: 0,
			mpf: 0,
			cmx: 0,
			maxTP: 0,
			currentTP: 0,
			respec: false
		}
	},
	explorer = {
		moneyPerFuel: 1500000,
		rockLimit: 1,
		rockLaunched: 0,
		affectByCreat: false,
		successChance: 100,
		auto: false,
		unlocked: false,
		fuel: {
			max: 150,
			cost: 100000,
			amount: 0,
			scaleDown: 1
		},
		up1: {
			cost: 250000000,
			buys: 0,
			scaling: 1.4
		},
		up2: {
			cost: 400000000,
			buys: 0,
			scaling: 1.6
		},
		up3: {
			cost: 600000000,
			buys: 0,
			scaling: 1.8
		},
		up4: {
			cost: 400000000,
			buys: 0,
			scaling: 1.7
		},
		techs: {
			techStart: false,
			cs1: 0,
			cs2: 0,
			cs3: 0,
			cs4: 0,
			ef3: 0,
			mpf: 0,
			cmx: 0,
			ef4: 0,
			maxTP: 0,
			currentTP: 0,
			respec: false
		}
	}
];

class BasicRocket extends Rocket {
	constructor() {
		super('basicRocket', rocketTypes[0]);
	}

	prestige() {

		let prestige = JSON.parse(JSON.stringify(rocketTypes[0]));

		this.properties.fuel = prestige.fuel;
		this.properties.up1 = prestige.up1;
		this.properties.up2 = prestige.up2;
		this.properties.up3 = prestige.up3;

		let gameCreat = game.creat < 256 ? game.creat + 1 : 256;

		if (game.ally === 0) {
			this.properties.moneyPerFuel = 10 * (Math.log2(gameCreat) + 1);
		} else {
			this.properties.moneyPerFuel = 10 * (Math.log2(gameCreat) + 1) * 1.5 * (this.properties.techs.mpf + 1);
		}
		
		if (this.properties.techs.respec === true) {
			this.properties.techs.cs1 = 0;
			this.properties.techs.cs2 = 0;
			this.properties.techs.cs3 = 0;
			this.properties.techs.ef3 = 0;
			this.properties.techs.mpf = 0;
			this.properties.techs.cmx = 0;
			this.properties.techs.currentTP = this.properties.techs.maxTP;
			this.properties.techs.respec = false;
		}

	}
	reset() {
		this.properties = JSON.parse(JSON.stringify(rocketTypes[0]));
	}

	switchAuto(isEnabled) {
		this.properties.auto = isEnabled;

		if (this.properties.auto) {
			document.getElementById('basicDisableAuto').classList.add('pure-button-active');		
			document.getElementById('basicBtnLaunch').style.display = 'none';
			document.getElementById('basicBtnFuel').style.display = 'none';
			this.launch();
		} else {
			document.getElementById('basicDisableAuto').classList.remove('pure-button-active');
			document.getElementById('basicBtnLaunch').style.display = 'inline';
			document.getElementById('basicBtnFuel').style.display = 'inline';
		}
	}

	launch() {
		super.launch();
	}

	buyFuel() {
		super.buyFuel();
	}

	buyUpgrade1() {

		if (game.money < this.properties.up1.cost) {
			return;
		}

		if (this.properties.up1.buys == 25) {
			return;
		}
		
		lore[4] = "You figure out that if you make your rocket taller or wider, you can fit more fuel inside. You feel like you should have thought of that by now.";
		
		this.properties.fuel.max = Math.floor(this.properties.fuel.max * 1.1);

		game.money -= this.properties.up1.cost;

		switch(this.properties.techs.cs1) {
			case 0:
					this.properties.up1.cost = Math.round(this.properties.up1.cost * 1.3);				
				break;
			case 1:
					this.properties.up1.cost = Math.round(this.properties.up1.cost * 1.28);				
				break;
			case 2:
					this.properties.up1.cost = Math.round(this.properties.up1.cost * 1.25);				
				break;
			case 3:
				this.properties.up1.cost = Math.round(this.properties.up1.cost * 1.21);				
				break;
			default:
		}
		
		this.properties.up1.buys += 1;		
	}

	buyUpgrade2() {

		if (game.money < this.properties.up2.cost) {
			return;
		}

		if (this.properties.up2.buys == 25) {
			return;
		}

		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		this.properties.fuel.cost = 2;
		this.properties.fuel.scaleDown = 1.05 * this.properties.fuel.scaleDown;
		game.money -= this.properties.up2.cost;

		switch(this.properties.techs.cs2) {
			case 0:
					this.properties.up2.cost = Math.round(this.properties.up2.cost * 1.4);
				break;
			case 1:
					this.properties.up2.cost = Math.round(this.properties.up2.cost * 1.38);				
				break;
			case 2:
					this.properties.up2.cost = Math.round(this.properties.up2.cost * 1.35);				
				break;
			case 3:
				this.properties.up2.cost = Math.round(this.properties.up2.cost * 1.31);				
				break;
			default:
		}
		
		this.properties.up2.buys += 1;
		
	}

	buyUpgrade3() {

		if (game.money < this.properties.up3.cost) {
			return;
		}

		if (this.properties.up3.buys == 25) {
			return;
		}

		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		
		game.money -= this.properties.up3.cost;

		switch(this.properties.techs.ef3) {
			case 0:
				this.properties.moneyPerFuel = this.properties.moneyPerFuel * 1.25;
				break;
			case 1:
				this.properties.moneyPerFuel = this.properties.moneyPerFuel * 1.28;
				break;
			case 2:
				this.properties.moneyPerFuel = this.properties.moneyPerFuel * 1.30;
				break;
			case 3:
				this.properties.moneyPerFuel = this.properties.moneyPerFuel * 1.32;
				break;
			default:
		}

		switch(this.properties.techs.cs3) {
			case 0:
				this.properties.up3.cost = Math.round(this.properties.up3.cost * 1.5);
				break;
			case 1:
				this.properties.up3.cost = Math.round(this.properties.up3.cost * 1.48);
				break;
			case 2:
				this.properties.up3.cost = Math.round(this.properties.up3.cost * 1.45);
				break;
			case 3:
				this.properties.up3.cost = Math.round(this.properties.up3.cost * 1.4);
				break;
			default:
		}		

		this.properties.up3.buys += 1;
	}

	buyTech1() {
		if (this.properties.techs.cs1 < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.cs1 += 1;
		}
	}

	buyTech2() {
		if (this.properties.techs.cs2 < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.cs2 += 1;
		}
	}

	buyTech3() {
		if (this.properties.techs.cs3 < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.cs3 += 1;
		}
	}

	buyTech4() {
		if (this.properties.techs.ef3 < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.ef3 += 1;
		}
	}

	buyTech5() {
		if (this.properties.techs.mpf < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.mpf += 1;
		}
	}

	buyTech6() {
		if (this.properties.techs.cmx < 3 && this.properties.techs.currentTP > 0) {
			this.properties.techs.currentTP -= 1;
			this.properties.techs.cmx += 1;
		}
	}

	resetTech() {
		this.properties.techs.respec = true;
	}

	updateUI() {
		var uiUpdate = setInterval(function() {		
			
			if (this.properties.auto) {
				this.buyFuel();
			}

			if (this.properties.techs.techStart === true) {
				document.getElementById("basicTechs").style.display = "";
				document.getElementById("basicTechs2").style.display = "";
			} else {
				document.getElementById("basicTechs").style.display = "none";
				document.getElementById("basicTechs2").style.display = "none";
			}

			document.getElementById("fuel").innerHTML = this.properties.fuel.amount;
			document.getElementById("fuelMax").innerHTML = this.properties.fuel.max;
			document.getElementById("fuelCost").innerHTML = numberWithCommas(this.properties.fuel.cost);
			document.getElementById("moneyPerFuel").innerHTML = numberWithCommas(Math.round(this.properties.moneyPerFuel));
			document.getElementById("basicTechPoints").innerHTML = this.properties.techs.currentTP;
			document.getElementById("maxBTP").innerHTML = this.properties.techs.maxTP;
			document.getElementById('basicDisableAuto').style.display = game.pUp5Bought == true ? 'inline' : 'none';
			document.getElementById('basicRocketCount').innerHTML = game.rockLimit;
			document.getElementById('autoRocketCount').innerHTML = game.rockLimit;
			document.getElementById("upgrade1Cost").innerHTML = numberWithCommas(this.properties.up1.cost);
			document.getElementById("upgrade1Buys").innerHTML = this.properties.up1.buys;
			document.getElementById("upgrade2Cost").innerHTML = numberWithCommas(this.properties.up2.cost);
			document.getElementById("upgrade2Buys").innerHTML = this.properties.up2.buys;
			document.getElementById("upgrade3Cost").innerHTML = numberWithCommas(this.properties.up3.cost);
			document.getElementById("upgrade3Buys").innerHTML = this.properties.up3.buys;
			document.getElementById("TC11").innerHTML = this.properties.techs.cs1;
			document.getElementById("TC12").innerHTML = this.properties.techs.cs2;
			document.getElementById("TC13").innerHTML = this.properties.techs.cs3;
			document.getElementById("TC14").innerHTML = this.properties.techs.ef3;
			document.getElementById("TC15").innerHTML = this.properties.techs.mpf;
			document.getElementById("TC16").innerHTML = this.properties.techs.cmx;

			if (this.properties.up1.buys === 25 && this.properties.up2.buys === 25 && this.properties.up3.buys === 25) {
				lore[12] = "You have done everything you can with this rocket. Maybe it's time to start a new project.";
			}
			if (this.properties.techs.techStart === true) {
				if (this.properties.up1.buys >= 5 && this.properties.up2.buys >= 5 && this.properties.up3.buys >= 5 && this.properties.techs.maxTP === 0) {
					this.properties.techs.maxTP = 1;
					this.properties.techs.currentTP = 1;
				}
				if (this.properties.up1.buys >= 10 && this.properties.up2.buys >= 10 && this.properties.up3.buys >= 10 && this.properties.techs.maxTP === 1) {
					this.properties.techs.maxTP = 2;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 15 && this.properties.up2.buys >= 15 && this.properties.up3.buys >= 15 && this.properties.techs.maxTP === 2) {
					this.properties.techs.maxTP = 3;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 20 && this.properties.up2.buys >= 20 && this.properties.up3.buys >= 20 && this.properties.techs.maxTP === 3) {
					this.properties.techs.maxTP = 4;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 22 && this.properties.up2.buys >= 22 && this.properties.up3.buys >= 22 && this.properties.techs.maxTP === 4) {
					this.properties.techs.maxTP = 5;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 24 && this.properties.up2.buys >= 24 && this.properties.up3.buys >= 24 && this.properties.techs.maxTP === 5) {
					this.properties.techs.maxTP = 6;
					this.properties.techs.currentTP += 1;
				}
			}
		}.bind(this), 100);
	}
}

class Explorer extends Rocket {
	constructor() {
		super('explorer', rocketTypes[1]);
		
		this.updateUI();
	}	

	reset() {
		this.properties = JSON.parse(JSON.stringify(rocketTypes[0]));
	}

	switchAuto() {
		this.properties.auto = !this.properties.auto;
	}

	launch() {
		if (this.properties.rockLaunched <= this.properties.rockLimit) {
			let explorerFailChance = getRandomInt(100);
			if (explorerFailChance < this.properties.successChance) {
				this.properties.rockLaunched += 1;
				var explorerLaunch = setInterval(function () {
					if (this.properties.fuel.amount > 0) {
	
						game.money += this.properties.moneyPerFuel;
						this.properties.fuel.amount -= 1;
						game.money = Math.round(game.money * 100) / 100;
					} else if (this.properties.auto === false) {
						this.properties.rockLaunched = 0;
						clearInterval(explorerLaunch);
					}
				}.bind(this), 50);
			} else {
				game.money -= game.money / 2;
				this.properties.fuel.amount = 0;
				lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
			}
		}
	}

	buyFuel() {		
		let fuelCost = this.properties.fuel.cost * this.properties.fuel.max;
		if (game.money >= fuelCost) {
			if (this.properties.fuel.amount === 0 ) { 
				game.money -= fuelCost;
				this.properties.fuel.amount = this.properties.fuel.max;
				this.properties.fuel.cost = parseFloat(this.properties.fuel.cost * (1 + (0.0001 * this.properties.fuel.max))).toFixed(2);
			} 
		}
	}

	buyUpgrade1() {}

	buyUpgrade2() {}

	buyUpgrade3() {}

	buyUpgrade4() {}
	
	updateUI() {
		var uiUpdate = setInterval(function() {		
			
			if (this.properties.auto) {
				this.buyFuel();
			}

			if (this.properties.unlocked === true) {
				document.getElementById("explorerContent").style.display = "";
				document.getElementById("explorerContent2").style.display = "";
			} else {
				document.getElementById("explorerContent").style.display = "none";
				document.getElementById("explorerContent2").style.display = "none";
			}

			if (this.properties.techs.techStart === true) {
				document.getElementById("explorerTechs").style.display = "";
				document.getElementById("explorerTechs2").style.display = "";
			} else {
				document.getElementById("explorerTechs").style.display = "none";
				document.getElementById("explorerTechs2").style.display = "none";
			}

			document.getElementById("explorerFuel").innerHTML = this.properties.fuel.amount;
			document.getElementById("explorerFuelMax").innerHTML = this.properties.fuel.max;
			document.getElementById("explorerFuelCost").innerHTML = numberWithCommas(this.properties.fuel.cost);
			document.getElementById("explorerMoneyPerFuel").innerHTML = numberWithCommas(Math.round(this.properties.moneyPerFuel));
			document.getElementById("explorerTechPoints").innerHTML = this.properties.techs.currentTP;
			document.getElementById("maxETP").innerHTML = this.properties.techs.maxTP;
			document.getElementById("explorerFailChance").innerHTML = this.properties.successChance.toFixed(2);
			document.getElementById('explorerDisableAuto').style.display = this.properties.auto == true ? 'inline' : 'none';
			document.getElementById("explorerUpgrade1Cost").innerHTML = numberWithCommas(this.properties.up1.cost);
			document.getElementById("explorerUpgrade1Buys").innerHTML = this.properties.up1.buys;
			document.getElementById("explorerUpgrade2Cost").innerHTML = numberWithCommas(this.properties.up2.cost);
			document.getElementById("explorerUpgrade2Buys").innerHTML = this.properties.up2.buys;
			document.getElementById("explorerUpgrade3Cost").innerHTML = numberWithCommas(this.properties.up3.cost);
			document.getElementById("explorerUpgrade3Buys").innerHTML = this.properties.up3.buys;
			document.getElementById("explorerUpgrade4Cost").innerHTML = numberWithCommas(this.properties.up4.cost);
			document.getElementById("explorerUpgrade4Buys").innerHTML = this.properties.up4.buys;
			document.getElementById("TC21").innerHTML = this.properties.techs.cs1;
			document.getElementById("TC22").innerHTML = this.properties.techs.cs2;
			document.getElementById("TC23").innerHTML = this.properties.techs.cs3;
			document.getElementById("TC24").innerHTML = this.properties.techs.cs4;
			document.getElementById("TC25").innerHTML = this.properties.techs.ef3;
			document.getElementById("TC26").innerHTML = this.properties.techs.ef4;
			document.getElementById("TC27").innerHTML = this.properties.techs.mpf;
			document.getElementById("TC28").innerHTML = this.properties.techs.cmx;

			if (this.properties.up1.buys === 25 && this.properties.up2.buys === 25 && this.properties.up3.buys === 25) {
				lore[12] = "You have done everything you can with this rocket. Maybe it's time to start a new project.";
			}
			if (this.properties.techs.techStart === true) {
				if (this.properties.up1.buys >= 5 && this.properties.up2.buys >= 5 && this.properties.up3.buys >= 5 && this.properties.techs.maxTP === 0) {
					this.properties.techs.maxTP = 1;
					this.properties.techs.currentTP = 1;
				}
				if (this.properties.up1.buys >= 10 && this.properties.up2.buys >= 10 && this.properties.up3.buys >= 10 && this.properties.techs.maxTP === 1) {
					this.properties.techs.maxTP = 2;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 15 && this.properties.up2.buys >= 15 && this.properties.up3.buys >= 15 && this.properties.techs.maxTP === 2) {
					this.properties.techs.maxTP = 3;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 20 && this.properties.up2.buys >= 20 && this.properties.up3.buys >= 20 && this.properties.techs.maxTP === 3) {
					this.properties.techs.maxTP = 4;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 22 && this.properties.up2.buys >= 22 && this.properties.up3.buys >= 22 && this.properties.techs.maxTP === 4) {
					this.properties.techs.maxTP = 5;
					this.properties.techs.currentTP += 1;
				}
				if (this.properties.up1.buys >= 24 && this.properties.up2.buys >= 24 && this.properties.up3.buys >= 24 && this.properties.techs.maxTP === 5) {
					this.properties.techs.maxTP = 6;
					this.properties.techs.currentTP += 1;
				}
			}
		}.bind(this), 100);
	}

}
let rocket1 = new BasicRocket();
let rocket2 = new Explorer();

var game = {
	money: 0,
	rock3: {
		active: false,
		fuel: {
			max: 150,
			cost: 1e12,
			amount: 0,
			scaleDown: 1
		},
		auto: {
			rocket: false,
			fuel: false
		},
		up1: {
			cost: 2.5e17,
			buys: 0,
			scaling: 1.3
		},
		up2: {
			cost: 4e17,
			buys: 0,
			scaling: 1.4
		},
		up3: {
			cost: 6e17,
			buys: 0,
			scaling: 1.6
		},
		up4: {
			cost: 4e17,
			buys: 0,
			scaling: 1.4
		},
		techs: {
			techStart: false,
			cs1: 0,
			cs2: 0,
			cs3: 0,
			cs4: 0,
			ef3: 0,
			mpf: 0,
			cmx: 0,
			ef4: 0,
			maxTP: 0,
			currentTP: 0,
			respec: false
		},
		moneyPerFuel: 5e16,
		rockLimit: 1,
		rockLaunched: 0,
		affectByCreat: false,
		successChance: 100
	},
	rock4: {
		active: false,
		fuel: {
			max: 150,
			cost: 1e21,
			amount: 0,
			scaleDown: 1
		},
		auto: {
			rocket: false,
			fuel: false
		},
		up1: {
			cost: 2.5e23,
			buys: 0,
			scaling: 1.3
		},
		up2: {
			cost: 4e23,
			buys: 0,
			scaling: 1.4
		},
		up3: {
			cost: 6e23,
			buys: 0,
			scaling: 1.6
		},
		up4: {
			cost: 4e23,
			buys: 0,
			scaling: 1.4
		},
		techs: {
			techStart: false,
			cs1: 0,
			cs2: 0,
			cs3: 0,
			cs4: 0,
			ef3: 0,
			mpf: 0,
			cmx: 0,
			ef4: 0,
			maxTP: 0,
			currentTP: 0,
			respec: false
		},
		moneyPerFuel: 1e22,
		rockLimit: 1,
		rockLaunched: 0,
		affectByCreat: false,
		successChance: 100
	},
	rock5: {
		active: false,
		fuel: {
			max: 150,
			cost: 1e28,
			amount: 0,
			scaleDown: 1
		},
		auto: {
			rocket: false,
			fuel: false
		},
		up1: {
			cost: 2.5e30,
			buys: 0,
			scaling: 1.3
		},
		up2: {
			cost: 4e30,
			buys: 0,
			scaling: 1.4
		},
		up3: {
			cost: 6e30,
			buys: 0,
			scaling: 1.6
		},
		up4: {
			cost: 4e30,
			buys: 0,
			scaling: 1.4
		},
		techs: {
			techStart: false,
			cs1: 0,
			cs2: 0,
			cs3: 0,
			cs4: 0,
			ef3: 0,
			mpf: 0,
			cmx: 0,
			ef4: 0,
			maxTP: 0,
			currentTP: 0,
			respec: false
		},
		moneyPerFuel: 1e29,
		rockLimit: 1,
		rockLaunched: 0,
		affectByCreat: false,
		successChance: 100
	},
	auto: {
		rocket: false,
		fuel: false
	},
	//HλLF-LIFE 3 confirmed
	up1Cost: 2500,
	up1buys: 0,
	up2Cost: 4000,
	up2buys: 0,
	up3Cost: 6000,
	up3buys: 0,
	creat: 0,
	creatGainReset: 0,
	ally: 0,
	rockLimit: 1,
	allyButText: "none",
	era: "before",
	pUp2cost: 5,
	rockLaunched: 0,
	pUp3cost: 5,
	rocket: 0,
	funRuined: false,
	creatMult: 1,
	pUp4Bought: false,
	brainstormed: false,
	explorerUnlocked: false,
	pUp5Bought: false,
	pUp9Bought: false
};