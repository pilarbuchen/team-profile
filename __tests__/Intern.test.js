const Intern = require("../lib/Intern");

test('creates the intern object', () => {
    const intern = new Intern();
  
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
  });