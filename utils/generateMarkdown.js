


// Gets License Information from a JSON
const licensesData1 = require('./new-licenses-json');
var fullLicences1 = licensesData1.map(function (x) {
  return x[Object.keys(x)[0]];
});
var abbrLicences1 = licensesData1.map(function (x) {
  return x[Object.keys(x)[1]];
});


// Helpful links with license information
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: renderLicenseBadge
// Purpose: returns a license badge based on which license is passed in If there is no license, return an empty string
// Input: license
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function renderLicenseBadge(license) {
  if (license !== null) {
    let tmpShortLicense = licensesData1.filter(element => element["license-name"] === license);
    let shortLicense = tmpShortLicense[0]['license-abbrev'];

    return '[![License](https://img.shields.io/badge/License-' + shortLicense + '-lightblue.svg)]'
  } else {
    return ''
  }
}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: renderLicenseLink
// Purpose:  returns the license link If there is no license, return an empty string
// Input: license
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function renderLicenseLink(license) {
  if (license !== null) {
    let tmpWebsiteLink = licensesData1.filter(element => element["license-name"] === license);
    let websiteLink = tmpWebsiteLink[0]['license-website'];
    return '(' + websiteLink + ')'
  } else {
    return ''
  }
}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: renderLicenseSection
// Purpose: returns the license section of README If there is no license, return an empty string
// Input: license
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------

function renderLicenseSection(license) {
  if (license !== null) {
    return `${renderLicenseBadge(license) + renderLicenseLink(license)}`

  } else {
    return ''
  }
}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: generateMarkdown
// Purpose: Generates Markdown file
// Input: data
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function generateMarkdown(data) {
  return `

  # Repository Name: ${data.repoName} 
  <hr/>


  ## Table of Contents
  1. [Overview](#topic-1)
  2. [Installation Information](#topic-2)
  3. [How to Use Application](#topic-3)
  4. [Contact Information or Questions](#topic-4)
  5. [License Notice](#topic-5)




 ${renderLicenseSection(data.license)}

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


## Contact Information or Questions
<hr/>
User Name: ${data.githubUsername}
Email: ${data.email}

${data.testingNames}

${data.emailQuestions}


## License Notice
${data.license}

`;
}



// Generate Markdown File
module.exports = generateMarkdown;






// Helpful links with license information
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
//https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository