// global variables
var targetNumber;
assignTarget()


$("#target").text(targetNumber);

var counter = 0;

// array for crystal values
var crystalValues = []
var crystals = ["blue", "green", "pink", "yellow"]


assignCrystalValues()

function assignTarget() {
  targetNumber = Math.floor(Math.random() * 120 + 19);
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




  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#current").text(counter);

    if (counter === targetNumber) {
      $("#instructions").text("Great job! Refueling mission complete.");
      // add button to reset
      $("#instructions").append("<br>" + "<button>" + "Play Again" + "</button>");
      $(":button").attr("id", "replay");

      // !!!!!!!!!!!!!!!! ADD SHIP ANIMATION !!!!!!!!!!!!!!!

    }

    else if (counter >= targetNumber) {
      $("#instructions").text("Target fuel level exceeded! Refueling mission failed.");
      // add button to reset
      $("#button").html("<button>" + "Play Again" + "</button>");
      $(":button").attr("id", "replay");
    }

  });

  $("#replay").on("click", function() {
    console.log($("#replay").get());
    console.log("button clicked");
    // crystalValues.length = 0;
    // $("#current").text("0");
    // $("#instructions").text("The ship needs the exact amount of fuel for its mission. Too much and it may explode. Each of the crystals provides a different amount of fuel. Click them to fill its tank to the Target Fuel Level.");
    // assignTarget();
    // assignCrystalValues();
  });
