const product = [
  {
    name: 'basketball',
    price: 2095
  },
  {
    name: 'socks',
    price: 1000
  }
];

function comparePrice(product1, product2) {
  return product1.price < product2.price ? product1.name : product2.name;
}

console.log(comparePrice(product[0], product[1]));