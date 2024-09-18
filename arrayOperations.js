// == Learning Objective: Learn to filter and map arrays. ==

// You'll now learn about two methods we use on arrays:

// filter to create a new array by applying a predicate function on existing array's elements.
// map to create a new array by applying a specific operation to the existing array's elements.

const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
    if (name.length < 3) {
        return true;
    } else {
        return false;
    }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
    return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);

// == Excercise 1: phone numbers ==

// 1. Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.

const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
    } else {
        return false;
    }
};

// Below is a refactored and more concise version
// const checkLength = (phoneNumber) => phoneNumber.length <= 10 


// 2. Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less. It should make use of the function checkLength written previously.

const filterLongNumbers = (arrPhoneNumbers) => {
    return arrPhoneNumbers.filter(checkLength);
};


// == Exercise - personalised messages ==

// Your friend now would you like to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:

// > const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// To complete this exercise you'll have to:

// create a function that takes a single name and generate the correct message for it.
// use Array's map method to generate the list of personalised messages using this function.

// Questions
// Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.``

// const generateMessages = (arrNames) => {
//     return arrNames.map(name => `Hi ${name}! 50% off our best candies for you today!`);
// };


// == Challenge ==

// Let's go back to our candy promotion texts. Your friend now wants to have a specific discount percentage for each customer. 

// To complete this exercise, you'll have to:

// use Array's map method again.
// access the properties of an object as seen previously.
// Question
// Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
]

const generateMessages = (namesAndDiscounts) => {
    return namesAndDiscounts.map(person => `Hi ${person.name}! ${person.discount} off our best candies for you today!`);
};
module.exports = {checkLength, filterLongNumbers, generateMessages}