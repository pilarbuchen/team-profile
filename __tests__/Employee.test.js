const Employee = require('../lib/Employee');

test('creates the parent object', () => {
    const employee = new Employee();
  
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
  });
