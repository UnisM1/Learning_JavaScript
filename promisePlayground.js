const promiseToCountSheep = new Promise((resolve, reject) => {

    const fulfilled = true;
    const sheep = ["Bramble", "Daffodil", "Buttercup"];

    if (fulfilled) {
        resolve(sheep);
    } else {
        reject("Did not find any sheep!");
    }

}).then((sheepData) => {

    return sheepData.length;

}).then((sheepCount) => {

    console.log(sheepCount);

}).catch((errorStr) => {

    console.log(errorStr);

})

// Q1: Will all the .then() and .catch() blocks run one after the other, or will something else happen? Why?

// my answer: since fulfilled evaluates to true (determined by line 3) then path taken will be the resolve path and the method that takes care of this is the .then method. Consequently the .catch method will not run.

// Q2: What does the .then() method return exactly?

// my answer: the first .then() method takes result of 'resolve(sheep), calls .length on it and returns the result. This result is then passed down as an argument through another .then() method that is in the chain which takes the result prints it to the console by calling console.log() on the result returned by the previous .then() method above it.

// Q3: How would you get the .catch() block to run? Try to get it to execute in your playground file.

// my answer: I would it get it to run by modifying line 3 and settting fulfilled to false. This would then result in the code executing the 'else' statement containig the reject callback function. The method used to deal with result of reject() is the .catch() method which will lead the program to bypass the entire .then() chain.

// Q4: Change the second promise in the chain to return the first sheep in the array alongside a fresh promise. Then, amend the next promise in the chain so that the names of the values available to you there reflect more adequately the data at hand.

// modified lines 14, 16 and 18 to complete this question. Succesful as 'Bramble' is printed to the console when file is ran. so instead of:

// }).then((sheepData) => {

//     return sheepData.length;

// }).then((sheepCount) => {

//     console.log(sheepCount);

// it now becomes: 

// 
// }).then((sheepData) => {

//     return sheepData[0];

// }).then((firstSheep) => {

//     console.log(firstSheep);