//packages need for this application
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');

//variables
let team = [];

//array of questions for user input
//manager questions
const questions = [
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
        type: 'list',
        name: 'role',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Intern', 'None']
        
    }  

]

