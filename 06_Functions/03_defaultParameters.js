function getLoanInterestPayment(loanAmount, interestRate = 3.5, term = 5) {
  return ((loanAmount * interestRate) / 100) * term;
}

const interestToPay = getLoanInterestPayment(5000, 2.8, 5);
console.log("Interest Amount for your loan is " + interestToPay);

const interestToPay1 = getLoanInterestPayment(10000);
console.log("Interest Amount for your loan is " + interestToPay1);
