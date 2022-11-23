// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =  require('./utils/generateMarkdown')




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
        message: 'What is title of your repository?',

    },
    // 2.

    // {
    //     type: 'list',
    //     name: 'uploadImage',
    //     message: '2. Do you have a markup image of desired repo?',
    //     choices: ['Yes', 'No']
    // },
    // {
    //     type: 'input',
    //     name: 'imageName',
    //     message: '2a. What is the name of the image?',
    //     when: (answers) => answers.uploadImage === 'Yes'
    // },
    // {
    //     type: 'input',
    //     name: 'imageDesription',
    //     message: '2b. Provide a description for the image.',
    //     when: (answers) => answers.uploadImage === 'Yes'
    // },

    // 3.
    {
        type: 'list',
        name: 'uploadBadges',
        message: '3. Are there any badges needed for this repo?',
        choices: ['Yes', 'No']
    },
    // 3a.
    {
        type: 'input',
        name: 'badgeName', // 
        message: '3a. What are the names of the badges?',
        when: (answers) => answers.uploadBadges === 'Yes'
        //[R, Pyhton, HTML, CSS, JavaScript, C++, Node JS, REACT] ONLY BADGES for licenses
        // ![ alt_text ](https://img.shields.io/badge/Tesla-text-CC0000?style=for-the-badge&logo=Tesla)
    },



    // // 4a.
    // {
    //     type: 'input',
    //     name: 'paragraph1',
    //     message: 'Why was this repo created? - What problem does this repo solve?',
    // },
    // // 4b.
    // {
    //     type: 'input',
    //     name: 'paragraph2',
    //     message: 'What learning points should be mentioned?',
    // },
    // // 4c.
    // {
    //     type: 'input',
    //     name: 'paragraph3',
    //     message: 'How is the repo important? - How does the repo stand out?',
    // },

    // // 5.
    // {
    //     type: 'list',
    //     name: 'installationNeeded',
    //     message: 'Do you need to mention a special installation instruction?',
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
    //     message: 'How should this repository be used? Explain.',
    // },
    // // 7.
    // {
    //     type: 'input',
    //     name: 'requiredKnowledge',
    //     message: 'What required knowledge is needed for the usage for this repo?',
    // },
    // // 8.
    // {
    //     type: 'input',
    //     name: 'demoCode',
    //     message: 'Upload the code to demonstrate usage of repo.',
    // },
    // // 9.
    // {
    //     type: 'list',
    //     name: 'updatesOrRefactor',
    //     message: 'What future updates will be included and/or how will this code be refactored?',
    // },
    // // 10.
    // {
    //     type: 'list',
    //     name: 'codeConduct',
    //     message: 'Should you inlude the Code of Conduct',
    //     choices: ['Yes', 'No']
    // },


    // {
    //     type: 'input',
    //     name: 'githubUsername',
    //     message: ' What is you GitHub username? '
    // },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is your email address?'
    // },
    // {
    //     type: 'list',
    //     name: 'isTesting',
    //     message: 'Do you have any testing in this application?',
    //     choices: ['Yes', 'No']
    // },
    // {
    //     type: 'input',
    //     name: 'testingNames',
    //     message: 'Provide.'
    // },
    // {
    //     type: 'list',
    //     name: 'emailQuestions',
    //     message: 'Are there questions, email me.' (always)
    // }


];






// // TODO: Create a function to write README file
function writeToFile(fileName, data) { 

    
    var stringMarkdown = generateMarkdown(data);
        fs.writeFile(fileName, stringMarkdown, (err) =>
        err ? console.log(err) : console.log('Success!'));
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
