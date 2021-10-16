// import Employee class
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getRole(){
//super.getRole()
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
};

// export class
module.exports = Intern;