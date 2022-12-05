'use strict';
const me = {
  name: 'huy',
  age: 27,
  hobby: ['Game', 'Music']
}

// const friend = me;
// friend.age = '31';
// friend.name = 'Kia'
// console.log('Friend: ', friend);
// console.log('Me :', me);

const friend = Object.assign({}, me);
friend.age = 32;
friend.name = 'DD'
friend.hobby.push('Sleep');
console.log(friend);
console.log(me);

