const nums = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];

function addOne(array) {
  const incrementArray = [];
  for (let i = 0; i < array.length; i++) {
    incrementArray[i] = array[i] + 1;
  }
  return incrementArray
}

console.log(addOne(nums));
console.log(addOne(nums2));