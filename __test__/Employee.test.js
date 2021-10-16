//const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
   // expect(employee.id).toEqual(expect.any(Number));
   // expect(employee.email).toEqual(expect.any(String));

});
// get name
test("get Employee's name ", () => {
    const name = "Grace";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
// get id
test("get Employee's id", () => {
    const testValue = 100;
    const employee = new Employee('Grace', testValue);
    expect(employee.id).toBe(testValue);
});

// get email
test("get Employee's email", () => {
    const testValue = "test@email.com";
    const employee = new Employee('Grace', 18, testValue);
    expect(employee.email).toBe(testValue);
});

test("get name by getName()", () => {
    const testValue = "Grace";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});
test("get id by getId()", () => {
    const testValue = 100;
    const employee = new Employee("Grace", testValue);
    expect(employee.getId()).toBe(testValue);
});
test("get email by getEmail", () => {
    const testValue = "test@email.com";
    const employee = new Employee("Grace", 18, testValue);
    expect(employee.getEmail()).toBe(testValue);
});
// get role
test("get Employee's role", () => {
    const testValue = "Employee";
    const employee = new Employee('Grace', 18, 'test@email.com');
    expect(employee.getRole()).toBe(testValue);
});