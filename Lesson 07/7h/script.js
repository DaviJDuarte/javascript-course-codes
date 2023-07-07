let cartQuantity = 0;

function updateCartQuantity(numberOfProducts) {
  if (cartQuantity + numberOfProducts > 10) {
    alert('The cart is full');
  } else if (cartQuantity + numberOfProducts < 0) {
    alert('Not enough items in the cart');
  } else {
    cartQuantity += numberOfProducts;
    console.log(`Cart quantity: ${cartQuantity}`);
  }
}