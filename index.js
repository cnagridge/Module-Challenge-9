// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide contribution guidelines.',
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instrucions for your project.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
