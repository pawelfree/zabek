const winston = require("winston");
const app = require("express")();

require("./startup/logging")(app);
require("./startup/routes")(app);

const port = process.env.PORT || 3001;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
