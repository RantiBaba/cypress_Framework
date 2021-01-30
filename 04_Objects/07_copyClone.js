const car = {
  manufacturer: "Jaguar Land Rover",
  transmission: "Automatic",
  suv: "Land Rover",
  Product: "Range Rover",
};

//option1 - using for loop and assign
const myCar = {};
for (let key in car)
  myCar[key] = car[key];
console.log(myCar);

//option 2 - using object assign
const aCar = Object.assign({}, car);
console.log(aCar);

//option 3 - using ES6 spread method
const myCar = { ...car };
console.log(myCar);