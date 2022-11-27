// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =  require('./utils/generateMarkdown');



// Gets License Information from a JSON
const licensesData = require('./licenses-json');
var fullLicences = licensesData.map(function(x){
    return x[Object.keys(x)[0]];
});





//** Questions Outline to Include**//
// 0. Conditional Statements: 
// 1. Title
// 2. Badges 
// 3. Image of Project
// 4. Overview (Horizontal Line)
//~~~~~4a. Why was this repo created? - What problem does this repo solve?
//~~~~~4b. What learning points should be mentioned?
//~~~~~4c. How is the repo important? - How does the repo stand out?
// 5. Installation (Horizontal Line)
// 6. Usage (Horizontal Line)
// 7. Required Knowledge (Horizontal Line)
// 8. Demonstration (Horizontal Line)
// 9. Future Updates & Refactor Tasks
// 10. Code of Conduct

// An array of questions for user input

const questions = [
    // 1.
    {
        type: 'input',
        name: 'repoName',
        message: '1. What is title of your repository?',

    },
    // 2.
    {
        type: 'list',
        name: 'isLicense',
        message: '2. Is there a License used for this repo?',
        choices: ['Yes', 'No']
    },
    // 2a.
    {
        type: 'list',
        name: 'license', 
        message: '2a. What is the name of the badge?',
        when: (answers) => answers.isLicense === 'Yes',
        choices: fullLicences
    },
    // 3a.
    {
        type: 'input',
        name: 'paragraph1',
        message: '3a. Why was this repo created? - What problem does this repo solve?',
    },
    // 4b.
    {
        type: 'input',
        name: 'paragraph2',
        message: '4b. What learning points should be mentioned?',
    },
    // 4c.
    {
        type: 'input',
        name: 'paragraph3',
        message: '4c. How is the repo important? - How does the repo stand out?',
    },

    // 5.
    {
        type: 'list',
        name: 'installationNeeded',
        message: '5. Do you need to mention a special installation instruction?',
        choices: ['Yes', 'No']
    },
    // 5a.
    {
        type: 'input',
        name: 'installationInfo',
        message: '5a. How should the information be installed?',
        when: (answers) => answers.installationNeeded === 'Yes'
    },
    // 6.
    {
        type: 'input',
        name: 'usageDetails',
        message: '6. How should this repository be used? Explain.',
    },
    // 7.
    {
        type: 'input',
        name: 'githubUsername',
        message: '7. What is you GitHub username? '
    },
    // 8.
    {
        type: 'input',
        name: 'email',
        message: '8. What is your email address?'
    },
    // 9.
    {
        type: 'input',
        name: 'testingNames',
        message: '9. Provide any testing  information required for this application.'
    },
    // 10.
    {
        type: 'input',
        name: 'emailQuestions',
        message: '10. Instructions on how to contact me. If you have questions' 
    }
];



// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: writeToFile
// Purpose: writes the markdown file to a file based on the data input of data filename
// Input: fileName, Data
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function writeToFile(fileName, data) { 
    var stringMarkdown = generateMarkdown(data);
    fs.writeFile(fileName, stringMarkdown, (err) => err ? console.log(err) : console.log('Success!'));
}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: writeToFile
// Purpose: runs questions of prompt and stores information into data then runs writeToFile
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function init() { 
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.repoName}.md`,data);
    });   
}

// Function call to initialize app
init();

