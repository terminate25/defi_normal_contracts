const Timelock = artifacts.require('Timelock');
const Masterchef = artifacts.require('Masterchef');

module.exports = async function() {
    // Use deployer to state migration tasks.
    var token = await Timelock.deployed();
    console.log( await token.address);

    await queueTransactionForSetHBBTC(token);
    await queueTransactionForSetHBCAKE(token);
    await queueTransactionForSetETHBUSD(token);
    await queueTransactionForSetBUSDDAI(token);
    await queueTransactionForSetDOT(token);
    await queueTransactionForSetEGG(token);
    await queueTransactionForSetDAI(token);
    await queueTransactionForSetUSDT(token);

};

const eta = 1616537700;

//const eta = 1616537700;

const queueTransactionForSetHBBTC = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000003";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000028"; //40
    let deposit_fee =       "0000000000000000000000000000000000000000000000000000000000000000";
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetHBCAKE = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000004";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000028"; //40
    let deposit_fee =       "0000000000000000000000000000000000000000000000000000000000000000";
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetETHBUSD = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000008";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000008";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetBUSDDAI = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "000000000000000000000000000000000000000000000000000000000000000D";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000003";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetDOT = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000013";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000004";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetEGG = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000014";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000005";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetDAI = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000016";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000002";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}

const queueTransactionForSetUSDT = async(token) => {
    //Target (Masterchef address)
    let masterchef = await Masterchef.deployed();
    let target = masterchef.address;
    console.log("Target " + target);

    // Value (Masterchef write function sequence)
    let value = 0;
    // Signature
    let signature = "set(uint256,uint256,uint16,bool)";
    // Data (parameter to 64bit of hex)
    let pid =               "0000000000000000000000000000000000000000000000000000000000000017";
    let alloc_point =       "0000000000000000000000000000000000000000000000000000000000000002";
    let deposit_fee =       "00000000000000000000000000000000000000000000000000000000000001F4"; //500
    let with_update =       "0000000000000000000000000000000000000000000000000000000000000000";
    let data = pid + alloc_point + deposit_fee + with_update;

    console.log("Data " + data);
    // Eta time

    await token.queueTransaction(target, value, signature, Buffer.from(data, 'hex'), eta)
    .then(res => 
    {
        console.log(res);
    }).catch(function(error) {
        console.error(error)
    });

}