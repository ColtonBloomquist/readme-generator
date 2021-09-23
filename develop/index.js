// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { resourceUsage } = require("process");
const markdownPage = require("./utils/generateMarkdown.js");
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
      "",
      "Apache license",
      "Boost Software",
      "BSD",
      "Creative Commons",
      "Eclipse",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open",
      "The Unlicense",
      "SIL",
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
    name: "github",
    message: "What is your github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(data);
    if (err) {
      return err;
    } else {
      console.log("Success! Please click on 'README.md' to view");
    }
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile(
      "README.md",

      markdownPage.generateMarkdown(data, markdownPage.generateLicense(data))
    );
  });
}

init();
