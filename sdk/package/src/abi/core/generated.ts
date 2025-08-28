//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// batchLiquidator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcb05535bd212eCFC4B7b9db81d6C2C768b726776)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xF353978890204756fc5fa6dfbD16a91eac9E6f4d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb688e4Da3100Bcec4b5B3140C8Fb482ad15D2013)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x444A48dA32649Ed03eeC9B9cD416748262c320E6)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9F9EEd9Bbc38E9e0514fD9dFcc0Bca9869A9c534)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xF0d7d1D47109bA426B9D8A3Cde1941327af1eea3)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x36446Ec9C7909608065dEB7f491701d815B880e5)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x42B709822F18595443c308c1BE5E63CbFEf06481)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe25603df330027d91A0BAcc3e80a7f9e84930FC6)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x7613030429E95cDFC76FE70f9573037068B51815)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x862F59081FC7907F940bE4227b9f485d700E6cdD)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x5fb676d66eAb8E0c22Ae24C5c10eD7E4A6397c1C)
 */
export const batchLiquidatorAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'host_', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cfa',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      {
        name: 'data',
        internalType: 'struct BatchLiquidator.FlowLiquidationData',
        type: 'tuple',
        components: [
          {
            name: 'agreementOperation',
            internalType: 'enum BatchLiquidator.FlowType',
            type: 'uint8',
          },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'receiver', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'deleteFlow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      {
        name: 'data',
        internalType: 'struct BatchLiquidator.FlowLiquidationData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'agreementOperation',
            internalType: 'enum BatchLiquidator.FlowType',
            type: 'uint8',
          },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'receiver', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'deleteFlows',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gda',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'host',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcb05535bd212eCFC4B7b9db81d6C2C768b726776)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xF353978890204756fc5fa6dfbD16a91eac9E6f4d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb688e4Da3100Bcec4b5B3140C8Fb482ad15D2013)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x444A48dA32649Ed03eeC9B9cD416748262c320E6)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9F9EEd9Bbc38E9e0514fD9dFcc0Bca9869A9c534)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xF0d7d1D47109bA426B9D8A3Cde1941327af1eea3)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x36446Ec9C7909608065dEB7f491701d815B880e5)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x42B709822F18595443c308c1BE5E63CbFEf06481)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe25603df330027d91A0BAcc3e80a7f9e84930FC6)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x7613030429E95cDFC76FE70f9573037068B51815)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x862F59081FC7907F940bE4227b9f485d700E6cdD)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x5fb676d66eAb8E0c22Ae24C5c10eD7E4A6397c1C)
 */
export const batchLiquidatorAddress = {
  1: '0xcb05535bd212eCFC4B7b9db81d6C2C768b726776',
  10: '0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb',
  56: '0xF353978890204756fc5fa6dfbD16a91eac9E6f4d',
  100: '0xb688e4Da3100Bcec4b5B3140C8Fb482ad15D2013',
  137: '0x444A48dA32649Ed03eeC9B9cD416748262c320E6',
  8453: '0x9F9EEd9Bbc38E9e0514fD9dFcc0Bca9869A9c534',
  42161: '0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb',
  42220: '0xF0d7d1D47109bA426B9D8A3Cde1941327af1eea3',
  43113: '0x36446Ec9C7909608065dEB7f491701d815B880e5',
  43114: '0x42B709822F18595443c308c1BE5E63CbFEf06481',
  84532: '0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f',
  534351: '0xe25603df330027d91A0BAcc3e80a7f9e84930FC6',
  534352: '0x7613030429E95cDFC76FE70f9573037068B51815',
  11155111: '0x862F59081FC7907F940bE4227b9f485d700E6cdD',
  11155420: '0x109412E3C84f0539b43d39dB691B08c90f58dC7c',
  666666666: '0x5fb676d66eAb8E0c22Ae24C5c10eD7E4A6397c1C',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xcb05535bd212eCFC4B7b9db81d6C2C768b726776)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xF353978890204756fc5fa6dfbD16a91eac9E6f4d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb688e4Da3100Bcec4b5B3140C8Fb482ad15D2013)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x444A48dA32649Ed03eeC9B9cD416748262c320E6)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9F9EEd9Bbc38E9e0514fD9dFcc0Bca9869A9c534)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xe8B40071df98bBEe23833905AFcF7b28fC7Ca3cb)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xF0d7d1D47109bA426B9D8A3Cde1941327af1eea3)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x36446Ec9C7909608065dEB7f491701d815B880e5)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x42B709822F18595443c308c1BE5E63CbFEf06481)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xe25603df330027d91A0BAcc3e80a7f9e84930FC6)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x7613030429E95cDFC76FE70f9573037068B51815)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x862F59081FC7907F940bE4227b9f485d700E6cdD)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x5fb676d66eAb8E0c22Ae24C5c10eD7E4A6397c1C)
 */
