class Employee {

    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
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
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;