const calculationTexElement = document.querySelector('.js-calculation-text');
let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function calculate(character) {
  calculation += character;
  localStorage.setItem('calculation', calculation);
  displayCalculation();
}

function displayCalculation() {
  calculationTexElement.innerText = calculation;
}