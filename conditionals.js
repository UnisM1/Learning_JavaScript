// == Learning Objective: Learn to use conditional statements (if/else) ==

// == Exercise 1 ==

// To complete the following, you will have to:

// use if, else if and else to write conditionals.
// use the strict equality operator === to compare values.
// Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign

const getNumberSign = (num) => {
    if (num === 0) {
        return 'zero'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'positive'
    }
}

// Note: in all the following examples, we'll use the strict equality operator '===' (instead of '=='), as it can prevent some bugs, and is viewed as one of the best practices in the JavaScript community. In your code, you should ideally use === as well when doing comparisons (unless you have a good reason not to!).

// console.log(getNumberSign(4));
// console.log(getNumberSign(0));
// console.log(getNumberSign(-3));



// == Exercise 2 ==

// A colleague just asked you some help to debug their code.

const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
        return true;
    } else {
        return false;
    }
}
// colleague was missing the strict equality comparison operator on line 35.
// also the colleague left out the keyword 'return' in lines 36 and 38
// leaving the return value is 'undefined'.
// module.exports = isValidLength


// == CHALLENGE ==

// This is a process feedback challenge: please do a screen recording of yourself working on it and submit the file. The relevant Aptem assignment is called Learning a New Language.

// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.

const fizzBuzz = (num) => {
    if (num <= 0) {
        return num;
    } else if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

module.exports = fizzBuzz