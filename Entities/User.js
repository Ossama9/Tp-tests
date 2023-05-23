class User {
    constructor(lastname, firstname, email, password, dateOfBirth, toDoList) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.toDoList = toDoList;
    }

    isValidLastname(){
        if (this.lastname != null){
            return true;
        } else {
            return false;
        }
    }

    isValidFirstname(){
        if (this.firstname != null){
            return true;
        } else {
            return false;
        }
    }

    isValidPassword(){
        const isLengthValid = this.password.length >= 8 && this.password.length <= 40;

        const hasLowercase = /[a-z]/.test(this.password);

        const hasUppercase = /[A-Z]/.test(this.password);

        const hasDigit = /\d/.test(this.password);

        if (isLengthValid && hasLowercase && hasUppercase && hasDigit) {
            return true;
        } else {
            return false;
        }
    }

    isValidAge(){
        const dateOfBirth = new Date(this.dateOfBirth);

        const currentDate = new Date();

        const differenceInMilliseconds = currentDate - dateOfBirth;

        const yearsDifference = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

        if (yearsDifference >= 13) {
            return true;
        } else {
            return false;
        }
    }

    isValidEmail() {
        const regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        return regexEmail.test(this.email);
    }

    isValidUser(){
        if (this.isValidFirstname() && this.isValidLastname() && this.isValidPassword() && this.isValidAge() && this.isValidEmail() ) {
            return true;
        } else {
            return false;
        }
    }



}

module.exports = User;