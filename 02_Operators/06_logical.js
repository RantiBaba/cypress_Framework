//these operators to make logical decisions

//logical AND (&&) , OR (||) , NOT (!)

//AND returns of true if bot operands are true
let goodCredit = false;
let highIncome = false;

//AND operator
let isElligible = highIncome && goodCredit;
console.log(isElligible);

//OR
let isElligible = highIncome || goodCredit;
console.log(isElligible);

//Not Operators
let rejectLoanApplication = !isElligible;
console.log(rejectLoanApplication);
