
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('huy'));
console.log(Boolean(21));

// 5 falsy value: 0, '', undefined, null, NaN
// the rest is truthy value

const money = 0;
if(money){
    console.log('give it to van huy');
} else {console.log('you need to make money');}