var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/contract');

router.post('/', function(req, res) {
  //console.log(req.body);
  var address = req.body.address;
  //console.log(address);
  functions.addController(address);
  console.log('add controller: ' + address);
});

module.exports = router;