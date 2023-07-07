function convertToCelsius(fahrenheit) {
  celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    return `${convertToFahrenheit(degrees)}F`;
  } else if (unit === 'F') {
    return `${convertToCelsius(degrees)}C`;
  }
  else {
    return 'Invalid Unit';
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));
console.log(convertTemperature(100, 'X'));