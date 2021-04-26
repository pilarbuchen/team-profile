const Employee = require('./Employee')
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id,name, email)
        this.officeNumber = officeNumber
    }

    getRole = function() {
        return 'Manager'
    }
}

module.exports = Manager