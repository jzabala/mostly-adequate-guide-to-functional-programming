'use strict';

function curry(f) {
  let count_arg = 0;
  let obj_arg=[];

  function recursive() {
    if(arguments.length >= f.length) {
      return f.apply(null, arguments);
    } else {
      let args = Array.prototype.slice.call(arguments);
       args.forEach(function(arg){
         obj_arg[count_arg++] = arg
       });
       if(obj_arg.length == f.length){
        return f.apply(null,obj_arg);
      } else {
        return recursive;
      }
    }
  }

  return recursive;

}
/*=> (args) => {
  console.log(args);
  if(f.length >= arguments.length) {
    return f.apply(null, arguments);
  }
}*/
module.exports = curry;
