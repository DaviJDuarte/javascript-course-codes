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
  randomNumber < 0.5 ? computerChoice = 'heads' : computerChoice = 'tails';
}

function compareChoice() {
  resultText.innerHTML = `You played ${userChoice} and the computer played ${computerChoice}, `

  userChoice === computerChoice ? resultText.innerHTML += 'you guessed it right!' : resultText.innerHTML += 'you guessed it wrong.';
}