// global variables
var targetNumber;
var counter = 0;
var wins = 0;
var losses = 0;
var crystalValues = []
var crystals = ["blue", "green", "pink", "yellow"]

assignTarget()
assignCrystalValues()

function assignTarget() {
  targetNumber = Math.floor(Math.random() * 120 + 19);
  $("#target").text(targetNumber);
}

function assignCrystalValues() {
  for (var i = 0; i < crystals.length; i++) {
    crystalValues [i] = Math.floor(Math.random() * 12 + 1);
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
       $("#instructions").css({"color":"#1add27","border":"4px solid #29511a","background-color":"#4c6d40"});
       $("#instructions").text("Great job! Refueling mission complete.");
       // show replay button
       $("#replay").css("visibility", "visible");

       // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!
     }

     else if (counter >= targetNumber) {
       losses++;
       $("#loss-count").text(losses);
       $(".crystal").off("click", handler);
       $("#instructions").css({"color":"a82100","border":"4px solid #a82100","background-color":"#ef9c88"});
       $("#instructions").text("Target fuel level exceeded! Refueling mission failed.");
       //  show replay button
       $("#replay").css("visibility", "visible");

       // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!
     }

 }

$(".crystal").on("click", handler)


  // original code
  // $(".crystal").on("click", function() {
  //   var crystalValue = ($(this).attr("value"));
  //   crystalValue = parseInt(crystalValue);
  //   counter += crystalValue;
  //   $("#current").text(counter);
  //   if (counter === targetNumber) {
  //     wins++;
  //     $("#win-count").text(wins);
  //     $(".crystal").off("click");
  //     $("#instructions").text("Great job! Refueling mission complete.");
  //     // show replay button
  //     $("#replay").css("visibility", "visible");
  //
  //     // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!
  //   }
  //
  //   else if (counter >= targetNumber) {
  //     losses++;
  //     $("#loss-count").text(losses);
  //     $(".crystal").off("click");
  //     $("#instructions").text("Target fuel level exceeded! Refueling mission failed.");
  //     //  show replay button
  //     $("#replay").css("visibility", "visible");
  //
  //     // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!
  //   }
  //
  // });

  $("#replay").on("click", function() {
    $(".crystal").on("click", handler);
    counter = 0;
    $("#current").text("0");
    $("#instructions").css({"color":"#000f66","border":"4px solid #000f66","background-color":"#d5d7e0"});
    $("#instructions").text("The ship needs the exact amount of fuel for its mission. Too much and it may explode. Each of the crystals provides a different amount of fuel. Click them to fill its tank to the Target Fuel Level.");
    assignTarget();
    assignCrystalValues();
    $("#replay").css("visibility", "hidden");
  });
