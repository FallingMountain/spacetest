
var game = {
  money:0,
  rock1: {
moneyPerFuel:10,
fuel: {
  amount:150,
  cost:3,
  max:150,
  scaleDown:1
  },
techs: {
techStart:false,
cs1:0,
cs2:0,
cs3:0,
ef3:0,
mpf:0,
cmx:0,
maxTP:0,
currentTP:0,
respec:false
},
upCostScales: {
	up1:1.3,
	up2:1.4,
	up3:1.5
}
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
pUp3cost:5,
rocket:0,
creatMult:1
};
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", "", "", "","","","","","","","","","","","",""]
function rockLaunch1() {
	if (game.rockLimit > game.rockLaunched) {
	game.rockLaunched += 1;
	lore[1] = "You set up a launch pad in a field filled with flowers and one-leafed clovers. As you launch the rocket, you realize you won't be able to make any money for future launches, which is sad.";
	var rocketAuto = setInterval(function() {
	if (game.rock1.fuel.amount > 0) {
		
	game.money += game.rock1.moneyPerFuel;
	game.rock1.fuel.amount -= 1;
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
	if (game.money >=game.rock1.fuel.cost*game.rock1.fuel.max) {
	if (game.rock1.fuel.amount === 0) {
	game.money -= game.rock1.fuel.cost*game.rock1.fuel.max;
	game.rock1.fuel.amount += game.rock1.fuel.max;
	game.rock1.fuel.cost += 0.0005*game.rock1.fuel.max*game.rock1.fuel.scaleDown;
	lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
    }
  }
if (game.money < game.rock1.fuel.cost*game.rock1.fuel.max) {
	if (game.rock1.fuel.amount === 0) {
	var halp = Math.floor(game.money/game.rock1.fuel.cost);
	game.rock1.fuel.amount += halp;
	game.money-=game.rock1.fuel.cost*halp;
	halp = 0;
	}
}
};
function upgrade1() {
	if (game.money >= game.up1Cost) {
	if (game.up1buys < 25) {
	lore[4] = "You figure out that if you make your rocket taller or wider, you can fit more fuel inside. You feel like you should have thought of that by now.";
	game.rock1.fuel.max = Math.floor(game.rock1.fuel.max*1.1);
	game.money -= game.up1Cost;
	if (game.rock1.techs.cs1 === 0){
	game.up1Cost = Math.round(game.up1Cost*1.3);
	}
	if (game.rock1.techs.cs1 === 1){
	game.up1Cost = Math.round(game.up1Cost*1.28);
	}
	if (game.rock1.techs.cs1 === 2){
	game.up1Cost = Math.round(game.up1Cost*1.25);
	}
	if (game.rock1.techs.cs1 === 3){
	game.up1Cost = Math.round(game.up1Cost*1.21);
	}
	game.up1buys += 1;
	}
	}
};
function upgrade2() {
	if (game.money >= game.up2Cost) {
	lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2."
	if (game.up2buys < 25) {
	game.rock1.fuel.cost = 2;
	game.rock1.fuel.scaleDown = 0.9*game.rock1.fuel.scaleDown;
	game.money -= game.up2Cost;
	if (game.rock1.techs.cs2 === 0){
	game.up2Cost = Math.round(game.up2Cost*1.4);
	}
	if (game.rock1.techs.cs2 === 1){
	game.up2Cost = Math.round(game.up2Cost*1.38);
	}
	if (game.rock1.techs.cs2 === 2){
	game.up2Cost = Math.round(game.up2Cost*1.35);
	}
	if (game.rock1.techs.cs2 === 3){
	game.up2Cost = Math.round(game.up2Cost*1.31);
	}
	game.up2buys += 1;
	}
	}
};

function upgrade3() {
	if (game.money >= game.up3Cost) {
	lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes."
	if (game.up3buys < 25) {
	if (game.rock1.techs.ef3 === 0){
	game.rock1.moneyPerFuel = game.rock1.moneyPerFuel*1.25;
	}
	if (game.rock1.techs.ef3 === 1){
	game.rock1.moneyPerFuel = game.rock1.moneyPerFuel*1.28;
	}
	if (game.rock1.techs.ef3 === 2){
	game.rock1.moneyPerFuel = game.rock1.moneyPerFuel*1.3;
	}
	if (game.rock1.techs.ef3 === 3){
	game.rock1.moneyPerFuel = game.rock1.moneyPerFuel*1.32;
	}
	game.money -= game.up3Cost;
	if (game.rock1.techs.cs3 === 0){
	game.up3Cost = Math.round(game.up3Cost*1.5);
	}
	if (game.rock1.techs.cs3 === 1){
	game.up3Cost = Math.round(game.up3Cost*1.48);
	}
	if (game.rock1.techs.cs3 === 2){
	game.up3Cost = Math.round(game.up3Cost*1.45);
	}
	if (game.rock1.techs.cs3 === 3){
	game.up3Cost = Math.round(game.up3Cost*1.4);
	}
	game.up3buys += 1;
	}
	}
};

function bugFix() {
	game.rock1.fuel.cost = Math.round(game.rock1.fuel.cost*100)/100;
	game.money = Math.round(game.money*100)/100;
	game.rock1.fuel.amount = Math.round(game.rock1.fuel.amount);
};
function p1Gain() {
	game.creatGainReset = Math.floor(Math.sqrt(game.money/50000)*game.creatMult*(game.rock1.techs.cmx+1));
}
function prestige1(){
if (game.up1buys >=5 && game.up2buys >= 5 && game.up3buys >= 5 && game.money >= 50000){
lore[7] = "You decide it's time to brainstorm up some better ideas for your rocket, so you deconstruct it using the money you have left."
game.creat += Math.floor(Math.sqrt(game.money/50000)*game.creatMult)*(game.rock1.techs.cmx+1);
game.money = 0;
game.rock1.fuel.amount = 150;
game.rock1.fuel.cost = 3;
game.rock1.fuel.max = 150;
game.rock1.fuel.scaleDown = 1;
game.up1Cost = 2500;
game.up1buys = 0;
game.up2Cost = 4000;
game.up2buys = 0;
game.up3Cost = 6000;
game.up3buys = 0;
	if (game.ally ===0) {
	game.rock1.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)
	}
	if (game.ally ===1) {
	game.rock1.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)*1.5*(game.rock1.techs.mpf+1)
	}
if (game.rock1.techs.respec === true) {
game.rock1.techs.cs1 = 0;
game.rock1.techs.cs2 = 0;
game.rock1.techs.cs3 = 0;
game.rock1.techs.ef3 = 0;
game.rock1.techs.mpf = 0;
game.rock1.techs.cmx = 0;
game.rock1.techs.currentTP = game.rock1.techs.maxTP;
game.rock1.techs.respec = false;
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
localStorage.removeItem("sri");
location.reload();
};
function pUpgrade1() {
	if (game.ally === 0 && game.creat >= 1) {
	game.ally = 1;
		game.creat -= 1;
	lore[8] = "Suddenly, you get a letter from NASA saying, \'Hello. We have heard of your \'accomplishments\' from FM, and was wondering if you'd like to join us\'. You gladly accept."
	}
};
function pUpgrade2() {
	if (game.creat >= game.pUp2cost) {
	lore[9] = "You now have enough ideas that you think you can launch multiple rockets."
	game.creat -= game.pUp2cost;
	game.rockLimit += 1;
	game.pUp2cost = Math.round(game.pUp2cost*3);
	}
};
function pUpgrade3() {
	if (game.creat >= game.pUp3cost) {
	lore[10] = "After a good brainstorm, you find a better place to think, making you more creative."
	game.creat -= game.pUp3cost;
	game.creatMult = game.creatMult*1.5;
	game.pUp3cost = Math.round(game.pUp3cost*3);
	}
};
function pUpgrade4() {
	if (game.creat >= 10) {
	lore[11] = "You have recieved additional funding to make better rockets with things called Technology Points. Pretty cool."
		game.creat -= 10;
		game.rock1.techs.techStart = true;
	}
	
}
setInterval(function() {
if (game.up1buys === 25 && game.up2buys === 25 && game.up3buys === 25) {
	lore[11] = "You have done everything you can with this rocket. Maybe it's time to start a new project."
}
if (game.rock1.techs.techStart === true) {
if (game.up1buys >= 5 && game.up2buys >= 5 && game.up3buys >= 5 && game.rock1.techs.maxTP === 0) {
	game.rock1.techs.maxTP = 1;
	game.rock1.techs.currentTP = 1;
}
if (game.up1buys >= 10 && game.up2buys >= 10 && game.up3buys >= 10 && game.rock1.techs.maxTP === 1) {
	game.maxTP = 2;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 15 && game.up2buys >= 15 && game.up3buys >= 15 && game.rock1.techs.maxTP === 2) {
	game.maxTP = 3;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 20 && game.up2buys >= 20 && game.up3buys >= 20 && game.rock1.techs.maxTP === 3) {
	game.maxTP = 4;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 22 && game.up2buys >= 22 && game.up3buys >= 22 && game.rock1.techs.maxTP === 4) {
	game.maxTP = 5;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 24 && game.up2buys >= 24 && game.up3buys >= 24 && game.rock1.techs.maxTP === 5) {
	game.maxTP = 6;
	game.rock1.techs.currentTP += 1;
}
}
},10)
function tech11() {
	if (game.rock1.techs.cs1 < 3 && game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs1 +=1;
	}
};
function tech12() {
	if (game.rock1.techs.cs2 < 3) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs2 +=1;
	}
};
function tech13() {
	if (game.rock1.techs.cs3 < 3) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs3 +=1;
	}
};
function tech14() {
	if (game.rock1.techs.ef3 < 3) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.ef3 +=1;
	}
};
function tech15() {
	if (game.rock1.techs.mpf < 3) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.mpf +=1;
	}
};
function tech16() {
	if (game.rock1.techs.cmx < 3) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cmx +=1;
	}
};
function techRespec() {
	game.rock1.techs.respec = true;
}
window.setInterval(function(){
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.rock1.fuel.amount;
document.getElementById("fuelCost").innerHTML = game.rock1.fuel.cost;
document.getElementById("fuelMax").innerHTML = game.rock1.fuel.max;
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
document.getElementById("lore4").innerHTML = lore[3];
document.getElementById("lore5").innerHTML = lore[4];
document.getElementById("lore6").innerHTML = lore[5];
document.getElementById("lore7").innerHTML = lore[6];
document.getElementById("lore8").innerHTML = lore[7];
document.getElementById("lore9").innerHTML = lore[8];
document.getElementById("lore10").innerHTML = lore[9];
document.getElementById("lore11").innerHTML = lore[10];
document.getElementById("lore12").innerHTML = lore[11];
document.getElementById("basicRocketLimit").innerHTML = game.rockLimit;
document.getElementById("pUpgrade2Cost").innerHTML = game.pUp2cost;
document.getElementById("pUpgrade3Cost").innerHTML = game.pUp3cost;
document.getElementById("creativityMultiplier").innerHTML = game.creatMult;
document.getElementById("moneyPerFuel").innerHTML = Math.round(game.rock1.moneyPerFuel);
document.getElementById("basicTechPoints").innerHTML = game.rock1.techs.currentTP;
document.getElementById("maxBTP").innerHTML = game.rock1.techs.maxTP;
document.getElementById("TC11").innerHTML = game.rock1.techs.cs1;
document.getElementById("TC12").innerHTML = game.rock1.techs.cs2;
document.getElementById("TC13").innerHTML = game.rock1.techs.cs3;
document.getElementById("TC14").innerHTML = game.rock1.techs.ef3;
document.getElementById("TC15").innerHTML = game.rock1.techs.mpf;
document.getElementById("TC16").innerHTML = game.rock1.techs.cmx;
}, 10);
