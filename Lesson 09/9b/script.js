const buttonElement = document.querySelector('button');
const buttonElement2 = document.querySelector('.js-9b');

console.log(buttonElement);

buttonElement2.addEventListener('click', function () {
  if (buttonElement2.innerText === '9b') {
    this.innerText = '9b done!';
  } else {
    this.innerText = '9b';
  }
});
