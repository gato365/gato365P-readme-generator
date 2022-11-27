# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)


Since this project was already templated with functions, this README will discuss how I used the pre defined functions to create a README generator.

## Within generateMarkdown.js
**renderLicenseBadge** - based on the license that is selected by the user, a *badge* is found within an array with the license's name in it

**renderLicenseLink** - based on the license that is selected by the user, a *link* is found within an array with the license's name in it

**renderLicenseSection** - based on the license that is selected by the user, both  **renderLicenseBadge** and **renderLicenseLink** functions and ran then concatenated to form one string

**generateMarkdown** - based on the user's inputs to predefined questions I made, a markdown is created. This calls the **renderLicenseSection** function


## Within index.js

**writeToFile** - runs the **generateMarkdown** function which stores data into the markdown format

**init** -  runs the questions which is save in data. The data is then written to a file in markdown format using **writeToFile** function