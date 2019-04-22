var winston = require('winston');
var app = require('express')();

require('./startup/config')();
require('./startup/logging')(app);
require('./startup/routes')(app);
require('./startup/db')();

var port = process.env.PORT || 3001;
var server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
