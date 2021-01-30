//defining functions by declaration

greeting();

function greeting() {
  console.log("good morning");
}

//definining functions by expression - example
const squaringNumbers = function (number) {
  return number * number;
};
const square = squaringNumbers(3);
console.log(square);

//definining functions by expression - example2
// const greetings = function (number) {
//   console.log("good afternoon");
// };

// console.log(greetings);
