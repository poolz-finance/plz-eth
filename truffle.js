require("ts-node/register");
require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");

const GWEI = 1000000000;

module.exports = {
  networks: {
    kovan: {
      // @ts-ignore
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.KOVAN_ETHEREUM_NODE),
      network_id: 42,
      gas: 6721975,
      gasPrice: 10 * GWEI,
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
  },
  mocha: {
    // // Use with `npm run test`, not with `npm run coverage`
    // reporter: 'eth-gas-reporter',
    // reporterOptions: {
    //   currency: 'USD',
    //   gasPrice: 21
    // },
    enableTimeouts: false,
    useColors: true,
    bail: true,
  },
  plugins: [
    "truffle-plugin-verify"
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY,
  },
  contracts_build_directory: `./build/${process.env.NETWORK || "development"}`,
};
