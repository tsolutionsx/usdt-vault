import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.4.18",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.5.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.6.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.6.2",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.7.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 10,
                    },
                },
            },
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.8.8",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.8.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.20",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.21",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.24",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }
        ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
        },
    },
    mocha: {
        timeout: 200000
    },
    networks: {
        polygon: {
            url: process.env.POLYGON_URL || "",
            accounts: [process.env.PRIVATE_KEY as string],
            timeout: 600000
        },
        bscmainnet: {
            url: process.env.BSC_URL || "https://bsc-dataseed4.bnbchain.org",
            accounts: [process.env.PRIVATE_KEY as string],
            timeout: 600000
        },
        bsctest: {
            url: process.env.BSCTEST_URL || "https://data-seed-prebsc-2-s2.bnbchain.org:8545",
            accounts: [process.env.PRIVATE_KEY as string],
            timeout: 60000,
        },
        snowtrace: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            chainId: 43113,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        mumbai: {
            url: 'https://rpc.ankr.com/polygon_mumbai',
            chainId: 80001,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        optimismGoerli: {
            url: 'https://optimism-goerli.blockpi.network/v1/rpc/public',
            chainId: 420,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        moonbaseAlpha: {
            url: 'https://moonbase-alpha.public.blastapi.io',
            chainId: 1287,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        arbitrumGoerli: {
            url: 'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
            chainId: 421613,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        alfajores: {
            url: 'https://alfajores-forno.celo-testnet.org',
            chainId: 44787,
            accounts: [process.env.PRIVATE_KEY as string]
        },
        localnode: {
            url: process.env.LOCALNET_URL,
            accounts: [
                '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
                '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
                '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
            ],
            blockGasLimit: 0x1fffffffffffff
        }
    },
    etherscan: {
        apiKey: ""
    }
};

export default config;