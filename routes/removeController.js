var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/contract');

router.post('/', function(req, res) {
  //console.log(req.body);
  var address = req.body.address;
  //console.log(address);
  functions.removeController(address);
  console.log('remove controller: ' + address);
});

module.exports = router;