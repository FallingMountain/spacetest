
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function basicSwitchAuto() {
	rocket1.switchAuto(!rocket1.properties.auto);	
}

function rockLaunch1() {
	rocket1.launch();	
}

function buyFuel() {
	rocket1.buyFuel();
}

function upgrade1() {
	rocket1.buyUpgrade1();
}

function upgrade2() {
	rocket1.buyUpgrade2();	
}

function upgrade3() {
	rocket1.buyUpgrade3();	
}

function explorerSwitchAuto() {
	rocket2.switchAuto(!rocket2.properties.auto);
}

function explorerLaunch() {
	rocket2.launch();
}

function explorerBuyFuel() {
	rocket2.buyFuel();
}

function explorerUpgrade1() {
	rocket2.buyUpgrade1();
}

function explorerUpgrade2() {
	rocket2.buyUpgrade2();
}

function explorerUpgrade3() {
	rocket2.buyUpgrade3();
}

function explorerUpgrade4() {
	rocket2.buyUpgrade4();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function bugFix() {
	game.basicRocket.fuel.cost = Math.round(game.basicRocket.fuel.cost * 100) / 100;
	game.money = Math.round(game.money * 100) / 100;
	game.basicRocket.fuel.amount = Math.round(game.basicRocket.fuel.amount);
}

function p1Gain() {
	game.creatGainReset = Math.floor(Math.sqrt(game.money / 50000) * game.creatMult * ((rocket1.properties.techs.cmx / 2) + 1) * ((rocket2.properties.techs.cmx / 1.5) + 1) * ((game.rock3.techs.cmx / 1.5) + 1));
}

function prestige1() {

	if (rocket1.properties.up1.buys >= 5 && 
		rocket1.properties.up2.buys >= 5 && 
		rocket1.properties.up3.buys >= 5 && 
		game.money >= 50000) {

		game.brainstormed = true;
		lore[7] = "You decide it's time to brainstorm up some better ideas for your rocket, so you deconstruct it using the money you have left.";
		game.creat += Math.floor(Math.sqrt(game.money / 50000) * game.creatMult * ((rocket1.properties.techs.cmx / 2) + 1) * ((rocket2.properties.techs.cmx / 1.5) + 1) * ((game.rock3.techs.cmx / 1.5) + 1));
		game.money = 0;
		
		rocket1.prestige();			
		rocket2.prestige();
		
		game.rock3.rockLaunched = 0;
		game.rock4.rockLaunched = 0;
		game.rock5.rockLaunched = 0;
		game.rock3.fuel.cost = 1e12;
		game.rock3.fuel.amount = 0;
		game.rock3.fuel.scaleDown = 1;
		game.rock3.fuel.max = 150;
		game.rock4.fuel.cost = 1e21;
		game.rock4.fuel.amount = 0;
		game.rock4.fuel.scaleDown = 1;
		game.rock4.fuel.max = 150;
		game.rock5.fuel.cost = 1e28;
		game.rock5.fuel.amount = 0;
		game.rock5.fuel.scaleDown = 1;
		game.rock5.fuel.max = 150;
		game.rock3.up1.buys = 0;
		game.rock3.up2.buys = 0;
		game.rock3.up3.buys = 0;
		game.rock3.up4.buys = 0;
		game.rock4.up1.buys = 0;
		game.rock4.up2.buys = 0;
		game.rock4.up3.buys = 0;
		game.rock4.up4.buys = 0;
		game.rock5.up1.buys = 0;
		game.rock5.up2.buys = 0;
		game.rock5.up3.buys = 0;
		game.rock5.up4.buys = 0;
		game.rock3.up1.cost = 2.5e17;
		game.rock3.up2.cost = 4e17;
		game.rock3.up3.cost = 6e17;
		game.rock3.up4.cost = 4e17;
		game.rock4.up1.cost = 2.5e23;
		game.rock4.up2.cost = 4e23;
		game.rock4.up3.cost = 6e23;
		game.rock4.up4.cost = 4e23;
		game.rock5.up1.cost = 2.5e30;
		game.rock5.up2.cost = 4e30;
		game.rock5.up3.cost = 6e30;
		game.rock5.up4.cost = 4e30;
		
		game.rock3.moneyPerFuel = (5e16 * (game.rock3.techs.mpf + 1)) * Math.log10(game.creat);
		
	}
}
// window.setInterval(function () {
// 	if (game.auto.fuel === true) {
// 		buyFuel();
// 	}
// 	if (game.rock2.auto.fuel === true) {
// 		expBuyFuel();
// 	}
// 	bugFix();
// 	p1Gain();
// }, 100);

function save() {
	localStorage.sri = btoa(JSON.stringify(game));
	localStorage.beta = btoa(JSON.stringify(rocket1.properties));
	localStorage.explorer = btoa(JSON.stringify(rocket2.properties));
}

function load() {
	if (localStorage.sri) {
		game = JSON.parse(atob(localStorage.sri));	
	}

	if (localStorage.beta) {
		rocket1.properties = JSON.parse(atob(localStorage.beta));
		if (rocket1.properties.auto) {
			document.getElementById('basicDisableAuto').classList.add('pure-button-active');		
			document.getElementById('basicBtnLaunch').style.display = 'none';
			document.getElementById('basicBtnFuel').style.display = 'none';
			rocket1.launch();
		}
	}

	if (localStorage.explorer) {
		rocket2.properties = JSON.parse(atob(localStorage.explorer));
		if (rocket2.properties.auto) {
			document.getElementById('explorerDisableAuto').classList.add('pure-button-active');		
			document.getElementById('explorerBtnLaunch').style.display = 'none';
			document.getElementById('explorerBtnFuel').style.display = 'none';
			rocket2.launch();
		}
	}
	
	game.rockLaunched = 0;
}

function outof() {
	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = btoa(JSON.stringify(game));
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
	alert("Save copied to clipboard");
}

function into() {
	var imp = prompt("Paste your save file here");
	if (imp == null) alert("That save file doesn't work, sorry.");
	else game = JSON.parse(atob(imp));
}

function pUpgrade1() {
	if (game.ally === 0 && game.creat >= 1) {
		game.ally = 1;
		game.creat -= 1;
		lore[8] = "Suddenly, you get a letter from NASA saying, \'Hello. We have heard of your \'accomplishments\' from FM, and was wondering if you'd like to join us\'. You gladly accept.";
	}
}

function pUpgrade2() {
	if (game.creat >= game.pUp2cost) {
		lore[9] = "You now have enough ideas that you think you can launch multiple rockets.";
		game.creat -= game.pUp2cost;
		game.rockLimit += 1;
		game.pUp2cost = Math.round(game.pUp2cost * 3);
	}
}

function pUpgrade3() {
	if (game.creat >= game.pUp3cost) {
		lore[10] = "After a good brainstorm, you find a better place to think, making you more creative.";
		game.creat -= game.pUp3cost;
		game.creatMult = game.creatMult * 1.5;
		game.pUp3cost = Math.round(game.pUp3cost * 3);
	}
}

function pUpgrade4() {
	if (game.creat >= 10 && game.pUp4Bought === false) {
		lore[11] = "You have recieved additional funding to make better rockets with things called Technology Points. Pretty cool.";
		game.creat -= 10;
		rocket1.properties.techs.techStart = true;
		game.pUp4Bought = true;
	}

}

function pUpgrade5() {
	if (game.creat >= 10 && game.pUp5Bought === false) {
		lore[13] = "NASA has sent some engineers to help you launch this rocket. They say it's for a new project you're going to be working on soon.";
		game.creat -= 10;
		rocket1.switchAuto(true);
		game.pUp5Bought = true;
	}
}

function pUpgrade6() {
	if (game.creat > 250 && rocket2.properties.unlocked === false && rocket1.properties.up1.buys === 25 && rocket1.properties.up2.buys === 25 && rocket1.properties.up3.buys === 25) {
		lore[14] = "You begin work on the Explorers project. The Explorers project was a massive project designed to get a satellite into space.";
		rocket2.properties.unlocked = true;
		game.creat -= 250;
	}
}

function pUpgrade7() {
	if (game.creat > 2500 && rocket2.properties.unlocked === true && rocket1.properties.techs.maxTP === 6) {
		lore[15] = "There's not much left to do with your basic rocket, but it's really close to perfection. Best to give it a little more power.";
		game.creat -= 2500;
		rocket1.properties.techs.maxTP = 18;
	}
}

function pUpgrade8() {
	if (game.creat > 7500 && rocket2.properties.unlocked === true && rocket2.properties.affectByCreat === false) {
		lore[16] = "The Explorers project is looking very good so far. You have all sorts of ideas for how to make it better.";
		rocket2.properties.affectByCreat = true;
		game.creat -= 7500;
	}
}

function pUpgrade9() {
	if (game.creat > 15000 && game.pUp9Bought === false) {
		lore[17] = "The first rocket is useless now. Moreso a stepping stone than anything.";
		game.creat -= 15000;
		game.pUp9Bought = true;

	}
}

function pUpgrade10() {
	if (game.creat > 50000 && rocket2.properties.techs.techStart === false) {
		game.creat -= 50000;
		rocket2.properties.techs.techStart = true;
	}
}

function pUpgrade11() {
	if (game.creat > 50000 && rocket2.properties.auto === false) {
		game.creat -= 50000;
		rocket2.switchAuto(true);
	}
}

function pUpgrade12() {
	if (game.creat > 10000000 && game.rock3.active === false) {
		game.creat -= 10000000;
		game.rock3.active = true;

	}
}

function pUpgrade13() {
	if (game.creat > 100000000 && game.rock3.techs.techStart === false) {
		game.creat -= 100000000;
		game.rock3.techs.techStart = true;

	}
}

function pUpgrade14() {
	if (game.creat > 100000000 && game.rock4.active === false && game.rock3.up1.buys === 50 && game.rock3.up2.buys === 50 && game.rock3.up3.buys === 50) {
		game.creat -= 100000000;
		game.rock4.active = true;

	}
}

function pUpgrade15() {
	if (game.creat > 10000000000 && game.rock4.techs.techStart === false && game.rock4.up1.buys === 25 && game.rock4.up2.buys === 25 && game.rock4.up3.buys === 25) {
		game.creat -= 100000000000;
		game.rock4.techs.techStart = true;

	}
}

function pUpgrade16() {
	if (game.creat > 100000000 && game.rock5.active === false && game.rock4.up1.buys === 50 && game.rock4.up2.buys === 50 && game.rock4.up3.buys === 50) {
		game.creat -= 100000000;
		game.rock5.active = true;

	}
}

function pUpgrade17() {
	if (game.creat > 10000000000 && game.rock5.techs.techStart === false && game.rock5.up1.buys === 25 && game.rock5.up2.buys === 25 && game.rock5.up3.buys === 25) {
		game.creat -= 100000000000;
		game.rock5.techs.techStart = true;

	}
}
setInterval(function () {
	
	if (game.rock3.techs.techStart === true) {
		if (game.rock3.up1.buys >= 5 && game.rock3.up2.buys >= 5 && game.rock3.up3.buys >= 5 && game.rock3.techs.maxTP === 0) {
			game.rock3.techs.maxTP = 1;
			game.rock3.techs.currentTP = 1;
		}
		if (game.rock3.up1.buys >= 10 && game.rock3.up2.buys >= 10 && game.rock3.up3.buys >= 10 && game.rock3.techs.maxTP === 1) {
			game.rock3.techs.maxTP = 2;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 15 && game.rock3.up2.buys >= 15 && game.rock3.up3.buys >= 15 && game.rock3.techs.maxTP === 2) {
			game.rock3.techs.maxTP = 3;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 20 && game.rock3.up2.buys >= 20 && game.rock3.up3.buys >= 20 && game.rock3.techs.maxTP === 3) {
			game.rock3.techs.maxTP = 4;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 25 && game.rock3.up2.buys >= 25 && game.rock3.up3.buys >= 25 && game.rock3.techs.maxTP === 4) {
			game.rock3.techs.maxTP = 5;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 30 && game.rock3.up2.buys >= 30 && game.rock3.up3.buys >= 30 && game.rock3.techs.maxTP === 5) {
			game.rock3.techs.maxTP = 6;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 35 && game.rock3.up2.buys >= 35 && game.rock3.up3.buys >= 35 && game.rock3.techs.maxTP === 6) {
			game.rock3.techs.maxTP = 7;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 40 && game.rock3.up2.buys >= 40 && game.rock3.up3.buys >= 40 && game.rock3.techs.maxTP === 7) {
			game.rock3.techs.maxTP = 8;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 45 && game.rock3.up2.buys >= 45 && game.rock3.up3.buys >= 45 && game.rock3.techs.maxTP === 8) {
			game.rock3.techs.maxTP = 9;
			game.rock3.techs.currentTP += 1;
		}
		if (game.rock3.up1.buys >= 50 && game.rock3.up2.buys >= 50 && game.rock3.up3.buys >= 50 && game.rock3.techs.maxTP === 9) {
			game.rock3.techs.maxTP = 10;
			game.rock3.techs.currentTP += 1;
		}
	}
}, 10);

function tech11() {
	rocket1.buyTech1();
}

function tech12() {
	rocket1.buyTech2();
}

function tech13() {
	rocket1.buyTech3();
}

function tech14() {
	rocket1.buyTech4();
}

function tech15() {
	rocket1.buyTech5();
}

function tech16() {
	rocket1.buyTech6();
}

function tech21() {
	rocket2.buyTech1();
}

function tech22() {
	rocket2.buyTech2();
}

function tech23() {
	rocket2.buyTech3();
}

function tech24() {
	rocket2.buyTech4();
}

function tech25() {
	rocket2.buyTech5();
}

function tech26() {
	rocket2.buyTech6();
}

function tech27() {
	rocket2.buyTech7();
}

function tech28() {
	rocket2.buyTech8();
}

function tech31() {
	if (game.rock3.techs.cs1 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.cs1 += 1;
	}
}

function tech32() {
	if (game.rock3.techs.cs2 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.cs2 += 1;
	}
}

function tech33() {
	if (game.rock3.techs.cs3 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.cs3 += 1;
	}
}

function tech34() {
	if (game.rock3.techs.cs4 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.cs4 += 1;
	}
}

function tech35() {
	if (game.rock3.techs.ef3 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.ef3 += 1;
	}
}

function tech36() {
	if (game.rock3.techs.ef4 < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.ef4 += 1;
	}
}

function tech37() {
	if (game.rock3.techs.mpf < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.mpf += 1;
	}
}

function tech38() {
	if (game.rock3.techs.cmx < 3 && game.rock3.techs.currentTP > 0) {
		game.rock3.techs.currentTP -= 1;
		game.rock3.techs.cmx += 1;
	}
}

function techRespec() {
	rocket1.resetTech();
}

function techRespec2() {
	game.rock2.techs.respec = true;
}

function ruinTheFun() {
	if (game.funRuined === false) {
		rocket1.properties.up1.buys = 25;
		rocket1.properties.up2.buys = 25;
		rocket1.properties.up3.buys = 25;
		game.creat = 200000;
		game.money = 50001;
		game.funRuined = true;
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function rockLaunch3() {
	if (game.rock3.rockLaunched <= game.rock3.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock3.successChance) {
			game.rock3.rockLaunched += 1;
			var imTiredOfMakingFormalNames = setInterval(function () {
				if (game.rock3.fuel.amount > 0) {

					game.money += game.rock3.moneyPerFuel;
					game.rock3.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (game.rock3.auto.rocket === false) {
					game.rock3.rockLaunched = 0;
					clearInterval(imTiredOfMakingFormalNames);
				}
			}, 40);
		} else {
			game.money -= game.money / 2;
			game.rock3.fuel.amount = 0;
			lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
		}
	}
}

function buyFuelForTheThirdTime() {
	if (game.money >= game.rock3.fuel.cost * game.rock3.fuel.max) {
		if (game.rock3.fuel.amount === 0) {
			game.money -= game.rock3.fuel.cost * game.rock3.fuel.max;
			game.rock3.fuel.amount += game.rock3.fuel.max;
			game.rock3.fuel.cost = game.rock3.fuel.cost * (1 + (0.0001 * game.rock3.fuel.max));
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}
	}
}

function mercUp1() {
	if (game.money >= game.rock3.up1.cost && game.rock3.up1.buys < 50) {
		game.rock3.fuel.max = Math.floor(game.rock3.fuel.max * 1.1);
		game.money -= game.rock3.up1.cost;
		if (game.rock3.techs.cs1 === 0) {
			game.rock3.up1.cost = Math.round(game.rock3.up1.cost * 1.3);
		}
		if (game.rock3.techs.cs1 === 1) {
			game.rock3.up1.cost = Math.round(game.rock3.up1.cost * 1.28);
		}
		if (game.rock3.techs.cs1 === 2) {
			game.rock3.up1.cost = Math.round(game.rock3.up1.cost * 1.25);
		}
		if (game.rock3.techs.cs1 === 3) {
			game.rock3.up1.cost = Math.round(game.rock3.up1.cost * 1.22);
		}
		game.rock3.up1.buys += 1;
		game.rock3.successChance -= 1;
	}
}

function mercUp2() {
	if (game.money >= game.rock3.up2.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock3.up2.buys < 50) {
			game.rock3.fuel.cost = 50000;
			game.rock3.fuel.scaleDown = 0.9 * game.rock3.fuel.scaleDown;
			game.money -= game.rock3.up2.cost;
			if (game.rock3.techs.cs2 === 0) {
				game.rock3.up2.cost = Math.round(game.rock3.up2.cost * 1.5);
			}
			if (game.rock3.techs.cs2 === 1) {
				game.rock3.up2.cost = Math.round(game.rock3.up2.cost * 1.46);
			}
			if (game.rock3.techs.cs2 === 2) {
				game.rock3.up2.cost = Math.round(game.rock3.up2.cost * 1.43);
			}
			if (game.rock3.techs.cs2 === 3) {
				game.rock3.up2.cost = Math.round(game.rock3.up2.cost * 1.4);
			}
			game.rock3.up2.buys += 1;
			game.rock3.successChance -= 1;
		}
	}
}

function mercUp3() {
	if (game.money >= game.rock3.up3.cost) {
		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		if (game.rock3.up3.buys < 50) {
			if (game.rock3.techs.ef3 === 0) {
				game.rock3.moneyPerFuel = game.rock3.moneyPerFuel * 1.25;
			}
			if (game.rock3.techs.ef3 === 1) {
				game.rock3.moneyPerFuel = game.rock3.moneyPerFuel * 1.29;
			}
			if (game.rock3.techs.ef3 === 2) {
				game.rock3.moneyPerFuel = game.rock3.moneyPerFuel * 1.32;
			}
			if (game.rock3.techs.ef3 === 3) {
				game.rock3.moneyPerFuel = game.rock3.moneyPerFuel * 1.34;
			}
			game.money -= game.rock3.up3.cost;
			if (game.rock3.techs.cs3 === 0) {
				game.rock3.up3.cost = Math.round(game.rock3.up3.cost * 1.6);
			}
			if (game.rock3.techs.cs3 === 1) {
				game.rock3.up3.cost = Math.round(game.rock3.up3.cost * 1.56);
			}
			if (game.rock3.techs.cs3 === 2) {
				game.rock3.up3.cost = Math.round(game.rock3.up3.cost * 1.53);
			}
			if (game.rock3.techs.cs3 === 3) {
				game.rock3.up3.cost = Math.round(game.rock3.up3.cost * 1.5);
			}
			game.rock3.up3.buys += 1;
			game.rock3.successChance -= 1;
		}
	}
}

function mercUp4() {
	if (game.money >= game.rock3.up4.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock3.up4.buys < 50) {
			if (game.rock3.techs.ef4 === 0) {
				game.rock3.successChance += 2;
			}
			if (game.rock3.techs.ef4 === 1) {
				game.rock3.successChance += 2.2;
			}
			if (game.rock3.techs.ef4 === 2) {
				game.rock3.successChance += 2.5;
			}
			if (game.rock3.techs.ef4 === 3) {
				game.rock3.successChance += 2.9;
			}
			game.money -= game.rock3.up4.cost;
			if (game.rock3.techs.cs4 === 0) {
				game.rock3.up4.cost = Math.round(game.rock3.up4.cost * 1.5);
			}
			if (game.rock3.techs.cs4 === 1) {
				game.rock3.up4.cost = Math.round(game.rock3.up4.cost * 1.48);
			}
			if (game.rock3.techs.cs4 === 2) {
				game.rock3.up4.cost = Math.round(game.rock3.up4.cost * 1.45);
			}
			if (game.rock3.techs.cs4 === 3) {
				game.rock3.up4.cost = Math.round(game.rock3.up4.cost * 1.41);
			}
			game.rock3.up4.buys += 1;
		}
	}
}

function putSomeoneOnYourFrickingRocket() {



}

function rocklaunch4() {
	if (game.rock4.rockLaunched < game.rock4.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock4.successChance) {
			game.rock4.rockLaunched += 1;
			var rocketAuto4 = setInterval(function () {
				if (game.rock4.fuel.amount > 0) {

					game.money += game.rock4.moneyPerFuel;
					game.rock4.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (game.rock4.auto.rocket === false) {
					game.rock4.rockLaunched = 0;
					clearInterval(rocketAuto4);
				}
			}, 40);
		} else {
			game.money -= game.money / 2;
			game.rock4.fuel.amount = 0;
			lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
		}
	}
}

function gemBuyFuel() {
	if (game.money >= game.rock4.fuel.cost * game.rock4.fuel.max) {
		if (game.rock4.fuel.amount === 0) {
			game.money -= game.rock4.fuel.cost * game.rock4.fuel.max;
			game.rock4.fuel.amount += game.rock4.fuel.max;
			game.rock4.fuel.cost = game.rock4.fuel.cost * (1 + (0.0001 * game.rock4.fuel.max));
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}
	}
}

function gemUp1() {
	if (game.money >= game.rock4.up1.cost && game.rock4.up1.buys < 50) {
		game.rock4.fuel.max = Math.floor(game.rock4.fuel.max * 1.1);
		game.money -= game.rock4.up1.cost;
		if (game.rock4.techs.cs1 === 0) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.3);
		}
		if (game.rock4.techs.cs1 === 1) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.28);
		}
		if (game.rock4.techs.cs1 === 2) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.25);
		}
		if (game.rock4.techs.cs1 === 3) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.22);
		}
		game.rock4.up1.buys += 1;
		game.rock4.successChance -= 1;
	}
}

