const items = [
  {
    name: 'Coffee',
    price: 5,
    quantity: 1
  },
  {
    name: 'Bagel',
    price: 3,
    quantity: 2
  },
  {
    name: 'Soup',
    price: 9,
    quantity: 1
  }
];

var cost = 0;

for(let i=0; i<items.length; i++){
  cost += items[i].price * items[i].quantity;
}