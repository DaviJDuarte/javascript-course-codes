var computerChoice = '';
var userChoice = '';
const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');
const resultText = document.getElementById('result');

headsButton.addEventListener('click', function () {
  userChoice = 'heads';
  generateRandom();
  compareChoice();
})

tailsButton.addEventListener('click', function () {
  userChoice = 'tails';
  generateRandom();
  compareChoice();
})

function generateRandom() {
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    computerChoice = 'heads';
  }
  else {
    computerChoice = 'tails';
  }
}

function compareChoice() {
  if (userChoice === computerChoice)
    resultText.innerHTML = `You played ${userChoice} and the computer played ${computerChoice}. You guessed it right!`;
  else
    resultText.innerHTML = `You played ${userChoice} and the computer played ${computerChoice}. You guessed it wrong.`;
}