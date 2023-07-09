const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');
const resultText = document.getElementById('result');

headsButton.addEventListener('click', function () {
  playGame('heads');
})

tailsButton.addEventListener('click', function () {
  playGame('tails')
})

function playGame(guess) {
  let computerChoice = '';
  let randomNumber = Math.random();
  randomNumber < 0.5 ? computerChoice = 'heads' : computerChoice = 'tails';

  resultText.innerHTML = `You played ${guess} and the computer played ${computerChoice}, `

  guess === computerChoice ? resultText.innerHTML += 'you guessed it right!' : resultText.innerHTML += 'you guessed it wrong.';
}