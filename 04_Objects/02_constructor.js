

function CarDetails(manufacturer, series, transmission) {
  this.manufacturer = manufacturer;
  this.series = series;
  (this.transmission = transmission),
    (this.printName = function () {
      console.log(this.manufacturer);
    });
}

const car = new CarDetails("Mercedes", "A Class", "Automatic");

console.log(car);