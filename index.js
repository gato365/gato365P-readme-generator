// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');





//** Questions to Include**//
// 1. Title
// 2. Badges - https://github.com/badges/shields
// Example ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// 3. Image of Project
// 4. Overview (Horizontal Line)
//~~~~~4a. Why was this repo created? - What problem does this repo solve
//~~~~~4b. What learning points should be mentioned?
//~~~~~4c. How is the repo important? - How does the repo stand out?
// 5. Installation (Horizontal Line)
// 6. Usage (Horizontal Line)
// 7. Required Knowledge (Horizontal Line)
// 8. Demonstration (Horizontal Line)
// 9. Future Updates & Refactor Tasks
// 10. Code of Conduct

// TODO: Create an array of questions for user input
const questions = [
    // 1.
    {
        type: 'input',
        name: 'repoName',
        message: 'What is name of your repository?',

    } //,
    // // 2.
    // {},
    // // 3.
    // {},
    // // 4.
    // {},
    // // 5.
    // {},
    // // 6.
    // {},
    // // 7.
    // {},
    // // 8.
    // {},
    // // 9.
    // {},
    // // 10.
    // {}
];






// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();




