// const removeEgg = foods => foods.filter(value => {
//   if (value === 'egg') {
//     return false;
//   } else {
//     return true;
//   }
// })

const removeEgg = foods => foods.filter(value => value !== 'egg')

removeEgg
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));