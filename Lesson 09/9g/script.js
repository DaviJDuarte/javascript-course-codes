const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('.js-cost-input');
const totalCostElement = document.querySelector('.js-total-cost');

buttonElement.addEventListener('click', calculateTotal);

inputElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
})

function calculateTotal() {

  let cost = Number(inputElement.value) * 100;

  if (cost === 0) {
    totalCostElement.innerText = 'Please insert the cost.';
    return;
  } else if (cost < 4000) {
    cost = cost + 1000;
  }
  totalCostElement.innerText = `$${cost / 100}`;
}