const Intern = require('../lib/intern');

//tests if intern obj is created
test('creates an intern object', () => {
    const testIntern = 'Felix';
});

//tests if school is inputted
test('checks if school is inputted', () => {
    const testSch = 'UNCC';
    const int = new Intern('Felix', 123, 'elmalogato@hotmail.com', 'Intern',testSch);
    expect(int.school).toBe(testSch);
});

//tests if getSchool() returns school
test('checks if school is inputted', () => {
    const testSch = 'UNCC';
    const int = new Intern('Felix', 123, 'elmalogato@hotmail.com', 'Intern',testSch);
    expect(int.school).toBe(testSch);
});

//tests if getRole() returns 'Intern'
test('checks if getRole() overrides to Intern', () => {
    const testRole = 'Intern';
    const int = new Intern('Felix', 123, 'elmalogato@hotmail.com', testRole, 'UNCC');
    expect(int.role).toBe(testRole);
});