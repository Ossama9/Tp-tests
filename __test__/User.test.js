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

    it('Test email', () => {
        const res = user.isValidEmail();
        expect(res).toBe(true);
    });

    it('Test Lastname', () => {
        const res = user.isValidLastname();
        expect(res).toBe(true);
    });

    it('Test Firstname', () => {
        const res = user.isValidFirstname();
        expect(res).toBe(true);
    });

    it('Test Password', () => {
        const res = user.isValidPassword();
        expect(res).toBe(true);
    });


    it('Test Age', () => {
        const res = user.isValidAge();
        expect(res).toBe(true);
    });

    it('Test User', () => {
        const res = user.isValidUser();
        expect(res).toBe(true);
    });

})