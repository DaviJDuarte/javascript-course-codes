const textBoxElement = document.getElementById('js-text-input');
const textElement = document.querySelector('.text');

textBoxElement.addEventListener('keyup', function () {
  textElement.innerText = textBoxElement.value;
})