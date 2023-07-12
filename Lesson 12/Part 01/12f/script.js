const buttonElement = document.querySelector('.js-button');

let isDisplayingMessage;

buttonElement.addEventListener('click', function () {
  let addedElement = document.querySelector('.js-added');

  addedElement.innerHTML = 'Added';
  clearTimeout(isDisplayingMessage);

  isDisplayingMessage = setTimeout(function () {
    addedElement.innerHTML = '';
  }, 2000)
})