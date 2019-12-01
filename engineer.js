const Employee = require("./employee")

class Engineer extends Employee {

    constructor(name, id, title, email, github) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;