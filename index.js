//packages need for this application
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');
const { resolve } = require('path');

//variables
let team = [];

//managerQuestions
const managerQuestions = () => {
    //return new Promise((resolve, reject) => {
        inquirer
            .prompt([
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
            ])
            .then(data => {
                const manager = new Manager(data.name, data.id, data.email, data.role, data.officeNum);
                team.push(manager);
                // resolve();
            })
        // })
    }

//employeeQuestions
const employeeQuestions = () => {
    // return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'addEmp',
                    message: 'Would you like to add an Engineer, Intern, or Finish with team building?',
                    choices: ['Engineer', 'Intern', 'Finish']  
                },
            ])
            .then(data => {
                if (data.addEmp == 'Engineer') {
                    inquirer 
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of this Engineer?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id of this Engineer?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id of this Engineer?',
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the email of this Engineer?',
                            },
                            {
                                type: 'confirm',
                                name: 'role',
                                message: 'You are adding an Engineer, correct?',
                                default: Engineer.getRole()
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is the Github of this Engineer?',
                            },
                        ])
                        .then(data => {
                            const engineer = new Engineer(data.name, data.id, data.email, data.role, data.github);
                            team.push(engineer);
                        })
                } else if (data.addEmp == 'Intern') {
                    inquirer 
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of this Intern?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id of this Intern?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the id of this Intern?',
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the email of this Intern?',
                            },
                            {
                                type: 'confirm',
                                name: 'role',
                                message: 'You are adding an Intern, correct?',
                                default: Intern.getRole()
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'What is the Github of this Intern?',
                            },
                        ])
                        .then(data => {
                            const intern = new Intern(data.name, data.id, data.email, data.role, data.school);
                            team.push(intern);
                        })
                } else {
                    return 'You have chosen to not add any employees.'
                    //console.log('You have chosen to not add any employees.');
                    //return false;
                }
            })
        }

    //writeFile and copyFile 
    const writeFile = fileContent => {
        //new creates new Promise object which acts like a container
        //that allows us to run code that at some point will be pending
        //or 'waiting for a response'
        //useful for http requests like fetch() or setTimeout()
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
              // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
              if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
              }
        
              // if everything went well, resolve the Promise and send the successful data to the `.then()` method
              resolve({
                ok: true,
                message: 'File created!'
              });
            });
          });
        };
    
    const copyFile = () => {
        return new Promise((resolve, reject) => {
            fs.copyFile('./dist/index.html', fileContent, err => {
                // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                if (err) {
                  reject(err);
                  // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                  return;
                }
          
                // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                resolve({
                  ok: true,
                  message: 'File copied!'
                });
              });
            });
          };


    managerQuestions().then(() => {
        return employeeQuestions();
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
    

    // )}

