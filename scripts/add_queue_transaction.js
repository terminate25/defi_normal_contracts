const Timelock = artifacts.require('Timelock');
const Masterchef = artifacts.require('Masterchef');

module.exports = async function() {
    // Use deployer to state migration tasks.
    var token = await Timelock.deployed();
    console.log( await token.address);

    await queueTransactionForAdd(token);

};

const queueTransactionForAdd = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "add(uint256,address,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let alloc_point = "0000000000000000000000000000000000000000000000000000000000000003";
    let lp_addr =     "000000000000000000000000B2A2A5a200E5FBF0657102b836e1046d7b4B6254";
    let deposit_fee = "00000000000000000000000000000000000000000000000000000000000001F4";
    let with_update = "0000000000000000000000000000000000000000000000000000000000000001";
    let data = alloc_point + lp_addr + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time
    let eta = 1616327820;

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}
