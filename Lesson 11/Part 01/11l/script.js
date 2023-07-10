function minMax(nums) {
  const result = {
    min: 0,
    max: 0
  };

  for (let i = 0; i < nums.length; i++) {
    result.max = result.max < nums[i] ? nums[i] : result.max;
    result.min = result.min > nums[i] ? nums[i] : result.min;
  }
  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));