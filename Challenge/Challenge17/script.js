'use strict';
const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  // const humanAge = dogs.map((dog) => dog <= 2 ? dog * 2 : 16 + dog * 4);
  // const adultDog = humanAge.filter(dog => dog >= 18)
  // const average = adultDog.reduce((acc, age) => acc + age, 0) / adultDog.length
  const average = dogs.map((dog) => dog <= 2 ? dog * 2 : 16 + dog * 4).filter(dog => dog >= 18).reduce((acc, age) => acc + age, 0)
  console.log(average);

}
calcAverageHumanAge(Data2);