var numberGuessed = document.querySelectorAll('.number-returned');

function submitGuess() {
	for (var i = 0; i < 1; i++) {
		document.querySelectorAll('.number-returned')[i].innerText = '12';
	}
};

var button = document.querySelector('.submit-guess-button');
button.addEventListener('click', submitGuess);