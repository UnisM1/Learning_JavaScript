// == Learning Objective: Learn to declare and call JavaScript functions. ==

// 1. This function accepts no arguments
const printMessage1 = () => {
  console.log("Hi there!");
};

// 2. This function accepts one parameter
const printMessage2 = (message) => {
  console.log(message);
};
// 3. So far nothing is printed to the console. A function must be called before it runs:
printMessage2("Hello You!");

// Note: We use the return keyword to return a value from the function. Be careful - in JavaScript, we have to use return, otherwise our function will return undefined.

const getName = () => {
  return "Léo";
};

getName(); // returns 'Léo'

// 4. Here, we forgot to use `return`.
const getName2 = () => {
  "Léo";
};

getName(); // returns undefined

// Note: In JavaScript, you must use parentheses () to execute a function, even if it doesn't take any arguments.

// Have a look at the hello.js file to see how to export functions to then be required in another file or from node REPL.

// == Exercise ==

//Complete in the file: sayHello.js
// Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.

// Require and call that function in node - you should get the following result:
// > sayHello();
// 'Hello'
// undefined

// Your colleague is trying to call the function sayHello and print its result using console.log — however, it doesn't work as expected: why? Make the fix so it prints the return value of the function, as expected.

// console.log(sayHello); lets take this over to sayHello.js file

// == Challenge ==

// Define a function add (in a file add.js) which takes two arguments and return their sum.
// Define a function multiply (in a file multiply.js) which takes two arguments and return their product.
// From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4). You should get the correct result (16).
