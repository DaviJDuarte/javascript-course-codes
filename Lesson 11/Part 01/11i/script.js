const nums = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];

function addNum(array, num) {
  const incrementArray = [];
  for (let i = 0; i < array.length; i++) {
    incrementArray[i] = array[i] + num;
  }
  return incrementArray
}

console.log(addNum(nums, 2));
console.log(addNum(nums, 3));
console.log(addNum(nums2, 2));