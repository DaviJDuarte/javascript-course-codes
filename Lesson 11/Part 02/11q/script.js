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

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'))