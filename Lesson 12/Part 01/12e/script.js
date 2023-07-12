const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', function () {
  let addedElement = document.querySelector('.js-added');

  addedElement.innerHTML = 'Added';

  setTimeout(function () {
    addedElement.innerHTML = '';
  }, 2000)
})