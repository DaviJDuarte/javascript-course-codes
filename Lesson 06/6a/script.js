let hour = new Date();

if (hour.getHours() >= 6 && hour.getHours() <= 12)
  document.write('Good morning!');
else if (hour.getHours() >= 13 && hour.getHours() <= 17)
  document.write('Good afternoon!');
else
  document.write('Good night!');