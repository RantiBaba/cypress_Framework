// let number = 1;
// number = 10;
// console.log(number);

//the triple dots is a Rest operator.
//do not confuse it for a Spread operators in the Object section (copyClone.js)
function adds(...args) {
  let total = 0;
  for (let number of args) total += number;
  return total;
}
const total = adds(5, 5, 2, 3, 4);
console.log(total);
