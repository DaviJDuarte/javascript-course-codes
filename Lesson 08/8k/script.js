const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');
const resetScoreButton = document.getElementById('reset-score');
const resultText = document.getElementById('result');
const scoreText = document.getElementById('score');

headsButton.addEventListener('click', function () {
  playGame('heads');
})

tailsButton.addEventListener('click', function () {
  playGame('tails')
})

resetScoreButton.addEventListener('click', function () {
  localStorage.removeItem('score');
  score.wins = 0;
  score.losses = 0;
  updateScore();
})

window.onload = displayScore;

function displayScore() {
  scoreText.innerText = `Wins: ${score.wins}, Losses: ${score.losses}`;
};

function updateScore() {
  localStorage.setItem('score', JSON.stringify(score));
  displayScore();
}

let score = JSON.parse(localStorage.getItem('score')) || {
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
  updateScore();
};