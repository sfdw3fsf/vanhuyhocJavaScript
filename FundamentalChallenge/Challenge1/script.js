const markMass =78;
const markHeight =1.69;

const johnMass =92;
const johnHeight =1.95;

const BMIMark = markMass/markHeight**2;
const BMIJohn = johnMass/johnHeight**2;

console.log(BMIMark,BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);