export const batchLiquidatorConfig = {
  address: batchLiquidatorAddress,
  abi: batchLiquidatorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cfa
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'permissions',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'flowRateAllowance',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'FlowOperatorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'totalSenderFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'totalReceiverFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'deposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlowUpdatedExtension',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CFA_HOOK_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_MINIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_FLOW_RATE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'addPermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'authorizeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToRemove', internalType: 'uint8', type: 'uint8' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getDepositRequiredForFlowRate',
    outputs: [{ name: 'deposit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowByID',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorData',
    outputs: [
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowOperatorDataByID',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMaximumFlowRateFromDeposit',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToAdd', internalType: 'uint8', type: 'uint8' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'dynamicBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'removePermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'revokeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaAddress = {
  1: '0x2844c1BBdA121E9E43105630b9C8310e5c72744b',
  10: '0x204C6f131bb7F258b2Ea1593f5309911d8E458eD',
  56: '0x49c38108870e74Cb9420C0991a85D3edd6363F75',
  100: '0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D',
  137: '0x6EeE6060f715257b970700bc2656De21dEdF074C',
  8453: '0x19ba78B9cDB05A877718841c574325fdB53601bb',
  42161: '0x731FdBB12944973B500518aea61942381d7e240D',
  42220: '0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad',
  43113: '0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A',
  43114: '0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58',
  84532: '0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef',
  534351: '0xbc46B4Aa41c055578306820013d4B65fff42711E',
  534352: '0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c',
  11155111: '0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef',
  11155420: '0x8a3170AdbC67233196371226141736E4151e7C26',
  666666666: '0x82cc052d1b17aC554a22A88D5876B56c6b51e95c',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x2844c1BBdA121E9E43105630b9C8310e5c72744b)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x204C6f131bb7F258b2Ea1593f5309911d8E458eD)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x49c38108870e74Cb9420C0991a85D3edd6363F75)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6EeE6060f715257b970700bc2656De21dEdF074C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x19ba78B9cDB05A877718841c574325fdB53601bb)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x731FdBB12944973B500518aea61942381d7e240D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9d369e78e1a682cE0F8d9aD849BeA4FE1c3bD3Ad)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x16843ac25Ccc58Aa7960ba05f61cBB17b36b130A)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0xbc46B4Aa41c055578306820013d4B65fff42711E)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xB3bcD6da1eeB6c97258B3806A853A6dcD3B6C00c)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x8a3170AdbC67233196371226141736E4151e7C26)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x82cc052d1b17aC554a22A88D5876B56c6b51e95c)
 */
export const cfaConfig = { address: cfaAddress, abi: cfaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gda
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superfluidPoolBeacon_',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'bufferDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'newBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BufferAdjusted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newDistributorToPoolFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newTotalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'requestedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'actualAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'InstantDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'connected', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'PoolConnectionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SUPERFLUID_POOL_DEPLOYER_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      {
        name: 'p',
        internalType: 'struct BasicParticle',
        type: 'tuple',
        components: [
          { name: '_settled_at', internalType: 'Time', type: 'uint32' },
          { name: '_flow_rate', internalType: 'FlowRate', type: 'int128' },
          { name: '_settled_value', internalType: 'Value', type: 'int256' },
        ],
      },
      { name: 't', internalType: 'Time', type: 'uint32' },
    ],
    name: 'appendIndexUpdateByPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'doConnect', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
      {
        name: 'poolERC20Metadata',
        internalType: 'struct PoolERC20Metadata',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'decimals', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'createPoolWithCustomERC20Metadata',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'netFlowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'flowHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'claimRecipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'int256', type: 'int256' },
    ],
    name: 'poolSettleClaim',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'rtb', internalType: 'int256', type: 'int256' },
      { name: 'buf', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'buffer', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'superfluidPoolBeacon',
    outputs: [
      {
        name: '',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaAddress = {
  1: '0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842',
  10: '0x68Ae17fa7a31b86F306c383277552fd4813b0d35',
  56: '0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2',
  100: '0xd7992D358A20478c82dDEd98B3D8A9da46e99b82',
  137: '0x961dd5A052741B49B6CBf6759591f9D8576fCFb0',
  8453: '0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa',
  42161: '0x1e299701792a2aF01408B122419d65Fd2dF0Ba02',
  42220: '0x308b7405272d11494716e30C6E972DbF6fb89555',
  43113: '0x51f571D934C59185f13d17301a36c07A2268B814',
  43114: '0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2',
  84532: '0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8',
  534351: '0x93fA9B627eE016990Fe5e654F923aaE8a480a75b',
  534352: '0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28',
  11155111: '0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9',
  11155420: '0xd453d38A001B47271488886532f1CCeAbf0c7eF3',
  666666666: '0x210a01ad187003603B2287F78579ec103Eb70D9B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAAdBB3Eee3Bd080f5353d86DdF1916aCA3fAC842)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x68Ae17fa7a31b86F306c383277552fd4813b0d35)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x3bbFA4C406719424C7f66CD97A8Fe27Af383d3e2)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xd7992D358A20478c82dDEd98B3D8A9da46e99b82)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x961dd5A052741B49B6CBf6759591f9D8576fCFb0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xfE6c87BE05feDB2059d2EC41bA0A09826C9FD7aa)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1e299701792a2aF01408B122419d65Fd2dF0Ba02)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x308b7405272d11494716e30C6E972DbF6fb89555)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x51f571D934C59185f13d17301a36c07A2268B814)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xA7b197cD5b0cEF6d62c4A0a851E3581f5E62e4D2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x53F4f44C813Dc380182d0b2b67fe5832A12B97f8)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x93fA9B627eE016990Fe5e654F923aaE8a480a75b)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x97a9f293d7eD13f3fbD499cE684Ed4F103295a28)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9823364056BcA85Dc3c4a3b96801314D082C8Eb9)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd453d38A001B47271488886532f1CCeAbf0c7eF3)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x210a01ad187003603B2287F78579ec103Eb70D9B)
 */
export const gdaConfig = { address: gdaAddress, abi: gdaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// governance
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe2E14e2C4518cB06c32Cd0818B4C01f53E1Ba653)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xee07D9fce4Cf2a891BC979E9d365929506C2982f)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xaCc7380323681fdb8a0B9F2FE7d69dDFf0664478)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3AD3f7A0965Ce6f9358AD5CCE86Bc2b05F1EE087)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF74390BabA510ec2fE196c2e02B037380d7a6F12)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC2C9a709A6744816b3712D520BD314fe610AEa33)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x4D420e94328bF1AEA1b525FDE9e498ADBe60f9B1)
 */
