const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer(121,"pilar buchen", "pilarbuchen@gmail.com", "github.com/pilarbuchen")
test('engineer name', () => {
    expect(engineer.name).toEqual(expect.any(String));
  });

  test('email address', () => {
    expect(engineer.email).toEqual(expect.stringContaining("@"));
  });

  test('id', () => {
    expect(engineer.id).toEqual(expect.any(Number));
  });

  test('github name', () => {
    expect(engineer.github).toEqual(expect.stringContaining("github"));
  });