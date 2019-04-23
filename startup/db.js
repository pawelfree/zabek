const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  var database = config.get('db');

  mongoose
    .connect(database, { useNewUrlParser: true })
    .then(() => winston.info(`Connected to ${database}...`));
};
