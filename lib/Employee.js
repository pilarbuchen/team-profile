class Employee {
    constructor(id, name, email) {
        this.id = 1234;
        this.name = "Test";
        this.email = "Test@gmail.com"
    }
    getName = function() {
        return this.name
    }

    getId = function() {
        return this.id
    }
  }

module.exports = Employee