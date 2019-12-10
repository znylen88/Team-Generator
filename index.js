const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const outputPath = path.resolve(__dirname, "output", "team.html");

// //const render = require("./l")

const employeeArray = []

const id = []

function menu() {
    function manager() {
        inquirer.prompt([

            {
                type: "input",
                name: "manager name",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "manager ID",
                message: "What is your manager ID number?",
            },
            {
                type: "input",
                name: "office ID",
                message: "What is your Office ID number?",
            },
            {
                type: "input",
                name: "manager email",
                message: "What is your E-mail?",
            }

        ])
    }

    function team() {

        inquirer.prompt([
            {
                type: "list",
                name: "employee type",
                message: "What type of employee would you like to add?",
                choices: ["Engineer", "Intern", "Nothing at this time"]
            }
        ]).then(employ => {
            switch (employ.employeeType) {
                case "Engineer": addEngineer()
                    break;
                case "Intern": addIntern()
                    break;
                default: buildTeam();
            }
        })
    }
}