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

    //Test valid email
    it('Test email valide', () => {
        const res = user.isValidEmail();
        expect(res).toBe(true);
    });
    it('Test email non valide', () => {
        user.email = "Johndoeexample.com";
        const res = user.isValidEmail();
        expect(res).toBe(false);
    });

    //Test lastName
    it('Test Lastname Valide', () => {
        const res = user.isValidLastname();
        expect(res).toBe(true);
    });
    it('Test Lastname non Valide', () => {
        user.lastname = '';
        const res = user.isValidLastname();
        expect(res).toBe(false);
    });

    //Test firstName
    it('Test Firstname Valide', () => {
        const res = user.isValidFirstname();
        expect(res).toBe(true);
    });
    it('Test Firstname non Valide', () => {
        user.firstname = null;
        const res = user.isValidFirstname();
        expect(res).toBe(false);
    });

    //Test password
    it('Test Password Valide', () => {
        const res = user.isValidPassword();
        expect(res).toBe(true);
    });

    it('Test Password non Valide', () => {
        user.password = "TEST555622222222";
        const res = user.isValidPassword();
        expect(res).toBe(false);
    });

    it('Test strong password', () => {
        user.password = "TEST"
        const res = user.hasUppercasePassword();
        expect(res).toBe(true);
    });

    it('Test not strong password', () => {
        user.password = "test"
        const res = user.hasLowercasePassword();
        expect(res).toBe(true);
    })

    it('Test length valid password', () => {
        user.password = "TEST14565"
        const res = user.isLengthValidPassword();
        expect(res).toBe(true);
    });

    it('Test length not valid password', () => {
        user.password = "test155666666666666666666666666666666666666666664554584545<"
        const res = user.isLengthValidPassword();
        expect(res).toBe(false);
    })

    it('Test digit valid password', () => {
        user.password = "1233"
        const res = user.hasDigitPassword();
        expect(res).toBe(true);
    })
    it('Test digit not valid password', () => {
        user.password = "test"
        const res = user.hasDigitPassword();
        expect(res).toBe(false);
    })

    //Test valid age
    it('Test Age Valide', () => {
        const res = user.isValidAge();
        expect(res).toBe(true);
    });
    it('Test Age non Valide', () => {
        user.dateOfBirth = '01/01/2020';
        const res = user.isValidAge();
        expect(res).toBe(false);
    });

    //User valid
    it('Test User Valide', () => {
        const res = user.isValidUser();
        expect(res).toBe(true);
    });

    it('Test User non Valide', () => {
        user.dateOfBirth = '01/01/2020';
        const res = user.isValidUser();
        expect(res).toBe(false);
    });

    //Test empty field
    it('Test if one or more fields are empty', () => {
        user.dateOfBirth = '';
        user.lastname = '';
        const res = user.isValidUser();
        expect(res).toBe(false);
    });

})