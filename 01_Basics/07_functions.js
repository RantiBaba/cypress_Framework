//declaring a function
function greet() {
  console.log("Good Morning");
}

greet();

//function a with a parameter
function morningGreeting(name) {
  console.log("Good Morning " + name);
}
morningGreeting("James");

//function with multiple parameters
function info(name, age) {
  console.log(name + "," + age);
}
info("James", 30);

//returns a value
function add(number1, number2) {
  let result = number1 + number2;
  return result;
}
let total = add(10, 10);
console.log(total);
