const curry = require('lodash/curry');
const _ = require('lodash');

const map = curry((f, arr) => arr.map(f));

const getChildren = (x) => x.childNodes;

//Currying version

const allTheChildrenCurrying = map(getChildren);

const allTheChildren = (arr) => _.map(arr, getChildren);

const arr = [
{
	childNodes: 'One'
},
{
	childNodes: 'Two'
},
{
	childNodes: 'Three'
}
];

console.log('*****The array data*****');
console.log(arr);
console.log('-------------------Currying version-----------------------------');
console.log(allTheChildrenCurrying(arr));
console.log('-------------------Without Currying version---------------------');
console.log(allTheChildren(arr));