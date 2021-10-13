
const Intern = require('../lib/Intern');

//Intern object
test('create Intern object', () => {
    const intern = new Intern('Bindu', 18, 'bindu@email.com', 'SuperUniversity');

    expect(intern.school).toEqual(expect.any(String));
});

//get school
test("get employee's school", () => {
    const intern = new Intern('Bindu', 18, 'bindu@email.com', 'SuperUniversity');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

// get role
test("get employee's role", () => {
    const intern = new Intern('Bindu', 18, 'bindu@email.com', 'SuperUniversity');

    expect(intern.getRole()).toEqual('Intern');
});