class User {
    constructor(lastname, firstname, email, password, dateOfBirth) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.toDoList = null;
    }

    isValidLastname(){
        if (!this.lastname){
            return false;
        }
        return true;
    }

    isValidFirstname(){
        if (!this.firstname){
            return false;
        }
        return true;
    }

    isValidPassword(){
        const isLengthValid = this.password.length >= 8 && this.password.length <= 40;

        const hasLowercase = /[a-z]/.test(this.password);

        const hasUppercase = /[A-Z]/.test(this.password);

        const hasDigit = /\d/.test(this.password);

        if (this.password && isLengthValid && hasLowercase && hasUppercase && hasDigit) {
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
        if (this.dateOfBirth && yearsDifference >= 13) {
            return true;
        } else {
            return false;
        }
    }

    isValidEmail() {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return this.email && regexEmail.test(this.email);
    }

    addTodoList(TodoList){
        if (this.AddTodoListVerif()){
            this.toDoList = TodoList;
            return true;
        }
        else {
            return false;
        }
    }

    AddTodoListVerif(){
        if(this.toDoList===null && this.isValidUser()){
            return true
        }
        else {
            return false
        }
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