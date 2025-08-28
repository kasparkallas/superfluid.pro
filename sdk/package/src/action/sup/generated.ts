import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fluidLockerFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const fluidLockerFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'lockerBeacon', internalType: 'address', type: 'address' },
      {
        name: 'stakingRewardController',
        internalType: 'contract IStakingRewardController',
        type: 'address',
      },
      { name: 'pauseStatus', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'LOCKER_CREATION_PAUSED' },
  { type: 'error', inputs: [], name: 'NOT_GOVERNOR' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newGovernor',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GovernorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lockerOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'lockerAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LockerCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'IS_PAUSED',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LOCKER_BEACON',
    outputs: [
      { name: '', internalType: 'contract UpgradeableBeacon', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'STAKING_REWARD_CONTROLLER',
    outputs: [
      {
        name: '',
        internalType: 'contract IStakingRewardController',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'createLockerContract',
    outputs: [
      { name: 'lockerInstance', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createLockerContract',
    outputs: [
      { name: 'lockerInstance', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getLockerAddress',
    outputs: [
      { name: 'lockerAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLockerBeaconImplementation',
    outputs: [
      { name: 'lockerBeaconImpl', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserLocker',
    outputs: [
      { name: 'isCreated', internalType: 'bool', type: 'bool' },
      { name: 'lockerAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'governor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_governor', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newGovernor', internalType: 'address', type: 'address' }],
    name: 'setGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const fluidLockerFactoryAddress = {
  8453: '0x25963B2502F895D7d0953D147da97CCD12225380',
  84532: '0x897D343D24Ac5b84838B976Cf37036EDEfe3E967',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const fluidLockerFactoryConfig = {
  address: fluidLockerFactoryAddress,
  abi: fluidLockerFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fontaine
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const fontaineAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
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
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
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
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const fontaineAddress = {
  8453: '0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d',
  84532: '0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const fontaineConfig = {
  address: fontaineAddress,
  abi: fontaineAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// locker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const lockerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
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
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
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
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const lockerAddress = {
  8453: '0x664161f0974F5B17FB1fD3FDcE5D1679E829176c',
  84532: '0xf2880c6D68080393C1784f978417a96ab4f37c38',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const lockerConfig = { address: lockerAddress, abi: lockerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// programManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const programManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'taxDistributionPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'INVALID_PARAMETER' },
  {
    type: 'error',
    inputs: [{ name: 'reason', internalType: 'string', type: 'string' }],
    name: 'INVALID_SIGNATURE',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'LOCKER_NOT_FOUND' },
  { type: 'error', inputs: [], name: 'NOT_PROGRAM_ADMIN' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'POOL_HAS_NO_UNITS' },
  { type: 'error', inputs: [], name: 'PROGRAM_ALREADY_CREATED' },
  { type: 'error', inputs: [], name: 'PROGRAM_NOT_FOUND' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  { type: 'error', inputs: [], name: 'TOO_EARLY_TO_END_PROGRAM' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
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
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'returnedDeposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ProgramCancelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'programAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'signer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'distributionPool',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProgramCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'fundingAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'subsidyAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'earlyEndDate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endDate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProgramFunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newSigner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProgramSignerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'fundingCompensationAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'subsidyCompensationAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ProgramStopped',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'programId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newUnits',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UserUnitsUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EARLY_PROGRAM_END',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TAX_DISTRIBUTION_POOL',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'newUnits', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'batchUpdateUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'newUnits', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'batchUpdateUserUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'buildBatchOperations',
    outputs: [
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
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'plannedFundingAmount',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'plannedProgramDuration',
        internalType: 'uint32',
        type: 'uint32',
      },
    ],
    name: 'calculateAllowances',
    outputs: [
      { name: 'depositAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelProgram',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'programAdmin', internalType: 'address', type: 'address' },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'poolName', internalType: 'string', type: 'string' },
      { name: 'poolSymbol', internalType: 'string', type: 'string' },
    ],
    name: 'createProgram',
    outputs: [
      {
        name: 'distributionPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
    ],
    name: 'emergencyWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fluidLockerFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IFluidLockerFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fluidTreasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'getNextValidNonce',
    outputs: [{ name: 'validNonce', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProgramDetails',
    outputs: [
      {
        name: 'details',
        internalType: 'struct FluidEPProgramManager.FluidProgramDetails',
        type: 'tuple',
        components: [
          { name: 'fundingFlowRate', internalType: 'int96', type: 'int96' },
          { name: 'subsidyFlowRate', internalType: 'int96', type: 'int96' },
          { name: 'fundingStartDate', internalType: 'uint32', type: 'uint32' },
          { name: 'duration', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProgramPool',
    outputs: [
      {
        name: 'programPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'treasury', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'stackPoints', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'users', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'manualPoolUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'stackPoints', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'manualPoolUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'paramsGivePermission',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      { name: 'params', internalType: 'bytes', type: 'bytes' },
      { name: 'msgSender', internalType: 'address', type: 'address' },
    ],
    name: 'postCheck',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'programs',
    outputs: [
      { name: 'programAdmin', internalType: 'address', type: 'address' },
      { name: 'stackSigner', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      {
        name: 'distributionPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
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
    inputs: [
      {
        name: 'lockerFactoryAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setLockerFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'subsidyRate', internalType: 'uint96', type: 'uint96' }],
    name: 'setSubsidyRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'treasuryAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'programDuration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'startFunding',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'stopFunding',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'subsidyFundingRate',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
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
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'newSigner', internalType: 'address', type: 'address' },
    ],
    name: 'updateProgramSigner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'newUnits', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'newUnits', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateUserUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const programManagerAddress = {
  8453: '0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a',
  84532: '0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const programManagerConfig = {
  address: programManagerAddress,
  abi: programManagerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stakingRewardController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const stakingRewardControllerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'fluid', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'INVALID_PARAMETER' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NOT_APPROVED_LOCKER' },
  { type: 'error', inputs: [], name: 'NOT_LOCKER_FACTORY' },
  { type: 'error', inputs: [], name: 'NOT_PROGRAM_MANAGER' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'approvedLocker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'LockerApproved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newLockerFactoryAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'LockerFactoryAddressUpdated',
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
        name: 'newProgramManagerAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ProgramManagerAddressUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newSubsidyFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: true,
      },
    ],
    name: 'SubsidyFlowRateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'totalStakerUnits',
        internalType: 'uint128',
        type: 'uint128',
        indexed: true,
      },
    ],
    name: 'UpdatedStakersUnits',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FLUID',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lockerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'approveLocker',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockerFactory',
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
    inputs: [
      {
        name: 'lockerFactoryAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setLockerFactory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'taxDistributionPool',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
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
      { name: 'lockerStakedBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateStakerUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const stakingRewardControllerAddress = {
  8453: '0xb19Ae25A98d352B36CED60F93db926247535048b',
  84532: '0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const stakingRewardControllerConfig = {
  address: stakingRewardControllerAddress,
  abi: stakingRewardControllerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// supToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
      },
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
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
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
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
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolMemberNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
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
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
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
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT',
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
    name: 'CONSTANT_OUTFLOW_NFT',
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
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
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
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
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
    name: 'getUnderlyingDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
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
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
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
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenAddress = {
  8453: '0xa69f80524381275A7fFdb3AE01c54150644c8792',
  84532: '0xFd62b398DD8a233ad37156690631fb9515059d6A',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenConfig = {
  address: supTokenAddress,
  abi: supTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactory = /*#__PURE__*/ createReadContract({
  abi: fluidLockerFactoryAbi,
  address: fluidLockerFactoryAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"IS_PAUSED"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryIsPaused = /*#__PURE__*/ createReadContract({
  abi: fluidLockerFactoryAbi,
  address: fluidLockerFactoryAddress,
  functionName: 'IS_PAUSED',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"LOCKER_BEACON"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryLockerBeacon =
  /*#__PURE__*/ createReadContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'LOCKER_BEACON',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"STAKING_REWARD_CONTROLLER"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryStakingRewardController =
  /*#__PURE__*/ createReadContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'STAKING_REWARD_CONTROLLER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"getLockerAddress"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryGetLockerAddress =
  /*#__PURE__*/ createReadContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'getLockerAddress',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"getLockerBeaconImplementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryGetLockerBeaconImplementation =
  /*#__PURE__*/ createReadContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'getLockerBeaconImplementation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"getUserLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryGetUserLocker =
  /*#__PURE__*/ createReadContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'getUserLocker',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"governor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readFluidLockerFactoryGovernor = /*#__PURE__*/ createReadContract({
  abi: fluidLockerFactoryAbi,
  address: fluidLockerFactoryAddress,
  functionName: 'governor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeFluidLockerFactory = /*#__PURE__*/ createWriteContract({
  abi: fluidLockerFactoryAbi,
  address: fluidLockerFactoryAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeFluidLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createWriteContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeFluidLockerFactoryInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeFluidLockerFactorySetGovernor =
  /*#__PURE__*/ createWriteContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'setGovernor',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeFluidLockerFactoryUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateFluidLockerFactory = /*#__PURE__*/ createSimulateContract({
  abi: fluidLockerFactoryAbi,
  address: fluidLockerFactoryAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateFluidLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createSimulateContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateFluidLockerFactoryInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateFluidLockerFactorySetGovernor =
  /*#__PURE__*/ createSimulateContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'setGovernor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateFluidLockerFactoryUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fluidLockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchFluidLockerFactoryEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `eventName` set to `"GovernorUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchFluidLockerFactoryGovernorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    eventName: 'GovernorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchFluidLockerFactoryInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `eventName` set to `"LockerCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchFluidLockerFactoryLockerCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    eventName: 'LockerCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fluidLockerFactoryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchFluidLockerFactoryUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fluidLockerFactoryAbi,
    address: fluidLockerFactoryAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const readFontaine = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  address: fontaineAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const readFontaineImplementation = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  address: fontaineAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const readFontaineOwner = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  address: fontaineAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const writeFontaine = /*#__PURE__*/ createWriteContract({
  abi: fontaineAbi,
  address: fontaineAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const writeFontaineRenounceOwnership = /*#__PURE__*/ createWriteContract(
  {
    abi: fontaineAbi,
    address: fontaineAddress,
    functionName: 'renounceOwnership',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const writeFontaineTransferOwnership = /*#__PURE__*/ createWriteContract(
  {
    abi: fontaineAbi,
    address: fontaineAddress,
    functionName: 'transferOwnership',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const writeFontaineUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: fontaineAbi,
  address: fontaineAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const simulateFontaine = /*#__PURE__*/ createSimulateContract({
  abi: fontaineAbi,
  address: fontaineAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const simulateFontaineRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: fontaineAbi,
    address: fontaineAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const simulateFontaineTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: fontaineAbi,
    address: fontaineAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const simulateFontaineUpgradeTo = /*#__PURE__*/ createSimulateContract({
  abi: fontaineAbi,
  address: fontaineAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fontaineAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const watchFontaineEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: fontaineAbi,
  address: fontaineAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fontaineAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const watchFontaineOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fontaineAbi,
    address: fontaineAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fontaineAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA26FbA47Da24F7DF11b3E4CF60Dcf7D1691Ae47d)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xeBfA246A0BAd08A2A3ffB137ed75601AA41867dE)
 */
export const watchFontaineUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fontaineAbi,
    address: fontaineAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const readLocker = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  address: lockerAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const readLockerImplementation = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const readLockerOwner = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const writeLocker = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  address: lockerAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const writeLockerRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const writeLockerTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const writeLockerUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const simulateLocker = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  address: lockerAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const simulateLockerRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    address: lockerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const simulateLockerTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    address: lockerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const simulateLockerUpgradeTo = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  address: lockerAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const watchLockerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockerAbi,
  address: lockerAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const watchLockerOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    address: lockerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x664161f0974F5B17FB1fD3FDcE5D1679E829176c)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xf2880c6D68080393C1784f978417a96ab4f37c38)
 */
export const watchLockerUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockerAbi,
  address: lockerAddress,
  eventName: 'Upgraded',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManager = /*#__PURE__*/ createReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"EARLY_PROGRAM_END"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerEarlyProgramEnd =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'EARLY_PROGRAM_END',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"TAX_DISTRIBUTION_POOL"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerTaxDistributionPool =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'TAX_DISTRIBUTION_POOL',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"buildBatchOperations"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerBuildBatchOperations =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'buildBatchOperations',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"calculateAllowances"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerCalculateAllowances =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'calculateAllowances',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"fluidLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerFluidLockerFactory =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'fluidLockerFactory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"fluidTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerFluidTreasury = /*#__PURE__*/ createReadContract(
  {
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'fluidTreasury',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getNextValidNonce"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerGetNextValidNonce =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getNextValidNonce',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getProgramDetails"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerGetProgramDetails =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getProgramDetails',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getProgramPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerGetProgramPool =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getProgramPool',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerOwner = /*#__PURE__*/ createReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"paramsGivePermission"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerParamsGivePermission =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'paramsGivePermission',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"postCheck"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerPostCheck = /*#__PURE__*/ createReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'postCheck',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"programs"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerPrograms = /*#__PURE__*/ createReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'programs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"subsidyFundingRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const readProgramManagerSubsidyFundingRate =
  /*#__PURE__*/ createReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'subsidyFundingRate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManager = /*#__PURE__*/ createWriteContract({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerBatchUpdateUnits =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerBatchUpdateUserUnits =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUserUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"cancelProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerCancelProgram =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'cancelProgram',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"createProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerCreateProgram =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'createProgram',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerEmergencyWithdraw =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerInitialize = /*#__PURE__*/ createWriteContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"manualPoolUpdate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerManualPoolUpdate =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'manualPoolUpdate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerSetLockerFactory =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setSubsidyRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerSetSubsidyRate =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setSubsidyRate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerSetTreasury = /*#__PURE__*/ createWriteContract(
  {
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setTreasury',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"startFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerStartFunding =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'startFunding',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"stopFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerStopFunding = /*#__PURE__*/ createWriteContract(
  {
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'stopFunding',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateProgramSigner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerUpdateProgramSigner =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateProgramSigner',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerUpdateUnits = /*#__PURE__*/ createWriteContract(
  {
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUnits',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerUpdateUserUnits =
  /*#__PURE__*/ createWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUserUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const writeProgramManagerUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManager = /*#__PURE__*/ createSimulateContract({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerBatchUpdateUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerBatchUpdateUserUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUserUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"cancelProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerCancelProgram =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'cancelProgram',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"createProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerCreateProgram =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'createProgram',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerEmergencyWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"manualPoolUpdate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerManualPoolUpdate =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'manualPoolUpdate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerSetLockerFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setSubsidyRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerSetSubsidyRate =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setSubsidyRate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerSetTreasury =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"startFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerStartFunding =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'startFunding',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"stopFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerStopFunding =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'stopFunding',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateProgramSigner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerUpdateProgramSigner =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateProgramSigner',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerUpdateUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerUpdateUserUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUserUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const simulateProgramManagerUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramCancelled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerProgramCancelledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramCancelled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerProgramCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramFunded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerProgramFundedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramFunded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramSignerUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerProgramSignerUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramSignerUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramStopped"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerProgramStoppedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramStopped',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"UserUnitsUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const watchProgramManagerUserUnitsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'UserUnitsUpdated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardController = /*#__PURE__*/ createReadContract({
  abi: stakingRewardControllerAbi,
  address: stakingRewardControllerAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"FLUID"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerFluid =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'FLUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"lockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerLockerFactory =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'lockerFactory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerOwner =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"taxDistributionPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerTaxDistributionPool =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'taxDistributionPool',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardController = /*#__PURE__*/ createWriteContract({
  abi: stakingRewardControllerAbi,
  address: stakingRewardControllerAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"approveLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerApproveLocker =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'approveLocker',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerSetLockerFactory =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateStakerUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerUpdateStakerUnits =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateStakerUnits',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardController =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"approveLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerApproveLocker =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'approveLocker',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerSetLockerFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateStakerUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerUpdateStakerUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateStakerUnits',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"LockerApproved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerLockerApprovedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'LockerApproved',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"LockerFactoryAddressUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerLockerFactoryAddressUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'LockerFactoryAddressUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"ProgramManagerAddressUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerProgramManagerAddressUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'ProgramManagerAddressUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"SubsidyFlowRateUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerSubsidyFlowRateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'SubsidyFlowRateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"UpdatedStakersUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerUpdatedStakersUnitsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'UpdatedStakersUnits',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupToken = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenConstantInflowNft = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'CONSTANT_INFLOW_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenConstantOutflowNft = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'CONSTANT_OUTFLOW_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenPoolAdminNft = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'POOL_ADMIN_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenPoolMemberNft = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'POOL_MEMBER_NFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"defaultOperators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenDefaultOperators = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'defaultOperators',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetAccountActiveAgreements =
  /*#__PURE__*/ createReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetAdmin = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetAgreementData = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getAgreementData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetAgreementStateSlot =
  /*#__PURE__*/ createReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getCodeAddress"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetCodeAddress = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getCodeAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getHost"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetHost = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getHost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetUnderlyingDecimals =
  /*#__PURE__*/ createReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getUnderlyingToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetUnderlyingToken = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getUnderlyingToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"granularity"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGranularity = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'granularity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountCritical"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenIsAccountCritical = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'isAccountCritical',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenIsAccountCriticalNow =
  /*#__PURE__*/ createReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountSolvent"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenIsAccountSolvent = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'isAccountSolvent',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountSolventNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenIsAccountSolventNow = /*#__PURE__*/ createReadContract(
  {
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountSolventNow',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isOperatorFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenIsOperatorFor = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'isOperatorFor',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenName = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenRealtimeBalanceOf = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'realtimeBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenRealtimeBalanceOfNow =
  /*#__PURE__*/ createReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenToUnderlyingAmount = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'toUnderlyingAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupToken = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenAuthorizeOperator = /*#__PURE__*/ createWriteContract(
  {
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'authorizeOperator',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenBurn = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenCastrate = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenChangeAdmin = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'changeAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"createAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenCreateAgreement = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'createAgreement',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenDecreaseAllowance = /*#__PURE__*/ createWriteContract(
  {
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'decreaseAllowance',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenDowngrade = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenDowngradeTo = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'downgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenIncreaseAllowance = /*#__PURE__*/ createWriteContract(
  {
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'increaseAllowance',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenInitializeWithAdmin =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationApprove"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationApprove = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'operationApprove',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationDowngrade =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationDowngradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationSend = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'operationSend',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationUpgrade = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'operationUpgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperationUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperatorBurn = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'operatorBurn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenOperatorSend = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'operatorSend',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"revokeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenRevokeOperator = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'revokeOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSelfApproveFor = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfApproveFor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSelfBurn = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfMint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSelfMint = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSelfTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSend = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"settleBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenSettleBalance = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'settleBalance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTerminateAgreement =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTransferAll = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transferAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenUpdateAgreementData =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenUpdateCode = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenUpgrade = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupToken = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenAuthorizeOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenBurn = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenCastrate = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenChangeAdmin = /*#__PURE__*/ createSimulateContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'changeAdmin' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"createAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenCreateAgreement =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenDowngrade = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenDowngradeTo = /*#__PURE__*/ createSimulateContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'downgradeTo' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenInitialize = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenInitializeWithAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationApprove"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationDowngrade =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationDowngradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationSend =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationUpgrade =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperationUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperatorBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenOperatorSend =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"revokeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenRevokeOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSelfApproveFor =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSelfBurn = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfMint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSelfMint = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSelfTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSend = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"settleBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenSettleBalance =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenTerminateAgreement =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenTransferAll = /*#__PURE__*/ createSimulateContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'transferAll' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenUpdateAgreementData =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenUpdateCode = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenUpgrade = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenUpgradeTo = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementLiquidatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementLiquidatedByEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementLiquidatedV2Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementStateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementTerminated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementTerminatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAgreementUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AuthorizedOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenAuthorizedOperatorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Bailout"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenBailoutEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: supTokenAbi, address: supTokenAddress, eventName: 'Bailout' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Burned"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenBurnedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
  eventName: 'Burned',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"CodeUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenCodeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Minted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenMintedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
  eventName: 'Minted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"RevokedOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenRevokedOperatorEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Sent"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
  eventName: 'Sent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"TokenDowngraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenTokenDowngradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"TokenUpgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenTokenUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Transfer',
  })
