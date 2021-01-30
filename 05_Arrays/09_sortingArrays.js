const numbers = [0, 9, 1, 3, 2, 4, 6, 8, 7, 5];

// //sort an array in ascending order
numbers.sort();
console.log(numbers);

// //reverse order array
numbers.reverse();
console.log(numbers);

//sorting array objects
const restaurantMenu = [
  { id: 1, name: "Pasta" },
  { id: 2, name: "Burger" },
  { id: 3, name: "Porridge" },
  { id: 4, name: "Eggs" },
  { id: 5, name: "fish" },
  { id: 6, name: "Toast" },
];

restaurantMenu.sort(function (a, b) {
  let upperCaseA = a.name.toUpperCase();
  let upperCaseB = b.name.toUpperCase();

  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA > upperCaseB) return 1;
  return 0;
});
console.log(restaurantMenu);
