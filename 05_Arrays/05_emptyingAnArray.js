let numbers = [1, 2, 3, 4, 5];

//option1 - best option , simply truncate the array
numbers.length = 0;
console.log(numbers);

// //option2
numbers = [];
console.log(numbers);

// //option - bad option
while (numbers.length > 0) numbers.pop();

//using splice
numbers.splice(0, numbers.length);
console.log(numbers);
