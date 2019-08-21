var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/contract');

router.post('/', function(req, res) {
  //console.log(req.body);
  var controller = req.body.controller;
  var key = req.body.key;
  //console.log(controller);
  //console.log(key);
  var hash = functions.readIndex(controller, key);
  //console.log(hash);
  res.send(hash);
  console.log('controller: ' + controller + ' key: ' + key + ' hash: ' + hash);
});

module.exports = router;