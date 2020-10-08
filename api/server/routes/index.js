import express from 'express';
import Datasource from 'nedb';
import { register } from 'babel-core';
import babelPolyfill from 'babel-polyfill';

const db = new Datasource();
var router = express.Router();

router.get('/', async (req, res) => {
  db.find(req.query).exec((err, docs) => {
    if (err) {
      res.send({ err });
    } else {
      res.send({ docs });
    }
  });
});

router.post('/', function (req, res, next) {
  db.insert(req.body, (err, docs) => {
    if (err) {
      res.send("error");
    }
    res.send(docs)
  });
});

export default router;