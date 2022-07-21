
class Employee{
    constructor(name, id, email = "", role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role; //I think this might have to become a polymorphic function for this to work without updating role in each lib file
    }
        getName(){
            return this.name
        }
        getId(){
            return this.id
        }
        getEmail(){
            return this.email
        }
        getRole(){
            return this.role
        }
}

module.exports = Employee