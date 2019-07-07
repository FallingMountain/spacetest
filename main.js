var game = {
money:25,
rock1: {
  fuel:{
    amount:0,
    moneyPer:2.5,
    max:50,
    cost:0.75,
    scaling:0.02,
    launchScaling:0,
    totalBought:0
  },
  techs:{
    unlocked:false,
    active:false,
    TP:0,
    totalTP:0,
    upgrades:[0,0,0,0,0,0],
    costs:[10,10,10,10,10,25]
  },
  augments:{
    unlocked:false,
    upgrades:[0,0,0,0,0,0],
    costModifier:1,
    total:0
  },
  unlockMessage:"Buy 15 upgrades to unlock Technologies",
  upgrades:[0,0,0],
  totalUpgrades:0,
  costs:[150,200,300],
  scaling:[1.1,1.15,1.2],
  maxUpgrades:[5,5,5],
  effects:[1.1,0.95,1.15],
  launched:0,
  maxLaunched:1,
  totalLaunched:0
},
creativity: {
  amount:0,
  gain:0,
  mult:1
},
};
function ge(element) {
   return document.getElementById(element);
};
function rockLaunch(rocket) {
  if (rocket === 1) {
    if (game.rock1.launched < game.rock1.maxLaunched) {
	    game.rock1.launched += 1;
	game.rock1.totalLaunched += 1;
	game.rock1.fuel.launchScaling += 1;
      var r1L = setInterval(function() {
        if (game.rock1.fuel.amount > 0) {
   game.rock1.fuel.amount -= 1;
   game.money += game.rock1.fuel.moneyPer;
          
        } else {
         game.rock1.launched = 0;
          clearInterval(r1L);
        }
      }, 50)
  }
}
};
function buyFuel(rocket) {
  if (rocket === 1) {
    if (game.money >= game.rock1.fuel.cost*game.rock1.fuel.max && game.rock1.fuel.amount === 0) {
      game.money -= game.rock1.fuel.cost*game.rock1.fuel.max;
      game.rock1.fuel.amount = game.rock1.fuel.max;
      game.rock1.fuel.totalBought += 1;
    } else if (game.money < game.rock1.fuel.cost*game.rock1.fuel.max && game.rock1.fuel.amount === 0) {
      game.rock1.fuel.amount = Math.floor(game.money/game.rock1.fuel.cost)
      game.money -= game.rock1.fuel.cost*(Math.floor(game.money/game.rock1.fuel.cost));
      game.rock1.fuel.totalBought += 1;
    }
  }
}
function upgrade(id) {
    if (game.money > Math.pow(game.rock1.scaling[id],game.rock1.upgrades[id])*game.rock1.costs[id] && game.rock1.upgrades[id] < game.rock1.maxUpgrades[id]) {
      game.money -= Math.pow(game.rock1.scaling[id],game.rock1.upgrades[id])*game.rock1.costs[id]
      game.rock1.upgrades[id] += 1;
    }
};
function tpGen(rocket) {
var toggle = false;
  if (rocket === 1 && game.rock1.techs.active === false) {
    game.rock1.techs.active = true;
    toggle = true
    var r1TP = setInterval(function() {
      if (game.money > 150) {
      game.money -= 100;
      game.rock1.techs.TP += Math.pow(2,game.rock1.techs.upgrades[5]);
      }
      if (game.money <= 150) {
        clearInterval(r1TP);
	game.rock1.techs.active = false;
      }
    }, 1000);
  }else if (rocket === 1 && game.rock1.techs.active === false) {
      game.rock1.techs.active = false;
	clearInterval(r1TP);
    }
}
function techUpgrades(id) {
        if (game.rock1.techs.TP > game.rock1.techs.costs[id]) {
	game.rock1.techs.TP -= game.rock1.techs.costs[id]
	game.rock1.techs.upgrades[id] += 1;
	if (id === 4) {
		game.rock1.fuel.totalBought = 0;
	}
	}
	
}
function sciVal(value) {
	return Math.round(value/Math.pow(10,Math.floor(Math.log10(value)))*1000)/1000
	
};
function sciLog(value) {
	return ("e" + Math.floor(Math.log10(value)));
};

