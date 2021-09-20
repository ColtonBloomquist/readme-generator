// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs");
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * [description](#description)

  * [installation](#installation)

  * [usage](#usage)

  * [license](#license)

  * [contributors](#contributors)

  * [tests](#tests)

  * [questions](#questions)


  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  
  
`;
}

module.exports = generateMarkdown;
