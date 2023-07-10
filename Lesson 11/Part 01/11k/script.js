function countPositive(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? counter++ : null;
  }
  return counter;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));