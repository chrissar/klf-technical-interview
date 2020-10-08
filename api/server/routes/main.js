import express from 'express';
import Datasource from 'nedb';
import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';
import users from '../stores/users';

var main = express.Router();

main.get('/', async (req, res) => {
  users.find(req.query).exec((err, docs) => {
    if (err) {
      res.statusCode = 500;
      return res.json({ err });
    } else {
      res.statusCode = 200;
      return res.json({ 'users': docs, 'count': docs.length });
    }
  });
});

main.post('/', function (req, res, next) {
  users.insert(req.body, (err, docs) => {
    if (err) {
      res.statusCode = 500;
      return res.json({ 'error': err });
    }
    res.statusCode = 200;
    return res.send(docs)
  });
});

export default main;