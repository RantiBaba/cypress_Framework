const carDetails = {
  carBrand: "Mercedes",
  series: "GLA",
  year: "2019",
  get carInfo() {
    console.log(`${this.carBrand} ${this.series} ${this.year}`);
  },
  set carInfo(value) {
    const parts = value.split(" ");
    this.carBrand = parts[0];
    this.series = parts[1];
    this.year = parts[2];
  },
};
//printing default object
console.log(carDetails.carInfo);

//edit - set new values in object
carDetails.carInfo = "Porsche Macan 2019";
//get updated object
// console.log(carDetails.carInfo);
