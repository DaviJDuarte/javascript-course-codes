function addArrays(array1, array2) {
  const addedArray = [];

  for (let i = 0; i < array1.length; i++) {
    addedArray[i] = array1[i] + array2[i];
  }
  return addedArray;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));