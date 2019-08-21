var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var contractAddress = "0x17c8cd739f05e12153162fcbe3c90deb745df2aa";
var contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "controller",
				"type": "address"
			}
		],
		"name": "addController",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "controller",
				"type": "address"
			}
		],
		"name": "removeController",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "key",
				"type": "string"
			},
			{
				"name": "hash",
				"type": "uint256"
			}
		],
		"name": "writeIndex",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "controller",
				"type": "address"
			},
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "readIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var contract = web3.eth.contract(contractABI).at(contractAddress);

web3.eth.defaultAccount = web3.eth.coinbase;
web3.personal.unlockAccount(web3.eth.defaultAccount);

function getManager() {
    var manager = contract.manager();
    return manager;
}

function getAccounts() {
    var accounts = web3.eth.accounts;
    return accounts;
}

function getBalance() {
    var balance = [];
    var accounts = web3.eth.accounts;
    //balance = web3.fromWei(web3.eth.getBalance(accounts[0]).toString(),"ether");
    for (var i = 0; i < accounts.length; i++) {
        balance.push(web3.fromWei(web3.eth.getBalance(accounts[i]).toString(),"ether"));
    }
    return balance;
}

function addController(address) {
	//var accounts = web3.eth.accounts;
	//web3.eth.defaultAccount = accounts[2];
    contract.addController(address);
}

function removeController(address) {
	//var accounts = web3.eth.accounts;
	//web3.eth.defaultAccount = accounts[2];
	//console.log(web3.eth.defaultAccount);
    contract.removeController(address);
}

function writeIndex(key, hash) {
	contract.writeIndex(key, hash, {from:web3.eth.defaultAccount, gas:3000000});
}

function readIndex(controller, key) {
	var hash = contract.readIndex(controller, key).toString();
	return hash;
}

exports.getManager=getManager;
exports.getAccounts=getAccounts;
exports.getBalance=getBalance;
exports.addController=addController;
exports.removeController=removeController;
exports.writeIndex=writeIndex;
exports.readIndex=readIndex;