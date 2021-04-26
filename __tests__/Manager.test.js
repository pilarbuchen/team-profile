const Manager = require("../lib/Manager");

test('creates the manager object', () => {
    const manager = new Manager();
  
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
  });