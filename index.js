//const writeFile = require('./src/generateHtml');

//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Output_Dir = path.resolve(__dirName, 'output');
const outputPath = path.join(Output_Dir, 'team.html');

const render = require('./lib/htmlRenderer');
//const generatePage = require('./src/page-template');
const team = [];
// team employee class
const addManager = () => {
    return new Promise((res) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter Team's Manager name :",
            }, {
                type: 'input',
                name: 'id',
                message : "What is the Employee's Id? ",
            }, {
                type: 'input',
                name: 'email',
                message: "What is Employee's Email?",
            }, {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Manager's Office Number?",
            },
         ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            res();
       })
    })
}

const addEmployee = () => {
    console.log('Adding  Team Employee : ');
    return new Promise((resolve) => {
        inquirer.prompt([
            //{
            //    type: 'confirm',
            //    name: 'add',
            //    message: "Would you like to add more Team members?",
           // }, 
           {
                type: 'list',
                name: 'role',
                message: "What is the role of an Employee?",
                choices: ['Engineer', 'Intern'],
            },  {
                type: 'input',
                name: 'name',
                message: "What is Engineer's name?",
                when: ({role}) => role === "Engineer",
              }, {
                type: 'input',
                name: 'name',
                message: "What is Intern's name?",
                when: ({role}) => role === "Intern",
            },{
                  type: 'input',
                  name: 'id',
                  message: "What is Employee's Id?",
              }, {
                  type: 'input',
                  name: 'email',
                  message: "What is Employee's Email?",
              }, {
                  type: 'input',
                  name: 'github',
                  message: "What is Employee's Github username?",
                  when: ({role}) => role === "Engineer",
              }, {
                type: 'input',
                name: 'school',
                message: " What is Employee's School name?",
                when: ({role}) => role === "Intern",
            }
        ]).then(answers => {
            if (answers.role){
                switch(answers.role){
                    case "Engineer":
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        team.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        team.push(intern);
                        break;
                }
                return addEmployee().then(() => resolve());
            }else {
                return resolve();
            }
        })
    })
}

addManager().then(() => {
    return addEmployee();

}).then(() => {
    const templateHTML = render(team)
    generatePage(templateHTML);
}).catch((err) => {
    console.log(err);
})

const generatePage = (htmlPage) => {
    if(!fs.existsSync(Output_Dir)){
        fs.mkdirSync(Output_Dir);
    }
    fs.writeFile(outputPath, htmlPage, 'utf-8', (err) => {
        if(err) throw err;
        console.log("Team Profile is generated!");
    })
}
//class teamEmployee {
//constructor() {
       // this.teamEmployee;
       // this.employee = [];
  //  }

// for Manager
   // getManager(){
        
       // .then(({name, id, email, officeNumber}) => {
        //    this.teamEmployee = new Manager(name, id, email, officeNumber);
         //   this.employee.push(this.teamEmployee);
         //   this.employee.push(this.teamEmployee.getRole());
      //  writeFile(generatePage(this.employee));
        //    this.getMembers();

      //  });
   // }


// getMembers() {
//     inquirer.prompt([
        
//     ])
//     .then(({ role }) => {
//         if(role === 'Engineer'){
//             inquirer.prompt([
               
//             ])
//             .then(({name, id, email, github}) => {
//                 this.teamEmployee = new Engineer(name, id, email, github);
//                 this.employee.push(this.teamEmployee);
//                 this.employee.push(this.teamEmployee.getRole());
//                 writeFile(generatePage(this.employee));
//                 this.getMembers();
//             });
//         }else if(role === 'Intern'){
//             inquirer.prompt([
//                  {
//                     type: 'input',
//                     name: 'id',
//                     message: "What is Employee's Id?",
//                 }, {
//                     type: 'input',
//                     name: 'email',
//                     message: "What is Employee's Email?",
//                 }, 
//             ])
//             .then(({name, id, email, school}) => {
//                 this.teamEmployee = new Intern(name, id, email, school);
//                 this.employee.push(this.teamEmployee);
//                 this.employee.push(this.teamEmployee.getRole());
//                writeFile(generatePage(this.employee));
//this.getMembers();
//            })
//        }else {
//            return console.log(this.employee);
//        }
//    })
//}
//}

