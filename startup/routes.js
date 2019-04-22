var express = require('express');
var error = require('../middleware/error');
var path = require('path');
var favicon = require('serve-favicon');
var users = require('../routes/users');
var auth = require('../routes/auth');

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: 'true' }));
  app.use('/', express.static(path.join(__dirname, '../dist')));
  app.use('/signup', express.static(path.join(__dirname, '../dist')));
  app.use(favicon(path.join(__dirname, '../dist/assets/img/favicon.png')));
  app.use('/api/users', users);
  app.use('/api/auth', auth);

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  app.use(error);
};
