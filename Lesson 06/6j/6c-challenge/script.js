const hour = new Date();
const myName = 'David';

// if (hour.getHours() >= 6 && hour.getHours() <= 12)
//   document.write(`Good morning, ${myName}!`);
// else if (hour.getHours() >= 13 && hour.getHours() <= 17)
//   document.write(`Good afternoon, ${myName}!`);
// else
//   document.write(`Good night, ${myName}!`);

hour.getHours() >= 6 && hour.getHours() <= 12 ?
  document.write(`Good morning, ${myName}!`) : hour.getHours() >= 13 && hour.getHours() <= 17 ? document.write(`Good afternoon, ${myName}!`) : document.write(`Good night, ${myName}!`);