


// Help with license information
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  

  if (license !== null) {

    return '[![License](https://img.shields.io/badge/License-' + license + '-lightblue.svg)]()';
  } else{
    return ''
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  

 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {



  // if (license === null) {
  //   return ''

  // } else {
  //   return `
  // ${renderLicenseSection(license)}
  // ${renderLicenseLink(license)}
  // `

  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Repository Name: ${data.repoName} 
  <hr/>


 ${renderLicenseBadge(data.license)}

## Overview
<hr/>
${data.paragraph1}

${data.paragraph2}

${data.paragraph3}


 ## Installation Information
 <hr/>
 ${data.installationInfo}

## How to Use Application
<hr/>
${data.usageDetails}


## Contact Information
<hr/>
User Name: ${data.githubUsername}
Email: ${data.email}

${data.testingNames}

${data.emailQuestions}


`;
}

module.exports = generateMarkdown;
