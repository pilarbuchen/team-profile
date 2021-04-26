const Employee = require('./Employee')
class Intern extends Employee{
    constructor(id, name, email, school) {
        super(id,name, email)
        this.school = school
    }

    getName = function() {
        return this.name
    }

    getId = function() {
        return this.id
    }
    
    getRole = function() {
        return 'Intern'
    }

    getSchool = function() {
        return this.school
    }
  }

module.exports = Intern