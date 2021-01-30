//mapping an array into html page
const teams = [
  "Arsenal FC",
  "Bournemouth FC",
  "Manchester City",
  "Tottenham FC",
];

//const filter = teams.filter((t) => t.indexOf(t) >= 0);
// const items = filter.map((t) => "<li>" + t + "</li>");
// const list = "<ul>" + items.join(" ") + "</ul>";
//console.log(list);

//mapping an array into an array object
const numbers = [-3, -2, -1, 0, 1, 2, 3, 4];
const filter = numbers.filter((number) => number >= 0);
const items = filter.map((number) => {
  const obj = { key: number };
  return obj;
});
console.log(items);

//chaining the array methods (filter/map) to create an object
const obj = numbers.filter((n) => n >= 0).map((n) => ({ key: n }));
//console.log(obj);
