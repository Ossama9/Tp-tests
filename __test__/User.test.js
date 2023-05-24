const User = require('../Entities/User');

describe('User', () => {
    let user;
    beforeEach(() => {
        user = new User(
            "johndoe@example.com",
            "Doe",
            "John",
            "Password1234",
            "01/01/1990",
        );
    });

    it('Test email', () => {
        const res = isValidEmail();
        expect(res).toBe(true);
    });


    it('Test Lastname', () => {
        const res = isValidLastname();
        expect(res).toBe(true);
    });

    it('Test Firstname', () => {
        const res = isValidFirstname();
        expect(res).toBe(true);
    });

    it('Test Password', () => {
        const res = isValidPassword();
        expect(res).toBe(true);
    });


    it('Test Age', () => {
        const res = isValidAge();
        expect(res).toBe(true);
    });

    it('Test User', () => {
        const res = isValidUser();
        expect(res).toBe(true);
    });

}