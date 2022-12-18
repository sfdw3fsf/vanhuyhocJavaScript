'use strict';

const juliaData = [9, 16, 6, 8, 3];
const kateData = [10, 5, 6, 1, 4];
const checkDogs = function (julia, kate) {
  const juliaDataNew = [...julia];
  juliaDataNew.splice(3, 4);
  juliaDataNew.splice(0, 1);
  const display = function (dog, i) {
    const type = dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy🐶'
    console.log(`Dog number ${i + 1} is ${type}`);
  }
  const dogs = juliaDataNew.concat(kate)
  dogs.forEach(display);
}

checkDogs(juliaData, kateData);

