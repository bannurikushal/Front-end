var a = 32;
console.log(a);
var a = 7;
console.log(a);
function x() {
  //Var is a function scope
  var b = 10;
  console.log(b); // b can print when we call a function scoped.
}
x();
if (true) {
  let age = 21; //"let" is a block scoped .
  console.log(age);
}
