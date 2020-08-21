// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
// Functions and methods have access to variables that exist in the same level scope or in a higher level scope. The `nestedFunction` and `internal` both belong to the scope of `myFunction` and that's why the `nestedFunction` can access the variable `internal`.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param) {
  let counter = 0;
  for (let i = 1; i <= param; i++) {
    counter += i;
  }
  return counter;
}
console.log(summation(4));
