import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import jwt from 'express-jwt';
import { main } from './routes';
import { security } from './config';

var app = express();
const authentication = new jwt({ ...security });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);

app.use('/', main);

export default app;