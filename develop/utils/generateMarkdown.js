const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateLicense(data) {
  var licenseBadge = "";
  if (data.license === "Apache license") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
  } else if (data.license === "Boost Software") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    return licenseBadge;
  } else if (data.license === "BSD") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return licenseBadge;
  } else if (data.license === "Creative Commons") {
    licenseBadge =
      "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    return licenseBadge;
  } else if (data.license === "Eclipse") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    return licenseBadge;
  } else if (data.license === "GNU") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    return licenseBadge;
  } else if (data.license === "ISC") {
    licenseBadge =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    return licenseBadge;
  } else if (data.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  } else if (data.license === "Mozilla") {
    licenseBadge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    return licenseBadge;
  } else if (data.license === "Open") {
    licenseBadge =
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
    return licenseBadge;
  } else if (data.license === "SIL") {
    licenseBadge =
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
    return licenseBadge;
  } else if (data.license === "The Unlicense") {
    licenseBadge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    return licenseBadge;
  } else if (data.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  } else {
    licenseBadge = "";
    return licenseBadge;
  }
}
// I was not able to create the project using the recommended functions. Created my own function and it is working properly.

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseBadge) {
  return `# **${data.title}** ${licenseBadge}

  ## Table of Contents

  * [description](#description)

  * [installation](#installation)

  * [usage](#usage)

  * [license](#license)

  * [contributors](#contributors)

  * [tests](#tests)

  * [questions](#questions)



  # Description
  ${data.description}
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  This project is licensed under ${data.license}

  # Contributors
  ${data.contributors}

  # Tests
  ${data.tests}

  # Questions
  If you have questions, please reach out to me at ${data.email} or visit my github at github.com/${data.github}
  
  
  
`;
}

module.exports = { generateMarkdown, generateLicense };
