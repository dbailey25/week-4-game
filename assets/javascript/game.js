$(document).ready(function(){

// global variables
var targetNumber;
var counter = 0;
var wins = 0;
var losses = 0;
var crystalValues = []
var crystals = ["blue", "green", "pink", "yellow"]

// functions to be called on page load
displayShip()
assignTarget()
assignCrystalValues()

function displayShip() {
  $("#launch-pad").html($("<div></div>", {"id": "ship-container"}));
  $("#ship-container").html($("<div></div", {"id": "ship"}));
  $("#ship").html($("<img>", {"id": "rocket", "src": "assets/images/ship.png"}));
  $("#ship-container").append($("<div></div", {"id": "exhaust"}));
  $("#exhaust").html($("<img>", {"id": "flame", "src": "assets/images/exhaust.png"}));
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


 var handler = function(e) {

   var crystalValue = ($(this).attr("value"));
     crystalValue = parseInt(crystalValue);
     counter += crystalValue;
     $("#current").text(counter);
     if (counter === targetNumber) {
       wins++;
       $("#win-count").text(wins);
       $(".crystal").off("click", handler);
       $("#flame").css("visibility", "visible");
       var ship = $("#ship-container");
       ship.animate({top: "-330px"}, 2000);
       $("#instructions").css({"color":"#1add27","border":"4px solid #29511a","background-color":"#4c6d40"});
       $("#instructions").text("Great job! Refueling mission complete.");
       $("#replay").css("visibility", "visible");
     }

     else if (counter >= targetNumber) {
       losses++;
       $("#loss-count").text(losses);
       $(".crystal").off("click", handler);
       $("#instructions").css({"color":"#a82100","border":"4px solid #a82100","background-color":"#ef9c88"});
       $("#instructions").text("Target fuel level exceeded! Refueling mission failed.");
       //  show replay button
       $("#replay").css("visibility", "visible");


       // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!
     }

 }

$(".crystal").on("click", handler)


  $("#replay").on("click", function() {
    $(".crystal").on("click", handler);
    counter = 0;
    $("#current").text("0");
    displayShip();
    $("#instructions").css({"color":"#000f66","border":"4px solid #000f66","background-color":"#d5d7e0"});
    $("#instructions").text("The ship needs the exact amount of fuel for its mission. Too much and it may explode. Each of the crystals provides a different amount of fuel. Click them to fill its tank to the Target Fuel Level.");
    $("#flame").css("visibility","hidden");
    assignTarget();
    assignCrystalValues();
    $("#replay").css("visibility", "hidden");
  });

});
