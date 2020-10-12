import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';
import { expect, it, test } from '@jest/globals';
import QueryUtilities from '../utilities/QueryUtilities';

const utilities = new QueryUtilities();

test("a query object that has a 'password' property should no longer have it after we sanitize the input", () => {
    const input = { email: 'test@example.com', password: 'pwd123' };
    expect(input.hasOwnProperty('password')).toBe(true);
    const sanitized = utilities.sanitizeQuery(input);
    expect(sanitized.hasOwnProperty('password')).toBe(false);
});