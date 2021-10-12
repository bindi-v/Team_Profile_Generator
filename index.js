const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const mkdirAsync = util.promisify(fs.mkdir);
writeFileAsync = util.promisify(fs.writeFile);
const OutputDir = path.resolve(_dirname, 'output');
const outputPath = path.join(OutputDir, 'team.html');
const render = require('./lib/htmlRenderer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?",
    }, {
        type: 'input',
        name: 'id',
        message: "What is the Employee's Id?",

    }, {
        type: 'list',
        name: 'role',
        message: "What is the Employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    }, 
];

const questionForManager = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's Office Number?",
    }
];

const questionForEngineer = [
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github Username?",
    }
];

const questionForIntern = [
    {
        type: 'input',
        name: 'school',
        message: "What is the Intern's School name?",
    }
];

const confirm = [
    {
        type: 'confirm',
        name: 'addmoreEmployee',
        message: "Do you want to add more Employee information?",
    }
];

