
//initialising an empty array
const course_Codes = [101, 102, 103];
console.log(course_Codes);

//adding numbers to the end of the array
course_Codes.push(105, 106);
console.log(course_Codes);

// //add numbers to the begining of the array
course_Codes.unshift(099);
console.log(course_Codes);

// //add in the middle
course_Codes.splice(4, 0, 104);
console.log(course_Codes);
