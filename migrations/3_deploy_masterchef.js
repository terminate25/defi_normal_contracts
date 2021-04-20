const MasterChef = artifacts.require('MasterChef');
var BigNumber = require('bignumber.js');
const env = require('../env.json');

const used_env = env.main_net;

//Token
const Token = artifacts.require('HobbitToken');

// Masterchef constructor init
const _dev_addr = used_env.dev_addr;
const _fee_addr = used_env.fee_addr;
const _token_per_block = used_env.emission_rate * 10**18; // Emission rate
const _start_block = used_env.start_block;

module.exports = async function(_deployer) {
  // Use deployer to state migration tasks.
  let _token_addr = await getTokenAddr();

  await _deployer.deploy(MasterChef, _token_addr, _dev_addr, _fee_addr, BigNumber(_token_per_block), _start_block);
};


const getTokenAddr = async () => {
  var token = await Token.deployed();
  return token.address;
}