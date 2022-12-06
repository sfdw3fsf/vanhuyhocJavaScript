'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}
console.log(Object.entries(game.scored));
//1
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}
//2
let total = 0;

for (const i of Object.values(game.odds)) {
  total += i;
}
const avg = total / Object.keys(game.odds).length;
console.log(avg);

//3
console.log('key' + 'k');

console.log(Object.keys(game.odds));
for (const i of Object.keys(game.odds)) {
  console.log(`Odd of ${game[i] ? `victory ${game?.[i]}` : 'draw'} : ${game.odds[i]}`);
};

