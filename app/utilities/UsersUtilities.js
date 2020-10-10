import UsersRepository from '../repository/UsersRepository';
import User from "../entities/User";

const repository = new UsersRepository();

export default class UsersUtilities {

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(String(password));
    }

    async validateUser(element) {
        return new Promise(async (resolve, reject) => {
            const { firstName, lastName, email, password } = element;
            let errors = {};
            let userIsValid = true;

            if (!firstName) {
                userIsValid = false;
                errors['firstName'] = "First name is missing";
            }
            if (!lastName) {
                userIsValid = false;
                errors['lastName'] = "Last name is missing";
            }
            if (!email) {
                userIsValid = false;
                errors['email'] = "Email is missing";
            }
            if (!password) {
                userIsValid = false;
                errors['password'] = "Password is missing";
            }

            if (email) {
                const validEmail = this.validateEmail(email);
                if (!validEmail) {
                    userIsValid = false;
                    errors['email'] = "Please enter a valid email address.";
                } else {
                    let user = await repository.find({ 'email': email });
                    console.log(user);
                    if (user.length > 0) {
                        userIsValid = false;
                        errors['email'] = "This email already exists. Please use another one.";
                    }
                }
            }

            if (password && !this.validatePassword(password)) {
                userIsValid = false;
                errors['email'] = "Your password needs to contain a minimum of eight characters, at least one letter and one number.";
            }

            if (userIsValid) { resolve(new User(firstName, lastName, email, password)); }
            reject({ errors });
        });
    }
}