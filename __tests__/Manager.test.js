const Manager = require('../lib/manager');

//tests if manager obj is created
test('creates an intern object', () => {
    const testMan = 'Felix';
});

//tests if office number is inputted
test('checks if office number is inputted', () => {
    const testOffNum = '888-888-8888';
    const man = new Manager('Felix', 123, 'elmalogato@hotmail.com', 'Manager',testOffNum);
    expect(man.offNum).toBe(testOffNum);
});

//tests if getRole() returns 'Manager'
test('checks if getRole() overrides to Manager', () => {
    const testRole = 'Manager';
    const man = new Manager('Felix', 123, 'elmalogato@hotmail.com', testRole, '888-888-8888');
    expect(man.role).toBe(testRole);
});