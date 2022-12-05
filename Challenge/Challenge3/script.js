const scoreDolphins = [97, 112, 81];
const scoreKoalas = [109, 95, 86];

// § Data 1: Dolphins score 96, 108 and 89. 
//Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. 
//Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101.
// Koalas score 109, 95 and 106
function getAverage(score) {
    let totalScore = 0;
    let i = 0;
    while (i < score.length) {
        totalScore += score[i];
        i++;
    }
    return totalScore / score.length
}

const avarageDolphins = getAverage(scoreDolphins);
const avarageKoalas = getAverage(scoreKoalas);

console.log(avarageDolphins);
console.log(avarageKoalas);


if ((avarageDolphins > avarageKoalas) && avarageDolphins >= 100) {
    console.log('Dolphins is the winner')
}
else if ((avarageKoalas > avarageDolphins) && avarageKoalas >= 100) {
    console.log('Koala is the winner');
}
else if ((avarageDolphins === avarageKoalas) && avarageDolphins >= 100 && avarageKoalas >= 100) {
    console.log('Both is the winner');
}
else { console.log('No one is the winner'); }

