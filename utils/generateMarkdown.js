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

  // renderLicenseLink(license)
//renderLicenseBadge(license)

if( license === null){
  return ''

} else {
  return `
  ${  renderLicenseSection(license)}
  ${renderLicenseLink(license)}`

}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.repoName} 
  <hr/>


  ${renderLicenseSection(data.license)}
  if( renderLicenseSection(license) != null){
    renderLicenseSection(license)
  }
`;
}

module.exports = generateMarkdown;
