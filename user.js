// == Exercise 1 ==

// We would like to implement a class to represent a user account. Here is how we should be able to use this class:

// > const user = new User('Uma');

// > user.getName(); 
// 'Uma'

// > user.getIntroduction();
// 'Hi, my name is Uma'

// To complete this exercise, you will have to:

// Learn how to declare a class and its methods. Having a look at the Classes MDN documentation is a good start.
// Initialise an attribute within the constructor special method
// Implement the User class in a file user.js so it behaves exactly like in the example code above.

// Require the file into the node REPL to verify the class is working.

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`;
    }
}

// == Excercise 2 == 

// Given the following array of User instances (the class from the previous exercise):

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];

// We'd now like to have a class UserBase that behaves like this:

// > const userBase = new UserBase(users);

// > userBase.count();
// 3

// > userBase.getNames();
// [ 'Uma', 'Josh', 'Ollie' ]

// > userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]
// head over to userBase.js to work on this exercise and to read the remaining task info

module.exports = User