//packages need for this application
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const { generateHTML } = require('./src/page-template');
const fs = require('fs');


// const teamData = [];

//managerQuestions
// const managerQuestions = [
// const managerQuestions = () => {
//     //if no 'manager' array property, create one
//     if(!teamData.manager) {
//         teamData.manager = [];
//     }
//     return new Promise((resolve, reject) => {
//         inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
            

//         },
//         {
//             type: 'confirm',
//             name: 'confirmManager',
//             message: 'Hello! Are you the Manager?',
//             default: true
//         },
//         {
//             type: 'input',
//             name: 'role',
//             message: 'You are the Manager, correct?',
//             default: 'Manager',
//             when: ({ confirmManager }) => confirmManager === true
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is your employee ID?',
//             when: ({ confirmManager }) => confirmManager === true
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?',
//             when: ({ confirmManager }) => confirmManager === true
//         },
//         {
//             type: 'input',
//             name: 'officeNum',
//             message: 'What is your office number?',
//             when: ({ confirmManager }) => confirmManager === true
//         }
//     ])
//     // .then(data => {
//     //     const manager = new Manager(data.name, data.id, data.email, data.role, data.officeNum);
//     //     teamData.manager.push(manager);
//     //     resolve();
//     // })
    
// })}

//employeeQuestions
// const employeeQuestions = [
const employeeQuestions = teamData => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);

    //if no 'employees' array property, create one
    if(!teamData) {
        teamData = [];
    }
    return inquirer.prompt([
                {
                    type: 'list',
                    name: 'addEmp',
                    message: 'Would you like to add a Manager, an Engineer, an Intern, or Finish with team building?',
                    choices: ['Manager','Engineer', 'Intern', 'Finish']  
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of this Manager?',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Manager?',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Manager?',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of this Manager?',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'confirm',
                    name: 'role',
                    message: 'You are adding an Manager, correct?',
                    default: 'Manager',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'input',
                    name: 'officeNum',
                    message: 'What is the office number of this Manager?',
                    when: ({ addEmp }) => addEmp === 'Manager'
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of this Engineer?',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Engineer?',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Engineer?',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of this Engineer?',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'confirm',
                    name: 'role',
                    message: 'You are adding an Engineer, correct?',
                    default: 'Engineer',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the Github of this Engineer?',
                    when: ({ addEmp }) => addEmp === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of this Intern?',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Intern?',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of this Intern?',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of this Intern?',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'confirm',
                    name: 'role',
                    message: 'You are adding an Intern, correct?',
                    default: 'Intern',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does this Intern go to?',
                    when: ({ addEmp }) => addEmp === 'Intern'
                },
                {
                    type: 'input',
                    name: 'finish',
                    message: 'You are done building your Team!',
                    when: ({ addEmp }) => addEmp === 'Finish'
                },
                // {
                //     type: 'confirm',
                //     name: 'feature',
                //     message: 'Would you like to add another employee?',
                //     default: false
                // },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
    ])
    .then(data => {
        if (data) {
            switch (data) {
                case 'Engineer':
                    const engineer = new Engineer(data.name, data.id, data.email, data.role, data.github);
                    teamData.push(engineer);
                    break;
                case 'Intern':
                    const intern = new Intern(data.name, data.id, data.email, data.role, data.school);
                    teamData.push(intern);
                    break;
                case 'Manager':
                    const manager = new Manager(data.name, data.id, data.email, data.role, data.school);
                    teamData.push(manager);
                    break;
                // case 'Finish':
                //     teamData.employee.push('');
                //     break; 
            } 
        } else if (data.confirmAddEmployee) {
            return employeeQuestions(teamData);
        } else {
            console.log('You are done building your team!');
            return teamData;
        }
    })
}
//create a function to write index.html file
// function writeToFile(fileName, data) {
//     return fs.writeFile(`${fileName}`, `${data}`, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Your index.html has been generated!');
//         }
//     });
// }

// managerQuestions()
employeeQuestions()
// .then(data => {
//     return writeToFile("./dist/index.html", generateHTML({data}));
// })
    .then(teamData => {
        return generateHTML({teamData});
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
            
                    
// //Create a function to initialize app
// function init() {
//     inquirer.prompt(managerQuestions)
//         .then(employeeQuestions)
//         .then((data) => {
//             return writeToFile("./dist/index.html", generatePage(data));
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }

// //Function call to initialize app
// init();


