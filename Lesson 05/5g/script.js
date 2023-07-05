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

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

var cost = 0;

for(let i=0; i<items.length; i++){
  cost += items[i].price * items[i].quantity;
}

var tax = cost * 0.1;
var totalCost = cost + tax;

console.log(`Cost of food: ${USDollar.format(cost)}`);
console.log(`Tax (10%): ${USDollar.format(tax)}`);
console.log(`Total Cost: ${USDollar.format(totalCost)}`);
