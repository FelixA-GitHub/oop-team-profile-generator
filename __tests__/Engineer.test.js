const Engineer = require('../lib/engineer');

//tests if engineer obj is created
test('creates an engineer object', () => {
    const testEng = 'Felix';
    const eng = new Engineer(testEng);
    expect(eng.name).toBe(testEng);
});

//tests if github username is inputted
test('checks if github username is inputted', () => {
    const testGithub = 'GithubUsername';
    const eng = new Engineer('Felix', 123, 'elmalogato@hotmail.com', 'Engineer', testGithub);
    expect(eng.github).toBe(testGithub);
});

//tests if getGithub() returns github
test('checks if getGithub() returns github', () => {
    const testGithub = 'GithubUsername';
    const eng = new Engineer('Felix', 123, 'elmalogato@hotmail.com', 'Engineer', testGithub);
    expect(eng.github).toBe(testGithub);
});

//tests if getRole() overrides to 'Engineer'
test('checks if getRole() overrides to Engineer', () => {
    const testRole = 'Engineer';
    const eng = new Engineer('Felix', 123, 'elmalogato@hotmail.com', testRole, 'FelixA-GitHub');
    expect(eng.role).toBe(testRole);
});