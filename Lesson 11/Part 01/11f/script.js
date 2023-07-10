const nums = [];

let i = 0;
while (i <= 10) {
  nums.push(i);
  i += 2;
}
console.log(nums);

nums.splice(0, nums.length);

i = 5;
while (i >= 0) {
  nums.push(i);
  i--;
}
console.log(nums);