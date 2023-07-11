function removeEgg(foods) {
  let result = [];
  let eggCounter = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggCounter < 2) {
      eggCounter++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));