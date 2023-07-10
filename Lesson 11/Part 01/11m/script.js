function minMax(nums) {
  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    if (result.min === null || result.min > nums[i]) {
      result.min = nums[i];
    }
    if (result.max === null || result.max < nums[i]) {
      result.max = nums[i];
    }
  }
  return result;
}

console.log(minMax([]));
console.log(minMax([3]));
console.log(minMax([-2, 3, -5, 7, 10]));