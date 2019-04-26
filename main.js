
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
rockLimit:false,
  allyButText:"none"
};
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", ""]
function rockLaunch1() {
	if (game.rockLimit === false) {
	lore[1] = "You set up a launch pad in a field filled with flowers and one-leafed clovers. As you launch the rocket, you realize you won't be able to make any money for future launches, which is sad.";
	var rocketAuto = setInterval(function() {
	if (game.fuel.amount > 0) {
		game.rockLimit = true;
	game.money += game.moneyPerFuel;
	game.fuel.amount -= 1;
	game.money = Math.round(game.money*100)/100;
	}else if (game.auto.rocket === false){
	lore[2] = "The day after the rocket launch, you recieve a letter saying \'That rocket launch was cool. Hope you can do more!\' with enough money to fund another launch. The letter is signed \'FM\'";
	game.rockLimit = false;
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
	if (game.up1buys < game.maxUp1buys) {
	game.fuel.max = Math.floor(game.fuel.max*1.1);
	game.money -= game.up1Cost;
	game.up1Cost = game.up1Cost*1.25;
	game.up1buys += 1;
	}
	}
};
function upgrade2() {
	if (game.money >= game.up2Cost) {
	if (game.up2buys < game.maxUp2buys) {
	game.fuel.cost -= 1;
	game.fuel.scaleDown = 0.9*game.fuel.scaleDown;
	game.money -= game.up2Cost;
	game.up2Cost = game.up2Cost*1.45;
	game.up2buys += 1;
		}
	}
};

function upgrade3() {
	if (game.money >= game.up3Cost) {
	if (game.up3buys < game.maxUp3buys) {
	game.moneyPerFuel = game.moneyPerFuel*1.25;
	game.money -= game.up3Cost;
	game.up3Cost = game.up3Cost*1.6;
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
	game.rockLimit = false
};
load();
window.setInterval(function(){
	save();
}, 2000);
function fullReset() {

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
rockLimit:false,
lore: {
	lore1:"You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.",
	lore2:"",
	lore3:""
},
  allyButText:"none"
};
};
function pUpgrade1() {
	if (game.ally === 0 && game.creat >= 1) {
	game.ally = 1;
	game.maxUp3Buys += 10;
	game.maxUp2Buys += 10;
	game.maxUp1Buys += 10;
		game.creat -= 1;
	}
};
function pUpgrade2() {
	if (game.creat >= 10) {
	
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
document.getElementById("maxUpgrade1Buys").innerHTML = game.maxUp1buys;
document.getElementById("maxUpgrade2Buys").innerHTML = game.maxUp2buys;
document.getElementById("maxUpgrade3Buys").innerHTML = game.maxUp3buys;
document.getElementById("creativity").innerHTML = game.creat;
document.getElementById("gainOnBrainstorm").innerHTML = game.creatGainReset;
document.getElementById("lore1").innerHTML = lore[0];
document.getElementById("lore2").innerHTML = lore[1];
document.getElementById("lore3").innerHTML = lore[2];
}, 10);
