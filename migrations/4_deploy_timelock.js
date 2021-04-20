const Timelock = artifacts.require('Timelock');

const env = require('../env.json')

const used_env = env.main_net;

const _admin_addr = used_env.dev_addr;
const _delay_time = used_env.timelock_delay; // second

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Timelock, _admin_addr, _delay_time);
};