//const teamEmployee = new TeamEmployee();
//teamEmployee.getManager();

//const path = require('path');
//const util = require('util');

//const mkdirAsync = util.promisify(fs.mkdir);
//writeFileAsync = util.promisify(fs.writeFile);
//const OutputDir = path.resolve(_dirname, 'output');
//const outputPath = path.join(OutputDir, 'team.html');
//const render = require('./lib/htmlRenderer');
//const { run } = require{"jest"}

//const teamEmployees = [];

       
  //  ])

// ;const questions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: "What is the Employee's name?",
//     }, {
//         type: 'input',
//         name: 'id',
//         message: "What is the Employee's Id?",

//     }, {
//         type: 'input',
//         name: 'email',
//         message: "What is the Employee's Email?",
//     }, {
//         type: 'list',
//         name: 'role',
//         message: "What is the Employee's role?",
//         choices: ['Manager', 'Engineer', 'Intern'],
//     }, 
// ]
//.then(employeeInput => {
  //let {name, id, email, role, officeNumber, github, school} = employeeInput;
   // let employee;// = new Manager (name, id, email, officeNumber);

    //teamEmployees.push(manager);
    //console.log(manager);
//     if (role === 'Manager') {
//         employee = new Manager (name, id, email, officeNumber);
//         console.log(employee);
//     }else if(role === 'Engineer') {
//         employee = new Engineer(name, id, email, github);
//         console.log(employee);

//     }else if(role === 'Intern'){
//         employee = new Intern (name, id, email, school);
//         console.log(employee);

//     }
//     teamEmployees.push(employee);
//     if(confirmAddEmployee){
//         return addEmployee(teamEmployees);
//     }else {
//         return teamEmployees;
//     }
// })
// };

//const addEmployee = () => {
   // console.log('Adding  Team Employee : ');

//return inquirer.prompt([

//}

// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if(err) {
//             console.log(err);
//             return " Something Wrong!";
//         }else {
//             console.log("Your Team Profile Successfully Generated!")
//         }
//     })
// }
//const questionForManager = [
   // {
     //   type: 'input',
     //   name: 'officeNumber',
      //  message: "What is the Manager's Office Number?",
  //  }
//];

// const questionForEngineer = [
//     {
//         type: 'input',
//         name: 'github',
//         message: "What is the Engineer's Github Username?",
//     }
// ];

// const questionForIntern = [
//     {
//         type: 'input',
//         name: 'school',
//         message: "What is the Intern's School name?",
//     }
// ];

// const confirm = [
//     {
//         type: 'confirm',
//         name: 'addEmployee',
//         message: "Do you want to add more Employee information?",
//     }
// ];

// const init = async() => {
//     const employees = [];
//     let addMore = true;
//     while(addMore){
//         const {name, id, email, role} = await inquirer.prompt(questions);
//         if(role === 'Manager'){
//             const {officeNumber} = await inquirer.prompt(questionForManager);
//             employees.push(new Manager(name, id, email, officeNumber));

//         }else if(role === 'Engineer'){
//             const {github} = await inquirer.prompt(questionForEngineer);
//             employees.push(new Engineer(name, id, email, github));

//         }else {
//             const { school} = await inquirer.prompt(questionForIntern);
//             employees.push(new Intern(name, id, email, school));

//         }
//         const {addEmployee} = await inquirer.prompt(confirm);
//         addMore = addEmployee;
//     }

    // const html = render(employees);
    // if(!fs.existsSync(outputPath)){
    //     const error = await mkdirAsync(OutputDir);
    //     error && console.log(error);

    //     const error = await writeFileAsync(outputPath, html);
    //     error && console.log(error);
    // }
//}

// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//     if(err){
//         console.log(err);
//         return 'something wrong!';
//     }else {
//         console.log('Your team profile generated!')
//     }
// })
// };
// init()
// .then(addEmployee)
// .then(teamEmployee => {
//     return generateHtml(teamEmployee);
// })
// .then(pageHtml => {
//     return writeFile(pageHtml);
// })
// .catch(err => {
//     console.log(err);
// });