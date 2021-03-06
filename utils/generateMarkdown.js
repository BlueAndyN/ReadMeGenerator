// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  return `
  ![Github License Badge](https://img.shields.io/badge/license-${license}-blue.svg)
    `;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) { 
  return `# ${data.licenseLink}
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  return `# This project is licenses under the ${license} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  # Table of Contents
  # Installation
  ${data.installation}
  # Github Username
  ${data.userName}
  # Github E-mail Address
  ${data.emailAdress}
  # Usage
  ${data.usage}
  # License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  # Contributors
  ${data.contribute}
    `;
}



module.exports = generateMarkdown;