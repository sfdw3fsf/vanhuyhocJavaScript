'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
const input = document.querySelector('textarea');
console.log(btn);
console.log(input);
// input.classList.add('userInput');
// const retrieve = document.querySelector('.userInput');

btn.addEventListener('click', function () {
  // console.log('ASSS');
  const list = input.value.split('\n');
  console.log(list);
  for (const [i, v] of list.entries()) {
    // console.log(v.trim());
    const [name1, name2] = v.trim().split('_');
    // console.log(name1, name2);
    const newName = [name1, name2[0].toUpperCase(), name2.slice(1)].join('')
    console.log(`${newName.padEnd(20, ' ')}: ${'✅'.repeat(i + 1)}`);

  }
  // const normal = (input.value).toLowerCase();
  // const [name1, name2] = normal.split('_');
  // // console.log(name1);
  // const newName = [name1, name2[0].toUpperCase(), name2.slice(1)].join('');
  // // const n = normal.indexOf('_');
  // // const partName = normal.slice(n + 1);
  // console.log(newName);
  // const newName = normal.replace('_', '');
  // console.log(partName);
})

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
