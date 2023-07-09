const inputElement = document.getElementById('js-text-box');
const buttonElement = document.querySelector('button');
const textElement = document.querySelector('.js-text');

buttonElement.addEventListener('click', function () {
  const textValue = inputElement.value;
  textElement.innerText = `Your name is: ${textValue}`;
});