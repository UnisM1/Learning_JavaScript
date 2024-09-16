// file: hello.js
// == Learning objective: running a .js file in the terminal using node ==
// node is the JS equivalent of Python's 'python'
// 1.To get node first you need to install nvm which is the JS equivalent of
// python's 'pip' or 'pyenv'

// in terminal run: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
// to get the latest version of nvm
// 2. Then run 'nvm install node'
// 3. followed by 'nvm use node'
// 4. And finally run 'source ~/.zshrc' to refresh your zshrc file which configures
// your shell. The refresh is needed for the effect of the previous commands to materialise

// this simple code snippet prints a sentence to the console.
console.log("Hello - I am a file!");

// == Excericse 1 ==

// 1. Write, in a file hello.js, a JavaScript program that logs a greeting message to the console.

const greeting = "Hello";
const my_name = "Unis";
console.log(greeting + ". My name is " + my_name + "!");

// 2. run the program in terminal.

// node hello.js

// == CHALLENGE ==

// Run a JavaScript file that logs the result of 2 + 2 in the console.

const a = 2 + 2;
console.log(a);
