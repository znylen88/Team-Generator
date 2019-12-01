// // const Employee = require("./employee");
// // const Manager = require("./manager");
// // const Engineer = require("./engineer");
// const Intern = require("./intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// const outputPath = path.resolve(__dirname, "output", "team.html");

// const render = require("./l")

// const employeeArray = []

// const id = []

function menu() {
    function manager() {
        inquirer.prompt([

            {
                type: "input",
                name: "manager name",
                message: "What is your name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a character"
                }
            }
        ])
    }
}