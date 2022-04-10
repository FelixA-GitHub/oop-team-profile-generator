const Employee = require('./employee');

//class Manager will extend Employee
class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
    
    //will also have officeNumber
    this.officeNum = officeNum;
    }

    //getRole() will be overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;