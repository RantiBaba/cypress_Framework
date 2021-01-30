let carDetails = {
  manufacturer: "Jaguar Land Rover",
  transmission: "Automatic",
  suv: "Land Rover",
  Product: "Range Rover",
};

//option1
// for (let key in carDetails)
//   console.log(key);

// //option2
// for (let key in carDetails) console.log(key,
//   carDetails[key]);

// //option3
// for (let carDetail of Object.keys(carDetails))
//   console.log(carDetail);

// //options4
// //using Object built object
// for (let key of Object.keys(carDetails))
//   console.log(key);

//option5
for (let car of Object.entries(carDetails))
  console.log(car);