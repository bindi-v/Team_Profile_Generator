// Engineer constructor
const Engineer = require('../lib/Engineer');

//Engineer Object
test('create Engineer object', () => {
    const engineer = new Engineer('Bindu', 18, 'bindu@email.com', 'github.com/bindu');

    expect(engineer.github).toEqual(expect.any(String));

});

//get github for engineer
test("get engineer's github", () => {

    const engineer = new Engineer('Bindu', 18, 'bindu@email.com', 'github.com/bindu');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role
test("get employee's role", () => {
    const engineer = new Engineer('Bindu', 18, 'bindu@email.com', 'github.com/bindu');
});