'use strict';
const bill = 100;

const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  }
  else {
    return bill * 0.2;
  }
}

const total = [];
const tips = [];
const bills = [125, 555, 44]
let i = 0;
while (i < bills.length) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + bill);
  i++;
}

console.log(`Total: ${total}`);
console.log('Tip: ' + tips);

