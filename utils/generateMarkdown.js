// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generate(data) {
  // console.log(`${data.title}\n=================\n${data.description}`);
  return `# ${data.title}\n\n
## Description\n${data.description}\n\n
## Installation\n${data.installation}\n\n
## Usage\n${data.usage}\n\n
## Contributing\n${data.contribution}\n\n
## Tests\n${data.test}\n\n
## Questions\n - [Github](https://www.github.com/${data.username})
`;
}

module.exports = {
  generate,
};
