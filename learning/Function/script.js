'use strict';
//Function declaration
// function calAge1(birthYear){
//     return 2022 - birthYear
// }
// const age1 = calAge1(2002);
// console.log(age1);


// //Function expression
// const calAge = function(birthYear){
//     return 2022- birthYear;
// }
// const age = calAge(2002);
// console.log(age);

//Arrow function
// const age3 = birthYear=>2022-birthYear;;
// console.log(age3(2002));
const calAge = age => 2022- age;
const yearUntilRetirement=(birthYear,firstName)=>{
    const age = calAge(birthYear);
    const yearStill = 65-age;

    if(yearStill > 0){
        console.log(`${firstName} will retire in ${yearStill} years`);
        return yearStill;
    }
    else{
        console.log('Just relaxing')
        return -1;}
}

console.log(yearUntilRetirement(2002,'Huy'))
console.log(yearUntilRetirement(1932,'John'))

/*
Function expression only can use when define first
Function declaration can use before declare
use function expression make code prettier more structured
*/
//internalize: hung thu
//implication: ngu y
//function are actually just values
//dig : dao
//retirement: nghi huu
//omit : bo sot
//drastic: quyet liet