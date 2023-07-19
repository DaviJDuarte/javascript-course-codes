const buttonElement = document.querySelector('.js-button');

let isDisplayingMessage;

buttonElement.addEventListener('click', () => {
  let addedElement = document.querySelector('.js-added');

  addedElement.innerHTML = 'Added';
  clearTimeout(isDisplayingMessage);

  isDisplayingMessage = setTimeout(() => {
    addedElement.innerHTML = '';
  }, 2000)
})