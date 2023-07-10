function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 0) {
    document.querySelector('.js-total-cost')
      .innerHTML = 'Error: cost cannot be less than $0';
    document.querySelector('.js-total-cost').classList.add('error-style');
    return;
  } else if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').classList.remove('error-style');
  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}