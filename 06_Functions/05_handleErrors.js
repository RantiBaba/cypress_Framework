// try{
//     //some code
//     //does something
// }
// catch{
//     //block of code here handles the error
//     //or shows you the error (default javascript error)
// }
// throw{
//     // return error, implemented by yourself / default
// }
// finally{
//     //run whatever is here all the time
// }

const carDetails = {
  carBrand: "Mercedes",
  series: "GLA",
  year: "2019",
  get carInfo() {
    console.log(`${this.carBrand} ${this.series} ${this.year}`);
  },
  set carInfo(value) {
    const e = new Error();
    if (value !== String) console.log("value is not a string");
    if (value === " ") console.log("empty string, enter correct information");
    const parts = value.split(" ");
    this.carBrand = parts[0];
    this.series = parts[1];
    this.year = parts[2];
  },
};

try {
  carDetails.carInfo = 1;
  console.log(carDetails);
} catch (e) {
  alert(e);
}
