// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =  require('./utils/generateMarkdown');




const licensesData = require('./licenses-json');



var fullLicences = licensesData.map(function(x){
    return x[Object.keys(x)[0]];
});

// var abbrLicences = licensesData.map(function(x){
//     return x[Object.keys(x)[0]];
// });




//** Questions to Include**//
// 0. Conditional Statements: https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
// 1. Title
// 2. Badges - https://github.com/badges/shields
// Example ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
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

// TODO: Create an array of questions for user input



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
        name: 'uploadBadges',
        message: '2. Is there a License used for this repo?',
        choices: ['Yes', 'No']
    },
    // 2a.
    {
        type: 'list',
        name: 'badgeName', // 
        message: '2a. What is the name of the badge?',
        when: (answers) => answers.uploadBadges === 'Yes',
        choices: fullLicences
    },
    // // 3a.
    // {
    //     type: 'input',
    //     name: 'paragraph1',
    //     message: '3a. Why was this repo created? - What problem does this repo solve?',
    // },
    // // 4b.
    // {
    //     type: 'input',
    //     name: 'paragraph2',
    //     message: '4b. What learning points should be mentioned?',
    // },
    // // 4c.
    // {
    //     type: 'input',
    //     name: 'paragraph3',
    //     message: '4c. How is the repo important? - How does the repo stand out?',
    // },

    // // 5.
    // {
    //     type: 'list',
    //     name: 'installationNeeded',
    //     message: '5. Do you need to mention a special installation instruction?',
    //     choices: ['Yes', 'No']
    // },
    // // 5a.
    // {
    //     type: 'input',
    //     name: 'installationInfo',
    //     message: '5a. How should the information be installed?',
    //     when: (answers) => answers.installationNeeded === 'Yes'
    // },
    // // 6.
    // {
    //     type: 'input',
    //     name: 'usageDetails',
    //     message: '6. How should this repository be used? Explain.',
    // },
    // // 7.
    // {
    //     type: 'input',
    //     name: 'githubUsername',
    //     message: '7. What is you GitHub username? '
    // },
    // // 8.
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: '8. What is your email address?'
    // },
    // // 9.
    // {
    //     type: 'input',
    //     name: 'isTesting',
    //     message: '9. Provide any testing  information required for this application.'
    // },
    // // 10.
    // {
    //     type: 'input',
    //     name: 'emailQuestions',
    //     message: '10. Instructions on how to contact me. If you have questions' 
    // }


];






// // TODO: Create a function to write README file
function writeToFile(fileName, data) { 

    
    var stringMarkdown = generateMarkdown(data);
    fs.writeFile(fileName, stringMarkdown, (err) => err ? console.log(err) : console.log('Success!'));
}



// // TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.repoName}.md`,data);
    });
    
    
}

// // Function call to initialize app
init();




// inquirer.prompt(questions).then((answers) => {
//     const filename = `${answers.repoName.toLowerCase().split(' ').join('')}.json`;

    
//     fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// });
