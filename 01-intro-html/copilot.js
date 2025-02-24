// Funcion que convierta la temperatura de grados farenheit a grados celsius
// y muestre el resultado en la consola
function farenheitToCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}

// Funcion que consulte la API de la nasa y me devuelva la imagen del dia
// y la muestre en la consola
function getNasaImageOfTheDay() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => console.log(data.url))
    .catch(error => console.error(error));
}