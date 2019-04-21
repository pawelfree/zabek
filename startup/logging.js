var winston = require('winston');
var morgan = require('morgan');

module.exports = function(app) {
  winston.add(
    new winston.transports.File({
      level: 'debug',
      filename: 'application.log',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  );

  if (process.env.NODE_ENV !== 'production') {
    winston.add(
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
      })
    );

    app.use(
      morgan('dev', {
        stream: {
          write: function(message, encoding) {
            winston.info(message);
          }
        }
      })
    );
  }

  winston.exitOnError = false;

  require('express-async-errors');
};
