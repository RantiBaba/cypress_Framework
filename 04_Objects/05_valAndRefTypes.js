//main value or primitive types include: string, numbers, booleans,
//symbol, new, and undefined
//ReferenceTypes - Objects, Functions, Arrays

// let x = 10;
// let y = x;

// x = 7;

// console.log(x);
// console.log(y);

// let a = { value: 10 };
// let b = a;

// a.value = 15;
// console.log(a);
// console.log(b);

// let number = 10;
// function increment(number) {
//   ++number;
// }
// increment(number);
// console.log(number);

let obj = { value: 20 };
function add(obj) {
  obj.value++;
}
add(obj);
console.log(obj.value);
