for (let hour = 1; hour <= 24; hour++) {
  document.write(hour + ':00 - ');
  if (hour >= 6 && hour <= 12)
    document.write('Good morning!');
  else if (hour >= 13 && hour <= 17)
    document.write('Good afternoon!');
  else
    document.write('Good night!');
  document.write('<br>');
}  