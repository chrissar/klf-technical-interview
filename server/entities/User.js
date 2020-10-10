export default class User {

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setemail() {
        return this.email;
    }

    setemail(email) {
        this.email = email;
    }

    setPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

}