const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test ('Intern class is an object', () => {
    const e = new Intern ();
    expect(typeof(e)).toBe('object');
});

test ('Intern class can bind school property', () => {
    const school = 'ulv';
    const e = new Intern ('Dane', 14, 'test@test.com', school);
    expect(e.school).toBe(school);
});

test ('Intern class getSchool method returns school', () => {
    const school = 'ulv';
    const e = new Intern ('Dane', 14, 'test@test.com', school);
    expect(e.getSchool()).toBe(school);
});

test ('Intern class getRole method returns role', () => {
    const role = 'Intern';
    const e = new Intern ('Dane', 14, 'test@test.com', 'some github', role);
    expect(e.getRole()).toBe(role);
});