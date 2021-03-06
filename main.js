var clearButton = document.querySelector(".clear");
var counter = 0;
var endTime;
var guess1Feedback = document.querySelector(".guess1-feedback");
var guess2Feedback = document.querySelector(".guess2-feedback");
var isFirstRound = true;
var minEntry = document.querySelector("#min-range");
var maxEntry = document.querySelector("#max-range");
var startTime;
var submitButton = document.querySelector(".submit-guess-button");
var min = 1;
var max = 100;
var nameOne = document.querySelector(".name1");
var nameTwo = document.querySelector(".name2");
var range = max - min;
var randomNumber = generateRandomNumber(range, min);
var resetButton = document.querySelector(".reset");
var updateButton = document.querySelector(".update-range");
var user1Guess = document.querySelector(".user1-num-returned");
var user2Guess = document.querySelector(".user2-num-returned");
var user1GuessNum = document.querySelector("#user1-guess");
var user2GuessNum = document.querySelector("#user2-guess");
var user1NameField = document.querySelector("#user1-name");
var user2NameField = document.querySelector("#user2-name");

submitButton.addEventListener("click", submitButtonListener);
submitButton.addEventListener("submit", function(e) {
  if (e.keyCode === 13) {
    submitButtonListener(e);
  }
});

updateButton.addEventListener("click", function(e) {
  e.preventDefault();
  min = parseInt(document.querySelector("#min-range").value);
  max = parseInt(document.querySelector("#max-range").value);
  range = max - min;
  randomNumber = generateRandomNumber(range, min);
  replaceMinMax();
  checkInputNotEmpty();
  checkMinMaxValue();
});

clearButton.disabled = true;
resetButton.disabled = true;

resetButton.addEventListener("click", function() {
  minEntry.value = "";
  maxEntry.value = "";
  userGuessNumber.value = "";
  generateRandomNumber(range, min);
  rightSideTextClear();
});

user1GuessNum.addEventListener("keyup", function() {
  if (user1GuessNum.value === "") {
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
});

user2GuessNum.addEventListener("keyup", function() {
  if (user2GuessNum.value === "") {
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
});

function submitButtonListener(e) {
  e.preventDefault();
  checkInputNotEmpty();
  if (isFirstRound) {
    startTime = new Date();
    isFirstRound = false;
  }
  submitGuess();
}

function checkInputNotEmpty() {
  if (minEntry.value === "") {
    document.querySelector(
      ".min-error-message"
    ).innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a min range`;
    minEntry.style.border = "1px solid #DD1972";
  } else {
    minEntry.style.border = "none";
    document.querySelector(".min-error-message").innerHTML = "";
  }
  if (maxEntry.value === "") {
    document.querySelector(
      ".max-error-message"
    ).innerHTML = `<i class="fas fa-exclamation-triangle"></i> Enter a max range`;
    maxEntry.style.border = "1px solid #DD1972";
  } else {
    maxEntry.style.border = "none";
    document.querySelector(".max-error-message").innerHTML = "";
  }
}

function generateRandomNumber(range, min) {
  var updatedRandomNumber = Math.floor(Math.random() * (range + 1) + min);
  console.log(`random number has been updated to ${updatedRandomNumber}`);
  return updatedRandomNumber;
}

function replaceMinMax() {
  document.querySelector(".min-entry").innerText = minEntry.value;
  document.querySelector(".max-entry").innerText = maxEntry.value;
}

function rightSideTextClear() {
  numberGuessed.value = "";
  document.querySelector(".evaluation-feedback").innerText = "";
  document.querySelector(".number-returned").innerText = "";
}

function submitGuess() {
  ++counter;
  user1Guess.innerText = user1GuessNum.value;
  user2Guess.innerText = user2GuessNum.value;
  evaluateGuess1(parseInt(user1GuessNum.value));
  evaluateGuess2(parseInt(user2GuessNum.value));
  updateName1(user1NameField.value);
  updateName2(user2NameField.value);
}

function updateName1(user1NameField) {
  nameOne.innerText = user1NameField;
}

function updateName2(user2NameField) {
  nameTwo.innerText = user2NameField;
}

function checkMinMaxValue() {
  if (minEntry.value > maxEntry.value) {
    document.querySelector(".evaluation-feedback").innerText =
      "Sorry, your min entry is higher than your max entry, try again";
  }
}

function resetMinMax() {
  maxEntry.value = parseInt(maxEntry.value) + 10;
  minEntry.value = parseInt(minEntry.value) - 10;
}

function addWinnerCard(winner) {
  var element = document.createElement("article");
  var challengerSummary = document.querySelector("#challenger-summary");
  element.className = "winner-stats";
  element.innerHTML = `<div> 
        <p class = 'card-players-text'> ${user1NameField.value.toUpperCase()} <span class = 'vs'>VS.</span> ${user2NameField.value.toUpperCase()} </p> 
        <hr> 
      </div> 
      <div> 
        <p class = 'large-winner-text-bold'> ${winner.toUpperCase()} </p> 
        <p class = 'large-winner-text'>WINNER</p> 
        <hr> 
      </div> 
      <div class = 'counter-time-and-delete'> 
        <p class = 'number-of-guesses'><span class = 'seconds'>${counter}</span> GUESSES</p> 
        <p class = 'time-to-win'> <span class = 'seconds'>${realTime(
          startTime,
          endTime
        )}</span> SECONDS</p> 
        <i class="fas fa-times-circle"></i> 
      </div>`;
  challengerSummary.appendChild(element);
}

document.querySelector(".right-column").addEventListener("click", function(e) {
  if (e.target.className === "fas fa-times-circle") {
    e.target.parentNode.parentNode.remove();
  }
});

function realTime(start, end) {
  var time = (end - start) / 1000;
  return time;
}

function evaluateGuess1(user1GuessNum) {
  if (user1GuessNum === "") {
    guess1Feedback.innerText = "please enter a guess";
  } else if (user1GuessNum == randomNumber) {
    guess1Feedback.innerText = "BOOM!";
    resetMinMax();
    endTime = new Date();
    addWinnerCard(user1NameField.value);
  } else if (user1GuessNum > randomNumber && user1GuessNum <= maxEntry.value) {
    guess1Feedback.innerText = "that's too high";
  } else if (user1GuessNum < minEntry.value || user1GuessNum > maxEntry.value) {
    guess1Feedback.innerText = "that's outside of the range, try again.";
    user1Guess.innerText = "???";
  } else if (user1GuessNum < randomNumber && user1GuessNum >= minEntry.value) {
    guess1Feedback.innerText = "that's too low";
  }
}

function evaluateGuess2(user2GuessNum) {
  if (user2GuessNum === "") {
    guess2Feedback.innerText = "please enter a guess";
  } else if (user2GuessNum == randomNumber) {
    guess2Feedback.innerText = "BOOM!";
    resetMinMax();
    endTime = new Date();
    addWinnerCard(user2NameField.value);
  } else if (user2GuessNum > randomNumber && user2GuessNum <= maxEntry.value) {
    guess2Feedback.innerText = "that's too high";
  } else if (user2GuessNum < minEntry.value || user2GuessNum > maxEntry.value) {
    guess2Feedback.innerText = "that's outside of the range, try again";
    user2Guess.innerText = "???";
  } else if (user2GuessNum < randomNumber && user2GuessNum >= minEntry.value) {
    guess2Feedback.innerText = "that's too low";
  }
}
