// let carDetails = {
//   manufacturer: "Audi",
//   series: "A5",
//   transmission: "Automatic",
//   getNameOfCar: function () {
//     console.log("Audi A5");
//   },
// };

//carDetails - CamelCase
//factory functions - a function that returns an object
function carDetails(manufacturer, series, transmission) {
  return {
    manufacturer,
    series,
    transmission,
  };
}

let audi = carDetails("Audi", "A5", "Automatic");
console.log(audi);

let mercedes = carDetails("Mercedes", "E-200", "Manual");
console.log(mercedes);

