const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

const manager = new Manager(121, "pilarbuchen","example@gmail.com", 1)
test('manager name', () => {
    expect(manager.name).toEqual(expect.any(String));
  });

  test('email address', () => {
    expect(manager.email).toEqual(expect.stringContaining("@"));
  });

  test('id', () => {
    expect(manager.id).toEqual(expect.any(Number));
  });

  test('office number', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });