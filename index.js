const app = require("express")();

const winston = require("./startup/logging")(app);

const port = process.env.PORT || 3001;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
