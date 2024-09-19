// == Exercise 2 == (from classes.js)

const User = require('./user')

// To complete this exercise, you will have to:

// declare a new class and its methods.
// use what you've previous learned on working with arrays, like the map method.
// call methods from the User class.
// Implement the UserBase class in a file userBase.js so it behaves exactly like in the example code above.

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

class UserBase {
    constructor(arrUsers) {
        this.arrUsers = arrUsers;
    }

    count() {
        return this.arrUsers.length;
    }

    getNames() {
        return this.arrUsers.map(user => user.getName());
    }

    getIntroductions() {
        return this.arrUsers.map(user => user.getName()).map(name => `Hi, my name is ${name}`);
    }
};

module.exports = {User, UserBase}