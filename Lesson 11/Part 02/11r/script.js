function removeEgg(foods) {
  let result = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));