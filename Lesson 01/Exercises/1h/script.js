const tshirt = Number(10);
const socks = Number(8)
const dinner_plates = Number(20)

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

document.write('<h3>Your Order:</h3>');
document.write(`T-shirt: ${USDollar.format(tshirt)}`);
document.write(`<br>Socks: ${USDollar.format(socks)}`);
document.write(`<br>Dinner Plates: ${USDollar.format(dinner_plates)}`);

document.write(`<br><strong>Your total: </strong>${USDollar.format(tshirt+socks+dinner_plates)}`)