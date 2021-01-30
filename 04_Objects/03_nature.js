//javascripts objects are dynamic
const carDetails = {
  manufacturer: "Audi",
  series: "A5",
  transmission: "Automatic",
  getNameOfCar: function () {
    console.log("Audi A5");
  },
};
console.log(carDetails);

//deleting from object
delete carDetails.manufacturer;
console.log(carDetails);

//adding to object
carDetails.colour = "Blue";
console.log(carDetails);
