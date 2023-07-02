document.getElementById("temp").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      convert();
    }
  });


function convert() {
    var temperature = document.getElementById('temp').value;

    if (document.getElementById('unit').value == 'celsius'){
      var result = (temperature * 9 / 5) + 32;
      document.getElementById('result').innerHTML = `Temperature in Fahrenhei: ${result}&degF`;
    }
    else if (document.getElementById('unit').value == 'fahrenheit'){
      var result = (temperature - 32) * 5 / 9;
      document.getElementById('result').innerHTML = `Temperature in Celsius: ${result}&degC`;
    }   
}

