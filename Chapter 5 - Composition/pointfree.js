var R = require('ramda');

//Not Pointfree because of the data: word
var snakeCase = word => word.toLowerCase().replace(/\s+/ig, '-');

//Pointfree version
var pointfreeSnakeCase = R.compose(R.replace(/\s+/ig, '-'), R.toLower);

var hello = "Hello World";
console.log('------------Not Pointfree--------------');
console.log("Before: ", hello, "| After: ", snakeCase(hello));

console.log('--------------Pointfree----------------');
console.log("Before: ", hello, "| After: ", pointfreeSnakeCase(hello));

//Not pointfree because of the data: name
var initials = function(name) {
  return name.split(' ').map(R.compose(R.toUpper, R.head)).join('. ');
}

var pointfreeInitials = R.compose(R.join('. '), R.map(R.compose(R.toUpper, R.head)), R.split(' '));

var name = "Johnny Alexander Zabala Sanchez";

console.log('------------Not Pointfree--------------');
console.log('Before: ', name, ' | After: ', initials(name));

console.log('--------------Pointfree----------------');
console.log('Before: ', name, ' | After: ', pointfreeInitials(name));
