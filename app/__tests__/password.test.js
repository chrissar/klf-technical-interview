import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';
import { expect, it, test } from '@jest/globals';
import bcrypt from 'bcrypt';
import PasswordUtilities from '../utilities/PasswordUtilities';

const utilities = new PasswordUtilities();

test("an encrypted password should be equivalent to its plaintext origin", () => {
    const input = 'pwd123';
    const hash = utilities.encryptPassword(input);
    expect(bcrypt.compareSync(input, hash)).toBe(true);
});

test("an encrypted password from plaintext origin should not be the equivalent of another", () => {
    const input = 'pwd123';
    const fakeInput = '321pwd';
    const hash = utilities.encryptPassword(input);
    expect(bcrypt.compareSync(fakeInput, hash)).toBe(false);
});