function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }

  return index;
}

function unique(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (findIndex(result, array[i]) === -1) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));