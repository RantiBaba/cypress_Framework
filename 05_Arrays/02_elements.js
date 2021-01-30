// const course_codes = [101, 102, 104, 105, "b"];

// console.log(course_codes.indexOf("104")); //no element in the array
// console.log(course_codes.indexOf(104)); //returns index of present element

// console.log(course_codes.includes("a")); //element not present in array returns false

// console.log(course_codes.includes("b")); //element present returns true

const menu = [
  { id: 1, name: "Nigerian Jollof" },
  { id: 2, name: "Morrocan Couscous" },
  { id: 3, name: "Turkish Kebabs" },
  { id: 4, name: "Lasagne" },
];

let meal = menu.find(function (menu) {
  return menu.name === "Nigerian Jollof";
});

console.log(meal);

let aMeal = menu.findIndex(function (menu) {
  return menu.name === "Lasagne";
});
console.log(aMeal);
