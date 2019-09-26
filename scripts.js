// TODO: Sum the numbers from 1 to 10
// keyword - expression in parentheses - {}
let sum = 0;

// `for` allows us to lose 1 global variable which becomes managed by the `for` loop.
// (initializer/declaration; exit condition; iteration;)
for(let i = 1; i <= 10; i += 1) {
  sum += i;
}

console.log(sum);
