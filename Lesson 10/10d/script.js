const buttonElement = document.querySelector('.js-gaming-button');

buttonElement.addEventListener('click', function () {

  if (this.classList.contains('is-toggled')) {
    this.classList.remove('is-toggled');
  } else {
    this.classList.add('is-toggled');
  }

})