function gemUp2() {
	if (game.money >= game.rock4.up2.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock4.up2.buys < 50) {
			game.rock4.fuel.cost = 50000;
			game.rock4.fuel.scaleDown = 0.9 * game.rock4.fuel.scaleDown;
			game.money -= game.rock4.up2.cost;
			if (game.rock4.techs.cs2 === 0) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.5);
			}
			if (game.rock4.techs.cs2 === 1) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.46);
			}
			if (game.rock4.techs.cs2 === 2) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.43);
			}
			if (game.rock4.techs.cs2 === 3) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.4);
			}
			game.rock4.up2.buys += 1;
			game.rock4.successChance -= 1;
		}
	}
}

function gemUp3() {
	if (game.money >= game.rock4.up3.cost) {
		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		if (game.rock4.up3.buys < 50) {
			if (game.rock4.techs.ef3 === 0) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.25;
			}
			if (game.rock4.techs.ef3 === 1) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.29;
			}
			if (game.rock4.techs.ef3 === 2) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.32;
			}
			if (game.rock4.techs.ef3 === 3) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.34;
			}
			game.money -= game.rock2.up3.cost;
			if (game.rock4.techs.cs3 === 0) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.6);
			}
			if (game.rock4.techs.cs3 === 1) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.56);
			}
			if (game.rock4.techs.cs3 === 2) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.53);
			}
			if (game.rock4.techs.cs3 === 3) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.5);
			}
			game.rock4.up3.buys += 1;
			game.rock4.successChance -= 1;
		}
	}
}

