const Token = artifacts.require('HobbitToken');
// var BigNumber = require('bignumber.js');

// const env = require('../env.json')
// const used_env = env.main_net;

// const _dev_addr = used_env.dev_addr; //owner

const _name = "HobbitToken";
const _symbol = "HOBBIT";
// const _totalSupply = used_env.total_supply * 10**18;
module.exports = async function(_deployer) {
  // Use deployer to state migration tasks.
  await _deployer.deploy(Token, _name, _symbol);
  // setTotalSupply();
};


// const setTotalSupply = async() => {
//   var token = await Token.deployed();
//   await token.mint(_dev_addr, BigNumber(_totalSupply));
// }

