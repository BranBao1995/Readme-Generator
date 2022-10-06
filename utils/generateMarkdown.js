// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU AGPLv3":
      return "GNU AFFERO GENERAL PUBLIC LICENSE\n\n[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)";

    case "GNU GPLv3":
      return "GNU GENERAL PUBLIC LICENSE\n\n[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)";

    case "GNU LGPLv3":
      return "GNU LESSER GENERAL PUBLIC LICENSE\n\n[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)";

    case "Mozilla Public License 2.0":
      return "Mozilla Public License Version 2.0\n\n[https://choosealicense.com/licenses/mpl-2.0/](https://choosealicense.com/licenses/mpl-2.0/)";

    case "Apache License 2.0":
      return "Apache License\n\n[http://www.apache.org/licenses/](http://www.apache.org/licenses/)";

    case "MIT License":
      return "MIT License\n\n[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)";

    case "Boost Software License 1.0":
      return "Boost Software License\n\n[https://choosealicense.com/licenses/bsl-1.0/](https://choosealicense.com/licenses/bsl-1.0/)";

    case "The Unlicense":
      return "This is free and unencumbered software released into the public domain.\n\n[https://unlicense.org](https://unlicense.org)";

    case "No License":
      return "";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`;

    case "GNU GPLv3":
      return `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`;

    case "GNU LGPLv3":
      return `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`;

    case "Mozilla Public License 2.0":
      return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different erms and without source code for files added in the larger work.`;

    case "Apache License 2.0":
      return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;

    case "MIT License":
      return `Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

    case "Boost Software License 1.0":
      return `Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.`;

    case "The Unlicense":
      return `Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.`;

    case "No License":
      return "";

    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generate(data) {
  // console.log(`${data.title}\n=================\n${data.description}`);
  return `# ${data.title}\n\n
## Description\n${data.description}\n\n
## Installation\n${data.installation}\n\n
## Usage\n${data.usage}\n\n
## Contributing\n${data.contribution}\n\n
## Tests\n${data.test}\n\n
## License\n${renderLicenseLink(data.license)}\n\n${renderLicenseSection(
    data.license
  )}\n\n
## Questions\n - [Github](https://www.github.com/${
    data.username
  })\n - You can ask additional questions via email [${data.email}](${
    data.email
  })
`;
}

module.exports = {
  generate,
};
