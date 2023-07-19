function removeEgg(foods) {
  let eggCounter = 0;
  return foods.filter(value => {
    if (value === 'egg' && eggCounter < 2) {
      eggCounter++;
      return false;
    }
    return true;
  })
}

removeEgg
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));