// TODO: Sum the numbers from 1 to 10

// Function Expression - we specify NAMED PARAMETERS which are assigned values based on ARGUMENTS that we pass upon INVOCATION
function numberSummer(start, end) {
  console.log('start value is:', start);
  console.log('end value type is:', typeof end);


}

numberSummer();

// `for` allows us to lose 1 global variable which becomes managed by the `for` loop.
// (initializer/declaration; exit condition; iteration;)
// for(let i = 1; i <= 10; i += 1) {
//   sum += i;
// }

// console.log(sum);
