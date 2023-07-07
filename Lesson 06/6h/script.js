var computerChoice = '';
const headsButton = document.getElementById('heads');
const tailsButton = document.getElementById('tails');

headsButton.addEventListener('click', function () {
  generateRandom();
})

tailsButton.addEventListener('click', function () {
  generateRandom();
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