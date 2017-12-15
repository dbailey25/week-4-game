$(document).ready(function(){

// global variables
var targetNumber;
var counter = 0;
var wins = 0;
var losses = 0;
var crystalValues = []
var crystals = ["blue", "green", "pink", "yellow"]

// functions called on page load
displayShip()
displayLevel()
assignTarget1()
assignCrystalValues1()

// function declarations
function displayShip() {
  $("#launch-pad").html($("<div></div>", {"id": "ship-container"}));
  $("#ship-container").html($("<div></div", {"id": "ship"}));
  $("#ship").html($("<img>", {"id": "rocket", "src": "assets/images/ship.png"}));
  $("#ship-container").append($("<div></div", {"id": "exhaust"}));
  $("#exhaust").html($("<img>", {"id": "flame", "src": "assets/images/exhaust.png"}));
}

function displayExplosion() {
  $("#launch-pad").html($("<div></div>", {"id": "ship-container"}));
  $("#ship-container").html($("<img>", {"id": "explosion", "src": "assets/images/explosion2.png"}));
}

function assignTarget1() {
  targetNumber = Math.floor(Math.random() * (120 - 30 + 1)) + 30;
  $("#target").text(targetNumber);
}

function assignTarget2() {
  targetNumber = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
  $("#target").text(targetNumber);
}

function assignTarget3() {
  targetNumber = Math.floor(Math.random() * (80 - 19 + 1)) + 19;
  $("#target").text(targetNumber);
}

function assignCrystalValues1() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * 7) + 1;
  }
  $("#blue").attr("value", crystalValues [0]);
  $("#green").attr("value", crystalValues [1]);
  $("#pink").attr("value", crystalValues [2]);
  $("#yellow").attr("value", crystalValues [3]);
}

function assignCrystalValues2() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
  }
  $("#blue").attr("value", crystalValues [0]);
  $("#green").attr("value", crystalValues [1]);
  $("#pink").attr("value", crystalValues [2]);
  $("#yellow").attr("value", crystalValues [3]);
}

function assignCrystalValues3() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * (11 - 3 + 1)) + 3;
  }
  $("#blue").attr("value", crystalValues [0]);
  $("#green").attr("value", crystalValues [1]);
  $("#pink").attr("value", crystalValues [2]);
  $("#yellow").attr("value", crystalValues [3]);
}

function assignCrystalValues4() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
  }
  $("#blue").attr("value", crystalValues [0]);
  $("#green").attr("value", crystalValues [1]);
  $("#pink").attr("value", crystalValues [2]);
  $("#yellow").attr("value", crystalValues [3]);
}

function displayReplayButton() {
  $("#replay").css("visibility", "visible");
}

function gameOver() {
  $("#gameOver").css("visibility", "visible");
}

function displayLevel() {
  if (wins < 3) {
     $("#levelNumber").text("Beginner");
  }
  else if (wins >= 3 && wins < 6) {
    $("#levelNumber").text("Intermediate");
  }
  else if (wins >= 6 && wins < 9) {
    $("#levelNumber").text("Expert");
  }
  else {
    $("#levelNumber").text("Master");
  }
}


 var playGame = function(e) {

   var crystalValue = ($(this).attr("value"));
     crystalValue = parseInt(crystalValue);
     counter += crystalValue;
     $("#current").text(counter);
     if (counter === targetNumber) {
       wins++;
       $("#win-count").text(wins);
       $(".crystal").off("click", playGame);
       $("#flame").css("visibility", "visible");
       var ship = $("#ship-container");
       ship.animate({top: "-450px"}, 2500);
       $("#instructions").css({"color":"#1add27","border":"4px solid #29511a","background-color":"#4c6d40"});
       if (wins === 3) {
         $("#instructions").html("Great job! Refueling mission complete.<br><br>Congratulations, you have completed the Beginner Level. Click Play Again to continue to Intermediate Level.");
       }
       else if (wins === 6) {
         $("#instructions").html("Great job! Refueling mission complete.<br><br>Very good, you have completed the Intermediate Level. Click Play Again to continue to the Expert Level.");
       }
       else if (wins === 9) {
         $("#instructions").html("Great job! Refueling mission complete.<br><br>Your skills are superior; you are now ready for the greatest challenge. Click Play Again to continue to the Master Level.");
       }
       else if (wins === 14) {
         $("#instructions").html("Great job! Refueling mission complete.<br><br>Amazing, you have truly mastered this exercise. Now go find a way to save humanity with your new skills.");
       }
       else {
         $("#instructions").html("Great job! Refueling mission complete.");
       };
      if (wins < 14) {
        setTimeout(displayReplayButton, 1000 * 2.5);
      }
      else {
        setTimeout(gameOver, 1000 * 2.5);
      };
     }

     else if (counter >= targetNumber) {
       losses++;
       $("#loss-count").text(losses);
       $(".crystal").off("click", playGame);

       $("#rocket").css("visibility", "hidden");
       displayExplosion();
       var explosion = $("#explosion");
       explosion.animate({width: "+=100px", height: "+=100px" }, 750);
       explosion.animate({height: "1px", width: "1px", opacity: ".1"}, 1750);
       $("#instructions").css({"color":"#a82100","border":"4px solid #a82100","background-color":"#ef9c88"});
       $("#instructions").text("Target fuel level exceeded! Refueling mission failed.");
       setTimeout(displayReplayButton, 1000 * 2.5);
     }
 }

 var resetGame = function() {
   $(".crystal").on("click", playGame);
   counter = 0;
   $("#current").text("0");
   displayShip();
   $("#instructions").css({"color":"#000f66","border":"4px solid #000f66","background-color":"#d5d7e0"});
   $("#instructions").text("The ship needs the exact amount of fuel for its mission. Too much and it may explode. Each of the crystals provides a different amount of fuel. Click them to fill its tank to the Target Fuel Level.");
   $("#flame").css("visibility","hidden");
   if (wins < 6) {
     assignTarget1();
   }
   else if (wins < 9){
     assignTarget2();
   }
   else {
     assignTarget3();
   };
   $("#replay").css("visibility", "hidden");
   if (wins < 3) {
     assignCrystalValues1();
   }
   else if (wins >= 3 && wins < 6) {
     assignCrystalValues2();
   }
   else if (wins >= 6 && wins < 9) {
     assignCrystalValues3();
   }
   else {
     assignCrystalValues4();
   };
   displayLevel();
 }

$(".crystal").on("click", playGame)

$("#replay").on("click", resetGame)

});
