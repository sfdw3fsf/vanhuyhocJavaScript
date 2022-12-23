'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);
//2
const dogSar = dogs.filter(dog => dog.owners.includes('Sarah'))[0];
//can use find instead
console.log(dogSar);
dogSar.recommendedFood < dogSar.curFood ? console.log('It eating too much') : console.log('It eating too little');
//3
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// dogs.forEach(dog => dog.curFood > dog.recommendedFood ? ownersEatTooMuch.push(dog.owners) : ownersEatTooLittle.push(dog.owners));
// console.log(ownersEatTooLittle.flat());
// console.log(ownersEatTooMuch.flat());
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);
//4
const displayOwner = function (own) {
  let str = '';
  own.flat().forEach(owner => own.flat().indexOf(owner) !== (own.flat().length - 1) ? str += `${owner} and ` : str += `${owner}`);
  return str;
}
console.log(displayOwner(ownersEatTooMuch) + "'s dogs eat too much!");
console.log(displayOwner(ownersEatTooLittle) + "'s dogs eat too little!");
//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
//6
console.log(dogs.some(dog => (dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9))
);
//7
const okDogs = dogs.filter(dog => (dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9));
console.log(okDogs);
//8
const orderDogs = dogs.slice().sort((doga, dogb) => doga.recommendedFood - dogb.recommendedFood);
console.log(orderDogs);
