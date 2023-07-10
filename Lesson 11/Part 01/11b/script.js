const nums = [1, 20, 22, 24, 5];
const words = [
  'hi',
  'hello',
  'good'
];

function getLastValue(array) {
  return array[array.length - 1];
}

console.log(getLastValue(nums));
console.log(getLastValue(words));  
