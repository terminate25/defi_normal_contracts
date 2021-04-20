const Timelock = artifacts.require('Timelock');
const Masterchef = artifacts.require('Masterchef');

module.exports = async function() {
    // Use deployer to state migration tasks.
    var token = await Timelock.deployed();
    console.log( await token.address);

    await queueTransactionForUpdateEmissionRate(token);

};

const queueTransactionForUpdateEmissionRate = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value 
    let value = 0;
    // Signature
    let signature = "transferOwnership(address)";
    // Data (parameter to 64bit of hex)
    let data = "0000000000000000000000004FA8348f459AadD05299b834e73211d8f879E6BF"; 
    // Eta time
    let eta = 1617811258;
    // Old transaction eta 1616535240

    console.log("Data " + data);
    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}
