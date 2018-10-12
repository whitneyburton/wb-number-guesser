var numberGuessed = document.querySelector('.number-returned');
var submitButton = document.querySelector('.submit-guess-button');
var min = 1;
var max = 100;
var range = max - min;
var randomNumber = generateRandomNumber(range, min);
var userGuessNumber = document.querySelector("#submit-guess-input");
var minEntry = document.querySelector("#min-range");
var maxEntry = document.querySelector("#max-range");
var updateButton = document.querySelector('.update-range');
var evaluationFeedback = document.querySelector('.evaluation-feedback');
var resetButton = document.querySelector('.reset');

userGuessNumber.addEventListener('keyup', function() {
  min = parseInt(document.querySelector("#min-range").value);
  max = parseInt(document.querySelector("#max-range").value);
  console.log(userGuessNumber.value);
  if (userGuessNumber.value === "") { 
  }})

submitButton.addEventListener('click', function() {
  if(checkGuessIsNumber()) {
  document.querySelector('.evaluation-feedback').innerText = 
  "Your entry is not a number.";
  } else {
    submitGuess();
  }
});

updateButton.addEventListener('click', function() {
	min = parseInt(document.querySelector("#min-range").value);
	max = parseInt(document.querySelector("#max-range").value);
	range = max - min;
	randomNumber = generateRandomNumber(range, min);
	replaceMinMax();
  checkInputValue();
});

resetButton.addEventListener('click', function() {
	minEntry.value = "";
	maxEntry.value = "";
	userGuessNumber.value = "";
  generateRandomNumber(range, min);
  rightSideTextClear();
});

// random number max/min parameters 
// Math.floor(Math.random() * (maxEntry - minEntry+1)) + minEntry;

function generateRandomNumber(range, min) {
	var updatedRandomNumber = Math.floor(Math.random() * (range + 1) + min);
	console.log(`random number has been updated to ${updatedRandomNumber}`);
	return updatedRandomNumber;
};

function replaceMinMax() {
	document.querySelector('.min-entry').innerText = minEntry.value;
	document.querySelector('.max-entry').innerText = maxEntry.value;
};

function rightSideTextClear() {
  numberGuessed.value = "";
  // fix code below, SAVE FOR LATER ...submit guess button doesn't get new number
  // after reset
  document.querySelector('.evaluation-feedback').innerText = "";
  document.querySelector('.number-returned').innerText = "";
};

// submit guess button 
function submitGuess(e) {
  e.preventDefault();
  numberGuessed.innerText = userGuessNumber.value;
  evaluateGuess(userGuessNumber.value);
};

// finish this 
function checkMinMaxValue() {
  if(minEntry.value > maxEntry.value) {
    // error message here!
    console.log("min greater than max");
  }
}

// explain to sally  
function checkGuessIsNumber() {
    console.log('def not a number');
    return isNaN(userGuessNumber);
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
// } else (userGuessNumber < ) {
//   document.querySelector('.evaluation-feedback').innerText 
// }
