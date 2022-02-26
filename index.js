// Packages to run the web application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Manager Questions
async function managerQuestions() {
    try {
        const {name, id, email, officeNumber} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Manager's name must be included.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: (officeNumber) => {
                    if (isNaN(officeNumber)) {
                        console.log(' *Please enter a valid office number.');
                        return false;
                    } else {
                        return true;
                    }
                }
    
            }
        ])
        const managerData = new Manager (name, id, email, officeNumber);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
};

// Crossroads Function
async function crossroads() {
    try {
        const {choice} = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'All-done! Build my team!'
                ]
            }
        ])
        switch(choice) {
            case 'Engineer':
                return engineerQuestions();
            case 'Intern':
                return internQuestions();
            default: 
                return buildTeam();
        }
    } catch (err) {
        console.error(err)
    }
};

// Engineer Questions
async function engineerQuestions () {
    try {
        const {name, id, email, github} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Engineer's name must be included.");
                        return false;
                    }
                }
    
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Engineer's github username must be included.");
                    }
                }
            }
        ])
        const engineerData = new Engineer (name, id, email, github);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
};

// Intern Questions
async function internQuestions() {
    try {
        const {name, id, email, school} = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Intern's name must be included.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id number?",
                validate: (id) => {
                    if (isNaN(id)) {
                        console.log(" *Id must be a number.");
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
                validate: (email) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                        return true;
                    } else {
                        console.log(" *Not a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?',
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the school that the intern attends.");
                        return false;
                    }
                }
            }
        ])
        const internData = new Intern (name, id, email, school);
        return crossroads();
    } catch (err) {
        console.error(err)
    }
}

// Build team function
async function buildTeam() {
    try {
        fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), generateHtml, 'UTF8')
        console.log("Successfully built your team!");
    } catch (err) {
        console.error(err)
    }
}

// Calling the manager question function
managerQuestions();