var numberGuessed = document.querySelector('.number-returned');
var guessInput = document.querySelector('#submit-guess-input');
var submitButton = document.querySelector('.submit-guess-button');
var min = 1;
var max = 100;
var range = max - min;
var randomNumber = generateRandomNumber(range, min);
var userGuessNumber = document.querySelector("#submit-guess-input");
var minEntry = document.querySelector("#min-range").value;
var maxEntry = document.querySelector("#max-range").value;
var updateButton = document.querySelector('.update-range');
var evaluationFeedback = document.querySelector('.evaluation-feedback');
// var resetButton = document.querySelector('.reset');


submitButton.addEventListener('click', submitGuess);

updateButton.addEventListener('click', function() {
	min = parseInt(document.querySelector("#min-range").value);
	max = parseInt(document.querySelector("#max-range").value);
	range = max - min;
	randomNumber = generateRandomNumber(range, min);
	replaceMinMax();
});

// resetButton.addEventListener('click', function() {
// 	document.getElementById(minEntry).value = "";
// 	document.getElementById(maxEntry).value = "";
// 	document.getElementById(userGuessNumber).value = "";
// });

// random number max/min parameters 
// Math.floor(Math.random() * (maxEntry - minEntry+1)) + minEntry;

function generateRandomNumber(range, min) {
	var updatedRandomNumber = Math.floor(Math.random() * (range + 1) + min);
	console.log(`random number has been updated to ${updatedRandomNumber}`);
	return updatedRandomNumber;
};

function replaceMinMax() {
	document.querySelector('.min-entry').innerText = minEntry;
	document.querySelector('.max-entry').innerText = maxEntry;
};

// submit guess button 
function submitGuess(e) {
  e.preventDefault();
  numberGuessed.innerText = guessInput.value;
  evaluateGuess(guessInput.value);
};

// guess feedback statements
function evalFunc() {
  document.querySelector('.evaluation-feedback').innerText = evaluateGuess;
};

function evaluateGuess(userGuessNumber) {
if (userGuessNumber == randomNumber) {
  document.querySelector('.evaluation-feedback').innerText = 
  "BOOM, you got it!";
} else if (userGuessNumber > randomNumber) {
  document.querySelector('.evaluation-feedback').innerText = 
  "Sorry, that is too high";
} else {
  document.querySelector('.evaluation-feedback').innerText = 
  "Sorry that is too low";
}
};