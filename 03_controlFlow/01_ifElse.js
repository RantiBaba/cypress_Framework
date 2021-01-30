// // let condition = true;
// // let anotherCondition = true;

// // if (condition){
// //     //do something
// // }
// // else if (anotherCondition){
// //     //do something
// // }

//if statement scenario 1
let temp = 26;

if (temp > 25) {
  console.log("Go for a swim");
} else if (temp > 15) {
  console.log("Go for a walk");
} else if (temp > 10) {
  console.log("Go for a run");
} else if (temp > 5) {
  console.log("Go to gym");
} else if (temp > 0) {
  console.log("watch tv");
}

//If and Else logic for greeting
let hour = 16;

if (hour >= 21 && hour <= 24) {
  console.log("Good Night");
} else if (hour >= 18 && hour < 21) {
  console.log("Good Evening");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else if (hour >= 0 && hour < 12) {
  console.log("Good Morning");
}

//to halves of the day greeting using ternary operator
hour = 7;
let greeting = hour >= 12 && hour < 24 ? "Good Night" : "Good Day";
console.log(greeting);

//to half greeting with if else statement
if (hour >= 12 && hour < 24) {
  console.log("Good Night");
} else {
  console.log("Good Day");
}
