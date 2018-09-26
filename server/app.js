const express = require('express');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mountRoutes = require('./routes');
const code = require('./utils/statusCodes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(helmet());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

mountRoutes(app);

app.use(errorHandler);

module.exports = app;
