// add manager
// x-roads
// if intern, add intern method
// back to x-roads (add engineer function)
// back to x-roads again 
// build team function

const inquirer = require('inquirer');





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
                'All-done'
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
};