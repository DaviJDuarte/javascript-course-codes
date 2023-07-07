let inputName = document.getElementById('userName');
const confirmButon = document.getElementById('confirm');
let greetingText = document.getElementById('greeting')

confirmButon.addEventListener('click', function () {
  greet(inputName.value);
})

function greet(name) {
  greetingText.innerHTML = `Hello, ${name}`;
}