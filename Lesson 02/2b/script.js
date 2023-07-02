var items = [
    {
        name: 'Soup',
        price: 10,
        quantity: 1
    },
    {
        name: 'Burger',
        price: 8,
        quantity: 3
    },
    {
        name: 'Ice Cream',
        price: 5,
        quantity: 1
    }
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

document.getElementById('total').innerHTML = `Total: ${USDollar.format(total)}`;

var people = Number(3);
var total_each = total/people;

document.getElementById('number-people').innerHTML = people;
document.getElementById('total-each').innerHTML = USDollar.format(total_each);