function gemUp4() {
	if (game.money >= game.rock4.up4.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock4.up4.buys < 50) {
			if (game.rock4.techs.ef4 === 0) {
				game.rock4.successChance += 2;
			}
			if (game.rock2.techs.ef4 === 1) {
				game.rock4.successChance += 2.2;
			}
			if (game.rock2.techs.ef4 === 2) {
				game.rock4.successChance += 2.5;
			}
			if (game.rock2.techs.ef4 === 3) {
				game.rock4.successChance += 2.9;
			}
			game.money -= game.rock4.up4.cost;
			if (game.rock4.techs.cs4 === 0) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.5);
			}
			if (game.rock2.techs.cs4 === 1) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.48);
			}
			if (game.rock2.techs.cs4 === 2) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.45);
			}
			if (game.rock2.techs.cs4 === 3) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.41);
			}
			game.rock4.up4.buys += 1;
		}
	}
}

function rocklaunch5() {
	if (game.rock5.rockLaunched < game.rock5.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock5.successChance) {
			game.rock5.rockLaunched += 1;
			var rocketAuto5 = setInterval(function () {
				if (game.rock5.fuel.amount > 0) {

					game.money += game.rock5.moneyPerFuel;
					game.rock5.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (game.rock5.auto.rocket === false) {
					game.rock5.rockLaunched = 0;
					clearInterval(rocketAuto5);
				}
			}, 40);
		} else {
			game.money -= game.money / 2;
			game.rock5.fuel.amount = 0;
			lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
		}
	}
}

