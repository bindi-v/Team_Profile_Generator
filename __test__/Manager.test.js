// Manager constructor
const Manager = require('../lib/Manager');
const Employee = require("../lib/Employee");
const { test, expect } = require('@jest/globals');

// manager object
test ('creates manager object', () => {
    const testValue = 100;
    const manager = new Manager('Grace', 18, 'test@email.com', testValue);
    expect(manager.officeNumber).toBe(testValue);
});

// get role
test('get role of Employee', () => {
    const testValue = "Manager";
    const manager = new Manager ('Grace', 18, 'test@email.com', 100);

    expect(manager.getRole()).toBe(testValue);
});

test("get office number", () => {
    const testValue = 100;
    const manager = new Manager('Grace', 18, 'test@email.com', testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
});
