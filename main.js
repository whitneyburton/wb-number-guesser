var numberGuessed = document.querySelector('.number-returned');
var guessInput = document.querySelector('.submit-guess-input');
var button = document.querySelector('.submit-guess-button');

// trying out random number checker
var y = Math.floor(Math.random() *100 + 1);
console.log(y);
var x = document.getElementById("guessField").value;
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
if (x == y) {
  document.querySelector('.evaluation-feedback').innerText = "BOOM!";
} else if (x > y) {
  document.querySelector('.evaluation-feedback').innerText = "Sorry, that is too high";
} else {
  document.querySelector('.evaluation-feedback').innerText = "Sorry that is too low";
}
};