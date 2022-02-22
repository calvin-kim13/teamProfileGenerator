const Employee = require('../lib/Employee');

test ('Employee class is an object', () => {
    const e = new Employee ();
    expect(typeof(e)).toBe('object')
})

test ('Employee class can bind name property', () => {
    const name = 'Dane'
    const e = new Employee (name);
    expect(e.name).toBe(name)
})

test ('Employee class can bind id property', () => {
    const id = 14
    const e = new Employee ('Dane', id);
    expect(e.id).toBe(id)
})

test ('Employee class can bind email property', () => {
    const email = 'test@test.com'
    const e = new Employee ('Dane', 14, email);
    expect(e.email).toBe(email)
})

test ('Employee class getName method returns name', () => {
    const name = 'Dane'
    const e = new Employee (name);
    expect(e.getName()).toBe(name)
})

test ('Employee class getId method returns id', () => {
    const id = 14
    const e = new Employee ('Dane', id);
    expect(e.getId()).toBe(id)
})

test ('Employee class getEmail method returns email', () => {
    const email = 'test@test.com'
    const e = new Employee ('Dane', 14, email);
    expect(e.getEmail()).toBe(email)
})

test ('Employee class getRole method returns role', () => {
    const role = 'Employee'
    const e = new Employee ('Dane', 14, 'test@test.com', role);
    expect(e.getRole()).toBe(role)
})