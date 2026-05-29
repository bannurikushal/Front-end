// let a = 10;
// let b = 20;
// console.log(a + b);
// function add(a, b) {
//   console.log(a + b);
// }
// add(10, 20);
// function even(num) {
//   console.log(num % 2 === 0 ? "Even" : "Odd");
// }
// even(10);
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     console.log(n + "number is factorial n");
//   }
//   factorial(4);
// }
function prime(n, i) {
  if (n % i === 0) {
    console.log(n + "number is prime");
  }
  prime(2, 2);
}
