import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fontaine
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fontaineAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'fluid', internalType: 'contract ISuperToken', type: 'address' },
      {
        name: 'taxDistributionPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EARLY_END',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
    inputs: [],
    name: 'TAX_DISTRIBUTION_POOL',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endDate',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'unlockRecipient', internalType: 'address', type: 'address' },
      { name: 'targetUnlockFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'targetTaxFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'unlockPeriod', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'taxFlowRate',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'terminateUnlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlockFlowRate',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
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
  { type: 'error', inputs: [], name: 'CANNOT_UNLOCK_TO_SUPERAPP' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NOT_CONNECTED_LOCKER' },
  { type: 'error', inputs: [], name: 'NO_ACTIVE_UNLOCK' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'TOO_EARLY_TO_TERMINATE_UNLOCK' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// locker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'fluid', internalType: 'contract ISuperToken', type: 'address' },
      {
        name: 'taxDistributionPool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      {
        name: 'programManager',
        internalType: 'contract IEPProgramManager',
        type: 'address',
      },
      {
        name: 'stakingRewardController',
        internalType: 'contract IStakingRewardController',
        type: 'address',
      },
      { name: 'fontaineBeacon', internalType: 'address', type: 'address' },
      { name: 'isUnlockAvailable', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EP_PROGRAM_MANAGER',
    outputs: [
      { name: '', internalType: 'contract IEPProgramManager', type: 'address' },
    ],
    stateMutability: 'view',
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
    inputs: [],
    name: 'FONTAINE_BEACON',
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
    inputs: [],
    name: 'TAX_DISTRIBUTION_POOL',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UNLOCK_AVAILABLE',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'totalProgramUnits', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'totalProgramUnits',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'connect',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'disconnect',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'disconnect',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'programIdsToDisconnect',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'programIdsToClaim',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'totalProgramUnits',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectAndClaim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fontaineCount',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'unlockId', internalType: 'uint256', type: 'uint256' }],
    name: 'fontaines',
    outputs: [
      { name: 'fontaine', internalType: 'contract IFontaine', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAvailableBalance',
    outputs: [{ name: 'aBalance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getFlowRatePerProgram',
    outputs: [{ name: 'flowRates', internalType: 'int96[]', type: 'int96[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'getFlowRatePerProgram',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFontaineBeaconImplementation',
    outputs: [
      { name: 'fontaineBeaconImpl', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStakedBalance',
    outputs: [{ name: 'sBalance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'programId', internalType: 'uint256', type: 'uint256' }],
    name: 'getUnitsPerProgram',
    outputs: [{ name: 'units', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'programIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getUnitsPerProgram',
    outputs: [{ name: 'units', internalType: 'uint128[]', type: 'uint128[]' }],
    stateMutability: 'view',
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
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'lock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockerOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingUnlocksAt',
    outputs: [{ name: '', internalType: 'uint80', type: 'uint80' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'unlockPeriod', internalType: 'uint128', type: 'uint128' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'FluidLocked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newTotalStakedBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'addedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'FluidStaked',
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
        name: 'totalProgramUnits',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'FluidStreamClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'programId',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: true,
      },
      {
        name: 'totalProgramUnits',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: true,
      },
    ],
    name: 'FluidStreamsClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'unlockPeriod',
        internalType: 'uint128',
        type: 'uint128',
        indexed: true,
      },
      {
        name: 'availableBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fontaine',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'FluidUnlocked',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'FluidUnstaked' },
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
  { type: 'error', inputs: [], name: 'FORBIDDEN' },
  { type: 'error', inputs: [], name: 'INVALID_UNLOCK_PERIOD' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NOT_LOCKER_OWNER' },
  { type: 'error', inputs: [], name: 'NO_FLUID_TO_STAKE' },
  { type: 'error', inputs: [], name: 'NO_FLUID_TO_UNLOCK' },
  { type: 'error', inputs: [], name: 'NO_FLUID_TO_UNSTAKE' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'Reentrancy' },
  { type: 'error', inputs: [], name: 'STAKING_COOLDOWN_NOT_ELAPSED' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  { type: 'error', inputs: [], name: 'TAX_DISTRIBUTION_POOL_HAS_NO_UNITS' },
  { type: 'error', inputs: [], name: 'TTE_NOT_ACTIVATED' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// lockerFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const lockerFactoryAbi = [
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
export const lockerFactoryAddress = {
  8453: '0x25963B2502F895D7d0953D147da97CCD12225380',
  84532: '0x897D343D24Ac5b84838B976Cf37036EDEfe3E967',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const lockerFactoryConfig = {
  address: lockerFactoryAddress,
  abi: lockerFactoryAbi,
} as const

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
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const useReadFontaine = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"EARLY_END"`
 */
export const useReadFontaineEarlyEnd = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
  functionName: 'EARLY_END',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"FLUID"`
 */
export const useReadFontaineFluid = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
  functionName: 'FLUID',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"TAX_DISTRIBUTION_POOL"`
 */
export const useReadFontaineTaxDistributionPool =
  /*#__PURE__*/ createUseReadContract({
    abi: fontaineAbi,
    functionName: 'TAX_DISTRIBUTION_POOL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"endDate"`
 */
export const useReadFontaineEndDate = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
  functionName: 'endDate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"recipient"`
 */
export const useReadFontaineRecipient = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
  functionName: 'recipient',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"taxFlowRate"`
 */
export const useReadFontaineTaxFlowRate = /*#__PURE__*/ createUseReadContract({
  abi: fontaineAbi,
  functionName: 'taxFlowRate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"unlockFlowRate"`
 */
export const useReadFontaineUnlockFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: fontaineAbi,
    functionName: 'unlockFlowRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const useWriteFontaine = /*#__PURE__*/ createUseWriteContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteFontaineInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: fontaineAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"terminateUnlock"`
 */
export const useWriteFontaineTerminateUnlock =
  /*#__PURE__*/ createUseWriteContract({
    abi: fontaineAbi,
    functionName: 'terminateUnlock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const useSimulateFontaine = /*#__PURE__*/ createUseSimulateContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateFontaineInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fontaineAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"terminateUnlock"`
 */
export const useSimulateFontaineTerminateUnlock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fontaineAbi,
    functionName: 'terminateUnlock',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fontaineAbi}__
 */
export const useWatchFontaineEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fontaineAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchFontaineInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fontaineAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const useReadLocker = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"EP_PROGRAM_MANAGER"`
 */
export const useReadLockerEpProgramManager =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'EP_PROGRAM_MANAGER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"FLUID"`
 */
export const useReadLockerFluid = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
  functionName: 'FLUID',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"FONTAINE_BEACON"`
 */
export const useReadLockerFontaineBeacon = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
  functionName: 'FONTAINE_BEACON',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"STAKING_REWARD_CONTROLLER"`
 */
export const useReadLockerStakingRewardController =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'STAKING_REWARD_CONTROLLER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"TAX_DISTRIBUTION_POOL"`
 */
export const useReadLockerTaxDistributionPool =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'TAX_DISTRIBUTION_POOL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"UNLOCK_AVAILABLE"`
 */
export const useReadLockerUnlockAvailable = /*#__PURE__*/ createUseReadContract(
  { abi: lockerAbi, functionName: 'UNLOCK_AVAILABLE' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"fontaineCount"`
 */
export const useReadLockerFontaineCount = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
  functionName: 'fontaineCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"fontaines"`
 */
export const useReadLockerFontaines = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
  functionName: 'fontaines',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getAvailableBalance"`
 */
export const useReadLockerGetAvailableBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'getAvailableBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getFlowRatePerProgram"`
 */
export const useReadLockerGetFlowRatePerProgram =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'getFlowRatePerProgram',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getFontaineBeaconImplementation"`
 */
export const useReadLockerGetFontaineBeaconImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'getFontaineBeaconImplementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getStakedBalance"`
 */
export const useReadLockerGetStakedBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'getStakedBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getUnitsPerProgram"`
 */
export const useReadLockerGetUnitsPerProgram =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'getUnitsPerProgram',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lockerOwner"`
 */
export const useReadLockerLockerOwner = /*#__PURE__*/ createUseReadContract({
  abi: lockerAbi,
  functionName: 'lockerOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stakingUnlocksAt"`
 */
export const useReadLockerStakingUnlocksAt =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerAbi,
    functionName: 'stakingUnlocksAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const useWriteLocker = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteLockerClaim = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"connect"`
 */
export const useWriteLockerConnect = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'connect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnect"`
 */
export const useWriteLockerDisconnect = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'disconnect',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaim"`
 */
export const useWriteLockerDisconnectAndClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: lockerAbi,
    functionName: 'disconnectAndClaim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteLockerInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lock"`
 */
export const useWriteLockerLock = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteLockerStake = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unlock"`
 */
export const useWriteLockerUnlock = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'unlock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unstake"`
 */
export const useWriteLockerUnstake = /*#__PURE__*/ createUseWriteContract({
  abi: lockerAbi,
  functionName: 'unstake',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const useSimulateLocker = /*#__PURE__*/ createUseSimulateContract({
  abi: lockerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateLockerClaim = /*#__PURE__*/ createUseSimulateContract({
  abi: lockerAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"connect"`
 */
export const useSimulateLockerConnect = /*#__PURE__*/ createUseSimulateContract(
  { abi: lockerAbi, functionName: 'connect' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnect"`
 */
export const useSimulateLockerDisconnect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerAbi,
    functionName: 'disconnect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaim"`
 */
export const useSimulateLockerDisconnectAndClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerAbi,
    functionName: 'disconnectAndClaim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateLockerInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lock"`
 */
export const useSimulateLockerLock = /*#__PURE__*/ createUseSimulateContract({
  abi: lockerAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateLockerStake = /*#__PURE__*/ createUseSimulateContract({
  abi: lockerAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unlock"`
 */
export const useSimulateLockerUnlock = /*#__PURE__*/ createUseSimulateContract({
  abi: lockerAbi,
  functionName: 'unlock',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unstake"`
 */
export const useSimulateLockerUnstake = /*#__PURE__*/ createUseSimulateContract(
  { abi: lockerAbi, functionName: 'unstake' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__
 */
export const useWatchLockerEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: lockerAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidLocked"`
 */
export const useWatchLockerFluidLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStaked"`
 */
export const useWatchLockerFluidStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStreamClaimed"`
 */
export const useWatchLockerFluidStreamClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStreamClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStreamsClaimed"`
 */
export const useWatchLockerFluidStreamsClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStreamsClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidUnlocked"`
 */
export const useWatchLockerFluidUnlockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidUnlocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidUnstaked"`
 */
export const useWatchLockerFluidUnstakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidUnstaked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLockerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactory = /*#__PURE__*/ createUseReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"IS_PAUSED"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryIsPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'IS_PAUSED',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"LOCKER_BEACON"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryLockerBeacon =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'LOCKER_BEACON',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"STAKING_REWARD_CONTROLLER"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryStakingRewardController =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'STAKING_REWARD_CONTROLLER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getLockerAddress"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryGetLockerAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'getLockerAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getLockerBeaconImplementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryGetLockerBeaconImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'getLockerBeaconImplementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getUserLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryGetUserLocker =
  /*#__PURE__*/ createUseReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'getUserLocker',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"governor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useReadLockerFactoryGovernor = /*#__PURE__*/ createUseReadContract(
  {
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'governor',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWriteLockerFactory = /*#__PURE__*/ createUseWriteContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWriteLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWriteLockerFactoryInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWriteLockerFactorySetGovernor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'setGovernor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWriteLockerFactoryUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useSimulateLockerFactory = /*#__PURE__*/ createUseSimulateContract(
  { abi: lockerFactoryAbi, address: lockerFactoryAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useSimulateLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useSimulateLockerFactoryInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useSimulateLockerFactorySetGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'setGovernor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useSimulateLockerFactoryUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWatchLockerFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"GovernorUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWatchLockerFactoryGovernorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'GovernorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWatchLockerFactoryInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"LockerCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWatchLockerFactoryLockerCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'LockerCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x25963B2502F895D7d0953D147da97CCD12225380)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const useWatchLockerFactoryUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManager = /*#__PURE__*/ createUseReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"EARLY_PROGRAM_END"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerEarlyProgramEnd =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'EARLY_PROGRAM_END',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"TAX_DISTRIBUTION_POOL"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerTaxDistributionPool =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'TAX_DISTRIBUTION_POOL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"buildBatchOperations"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerBuildBatchOperations =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'buildBatchOperations',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"calculateAllowances"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerCalculateAllowances =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'calculateAllowances',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"fluidLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerFluidLockerFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'fluidLockerFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"fluidTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerFluidTreasury =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'fluidTreasury',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getNextValidNonce"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerGetNextValidNonce =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getNextValidNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getProgramDetails"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerGetProgramDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getProgramDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"getProgramPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerGetProgramPool =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'getProgramPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerOwner = /*#__PURE__*/ createUseReadContract({
  abi: programManagerAbi,
  address: programManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"paramsGivePermission"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerParamsGivePermission =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'paramsGivePermission',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"postCheck"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerPostCheck =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'postCheck',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"programs"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerPrograms =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'programs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"subsidyFundingRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useReadProgramManagerSubsidyFundingRate =
  /*#__PURE__*/ createUseReadContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'subsidyFundingRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManager = /*#__PURE__*/ createUseWriteContract({
  abi: programManagerAbi,
  address: programManagerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerBatchUpdateUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerBatchUpdateUserUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUserUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"cancelProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerCancelProgram =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'cancelProgram',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"createProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerCreateProgram =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'createProgram',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerEmergencyWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"manualPoolUpdate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerManualPoolUpdate =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'manualPoolUpdate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerSetLockerFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setSubsidyRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerSetSubsidyRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setSubsidyRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerSetTreasury =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"startFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerStartFunding =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'startFunding',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"stopFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerStopFunding =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'stopFunding',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateProgramSigner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerUpdateProgramSigner =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateProgramSigner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerUpdateUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerUpdateUserUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUserUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWriteProgramManagerUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerBatchUpdateUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"batchUpdateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerBatchUpdateUserUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'batchUpdateUserUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"cancelProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerCancelProgram =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'cancelProgram',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"createProgram"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerCreateProgram =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'createProgram',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"emergencyWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerEmergencyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'emergencyWithdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"manualPoolUpdate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerManualPoolUpdate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'manualPoolUpdate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerSetLockerFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setSubsidyRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerSetSubsidyRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setSubsidyRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"setTreasury"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerSetTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"startFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerStartFunding =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'startFunding',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"stopFunding"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerStopFunding =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'stopFunding',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateProgramSigner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerUpdateProgramSigner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateProgramSigner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerUpdateUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"updateUserUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerUpdateUserUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'updateUserUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link programManagerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useSimulateProgramManagerUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: programManagerAbi,
    address: programManagerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramCancelled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerProgramCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramCancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerProgramCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramFunded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerProgramFundedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramFunded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramSignerUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerProgramSignerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramSignerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"ProgramStopped"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerProgramStoppedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'ProgramStopped',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link programManagerAbi}__ and `eventName` set to `"UserUnitsUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x1e32cf099992E9D3b17eDdDFFfeb2D07AED95C6a)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x71a1975A1009e48E0BF2f621B6835db5Ea1f7706)
 */
export const useWatchProgramManagerUserUnitsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: programManagerAbi,
    address: programManagerAddress,
    eventName: 'UserUnitsUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useReadStakingRewardController =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"FLUID"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useReadStakingRewardControllerFluid =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'FLUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"lockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useReadStakingRewardControllerLockerFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'lockerFactory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useReadStakingRewardControllerOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"taxDistributionPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useReadStakingRewardControllerTaxDistributionPool =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'taxDistributionPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardController =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"approveLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerApproveLocker =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'approveLocker',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerSetLockerFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateStakerUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerUpdateStakerUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateStakerUnits',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWriteStakingRewardControllerUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardController =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"approveLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerApproveLocker =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'approveLocker',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setLockerFactory"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerSetLockerFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setLockerFactory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateStakerUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerUpdateStakerUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateStakerUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useSimulateStakingRewardControllerUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"LockerApproved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerLockerApprovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'LockerApproved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"LockerFactoryAddressUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerLockerFactoryAddressUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'LockerFactoryAddressUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"ProgramManagerAddressUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerProgramManagerAddressUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'ProgramManagerAddressUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"SubsidyFlowRateUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerSubsidyFlowRateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'SubsidyFlowRateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"UpdatedStakersUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerUpdatedStakersUnitsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'UpdatedStakersUnits',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const useWatchStakingRewardControllerUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupToken = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenConstantInflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'CONSTANT_INFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenConstantOutflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'CONSTANT_OUTFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenPoolAdminNft = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'POOL_ADMIN_NFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenPoolMemberNft = /*#__PURE__*/ createUseReadContract(
  {
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'POOL_MEMBER_NFT',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"defaultOperators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenDefaultOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'defaultOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetAccountActiveAgreements =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetAgreementData =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getAgreementData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetAgreementStateSlot =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getCodeAddress"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetCodeAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getCodeAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getHost"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetHost = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getHost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetUnderlyingDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getUnderlyingToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGetUnderlyingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"granularity"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenGranularity = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'granularity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountCritical"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenIsAccountCritical =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountCritical',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenIsAccountCriticalNow =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountSolvent"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenIsAccountSolvent =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountSolvent',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isAccountSolventNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenIsAccountSolventNow =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"isOperatorFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenIsOperatorFor = /*#__PURE__*/ createUseReadContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'isOperatorFor' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenName = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenProxiableUuid = /*#__PURE__*/ createUseReadContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'proxiableUUID' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenRealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenRealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenToUnderlyingAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useReadSupTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupToken = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenCastrate = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'castrate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenChangeAdmin = /*#__PURE__*/ createUseWriteContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'changeAdmin' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"createAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenCreateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenDowngrade = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenDowngradeTo = /*#__PURE__*/ createUseWriteContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'downgradeTo' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationApprove"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationDowngrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationDowngradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperationUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperatorBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenOperatorSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"revokeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSelfApproveFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSelfBurn = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfMint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSelfMint = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSelfTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSend = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"settleBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenSettleBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenTerminateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenTransferAll = /*#__PURE__*/ createUseWriteContract(
  { abi: supTokenAbi, address: supTokenAddress, functionName: 'transferAll' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenUpdateAgreementData =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseWriteContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenUpdateCode = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'updateCode',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWriteSupTokenUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupToken = /*#__PURE__*/ createUseSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"castrate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenCastrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"createAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenCreateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'downgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"downgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationApprove"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationDowngradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationDowngradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operationUpgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperationUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operationUpgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperatorBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"operatorSend"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenOperatorSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"revokeOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSelfApproveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfBurn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSelfBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfMint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSelfMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSelfTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSend = /*#__PURE__*/ createUseSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"settleBalance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenSettleBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenTerminateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenTransferAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenUpdateAgreementData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"updateCode"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenUpdateCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgrade"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'upgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useSimulateSupTokenUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementLiquidatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementLiquidatedByEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementLiquidatedV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementStateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementTerminated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementTerminatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AgreementUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAgreementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"AuthorizedOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenAuthorizedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Bailout"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenBailoutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Burned"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"CodeUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenCodeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Minted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"RevokedOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenRevokedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Sent"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Sent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"TokenDowngraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenTokenDowngradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"TokenUpgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenTokenUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const useWatchSupTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Transfer',
  })
