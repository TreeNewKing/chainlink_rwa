import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv"
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks:{
    hardhat:{
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [process.env.privatekey],
     }
  },   
   //如果不需要使用hardhat verify 验证合约可以注释掉这个配置
   etherscan: {
    // apiUrl: "https://api-sepolia.arbiscan.io/api",
    apiKey: {
      fuji:process.env.fujiScankey==null?'':process.env.fujiScankey,
    },
    customChains: [
      {
        network: "fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api-testnet.snowscan.xyz/api",
          browserURL: "https://testnet.snowscan.xyz/"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  },

};

export default config;
