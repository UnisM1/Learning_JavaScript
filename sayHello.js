const sayHello = () => {
  return "Hello";
};

module.exports = sayHello;

// Your colleague is trying to call the function sayHello and print its result using console.log — however, it doesn't work as expected: why? Make the fix so it prints the return value of the function, as expected.

// console.log(sayHello); the problem here is that our colleague for forgot to open parenthesis at the end. Without them they have not called the function so it won't work. Here is the debugged version:

console.log(sayHello());

// == Exercise ==
// Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah') displays a personalised message:

// > sayHello('Sarah');
// 'Hello Sarah'
