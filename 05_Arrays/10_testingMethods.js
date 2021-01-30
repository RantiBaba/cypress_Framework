const numbers = [1, 0, -1, -3, 2, 3, 4];

const postive = numbers.every((value) => {
  return value >= 0;
});

console.log(postive);

const some = numbers.some((value) => {
  return value >= 0;
});

console.log(some);
