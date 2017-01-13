const R = require('ramda');

const exclain = s => `${s}!`;

const angry = R.compose(exclain, R.toUpper)

const data = ['frog', 'eyes'];

//wrong
// const wrongLatin = R.compose(R.map, angry, R.reverse);
// console.log(wrongLatin(data));

//right
const rightLatin = R.compose(R.map(angry), R.reverse);
console.log(rightLatin(data));


console.log('---------------Impure Trace---------------');
const trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const dasherize = R.compose(R.join('-'), R.split(' '), R.toLower, R.replace(/\s{2,}/ig, ' '));

console.log(dasherize('The world is a vampire'));
