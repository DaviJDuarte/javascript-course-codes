var items = [
    {
        name: 'Basketball',
        price: 20.95,
        quantity: 1,
        shipping: 4.99
    },
    {
        name: 'T-Shirt',
        price: 7.99,
        quantity: 1,
        shipping: 0
    },
    {
        name: 'Toaster',
        price: 18.99,
        quantity: 1,
        shipping: 0
    }
];

var final_total = 0;

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

for (let i = 0; i < items.length; i++) {

    
    document.getElementById('item-' + (i + 1)).innerHTML = items[i].name;
    document.getElementById('price-' + (i + 1)).innerHTML = USDollar.format(items[i].price);
    document.getElementById('quantity-' + (i + 1)).innerHTML = items[i].quantity;
    document.getElementById('item-total-' + (i + 1)).innerHTML = USDollar.format(items[i].price * items[i].quantity);

    if(items[i].shipping == 0){
        document.getElementById('shipping-' + (i + 1)).innerHTML = 'Free';
    }
    else {
        document.getElementById('shipping-' + (i + 1)).innerHTML = USDollar.format(items[i].shipping);
    }

    final_total += (items[i].price * items[i].quantity);
}

document.getElementById('final-total').innerHTML = `Order Total: ${USDollar.format(final_total)}`;