function apBuyFuel() {
	if (game.money >= game.rock5.fuel.cost * game.rock5.fuel.max) {
		if (game.rock5.fuel.amount === 0) {
			game.money -= game.rock5.fuel.cost * game.rock5.fuel.max;
			game.rock5.fuel.amount += game.rock5.fuel.max;
			game.rock5.fuel.cost = game.rock5.fuel.cost * (1 + (0.0001 * game.rock5.fuel.max));
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}
	}
}

function apUp1() {
	if (game.money >= game.rock5.up1.cost && game.rock5.up1.buys < 50) {
		game.rock5.fuel.max = Math.floor(game.rock5.fuel.max * 1.1);
		game.money -= game.rock5.up1.cost;
		if (game.rock5.techs.cs1 === 0) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.3);
		}
		if (game.rock5.techs.cs1 === 1) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.28);
		}
		if (game.rock5.techs.cs1 === 2) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.25);
		}
		if (game.rock5.techs.cs1 === 3) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.22);
		}
		game.rock5.up1.buys += 1;
		game.rock5.successChance -= 1;
	}
}

function apUp2() {
	if (game.money >= game.rock5.up2.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock5.up2.buys < 50) {
			game.rock5.fuel.cost = 50000;
			game.rock5.fuel.scaleDown = 0.9 * game.rock5.fuel.scaleDown;
			game.money -= game.rock5.up2.cost;
			if (game.rock5.techs.cs2 === 0) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.5);
			}
			if (game.rock5.techs.cs2 === 1) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.46);
			}
			if (game.rock5.techs.cs2 === 2) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.43);
			}
			if (game.rock5.techs.cs2 === 3) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.4);
			}
			game.rock5.up2.buys += 1;
			game.rock5.successChance -= 1;
		}
	}
}

