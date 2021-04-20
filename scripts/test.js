
const env = require('../env.json')

const artifacts = require('../build/contracts/Masterchef.json')
const contract = require('truffle-contract')
const MyContract = contract(artifacts);
MyContract.setProvider(web3.currentProvider);

module.exports = async function() {
    //Get account deploy
    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount);

    MyContract.defaults({from: accounts[0]});

    MyContract.deployed()
    .then(function(instance) {
        console.log("Contract address " + instance.address);
        
        instance.add(3, "0x273132Ca35709Ee272DEC65a8e80C4BbCf787256", 500, true).then(res => 
        {
            console.log(res);
        }).catch(function(error) {
            console.error(error)
        }); //.then(res => console.log("OK")).catch(err => {console.log(err)});
        instance.add(4, "0x273132Ca35709Ee272DEC65a8e80C4BbCf787256", 600, true).then(res => console.log(res)).catch(function(error) {
            console.error(error)
        }); //.then(res => console.log("OK")).catch(err => {console.log(err)});
        instance.add(5, "0x273132Ca35709Ee272DEC65a8e80C4BbCf787256", 700, true).then(res => console.log(res)).catch(function(error) {
            console.error(error)
        });

        // instance.transferOwnership(masterchef_addr);
        // instance.mint(instance.address, 2000)
    })
    .catch(function(error) {
        console.error(error)
    })
    // await setTotalSupply();
};
