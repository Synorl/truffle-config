const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "393c59d753568461cce0f315358803c727c36c9dc9f8a05c59105b49077ee883";
const endpointUrl = "https://rinkeby.infura.io/v3/ed4f998196594e76bc1376ac4e2b4d16"

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          [privateKey],
          //url to ethereum node
          endpointUrl
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  },

};