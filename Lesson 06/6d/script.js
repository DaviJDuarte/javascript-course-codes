let ageInput = document.getElementById('age');
let button = document.getElementById('button');
let age = 0;

button.addEventListener('click', function () {
  age = ageInput.value;
  if (age <= 6 || age >= 65)
    console.log('Discount')
  else
    console.log('No Discount')
})