var reverse = (arr) => arr.reduce((an, ac) => [ac].concat(an), []);

var compose = function() {
  return (x) => reverse(Array.prototype.slice.call(arguments)).reduce((an, ac) => ac(an), x);
};

var toUpperCase = (x) => x.toUpperCase();

var exclain = (x) => x + '!';

var shout = compose(exclain, toUpperCase);

console.log(shout("hello world"));

console.log("----------------Last-----------------");

var head = (arr) => arr[0];

var last = compose(head, reverse);

var arr = ['First', 'Second', 'Third'];
console.log(arr);
console.log(last(arr));

console.log("-------------Associativity--------------");

var question = (x) => x + '?';

console.log(compose(question, compose(exclain, toUpperCase))("Hello World"));

console.log(compose(compose(question, exclain), toUpperCase)("Hello World"));

console.log(compose(question, exclain, toUpperCase)("Hello World"));

var lastUpper = compose(toUpperCase, head, reverse);

console.log(lastUpper(arr));

var loudLastUpper = compose(exclain, toUpperCase, head, reverse);

console.log(loudLastUpper(arr));

var loudLastUpper2 = compose(exclain, toUpperCase, last);

console.log(loudLastUpper2(arr));

var angry = compose(exclain, toUpperCase);
var loudLastUpper3 = compose(angry, last);

console.log(loudLastUpper3(arr));
