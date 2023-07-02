document.getElementById("temp").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      convert();
    }
  });


function convert() {
    var temperature = document.getElementById('temp').value;

    var result = (temperature - 32) * 5 / 9;

    document.getElementById('result').innerHTML = `Temperature in Celsius: ${result}&degC`;
}

