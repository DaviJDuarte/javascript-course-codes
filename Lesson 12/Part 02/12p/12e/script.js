const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', () => {
  let addedElement = document.querySelector('.js-added');

  addedElement.innerHTML = 'Added';

  setTimeout(() => {
    addedElement.innerHTML = '';
  }, 2000)
})