const User = require('../Entities/User');

describe('User', () => {
    let user;
    beforeEach(() => {
        user = new User(
            "john",
            "Doe",
            "Johndoe@example.com",
            "Password1234",
            "01/01/1990",
        );
    });

    it('Test email valide', () => {
        const res = user.isValidEmail();
        expect(res).toBe(true);
    });

    it('Test email non valide', () => {
        user.email = "Johndoeexample.com";
        const res = user.isValidEmail();
        expect(res).toBe(false);
    });

    it('Test Lastname Valide', () => {
        const res = user.isValidLastname();
        expect(res).toBe(true);
    });

    it('Test Lastname non Valide', () => {
        user.lastname = null;
        const res = user.isValidLastname();
        expect(res).toBe(false);
    });

    it('Test Firstname Valide', () => {
        const res = user.isValidFirstname();
        expect(res).toBe(true);
    });

    it('Test Firstname non Valide', () => {
        user.firstname = null;
        const res = user.isValidFirstname();
        expect(res).toBe(false);
    });

    it('Test Password Valide', () => {
        const res = user.isValidPassword();
        expect(res).toBe(true);
    });

    it('Test Password non Valide', () => {
        user.password = "test"
        const res = user.isValidPassword();
        expect(res).toBe(false);
    });

    it('Test Age Valide', () => {
        const res = user.isValidAge();
        expect(res).toBe(true);
    });

    it('Test Age non Valide', () => {
        user.dateOfBirth = '01/01/2020';
        const res = user.isValidAge();
        expect(res).toBe(false);
    });

    it('Test User Valide', () => {
        const res = user.isValidUser();
        expect(res).toBe(true);
    });

    it('Test User non Valide', () => {
        user.dateOfBirth = '01/01/2020';
        const res = user.isValidUser();
        expect(res).toBe(false);
    });

})