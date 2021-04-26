const inquirer = require('inquirer')
const generatePage = require('..//Team-Profile/src/page-template')
const { writeFile, copyFile } = require('../Team-Profile/utils/generate-site')
const Manager = require('./lib/Manager')
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const team = []
 
const promptManagerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager name? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the employee ID? (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
    ]).then(function(answer) {
        const manager = new Manager(answer.employeeID, answer.managerName, answer.email, answer.officeNumber )
        team.push(manager)
    })
};

const promptInternQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name? (Required)',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern ID? (Required)',
            validate: internIDInput => {
                if (internIDInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailIntern',
            message: 'What is the intern email? (Required)',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchoolName',
            message: 'What is the intern school name? (Required)',
            validate: internSchoolNameInput => {
                if (internSchoolNameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
    ]).then(function(answer) {
        const intern = new Intern(answer.internID, answer.internName, answer.emailIntern, answer.internSchoolName )
        team.push(intern)
    }).then(questionSets)
};

const promptEngineerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer name? (Required)',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmployeeID',
            message: 'What is the engineer employee ID? (Required)',
            validate: engineerEmployeeIDInput => {
                if (engineerEmployeeIDInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer email? (Required)',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is the engineer Github username? (Required)',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
    ]).then(function(answer) {
        const engineer = new Engineer (answer.engineerEmployeeID, answer.engineerName, answer.engineerEmail, answer.engineerGitHub )
        team.push(engineer)
    }).then(questionSets)
};

const questionSets = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: "What do you want to do?",
                choices: ['Add Intern', 'Add Engineer', 'Finish my team'],
            },
        ])
        .then((answer) => {
            if (answer.options === 'Add Intern') {
                return promptInternQ();
            }
            else if (answer.options === 'Add Engineer') {
                return promptEngineerQ();
            }
            else if (answer.options === "Finish my team") {
                console.log("done")
                return answer
            }
        })
};

promptManagerQ()
    .then(questionSets)
    .then(promptManagerQ => {
      return generatePage(team);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });


