const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');
const resultText = document.getElementById('result');

headsButton.addEventListener('click', function () {
  playGame('heads');
})

tailsButton.addEventListener('click', function () {
  playGame('tails')
})

let score = {
  wins: 0,
  losses: 0
};

function playGame(guess) {
  let computerChoice = '';
  let randomNumber = Math.random();
  randomNumber < 0.5 ? computerChoice = 'heads' : computerChoice = 'tails';

  resultText.innerHTML = `You played ${guess} and the computer played ${computerChoice}, `

  if (guess === computerChoice) {
    resultText.innerHTML += 'you guessed it right!'
    score.wins++;
  } else {
    resultText.innerHTML += 'you guessed it wrong.';
    score.losses++;
  }
  console.log(score);
}