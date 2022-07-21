const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, empId, email, role, github) {
        super(name, empId, email, role);
        this.role = "Engineer"
        this.github = github
    }
    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer