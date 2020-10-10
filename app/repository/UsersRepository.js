import express from 'express';
import Datasource from 'nedb';
import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';
import users from '../stores/users';

export default class UsersRepository {

    async find(query) {
        return new Promise((resolve, reject) => {
            users.find(query).exec((err, docs) => {
                if (err) {
                    return reject(err);
                }
                return resolve(docs);
            });
        });
    }

    async insertObj(body) {
        return new Promise((resolve, reject) => {
            users.insert(body, (err, docs) => {
                if (err) {
                    return reject(err);
                }
                return resolve(docs);
            });
        });
    }
}