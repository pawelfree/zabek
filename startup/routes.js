const express = require("express");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());

  app.get("/", (req, res, next) => {
    res.status(200).send("OK");
  });

  app.use(error);
};
