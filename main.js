
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
  rock2: {
	fuel: {
		max:150,
		cost:100000,
		amount:0,
		scaleDown:1
	},
	auto: {
		rocket:false,
		fuel:false
	},
	up1: {
	cost:250000000,
	buys:0,
	scaling:1.4
	},
	up2: {
	cost:400000000,
	buys:0,
	scaling:1.6
	},  
	up3: {
	cost:600000000,
	buys:0,
	scaling:1.8
	},  
	up4: {
	cost:400000000,
	buys:0,
	scaling:1.7		
	},
	techs: {
techStart:false,
cs1:0,
cs2:0,
cs3:0,
cs4:0,
ef3:0,
mpf:0,
cmx:0,
ef4:0,
maxTP:0,
currentTP:0,
respec:false
},
moneyPerFuel:1500000,
rockLimit:1,
rockLaunched:0,
	  affectByCreat:false,
	  successChance:100
  },
  
	
  rock3: {
	  active:false,
	fuel: {
		max:150,
		cost:1e13,
		amount:0,
		scaleDown:1
	},
	auto: {
		rocket:false,
		fuel:false
	},
	up1: {
	cost:2.5e17,
	buys:0,
	scaling:1.3
	},
	up2: {
	cost:4e17,
	buys:0,
	scaling:1.4
	},  
	up3: {
	cost:6e17,
	buys:0,
	scaling:1.6
	},  
	up4: {
	cost:4e17,
	buys:0,
	scaling:1.4		
	},
	techs: {
techStart:false,
cs1:0,
cs2:0,
cs3:0,
cs4:0,
ef3:0,
mpf:0,
cmx:0,
ef4:0,
maxTP:0,
currentTP:0,
respec:false
},
moneyPerFuel:1e16,
rockLimit:1,
rockLaunched:0,
	  affectByCreat:false,
	  successChance:100
  },
 rock4: {
	  active:false,
	fuel: {
		max:150,
		cost:1e21,
		amount:0,
		scaleDown:1
	},
	auto: {
		rocket:false,
		fuel:false
	},
	up1: {
	cost:2.5e23,
	buys:0,
	scaling:1.3
	},
	up2: {
	cost:4e23,
	buys:0,
	scaling:1.4
	},  
	up3: {
	cost:6e23,
	buys:0,
	scaling:1.6
	},  
	up4: {
	cost:4e23,
	buys:0,
	scaling:1.4		
	},
	techs: {
techStart:false,
cs1:0,
cs2:0,
cs3:0,
cs4:0,
ef3:0,
mpf:0,
cmx:0,
ef4:0,
maxTP:0,
currentTP:0,
respec:false
},
moneyPerFuel:1e22,
rockLimit:1,
rockLaunched:0,
	  affectByCreat:false,
	  successChance:100
  },
	 rock5: {
	  active:false,
	fuel: {
		max:150,
		cost:1e28,
		amount:0,
		scaleDown:1
	},
	auto: {
		rocket:false,
		fuel:false
	},
	up1: {
	cost:2.5e30,
	buys:0,
	scaling:1.3
	},
	up2: {
	cost:4e30,
	buys:0,
	scaling:1.4
	},  
	up3: {
	cost:6e30,
	buys:0,
	scaling:1.6
	},  
	up4: {
	cost:4e30,
	buys:0,
	scaling:1.4		
	},
	techs: {
techStart:false,
cs1:0,
cs2:0,
cs3:0,
cs4:0,
ef3:0,
mpf:0,
cmx:0,
ef4:0,
maxTP:0,
currentTP:0,
respec:false
},
moneyPerFuel:1e29,
rockLimit:1,
rockLaunched:0,
	  affectByCreat:false,
	  successChance:100
  },
  auto: {
  rocket:false,
  fuel:false
  },
