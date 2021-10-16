// Engineer constructor
const Engineer = require('../lib/Engineer');

//Engineer Object
test('create Engineer object', () => {
    const testValue = "Github";
    const engineer = new Engineer('Grace', 18, 'test@email.com', testValue);

    expect(engineer.github).toBe(testValue);

});
// get role
test("get employee's role", () => {
    const testValue = "Engineer";
    const engineer = new Engineer('Grace', 18, 'test@email.com', 'Github');
});

//get github for engineer
test("get engineer's github", () => {
const testValue = "Github";
    const engineer = new Engineer('Grace', 18, 'test@email.com', testValue);

    expect(engineer.getGithub()).toBe(testValue);
});

