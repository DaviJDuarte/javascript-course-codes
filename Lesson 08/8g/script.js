const textInput = document.getElementById('text');
const button1 = document.getElementsByTagName('button')[0];
const repeatedText = document.getElementById('repeated-text');
const numberOfTimes = document.getElementById('number');

button1.addEventListener('click', function () {
  repeatedText.innerHTML = `<br>${textInput.value}`.repeat(numberOfTimes.value);
})