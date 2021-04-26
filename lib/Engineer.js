const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(id, name, email, github) {
        super(id,name, email)
        this.github = github
    }

    getName = function() {
        return this.name
    }

    getId = function() {
        return this.id
    }
    
    getRole = function() {
        return 'Engineer'
    }

    getGithub = function() {
        return github
    }
  }

module.exports = Engineer