export const governanceAbi = [
  { type: 'error', inputs: [], name: 'SF_GOV_II_ONLY_OWNER' },
  {
    type: 'error',
    inputs: [],
    name: 'SF_GOV_INVALID_LIQUIDATION_OR_PATRICIAN_PERIOD',
  },
  { type: 'error', inputs: [], name: 'SF_GOV_MUST_BE_CONTRACT' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'factory',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'authorized',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'AppFactoryAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'deployer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'appRegistrationKey',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'expirationTs',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AppRegistrationKeyChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'liquidationPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CFAv1LiquidationPeriodChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ConfigChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'liquidationPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'patricianPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PPPConfigurationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'rewardAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RewardAddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'minimumDeposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SuperTokenMinimumDepositChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'host',
        internalType: 'contract ISuperfluid',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      { name: 'isKeySet', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'forwarder',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'TrustedForwarderChanged',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'factory', internalType: 'address', type: 'address' },
    ],
    name: 'authorizeAppFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'token',
        internalType: 'contract ISuperToken[]',
        type: 'address[]',
      },
      { name: 'newAdmins', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'batchChangeSuperTokenAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'tokens',
        internalType: 'contract ISuperToken[]',
        type: 'address[]',
      },
    ],
    name: 'batchUpdateSuperTokenLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'tokens',
        internalType: 'contract ISuperToken[]',
        type: 'address[]',
      },
      { name: 'tokenLogics', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'batchUpdateSuperTokenLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'tokens',
        internalType: 'contract ISuperToken[]',
        type: 'address[]',
      },
      { name: 'minimumDeposits', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'batchUpdateSuperTokenMinimumDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newAdmin', internalType: 'address', type: 'address' },
    ],
    name: 'changeSuperTokenAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    name: 'clearAppRegistrationKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'clearConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'clearPPPConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'clearRewardAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    name: 'clearSuperTokenMinimumDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'forwarder', internalType: 'address', type: 'address' },
    ],
    name: 'disableTrustedForwarder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'forwarder', internalType: 'address', type: 'address' },
    ],
    name: 'enableTrustedForwarder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getConfigAsAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getConfigAsUint256',
    outputs: [{ name: 'period', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'getPPPConfig',
    outputs: [
      { name: 'liquidationPeriod', internalType: 'uint256', type: 'uint256' },
      { name: 'patricianPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'getRewardAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'getSuperTokenMinimumDeposit',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'factory', internalType: 'address', type: 'address' },
    ],
    name: 'isAuthorizedAppFactory',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'forwarder', internalType: 'address', type: 'address' },
    ],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'agreementClass', internalType: 'address', type: 'address' },
    ],
    name: 'registerAgreementClass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'newGov', internalType: 'address', type: 'address' },
    ],
    name: 'replaceGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
      { name: 'expirationTs', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAppRegistrationKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'liquidationPeriod', internalType: 'uint256', type: 'uint256' },
      { name: 'patricianPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPPPConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'rewardAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setRewardAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setSuperTokenMinimumDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'factory', internalType: 'address', type: 'address' },
    ],
    name: 'unauthorizeAppFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'hostNewLogic', internalType: 'address', type: 'address' },
      {
        name: 'agreementClassNewLogics',
        internalType: 'address[]',
        type: 'address[]',
      },
      {
        name: 'superTokenFactoryNewLogic',
        internalType: 'address',
        type: 'address',
      },
      { name: 'poolBeaconNewLogic', internalType: 'address', type: 'address' },
    ],
    name: 'updateContracts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    name: 'verifyAppRegistrationKey',
    outputs: [
      { name: 'validNow', internalType: 'bool', type: 'bool' },
      { name: 'expirationTs', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe2E14e2C4518cB06c32Cd0818B4C01f53E1Ba653)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xee07D9fce4Cf2a891BC979E9d365929506C2982f)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xaCc7380323681fdb8a0B9F2FE7d69dDFf0664478)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3AD3f7A0965Ce6f9358AD5CCE86Bc2b05F1EE087)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF74390BabA510ec2fE196c2e02B037380d7a6F12)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC2C9a709A6744816b3712D520BD314fe610AEa33)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x4D420e94328bF1AEA1b525FDE9e498ADBe60f9B1)
 */
export const governanceAddress = {
  1: '0xe2E14e2C4518cB06c32Cd0818B4C01f53E1Ba653',
  10: '0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D',
  56: '0xee07D9fce4Cf2a891BC979E9d365929506C2982f',
  100: '0xaCc7380323681fdb8a0B9F2FE7d69dDFf0664478',
  137: '0x3AD3f7A0965Ce6f9358AD5CCE86Bc2b05F1EE087',
  8453: '0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D',
  42161: '0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D',
  42220: '0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D',
  43114: '0xF74390BabA510ec2fE196c2e02B037380d7a6F12',
  534352: '0xC2C9a709A6744816b3712D520BD314fe610AEa33',
  666666666: '0x4D420e94328bF1AEA1b525FDE9e498ADBe60f9B1',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xe2E14e2C4518cB06c32Cd0818B4C01f53E1Ba653)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xee07D9fce4Cf2a891BC979E9d365929506C2982f)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xaCc7380323681fdb8a0B9F2FE7d69dDFf0664478)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3AD3f7A0965Ce6f9358AD5CCE86Bc2b05F1EE087)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF74390BabA510ec2fE196c2e02B037380d7a6F12)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xC2C9a709A6744816b3712D520BD314fe610AEa33)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x4D420e94328bF1AEA1b525FDE9e498ADBe60f9B1)
 */
