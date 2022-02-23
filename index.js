// add manager
// x-roads
// if intern, add intern method
// back to x-roads (add engineer function)
// back to x-roads again 
// build team function

// Packages to run the web application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { number } = require('yargs');

// Array to save the team members
const employees = [];

// Manager Questions
async function managerQuestions() {
    const {choice} = await inquirer.prompt([
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
                    console.log(" *Manager's id number must be a number.");
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
}

// Crossroads Function
async function crossroads() {
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
            return addEngineer();
        case 'Intern':
            return addIntern();
        default: 
            return buildTeam();
    }
}