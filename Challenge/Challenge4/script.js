const bill =275;
const tip = 300>=bill&&bill>=50 ? 0.15*bill:0.2*bill
const total = bill + tip
// “The bill was 275, the tip was 41.25, and the total value 
//316.25”
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)