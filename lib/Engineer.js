const Employee = require('./employee');


//class Engineer will extend Employee
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        
        //will include github - GitHub username
        this.github = github
    }


    //getGithub()
    getGithub() {
        return this.github;
    }
    //getRole() will be overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;