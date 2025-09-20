require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: ALCHEMY_API_KEY ? `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}` : "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
