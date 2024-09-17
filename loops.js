// == Learning Objective: Learn to use loops ==

const fizzBuzz = require("./conditionals");

// JavaScript has the same basic kinds of loops than in other languages, such as while and for:

// For all numbers from 0 to 10
// for (let i = 0 ; i <= 10 ; i++) {
//     console.log(i);
// }

// // A 'while' loop doing the same thing
// let i = 0

// while (i <= 10) {
//     console.log(i);

//     i += 1;
// }

// == Exercise ==

// Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.

// You should get the following output:

// 1 is odd
// 2 is even
// 3 is odd
// (...)

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// == CHALLENGE ==

// This challenge builds on the previous one, where you defined a fizzBuzz function.

// Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop through all numbers from 1 to the given one, call the fizzBuzz function for the current number and print the result.

// You should get the following output:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7

const fizzBuzzUntil = (num) => {
  for (let i = 1; i <= num; i++) {
    if (fizzBuzz(i) === i) {
      console.log(i);
    } else {
      console.log(fizzBuzz(i));
    }
  }
};

module.exports = fizzBuzzUntil;
