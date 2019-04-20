const winston = require("winston");
const morgan = require("morgan");

module.exports = function(app) {
  winston.add(
    new winston.transports.File({
      level: "info",
      filename: "application.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  );

  if (process.env.NODE_ENV !== "production") {
    winston.add(
      new winston.transports.Console({
        level: "debug",
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
      })
    );
  }

  app.use(
    morgan("dev", {
      stream: {
        write: function(message, encoding) {
          winston.info(message);
        }
      }
    })
  );
};
