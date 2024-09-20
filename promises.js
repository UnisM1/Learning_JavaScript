// == Promises ==

// Learning Objectives: Being able to define what a promise is, and what it's used for.
// Understanding the basic syntax of promises, and how to use the .then() and .catch() methods.

// Promises are a feature of JavaScript that we use to handle this asynchronicity problem and regain control over the execution flow of our programme. Promises let you control the order in which some operations will run in your code - for example, if some of your code depends on data coming from an external server, using promises will let you run these operations once you have received the data.

// Promises are objects - you can think of them as containers for future data, a representation of the future completion or failure of an asynchronous operation. As such, they have three different states:

// Fulfilled - the asynchronous operation completed successfully - for instance, the data you requested from an external server has come back with no isses.

// Rejected - the asynchronous operation failed - for instance, you sent an invalid request to a server, and it answered with an error.

// Pending - the Promise has yet to to be either rejected or fulfilled. - this is the lapse between sending a request and getting an answer back from your server.

// As promises are classes, they come with their associated methods. The most important methods to remember in the case of Promises are .then() and .catch(). These two methods will let you start building promises chains and handle errors when they arise.

const promise = new Promise((resolve, reject) => {

    resolve("This Promise will resolve with this success string.");

}).then((resolvedString) => {
    // console.log(resolvedString);
});

// ---------------------------TERMINAL--------------------------
// This Promise will resolve with this success string.

// OR

// const promise = new Promise((resolve, reject) => {

//     reject("This Promise will be rejected with this error string.");

// }).catch((errorString) => {
    // console.log(errorString);
// });

// ---------------------------TERMINAL--------------------------
// This Promise will be rejected with this error string.

// .then() handles situations where the promises was fulfilled (i.e. the asynchronous operation was successful), and .catch() situations where it was rejected.


// == Challenges ==
// EXERCISE 1:

const promiseToGatherFruit = new Promise((resolve, reject) => {

    const fruit = "Pineapple";

    resolve(fruit);

}).then((fruit) => {

    return fruit.length;

}).then((letterCount) => {
    // console.log(letterCount);
})

// Write some code to get the second promise in the chain to return a new promise that resolves with the length of the fruit string instead of simply logging the fruit string. Then, get this third promise to log the fruit string length to the terminal.

// EXERCISE 2:

// const fruitsArray = [];

// const promiseToGatherFruit = new Promise((resolve, reject) => {

//     const fruit = "Pineapple";

//     resolve(fruit);

// }).then((fruit) => {

//     fruitsArray.push(fruit);

// });

// console.log(fruitsArray);

// Predict what the output of the console.log(fruitsArray) will be. Write a couple of sentences to explain your logic.

// my answer: I think that console.log(fruitsArray) will print undefined to the terminal because we are not returning anything the second promise between line 74 and line 78.

// correct answer: console.log(fruitArray) will execute before any of the operations within the promise chain, including fruitsArray.push(fruit) due to the code's asynchronous nature. If we were to summarise the execution order of the code above, it would go:

// Declaration of fruitsArray, set to an empty array.
// Declaration of the promise promiseToGatherFruit - the new Promise code is asynchronous, and will finish executing last, so the programme moves on to the next synchronous operation.
// console.log(fruitsArray); runs, and at this stage, the fruitsArray is still empty.
// The code inside the promise chain runs - the first promise is resolved with the string "Pineapple", and the second promise in the chain pushes it to fruitsArray.


// EXERCISE 3:


const chopApples = () => {
    console.log("step 1 - chop apples and put them in a dish");
}

const mixCrumble = () => {
    console.log("step 2 - mix butter, sugar and flour until crumbly, spread over the apples")
}

const bakeCrumble = () => {
    return new Promise((resolve, reject) => {
        const burnt = false;

        if( burnt ) {
            reject("error - Oh no, burnt crumble!");
        } else {
            resolve("step 3 - Perfect golden crumble!");
        }

    }).then(( bakedCrumble ) => {

        console.log(bakedCrumble);

    }).then(() => {

        enjoyCrumble()

    }).catch(( burntCrumbleErr ) => {

        console.log(burntCrumbleErr);

    });
}

const enjoyCrumble = () => {
    console.log("step 4 - Delicious crumble - even better with custard!")
}

const makeCrumble = () => {
    chopApples();
    mixCrumble();
    bakeCrumble();
    // enjoyCrumble();
}

makeCrumble();

// ---------------------
// CURRENT OUTPUT:
// step 1 - chop apples and put them in a dish
// step 2 - mix butter, sugar and flour until crumbly, spread over the apples
// step 4 - Delicious crumble - even better with custard!
// step 3 - Perfect golden crumble!

// Q1: Why is the output on the console in the wrong order? Why does step 4 currently happen before step 3?

// my answer: step 4 is currently happening before step 3 because step 3 is an asynchronous operation that will start but won't finish until after all the synchronous operations have been executed including step 4 which is synchronous.

// Q2: Fix the code above so that step 3 and step 4 are in the right order.
