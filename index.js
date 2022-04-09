//packages need for this application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template')

const teamData = [];

//managerQuestions
// const managerQuestions = [
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmManager',
            message: 'Hello! Are you the Manager?',
            default: true,
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log('Please confirm that you are the Manager!');
                    return false;
                };
            }

        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            when: ({ confirmManager }) => confirmManager === true

        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            when: ({ confirmManager }) => confirmManager === true
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            when: ({ confirmManager }) => confirmManager === true
        },
        {
            type: 'input',
            name: 'role',
            message: 'You are the Manager, correct?',
            default: 'Manager',
            when: ({ confirmManager }) => confirmManager === true
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
            when: ({ confirmManager }) => confirmManager === true
        }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.role, data.officeNum);
        teamData.manager.push(manager);
    })
}

//employeeQuestions
// const employeeQuestions = [
const employeeQuestions = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);

    //if no 'employees' array property, create one
    if(!teamData.employee) {
        teamData.employee = [];
    }
    return inquirer.prompt([
                {
                    type: 'list',
                    name: 'addEmp',
                    message: 'Would you like to add an Engineer, Intern, or Finish with team building?',
                    choices: ['Engineer', 'Intern', 'Finish']  
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
                    message: 'You are done building your Team!',
                    when: ({ addEmp }) => addEmp === 'Finish'
                },
                {
                    type: 'confirm',
                    name: 'feature',
                    message: 'Would you like to add another employee?',
                    default: false
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
    ])
    .then(empData => {
        teamData.employee.push(empData);
        
        if(empData.confirmAddEmployee) {
            return employeeQuestions(teamData);
        } else {
            return teamData;
        }
    });
};
managerQuestions()
    .then(employeeQuestions)
    .then(teamData => {
        return generateHTML(teamData);
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
//                         .then(data => {
//                             const intern = new Intern(data.name, data.id, data.email, data.role, data.school);
//                             team.push(intern);
//                         })
//                 } else {
//                     return 'You have chosen to not add any employees.'
//                     //console.log('You have chosen to not add any employees.');
//                     //return false;
//                 }
            // ]
        //     })
        // }

//Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFile(`${fileName}`, `${data}`, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Your index.html has been generated!');
//         }
//     });
// }

//Create a function to initialize app
// function init() {
//     inquirer.prompt(managerQuestions)
//         .then(employeeQuestions)
//         .then((data) => {
//             return writeToFile("./dist/index.html", generateHTML(data));
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }

//Function call to initialize app
// init();