window.setInterval(function(){
if (game.money > 1000) {
document.getElementById("money").innerHTML = Math.round(game.money/Math.pow(10,Math.floor(Math.log10(game.money)))*1000)/1000;
document.getElementById("moneyLog").innerHTML = ("e"+Math.floor(Math.log10(game.money)));
} else {
  document.getElementById("money").innerHTML= Math.round(game.money);
  document.getElementById("moneyLog").innerHTML = "";
}
	if (game.rock1.fuel.moneyPer > 1000) {
		ge("basicMPF").innerHTML = (sciVal(game.rock1.fuel.moneyPer)+"e"+sciLog(game.rock1.fuel.moneyPer));
	} else {
		document.getElementById("basicMPF").innerHTML = Math.round(game.rock1.fuel.max*game.rock1.fuel.moneyPer*100)/100;
	}
document.getElementById("basicfuel").innerHTML = game.rock1.fuel.amount;
document.getElementById("maxBasicFuel").innerHTML = game.rock1.fuel.max;
document.getElementById("basicFuelFill").innerHTML = Math.round(game.rock1.fuel.cost*game.rock1.fuel.max);
if (game.rock1.upgrades[0] >= 5) {
document.getElementById("basicUp1Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[0]+0.1*Math.floor((game.rock1.upgrades[0]+5)/10),game.rock1.upgrades[0])*game.rock1.costs[0]);
} else {
document.getElementById("basicUp1Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[0],game.rock1.upgrades[0])*game.rock1.costs[0]);
}
document.getElementById("basicUp1Amount").innerHTML = game.rock1.upgrades[0];
document.getElementById("basicUp1Max").innerHTML = game.rock1.maxUpgrades[0];
if (game.rock1.upgrades[1] >= 5) {
document.getElementById("basicUp2Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[1]+0.07*Math.floor((game.rock1.upgrades[1]+5)/10),game.rock1.upgrades[1])*game.rock1.costs[1]);
} else {
document.getElementById("basicUp2Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[1],game.rock1.upgrades[1])*game.rock1.costs[1]);
}
document.getElementById("basicUp2Amount").innerHTML = game.rock1.upgrades[1];
document.getElementById("basicUp2Max").innerHTML = game.rock1.maxUpgrades[1];
if (game.rock1.upgrades[2] >= 5) {
document.getElementById("basicUp3Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[2]+0.05*Math.floor((game.rock1.upgrades[2]+5)/10),game.rock1.upgrades[2])*game.rock1.costs[2]);
} else {
document.getElementById("basicUp3Cost").innerHTML = Math.round(Math.pow(game.rock1.scaling[2],game.rock1.upgrades[2])*game.rock1.costs[2]);
}
document.getElementById("basicUp3Amount").innerHTML = game.rock1.upgrades[2];
document.getElementById("basicUp3Max").innerHTML = game.rock1.maxUpgrades[2];
ge("basicTP").innerHTML = game.rock1.techs.TP;
ge("basicTPCost1").innerHTML = game.rock1.techs.costs[0];
ge("basicTPCost2").innerHTML = game.rock1.techs.costs[1];
ge("basicTPCost3").innerHTML = game.rock1.techs.costs[2];
ge("basicTPCost4").innerHTML = game.rock1.techs.costs[3];
ge("basicTPCost5").innerHTML = game.rock1.techs.costs[4];
ge("basicTPCost6").innerHTML = game.rock1.techs.costs[5];
game.rock1.fuel.max = Math.round(Math.pow(game.rock1.effects[0],game.rock1.upgrades[0])*50);
game.rock1.fuel.scaling = Math.pow(game.rock1.effects[1],game.rock1.upgrades[1])*0.05;
game.rock1.fuel.moneyPer = Math.pow(game.rock1.effects[2],game.rock1.upgrades[2])*3*(game.rock1.techs.upgrades[3]+1);
game.rock1.totalUpgrades = game.rock1.upgrades[0]+game.rock1.upgrades[1]+game.rock1.upgrades[2];
game.rock1.fuel.cost = Math.pow(1 + game.rock1.fuel.scaling, game.rock1.fuel.totalBought)*0.5;
game.rock1.augments.cost = Math.pow(1.5, game.rock1.augments.total)*50;

if (game.rock1.techs.unlocked === true) {
  ge("bTechB").style.display = ""
  ge("bMessage").innerHTML = "Collect 1000 Tech Points to unlock Augments"
} else {
  ge("bTechB").style.display = "none"
  ge("bMessage").innerHTML = "Buy 15 upgrades to unlock Technologies"
}
if (game.rock1.techs.active === true) {
  ge("tpGen1").innerHTML = "Stop generation of Tech Points";
} else {
  ge("tpGen1").innerHTML = "Start generation of Tech Points. <br> You gain TP but lose money.";
}
if (game.rock1.augments.unlocked === true) {
game.rock1.augments.costModifier(2,game.rock1.augments.total)

}
if (game.rock1.totalUpgrades >= 15) {
	game.rock1.techs.unlocked = true;
}
if (game.rock1.techs.unlocked === true) {
	for(var i = 0; i < 3; i++) {
	game.rock1.maxUpgrades[i] = 5 + game.rock1.techs.upgrades[i]*3;
	}
}
for (var i = 0; i < 5; i++) {
	game.rock1.techs.costs[i] = Math.pow(2.5, game.rock1.techs.upgrades[i])*10;
}
game.rock1.techs.costs[5] = Math.pow(3, game.rock1.techs.upgrades[5])*25;

updateAchievements();
}, 10);
