const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee('Bindu', 18, 'bindu@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// get id
test("get Employee's id", () => {
    const employee = new Employee('Bindu', 18, 'bindu@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email
test("get Employee's email", () => {
    const employee = new Employee('Bindu', 18, 'bindu@email.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// get role
test("get Employee's role", () => {
    const employee = new Employee('Bindu', 18, 'bindu@email.com');
    expect(employee.getRole()).toEqual('Employee');
});