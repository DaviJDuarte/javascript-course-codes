const buttonElements = document.querySelectorAll('.js-category-button');

buttonElements.forEach(buttonElement => {
  buttonElement.addEventListener('click', function () {
    toggleOffOtherButtons();
    if (this.classList.contains('is-toggled')) {
      this.classList.remove('is-toggled');
    } else {
      this.classList.add('is-toggled');
    }
  })
});

function toggleOffOtherButtons() {
  const otherButton = document.querySelector('.is-toggled');

  if (otherButton) {
    otherButton.classList.remove('is-toggled');
  }
}