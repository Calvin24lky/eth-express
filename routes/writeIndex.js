var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/contract');

router.post('/', function(req, res) {
  //console.log(req.body);
  var key = req.body.key;
  var hash = req.body.hash;
  //console.log(key);
  //console.log(hash);
  functions.writeIndex(key, hash);
  //var hash = functions.readIndex(controller, key);
  //console.log(hash);
  //res.send(hash);
  console.log('write index: ' + key + '-' + hash);
});

module.exports = router;