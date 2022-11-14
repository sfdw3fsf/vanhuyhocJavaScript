const firstName = 'Huy'
const job ='student'
const birthYear =2002;
const now =2022
const huy = "I'm "+ firstName + ', a ' 
+ (now-birthYear) +' years old '+job
//Javascript auto coercion number to string
//If want to display ' wrap it in ""
console.log(huy);

const huyNew = `I'm ${firstName}, a ${now-birthYear} years old ${job}`
//template literal string
//backticks
//many developers use backticks for all strings
const st =`this is a normal string`

console.log(huyNew);
console.log(st);

//backticks: ``
//cumbersome: vuong viu, tro ngai
//assemble: tap hop
//coercion: ep buoc
//concatenation: noi
//immensely: vo cung
