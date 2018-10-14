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
var clearButton = document.querySelector('.clear');

clearButton.disabled = true;
resetButton.disabled = true;

userGuessNumber.addEventListener('keyup', function() {
  min = parseInt(document.querySelector("#min-range").value);
  max = parseInt(document.querySelector("#max-range").value);
  console.log(userGuessNumber.value);
  if (userGuessNumber.value === "") { 
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
});

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (checkInputNotEmpty()) {
  } else {
    submitGuess();
  }
});

updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  min = parseInt(document.querySelector("#min-range").value);
  max = parseInt(document.querySelector("#max-range").value);
  range = max - min;
  randomNumber = generateRandomNumber(range, min);
  replaceMinMax();
  checkInputNotEmpty();
  checkMinMaxValue();
});

resetButton.addEventListener('click', function() {
  minEntry.value = "";
  maxEntry.value = "";
  userGuessNumber.value = "";
  generateRandomNumber(range, min);
  rightSideTextClear();
});

function checkInputNotEmpty() {
  if (minEntry.value === "") {
    document.querySelector('.min-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a min range`;
    minEntry.style.border= "1px solid #DD1972";
  } else {
    minEntry.style.border= "none";
    document.querySelector('.min-error-message').innerHTML = "";
  }

  if (maxEntry.value === "") {
    document.querySelector('.max-error-message').innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a max range`;
    maxEntry.style.border= "1px solid #DD1972";
  } else {
    maxEntry.style.border= "none";
    document.querySelector('.max-error-message').innerHTML = "";
  }
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
  document.querySelector('.evaluation-feedback').innerText = "";
  document.querySelector('.number-returned').innerText = "";
};

function submitGuess() {
  numberGuessed.innerText = userGuessNumber.value;
  evaluateGuess(userGuessNumber.value);
};

function checkMinMaxValue() {
  if (minEntry.value > maxEntry.value) {
    document.querySelector('.evaluation-feedback').innerText = 
    "Sorry, your min entry is higher than your max entry, try again";
  }};

function playerWins() {
  maxEntry.value = ((parseInt(maxEntry.value)) +10);
  minEntry.value = ((parseInt(minEntry.value)) -10);
}

function evaluateGuess(userGuessNumber) {
  if (userGuessNumber === "") {
    evaluationFeedback.innerText = "Please enter a guess!";
  } else if (userGuessNumber == randomNumber) {
    evaluationFeedback.innerText = "BOOM, you got it!";
    playerWins();
  } else if (userGuessNumber > randomNumber && userGuessNumber <= maxEntry.value) {
    evaluationFeedback.innerText = "Sorry, that is too high.";
  } else if (userGuessNumber < randomNumber && userGuessNumber >= minEntry.value) {
    evaluationFeedback.innerText = "Sorry that is too low.";
  } else { 
    evaluationFeedback.innerText = "Sorry, that is outside of the range, try again.";
    numberGuessed.innerText = "";
  }};