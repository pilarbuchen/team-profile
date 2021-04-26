class Employee {
    constructor(id, name, email) {
        this.id = id
        this.name = name 
        this.email = email
    }
    getName = function() {
        return this.name
    }

    getId = function() {
        return this.id
    }
  }

module.exports = Employee