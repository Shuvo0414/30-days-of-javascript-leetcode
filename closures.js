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