export const governanceConfig = {
  address: governanceAddress,
  abi: governanceAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// host
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'nonUpgradable', internalType: 'bool', type: 'bool' },
      { name: 'appWhiteListingEnabled', internalType: 'bool', type: 'bool' },
      { name: 'callbackGasLimit', internalType: 'uint64', type: 'uint64' },
      {
        name: 'simpleForwarderAddress',
        internalType: 'address',
        type: 'address',
      },
      {
        name: 'erc2771ForwarderAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: 'simpleAclAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_CALLBACK_IS_NOT_ACTION' },
  { type: 'error', inputs: [], name: 'HOST_AGREEMENT_IS_NOT_REGISTERED' },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_AGREEMENT_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CALL_APP_ACTION_WITH_CTX_FROM_WRONG_ADDRESS',
  },
  {
    type: 'error',
    inputs: [],
    name: 'HOST_CANNOT_DOWNGRADE_TO_NON_UPGRADEABLE',
  },
  { type: 'error', inputs: [], name: 'HOST_INVALID_CONFIG_WORD' },
  { type: 'error', inputs: [], name: 'HOST_MAX_256_AGREEMENTS' },
  { type: 'error', inputs: [], name: 'HOST_MUST_BE_CONTRACT' },
  { type: 'error', inputs: [], name: 'HOST_NEED_MORE_GAS' },
  { type: 'error', inputs: [], name: 'HOST_NON_UPGRADEABLE' },
  { type: 'error', inputs: [], name: 'HOST_NON_ZERO_LENGTH_PLACEHOLDER_CTX' },
  { type: 'error', inputs: [], name: 'HOST_NOT_A_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_NO_APP_REGISTRATION_PERMISSION' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_GOVERNANCE' },
  { type: 'error', inputs: [], name: 'HOST_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'HOST_RECEIVER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SENDER_IS_NOT_SUPER_APP' },
  { type: 'error', inputs: [], name: 'HOST_SOURCE_APP_NEEDS_HIGHER_APP_LEVEL' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_ALREADY_REGISTERED' },
  { type: 'error', inputs: [], name: 'HOST_SUPER_APP_IS_JAILED' },
  { type: 'error', inputs: [], name: 'HOST_UNKNOWN_BATCH_CALL_OPERATION_TYPE' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AgreementClassRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AgreementClassUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'app',
        internalType: 'contract ISuperApp',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AppRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GovernanceReplaced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'app',
        internalType: 'contract ISuperApp',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reason',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Jail',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beaconProxy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newBeaconLogic',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolBeaconLogicUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newFactory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SuperTokenFactoryUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'code',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SuperTokenLogicUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ACL_SUPERAPP_REGISTRATION_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'APP_WHITE_LISTING_ENABLED',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CALLBACK_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_APP_CALLBACK_LEVEL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_NUM_AGREEMENTS',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NON_UPGRADABLE_DEPLOYMENT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SIMPLE_FORWARDER',
    outputs: [
      { name: '', internalType: 'contract SimpleForwarder', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'bitmap', internalType: 'uint256', type: 'uint256' },
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addToAgreementClassesBitmap',
    outputs: [{ name: 'newBitmap', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'targetApp',
        internalType: 'contract ISuperApp',
        type: 'address',
      },
    ],
    name: 'allowCompositeApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'appCreditUsedDelta', internalType: 'int256', type: 'int256' },
    ],
    name: 'appCallbackPop',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'appCreditGranted', internalType: 'uint256', type: 'uint256' },
      { name: 'appCreditUsed', internalType: 'int256', type: 'int256' },
      {
        name: 'appCreditToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
    ],
    name: 'appCallbackPush',
    outputs: [{ name: 'appCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'operations',
        internalType: 'struct ISuperfluid.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'operationType', internalType: 'uint32', type: 'uint32' },
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'batchCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAgreement',
    outputs: [{ name: 'returnedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAgreementWithContext',
    outputs: [
      { name: 'newCtx', internalType: 'bytes', type: 'bytes' },
      { name: 'returnedData', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppAction',
    outputs: [{ name: 'returnedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppActionWithContext',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'isTermination', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppAfterCallback',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'callData', internalType: 'bytes', type: 'bytes' },
      { name: 'isTermination', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callAppBeforeCallback',
    outputs: [{ name: 'cbdata', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newAdmin', internalType: 'address', type: 'address' },
    ],
    name: 'changeSuperTokenAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'appCreditUsedMore', internalType: 'int256', type: 'int256' },
    ],
    name: 'ctxUseCredit',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'ctx', internalType: 'bytes', type: 'bytes' }],
    name: 'decodeCtx',
    outputs: [
      {
        name: 'context',
        internalType: 'struct ISuperfluid.Context',
        type: 'tuple',
        components: [
          { name: 'appCallbackLevel', internalType: 'uint8', type: 'uint8' },
          { name: 'callType', internalType: 'uint8', type: 'uint8' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'msgSender', internalType: 'address', type: 'address' },
          { name: 'agreementSelector', internalType: 'bytes4', type: 'bytes4' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
          {
            name: 'appCreditGranted',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'appCreditWantedDeprecated',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'appCreditUsed', internalType: 'int256', type: 'int256' },
          { name: 'appAddress', internalType: 'address', type: 'address' },
          {
            name: 'appCreditToken',
            internalType: 'contract ISuperfluidToken',
            type: 'address',
          },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'operations',
        internalType: 'struct ISuperfluid.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'operationType', internalType: 'uint32', type: 'uint32' },
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'forwardBatchCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getAgreementClass',
    outputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'appAddr', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'getAppCallbackLevel',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'getAppManifest',
    outputs: [
      { name: 'isSuperApp', internalType: 'bool', type: 'bool' },
      { name: 'isJailed', internalType: 'bool', type: 'bool' },
      { name: 'noopMask', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getERC2771Forwarder',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getGovernance',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNow',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSimpleACL',
    outputs: [
      { name: '', internalType: 'contract IAccessControl', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperTokenFactory',
    outputs: [
      {
        name: 'factory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperTokenFactoryLogic',
    outputs: [{ name: 'logic', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'gov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'isAgreementClassListed',
    outputs: [{ name: 'yes', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isAgreementTypeListed',
    outputs: [{ name: 'yes', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'isApp',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
    ],
    name: 'isAppJailed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      {
        name: 'targetApp',
        internalType: 'contract ISuperApp',
        type: 'address',
      },
    ],
    name: 'isCompositeAppAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'ctx', internalType: 'bytes', type: 'bytes' }],
    name: 'isCtxValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'reason', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'jailApp',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'bitmap', internalType: 'uint256', type: 'uint256' }],
    name: 'mapAgreementClasses',
    outputs: [
      {
        name: 'agreementClasses',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClassLogic',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'registerAgreementClass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'configWord', internalType: 'uint256', type: 'uint256' }],
    name: 'registerApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerApp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'app', internalType: 'contract ISuperApp', type: 'address' },
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerAppByFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'configWord', internalType: 'uint256', type: 'uint256' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    name: 'registerAppWithKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'bitmap', internalType: 'uint256', type: 'uint256' },
      { name: 'agreementType', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeFromAgreementClassesBitmap',
    outputs: [{ name: 'newBitmap', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newGov',
        internalType: 'contract ISuperfluidGovernance',
        type: 'address',
      },
    ],
    name: 'replaceGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'agreementClassLogic',
        internalType: 'contract ISuperAgreement',
        type: 'address',
      },
    ],
    name: 'updateAgreementClass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newLogic', internalType: 'address', type: 'address' }],
    name: 'updatePoolBeaconLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newFactory',
        internalType: 'contract ISuperTokenFactory',
        type: 'address',
      },
    ],
    name: 'updateSuperTokenFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newLogicOverride', internalType: 'address', type: 'address' },
    ],
    name: 'updateSuperTokenLogic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'versionRecipient',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'SUPER_TOKEN_PERMIT_EXPIRED_SIGNATURE',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'SUPER_TOKEN_PERMIT_INVALID_SIGNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_INVALID_TIME' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS' },
  { type: 'error', inputs: [], name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_SELF_TRANSFER_NOT_ALLOWED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'IDA_INDEX_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_SHOULD_GROW' },
  { type: 'error', inputs: [], name: 'IDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'IDA_OPERATION_NOT_ALLOWED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_ALREADY_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_IS_NOT_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_ZERO_ADDRESS_SUBSCRIBER' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostAddress = {
  1: '0x4E583d9390082B65Bef884b629DFA426114CED6d',
  10: '0x567c4B141ED61923967cA25Ef4906C8781069a10',
  56: '0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E',
  100: '0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7',
  137: '0x3E14dC1b13c488a8d5D310918780c983bD5982E7',
  8453: '0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74',
  42161: '0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192',
  42220: '0xA4Ff07cF81C02CFD356184879D953970cA957585',
  43113: '0x85Fe79b998509B77BF10A8BD4001D58475D29386',
  43114: '0x60377C7016E4cdB03C87EF474896C11cB560752C',
  84532: '0x109412E3C84f0539b43d39dB691B08c90f58dC7c',
  534351: '0x42b05a6016B9eED232E13fd56a8F0725693DBF8e',
  534352: '0x0F86a21F6216c061B222c224e315d9FC34520bb7',
  11155111: '0x109412E3C84f0539b43d39dB691B08c90f58dC7c',
  11155420: '0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005',
  666666666: '0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4E583d9390082B65Bef884b629DFA426114CED6d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x567c4B141ED61923967cA25Ef4906C8781069a10)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x3E14dC1b13c488a8d5D310918780c983bD5982E7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4C073B3baB6d8826b8C5b229f3cfdC1eC6E47E74)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0xA4Ff07cF81C02CFD356184879D953970cA957585)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x85Fe79b998509B77BF10A8BD4001D58475D29386)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x60377C7016E4cdB03C87EF474896C11cB560752C)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x42b05a6016B9eED232E13fd56a8F0725693DBF8e)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x0F86a21F6216c061B222c224e315d9FC34520bb7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x109412E3C84f0539b43d39dB691B08c90f58dC7c)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xd399e2Fb5f4cf3722a11F65b88FAB6B2B8621005)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xc1314EdcD7e478C831a7a24169F7dEADB2646eD2)
 */
export const hostConfig = { address: hostAddress, abi: hostAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ida
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbCF9cfA8Da20B591790dF27DE65C1254Bf91563d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xc4ce5118C3B20950ee288f086cb7FC166d222D4c)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x594ed9Cd773584B645aC1F5B11020d3b32cDF07d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x7888ac96F987Eb10E291F34851ae0266eF912081)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x66DF3f8e14CF870361378d8F61356D15d9F425C4)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2319C7e07EB063340D2a0E36709B0D65fda75986)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x26747Fe93fAC8bF28E1e24A558a2bC7E4d9846cA)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xA44dEC7A0Dde1a56AeDe4143C1ef89cf5d956782)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x1fA9fFe8Db73F701454B195151Db4Abb18423cf2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x296556422F44F19E5d216CBf98348A03BDc445E7)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x4112557F0F228A18654d3C39599421DE9F61144d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x51BDA2C5F627d456E282257710F4A4b6Eb094A52)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xb19CE3e7DA9FbAf9De2526BD662A82f26421A53E)
 */
export const idaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_INDEX_SHOULD_GROW' },
  { type: 'error', inputs: [], name: 'IDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'IDA_OPERATION_NOT_ALLOWED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_ALREADY_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'IDA_SUBSCRIPTION_IS_NOT_APPROVED' },
  { type: 'error', inputs: [], name: 'IDA_ZERO_ADDRESS_SUBSCRIBER' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'IndexCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'IndexDistributionClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'IndexSubscribed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'units',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'IndexUnitsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'IndexUnsubscribed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
      {
        name: 'oldIndexValue',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'newIndexValue',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'totalUnitsPending',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'totalUnitsApproved',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'IndexUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'SubscriptionApproved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SubscriptionDistributionClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'SubscriptionRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'subscriber',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'publisher',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'indexId',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'units',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'SubscriptionUnitsUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_NUM_SUBSCRIPTIONS',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'approveSubscription',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'calculateDistribution',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'newIndexValue', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'subscriber', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claim',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createIndex',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'subscriber', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteSubscription',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getIndex',
    outputs: [
      { name: 'exist', internalType: 'bool', type: 'bool' },
      { name: 'indexValue', internalType: 'uint128', type: 'uint128' },
      { name: 'totalUnitsApproved', internalType: 'uint128', type: 'uint128' },
      { name: 'totalUnitsPending', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'subscriber', internalType: 'address', type: 'address' },
    ],
    name: 'getSubscription',
    outputs: [
      { name: 'exist', internalType: 'bool', type: 'bool' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
      { name: 'units', internalType: 'uint128', type: 'uint128' },
      { name: 'pendingDistribution', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'agreementId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getSubscriptionByID',
    outputs: [
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
      { name: 'units', internalType: 'uint128', type: 'uint128' },
      { name: 'pendingDistribution', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'subscriber', internalType: 'address', type: 'address' },
    ],
    name: 'listSubscriptions',
    outputs: [
      { name: 'publishers', internalType: 'address[]', type: 'address[]' },
      { name: 'indexIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'unitsList', internalType: 'uint128[]', type: 'uint128[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'dynamicBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'publisher', internalType: 'address', type: 'address' },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'revokeSubscription',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'indexValue', internalType: 'uint128', type: 'uint128' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateIndex',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'indexId', internalType: 'uint32', type: 'uint32' },
      { name: 'subscriber', internalType: 'address', type: 'address' },
      { name: 'units', internalType: 'uint128', type: 'uint128' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateSubscription',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbCF9cfA8Da20B591790dF27DE65C1254Bf91563d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xc4ce5118C3B20950ee288f086cb7FC166d222D4c)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x594ed9Cd773584B645aC1F5B11020d3b32cDF07d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x7888ac96F987Eb10E291F34851ae0266eF912081)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x66DF3f8e14CF870361378d8F61356D15d9F425C4)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2319C7e07EB063340D2a0E36709B0D65fda75986)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x26747Fe93fAC8bF28E1e24A558a2bC7E4d9846cA)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xA44dEC7A0Dde1a56AeDe4143C1ef89cf5d956782)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x1fA9fFe8Db73F701454B195151Db4Abb18423cf2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x296556422F44F19E5d216CBf98348A03BDc445E7)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x4112557F0F228A18654d3C39599421DE9F61144d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x51BDA2C5F627d456E282257710F4A4b6Eb094A52)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xb19CE3e7DA9FbAf9De2526BD662A82f26421A53E)
 */
export const idaAddress = {
  1: '0xbCF9cfA8Da20B591790dF27DE65C1254Bf91563d',
  10: '0xc4ce5118C3B20950ee288f086cb7FC166d222D4c',
  56: '0x594ed9Cd773584B645aC1F5B11020d3b32cDF07d',
  100: '0x7888ac96F987Eb10E291F34851ae0266eF912081',
  137: '0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1',
  8453: '0x66DF3f8e14CF870361378d8F61356D15d9F425C4',
  42161: '0x2319C7e07EB063340D2a0E36709B0D65fda75986',
  42220: '0x26747Fe93fAC8bF28E1e24A558a2bC7E4d9846cA',
  43113: '0xA44dEC7A0Dde1a56AeDe4143C1ef89cf5d956782',
  43114: '0x1fA9fFe8Db73F701454B195151Db4Abb18423cf2',
  84532: '0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea',
  534351: '0x296556422F44F19E5d216CBf98348A03BDc445E7',
  534352: '0x4112557F0F228A18654d3C39599421DE9F61144d',
  11155111: '0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea',
  11155420: '0x51BDA2C5F627d456E282257710F4A4b6Eb094A52',
  666666666: '0xb19CE3e7DA9FbAf9De2526BD662A82f26421A53E',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbCF9cfA8Da20B591790dF27DE65C1254Bf91563d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xc4ce5118C3B20950ee288f086cb7FC166d222D4c)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x594ed9Cd773584B645aC1F5B11020d3b32cDF07d)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x7888ac96F987Eb10E291F34851ae0266eF912081)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x66DF3f8e14CF870361378d8F61356D15d9F425C4)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2319C7e07EB063340D2a0E36709B0D65fda75986)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x26747Fe93fAC8bF28E1e24A558a2bC7E4d9846cA)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xA44dEC7A0Dde1a56AeDe4143C1ef89cf5d956782)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x1fA9fFe8Db73F701454B195151Db4Abb18423cf2)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x296556422F44F19E5d216CBf98348A03BDc445E7)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x4112557F0F228A18654d3C39599421DE9F61144d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9358C7dCCc6B8CA6F526311e8ac266F8C861B7ea)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x51BDA2C5F627d456E282257710F4A4b6Eb094A52)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0xb19CE3e7DA9FbAf9De2526BD662A82f26421A53E)
 */
export const idaConfig = { address: idaAddress, abi: idaAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// superTokenFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x8276469A443D5C6B7146BED45e2abCaD3B6adad9)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x8bde47397301F0Cd31b9000032fD517a39c946Eb)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x23410e2659380784498509698ed70E414D384880)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1C92042426B6bAAe497bEf461B6d8342D03aEc92)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x464AADdBB2B80f3Cb666522EB7381bE610F638b4)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x7447E94Dfe3d804a9f46Bf12838d467c912C8F6C)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x87560833d59Be057aFc63cFFa3fc531589Ba428F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x254C2e152E8602839D288A7bccdf3d0974597193)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xfcF0489488397332579f35b0F711BE570Da0E8f5)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x184D999ea60e9b16fE4cCC1f756422114E9B663f)
 */
export const superTokenFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superTokenLogic',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      {
        name: 'constantOutflowNFTLogic',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
      {
        name: 'constantInflowNFTLogic',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
      {
        name: 'poolAdminNFTLogic',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
      },
      {
        name: 'poolMemberNFTLogic',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_FACTORY_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_FACTORY_DOES_NOT_EXIST' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_FACTORY_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_FACTORY_UNINITIALIZED' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_FACTORY_ZERO_ADDRESS' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CustomSuperTokenCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SuperTokenCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenLogic',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SuperTokenLogicCreated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT_LOGIC',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_OUTFLOW_NFT_LOGIC',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT_LOGIC',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT_LOGIC',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_SUPER_TOKEN_LOGIC',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_underlyingToken', internalType: 'address', type: 'address' },
    ],
    name: 'computeCanonicalERC20WrapperAddress',
    outputs: [
      { name: 'superTokenAddress', internalType: 'address', type: 'address' },
      { name: 'isDeployed', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_underlyingToken',
        internalType: 'contract IERC20Metadata',
        type: 'address',
      },
    ],
    name: 'createCanonicalERC20Wrapper',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20Metadata',
        type: 'address',
      },
      {
        name: 'upgradability',
        internalType: 'enum ISuperTokenFactory.Upgradability',
        type: 'uint8',
      },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'createERC20Wrapper',
    outputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20Metadata',
        type: 'address',
      },
      {
        name: 'upgradability',
        internalType: 'enum ISuperTokenFactory.Upgradability',
        type: 'uint8',
      },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'createERC20Wrapper',
    outputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20Metadata',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      {
        name: 'upgradability',
        internalType: 'enum ISuperTokenFactory.Upgradability',
        type: 'uint8',
      },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'createERC20Wrapper',
    outputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20Metadata',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      {
        name: 'upgradability',
        internalType: 'enum ISuperTokenFactory.Upgradability',
        type: 'uint8',
      },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'createERC20Wrapper',
    outputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_underlyingTokenAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'getCanonicalERC20Wrapper',
    outputs: [
      { name: 'superTokenAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSuperTokenLogic',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_data',
        internalType: 'struct SuperTokenFactoryBase.InitializeData[]',
        type: 'tuple[]',
        components: [
          { name: 'underlyingToken', internalType: 'address', type: 'address' },
          { name: 'superToken', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'initializeCanonicalWrapperSuperTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'customSuperTokenProxy',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'initializeCustomSuperToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x8276469A443D5C6B7146BED45e2abCaD3B6adad9)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x8bde47397301F0Cd31b9000032fD517a39c946Eb)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x23410e2659380784498509698ed70E414D384880)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1C92042426B6bAAe497bEf461B6d8342D03aEc92)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x464AADdBB2B80f3Cb666522EB7381bE610F638b4)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x7447E94Dfe3d804a9f46Bf12838d467c912C8F6C)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x87560833d59Be057aFc63cFFa3fc531589Ba428F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x254C2e152E8602839D288A7bccdf3d0974597193)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xfcF0489488397332579f35b0F711BE570Da0E8f5)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x184D999ea60e9b16fE4cCC1f756422114E9B663f)
 */
