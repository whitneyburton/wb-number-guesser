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
// error message here

submitButton.addEventListener('click', function() {
  if(checkGuessIsNumber()) {
    document.querySelector('.nan-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Not a number`;
  } else if(checkInputNotEmpty()) {
  }  else {
      submitGuess();
  }
});

updateButton.addEventListener('click', function() {
	min = parseInt(document.querySelector("#min-range").value);
	max = parseInt(document.querySelector("#max-range").value);
	range = max - min;
	randomNumber = generateRandomNumber(range, min);
	replaceMinMax();
  checkInputNotEmpty();
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

function checkInputNotEmpty() {
  if (minEntry.value === "" && maxEntry === "") {
    document.querySelector('.min-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a min range`;
    document.querySelector('.max-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a max range`;
  }
  else if (minEntry.value === "") {
    document.querySelector('.min-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a min range`;
    console.log("there's no min!")
  } else if (maxEntry.value === "") {
    console.log("there's no max!")
    // console.log("error message");
    document.querySelector('.max-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a max range`;
  };
};

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
  // e.preventDefault();
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

// explain to sally, change input type to number if time  
function checkGuessIsNumber() {
    console.log('def not a number');
    // input fields are always strings until you parseInt
    var inputNum = parseInt(userGuessNumber.value);
    console.log(isNaN(inputNum));
    return isNaN(inputNum);
};


function evaluateGuess(userGuessNumber) {
if (userGuessNumber == randomNumber) {
  document.querySelector('.evaluation-feedback').innerText = 
  "BOOM, you got it!";
} else if (userGuessNumber > randomNumber && userGuessNumber < maxEntry.value) {
  document.querySelector('.evaluation-feedback').innerText = 
  "Sorry, that is too high";
} else if (userGuessNumber < randomNumber && userGuessNumber > minEntry.value) {
  document.querySelector('.evaluation-feedback').innerText = 
  "Sorry that is too low";
} else { 
  document.querySelector('.evaluation-feedback').innerText = "Sorry, that is outside of the range, try again";
}
};
// } else (userGuessNumber < ) {
//   document.querySelector('.evaluation-feedback').innerText 
// }
