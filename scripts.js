// TODO: Sum the numbers from 1 to 10

// Function Expression - we specify NAMED PARAMETERS which are assigned values based on ARGUMENTS that we pass upon INVOCATION
function numberSummer(start, end) {
  let sum = 0;

  for(let i = start; i <= end; i += 1) {
    sum += i;
  }

  // Without an EXPLICIT `return`, a function will return `undefined`
  return sum;
}

// INVOCATION occurs and we pass in ARGUMENTS to satisfy the FUNCTION EXPRESSION'S PARAMETERS.
console.log(numberSummer(1, 10));

// const results = numberSummer(1, 10);
// console.log(results);
