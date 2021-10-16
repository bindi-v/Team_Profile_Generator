// import Employee class
const Employee = require('./Employee');

class Engineer extends Employee{

    constructor(name, id, email, github){

        super(name, id, email);
        this.github = github;
    }
    
    getRole(){
        //super.getRole()
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
    
};

// export class
module.exports = Engineer;