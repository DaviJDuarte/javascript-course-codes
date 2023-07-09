const headsButtonElement = document.querySelector('.js-heads');
const tailsButtonElement = document.querySelector('.js-tails');
const choiceTextElement = document.querySelector('.js-choice-text');

headsButtonElement.addEventListener('click', function () {
  displayChoice(headsButtonElement.innerText);
});

tailsButtonElement.addEventListener('click', function () {
  displayChoice(tailsButtonElement.innerText);
});

function displayChoice(choice) {
  choiceTextElement.innerText = `You chose: ${choice}`;
};