const Contract = artifacts.require('Masterchef');

const list_lp = require('../lp_pool_address.json')

module.exports = async function() {
    // Use deployer to state migration tasks.
    var token = await Contract.deployed();
    console.log( await token.address);

    for (const [key, value] of Object.entries(list_lp)) {
        console.log(`${key}: ${value}`);
        await addLPPool(token, value.alloc_point, value.address, value.deposit_fee, true);
		await sleep(5000);
    }

};

const addLPPool = async(token, alloc_point, lp_addr, deposit_fee, with_update) => {
    await token.add(alloc_point, lp_addr, deposit_fee, with_update)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   