function apUp3() {
	if (game.money >= game.rock5.up3.cost) {
		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		if (game.rock5.up3.buys < 50) {
			if (game.rock5.techs.ef3 === 0) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.25;
			}
			if (game.rock5.techs.ef3 === 1) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.29;
			}
			if (game.rock5.techs.ef3 === 2) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.32;
			}
			if (game.rock5.techs.ef3 === 3) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.34;
			}
			game.money -= game.rock2.up3.cost;
			if (game.rock5.techs.cs3 === 0) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.6);
			}
			if (game.rock5.techs.cs3 === 1) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.56);
			}
			if (game.rock5.techs.cs3 === 2) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.53);
			}
			if (game.rock5.techs.cs3 === 3) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.5);
			}
			game.rock5.up3.buys += 1;
			game.rock5.successChance -= 1;
		}
	}
}

function apUp4() {
	if (game.money >= game.rock5.up4.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock5.up4.buys < 50) {
			if (game.rock5.techs.ef4 === 0) {
				game.rock5.successChance += 2;
			}
			if (game.rock2.techs.ef4 === 1) {
				game.rock5.successChance += 2.2;
			}
			if (game.rock2.techs.ef4 === 2) {
				game.rock5.successChance += 2.5;
			}
			if (game.rock2.techs.ef4 === 3) {
				game.rock5.successChance += 2.9;
			}
			game.money -= game.rock5.up4.cost;
			if (game.rock5.techs.cs4 === 0) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.5);
			}
			if (game.rock2.techs.cs4 === 1) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.48);
			}
			if (game.rock2.techs.cs4 === 2) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.45);
			}
			if (game.rock2.techs.cs4 === 3) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.41);
			}
			game.rock5.up4.buys += 1;
		}
	}
}

