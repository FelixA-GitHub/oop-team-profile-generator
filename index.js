//packages need for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');


//array of questions for user input
const questions = [
    //enter the team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Team Manager?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the Team Manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please provide your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'offNum',
        message: 'What is your office number?',
        validate: offNumInput => {
            if(offNumInput) {
                return true;
            } else {
                console.log('Please provide your office number!');
                return false;
            }
        }
    },
    {
        type: 'menu',
        name: 'option',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'None'],
        validate: offNumInput => {
            if(offNumInput) {
                return true;
            } else {
                console.log('Please provide your office number!');
                return false;
            }
        }
    },  

]

