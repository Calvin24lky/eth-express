var express = require('express');
var router = express.Router();

var functions = require('../public/javascripts/contract');

var accounts = functions.getAccounts();
var balance = functions.getBalance();

var infojson = {};
var k = [];

for (var i = 0; i < accounts.length - 1; i++) {
  j = {};
  j.address = accounts[i];
  j.balance = balance[i];
  k.push(j);
}

infojson.accounts = k;
infojson.length = accounts.length;

var info = JSON.stringify(infojson);
//console.log(info);

router.get('/', function(req, res, next) {
  res.send(info);
});

module.exports = router;