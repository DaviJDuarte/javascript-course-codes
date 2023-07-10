const nums = [1, 20, 22, 24, 5];
const words = [
  'hi',
  'hello',
  'good'
];

function arraySwap(array) {
  firstValue = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstValue;
  return array;
}

console.log(arraySwap(nums));
console.log(arraySwap(words));