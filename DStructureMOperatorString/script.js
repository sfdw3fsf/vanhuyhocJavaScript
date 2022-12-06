'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'thus', 'fri', 'sta', 'sun'];

const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  orderFood(starter, main) {
    // console.log(this.starterMenu[1]);
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderFood({ starter, main, time, address }) {
    return `Order ${this.starterMenu[starter]} and
    ${this.mainMenu[main]} will be delivered in ${time}
    at ${address}`
  },
  orderPasta(ingre1, ingre2, ingre3) {
    console.log(`Here is your order: ${ingre1}, ${ingre2},${ingre3}`);
  },
  orderPizza(mainIngre, ...Ingres) {
    console.log(mainIngre, Ingres);
  }
};
//////////////////MAP/////////////////////////////////////////////////////////
const infor = new Map();
infor.set('Name', 'Italy')
console.log(infor);
infor.set('Time', 'summer 1983')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(12, 'staff')
  .set(true, 'open')
  .set(false, 'closed')
console.log(infor);

console.log(infor.get('categories'));


////////////////////////////////////////////////////////////////////////////////


////////////////////SET//////////////////////////////////////////////////////////
// const food = new Set(['Pizza', 'Ice cream', 'Chicken', 'Pizza']);
// console.log(food);
// food.add('Chocolate');
// food.delete('Chicken');
// // food.clear();
// console.log(food.has('Chocolate'));

// console.log(food);
// const job = ['Doctor', 'Teacher', 'Worker', 'Worker'];
// const uniqueJob = [...new Set(job)];
// console.log(uniqueJob);
// console.log(new Set([1, 2, 3, 4, 1]).size);
///////////////////////////////////////////////////////////////////////////////////


///////////////////////REST////////////////////////////////////////////////////
//spread because ... on the right side of =
// const arr = [1, 2, 3, ...[4, 5, 6]]
// //rest because ... on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others);

//rest element must be the last element
// const [Pizza, , Risotto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(others);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const number = function (...num) {
//   console.log(...num);
// }
// number(1, 2, 3, 4, 5)
// restaurant.orderPizza('chicken', 'onion', 'cheese', 'poll')

// restaurant.numGuest = 0;
// // const numGuest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// // console.log(numGuest1);
// const numGuest2 = restaurant.numGuest || 10;
// console.log(numGuest2);
// //Nullish : null + undefine
// const numGuest3 = restaurant.numGuest ?? 10;
// console.log(numGuest3);
/////////////////////////////////////////////////////////////////////////////


///////////////////SPREAD///////////////////////////////////////////////////

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu]
// console.log(newMenu);

// const str = 'VanHuy'
// console.log(...str);

// const ingredients = ['mushroom', 'Tree', 'Potato']

// restaurant.orderPasta(...ingredients)

// const newRestaurant = { founder: 'Vanhuy', ...restaurant, foundedIn: 2002 };
// console.log(newRestaurant);
//////////////////////////////////////////////////////////////////////////////


//////////////////DESTRUCTURING///////////////////////////////////////////////////
//DESTRUCTURING
// const order1 = restaurant.orderFood({
//   starter: 1,
//   main: 0,
//   time: '21h30',
//   address: '47 Truong Dinh'
// })
// console.log(order1);



// const arr = ['hi', 'hey', 'hello']
// const [x, , z] = arr;
// // console.log(x, z);

// let [first, second] = restaurant.categories;

// // console.log(first, second);

// [first, second] = [second, first];
// // console.log(first, second);

// const [starter, main] = restaurant.orderFood(1, 2);
// console.log(starter, main);


// //DESTRUCTURING IN DESTRUCTURING
// const nested = [1, 2, [5, 6]];
// const [i, , j] = nested
// console.log(i, j);
// const [i, , [k, g]] = nested
// console.log(i, k, g);;

// //DEFAULT VALUE
// const [a = 0, b = 0, c = 0, d = 0] = [1, 2];
// console.log(a, b, c, d);
// const { name, categories, openingHours } = restaurant;

// console.log(name, categories, openingHours);
// const { name: resName, categories: tags, openingHours: hours } = restaurant;
// console.log(resName, tags, hours);

// let f = 12;
// let e = 13;
// const o = { f: 27, e: 25 };
// console.log(f, e);
// ({ f, e } = o);
// console.log(f, e);

// const {
//   fri: { open, close },
// } = openingHours


// const { fri } = openingHours;
// console.log(fri);

// const { fri: { open, close } } = openingHours;
// console.log(open, close);
///////////////////////////////////////////////////////////////////////////////////



// console.log(restaurant);
// const properties = Object.keys(restaurant.openingHours)
// // console.log(properties);
// let openStr = `We open in ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `
// }

// console.log(openStr);

// const oc = Object.values(restaurant.openingHours)
// console.log(oc);

// const workingTime = Object.entries(restaurant.openingHours);
// console.log(workingTime);

// for (const [key, { open, close }] of workingTime) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);

// }

// const days = ['mon', 'tue', 'thus', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day];
//   console.log(`Our restarant on ${day} open at ${open?.open ?? 'closed'}'`);
// }
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// const rest = {
//   place: 'Hotel',
//   room: 208,
//   numGuest: 0
// }

// // rest.numGuest = rest.numGuest || 10;
// // rest.numGuest ||= 10;
// rest.numGuest ??= 10;
// // rest.place = rest.place && 'anonymous'
// rest.place &&= 'anonymous';
// console.log(rest);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);
// for (const iterator of menu) console.log(iterator);

// for (const iterator of menu.entries()) {
//   console.log(iterator);

// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);

// }
