const numbers = [1, 2, 3, 0, "a", "b"];


const filtered = numbers.filter( (number) => {
  return number >= 0;
});
console.log(filtered);


const a = numbers.filter((number) => number >= 0);
console.log(a);
