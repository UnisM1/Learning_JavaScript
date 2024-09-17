// == Learning Objective: Learn to declare and use JavaScript objects. ==

// Let's talk about objects, which are a different kind of data. In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Python code, bike would be an object (instance of the Bike class):

// bike = Bike()
// copy
// However, in JavaScript, "object" usually refers to a type of key-value structure, similar to a Python dictionary. Here's an example of a JavaScript object:

const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);