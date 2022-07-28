// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`
  } else {
    return ""
  }
}

function TableofContents(TOC) {
  if (TOC) {
    return `## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#Contribute)
    * [Questions](#questions)`;
  } else {
    return``
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Project licensed by ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}


${TableofContents(data.tableofContents)}

## License
${renderLicenseBadge(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribute}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
