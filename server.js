'use strict';

const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const db = require('./models/db');
const app = express();

app.use(body_parser.json());

const port = process.env.PORT || 5000;
app.listen(port, console.log('Server on 5000...'));