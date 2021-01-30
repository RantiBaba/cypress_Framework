
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combinedArrays = array1.concat(array2);
// console.log(combinedArrays);

// const sliceByIndex = combinedArrays.slice(1, 3);
// console.log(sliceByIndex);

const obj = [{ name: "James" }];
const array = ["Janice", "Jermaine", "Jolene"];

const objArray = array.concat(obj);
console.log(objArray);

obj[0].name = "Dylan";
console.log(objArray);