export const superTokenFactoryAddress = {
  1: '0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1',
  10: '0x8276469A443D5C6B7146BED45e2abCaD3B6adad9',
  56: '0x8bde47397301F0Cd31b9000032fD517a39c946Eb',
  100: '0x23410e2659380784498509698ed70E414D384880',
  137: '0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34',
  8453: '0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3',
  42161: '0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6',
  42220: '0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9',
  43113: '0x1C92042426B6bAAe497bEf461B6d8342D03aEc92',
  43114: '0x464AADdBB2B80f3Cb666522EB7381bE610F638b4',
  84532: '0x7447E94Dfe3d804a9f46Bf12838d467c912C8F6C',
  534351: '0x87560833d59Be057aFc63cFFa3fc531589Ba428F',
  534352: '0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673',
  11155111: '0x254C2e152E8602839D288A7bccdf3d0974597193',
  11155420: '0xfcF0489488397332579f35b0F711BE570Da0E8f5',
  666666666: '0x184D999ea60e9b16fE4cCC1f756422114E9B663f',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x8276469A443D5C6B7146BED45e2abCaD3B6adad9)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x8bde47397301F0Cd31b9000032fD517a39c946Eb)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x23410e2659380784498509698ed70E414D384880)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x36be86dEe6BC726Ed0Cbd170ccD2F21760BC73D9)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1C92042426B6bAAe497bEf461B6d8342D03aEc92)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x464AADdBB2B80f3Cb666522EB7381bE610F638b4)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x7447E94Dfe3d804a9f46Bf12838d467c912C8F6C)
 * - [__View Contract on Scroll Sepolia Scrollscan__](https://sepolia.scrollscan.com/address/0x87560833d59Be057aFc63cFFa3fc531589Ba428F)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0xacFBED2bC9344C158DD3dC229b84Bd7220e7c673)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x254C2e152E8602839D288A7bccdf3d0974597193)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xfcF0489488397332579f35b0F711BE570Da0E8f5)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x184D999ea60e9b16fE4cCC1f756422114E9B663f)
 */
export const superTokenFactoryConfig = {
  address: superTokenFactoryAddress,
  abi: superTokenFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// toga
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8B5a2CF69a56d7F8Fa027edcA23594cdDF544dDc)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xA3c8502187fD7a7118eAD59dc811281448946C8f)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA87F76e99f6C8Ff8996d14f550ceF47f193D9A09)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9bCa3a623e7b2e248510d88B2894F54898d88F91)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3D9A67D5ec1E72CEcA8157e028855056786b6159)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x38ed5512Ac11926bB697F4CF4eE0DD04358E2E7e)
 */
