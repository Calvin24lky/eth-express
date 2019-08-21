var express = require('express');
var router = express.Router();

var functions = require('../public/javascripts/contract');

router.get('/', function(req, res, next) {
  var manager = functions.getManager();
  res.send(manager);
  console.log('manager: ' + manager);
});

module.exports = router;