window.setInterval(function () {	
	document.getElementById("money").innerHTML = format(parseFloat(game.money));
	//document.getElementById("alsostillmoney").innerHTML = numberWithCommas(game.money);
	//document.getElementById("probablystillmoney").innerHTML = numberWithCommas(game.money);
	//document.getElementById("mightbemoneyimnotsure").innerHTML = numberWithCommas(game.money);
	document.getElementById("mercuryFuel").innerHTML = game.rock3.fuel.amount;
	document.getElementById("geminiFuel").innerHTML = game.rock4.fuel.amount;
	document.getElementById("apolloFuel").innerHTML = game.rock5.fuel.amount;	
	document.getElementById("mercuryFuelCost").innerHTML = format(game.rock3.fuel.cost);
	document.getElementById("geminiFuelCost").innerHTML = format(game.rock4.fuel.cost);
	document.getElementById("apolloFuelCost").innerHTML = format(game.rock5.fuel.cost);	
	document.getElementById("mercuryFuelMax").innerHTML = game.rock3.fuel.max;
	document.getElementById("geminiFuelMax").innerHTML = game.rock4.fuel.max;
	document.getElementById("apolloFuelMax").innerHTML = game.rock5.fuel.max;	
	document.getElementById("mercuryUpgrade1Cost").innerHTML = format(game.rock3.up1.cost);
	document.getElementById("geminiUpgrade1Cost").innerHTML = format(game.rock4.up1.cost);
	document.getElementById("apolloUpgrade1Cost").innerHTML = format(game.rock5.up1.cost);
	document.getElementById("mercuryUpgrade2Cost").innerHTML = format(game.rock3.up2.cost);
	document.getElementById("geminiUpgrade2Cost").innerHTML = format(game.rock4.up2.cost);
	document.getElementById("apolloUpgrade2Cost").innerHTML = format(game.rock5.up2.cost);	
	document.getElementById("mercuryUpgrade3Cost").innerHTML = format(game.rock3.up3.cost);
	document.getElementById("geminiUpgrade3Cost").innerHTML = format(game.rock4.up3.cost);
	document.getElementById("apolloUpgrade3Cost").innerHTML = format(game.rock5.up3.cost);
	document.getElementById("mercuryUpgrade4Cost").innerHTML = format(game.rock3.up4.cost);
	document.getElementById("geminiUpgrade4Cost").innerHTML = format(game.rock4.up4.cost);
	document.getElementById("apolloUpgrade4Cost").innerHTML = format(game.rock5.up4.cost);	
	document.getElementById("geminiUpgrade1Buys").innerHTML = game.rock4.up1.buys;
	document.getElementById("geminiUpgrade2Buys").innerHTML = game.rock4.up2.buys;
	document.getElementById("geminiUpgrade3Buys").innerHTML = game.rock4.up3.buys;
	document.getElementById("geminiUpgrade4Buys").innerHTML = game.rock4.up4.buys;
	document.getElementById("mercuryUpgrade1Buys").innerHTML = game.rock3.up1.buys;
	document.getElementById("mercuryUpgrade2Buys").innerHTML = game.rock3.up2.buys;
	document.getElementById("mercuryUpgrade3Buys").innerHTML = game.rock3.up3.buys;
	document.getElementById("mercuryUpgrade4Buys").innerHTML = game.rock3.up4.buys;
	document.getElementById("apolloUpgrade1Buys").innerHTML = game.rock3.up1.buys;
	document.getElementById("apolloUpgrade2Buys").innerHTML = game.rock3.up2.buys;
	document.getElementById("apolloUpgrade3Buys").innerHTML = game.rock3.up3.buys;
	document.getElementById("apolloUpgrade4Buys").innerHTML = game.rock3.up4.buys;	
	document.getElementById("creativity").innerHTML = format(game.creat);
	document.getElementById("gainOnBrainstorm").innerHTML = game.creatGainReset;
	document.getElementById("lore1").innerHTML = lore[0];
	document.getElementById("lore2").innerHTML = lore[1];
	document.getElementById("lore3").innerHTML = lore[2];
	document.getElementById("lore4").innerHTML = lore[3];
	document.getElementById("lore5").innerHTML = lore[4];
	document.getElementById("lore6").innerHTML = lore[5];
	document.getElementById("lore7").innerHTML = lore[6];
	document.getElementById("lore8").innerHTML = lore[7];
	document.getElementById("lore9").innerHTML = lore[8];
	document.getElementById("lore10").innerHTML = lore[9];
	document.getElementById("lore11").innerHTML = lore[10];
	document.getElementById("lore12").innerHTML = lore[11];
	document.getElementById("lore13").innerHTML = lore[12];
	document.getElementById("lore14").innerHTML = lore[13];
	document.getElementById("lore15").innerHTML = lore[14];
	document.getElementById("lore16").innerHTML = lore[15];
	document.getElementById("lore17").innerHTML = lore[16];
	document.getElementById("lore18").innerHTML = lore[17];
	document.getElementById("lore19").innerHTML = lore[18];
	if (game.ally == 1) {
		document.getElementById('pUpgrade1').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade1').classList.remove('pure-button-disabled');
	}
	if (game.pUp4Bought) {
		document.getElementById('pUpgrade4').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade4').classList.remove('pure-button-disabled');
	}
	if (game.pUp5Bought) {
		document.getElementById('pUpgrade5').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade5').classList.remove('pure-button-disabled');
	}
	if (rocket2.properties.unlocked) {
		document.getElementById('pUpgrade6').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade6').classList.remove('pure-button-disabled');
	}
	if (rocket1.properties.techs.maxTP == 18) {
		document.getElementById('pUpgrade7').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade7').classList.remove('pure-button-disabled');
	}
	if (rocket2.properties.affectByCreat) {
		document.getElementById('pUpgrade8').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade8').classList.remove('pure-button-disabled');
	}
	if (game.pUp9Bought) {
		document.getElementById('pUpgrade9').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade9').classList.remove('pure-button-disabled');
	}
	if (rocket2.properties.techs.techStart) {
		document.getElementById('pUpgrade10').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade10').classList.remove('pure-button-disabled');
	}
	if (rocket2.properties.auto) {
		document.getElementById('pUpgrade11').classList.add('pure-button-disabled');
	} else {
		document.getElementById('pUpgrade11').classList.remove('pure-button-disabled');
	}
	document.getElementById("basicRocketLimit").innerHTML = game.rockLimit;
	document.getElementById("pUpgrade2Cost").innerHTML = format(game.pUp2cost);
	document.getElementById("pUpgrade3Cost").innerHTML = format(game.pUp3cost);
	document.getElementById("creativityMultiplier").innerHTML = game.creatMult.toFixed(2);	
	document.getElementById("mercuryMoneyPerFuel").innerHTML = format(Math.round(game.rock3.moneyPerFuel));
	document.getElementById("geminiMoneyPerFuel").innerHTML = format(Math.round(game.rock4.moneyPerFuel));
	document.getElementById("apolloMoneyPerFuel").innerHTML = format(Math.round(game.rock5.moneyPerFuel));
	document.getElementById("mercuryTechPoints").innerHTML = game.rock3.techs.currentTP;
	document.getElementById("maxMTP").innerHTML = game.rock3.techs.maxTP;
	document.getElementById("geminiTechPoints").innerHTML = game.rock3.techs.currentTP;
	document.getElementById("maxGTP").innerHTML = game.rock3.techs.maxTP;
	document.getElementById("apolloTechPoints").innerHTML = game.rock3.techs.currentTP;
	document.getElementById("maxATP").innerHTML = game.rock3.techs.maxTP;
	document.getElementById("TC31").innerHTML = game.rock3.techs.cs1;
	document.getElementById("TC32").innerHTML = game.rock3.techs.cs2;
	document.getElementById("TC33").innerHTML = game.rock3.techs.cs3;
	document.getElementById("TC34").innerHTML = game.rock3.techs.cs4;
	document.getElementById("TC35").innerHTML = game.rock3.techs.ef3;
	document.getElementById("TC36").innerHTML = game.rock3.techs.ef4;
	document.getElementById("TC37").innerHTML = game.rock3.techs.mpf;
	document.getElementById("TC38").innerHTML = game.rock3.techs.cmx;
	document.getElementById('mercuryFailChance').innerHTML = game.rock3.successChance.toFixed(2);
	if (game.money > 50000 || game.brainstormed === true) {
		document.getElementById("brainPrestige").style.display = "inline";
	} else {
		document.getElementById("brainPrestige").style.display = "none";
	}
	
	if (game.rock3.active === true) {
		document.getElementById("mercuryContent2").style.display = "";

	} else {
		document.getElementById("mercuryContent2").style.display = "none";
	}
	if (game.rock3.techs.techStart === true) {
		document.getElementById("mercuryTechs").style.display = "";
		document.getElementById("mercuryTechs2").style.display = "";
	} else {
		document.getElementById("mercuryTechs").style.display = "none";
		document.getElementById("mercuryTechs2").style.display = "none";
	}	

	p1Gain();
}, 100);

load();
window.setInterval(function () {
	save();
}, 60000);

function fullReset() {
	swal({
		title: "Reset Game",
		text: "Are you sure you want to reset?",
		icon: "warning",
		buttons: true,
		dangerMode: true

	}).then(function(reset) {
		if(reset) {
			localStorage.removeItem("sri");
			localStorage.removeItem("beta");
			localStorage.removeItem('explorer');
			location.reload();
		}
	});
	
}

function format(number, decPlaces = 2) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if ((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    return number;
}

function tab(t) {
	var classList = document.getElementsByClassName("tab");
	for (var i = 0; i < classList.length; i++) {
		classList[i].style.display = "none";
	}
	document.getElementById(t).style.display = "";
}

tab("basicrocket");

function subTab(tabName) {
	var tabs = document.getElementsByClassName('pSubTab');
	var tab;
	for (var i = 0; i < tabs.length; i++) {
		tab = tabs.item(i);
		if (tab.id === tabName) {
			tab.style.display = 'block';
		} else {
			tab.style.display = 'none';
		}
	}
}


subTab("basicPUps");