// == Learning Objective: Learn to use functions as values, and as arguments for other functions. ==

// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
  return 123;
};
// This is a function with one parameter, but still no name
// And using briefer syntax that might help when we get to .map and .filter
(n) => 2 * n;
// you can see that it is a function like this
// console.log((n) => 2*n)

// When the file is run, we get [Function (anonymous)] printed to the console. We don't get details about the function, but JavaScript knows what it is.

// If we take that function and assign it to a variable, we get a named function. Replace the code above with this:

const doubleNumber = (n) => 2 * n;
// console.log(doubleNumber)

// We get a bit more detail: [Function: doubleNumber] is printed to the console. That's not enough detail to know what the function does (it might have been badly named). But we know it is a function.

// One last experiment: Let's assign our named function to another variable. Add this to the above code:

const simpleCalculation = doubleNumber;
// console.log(simpleCalculation)

// What do you think will be printed to the console? Check if you are right by running the file again with node functionsAsValues.js

const uppercaseMessage = (message) => {
    return message.toUpperCase();
};

const lowercaseMessage = (message) => {
    return message.toLowerCase();   
};

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
    return transformFunction(message);
};

transform("hello", uppercaseMessage);
transform("HELLO", lowercaseMessage);


// == CHALLENGE ==

// You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. To complete this exercise, you'll have to pass a function as an argument to another function.

// Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
// Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
// Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
// Use the function notify with the two previous functions to:
// send an email to hello@makers.tech.test and get the expected output.
// send a text to +10000000000 and get the expected output.

// My notifyByEmail function
const notifyByEmail = (email) => {
    return `Email sent to ${email}.`;
};

// My notifyByText function
const notifyByText = (phoneNumber) => {
    return `Text sent to ${phoneNumber}.`;
};

// My notify function
const notify = (str, notifyByFunction) => {
    return notifyByFunction(str);
};

module.exports = {
    uppercaseMessage,
    lowercaseMessage,
    transform,
    notifyByEmail,
    notifyByText,
    notify
};

// uppercaseMessage, lowercaseMessage, transform, notifyByEmail, notifyByText, notify
