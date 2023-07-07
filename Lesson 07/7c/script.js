let inputName = document.getElementById('userName');
const confirmButon = document.getElementById('confirm');
let greetingText = document.getElementById('greeting')

confirmButon.addEventListener('click', function () {
  greet(inputName.value);
})

function greet(name) {
  if (name) {
    greetingText.innerHTML = `Hello, ${name}`;
  }
  else {
    greetingText.innerHTML = 'Hi there!';
  }
}