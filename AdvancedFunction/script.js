'use strict';

const airplaneInfo = {
  airline: 'VIETNAM',
  iataCode: 234434,
  bookings: [],
  book(name, time) {
    console.log(`${name} want to book ${this.airline} airline, seat${this.iataCode}
at ${time}`);
    this.bookings.push(`${name} want to book ${this.airline} airline, seat${this.iataCode}
at ${time}`)
  }
}


const buy = document.querySelector('.buy');
// console.log(buy);
airplaneInfo.passenger = 200;
airplaneInfo.increasePass = function () {
  this.passenger++;
  console.log(this.passenger);

}

buy.addEventListener('click', airplaneInfo.increasePass.bind(airplaneInfo))










// airplaneInfo.book('VanHuy', '12h50')

// const anotherAirplane = {
//   airline: 'THAILAND',
//   iataCode: 23832803,
//   bookings: [],
// }

// const book = airplaneInfo.book

// const bookEW = book.bind(anotherAirplane);
// bookEW('Tazzo', '5h49')

// const bookEWName = book.bind(anotherAirplane, 'Kin');
// bookEWName('5h40');



// book.call(anotherAirplane, 'Kai', '11h50')
// // console.log(anotherAirplane.bookings);
// const arr = ['Joseph', '7h50']
// // book.apply(anotherAirplane, arr)
// book.call(anotherAirplane, ...arr)
// const greet = function (message) {
//   return function (name) {
//     console.log(`${message} ${name}`);
//   }
// }

// const hi = greet('hello');
// hi('Van Huy')
// hi('Luffy')

// greet('hi')('kai');

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }
// const transform = function (str, fn) {
//   console.log(`Original string : ${str}`);
//   console.log(`Transform string : ${fn(str)}`);
//   console.log(`Transform by: ${fn.name}`);
// }
// transform('pham van huy', upperFirstWord);
// const bookings = []
// const order = function (
//   numPass = 2,
//   numAir,
//   price = 50 * numPass
// ) {
//   const booking = {
//     numPass,
//     numAir,
//     price
//   }
//   bookings.push(booking)
// }

// order(undefined, 'PLane1')
// order(5, 'PLane2')
// order('PLane3')
// console.log(bookings);
// const vanhuy = {
//   name: 'vanhuy',
//   passport: 20134421
// }
// const flight = 'VH2002'
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'VH0806',
//     passenger.name = 'Mr ' + passenger.name
// }
// checkIn(flight, vanhuy);
// console.log(vanhuy)
// console.log(flight);



// console.log(checkIn(flight, vanhuy));
