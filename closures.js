// 1. Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {
  return function (...arg) {
    return "Hello world";
  };
};

const f = createHelloWorld();
console.log(f());

// 2. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let createCounter = function (n) {
  return function () {
    return n++;
  };
};

let counter = createCounter(10);

console.log(counter()); //output : 10
console.log(counter()); //output : 11
console.log(counter()); // output : 12

// 3. Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// ** toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// ** notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

const expect = function (val) {
  const throwError = (errorStr) => {
    throw new Error(errorStr);
  };
  return {
    toBe: (val2) => val2 === val || throwError("Not Eequal"),
    notToBe: (val2) => val2 !== val || throwError("Equal"),
  };
};

// const e = expect(5).toBe(5);
// const e2 = expect(5).notToBe(null);

// console.log(e);
// console.log(e2);

// 4. Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

let createCounter2 = function (init) {
  let currentValue = init;
  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter2 = createCounter2(5);
// Call the functions and log the results
console.log(counter2.increment()); // Output: 6
console.log(counter2.reset()); // Output: 5
console.log(counter2.decrement()); // Output: 4
