'use strict';

const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const db = require('./models/db');
const api = require('./api');

const app = express();

app.use(body_parser.json());

app.use('/api', api);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;

  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 5000;
app.listen(port, console.log('Server on 5000...'));
