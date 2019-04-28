
var game = {
  money:0,
  moneyPerFuel:10,
  fuel: {
  amount:150,
  cost:3,
  max:150,
  scaleDown:1
  },
  auto: {
  rocket:false,
  fuel:false
  },
  up1Cost:2500,
  up1buys:0,
  maxUp1buys:5,
  up2Cost:4000,
up2buys:0,
maxUp2buys:5,
  up3Cost:6000,
up3buys:0,
maxUp3buys:5,
  creat:0,
creatGainReset:0,
  ally:0,
rockLimit:1,
  allyButText:"none", 
era:"before",
pUp2cost:5,
rockLaunched:0,
pUp3cost:10,
rocket:0;
};
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", ""]
function rockLaunch1() {
	if (game.rockLimit > game.rockLaunched) {
	game.rockLaunched += 1;
	lore[1] = "You set up a launch pad in a field filled with flowers and one-leafed clovers. As you launch the rocket, you realize you won't be able to make any money for future launches, which is sad.";
	var rocketAuto = setInterval(function() {
	if (game.fuel.amount > 0) {
		
	game.money += game.moneyPerFuel;
	game.fuel.amount -= 1;
	game.money = Math.round(game.money*100)/100;
	}else if (game.auto.rocket === false){
	lore[2] = "The day after the rocket launch, you recieve a letter saying \'That rocket launch was cool. Hope you can do more!\' with enough money to fund another launch. The letter is signed \'FM\'";
	game.rockLaunched = 0;
	clearInterval(rocketAuto);
	}
	}, 40);	
	}
};

function buyFuel() {
	if (game.money >=game.fuel.cost*game.fuel.max) {
	if (game.fuel.amount === 0) {
	game.money -= game.fuel.cost*game.fuel.max;
	game.fuel.amount += game.fuel.max;
	game.fuel.cost += 0.0005*game.fuel.max*game.fuel.scaleDown;
    }
  }
if (game.money < game.fuel.cost*game.fuel.max) {
	if (game.fuel.amount === 0) {
	var halp = Math.floor(game.money/game.fuel.cost);
	game.fuel.amount += halp;
	game.money-=game.fuel.cost*halp;
	halp = 0;
	}
}
};
function upgrade1() {
	if (game.money >= game.up1Cost) {
	if (game.up1buys < 25) {
	game.fuel.max = Math.floor(game.fuel.max*1.1);
	game.money -= game.up1Cost;
	game.up1Cost = Math.round(game.up1Cost*1.3);
	game.up1buys += 1;
	}
	}
};
function upgrade2() {
	if (game.money >= game.up2Cost) {
	if (game.up2buys < 25) {
	game.fuel.cost = 2;
	game.fuel.scaleDown = 0.9*game.fuel.scaleDown;
	game.money -= game.up2Cost;
	game.up2Cost = Math.round(game.up2Cost*1.4);
	game.up2buys += 1;
		}
	}
};

function upgrade3() {
	if (game.money >= game.up3Cost) {
	if (game.up3buys < 25) {
	game.moneyPerFuel = game.moneyPerFuel*1.25;
	game.money -= game.up3Cost;
	game.up3Cost = Math.round(game.up3Cost*1.5);
	game.up3buys += 1;
	}
	}
};

function bugFix() {
	game.fuel.cost = Math.round(game.fuel.cost*100)/100;
	game.money = Math.round(game.money*100)/100;
	game.fuel.amount = Math.round(game.fuel.amount);
};
function p1Gain() {
	game.creatGainReset = Math.floor(Math.sqrt(game.money/50000));
}
function prestige1(){
if (game.up1buys >=5 && game.up2buys >= 5 && game.up3buys >= 5 && game.money >= 50000){
game.creat += Math.floor(Math.sqrt(game.money/50000));
game.money = 0;
game.fuel.amount = 150;
game.fuel.cost = 3;
game.fuel.max = 150;
game.fuel.scaleDown = 1;
game.up1Cost = 2500;
game.up1buys = 0;
game.up2Cost = 4000;
game.up2buys = 0;
game.up3Cost = 6000;
game.up3buys = 0;
	if (game.ally ===2) {
	game.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)*2
	}
	if (game.ally ===1) {
	game.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)*1.5
	}
}
};
	window.setInterval(function(){
		if (game.auto.fuel === true) {
		buyFuel();
	}
	bugFix();
	p1Gain();
}, 100);
function save() {
	localStorage.sri = btoa(JSON.stringify(game));
};
function load() {
	if(!localStorage.sri) return;
	game = JSON.parse(atob(localStorage.sri));
	game.rockLaunched = 0;
};
load();
window.setInterval(function(){
	save();
}, 2000);
function fullReset() {
  game.money = 0;
  game.moneyPerFuel = 10;
  game.fuel.amount = 150;
  game.fuel.cost = 3;
  game.fuel.max = 150;
  game.fuel.scaleDown = 1;
  game.auto.rocket = false;
  game.auto.fuel = false;
  game.up1Cost = 2500;
  game.up1buys = 0;
  game.maxUp1buys = 5;
  game.up2Cost = 4000;
  game.up2buys = 0;
  game.maxUp2buys = 5;
  game.up3Cost = 6000;
  game.up3buys = 0;
  game.maxUp3buys = 5;
  game.creat = 0;
  game.creatGainReset = 0;
  game.ally = 0;
  game.rockLimit = 1;
  game.allyButText = "none";
  game.era = "before";
  game.rockLaunched = 0;
  game.pUp2cost = 5;
};
function pUpgrade1() {
	if (game.ally === 0 && game.creat >= 1) {
	game.ally = 1;
		game.creat -= 1;
	}
};
function pUpgrade2() {
	if (game.creat >= game.pUp2cost) {
	game.creat -= game.pUp2cost;
	game.rockLimit += 1;
	game.pUp2cost = Math.round(game.pUp2cost*3);
	}
};
window.setInterval(function(){
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel.amount;
document.getElementById("fuelCost").innerHTML = game.fuel.cost;
document.getElementById("fuelMax").innerHTML = game.fuel.max;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
document.getElementById("upgrade2Cost").innerHTML = game.up2Cost;
document.getElementById("upgrade3Cost").innerHTML = game.up3Cost;
document.getElementById("upgrade1Buys").innerHTML = game.up1buys;
document.getElementById("upgrade2Buys").innerHTML = game.up2buys;
document.getElementById("upgrade3Buys").innerHTML = game.up3buys;
document.getElementById("creativity").innerHTML = game.creat;
document.getElementById("gainOnBrainstorm").innerHTML = game.creatGainReset;
document.getElementById("lore1").innerHTML = lore[0];
document.getElementById("lore2").innerHTML = lore[1];
document.getElementById("lore3").innerHTML = lore[2];
document.getElementById("basicRocketLimit").innerHTML = game.rockLimit;
document.getElementById("pUpgrade2Cost").innerHTML = game.pUp2cost;
if (rocket > 1) {
	document.getElementsByClassName('explorer').style.display = "block"
} else {
	document.getElementsByClassName('explorer').style.display = "none"
}
}, 10);
