const inquirer = require('inquirer');

//class Employee must have 
class Employee {
    constructor(name, id, email, role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }


    getName(){
       return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()returns 'employee'

//the other three classes will extend Employee

module.exports = Employee;