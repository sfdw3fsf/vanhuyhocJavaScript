const age = 18
if (age === 18) console.log('18 years old')
/* === is a strict equality operator because
it does not perform type coercion 
*/

console.log(18 == '18')
console.log(18 === '18')
// == is a loose equality operator
// loose: tha long
// avoid using == for clean code, when compare alwawys use === 
const message = prompt('Hi')
if (message == 23) console.log('Nice')
if (message !== 23) console.log('uhmm')
