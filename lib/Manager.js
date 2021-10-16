// import Employee class
const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        //super.getRole()
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }    
};

// export class
module.exports = Manager;