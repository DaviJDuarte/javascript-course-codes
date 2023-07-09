let calculation = localStorage.getItem('calculation') || '';

localStorage.getItem('calculation')

function calculate(character) {
  calculation += character;
  localStorage.setItem('calculation', calculation);
  console.log(calculation);
}