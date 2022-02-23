const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test ('Engineer class is an object', () => {
    const e = new Engineer ();
    expect(typeof(e)).toBe('object');
});

test ('Engineer class can bind github property', () => {
    const github = 'some github';
    const e = new Engineer ('Dane', 14, 'test@test.com', github);
    expect(e.github).toBe(github);
});

test ('Engineer class getGithub method returns github', () => {
    const github = 'some github';
    const e = new Engineer ('Dane', 14, 'test@test.com', github);
    expect(e.getGithub()).toBe(github);
});

test ('Engineer class getRole method returns role', () => {
    const role = 'Engineer';
    const e = new Engineer ('Dane', 14, 'test@test.com', 'some github', role);
    expect(e.getRole()).toBe(role);
});