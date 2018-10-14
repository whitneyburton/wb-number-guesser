var user1Guess = document.querySelector('.user1-num-returned');
var user2Guess = document.querySelector('.user2-num-returned')
var submitButton = document.querySelector('.submit-guess-button');
var min = 1;
var max = 100;
var range = max - min;
var randomNumber = generateRandomNumber(range, min);
var user1GuessNum = document.querySelector("#user1-guess");
var user2GuessNum = document.querySelector("#user2-guess");
var minEntry = document.querySelector("#min-range");
var maxEntry = document.querySelector("#max-range");
var updateButton = document.querySelector('.update-range');
var guess1Feedback = document.querySelector('.guess1-feedback');
var guess2Feedback = document.querySelector('.guess2-feedback');
var resetButton = document.querySelector('.reset');
var clearButton = document.querySelector('.clear');
var nameOne = document.querySelector('.name1');
var nameTwo = document.querySelector('.name2');
var user1NameField = document.querySelector('#user1-name');
var user2NameField = document.querySelector('#user2-name');


clearButton.disabled = true;
resetButton.disabled = true;

user1GuessNum.addEventListener('keyup', function() {
  console.log(user1GuessNum.value);
  if (user1GuessNum.value === "") { 
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
});

user2GuessNum.addEventListener('keyup', function() {
  console.log(user2GuessNum.value);
  if (user2GuessNum.value === "") { 
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
  user1Guess.innerText = user1GuessNum.value;
  user2Guess.innerText = user2GuessNum.value;
  evaluateGuess1(user1GuessNum.value);
  evaluateGuess2(user2GuessNum.value);
  updateName1(user1NameField.value);
  updateName2(user2NameField.value);
};

function updateName1(user1NameField) {
  console.log(nameOne);
  user1NameField = nameOne.innerText;
}

function updateName2(user2NameField) {
  user2NameField = nameTwo.innerText;
}

function checkMinMaxValue() {
  if (minEntry.value > maxEntry.value) {
    document.querySelector('.evaluation-feedback').innerText = 
    "Sorry, your min entry is higher than your max entry, try again";
  }};

function playerWins() {
  maxEntry.value = ((parseInt(maxEntry.value)) +10);
  minEntry.value = ((parseInt(minEntry.value)) -10);
}

function evaluateGuess1(user1GuessNum) {
  if (user1GuessNum === "") {
    guess1Feedback.innerText = "Please enter a guess!";
  } else if (user1GuessNum == randomNumber) {
    guess1Feedback.innerText = "BOOM, you got it!";
    playerWins();
  } else if (user1GuessNum > randomNumber && user1GuessNum <= maxEntry.value) {
    guess1Feedback.innerText = "Sorry, that is too high.";
  } else if (user1GuessNum < randomNumber && user1GuessNum >= minEntry.value) {
    guess1Feedback.innerText = "Sorry that is too low.";
  } else { 
    guess1Feedback.innerText = "Sorry, that is outside of the range, try again.";
    user1Guess.innerText = "";
  }};

  function evaluateGuess2(user2GuessNum) {
  if (user2GuessNum === "") {
    guess2Feedback.innerText = "Please enter a guess!";
  } else if (user2GuessNum == randomNumber) {
    guess2Feedback.innerText = "BOOM, you got it!";
    playerWins();
  } else if (user2GuessNum > randomNumber && user2GuessNum <= maxEntry.value) {
    guess2Feedback.innerText = "Sorry, that is too high.";
  } else if (user2GuessNum < randomNumber && user2GuessNum >= minEntry.value) {
    guess2Feedback.innerText = "Sorry that is too low.";
  } else { 
    guess2Feedback.innerText = "Sorry, that is outside of the range, try again.";
    user2Guess.innerText = "";
  }};