const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  //tymczasowe na heroku
  var database = process.env.MONGODB_URI || db;

  mongoose
    .connect(database, { useNewUrlParser: true })
    .then(() => winston.info(`Connected to ${database}...`));
};
