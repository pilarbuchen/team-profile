const Employee = require('../lib/Employee');

const employee = new Employee(1, "pilarbuchen", "pilabuchen@gmail.com")
test('employee name', () => {
    expect(employee.name).toEqual(expect.any(String));
  });

  test('email address', () => {
    expect(employee.email).toEqual(expect.stringContaining("@"));
  });

  test('id', () => {
    expect(employee.id).toEqual(expect.any(Number));
  });


