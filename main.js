var numberGuessed = document.querySelector('.number-returned');
var guessInput = document.querySelector('#submit-guess-input');
var button = document.querySelector('.submit-guess-button');

var min = 1;
var max = 100;
var range = max - min;

var randomNumber = generateRandomNumber(range, min);
var userGuessNumber = document.getElementById("submit-guess-input").value;

// console.log(randomNumber);

function generateRandomNumber(range, min) {
	var updatedRandomNumber = Math.floor(Math.random() * (range + 1) + min);
	console.log(`random number has been updated to ${updatedRandomNumber}`);
	return updatedRandomNumber;
};

var updateButton = document.querySelector('.update-range');

updateButton.addEventListener('click', function() {
	min = parseInt(document.querySelector("#minRange").value);
	max = parseInt(document.querySelector("#maxRange").value);
	range = max - min;
	randomNumber = generateRandomNumber(range, min);
});

var evaluationFeedback = document.querySelector('.evaluation-feedback');

function submitGuess(e) {
  e.preventDefault();
  numberGuessed.innerText = guessInput.value;
  evaluateGuess(guessInput.value);
};

button.addEventListener('click', submitGuess);



function evalFunc() {
  document.querySelector('.evaluation-feedback').innerText = evaluateGuess;
};

function evaluateGuess(x) {
if (x == randomNumber) {
  document.querySelector('.evaluation-feedback').innerText = "BOOM!";
} else if (x > randomNumber) {
  document.querySelector('.evaluation-feedback').innerText = "Sorry, that is too high";
} else {
  document.querySelector('.evaluation-feedback').innerText = "Sorry that is too low";
}
};