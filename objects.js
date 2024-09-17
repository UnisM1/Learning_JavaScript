// == Learning Objective: Learn to declare and use JavaScript objects. ==

// Let's talk about objects, which are a different kind of data. In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Python code, bike would be an object (instance of the Bike class):

// bike = Bike()
// copy
// However, in JavaScript, "object" usually refers to a type of key-value structure, similar to a Python dictionary. Here's an example of a JavaScript object:

// const person = {
//     name: 'Maxine',
//     age: 32,
//     address: 'London, E1 123'
// };

// both ways can be used to access an object's property:
// console.log(person.name);
// console.log(person['name']);

// // here's another example of declaring objects:

// const bankAccount = {
//   // simple value attributes
//     accountNumber: 376782676,
//     accountSortCode: 999999,

//     // we can attach functions too (so they act like 'methods'):
//     getBalance: () => {
//         return 100;
//     }
// };

// bankAccount.getBalance();

// == Exercise ==

// An object is composed of key-values pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:

const person = {
    name: 'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

// Print the value of the city attribute ('London').
// console.log(person.address.city);
// Print the value of the second hobbies value ('tennis').
// console.log(person.hobbies[1]);

// == Challenge ==
// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names
// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort


const cohort1 = {
    name: 'May2022',
    id: 1234,
    students: ['Emma', 'Yusuf', 'Sarah']
};

const cohortData = (cohort) => {
    return `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`;
};

console.log(cohortData(cohort1));