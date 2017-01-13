//Example 1
console.log('---------------------Exampe 1-----------------------------------');
const add = x => y => x + y;

const increment = add(1);
const addTen = add(10);

console.log("Add 1 to 2: ",increment(2));
console.log("Add 10 to 2: ", addTen(2));

//Example 2: Lodash curry function
console.log('---------------------Exampe 2: Lodash Curry----------------------');
//const curry = require('lodash/curry');
//my own curry implementation
const curry = require('./curry');

const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const filter = curry((f, arr) => arr.filter(f));

const map = curry((f, arr) => arr.map(f));

console.log(replace(/\s+/g, '-', 'hello world'));

const repalce1 = replace(/\s+/g);
const repalce2 = repalce1('-');
console.log(repalce2('hello world'));

/*const hasSpaces = match(/\s+/g);

console.log(hasSpaces('hello world'));

console.log(hasSpaces('spaceless'));

console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));

const findSpaces = filter(hasSpaces);

console.log(findSpaces(['tori_spelling', 'tori amos']));

const noVowels = replace(/[aeiouy]/ig);

const censored = noVowels('*');

console.log(censored('Chocolate Rain'));
*/
