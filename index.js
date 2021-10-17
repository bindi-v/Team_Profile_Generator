//const writeFile = require('./src/generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateHtml.js');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//const path = require('path');

//const Output_Dir = path.resolve(__dirName, 'dist');
//const outputPath = path.join(Output_Dir, 'index.html');

const newTeamEmployee = [];

//const generatePage = (htmlPage) => {
//    if(!fs.existsSync(Output_Dir)){
//        fs.mkdirSync(Output_Dir);
 //   }
//fs.writeFile(outputPath, htmlPage, 'utf-8', (err) => {
//        if(err) throw err;
//        console.log("Team Profile is generated!");
//    })
//}

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
                     type: 'input',
                    name: 'name',
                    message: "What is the Employee's name?",
                 }, {
                     type: 'input',
                     name: 'id',
                    message: "What is the Employee's Id?",
            
                 }, {
                     type: 'input',
                     name: 'email',
                    message: "What is the Employee's Email?",
                 }, {
                     type: 'list',
                     name: 'role',
                     message: "What is the Employee's role?",
                    choices: ['Manager', 'Engineer', 'Intern'],
                }, 
    ])


    if (answers.role === 'Manager') {
        const managerAns = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Manager's Office Number?",
            },
        ])
         const newManager = new Manager(
             answers.name,
             answers.id, 
             answers.email, 
             managerAns.officeNumber
             );

             newTeamEmployee.push(newManager);

//         console.log(newTeamEmployee);
    }else if(answers.role === 'Engineer') {
        const engineerAns = await inquirer
        .prompt([
            {
                         type: 'input',
                         name: 'github',
                         message: "What is the Engineer's Github Username?",
                     } 
        ])
        const newEngineer = new Engineer(
            answers.name, 
            answers.id, 
            answers.email, 
            engineerAns.github
        );
        newTeamEmployee.push(newEngineer);

//         console.log(newTeamEmployee);

     }else if(answers.role === 'Intern'){
         const internAns = await inquirer
         .prompt([
            {
                        type: 'input',
                         name: 'school',
                        message: "What is the Intern's School name?",
                    }
                ])
        const newIntern = new Intern(
            answers.name,
            answers.id, 
            answers.email, 
            internAns.school
        );

       newTeamEmployee.push(newIntern);
       //         console.log(newTeamEmployee);
    }
 };

 
async function promptQuestions() {
await questions()

const addEmployeeAns = await inquirer
.prompt([
    {
                type: 'confirm',
                name: 'addEmployee',
                message: "Do you want to add more Employee information?",
            } 
 ])

if (addEmployeeAns.addEmployee === 'Add a new Employee'){
    return promptQuestions()
      }
return createTeam();
 }

 promptQuestions();

function createTeam() {
    console.log("new employee", newTeamEmployee)
    fs.writeFileSync("./dist/index.html", generateTeam(newTeamEmployee), "utf-8", (err) => {
       if(err) {
           console.log(err);
           return " Something Wrong!";
        }else {
       console.log("Your Team Profile Successfully Generated!")
}
     }
     );
 }
 



