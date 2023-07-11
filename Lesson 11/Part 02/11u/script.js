const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods) {
  const reversedFood = foods.slice().reverse();
  let result = [];
  let eggCounter = 0;

  for (let i = 0; i < reversedFood.length; i++) {
    if (reversedFood[i] === 'egg' && eggCounter < 2) {
      eggCounter++;
      continue;
    }
    result.push(reversedFood[i]);
  }
  return result.reverse();
}

console.log(removeEgg(foods));
console.log(foods);