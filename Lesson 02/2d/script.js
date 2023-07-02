var items = [
    {
        name: 'Toaster',
        price: 18.50,
        quantity: 1
    },
    {
        name: 'Shirt',
        price: 7.50,
        quantity: 2
    },
];

var total = 0;

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

for (let i = 0; i < items.length; i++) {
    document.getElementById('item-' + (i + 1)).innerHTML = items[i].name;
    document.getElementById('price-' + (i + 1)).innerHTML = USDollar.format(items[i].price);
    document.getElementById('quantity-' + (i + 1)).innerHTML = items[i].quantity;
    document.getElementById('item-total-' + (i + 1)).innerHTML = USDollar.format(items[i].price * items[i].quantity);

    total += items[i].price * items[i].quantity;
}

var tax = total * 0.1;
var taxed_total = total + tax;

document.getElementById('total').innerHTML = USDollar.format(total);
document.getElementById('tax').innerHTML = USDollar.format(tax);

document.getElementById('taxed-total').innerHTML = `Total: ${USDollar.format(taxed_total)}`;

var customer = prompt('Digite o seu nome: ');
document.getElementById('customer').innerHTML = customer;