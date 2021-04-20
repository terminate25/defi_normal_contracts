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
    let signature = "dev(address)";
    // Data (parameter to 64bit of hex)
    let data =     "0x0000000000000000000000002df4917f50875e876d78ccc83d03ef9a5e7a9993";
    
    console.log("Data " + data);
    // Eta time
    let eta = 1616272740;

    await token.queueTransaction(target, value, signature, data , eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}
