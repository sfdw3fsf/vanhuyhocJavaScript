'use strict';
/*const years = new Array(1991, 1923, 2002, 2032);
console.log(years[years.length - 1])

const friends = ['Linh', 'Bang', 'Phuong'];

console.log(friends);

friends[1] = 'Dat';

console.log(friends);

const firstName = 'Huy';
const huy = [firstName, 22, 'student', friends];
console.log(huy);*/
/*const friends = ['Linh', 'Bang', 'Phuong'];
friends.push('Kit Connor')
console.log(friends);

friends.unshift('Jin');
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Bang'));

console.log(friends.includes('Phuong'));*/



// console.log(huy);

// console.log(huy.firstName);
// console.log(huy['firstName']);

// const interest = prompt('What information are you interested in?(firstName, lastName, friends,age)');

// console.log(interest);

// console.log(huy[interest]);
const huy = {
  firstName: 'Huy',
  lastName: 'Van',
  friends: ['Linh', 'Bang', 'Phuong'],
  job: 'student',
  handsome: true,
  birthYear: 2002,
  huyCalcAge: function () {
    this
    this.age = 2022 - this.birthYear;
  },

  huySummary: function () {
    return `Huy is a ${this.age} years old ${this.job} 
    and Huy is ${(this.handsome === true) ? '' : 'not '}handsome `

  }

}
huy.huyCalcAge();

console.log(huy.huySummary());

console.log(huy.age);

huy.location = 'Quang Ngai'
huy['Height'] = 174
console.log(huy);

console.log(`Huy has ${huy.friends.length} friends and 
his best friend is ${huy.friends[2]}`)