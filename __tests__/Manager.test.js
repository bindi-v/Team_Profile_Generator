// Manager constructor
const Manager = require('../lib/Manager');

// manager object
test ('creates manager object', () => {
    const manager = new Manager('Bindu', 18, 'bindu@email.com', 123-890-456);
    expect(manager.officeNumber).toEqual(expect.any(number));
});

// get role
test('get role of Employee', () => {
    const manager = new Manager ('Bindu', 18, 'bindu@email.com');

    expect(manager.getRole()).toEqual('Manager');
});
