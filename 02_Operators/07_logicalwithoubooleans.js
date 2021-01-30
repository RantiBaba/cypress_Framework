//logical OR compares non booleans and always returns first operand
//where the first operand is not a falsy value (false , undefined, null, NaN, 0, "")
let carTransmission = "";
let defaultTransmission = "automatic";

let currentTransmission = carTransmission || defaultTransmission;
console.log(currentTransmission);
