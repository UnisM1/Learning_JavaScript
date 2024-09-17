// == Learning Objective: Learn to use arrays. ==

// Assign an array to the constant numbers
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // adds one element and return a new array

// We can access elements with []
// console.log(numbers[0]); // 1

// console.log(numbers); // [1, 2, 3, 4]

// console.log(newNumbers) // [1, 2, 3, 4, 5]

// console.log(numbers.length) // 4

// console.log(newNumbers.length) // 5

// // Loop through the array and execute code for each element
numbers.forEach((number) => {
  //     console.log(number);
});

// == Exercise 1 ==

// Create an array of a few names of people you know and:

// Print the array's length.
// Print the second name of the array.
// Create a new array by adding a new name to the existing array.

const people = ["Adele", "Sade", "Mariah"];

console.log(people.length);
console.log(people[1]);
const newPeople = people.concat("Toni B");
console.log(newPeople);

// == Exercise 1 ==

// Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping through the array.

// You can use the method forEach to iterate over each element.

const upToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
upToTen.forEach((num) => {
    total += num;
    return total;
});

console.log(total);

// == Challenge ==

// You are helping your friend, who owns a candies business, with their website. Every order placed on the website gets assigned an order ID, such as 1274.

// Your friend would like to create batches of five order IDs. They ask you if you could give a hand and write a small program to do this.

// To complete this exercise you will have to find out:

// how to add elements to an array with the .concat method
// how to get the length of an array
// Questions
// 1. Declare a function addToBatch that takes two arguments, an array and a number, and returns a new array by adding the number to the array.
// 2. Now, make sure this function does not add the number if the array's length is already 5 or greater — it should just return the array untouched in that case.

const addToBatch = (arr, num) => {
    newArr = arr.concat(num);
    if (newArr.length < 5) {
        return newArr;
    } else {
        return arr;
    }
};

module.exports = addToBatch