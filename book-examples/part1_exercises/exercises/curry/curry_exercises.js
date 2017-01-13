require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = _.split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = _.map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = _.filter(_.match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = _.reduce(_keepHighest, -Infinity);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = function() {
  var args = [];

  function curry() {
    if(arguments.length > 0) {
      Array.prototype.slice.call(arguments).forEach(function(e) {
        args.push(e);
      });
    }

    if(args.length >= 3) {
      return Array.prototype.slice.apply(args[2], args.slice(0, 2));
    } else {
      return curry;
    }
  }
  return curry.apply(null, arguments);
};


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
