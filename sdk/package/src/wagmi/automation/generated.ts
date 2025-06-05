import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// autoWrapManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const autoWrapManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_cfa', internalType: 'address', type: 'address' },
      { name: '_minLower', internalType: 'uint64', type: 'uint64' },
      { name: '_minUpper', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'limitGiven', internalType: 'uint64', type: 'uint64' },
      { name: 'minLimit', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'InsufficientLimits',
  },
  {
    type: 'error',
    inputs: [
      { name: 'expirationTimeGiven', internalType: 'uint64', type: 'uint64' },
      { name: 'timeNow', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidExpirationTime',
  },
  {
    type: 'error',
    inputs: [{ name: 'strategy', internalType: 'address', type: 'address' }],
    name: 'InvalidStrategy',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'expectedCaller', internalType: 'address', type: 'address' },
    ],
    name: 'UnauthorizedCaller',
  },
  {
    type: 'error',
    inputs: [{ name: 'superToken', internalType: 'address', type: 'address' }],
    name: 'UnsupportedSuperToken',
  },
  {
    type: 'error',
    inputs: [{ name: 'index', internalType: 'bytes32', type: 'bytes32' }],
    name: 'WrapNotRequired',
  },
  {
    type: 'error',
    inputs: [
      { name: 'lowerLimit', internalType: 'uint64', type: 'uint64' },
      { name: 'upperLimit', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'WrongLimits',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'strategy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AddedApprovedStrategy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lowerLimit',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'upperLimit',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'LimitsChanged',
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
        name: 'strategy',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RemovedApprovedStrategy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'wrapAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WrapExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'strategy',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'liquidityToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'expiry',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lowerLimit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'upperLimit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WrapScheduleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'strategy',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'liquidityToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'WrapScheduleDeleted',
  },
  {
    type: 'function',
    inputs: [{ name: 'strategy', internalType: 'address', type: 'address' }],
    name: 'addApprovedStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'approvedStrategies',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cfaV1',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantFlowAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
    ],
    name: 'checkWrap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'bytes32', type: 'bytes32' }],
    name: 'checkWrapByIndex',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'strategy', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
      { name: 'expiry', internalType: 'uint64', type: 'uint64' },
      { name: 'lowerLimit', internalType: 'uint64', type: 'uint64' },
      { name: 'upperLimit', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'createWrapSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
    ],
    name: 'deleteWrapSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteWrapScheduleByIndex',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
    ],
    name: 'executeWrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'bytes32', type: 'bytes32' }],
    name: 'executeWrapByIndex',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
    ],
    name: 'getWrapSchedule',
    outputs: [
      {
        name: '',
        internalType: 'struct IManager.WrapSchedule',
        type: 'tuple',
        components: [
          { name: 'user', internalType: 'address', type: 'address' },
          {
            name: 'superToken',
            internalType: 'contract ISuperToken',
            type: 'address',
          },
          {
            name: 'strategy',
            internalType: 'contract IStrategy',
            type: 'address',
          },
          { name: 'liquidityToken', internalType: 'address', type: 'address' },
          { name: 'expiry', internalType: 'uint64', type: 'uint64' },
          { name: 'lowerLimit', internalType: 'uint64', type: 'uint64' },
          { name: 'upperLimit', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getWrapScheduleByIndex',
    outputs: [
      {
        name: '',
        internalType: 'struct IManager.WrapSchedule',
        type: 'tuple',
        components: [
          { name: 'user', internalType: 'address', type: 'address' },
          {
            name: 'superToken',
            internalType: 'contract ISuperToken',
            type: 'address',
          },
          {
            name: 'strategy',
            internalType: 'contract IStrategy',
            type: 'address',
          },
          { name: 'liquidityToken', internalType: 'address', type: 'address' },
          { name: 'expiry', internalType: 'uint64', type: 'uint64' },
          { name: 'lowerLimit', internalType: 'uint64', type: 'uint64' },
          { name: 'upperLimit', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'liquidityToken', internalType: 'address', type: 'address' },
    ],
    name: 'getWrapScheduleIndex',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minLower',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minUpper',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
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
    inputs: [{ name: 'strategy', internalType: 'address', type: 'address' }],
    name: 'removeApprovedStrategy',
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
      { name: 'lowerLimit', internalType: 'uint64', type: 'uint64' },
      { name: 'upperLimit', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setLimits',
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const autoWrapManagerAddress = {
  1: '0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1',
  10: '0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23',
  56: '0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325',
  100: '0x8082e58681350876aFe8f52d3Bf8672034A03Db0',
  137: '0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32',
  8453: '0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9',
  42161: '0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272',
  43113: '0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1',
  43114: '0x8082e58681350876aFe8f52d3Bf8672034A03Db0',
  11155420: '0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const autoWrapManagerConfig = {
  address: autoWrapManagerAddress,
  abi: autoWrapManagerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// autoWrapStrategy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const autoWrapStrategyAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_manager', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'expectedCaller', internalType: 'address', type: 'address' },
    ],
    name: 'UnauthorizedCaller',
  },
  {
    type: 'error',
    inputs: [{ name: 'superToken', internalType: 'address', type: 'address' }],
    name: 'UnsupportedSuperToken',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'EmergencyWithdrawInitiated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'manager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ManagerChanged',
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
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superTokenAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Wrapped',
  },
  {
    type: 'function',
    inputs: [{ name: 'newManager', internalType: 'address', type: 'address' }],
    name: 'changeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'emergencyWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    name: 'isSupportedSuperToken',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    name: 'renounceOwnership',
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
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'superTokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'wrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const autoWrapStrategyAddress = {
  1: '0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d',
  10: '0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4',
  56: '0x9e308cb079ae130790F604b1030cDf386670f199',
  100: '0x51FBAbD31A615E14b1bC12E9d887f60997264a4E',
  137: '0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b',
  8453: '0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d',
  42161: '0x342076aA957B0ec8bC1d3893af719b288eA31e61',
  43113: '0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d',
  43114: '0x51FBAbD31A615E14b1bC12E9d887f60997264a4E',
  11155420: '0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const autoWrapStrategyConfig = {
  address: autoWrapStrategyAddress,
  abi: autoWrapStrategyAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// flowScheduler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const flowSchedulerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccountInvalid' },
  { type: 'error', inputs: [], name: 'HostInvalid' },
  { type: 'error', inputs: [], name: 'ScheduleInvalid' },
  { type: 'error', inputs: [], name: 'TimeWindowInvalid' },
  { type: 'error', inputs: [], name: 'UserDataInvalid' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'startDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'startMaxDelay',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'startAmount',
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
    name: 'CreateFlowExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
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
    name: 'DeleteFlowExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'startDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'startMaxDelay',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'startAmount',
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
    name: 'FlowScheduleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
    ],
    name: 'FlowScheduleDeleted',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cfaV1',
    outputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'cfa',
        internalType: 'contract IConstantFlowAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'startMaxDelay', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'startAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlowSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlowSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'executeCreateFlow',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'executeDeleteFlow',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'flowSchedules',
    outputs: [
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'startMaxDelay', internalType: 'uint32', type: 'uint32' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'startAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowSchedule',
    outputs: [
      {
        name: '',
        internalType: 'struct IFlowScheduler.FlowSchedule',
        type: 'tuple',
        components: [
          { name: 'startDate', internalType: 'uint32', type: 'uint32' },
          { name: 'startMaxDelay', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'startAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'userData', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const flowSchedulerAddress = {
  1: '0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA',
  10: '0x55c8fc400833eEa791087cF343Ff2409A39DeBcC',
  56: '0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B',
  100: '0x9cC7fc484fF588926149577e9330fA5b2cA74336',
  137: '0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D',
  8453: '0xC72CEd15204d02183c83fEbb918b183E400811Ee',
  42161: '0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1',
  43114: '0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5',
  11155420: '0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const flowSchedulerConfig = {
  address: flowSchedulerAddress,
  abi: flowSchedulerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// legacyVestingSchedulerV1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const legacyVestingSchedulerV1Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'registrationKey', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccountInvalid' },
  { type: 'error', inputs: [], name: 'CliffInvalid' },
  { type: 'error', inputs: [], name: 'FlowRateInvalid' },
  { type: 'error', inputs: [], name: 'HostInvalid' },
  { type: 'error', inputs: [], name: 'ScheduleAlreadyExists' },
  { type: 'error', inputs: [], name: 'ScheduleDoesNotExist' },
  { type: 'error', inputs: [], name: 'ScheduleNotFlowing' },
  { type: 'error', inputs: [], name: 'TimeWindowInvalid' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'cliffAndFlowDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'flowDelayCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VestingCliffAndFlowExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'earlyEndCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'didCompensationFail',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'VestingEndExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'VestingEndFailed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'startDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VestingScheduleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
    ],
    name: 'VestingScheduleDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'oldEndDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'VestingScheduleUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'END_DATE_VALID_BEFORE',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_VESTING_DURATION',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'START_DATE_VALID_AFTER',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cfaV1',
    outputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'cfa',
        internalType: 'contract IConstantFlowAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeCliffAndFlow',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeEndVesting',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'supertoken', internalType: 'address', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getVestingSchedule',
    outputs: [
      {
        name: '',
        internalType: 'struct IVestingScheduler.VestingSchedule',
        type: 'tuple',
        components: [
          { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'vestingSchedules',
    outputs: [
      { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const legacyVestingSchedulerV1Address = {
  1: '0x39D5cBBa9adEBc25085a3918d36D5325546C001B',
  10: '0x65377d4dfE9c01639A41952B5083D58964782892',
  56: '0x9B91c27f78376383003C6A12Ad12B341d016C5b9',
  100: '0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D',
  137: '0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c',
  8453: '0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2',
  42161: '0x55c8fc400833eEa791087cF343Ff2409A39DeBcC',
  43114: '0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1',
  11155420: '0x27444c0235a4D921F3106475faeba0B5e7ABDD7a',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const legacyVestingSchedulerV1Config = {
  address: legacyVestingSchedulerV1Address,
  abi: legacyVestingSchedulerV1Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// legacyVestingSchedulerV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const legacyVestingSchedulerV2Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccountInvalid' },
  { type: 'error', inputs: [], name: 'AlreadyExecuted' },
  { type: 'error', inputs: [], name: 'CannotClaimScheduleOnBehalf' },
  { type: 'error', inputs: [], name: 'CliffInvalid' },
  { type: 'error', inputs: [], name: 'FlowRateInvalid' },
  { type: 'error', inputs: [], name: 'HostInvalid' },
  { type: 'error', inputs: [], name: 'ScheduleAlreadyExists' },
  { type: 'error', inputs: [], name: 'ScheduleDoesNotExist' },
  { type: 'error', inputs: [], name: 'ScheduleNotClaimed' },
  { type: 'error', inputs: [], name: 'ScheduleNotFlowing' },
  { type: 'error', inputs: [], name: 'TimeWindowInvalid' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'VestingClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'cliffAndFlowDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'flowDelayCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VestingCliffAndFlowExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'earlyEndCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'didCompensationFail',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'VestingEndExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'VestingEndFailed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'startDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'claimValidityDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'remainderAmount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'VestingScheduleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
    ],
    name: 'VestingScheduleDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'oldEndDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'remainderAmount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'VestingScheduleUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'END_DATE_VALID_BEFORE',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_VESTING_DURATION',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'START_DATE_VALID_AFTER',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'afterAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementCreated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementTerminated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'beforeAgreementUpdated',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cfaV1',
    outputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'cfa',
        internalType: 'contract IConstantFlowAgreementV1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createAndExecuteVestingScheduleFromAmountAndDuration',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createAndExecuteVestingScheduleFromAmountAndDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createVestingSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createVestingScheduleFromAmountAndDuration',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createVestingScheduleFromAmountAndDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeCliffAndFlow',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeEndVesting',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'schedule',
        internalType: 'struct IVestingSchedulerV2.VestingSchedule',
        type: 'tuple',
        components: [
          { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'getMaximumNeededTokenAllowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getVestingSchedule',
    outputs: [
      {
        name: '',
        internalType: 'struct IVestingSchedulerV2.VestingSchedule',
        type: 'tuple',
        components: [
          { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'mapCreateVestingScheduleParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct IVestingSchedulerV2.ScheduleCreationParams',
        type: 'tuple',
        components: [
          {
            name: 'superToken',
            internalType: 'contract ISuperToken',
            type: 'address',
          },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'startDate', internalType: 'uint32', type: 'uint32' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
          { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateVestingSchedule',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'vestingSchedules',
    outputs: [
      { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
      { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const legacyVestingSchedulerV2Address = {
  10: '0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C',
  8453: '0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257',
  11155420: '0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8',
} as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const legacyVestingSchedulerV2Config = {
  address: legacyVestingSchedulerV2Address,
  abi: legacyVestingSchedulerV2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// vestingSchedulerV3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const vestingSchedulerV3Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AccountInvalid' },
  { type: 'error', inputs: [], name: 'AlreadyExecuted' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CannotClaimScheduleOnBehalf' },
  { type: 'error', inputs: [], name: 'CliffInvalid' },
  { type: 'error', inputs: [], name: 'FlowRateInvalid' },
  { type: 'error', inputs: [], name: 'InvalidNewTotalAmount' },
  { type: 'error', inputs: [], name: 'ScheduleAlreadyExists' },
  { type: 'error', inputs: [], name: 'ScheduleDoesNotExist' },
  { type: 'error', inputs: [], name: 'ScheduleNotClaimed' },
  { type: 'error', inputs: [], name: 'ScheduleNotFlowing' },
  { type: 'error', inputs: [], name: 'TimeWindowInvalid' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'VestingClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'cliffAndFlowDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'flowDelayCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VestingCliffAndFlowExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'earlyEndCompensation',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'didCompensationFail',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'VestingEndExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'VestingEndFailed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'startDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'cliffAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'claimValidityDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'remainderAmount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'VestingScheduleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
    ],
    name: 'VestingScheduleDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
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
        name: 'endDate',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'remainderAmount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'totalAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'settledAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VestingScheduleUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'END_DATE_VALID_BEFORE',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'HOST',
    outputs: [
      { name: '', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_VESTING_DURATION',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'START_DATE_VALID_AFTER',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'vestingId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'accountings',
    outputs: [
      { name: 'settledAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'settledDate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createAndExecuteVestingScheduleFromAmountAndDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createVestingSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createVestingSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createVestingScheduleFromAmountAndDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createVestingScheduleFromAmountAndDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'deleteVestingSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'endVestingScheduleNow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeCliffAndFlow',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'executeEndVesting',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getMaximumNeededTokenAllowance',
    outputs: [
      { name: 'maxNeededAllowance', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'schedule',
        internalType: 'struct IVestingSchedulerV3.VestingSchedule',
        type: 'tuple',
        components: [
          { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    name: 'getMaximumNeededTokenAllowance',
    outputs: [
      { name: 'maxNeededAllowance', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getTotalVestedAmount',
    outputs: [
      { name: 'totalVestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'superToken', internalType: 'address', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getVestingSchedule',
    outputs: [
      {
        name: 'schedule',
        internalType: 'struct IVestingSchedulerV3.VestingSchedule',
        type: 'tuple',
        components: [
          { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [
      { name: 'isForwarderTrusted', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mapCreateVestingScheduleParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct IVestingSchedulerV3.ScheduleCreationParams',
        type: 'tuple',
        components: [
          {
            name: 'superToken',
            internalType: 'contract ISuperToken',
            type: 'address',
          },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'startDate', internalType: 'uint32', type: 'uint32' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
          { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'totalDuration', internalType: 'uint32', type: 'uint32' },
      { name: 'startDate', internalType: 'uint32', type: 'uint32' },
      { name: 'cliffPeriod', internalType: 'uint32', type: 'uint32' },
      { name: 'claimPeriod', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'mapCreateVestingScheduleParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct IVestingSchedulerV3.ScheduleCreationParams',
        type: 'tuple',
        components: [
          {
            name: 'superToken',
            internalType: 'contract ISuperToken',
            type: 'address',
          },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'startDate', internalType: 'uint32', type: 'uint32' },
          { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
          { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
          { name: 'flowRate', internalType: 'int96', type: 'int96' },
          { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'endDate', internalType: 'uint32', type: 'uint32' },
          { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'newEndDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'updateVestingSchedule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'newTotalAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateVestingScheduleFlowRateFromAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'newTotalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'newEndDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'updateVestingScheduleFlowRateFromAmountAndEndDate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'newEndDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'updateVestingScheduleFlowRateFromEndDate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'versionRecipient',
    outputs: [{ name: 'version', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'vestingId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'vestingSchedules',
    outputs: [
      { name: 'cliffAndFlowDate', internalType: 'uint32', type: 'uint32' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'remainderAmount', internalType: 'uint96', type: 'uint96' },
      { name: 'claimValidityDate', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const vestingSchedulerV3Address = {
  1: '0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C',
  10: '0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4',
  56: '0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3',
  100: '0x625F04c9B91ECdfbeb7021271749212388F12c11',
  137: '0x488913833474bbD9B11f844FdC2f0897FAc0Ca43',
  8453: '0x6Bf35A170056eDf9aEba159dce4a640cfCef9312',
  42161: '0xc3069bDE869912E3d9B965F35D7764Fc92BccE67',
  43114: '0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf',
  11155420: '0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const vestingSchedulerV3Config = {
  address: vestingSchedulerV3Address,
  abi: vestingSchedulerV3Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManager = /*#__PURE__*/ createUseReadContract({
  abi: autoWrapManagerAbi,
  address: autoWrapManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"approvedStrategies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerApprovedStrategies =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'approvedStrategies',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"cfaV1"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerCfaV1 = /*#__PURE__*/ createUseReadContract({
  abi: autoWrapManagerAbi,
  address: autoWrapManagerAddress,
  functionName: 'cfaV1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"checkWrap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerCheckWrap =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'checkWrap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"checkWrapByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerCheckWrapByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'checkWrapByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"getWrapSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerGetWrapSchedule =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'getWrapSchedule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"getWrapScheduleByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerGetWrapScheduleByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'getWrapScheduleByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"getWrapScheduleIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerGetWrapScheduleIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'getWrapScheduleIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"minLower"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerMinLower =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'minLower',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"minUpper"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerMinUpper =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'minUpper',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useReadAutoWrapManagerOwner = /*#__PURE__*/ createUseReadContract({
  abi: autoWrapManagerAbi,
  address: autoWrapManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManager = /*#__PURE__*/ createUseWriteContract({
  abi: autoWrapManagerAbi,
  address: autoWrapManagerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"addApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerAddApprovedStrategy =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'addApprovedStrategy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"createWrapSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerCreateWrapSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'createWrapSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"deleteWrapSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerDeleteWrapSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'deleteWrapSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"deleteWrapScheduleByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerDeleteWrapScheduleByIndex =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'deleteWrapScheduleByIndex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"executeWrap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerExecuteWrap =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'executeWrap',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"executeWrapByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerExecuteWrapByIndex =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'executeWrapByIndex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"removeApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerRemoveApprovedStrategy =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'removeApprovedStrategy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"setLimits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerSetLimits =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'setLimits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWriteAutoWrapManagerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"addApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerAddApprovedStrategy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'addApprovedStrategy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"createWrapSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerCreateWrapSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'createWrapSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"deleteWrapSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerDeleteWrapSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'deleteWrapSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"deleteWrapScheduleByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerDeleteWrapScheduleByIndex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'deleteWrapScheduleByIndex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"executeWrap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerExecuteWrap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'executeWrap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"executeWrapByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerExecuteWrapByIndex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'executeWrapByIndex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"removeApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerRemoveApprovedStrategy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'removeApprovedStrategy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"setLimits"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerSetLimits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'setLimits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useSimulateAutoWrapManagerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"AddedApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerAddedApprovedStrategyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'AddedApprovedStrategy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"LimitsChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerLimitsChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'LimitsChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"RemovedApprovedStrategy"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerRemovedApprovedStrategyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'RemovedApprovedStrategy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"WrapExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerWrapExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'WrapExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"WrapScheduleCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerWrapScheduleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'WrapScheduleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapManagerAbi}__ and `eventName` set to `"WrapScheduleDeleted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x1fA76f2Cd0C3fe6c399A80111408d9C42C0CAC23)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2AcdD61ac1EFFe1535109449c31889bdE8d7f325)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x2581c27E7f6D6AF452E63fCe884EDE3EDd716b32)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x5D0acD0864Ad07ba4E1E0474AE69Da87482e14A9)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xf01825eAFAe5CD1Dab5593EFAF218efC8968D272)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x30aE282CF477E2eF28B14d0125aCEAd57Fe1d7a1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x8082e58681350876aFe8f52d3Bf8672034A03Db0)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 */
export const useWatchAutoWrapManagerWrapScheduleDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapManagerAbi,
    address: autoWrapManagerAddress,
    eventName: 'WrapScheduleDeleted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useReadAutoWrapStrategy = /*#__PURE__*/ createUseReadContract({
  abi: autoWrapStrategyAbi,
  address: autoWrapStrategyAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"isSupportedSuperToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useReadAutoWrapStrategyIsSupportedSuperToken =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'isSupportedSuperToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"manager"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useReadAutoWrapStrategyManager =
  /*#__PURE__*/ createUseReadContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'manager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useReadAutoWrapStrategyOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'owner',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategy = /*#__PURE__*/ createUseWriteContract({
  abi: autoWrapStrategyAbi,
  address: autoWrapStrategyAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"changeManager"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategyChangeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'changeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategyEmergencyWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategyRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategyTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"wrap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWriteAutoWrapStrategyWrap =
  /*#__PURE__*/ createUseWriteContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'wrap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"changeManager"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategyChangeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'changeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategyEmergencyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategyRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategyTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `functionName` set to `"wrap"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useSimulateAutoWrapStrategyWrap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    functionName: 'wrap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapStrategyAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWatchAutoWrapStrategyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `eventName` set to `"EmergencyWithdrawInitiated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWatchAutoWrapStrategyEmergencyWithdrawInitiatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    eventName: 'EmergencyWithdrawInitiated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `eventName` set to `"ManagerChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWatchAutoWrapStrategyManagerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    eventName: 'ManagerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWatchAutoWrapStrategyOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link autoWrapStrategyAbi}__ and `eventName` set to `"Wrapped"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x0Cf060a501c0040e9CCC708eFE94079F501c6Bb4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9e308cb079ae130790F604b1030cDf386670f199)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xb4afa36BAd8c76976Dc77a21c9Ad711EF720eE4b)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xB29005319B0caB24cF6D4d24e8420E54BB29Cb0d)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x342076aA957B0ec8bC1d3893af719b288eA31e61)
 * - [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0x1D65c6d3AD39d454Ea8F682c49aE7744706eA96d)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x51FBAbD31A615E14b1bC12E9d887f60997264a4E)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xf232f1fd34CE12e24F4391865c2D6E374D2C34d9)
 */
export const useWatchAutoWrapStrategyWrappedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: autoWrapStrategyAbi,
    address: autoWrapStrategyAddress,
    eventName: 'Wrapped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowScheduler = /*#__PURE__*/ createUseReadContract({
  abi: flowSchedulerAbi,
  address: flowSchedulerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"beforeAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerBeforeAgreementCreated =
  /*#__PURE__*/ createUseReadContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'beforeAgreementCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"beforeAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerBeforeAgreementTerminated =
  /*#__PURE__*/ createUseReadContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'beforeAgreementTerminated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"beforeAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerBeforeAgreementUpdated =
  /*#__PURE__*/ createUseReadContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'beforeAgreementUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"cfaV1"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerCfaV1 = /*#__PURE__*/ createUseReadContract({
  abi: flowSchedulerAbi,
  address: flowSchedulerAddress,
  functionName: 'cfaV1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"flowSchedules"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerFlowSchedules =
  /*#__PURE__*/ createUseReadContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'flowSchedules',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"getFlowSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useReadFlowSchedulerGetFlowSchedule =
  /*#__PURE__*/ createUseReadContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'getFlowSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowScheduler = /*#__PURE__*/ createUseWriteContract({
  abi: flowSchedulerAbi,
  address: flowSchedulerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerAfterAgreementCreated =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerAfterAgreementTerminated =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerAfterAgreementUpdated =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"createFlowSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerCreateFlowSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'createFlowSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"deleteFlowSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerDeleteFlowSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'deleteFlowSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"executeCreateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerExecuteCreateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'executeCreateFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"executeDeleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWriteFlowSchedulerExecuteDeleteFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'executeDeleteFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowScheduler = /*#__PURE__*/ createUseSimulateContract(
  { abi: flowSchedulerAbi, address: flowSchedulerAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerAfterAgreementCreated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerAfterAgreementTerminated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerAfterAgreementUpdated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"createFlowSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerCreateFlowSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'createFlowSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"deleteFlowSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerDeleteFlowSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'deleteFlowSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"executeCreateFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerExecuteCreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'executeCreateFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flowSchedulerAbi}__ and `functionName` set to `"executeDeleteFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useSimulateFlowSchedulerExecuteDeleteFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    functionName: 'executeDeleteFlow',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flowSchedulerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWatchFlowSchedulerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flowSchedulerAbi}__ and `eventName` set to `"CreateFlowExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWatchFlowSchedulerCreateFlowExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    eventName: 'CreateFlowExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flowSchedulerAbi}__ and `eventName` set to `"DeleteFlowExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWatchFlowSchedulerDeleteFlowExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    eventName: 'DeleteFlowExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flowSchedulerAbi}__ and `eventName` set to `"FlowScheduleCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWatchFlowSchedulerFlowScheduleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    eventName: 'FlowScheduleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flowSchedulerAbi}__ and `eventName` set to `"FlowScheduleDeleted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xAA0cD305eD020137E302CeCede7b18c0A05aCCDA)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x2f9e2A2A59405682d4F86779275CF5525AD7eC2B)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x9cC7fc484fF588926149577e9330fA5b2cA74336)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x55F7758dd99d5e185f4CC08d4Ad95B71f598264D)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xC72CEd15204d02183c83fEbb918b183E400811Ee)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xF7AfF590E9DE493D7ACb421Fca7f1E35C1ad4Ce5)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x73B1Ce21d03ad389C2A291B1d1dc4DAFE7B5Dc68)
 */
export const useWatchFlowSchedulerFlowScheduleDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flowSchedulerAbi,
    address: flowSchedulerAddress,
    eventName: 'FlowScheduleDeleted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1 =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"END_DATE_VALID_BEFORE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1EndDateValidBefore =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'END_DATE_VALID_BEFORE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"MIN_VESTING_DURATION"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1MinVestingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'MIN_VESTING_DURATION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"START_DATE_VALID_AFTER"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1StartDateValidAfter =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'START_DATE_VALID_AFTER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"beforeAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1BeforeAgreementCreated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'beforeAgreementCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"beforeAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1BeforeAgreementTerminated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'beforeAgreementTerminated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"beforeAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1BeforeAgreementUpdated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'beforeAgreementUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"cfaV1"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1CfaV1 =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'cfaV1',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"getVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1GetVestingSchedule =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'getVestingSchedule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"vestingSchedules"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useReadLegacyVestingSchedulerV1VestingSchedules =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'vestingSchedules',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1 =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1AfterAgreementCreated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1AfterAgreementTerminated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1AfterAgreementUpdated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1CreateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1DeleteVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1ExecuteEndVesting =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWriteLegacyVestingSchedulerV1UpdateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1AfterAgreementCreated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1AfterAgreementTerminated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1AfterAgreementUpdated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1CreateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1DeleteVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1ExecuteEndVesting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useSimulateLegacyVestingSchedulerV1UpdateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingCliffAndFlowExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingCliffAndFlowExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingCliffAndFlowExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingEndExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingEndExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingEndExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingEndFailed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingEndFailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingEndFailed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingScheduleCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingScheduleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingScheduleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingScheduleDeleted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingScheduleDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingScheduleDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV1Abi}__ and `eventName` set to `"VestingScheduleUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x39D5cBBa9adEBc25085a3918d36D5325546C001B)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x65377d4dfE9c01639A41952B5083D58964782892)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x9B91c27f78376383003C6A12Ad12B341d016C5b9)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xDF92D0E6Bcb9385FDe99aD21Ff5e47Fb47E3c6b2)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x55c8fc400833eEa791087cF343Ff2409A39DeBcC)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0x3fA8B653F9abf91428800C0ba0F8D145a71F97A1)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x27444c0235a4D921F3106475faeba0B5e7ABDD7a)
 */
export const useWatchLegacyVestingSchedulerV1VestingScheduleUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV1Abi,
    address: legacyVestingSchedulerV1Address,
    eventName: 'VestingScheduleUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2 =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"END_DATE_VALID_BEFORE"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2EndDateValidBefore =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'END_DATE_VALID_BEFORE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"MIN_VESTING_DURATION"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2MinVestingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'MIN_VESTING_DURATION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"START_DATE_VALID_AFTER"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2StartDateValidAfter =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'START_DATE_VALID_AFTER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"beforeAgreementCreated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2BeforeAgreementCreated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'beforeAgreementCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"beforeAgreementTerminated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2BeforeAgreementTerminated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'beforeAgreementTerminated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"beforeAgreementUpdated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2BeforeAgreementUpdated =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'beforeAgreementUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"cfaV1"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2CfaV1 =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'cfaV1',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"getMaximumNeededTokenAllowance"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2GetMaximumNeededTokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'getMaximumNeededTokenAllowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"getVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2GetVestingSchedule =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'getVestingSchedule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"mapCreateVestingScheduleParams"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2MapCreateVestingScheduleParams =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'mapCreateVestingScheduleParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"vestingSchedules"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useReadLegacyVestingSchedulerV2VestingSchedules =
  /*#__PURE__*/ createUseReadContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'vestingSchedules',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2AfterAgreementCreated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2AfterAgreementTerminated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2AfterAgreementUpdated =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createAndExecuteVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2CreateAndExecuteVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createAndExecuteVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2CreateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2CreateVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2DeleteVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2ExecuteEndVesting =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWriteLegacyVestingSchedulerV2UpdateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementCreated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2AfterAgreementCreated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementCreated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementTerminated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2AfterAgreementTerminated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementTerminated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"afterAgreementUpdated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2AfterAgreementUpdated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'afterAgreementUpdated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createAndExecuteVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2CreateAndExecuteVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createAndExecuteVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2CreateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"createVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2CreateVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'createVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2DeleteVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2ExecuteEndVesting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useSimulateLegacyVestingSchedulerV2UpdateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingClaimed"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingCliffAndFlowExecuted"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingCliffAndFlowExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingCliffAndFlowExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingEndExecuted"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingEndExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingEndExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingEndFailed"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingEndFailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingEndFailed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingScheduleCreated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingScheduleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingScheduleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingScheduleDeleted"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingScheduleDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingScheduleDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link legacyVestingSchedulerV2Abi}__ and `eventName` set to `"VestingScheduleUpdated"`
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0xe567b32C10B0dB72d9490eB1B9A409C5ADed192C)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7b77A34b8B76B66E97a5Ae01aD052205d5cbe257)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x3aa62b96f44D0f8892BeBBC819DE8e02E9DE69A8)
 */
export const useWatchLegacyVestingSchedulerV2VestingScheduleUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: legacyVestingSchedulerV2Abi,
    address: legacyVestingSchedulerV2Address,
    eventName: 'VestingScheduleUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3 = /*#__PURE__*/ createUseReadContract({
  abi: vestingSchedulerV3Abi,
  address: vestingSchedulerV3Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"END_DATE_VALID_BEFORE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3EndDateValidBefore =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'END_DATE_VALID_BEFORE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"HOST"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3Host =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'HOST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"MIN_VESTING_DURATION"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3MinVestingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'MIN_VESTING_DURATION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"START_DATE_VALID_AFTER"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3StartDateValidAfter =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'START_DATE_VALID_AFTER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"accountings"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3Accountings =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'accountings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"getMaximumNeededTokenAllowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3GetMaximumNeededTokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'getMaximumNeededTokenAllowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"getTotalVestedAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3GetTotalVestedAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'getTotalVestedAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"getVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3GetVestingSchedule =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'getVestingSchedule',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"isTrustedForwarder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3IsTrustedForwarder =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'isTrustedForwarder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"mapCreateVestingScheduleParams"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3MapCreateVestingScheduleParams =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'mapCreateVestingScheduleParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"versionRecipient"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3VersionRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'versionRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"vestingSchedules"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useReadVestingSchedulerV3VestingSchedules =
  /*#__PURE__*/ createUseReadContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'vestingSchedules',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3 = /*#__PURE__*/ createUseWriteContract({
  abi: vestingSchedulerV3Abi,
  address: vestingSchedulerV3Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createAndExecuteVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3CreateAndExecuteVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createAndExecuteVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3CreateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3CreateVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3DeleteVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"endVestingScheduleNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3EndVestingScheduleNow =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'endVestingScheduleNow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3ExecuteEndVesting =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3UpdateVestingSchedule =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3UpdateVestingScheduleFlowRateFromAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromAmountAndEndDate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3UpdateVestingScheduleFlowRateFromAmountAndEndDate =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromAmountAndEndDate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromEndDate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWriteVestingSchedulerV3UpdateVestingScheduleFlowRateFromEndDate =
  /*#__PURE__*/ createUseWriteContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromEndDate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createAndExecuteVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3CreateAndExecuteVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createAndExecuteVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3CreateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"createVestingScheduleFromAmountAndDuration"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3CreateVestingScheduleFromAmountAndDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'createVestingScheduleFromAmountAndDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"deleteVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3DeleteVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'deleteVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"endVestingScheduleNow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3EndVestingScheduleNow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'endVestingScheduleNow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"executeCliffAndFlow"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3ExecuteCliffAndFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'executeCliffAndFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"executeEndVesting"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3ExecuteEndVesting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'executeEndVesting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingSchedule"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3UpdateVestingSchedule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingSchedule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromAmount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3UpdateVestingScheduleFlowRateFromAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromAmountAndEndDate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3UpdateVestingScheduleFlowRateFromAmountAndEndDate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromAmountAndEndDate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `functionName` set to `"updateVestingScheduleFlowRateFromEndDate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useSimulateVestingSchedulerV3UpdateVestingScheduleFlowRateFromEndDate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    functionName: 'updateVestingScheduleFlowRateFromEndDate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingClaimed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingCliffAndFlowExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingCliffAndFlowExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingCliffAndFlowExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingEndExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingEndExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingEndExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingEndFailed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingEndFailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingEndFailed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingScheduleCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingScheduleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingScheduleCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingScheduleDeleted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingScheduleDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingScheduleDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vestingSchedulerV3Abi}__ and `eventName` set to `"VestingScheduleUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xbeEDf563D41dcb3e1b7e0B0f7a86685Fd73Ce84C)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x5aB84e4B3a5F418c95B77DbdecFAF18D0Fd3b3E4)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xa032265Ee9dE740D36Af6eb90cf18775577B1Ef3)
 * - [__View Contract on Gnosis Gnosisscan__](https://gnosisscan.io/address/0x625F04c9B91ECdfbeb7021271749212388F12c11)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x488913833474bbD9B11f844FdC2f0897FAc0Ca43)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6Bf35A170056eDf9aEba159dce4a640cfCef9312)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xc3069bDE869912E3d9B965F35D7764Fc92BccE67)
 * - [__View Contract on Avalanche Snow Trace__](https://snowtrace.io/address/0xB84C98d9B51D0e32114C60C500e17eA79dfd0dAf)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4F4BC2ca9A7CA26AfcFabc6A2A381c104927D72C)
 */
export const useWatchVestingSchedulerV3VestingScheduleUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vestingSchedulerV3Abi,
    address: vestingSchedulerV3Address,
    eventName: 'VestingScheduleUpdated',
  })
