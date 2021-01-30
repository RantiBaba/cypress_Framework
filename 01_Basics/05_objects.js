//objects are reference type
//they store collection/s of information

let suv = {
  manufacturer: "Jaguar Land Rover",
  marques: "Land Rover",
  product: "Ranges Rover",
  model: "Supercharged SV Autobiography",
  powerTrain: "5.0 L V8 petrol engine",
  year: "2016",
};

//using a DOT notation to access values in our object
console.log(suv.model);

//using a square bracket notation
console.log(suv["model"]);
