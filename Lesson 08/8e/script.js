const product = [
  {
    name: 'basketball',
    price: 2095
  },
  {
    name: 'socks',
    price: 1000
  },
  {
    name: 'basketball',
    price: 2095
  }
];

function isSameProduct(product1, product2) {
  return (product1.name === product2.name) && (product1.price === product2.price) ? true : false;
}

console.log(isSameProduct(product[0], product[1]));
console.log(isSameProduct(product[0], product[2]));