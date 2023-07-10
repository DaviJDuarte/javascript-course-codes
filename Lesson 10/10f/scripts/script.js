const buttonElements = document.querySelectorAll('.js-category-button');

buttonElements.forEach(buttonElement => {
  buttonElement.addEventListener('click', function () {
    if (this.classList.contains('is-toggled')) {
      this.classList.remove('is-toggled');
    } else {
      this.classList.add('is-toggled');
    }
  })
});