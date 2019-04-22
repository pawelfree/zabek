var auth = require('../middleware/auth');
var express = require('express');
var router = express.Router();

router.get('/', auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
