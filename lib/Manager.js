const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, empId, email, role, offNum) {
        super(name, empId, email, role);
        this.role = "Manager"
        this.offNum = offNum
    }
    getRole() {
        return this.role
    }
    getOfficeNumber(){
        return this.offNum
    }
}

module.exports = Manager