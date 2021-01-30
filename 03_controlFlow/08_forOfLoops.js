let countries = ["Nigeria", "Iran", "Belgium", "Denmark", "Tanzania"];

for (let index in countries) {
  console.log(index, countries[index]);
}

//ES6 specification
for (let country of countries) {
  console.log(country);
}