//HλLF-LIFE 3 confirmed
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
funRuined:false,
creatMult:1,
pUp4Bought:false,
brainstormed:false,
explorerUnlocked:false,
pUp5Bought:false,
pUp9Bought:false
};
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", "", "", "","","","","","","","","","","","","", "","","","","","","","","","","","","","",""]
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
	game.rock1.fuel.cost = game.rock1.fuel.cost*(1+(0.0002*game.rock1.fuel.max)*game.rock1.fuel.scaleDown);
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
	game.rock1.fuel.scaleDown = 1.05*game.rock1.fuel.scaleDown;
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
	game.creatGainReset = Math.floor(Math.sqrt(game.money/50000)*game.creatMult*((game.rock1.techs.cmx/2)+1)*((game.rock2.techs.cmx/1.5)+1)*((game.rock3.techs.cmx/1.5)+1));
}
function prestige1(){
if (game.up1buys >=5 && game.up2buys >= 5 && game.up3buys >= 5 && game.money >= 50000){
	game.brainstormed = true;
lore[7] = "You decide it's time to brainstorm up some better ideas for your rocket, so you deconstruct it using the money you have left."
game.creat += Math.floor(Math.sqrt(game.money/50000)*game.creatMult*((game.rock1.techs.cmx/2)+1)*((game.rock2.techs.cmx/1.5)+1)*((game.rock3.techs.cmx/1.5)+1));
game.money = 0;
if (game.pUp9Bought === true) {
	game.rock1.fuel.amount = 150;
	game.rock1.fuel.cost = 2;
	game.rock1.fuel.max = 1579;
	game.rock1.fuel.scaleDown = 3.38;
	game.up1buys = 25;
	game.up2buys = 25;
	game.up3buys = 25;
} else {
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
}
game.rockLaunched = 0;
game.rock2.rockLaunched = 0;
game.rock3.rockLaunched = 0;
game.rock4.rockLaunched = 0;
game.rock5.rockLaunched = 0;
game.rock2.fuel.cost = 100000;
game.rock2.fuel.amount = 0;
game.rock2.fuel.scaleDown = 1;
game.rock2.fuel.max = 150;
game.rock3.fuel.cost = 1e15;
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
game.rock2.up1.buys = 0;
game.rock2.up2.buys = 0;
game.rock2.up3.buys = 0;
game.rock2.up4.buys = 0;
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
game.rock2.up1.cost = 250000000;
game.rock2.up2.cost = 400000000;
game.rock2.up3.cost = 600000000;
game.rock2.up4.cost = 400000000;
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
game.rock2.successChance = 100;
game.rock2.moneyPerFuel = 1500000;
	if (game.creat < 256) {
	if (game.ally ===0) {
	game.rock1.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)
	}
	if (game.ally ===1) {
	game.rock1.moneyPerFuel = 10*(Math.log2(game.creat+1)+1)*1.5*(game.rock1.techs.mpf+1)
	}
	} else {
	if (game.ally ===0) {
	game.rock1.moneyPerFuel = 10*(Math.log2(256)+1)
	}
	if (game.ally ===1) {
	game.rock1.moneyPerFuel = 10*(Math.log2(256)+1)*1.5*(game.rock1.techs.mpf+1)
	}	
	}
	if (game.pUp9Bought === true) {
		game.rock1.moneyPerFuel = game.rock1.moneyPerFuel*1034;
	}
if (game.rock2.affectByCreat === true && game.creat > 2048 && game.creat < 1048576) {
	game.rock2.moneyPerFuel = 1500000*((Math.log2(game.creat-2048)+1)*1.5*(game.rock2.techs.mpf+1));
} else if (game.creat > 1048576) {
	game.rock2.moneyPerFuel = 1500000*((Math.log2(1048576-2048)+1)*1.5*(game.rock2.techs.mpf+1));
} else {
	game.rock2.moneyPerFuel = 1500000;
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
if (game.rock2.techs.respec === true) {
game.rock2.techs.cs1 = 0;
game.rock2.techs.cs2 = 0;
game.rock2.techs.cs3 = 0;
game.rock2.techs.cs4 = 0;
game.rock2.techs.ef3 = 0;
game.rock2.techs.ef4 = 0;
game.rock2.techs.mpf = 0;
game.rock2.techs.cmx = 0;
game.rock2.techs.currentTP = game.rock2.techs.maxTP;
game.rock2.techs.respec = false;
}
}
};
	window.setInterval(function(){
		if (game.auto.fuel === true) {
		buyFuel();
	}
		if (game.rock2.auto.fuel === true) {
		expBuyFuel();
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
	if(imp==null) alert("That save file doesn't work, sorry.");
	else game = JSON.parse(atob(imp));
}
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
	if (game.creat >= 10 && game.pUp4Bought === false) {
	lore[11] = "You have recieved additional funding to make better rockets with things called Technology Points. Pretty cool."
		game.creat -= 10;
		game.rock1.techs.techStart = true;
		game.pUp4Bought = true;
	}
	
};
function pUpgrade5() {
	if (game.creat >= 10 && game.pUp5Bought === false) {
	lore[13] = "NASA has sent some engineers to help you launch this rocket. They say it's for a new project you're going to be working on soon.";
	game.creat -= 10;
	game.auto.rocket = true;
	game.auto.fuel = true;
	game.pUp5Bought = true;
	}
};
function pUpgrade6() {
	if (game.creat > 250 && game.explorerUnlocked === false && game.up1buys === 25 && game.up2buys === 25 && game.up3buys === 25) {
		lore[14] = "You begin work on the Explorers project. The Explorers project was a massive project designed to get a satellite into space.";
		game.explorerUnlocked = true;
		game.creat -= 250;
	}
};
function pUpgrade7() {
	if (game.creat > 2500 && game.explorerUnlocked === true && game.rock1.techs.maxTP === 6) {
		lore[15] = "There's not much left to do with your basic rocket, but it's really close to perfection. Best to give it a little more power.";
		game.creat -= 2500;
		game.rock1.techs.maxTP = 18;
	}
};
function pUpgrade8() {
	if (game.creat > 7500 && game.explorerUnlocked === true && game.rock2.affectByCreat === false) {
		lore[16] = "The Explorers project is looking very good so far. You have all sorts of ideas for how to make it better."
		game.rock2.affectByCreat = true;
		game.creat -= 7500;
	}
};
function pUpgrade9() {
	if (game.creat > 15000 && game.pUp9Bought === false) {
		lore[17] = "The first rocket is useless now. Moreso a stepping stone than anything.";
		game.creat -= 15000;
		game.pUp9Bought = true;
		
	}
};
function pUpgrade10() {
	if (game.creat > 50000 && game.rock2.techs.techStart === false) {
		game.creat -= 50000;
		game.rock2.techs.techStart = true;
		
	}
}
function pUpgrade11() {
	if (game.creat > 50000 && game.rock2.auto.rocket === false) {
		game.creat -= 50000;
		game.rock2.auto.rocket = true;
		game.rock2.auto.fuel = true;
	}
}
function pUpgrade12() {
	if (game.creat > 10000000 && game.rock3.active === false) {
		game.creat -= 10000000;
		game.rock3.active = true;
		
	}
}
setInterval(function() {
if (game.up1buys === 25 && game.up2buys === 25 && game.up3buys === 25) {
	lore[12] = "You have done everything you can with this rocket. Maybe it's time to start a new project."
}
if (game.rock1.techs.techStart === true) {
if (game.up1buys >= 5 && game.up2buys >= 5 && game.up3buys >= 5 && game.rock1.techs.maxTP === 0) {
	game.rock1.techs.maxTP = 1;
	game.rock1.techs.currentTP = 1;
}
if (game.up1buys >= 10 && game.up2buys >= 10 && game.up3buys >= 10 && game.rock1.techs.maxTP === 1) {
	game.rock1.techs.maxTP = 2;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 15 && game.up2buys >= 15 && game.up3buys >= 15 && game.rock1.techs.maxTP === 2) {
	game.rock1.techs.maxTP = 3;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 20 && game.up2buys >= 20 && game.up3buys >= 20 && game.rock1.techs.maxTP === 3) {
	game.rock1.techs.maxTP = 4;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 22 && game.up2buys >= 22 && game.up3buys >= 22 && game.rock1.techs.maxTP === 4) {
	game.rock1.techs.maxTP = 5;
	game.rock1.techs.currentTP += 1;
}
if (game.up1buys >= 24 && game.up2buys >= 24 && game.up3buys >= 24 && game.rock1.techs.maxTP === 5) {
	game.rock1.techs.maxTP = 6;
	game.rock1.techs.currentTP += 1;
}
}
if (game.rock2.techs.techStart === true) {
if (game.rock2.up1.buys >= 5 && game.rock2.up2.buys >= 5 && game.rock2.up3.buys >= 5 && game.rock2.techs.maxTP === 0) {
	game.rock2.techs.maxTP = 1;
	game.rock2.techs.currentTP = 1;
}
if (game.rock2.up1.buys >= 10 && game.rock2.up2.buys >= 10 && game.rock2.up3.buys >= 10 && game.rock2.techs.maxTP === 1) {
	game.rock2.techs.maxTP = 2;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 15 && game.rock2.up2.buys >= 15 && game.rock2.up3.buys >= 15 && game.rock2.techs.maxTP === 2) {
	game.rock2.techs.maxTP = 3;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 20 && game.rock2.up2.buys >= 20 && game.rock2.up3.buys >= 20 && game.rock2.techs.maxTP === 3) {
	game.rock2.techs.maxTP = 4;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 25 && game.rock2.up2.buys >= 25 && game.rock2.up3.buys >= 25 && game.rock2.techs.maxTP === 4) {
	game.rock2.techs.maxTP = 5;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 30 && game.rock2.up2.buys >= 30 && game.rock2.up3.buys >= 30 && game.rock2.techs.maxTP === 5) {
	game.rock2.techs.maxTP = 6;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 35 && game.rock2.up2.buys >= 35 && game.rock2.up3.buys >= 35 && game.rock2.techs.maxTP === 6) {
	game.rock2.techs.maxTP = 7;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 40 && game.rock2.up2.buys >= 40 && game.rock2.up3.buys >= 40 && game.rock2.techs.maxTP === 7) {
	game.rock2.techs.maxTP = 8;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 45 && game.rock2.up2.buys >= 45 && game.rock2.up3.buys >= 45 && game.rock2.techs.maxTP === 8) {
	game.rock2.techs.maxTP = 9;
	game.rock2.techs.currentTP += 1;
}
if (game.rock2.up1.buys >= 50 && game.rock2.up2.buys >= 50 && game.rock2.up3.buys >= 50 && game.rock2.techs.maxTP === 9) {
	game.rock2.techs.maxTP = 10;
	game.rock2.techs.currentTP += 1;
}
}
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
},10)
function tech11() {
	if (game.rock1.techs.cs1 < 3 && game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs1 +=1;
	}
};
function tech12() {
	if (game.rock1.techs.cs2 < 3 && game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs2 +=1;
	}
};
function tech13() {
	if (game.rock1.techs.cs3 < 3&& game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cs3 +=1;
	}
};
function tech14() {
	if (game.rock1.techs.ef3 < 3&& game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.ef3 +=1;
	}
};
function tech15() {
	if (game.rock1.techs.mpf < 3&& game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.mpf +=1;
	}
};
function tech16() {
	if (game.rock1.techs.cmx < 3&& game.rock1.techs.currentTP > 0) {
	game.rock1.techs.currentTP -= 1;
	game.rock1.techs.cmx +=1;
	}
};
function tech21() {
	if (game.rock2.techs.cs1 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.cs1 +=1;
	}
};
function tech22() {
	if (game.rock2.techs.cs2 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.cs2 +=1;
	}
};
function tech23() {
	if (game.rock2.techs.cs3 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.cs3 +=1;
	}
};
function tech24() {
	if (game.rock2.techs.cs4 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.cs4 +=1;
	}
};
function tech25() {
	if (game.rock2.techs.ef3 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.ef3 +=1;
	}
};
function tech26() {
	if (game.rock2.techs.ef4 < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.ef4 +=1;
	}
};
function tech27() {
	if (game.rock2.techs.mpf < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.mpf +=1;
	}
};
function tech28() {
	if (game.rock2.techs.cmx < 3 && game.rock2.techs.currentTP > 0) {
	game.rock2.techs.currentTP -= 1;
	game.rock2.techs.cmx +=1;
	}
};
function tech31() {
	if (game.rock3.techs.cs1 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.cs1 +=1;
	}
};
function tech32() {
	if (game.rock3.techs.cs2 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.cs2 +=1;
	}
};
function tech33() {
	if (game.rock3.techs.cs3 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.cs3 +=1;
	}
};
function tech34() {
	if (game.rock3.techs.cs4 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.cs4 +=1;
	}
};
function tech35() {
	if (game.rock3.techs.ef3 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.ef3 +=1;
	}
};
function tech36() {
	if (game.rock3.techs.ef4 < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.ef4 +=1;
	}
};
function tech37() {
	if (game.rock3.techs.mpf < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.mpf +=1;
	}
};
function tech38() {
	if (game.rock3.techs.cmx < 3 && game.rock3.techs.currentTP > 0) {
	game.rock3.techs.currentTP -= 1;
	game.rock3.techs.cmx +=1;
	}
};
function techRespec() {
	game.rock1.techs.respec = true;
};
function techRespec2() {
	game.rock2.techs.respec = true;
};
function ruinTheFun() {
	if (game.funRuined === false){
	game.up1buys = 25;
	game.up2buys = 25;
	game.up3buys = 25;
	game.creat = 200000;
	game.money = 50001;
	game.funRuined = true;
	}
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}; 
function rocklaunch2() {
	if (game.rock2.rockLaunched < game.rock2.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock2.successChance) {
		game.rock2.rockLaunched += 1;
	var rocketAuto2 = setInterval(function() {
	if (game.rock2.fuel.amount > 0) {
		
	game.money += game.rock2.moneyPerFuel;
	game.rock2.fuel.amount -= 1;
	game.money = Math.round(game.money*100)/100;
	}else if (game.rock2.auto.rocket === false){
	game.rock2.rockLaunched = 0;
	clearInterval(rocketAuto2);
	}
	}, 40);	
		} else {game.money -= game.money/2; game.rock2.fuel.amount = 0; lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";}
	}
};

function expBuyFuel() {
	if (game.money >=game.rock2.fuel.cost*game.rock2.fuel.max) {
	if (game.rock2.fuel.amount === 0) {
	game.money -= game.rock2.fuel.cost*game.rock2.fuel.max;
	game.rock2.fuel.amount += game.rock2.fuel.max;
	game.rock2.fuel.cost = game.rock2.fuel.cost*(1+(0.0001*game.rock2.fuel.max));
	lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
    }
  }
};
function expUp1() {
	if (game.money >= game.rock2.up1.cost && game.rock2.up1.buys < 50) {
	game.rock2.fuel.max = Math.floor(game.rock2.fuel.max*1.1);
	game.money -= game.rock2.up1.cost;
	if (game.rock2.techs.cs1 === 0){
	game.rock2.up1.cost = Math.round(game.rock2.up1.cost*1.45);
	}
	if (game.rock2.techs.cs1 === 1){
	game.rock2.up1.cost = Math.round(game.rock2.up1.cost*1.43);
	}
	if (game.rock2.techs.cs1 === 2){
	game.rock2.up1.cost = Math.round(game.rock2.up1.cost*1.4);
	}
	if (game.rock2.techs.cs1 === 3){
	game.rock2.up1.cost = Math.round(game.rock2.up1.cost*1.36);
	}
	game.rock2.up1.buys += 1;
	game.rock2.successChance -= 1;
	}
	};

function expUp2() {
	if (game.money >= game.rock2.up2.cost) {
	lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2."
	if (game.rock2.up2.buys < 50) {
	game.rock2.fuel.cost = 50000;
	game.rock2.fuel.scaleDown = 0.9*game.rock2.fuel.scaleDown;
	game.money -= game.rock2.up2.cost;
	if (game.rock2.techs.cs2 === 0){
	game.rock2.up2.cost = Math.round(game.rock2.up2.cost*1.55);
	}
	if (game.rock2.techs.cs2 === 1){
	game.rock2.up2.cost = Math.round(game.rock2.up2.cost*1.53);
	}
	if (game.rock2.techs.cs2 === 2){
	game.rock2.up2.cost = Math.round(game.rock2.up2.cost*1.5);
	}
	if (game.rock2.techs.cs2 === 3){
	game.rock2.up2.cost = Math.round(game.rock2.up2.cost*1.46);
	}
	game.rock2.up2.buys += 1;
	game.rock2.successChance -= 1;
	}
	}
};
function exUp3() {
	if (game.money >= game.rock2.up3.cost) {
	lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes."
	if (game.rock2.up3.buys < 50) {
	if (game.rock2.techs.ef3 === 0){
	game.rock2.moneyPerFuel = game.rock2.moneyPerFuel*1.25;
	}
	if (game.rock2.techs.ef3 === 1){
	game.rock2.moneyPerFuel = game.rock2.moneyPerFuel*1.29;
	}
	if (game.rock2.techs.ef3 === 2){
	game.rock2.moneyPerFuel = game.rock2.moneyPerFuel*1.32;
	}
	if (game.rock2.techs.ef3 === 3){
	game.rock2.moneyPerFuel = game.rock2.moneyPerFuel*1.34;
	}
	game.money -= game.rock2.up3.cost;
	if (game.rock2.techs.cs3 === 0){
	game.rock2.up3.cost = Math.round(game.rock2.up3.cost*1.6);
	}
	if (game.rock2.techs.cs3 === 1){
	game.rock2.up3.cost = Math.round(game.rock2.up3.cost*1.54);
	}
	if (game.rock2.techs.cs3 === 2){
	game.rock2.up3.cost = Math.round(game.rock2.up3.cost*1.5);
	}
	if (game.rock2.techs.cs3 === 3){
	game.rock2.up3.cost = Math.round(game.rock2.up3.cost*1.48);
	}
	game.rock2.up3.buys += 1;
	game.rock2.successChance -= 1;
	}
	}
};
function expUp4() {
	if (game.money >= game.rock2.up4.cost) {
	lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2."
	if (game.rock2.up4.buys < 50) {
	if (game.rock2.techs.ef4 === 0){
	game.rock2.successChance += 2;
	}
	if (game.rock2.techs.ef4 === 1){
	game.rock2.successChance += 2.2;
	}
	if (game.rock2.techs.ef4 === 2){
	game.rock2.successChance += 2.5;
	}
	if (game.rock2.techs.ef4 === 3){
	game.rock2.successChance += 2.9;
	}
	game.money -= game.rock2.up4.cost;
	if (game.rock2.techs.cs4 === 0){
	game.rock2.up4.cost = Math.round(game.rock2.up4.cost*1.5);
	}
	if (game.rock2.techs.cs4 === 1){
	game.rock2.up4.cost = Math.round(game.rock2.up4.cost*1.48);
	}
	if (game.rock2.techs.cs4 === 2){
	game.rock2.up4.cost = Math.round(game.rock2.up4.cost*1.45);
	}
	if (game.rock2.techs.cs4 === 3){
	game.rock2.up4.cost = Math.round(game.rock2.up4.cost*1.41);
	}
	game.rock2.up4.buys += 1;
	}
	}
};
function rockLaunch3() {
	if (game.rock3.rockLaunched < game.rock3.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock3.successChance) {
		game.rock3.rockLaunched += 1;
	var imTiredOfMakingFormalNames = setInterval(function() {
	if (game.rock3.fuel.amount > 0) {
		
	game.money += game.rock3.moneyPerFuel;
	game.rock3.fuel.amount -= 1;
	game.money = Math.round(game.money*100)/100;
	}else if (game.rock3.auto.rocket === false){
	game.rock3.rockLaunched = 0;
	clearInterval(imTiredOfMakingFormalNames);
	}
	}, 40);	
		} else {game.money -= game.money/2; game.rock3.fuel.amount = 0; lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";}
	}
};
function buyFuelForTheThirdTime() {
if (game.money >=game.rock3.fuel.cost*game.rock3.fuel.max) {
	if (game.rock3.fuel.amount === 0) {
	game.money -= game.rock3.fuel.cost*game.rock3.fuel.max;
	game.rock3.fuel.amount += game.rock3.fuel.max;
	game.rock3.fuel.cost = game.rock3.fuel.cost*(1+(0.0001*game.rock3.fuel.max));
	lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
    }
  }
};
function mercUp1() {
	if (game.money >= game.rock3.up1.cost && game.rock3.up1.buys < 50) {
	game.rock3.fuel.max = Math.floor(game.rock3.fuel.max*1.1);
	game.money -= game.rock3.up1.cost;
	if (game.rock3.techs.cs1 === 0){
	game.rock3.up1.cost = Math.round(game.rock3.up1.cost*1.3);
	}
	if (game.rock3.techs.cs1 === 1){
	game.rock3.up1.cost = Math.round(game.rock3.up1.cost*1.28);
	}
	if (game.rock3.techs.cs1 === 2){
	game.rock3.up1.cost = Math.round(game.rock3.up1.cost*1.25);
	}
	if (game.rock3.techs.cs1 === 3){
	game.rock3.up1.cost = Math.round(game.rock3.up1.cost*1.22);
	}
	game.rock3.up1.buys += 1;
	game.rock3.successChance -= 1;
	}
	};
function mercUp2() {
	if (game.money >= game.rock3.up2.cost) {
	lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2."
	if (game.rock3.up2.buys < 50) {
	game.rock3.fuel.cost = 50000;
	game.rock3.fuel.scaleDown = 0.9*game.rock3.fuel.scaleDown;
	game.money -= game.rock3.up2.cost;
	if (game.rock3.techs.cs2 === 0){
	game.rock3.up2.cost = Math.round(game.rock3.up2.cost*1.5);
	}
	if (game.rock3.techs.cs2 === 1){
	game.rock3.up2.cost = Math.round(game.rock3.up2.cost*1.46);
	}
	if (game.rock3.techs.cs2 === 2){
	game.rock3.up2.cost = Math.round(game.rock3.up2.cost*1.43);
	}
	if (game.rock3.techs.cs2 === 3){
	game.rock3.up2.cost = Math.round(game.rock3.up2.cost*1.4);
	}
	game.rock3.up2.buys += 1;
	game.rock3.successChance -= 1;
	}
	}
};
function mercUp3() {
	if (game.money >= game.rock3.up3.cost) {
	lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes."
	if (game.rock3.up3.buys < 50) {
	if (game.rock3.techs.ef3 === 0){
	game.rock3.moneyPerFuel = game.rock3.moneyPerFuel*1.25;
	}
	if (game.rock3.techs.ef3 === 1){
	game.rock3.moneyPerFuel = game.rock3.moneyPerFuel*1.29;
	}
	if (game.rock3.techs.ef3 === 2){
	game.rock3.moneyPerFuel = game.rock3.moneyPerFuel*1.32;
	}
	if (game.rock3.techs.ef3 === 3){
	game.rock3.moneyPerFuel = game.rock3.moneyPerFuel*1.34;
	}
	game.money -= game.rock2.up3.cost;
	if (game.rock3.techs.cs3 === 0){
	game.rock3.up3.cost = Math.round(game.rock3.up3.cost*1.6);
	}
	if (game.rock3.techs.cs3 === 1){
	game.rock3.up3.cost = Math.round(game.rock3.up3.cost*1.56);
	}
	if (game.rock3.techs.cs3 === 2){
	game.rock3.up3.cost = Math.round(game.rock3.up3.cost*1.53);
	}
	if (game.rock3.techs.cs3 === 3){
	game.rock3.up3.cost = Math.round(game.rock3.up3.cost*1.5);
	}
	game.rock3.up3.buys += 1;
	game.rock3.successChance -= 1;
	}
	}
};
function mercUp4() {
	if (game.money >= game.rock3.up4.cost) {
	lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2."
	if (game.rock3.up4.buys < 50) {
	if (game.rock3.techs.ef4 === 0){
	game.rock3.successChance += 2;
	}
	if (game.rock2.techs.ef4 === 1){
	game.rock3.successChance += 2.2;
	}
	if (game.rock2.techs.ef4 === 2){
	game.rock3.successChance += 2.5;
	}
	if (game.rock2.techs.ef4 === 3){
	game.rock3.successChance += 2.9;
	}
	game.money -= game.rock3.up4.cost;
	if (game.rock3.techs.cs4 === 0){
	game.rock3.up4.cost = Math.round(game.rock3.up4.cost*1.5);
	}
	if (game.rock2.techs.cs4 === 1){
	game.rock3.up4.cost = Math.round(game.rock3.up4.cost*1.48);
	}
	if (game.rock2.techs.cs4 === 2){
	game.rock3.up4.cost = Math.round(game.rock3.up4.cost*1.45);
	}
	if (game.rock2.techs.cs4 === 3){
	game.rock3.up4.cost = Math.round(game.rock3.up4.cost*1.41);
	}
	game.rock3.up4.buys += 1;
	}
	}
};
function putSomeoneOnYourFrickingRocket() {
	
	
	
}
window.setInterval(function(){
document.getElementById("money").innerHTML = game.money;
document.getElementById("stillmoney").innerHTML = game.money;
document.getElementById("alsostillmoney").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.rock1.fuel.amount;
document.getElementById("explorerFuel").innerHTML = game.rock2.fuel.amount
document.getElementById("mercuryFuel").innerHTML = game.rock3.fuel.amount
document.getElementById("fuelCost").innerHTML = game.rock1.fuel.cost;
document.getElementById("explorerFuelCost").innerHTML = game.rock2.fuel.cost;
document.getElementById("mercuryFuelCost").innerHTML = game.rock3.fuel.cost;
document.getElementById("fuelMax").innerHTML = game.rock1.fuel.max;
document.getElementById("explorerFuelMax").innerHTML = game.rock2.fuel.max;
document.getElementById("mercuryFuelMax").innerHTML = game.rock3.fuel.max;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
document.getElementById("explorerUpgrade1Cost").innerHTML = game.rock2.up1.cost;
document.getElementById("mercuryUpgrade1Cost").innerHTML = game.rock3.up1.cost;
document.getElementById("upgrade2Cost").innerHTML = game.up2Cost;
document.getElementById("explorerUpgrade2Cost").innerHTML = game.rock2.up2.cost;
document.getElementById("mercuryUpgrade2Cost").innerHTML = game.rock3.up2.cost;
document.getElementById("upgrade3Cost").innerHTML = game.up3Cost;
document.getElementById("explorerUpgrade3Cost").innerHTML = game.rock2.up3.cost;
document.getElementById("mercuryUpgrade3Cost").innerHTML = game.rock3.up3.cost;
document.getElementById("explorerUpgrade4Cost").innerHTML = game.rock2.up4.cost;
document.getElementById("mercuryUpgrade4Cost").innerHTML = game.rock3.up4.cost;
document.getElementById("upgrade1Buys").innerHTML = game.up1buys;
document.getElementById("explorerUpgrade1Buys").innerHTML = game.rock2.up1.buys;
document.getElementById("explorerUpgrade2Buys").innerHTML = game.rock2.up2.buys;
document.getElementById("explorerUpgrade3Buys").innerHTML = game.rock2.up3.buys;
document.getElementById("explorerUpgrade4Buys").innerHTML = game.rock2.up4.buys;
document.getElementById("mercuryUpgrade1Buys").innerHTML = game.rock3.up1.buys;
document.getElementById("mercuryUpgrade2Buys").innerHTML = game.rock3.up2.buys;
document.getElementById("mercuryUpgrade3Buys").innerHTML = game.rock3.up3.buys;
document.getElementById("mercuryUpgrade4Buys").innerHTML = game.rock3.up4.buys;
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
document.getElementById("lore13").innerHTML = lore[12];
document.getElementById("lore14").innerHTML = lore[13];
document.getElementById("lore15").innerHTML = lore[14];
document.getElementById("lore16").innerHTML = lore[15];
document.getElementById("lore17").innerHTML = lore[16];
document.getElementById("lore18").innerHTML = lore[17];
document.getElementById("basicRocketLimit").innerHTML = game.rockLimit;
document.getElementById("pUpgrade2Cost").innerHTML = game.pUp2cost;
document.getElementById("pUpgrade3Cost").innerHTML = game.pUp3cost;
document.getElementById("creativityMultiplier").innerHTML = game.creatMult;
document.getElementById("moneyPerFuel").innerHTML = Math.round(game.rock1.moneyPerFuel);
document.getElementById("explorerMoneyPerFuel").innerHTML = Math.round(game.rock2.moneyPerFuel);
document.getElementById("mercuryMoneyPerFuel").innerHTML = Math.round(game.rock2.moneyPerFuel);
document.getElementById("basicTechPoints").innerHTML = game.rock1.techs.currentTP;
document.getElementById("maxBTP").innerHTML = game.rock1.techs.maxTP;
document.getElementById("explorerTechPoints").innerHTML = game.rock2.techs.currentTP;
document.getElementById("maxETP").innerHTML = game.rock2.techs.maxTP;
document.getElementById("mercuryTechPoints").innerHTML = game.rock3.techs.currentTP;
document.getElementById("maxMTP").innerHTML = game.rock2.techs.maxTP;
document.getElementById("TC11").innerHTML = game.rock1.techs.cs1;
document.getElementById("TC12").innerHTML = game.rock1.techs.cs2;
document.getElementById("TC13").innerHTML = game.rock1.techs.cs3;
document.getElementById("TC14").innerHTML = game.rock1.techs.ef3;
document.getElementById("TC15").innerHTML = game.rock1.techs.mpf;
document.getElementById("TC16").innerHTML = game.rock1.techs.cmx;
document.getElementById("TC21").innerHTML = game.rock2.techs.cs1;
document.getElementById("TC22").innerHTML = game.rock2.techs.cs2;
document.getElementById("TC23").innerHTML = game.rock2.techs.cs3;
document.getElementById("TC24").innerHTML = game.rock2.techs.cs4;
document.getElementById("TC25").innerHTML = game.rock2.techs.ef3;
document.getElementById("TC26").innerHTML = game.rock2.techs.ef4;
document.getElementById("TC27").innerHTML = game.rock2.techs.mpf;
document.getElementById("TC28").innerHTML = game.rock2.techs.cmx;
document.getElementById("TC31").innerHTML = game.rock3.techs.cs1;
document.getElementById("TC32").innerHTML = game.rock3.techs.cs2;
document.getElementById("TC33").innerHTML = game.rock3.techs.cs3;
document.getElementById("TC34").innerHTML = game.rock3.techs.cs4;
document.getElementById("TC35").innerHTML = game.rock3.techs.ef3;
document.getElementById("TC36").innerHTML = game.rock3.techs.ef4;
document.getElementById("TC37").innerHTML = game.rock3.techs.mpf;
document.getElementById("TC38").innerHTML = game.rock3.techs.cmx;
document.getElementById("failChance").innerHTML = game.rock2.successChance;
	if (game.money > 50000 || game.brainstormed === true) {
	document.getElementById("brainPrestige").style.display = "inline"
} else {
	document.getElementById("brainPrestige").style.display = "none"
}
if (game.explorerUnlocked === true) {
document.getElementById("explorerContent").style.display = "inline"
document.getElementById("explorerContent2").style.display = "inline"
} else {
	document.getElementById("explorerContent").style.display = "none"
document.getElementById("explorerContent2").style.display = "inline"
}
	if (game.rock1.techs.techStart === true) {
		document.getElementById("basicTechs").style.display = ""
		document.getElementById("basicTechs2").style.display = ""
	}else {
document.getElementById("basicTechs").style.display = "none"
		document.getElementById("basicTechs2").style.display = "none"
	}
	if (game.rock2.techs.techStart === true) {
		document.getElementById("explorerTechs").style.display = ""
		document.getElementById("explorerTechs2").style.display = ""
	}else {
document.getElementById("explorerTechs").style.display = "none"
		document.getElementById("explorerTechs2").style.display = "none"
	}
	if (game.rock3.active === true) {
		document.getElementById("mercuryContent").style.display = ""
		
	} else {document.getElementById("mercuryContent").style.display = "none"}
}, 10);
