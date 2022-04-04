
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

//employee is like potion from rpg 

test('creates an employee object', () => {
    const employee = new Employee('Felix');

    expect(employee.name).toBe('Felix');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

