console.log("it's working");


// variables
// four variables are needed to hold the randomly assigned value to each clickable item

var itemOneValue = "" // number value
var itemTwoValue = "" // number value
var itemThreeValue = "" // number value
var itemFourValue = "" // number value

// random value generator. Will be used to generate target score and values for each clickable item
// function variable are "lo" and "hi". two number values are needed in the invocation, ie: (3, 25), to execute
// Math.random selects random number
// Math.floor rounds number down to nearest whole number
// Equation then evaluates as "hi" minus "lo" times random number plus "lo" = "randomValue"
var randomValue = function (lo, hi) {
	return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}
// is it working?
console.log("Random value = " + randomValue(1,2));

// variables are needed to track wins and losses. needs to be persistent until game or page refresh
var winsCounter = "" // number value
var lossCounter = "" // number value


// variable needed to target score and current score
var targetScore = "" // number value
var currentScore = "" // number value

//======================================================================================

targetScore = randomValue(2,88);

$("#eggBert").html(targetScore);
console.log("Target score = " + targetScore);


// define clickable tags and register click
$("#one" ).click(function() {
	currentScore += itemOneValue;
	$("#princessPeach").html(currentScore);
	console.log("Click One Working! The value is " + itemOneValue);
});

$("#two" ).click(function() {
	currentScore += itemTwoValue;
	$("#princessPeach").html(currentScore);
	console.log("Click Two Working! The value is " + itemTwoValue);
});

$("#three" ).click(function() {
	currentScore += itemThreeValue;
	$("#princessPeach").html(currentScore);
	console.log("Click Three Working! The value is " + itemThreeValue);
});

$("#four" ).click(function() {
	currentScore += itemFourValue;
	$("#princessPeach").html(currentScore);
	console.log("Click Four Working! The value is " + itemFourValue);
});



// will need to compare current score to target score and determine win, lose or continue
// this section will need to add up each click to create a cumilative score

// define start and reset functions

function gameOn(){
	// set values to zero to start each game
	currentScore = 0;
	targetScore = 0;



	itemOneValue = randomValue(1,17);
	console.log("itemOneValue = " + itemOneValue);
	
	itemTwoValue = randomValue(1,17);
	console.log("itemTwoValue = " + itemTwoValue);

	itemThreeValue = randomValue(1,17);
	console.log("itemThreeValue = " + itemThreeValue);

	itemFourValue = randomValue(1,17);
	console.log("itemFourValue = " + itemFourValue);
};

gameOn();
