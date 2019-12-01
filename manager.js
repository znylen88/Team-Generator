const Employee = require("./employee")

class Manager extends Employee {

    constructor(name, id, title, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;