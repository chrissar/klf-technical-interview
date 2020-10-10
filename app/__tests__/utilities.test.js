import { expect, it, test } from '@jest/globals';
import { describe } from 'yargs';
import UsersUtilities from '../utilities/UsersUtilities';

const utilities = new UsersUtilities();

test("a badly formatted email should fail validation", () => {
    const input = "test.at.example.com";
    expect(utilities.validateEmail(input)).toBe(false);
});

test("a properly formatted email should pass validation", () => {
    const input = "test@example.com";
    expect(utilities.validateEmail(input)).toBe(true);
});

test("a numbers-only password should fail", () => {
    const input = 123;
    expect(utilities.validatePassword(input)).toBe(false);
});

test("a password with 8 alphabetical characters only should fail", () => {
    const input = 'abcdefgh';
    expect(utilities.validatePassword(input)).toBe(false);
});

test("a password with 8 alphanumerical characters only should pass", () => {
    const input = '2frczZ38';
    expect(utilities.validatePassword(input)).toBe(true);
});