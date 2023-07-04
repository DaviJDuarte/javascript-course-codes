var item = [
    {
        name: 'Coffee',
        price: 5
    },
    {
        name: 'Bagel',
        price: 3
    }
];

var total = item[0].price + item[1].price;

document.write(`1 ${item[0].name} and 1 ${item[1].name}`);
document.write(`<br>Total cost: $${total}`);