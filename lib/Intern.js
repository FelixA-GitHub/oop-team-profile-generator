const Employee = require('./employee');

//class Intern will extend Employee
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
    
    //will include school
    this.school = school;
    }

    //getSchool()
    getSchool() {
        return this.school;
    }

    //getRole() will be overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;