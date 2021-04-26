const Intern = require("../lib/Intern");

const intern = new Intern(121, "pilarbuchen","example@gmail.com", "school name")
test('intern name', () => {
    expect(intern.name).toEqual(expect.any(String));
  });

  test('email address', () => {
    expect(intern.email).toEqual(expect.stringContaining("@"));
  });

  test('id', () => {
    expect(intern.id).toEqual(expect.any(Number));
  });

  test('school name', () => {
    expect(intern.school).toEqual(expect.any(String));
  });