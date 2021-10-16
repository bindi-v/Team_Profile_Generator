
const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

//Intern object
test('create Intern object', () => {
    const testValue = "UGT";
    const intern = new Intern('Grace', 18, 'test@email.com', testValue);

    expect(intern.school).toBe(testValue);
});
// get role
test("get employee's role", () => {
    const testValue = "Intern";
    const intern = new Intern('Grace', 18, 'test@email.com', 'UGT');

    expect(intern.getRole()).toBe(testValue);
});
//get school
test("get employee's school", () => {
    const testValue = "UGT"
    const intern = new Intern('Grace', 18, 'test@email.com', testValue);

    expect(intern.getSchool()).toBe(testValue);
});

