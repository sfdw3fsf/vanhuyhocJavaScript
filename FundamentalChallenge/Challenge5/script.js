'use strict';
const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3

let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
        return 'Dolphins win';
    }
    else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
        return 'Koalas win';
    }
    else {
        console.log('No team wins');
        return 'No team wins'
    }
}

checkWinner(avgDolphins, avgKoalas);
avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
//versus: dau voi