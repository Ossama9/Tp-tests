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

    it('Verification email', () => {
        const res = isValidEmail();
        expect(res).toBe(true);
    });

}