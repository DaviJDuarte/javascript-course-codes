let ageInput = document.getElementById('age');
let button = document.getElementById('button');
let age = 0;
const isHoliday = true;

button.addEventListener('click', function () {
  age = ageInput.value;
  // if((age <= 6 || age >= 65) && isHoliday)
  //   console.log('Discount')
  // else
  //   console.log('No Discount')

  (age <= 6 || age >= 65) && isHoliday ? console.log('Discount') : console.log('No Discount');
})