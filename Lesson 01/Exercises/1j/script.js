var bank_account = Number(100);
const lunch = Number(20);
const dinner = Number(50);
const job = Number(200);

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

document.write(`<strong>Your Balance: </strong>${USDollar.format(bank_account)}<br>`);

document.write(`<br><span style="color: red;">-${USDollar.format(lunch)}</span> from lunch.<br>`);
bank_account -= lunch;
document.write(`<strong>Your Balance: </strong>${USDollar.format(bank_account)}<br>`);


document.write(`<br><span style="color: red;">-${USDollar.format(dinner)}</span> from dinner.<br>`);
bank_account -= dinner;
document.write(`<strong>Your Balance: </strong>${USDollar.format(bank_account)}<br>`);


document.write(`<br><span style="color: green;">+${USDollar.format(job)}</span> from your job.<br>`);
bank_account += job;
document.write(`<strong>Your Balance: </strong>${USDollar.format(bank_account)}`);

setTimeout( function(){
    document.body.innerHTML = '';
}, 2000)