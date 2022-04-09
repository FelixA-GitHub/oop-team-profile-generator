//packages need for this application
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template')

//variables
let team = [];

//managerQuestions
const managerQuestions = [
// const managerQuestions = () => {
    //return new Promise((resolve, reject) => {
        // inquirer
        //     .prompt([
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
                    name: 'role',
                    message: 'You are the Manager, correct?',
                    default: 'Manager'
                },
                {
                    type: 'input',
                    name: 'officeNum',
                    message: 'What is your office number?',
                    validate: offNumInput => {
                        if(offNumInput) {
                            return true;
                        } else {
                            console.log('Please provide your office number!');
                            return false;
                        }
                    }
                }

            ]
            // ])
            // .then(data => {
            //     const manager = new Manager(data.name, data.id, data.email, data.role, data.officeNum);
            //     team.push(manager);
            //     // resolve();
            // })
        // })
    // }

//employeeQuestions
const employeeQuestions = [
// // const employeeQuestions = () => {
// //     // return new Promise((resolve, reject) => {
        // inquirer
        //     .prompt([
                {
                    type: 'list',
                    name: 'addEmp',
                    message: 'Would you like to add an Engineer, Intern, or Finish with team building?',
                    choices: ['Engineer', 'Intern', 'Finish']  
                },
            // ])
//             .then(data => {
//                 if (data.addEmp == 'Engineer') {
//                     inquirer 
//                         .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of this Engineer?',
                            },
//                             {
//                                 type: 'input',
//                                 name: 'id',
//                                 message: 'What is the id of this Engineer?',
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'id',
//                                 message: 'What is the id of this Engineer?',
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'email',
//                                 message: 'What is the email of this Engineer?',
//                             },
//                             {
//                                 type: 'confirm',
//                                 name: 'role',
//                                 message: 'You are adding an Engineer, correct?',
//                                 default: Engineer.getRole()
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'github',
//                                 message: 'What is the Github of this Engineer?',
//                             },
//                         ])
//                         .then(data => {
//                             const engineer = new Engineer(data.name, data.id, data.email, data.role, data.github);
//                             team.push(engineer);
//                         })
//                 } else if (data.addEmp == 'Intern') {
//                     inquirer 
//                         .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of this Intern?',
                            },
//                             {
//                                 type: 'input',
//                                 name: 'id',
//                                 message: 'What is the id of this Intern?',
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'id',
//                                 message: 'What is the id of this Intern?',
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'email',
//                                 message: 'What is the email of this Intern?',
//                             },
//                             {
//                                 type: 'confirm',
//                                 name: 'role',
//                                 message: 'You are adding an Intern, correct?',
//                                 default: Intern.getRole()
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'school',
//                                 message: 'What is the Github of this Intern?',
//                             },
//                         ])
//                         .then(data => {
//                             const intern = new Intern(data.name, data.id, data.email, data.role, data.school);
//                             team.push(intern);
//                         })
//                 } else {
//                     return 'You have chosen to not add any employees.'
//                     //console.log('You have chosen to not add any employees.');
//                     //return false;
//                 }
            ]
        //     })
        // }

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(`${fileName}`, `${data}`, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Your index.html has been generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
        .then(employeeQuestions)
        .then((data) => {
            return writeToFile("./dist/index.html", generateHTML(data));
        })
        .catch(err => {
            console.log(err);
        })
    }

// Function call to initialize app
init();


    // )}

