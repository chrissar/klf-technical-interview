import User from "../entities/User";

export default class ValidateUser {
    async validateUsers(element) {
        return new Promise((resolve, reject) => {
            if (!element.firstName) { reject("First name is missing"); }
            if (!element.lastName) { reject("Last name is missing"); }
            resolve(new User(element.firstName, element.lastName));
        });
    }
}