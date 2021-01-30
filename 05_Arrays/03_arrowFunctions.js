//ES6 approach of finding elements in array objects
const menu = [
  { id: 1, name: "Nigerian Jollof" },
  { id: 2, name: "Morrocan Couscous" },
  { id: 3, name: "Turkish Kebabs" },
  { id: 4, name: "Lasagne" },
];

let meal = menu.find((menu) => {
  return menu.name === "Nigerian Jollof";
});
console.log(meal);

let anotherMeal = menu.find((menu) => {
  return menu.name === "Lasagne";
});
console.log(anotherMeal);

let someMeal = menu.find((menu) => menu.name === "Lasagne");
console.log(someMeal);
