// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {



  if (license === null) {
    return ''

  } else {
    return `
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}`

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Repository Name: ${data.repoName} 
  <hr/>


  ${renderLicenseSection(data.license)}


  


// ${data.uploadImage}
   
// ${data.imageName}
    
// ${data.imageDesription}
    
// ${data.uploadBadges}
        
// ${data.badgeName} 

// ONLY BADGES for licenses
// ![ alt_text ](https://img.shields.io/badge/Tesla-text-CC0000?style=for-the-badge&logo=Tesla)

## Overview
${data.paragraph1}

${data.paragraph2}

${data.paragraph3}


// ${data.installationNeeded}

// ${data.installationInfo}

## How to Use Application
${data.usageDetails}

## Background Knowledge
${data.requiredKnowledge}

## Snippets of Demonstration
${data.demoCode}

## What will or could change in the future
${data.updatesOrRefactor}

## Code of Conduct
${data.codeConduct}

## Contact Information
User Name: ${data.githubUsername}
Email: ${data.email}

${data.isTesting}

${data.testingNames}




`;
}

module.exports = generateMarkdown;
