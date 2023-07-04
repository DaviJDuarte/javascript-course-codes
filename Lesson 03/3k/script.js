var items = [
    {
        name: 'Basketball',
        price: 20.95,
        quantity: 2,
        shipping: 4.99
    },
    {
        name: 'T-Shirt',
        price: 7.99,
        quantity: 2,
        shipping: 4.99
    },
];

var shipping_total = 0;
var items_total = 0;

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

    items_total += (items[i].price * items[i].quantity);
    shipping_total += items[i].shipping;
}

untaxed_total = items_total + shipping_total;
var tax = untaxed_total * 0.1;
final_total = untaxed_total + tax;

document.getElementById('number-items').innerHTML = items.length;
document.getElementById('items-total').innerHTML = USDollar.format(items_total);
document.getElementById('shipping-total').innerHTML = USDollar.format(shipping_total);
document.getElementById('untaxed-total').innerHTML = USDollar.format(untaxed_total);
document.getElementById('tax').innerHTML = USDollar.format(tax);

document.getElementById('final-total').innerHTML = USDollar.format(final_total);