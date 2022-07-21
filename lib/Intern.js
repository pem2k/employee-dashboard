const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, empId, email, role, school) {
        super(name, empId, email, role);
        this.role = "Intern"
        this.school = school
    }
    getRole() {
        return "intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern