'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
])
//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
const average = 90 / gameEvents.size;
console.log(average);
console.log(`An event happened, on average, every ${average} minutes`);
//4
for (const [key, values] of gameEvents) {
  // if (key <= 45) {
  //   console.log(`[FIRST HALF] ${key}: ${values}`);
  // } else {
  //   console.log(`[SECOND HALF] ${key}: ${values}`);
  // }
  key <= 45 ? console.log(`[FIRST HALF] ${key}: ${values}`)
    : console.log(`[SECOND HALF] ${key}: ${values}`);

}