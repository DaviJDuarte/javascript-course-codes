const textElement = document.querySelector('.js-cart-quantity-text');

let cartQuantity = Number(localStorage.getItem('cartQuantity')) || 0;

displayCartQuantity();

function updateCartQuantity(numberOfProducts) {
  if (cartQuantity + numberOfProducts > 10) {
    alert('The cart is full');
    return;
  }
  if (cartQuantity + numberOfProducts < 0) {
    alert('Not enough items in the cart');
    return;
  }
  cartQuantity += numberOfProducts;
  localStorage.setItem('cartQuantity', cartQuantity);
  displayCartQuantity();
}

function displayCartQuantity() {
  textElement.innerText = `Cart quantity: ${cartQuantity}`;
}