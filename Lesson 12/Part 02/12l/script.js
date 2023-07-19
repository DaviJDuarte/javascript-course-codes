const array1 = [1, -3, 5];
const array2 = [-2, 3, -5, 7, 10];

const countPositive = nums => {
  let counter = 0;
  nums.forEach((value, index) => {
    value > 0 ? counter++ : null;
  })
  return counter;
}

console.log(countPositive(array1));
console.log(countPositive(array2));