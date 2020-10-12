import express from 'express';
import Datasource from 'nedb';
import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';
import UsersRepository from '../repository/UsersRepository';
import { PasswordUtilities, QueryUtilities, UsersUtilities } from '../utilities';

const repository = new UsersRepository();
const passwordUtils = new PasswordUtilities();
const queryUtils = new QueryUtilities();
const usersUtils = new UsersUtilities();

var main = express.Router();

main.get('/', async (req, res) => {
  return res.send("It's running!");
});

main.get('/users', async (req, res) => {
  let results;
  let query;
  try {
    query = await queryUtils.sanitizeQuery(req.query);
    results = await repository.find(query);
  } catch (e) {
    return res.json({ success: false, users: [], count: 0, message: e });
  }
  return res.json({ success: true, users: results, count: results.length, message: '' });
});

main.get('/users/:userId', async (req, res) => {
  let results;
  try {
    results = await repository.find({ '_id': req.params.userId });
  } catch (e) {
    return res.json({ success: false, users: [], count: 0, message: e });
  }
  return res.json({ success: true, users: results, count: results.length, message: '' });
})

main.post('/users', async (req, res) => {
  let results;
  let entity;
  try {
    entity = await usersUtils.validateUser(req.body);
    entity['password'] = passwordUtils.encryptPassword(entity['password']);
    results = await repository.insertObj(entity);
  } catch (e) {
    console.log('err', e);
    return res.json({ success: false, message: e });
  }
  return res.json({ success: true, entry: { id: results._id, uri: `http://localhost:3000/users/${results._id}` } });
});

export default main;