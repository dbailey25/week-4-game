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
assignTarget()
assignCrystalValues()

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

function assignTarget() {
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#target").text(targetNumber);
}

function assignCrystalValues() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * 12) + 1;
  }
  $("#blue").attr("value", crystalValues [0]);
  $("#green").attr("value", crystalValues [1]);
  $("#pink").attr("value", crystalValues [2]);
  $("#yellow").attr("value", crystalValues [3]);
}

function displayReplayButton() {
  $("#replay").css("visibility", "visible");
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
       $("#instructions").text("Great job! Refueling mission complete.");
       setTimeout(displayReplayButton, 1000 * 2.5);
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
   assignTarget();
   assignCrystalValues();
   $("#replay").css("visibility", "hidden");
 }

$(".crystal").on("click", playGame)

$("#replay").on("click", resetGame)

});
