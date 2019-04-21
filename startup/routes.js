var express = require('express');
var error = require('../middleware/error');
var path = require('path');
var favicon = require('serve-favicon');

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: 'true' }));
  app.use('/', express.static(path.join(__dirname, '../dist')));
  app.use(favicon(path.join(__dirname, '../dist/favicon.ico')));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  // app.get("/", (req, res, next) => {
  //   res.status(200).send("OK");
  // });

  app.use(error);
};
