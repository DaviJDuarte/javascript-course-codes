const textInput = document.getElementById('text');
const button1 = document.getElementsByTagName('button')[0];
const convertedText = document.getElementById('lower-case');

button1.addEventListener('click', function () {
  convertedText.innerHTML = textInput.value.toLowerCase();
})