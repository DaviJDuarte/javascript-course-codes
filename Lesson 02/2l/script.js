document.getElementById("temp").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      convert();
    }
  });


function convert() {
    var temperature = document.getElementById('temp').value;

    var result = (temperature * 9 / 5) + 32;

    document.getElementById('result').innerHTML = `Temperature in Fahrenheit: ${result}&degF`;
}

