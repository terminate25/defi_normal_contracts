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

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "updateEmissionRate(uint256)";
    // Data (parameter to 64bit of hex)
    let data = "000000000000000000000000000000000000000000000000002386F26FC10000"; // 0.1
    // Eta time
    let eta = 1616558400;
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
