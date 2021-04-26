const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates the engineer object', () => {
    const engineer = new Engineer();
  
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
  });