const winston = require("winston");
const appRoot = require("app-root-path");
const morgan = require("morgan");

const options = {
  file: {
    level: "info",
    filename: `${appRoot}/logs/application.log`,
    handleExceptions: true,
    json: true,
    maxSize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.simple()
  }
};

require("express-async-errors");

module.exports = function(app) {
  process.on("unhandledRejection", ex => {
    throw ex;
  });

  let logger = new winston.createLogger({
    transports: [new winston.transports.File(options.file)],
    exitOnError: false // do not exit on handled exceptions
  });

  if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console(options.console));
  }

  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    }
  };

  app.use(morgan("tiny", { stream: logger.stream }));

  return logger;
};
