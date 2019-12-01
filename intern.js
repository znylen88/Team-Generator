const Employee = require("./employee")

class Intern extends Employee {

    constructor(name, id, title, email, school) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;