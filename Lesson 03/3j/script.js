var item = [
    {
        name: 'Coffee',
        price: 599
    },
    {
        name: 'Bagel',
        price: 295
    }
];

var total = (item[0].price + item[1].price) / 100;

alert(`1 ${item[0].name} and 1 ${item[1].name}`);
alert(`Total cost: $${total}
Thank you, come again!`);