import bcrypt from 'bcrypt';

const saltRounds = 10;

export default class PasswordUtilities {
    encryptPassword(plainTextPassword) {
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(plainTextPassword, salt);
    }
}