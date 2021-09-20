// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { resourceUsage } = require("process");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Tell the user how to get your project up and running",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license did you use for your project?",
    choices: [
      "Academic Free",
      "Apache license",
      "Artistic license",
      "Boost Software",
      "BSD",
      "Creative Commons",
      "Educational Community",
      "Eclipse",
      "GNU",
      "ISC",
      "Microsoft",
      "MIT",
      "Mozilla",
      "Open",
      "PostgreSQL",
      "The Unlicense",
      "SIL Open Font",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Does your project include any tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "What should a user do if they have questions about your project?",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(data);
    if (err) {
      return err;
    } else {
      console.log(
        "Success! Please click on 'your file name'readme.md' to view"
      );
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

init();
