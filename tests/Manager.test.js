const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test ('Manager class is an object', () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object');
});

test ('Manager class can bind officeNumber property', () => {
    const officeNumber = 7;
    const e = new Manager ('Dane', 14, 'test@test.com', officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test ('Manager class getOfficeNumber method returns officeNumber', () => {
    const officeNumber = 7;
    const e = new Manager ('Dane', 14, 'test@test.com', officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test ('Manager class getRole method returns role', () => {
    const role = 'Manager';
    const e = new Manager ('Dane', 14, 'test@test.com', 'some github', role);
    expect(e.getRole()).toBe(role);
});