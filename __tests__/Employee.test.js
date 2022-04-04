const Employee = require('../lib/Employee');

//employee is like potion from rpg 

test('creates an employee object', () => {
    const testEmp = 'Felix';
    const emp = new Employee(testEmp);
    expect(emp.name).toBe(testEmp);
});

test('sets an employee id', () => {
    const testId = 123;
    const emp = new Employee('Felix', testId)
    expect(emp.id).toBe(testId);
});

test('sets an employee email', () => {
    const testEmail = 'elmalogato@hotmail.com';
    const emp = new Employee('Felix', 123, testEmail)
    expect(emp.email).toBe(testEmail);
});

test('sets a role for the employee', () => {
    const testRole = 'Engineer';
    const emp = new Employee('Felix', 123, 'elmalogato@hotmail.com', testRole);
    expect(emp.role).toBe(testRole);
})



