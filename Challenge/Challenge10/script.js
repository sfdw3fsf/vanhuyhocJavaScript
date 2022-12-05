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
    team1: 5.33,
    x: 3.25,
    team2: 6.2,
  },
}
//1
const players1 = game.players[0];
const players2 = game.players[1];
//2
const [gk, ...fieldPlayers] = [...players1];
console.log(gk);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);
//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//6
const printGoals = function (number) {
  for (let i = 0; i < number; i++) {
    console.log(`${allPlayers[i]} result: ${game.score}`);
  }
}
printGoals(5);
//7
const winning = (((team1 > team2) && 'Team 1 wins') || 'Team 2 wins')
console.log(winning);


