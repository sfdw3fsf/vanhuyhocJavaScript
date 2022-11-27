'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipAndTotal = [];

const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  }
  else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tipAndTotal.push(bills[i] + calcTip(bills[i]));;
}

console.log(tipAndTotal);


function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;

}

console.log(calcAverage(tipAndTotal));