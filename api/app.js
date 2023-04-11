const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

module.exports = app;