export const togaAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host_', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'minBondDuration_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'additionalBond',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BondIncreased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'exitRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'ExitRateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperToken',
        type: 'address',
        indexed: true,
      },
      { name: 'pic', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'bond',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'exitRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'NewPIC',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'newExitRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'changeExitRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
    ],
    name: 'getCurrentPIC',
    outputs: [{ name: 'pic', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
    ],
    name: 'getCurrentPICInfo',
    outputs: [
      { name: 'pic', internalType: 'address', type: 'address' },
      { name: 'bond', internalType: 'uint256', type: 'uint256' },
      { name: 'exitRate', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'bondAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getDefaultExitRateFor',
    outputs: [{ name: 'exitRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'bondAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMaxExitRateFor',
    outputs: [{ name: 'exitRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minBondDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'tokensReceived',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8B5a2CF69a56d7F8Fa027edcA23594cdDF544dDc)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xA3c8502187fD7a7118eAD59dc811281448946C8f)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA87F76e99f6C8Ff8996d14f550ceF47f193D9A09)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9bCa3a623e7b2e248510d88B2894F54898d88F91)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3D9A67D5ec1E72CEcA8157e028855056786b6159)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x38ed5512Ac11926bB697F4CF4eE0DD04358E2E7e)
 */
export const togaAddress = {
  1: '0x8B5a2CF69a56d7F8Fa027edcA23594cdDF544dDc',
  10: '0xA3c8502187fD7a7118eAD59dc811281448946C8f',
  56: '0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF',
  100: '0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22',
  137: '0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7',
  8453: '0xA87F76e99f6C8Ff8996d14f550ceF47f193D9A09',
  42161: '0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF',
  42220: '0x9bCa3a623e7b2e248510d88B2894F54898d88F91',
  43114: '0x3D9A67D5ec1E72CEcA8157e028855056786b6159',
  534352: '0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB',
  666666666: '0x38ed5512Ac11926bB697F4CF4eE0DD04358E2E7e',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x8B5a2CF69a56d7F8Fa027edcA23594cdDF544dDc)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xA3c8502187fD7a7118eAD59dc811281448946C8f)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA87F76e99f6C8Ff8996d14f550ceF47f193D9A09)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF)
 * - [__View Contract on Celo Celo Explorer__](https://celoscan.io/address/0x9bCa3a623e7b2e248510d88B2894F54898d88F91)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3D9A67D5ec1E72CEcA8157e028855056786b6159)
 * - [__View Contract on Scroll Scrollscan__](https://scrollscan.com/address/0x1bF9D75d50fD828a93f69ECB06f2B85767792CEB)
 * - [__View Contract on Degen Degen Chain Explorer__](https://explorer.degen.tips/address/0x38ed5512Ac11926bB697F4CF4eE0DD04358E2E7e)
 */
export const togaConfig = { address: togaAddress, abi: togaAbi } as const
