import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

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
      {
        name: 'nonfungiblePositionManager',
        internalType: 'contract INonfungiblePositionManager',
        type: 'address',
      },
      {
        name: 'ethSupPool',
        internalType: 'contract IUniswapV3Pool',
        type: 'address',
      },
      {
        name: 'swapRouter',
        internalType: 'contract IV3SwapRouter',
        type: 'address',
      },
      { name: 'daoTreasury', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'BP_PUMP_RATIO',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'BP_SLIPPAGE_TOLERANCE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DAO_TREASURY',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
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
    name: 'ETH_SUP_POOL',
    outputs: [
      { name: '', internalType: 'contract IUniswapV3Pool', type: 'address' },
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
    name: 'LP_DISTRIBUTION_POOL',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LP_OPERATION_DEADLINE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_UNLOCK_AMOUNT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NONFUNGIBLE_POSITION_MANAGER',
    outputs: [
      {
        name: '',
        internalType: 'contract INonfungiblePositionManager',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'STAKER_DISTRIBUTION_POOL',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
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
    name: 'SWAP_ROUTER',
    outputs: [
      { name: '', internalType: 'contract IV3SwapRouter', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TAX_FREE_WITHDRAW_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UNLOCKING_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'activePositionCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [
      { name: 'programId', internalType: 'uint256', type: 'uint256' },
      { name: 'totalProgramUnits', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'stackSignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAndStake',
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
    name: 'claimAndStake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'collectFees',
    outputs: [
      { name: 'collectedEthx', internalType: 'uint256', type: 'uint256' },
      { name: 'collectedSup', internalType: 'uint256', type: 'uint256' },
    ],
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
    name: 'disconnectAndClaimAndStake',
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
    name: 'getLiquidityBalance',
    outputs: [{ name: 'lBalance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPositionLiquidity',
    outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
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
    inputs: [
      { name: 'positionTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lpCooldownTimestamps',
    outputs: [
      { name: 'lpCooldownTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'supAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'provideLiquidity',
    outputs: [
      { name: 'positionTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountToStake', internalType: 'uint256', type: 'uint256' },
    ],
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
      { name: 'positionTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'taxFreeExitTimestamps',
    outputs: [
      {
        name: 'taxFreeWithdrawTimestamp',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'unlockAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'unlockPeriod', internalType: 'uint128', type: 'uint128' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unlock',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountToUnstake', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawDustETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidityToRemove', internalType: 'uint128', type: 'uint128' },
      { name: 'amount0ToRemove', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1ToRemove', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawLiquidity',
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
        name: 'removedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'FluidUnstaked',
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
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'LiquidityPositionBurned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'LiquidityPositionCreated',
  },
  { type: 'error', inputs: [], name: 'FORBIDDEN' },
  { type: 'error', inputs: [], name: 'INSUFFICIENT_AVAILABLE_BALANCE' },
  { type: 'error', inputs: [], name: 'INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'INSUFFICIENT_ETH_SENT' },
  { type: 'error', inputs: [], name: 'INSUFFICIENT_STAKED_BALANCE' },
  { type: 'error', inputs: [], name: 'INSUFFICIENT_UNLOCK_AMOUNT' },
  { type: 'error', inputs: [], name: 'INVALID_UNLOCKING_FEE' },
  { type: 'error', inputs: [], name: 'INVALID_UNLOCK_PERIOD' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'LIQUIDITY_POOL_NOT_APPROVED' },
  { type: 'error', inputs: [], name: 'LOCKER_HAS_NO_POSITION' },
  { type: 'error', inputs: [], name: 'LP_COOLDOWN_NOT_ELAPSED' },
  { type: 'error', inputs: [], name: 'LP_DISTRIBUTION_POOL_HAS_NO_UNITS' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  { type: 'error', inputs: [], name: 'NOT_LOCKER_OWNER' },
  { type: 'error', inputs: [], name: 'NO_FLUID_TO_UNLOCK' },
  { type: 'error', inputs: [], name: 'NO_FLUID_TO_UNSTAKE' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'Reentrancy' },
  { type: 'error', inputs: [], name: 'STAKER_DISTRIBUTION_POOL_HAS_NO_UNITS' },
  { type: 'error', inputs: [], name: 'STAKING_COOLDOWN_NOT_ELAPSED' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  { type: 'error', inputs: [], name: 'TTE_NOT_ACTIVATED' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// lockerFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
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
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const lockerFactoryAddress = {
  8453: '0xA6694cAB43713287F7735dADc940b555db9d39D9',
  84532: '0x897D343D24Ac5b84838B976Cf37036EDEfe3E967',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
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
    inputs: [],
    name: 'getTaxAllocation',
    outputs: [
      { name: 'stakerAllocationBP', internalType: 'uint128', type: 'uint128' },
      {
        name: 'liquidityProviderAllocationBP',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
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
    inputs: [],
    name: 'lockerFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpDistributionPool',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
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
    name: 'refreshTaxDistributionFlow',
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
    inputs: [
      { name: 'stakerAllocationBP', internalType: 'uint128', type: 'uint128' },
      {
        name: 'liquidityProviderAllocationBP',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
    name: 'setTaxAllocation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setupLPDistributionPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'taxAllocation',
    outputs: [
      { name: 'stakerAllocationBP', internalType: 'uint128', type: 'uint128' },
      {
        name: 'liquidityProviderAllocationBP',
        internalType: 'uint128',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
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
      {
        name: 'lockerLiquidityBalance',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'updateLiquidityProviderUnits',
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
        name: 'stakerAllocationBP',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
      {
        name: 'liquidityProviderAllocationBP',
        internalType: 'uint128',
        type: 'uint128',
        indexed: false,
      },
    ],
    name: 'TaxAllocationUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidityProviderFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'stakerFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'TaxDistributionFlowUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidityProvider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'totalLiquidityProviderUnits',
        internalType: 'uint128',
        type: 'uint128',
        indexed: true,
      },
    ],
    name: 'UpdatedLiquidityProviderUnits',
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
  { type: 'error', inputs: [], name: 'LP_DISTRIBUTION_POOL_ALREADY_SET' },
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
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'treasury', internalType: 'address', type: 'address' },
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
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
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
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
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
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
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
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
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenAddress = {
  1: '0xD05001Db979ff2f1a3B2105875d3454E90dd2961',
  8453: '0xa69f80524381275A7fFdb3AE01c54150644c8792',
  84532: '0xFd62b398DD8a233ad37156690631fb9515059d6A',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const supTokenConfig = {
  address: supTokenAddress,
  abi: supTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// vestingFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const vestingFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'vestingScheduler',
        internalType: 'contract IVestingSchedulerV2',
        type: 'address',
      },
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'treasuryAddress', internalType: 'address', type: 'address' },
      { name: 'adminAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'FORBIDDEN' },
  { type: 'error', inputs: [], name: 'VESTING_DUPLICATED' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newSupVestingContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SupVestingCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
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
    name: 'MIN_CLIFF_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SUP',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VESTING_SCHEDULER',
    outputs: [
      {
        name: '',
        internalType: 'contract IVestingSchedulerV2',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'vestingReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'balanceOf',
    outputs: [
      { name: 'unvestedBalance', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'recipientVestingIndex',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'cliffAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'cliffDate', internalType: 'uint32', type: 'uint32' },
      { name: 'endDate', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createSupVestingContract',
    outputs: [
      {
        name: 'newSupVestingContract',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'recipients',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newTreasury', internalType: 'address', type: 'address' }],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'supVestings',
    outputs: [{ name: 'supVesting', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
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
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'supply', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const vestingFactoryAddress = {
  8453: '0x3DF8A6558073e973f4c3979138Cca836C993E285',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const vestingFactoryConfig = {
  address: vestingFactoryAddress,
  abi: vestingFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const readFontaine = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"EARLY_END"`
 */
export const readFontaineEarlyEnd = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'EARLY_END',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"FLUID"`
 */
export const readFontaineFluid = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'FLUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"TAX_DISTRIBUTION_POOL"`
 */
export const readFontaineTaxDistributionPool = /*#__PURE__*/ createReadContract(
  { abi: fontaineAbi, functionName: 'TAX_DISTRIBUTION_POOL' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"endDate"`
 */
export const readFontaineEndDate = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'endDate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"recipient"`
 */
export const readFontaineRecipient = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'recipient',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"taxFlowRate"`
 */
export const readFontaineTaxFlowRate = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'taxFlowRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"unlockFlowRate"`
 */
export const readFontaineUnlockFlowRate = /*#__PURE__*/ createReadContract({
  abi: fontaineAbi,
  functionName: 'unlockFlowRate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const writeFontaine = /*#__PURE__*/ createWriteContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"initialize"`
 */
export const writeFontaineInitialize = /*#__PURE__*/ createWriteContract({
  abi: fontaineAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"terminateUnlock"`
 */
export const writeFontaineTerminateUnlock = /*#__PURE__*/ createWriteContract({
  abi: fontaineAbi,
  functionName: 'terminateUnlock',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__
 */
export const simulateFontaine = /*#__PURE__*/ createSimulateContract({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateFontaineInitialize = /*#__PURE__*/ createSimulateContract({
  abi: fontaineAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fontaineAbi}__ and `functionName` set to `"terminateUnlock"`
 */
export const simulateFontaineTerminateUnlock =
  /*#__PURE__*/ createSimulateContract({
    abi: fontaineAbi,
    functionName: 'terminateUnlock',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fontaineAbi}__
 */
export const watchFontaineEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: fontaineAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fontaineAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchFontaineInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fontaineAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const readLocker = /*#__PURE__*/ createReadContract({ abi: lockerAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"BP_PUMP_RATIO"`
 */
export const readLockerBpPumpRatio = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'BP_PUMP_RATIO',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"BP_SLIPPAGE_TOLERANCE"`
 */
export const readLockerBpSlippageTolerance = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'BP_SLIPPAGE_TOLERANCE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"DAO_TREASURY"`
 */
export const readLockerDaoTreasury = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'DAO_TREASURY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"EP_PROGRAM_MANAGER"`
 */
export const readLockerEpProgramManager = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'EP_PROGRAM_MANAGER',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"ETH_SUP_POOL"`
 */
export const readLockerEthSupPool = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'ETH_SUP_POOL',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"FLUID"`
 */
export const readLockerFluid = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'FLUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"FONTAINE_BEACON"`
 */
export const readLockerFontaineBeacon = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'FONTAINE_BEACON',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"LP_DISTRIBUTION_POOL"`
 */
export const readLockerLpDistributionPool = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'LP_DISTRIBUTION_POOL',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"LP_OPERATION_DEADLINE"`
 */
export const readLockerLpOperationDeadline = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'LP_OPERATION_DEADLINE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"MIN_UNLOCK_AMOUNT"`
 */
export const readLockerMinUnlockAmount = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'MIN_UNLOCK_AMOUNT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"NONFUNGIBLE_POSITION_MANAGER"`
 */
export const readLockerNonfungiblePositionManager =
  /*#__PURE__*/ createReadContract({
    abi: lockerAbi,
    functionName: 'NONFUNGIBLE_POSITION_MANAGER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"STAKER_DISTRIBUTION_POOL"`
 */
export const readLockerStakerDistributionPool =
  /*#__PURE__*/ createReadContract({
    abi: lockerAbi,
    functionName: 'STAKER_DISTRIBUTION_POOL',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"STAKING_REWARD_CONTROLLER"`
 */
export const readLockerStakingRewardController =
  /*#__PURE__*/ createReadContract({
    abi: lockerAbi,
    functionName: 'STAKING_REWARD_CONTROLLER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"SWAP_ROUTER"`
 */
export const readLockerSwapRouter = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'SWAP_ROUTER',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"TAX_FREE_WITHDRAW_DELAY"`
 */
export const readLockerTaxFreeWithdrawDelay = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'TAX_FREE_WITHDRAW_DELAY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"UNLOCKING_FEE"`
 */
export const readLockerUnlockingFee = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'UNLOCKING_FEE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"UNLOCK_AVAILABLE"`
 */
export const readLockerUnlockAvailable = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'UNLOCK_AVAILABLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"activePositionCount"`
 */
export const readLockerActivePositionCount = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'activePositionCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"fontaineCount"`
 */
export const readLockerFontaineCount = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'fontaineCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"fontaines"`
 */
export const readLockerFontaines = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'fontaines',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getAvailableBalance"`
 */
export const readLockerGetAvailableBalance = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'getAvailableBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getFlowRatePerProgram"`
 */
export const readLockerGetFlowRatePerProgram = /*#__PURE__*/ createReadContract(
  { abi: lockerAbi, functionName: 'getFlowRatePerProgram' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getFontaineBeaconImplementation"`
 */
export const readLockerGetFontaineBeaconImplementation =
  /*#__PURE__*/ createReadContract({
    abi: lockerAbi,
    functionName: 'getFontaineBeaconImplementation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getLiquidityBalance"`
 */
export const readLockerGetLiquidityBalance = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'getLiquidityBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getPositionLiquidity"`
 */
export const readLockerGetPositionLiquidity = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'getPositionLiquidity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getStakedBalance"`
 */
export const readLockerGetStakedBalance = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'getStakedBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"getUnitsPerProgram"`
 */
export const readLockerGetUnitsPerProgram = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'getUnitsPerProgram',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lockerOwner"`
 */
export const readLockerLockerOwner = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'lockerOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lpCooldownTimestamps"`
 */
export const readLockerLpCooldownTimestamps = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'lpCooldownTimestamps',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stakingUnlocksAt"`
 */
export const readLockerStakingUnlocksAt = /*#__PURE__*/ createReadContract({
  abi: lockerAbi,
  functionName: 'stakingUnlocksAt',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"taxFreeExitTimestamps"`
 */
export const readLockerTaxFreeExitTimestamps = /*#__PURE__*/ createReadContract(
  { abi: lockerAbi, functionName: 'taxFreeExitTimestamps' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const writeLocker = /*#__PURE__*/ createWriteContract({ abi: lockerAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claim"`
 */
export const writeLockerClaim = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claimAndStake"`
 */
export const writeLockerClaimAndStake = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'claimAndStake',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"collectFees"`
 */
export const writeLockerCollectFees = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'collectFees',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"connect"`
 */
export const writeLockerConnect = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'connect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnect"`
 */
export const writeLockerDisconnect = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'disconnect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaim"`
 */
export const writeLockerDisconnectAndClaim = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'disconnectAndClaim',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaimAndStake"`
 */
export const writeLockerDisconnectAndClaimAndStake =
  /*#__PURE__*/ createWriteContract({
    abi: lockerAbi,
    functionName: 'disconnectAndClaimAndStake',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"initialize"`
 */
export const writeLockerInitialize = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lock"`
 */
export const writeLockerLock = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"provideLiquidity"`
 */
export const writeLockerProvideLiquidity = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'provideLiquidity',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stake"`
 */
export const writeLockerStake = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unlock"`
 */
export const writeLockerUnlock = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'unlock',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unstake"`
 */
export const writeLockerUnstake = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'unstake',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"withdrawDustETH"`
 */
export const writeLockerWithdrawDustEth = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'withdrawDustETH',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"withdrawLiquidity"`
 */
export const writeLockerWithdrawLiquidity = /*#__PURE__*/ createWriteContract({
  abi: lockerAbi,
  functionName: 'withdrawLiquidity',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__
 */
export const simulateLocker = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claim"`
 */
export const simulateLockerClaim = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'claim',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"claimAndStake"`
 */
export const simulateLockerClaimAndStake = /*#__PURE__*/ createSimulateContract(
  { abi: lockerAbi, functionName: 'claimAndStake' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"collectFees"`
 */
export const simulateLockerCollectFees = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'collectFees',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"connect"`
 */
export const simulateLockerConnect = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'connect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnect"`
 */
export const simulateLockerDisconnect = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'disconnect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaim"`
 */
export const simulateLockerDisconnectAndClaim =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    functionName: 'disconnectAndClaim',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"disconnectAndClaimAndStake"`
 */
export const simulateLockerDisconnectAndClaimAndStake =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    functionName: 'disconnectAndClaimAndStake',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateLockerInitialize = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"lock"`
 */
export const simulateLockerLock = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"provideLiquidity"`
 */
export const simulateLockerProvideLiquidity =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    functionName: 'provideLiquidity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"stake"`
 */
export const simulateLockerStake = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unlock"`
 */
export const simulateLockerUnlock = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'unlock',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"unstake"`
 */
export const simulateLockerUnstake = /*#__PURE__*/ createSimulateContract({
  abi: lockerAbi,
  functionName: 'unstake',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"withdrawDustETH"`
 */
export const simulateLockerWithdrawDustEth =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    functionName: 'withdrawDustETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerAbi}__ and `functionName` set to `"withdrawLiquidity"`
 */
export const simulateLockerWithdrawLiquidity =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerAbi,
    functionName: 'withdrawLiquidity',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__
 */
export const watchLockerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockerAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidLocked"`
 */
export const watchLockerFluidLockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidLocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStaked"`
 */
export const watchLockerFluidStakedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStaked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStreamClaimed"`
 */
export const watchLockerFluidStreamClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStreamClaimed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidStreamsClaimed"`
 */
export const watchLockerFluidStreamsClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidStreamsClaimed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidUnlocked"`
 */
export const watchLockerFluidUnlockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidUnlocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"FluidUnstaked"`
 */
export const watchLockerFluidUnstakedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'FluidUnstaked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchLockerInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"LiquidityPositionBurned"`
 */
export const watchLockerLiquidityPositionBurnedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'LiquidityPositionBurned',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerAbi}__ and `eventName` set to `"LiquidityPositionCreated"`
 */
export const watchLockerLiquidityPositionCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerAbi,
    eventName: 'LiquidityPositionCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactory = /*#__PURE__*/ createReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"IS_PAUSED"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryIsPaused = /*#__PURE__*/ createReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'IS_PAUSED',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"LOCKER_BEACON"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryLockerBeacon = /*#__PURE__*/ createReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'LOCKER_BEACON',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"STAKING_REWARD_CONTROLLER"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryStakingRewardController =
  /*#__PURE__*/ createReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'STAKING_REWARD_CONTROLLER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getLockerAddress"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryGetLockerAddress =
  /*#__PURE__*/ createReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'getLockerAddress',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getLockerBeaconImplementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryGetLockerBeaconImplementation =
  /*#__PURE__*/ createReadContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'getLockerBeaconImplementation',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"getUserLocker"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryGetUserLocker = /*#__PURE__*/ createReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'getUserLocker',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"governor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const readLockerFactoryGovernor = /*#__PURE__*/ createReadContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'governor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeLockerFactory = /*#__PURE__*/ createWriteContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createWriteContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeLockerFactoryInitialize = /*#__PURE__*/ createWriteContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeLockerFactorySetGovernor = /*#__PURE__*/ createWriteContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'setGovernor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const writeLockerFactoryUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateLockerFactory = /*#__PURE__*/ createSimulateContract({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"createLockerContract"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateLockerFactoryCreateLockerContract =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'createLockerContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateLockerFactoryInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"setGovernor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateLockerFactorySetGovernor =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'setGovernor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockerFactoryAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const simulateLockerFactoryUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchLockerFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockerFactoryAbi,
  address: lockerFactoryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"GovernorUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchLockerFactoryGovernorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'GovernorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchLockerFactoryInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"LockerCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchLockerFactoryLockerCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
    eventName: 'LockerCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockerFactoryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xA6694cAB43713287F7735dADc940b555db9d39D9)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x897D343D24Ac5b84838B976Cf37036EDEfe3E967)
 */
export const watchLockerFactoryUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: lockerFactoryAbi,
    address: lockerFactoryAddress,
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"getTaxAllocation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerGetTaxAllocation =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'getTaxAllocation',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"lpDistributionPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerLpDistributionPool =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'lpDistributionPool',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"taxAllocation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const readStakingRewardControllerTaxAllocation =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'taxAllocation',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"refreshTaxDistributionFlow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerRefreshTaxDistributionFlow =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'refreshTaxDistributionFlow',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setTaxAllocation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerSetTaxAllocation =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setTaxAllocation',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setupLPDistributionPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerSetupLpDistributionPool =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setupLPDistributionPool',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateLiquidityProviderUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const writeStakingRewardControllerUpdateLiquidityProviderUnits =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateLiquidityProviderUnits',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"refreshTaxDistributionFlow"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerRefreshTaxDistributionFlow =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'refreshTaxDistributionFlow',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setTaxAllocation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerSetTaxAllocation =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setTaxAllocation',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"setupLPDistributionPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerSetupLpDistributionPool =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'setupLPDistributionPool',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `functionName` set to `"updateLiquidityProviderUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const simulateStakingRewardControllerUpdateLiquidityProviderUnits =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    functionName: 'updateLiquidityProviderUnits',
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
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"TaxAllocationUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerTaxAllocationUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'TaxAllocationUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"TaxDistributionFlowUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerTaxDistributionFlowUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'TaxDistributionFlowUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardControllerAbi}__ and `eventName` set to `"UpdatedLiquidityProviderUnits"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xb19Ae25A98d352B36CED60F93db926247535048b)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x9FC0Bb109F3e733Bd84B30F8D89685b0304fC018)
 */
export const watchStakingRewardControllerUpdatedLiquidityProviderUnitsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardControllerAbi,
    address: stakingRewardControllerAddress,
    eventName: 'UpdatedLiquidityProviderUnits',
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupToken = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenClockMode = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenCheckpoints = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"clock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenClock = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenDelegates = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenEip712Domain = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetPastTotalSupply = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getPastTotalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetPastVotes = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getPastVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenGetVotes = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenName = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenNonces = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenNumCheckpoints = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'numCheckpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const readSupTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenDelegate = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenPermit = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const writeSupTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenDelegate = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenDelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: supTokenAbi,
    address: supTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenPermit = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const simulateSupTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: supTokenAbi,
  address: supTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supTokenAbi,
  address: supTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
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
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD05001Db979ff2f1a3B2105875d3454E90dd2961)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0xa69f80524381275A7fFdb3AE01c54150644c8792)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0xFd62b398DD8a233ad37156690631fb9515059d6A)
 */
export const watchSupTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supTokenAbi,
    address: supTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactory = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"MIN_CLIFF_PERIOD"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryMinCliffPeriod =
  /*#__PURE__*/ createReadContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'MIN_CLIFF_PERIOD',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"SUP"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactorySup = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'SUP',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"VESTING_SCHEDULER"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryVestingScheduler =
  /*#__PURE__*/ createReadContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'VESTING_SCHEDULER',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"admin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryAdmin = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryBalanceOf = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryDecimals = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryName = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"recipients"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryRecipients = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'recipients',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"supVestings"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactorySupVestings = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'supVestings',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactorySymbol = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryTotalSupply = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"treasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const readVestingFactoryTreasury = /*#__PURE__*/ createReadContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'treasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vestingFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const writeVestingFactory = /*#__PURE__*/ createWriteContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"createSupVestingContract"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const writeVestingFactoryCreateSupVestingContract =
  /*#__PURE__*/ createWriteContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'createSupVestingContract',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"setAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const writeVestingFactorySetAdmin = /*#__PURE__*/ createWriteContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"setTreasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const writeVestingFactorySetTreasury = /*#__PURE__*/ createWriteContract(
  {
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'setTreasury',
  },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vestingFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const simulateVestingFactory = /*#__PURE__*/ createSimulateContract({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"createSupVestingContract"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const simulateVestingFactoryCreateSupVestingContract =
  /*#__PURE__*/ createSimulateContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'createSupVestingContract',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"setAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const simulateVestingFactorySetAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'setAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vestingFactoryAbi}__ and `functionName` set to `"setTreasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const simulateVestingFactorySetTreasury =
  /*#__PURE__*/ createSimulateContract({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    functionName: 'setTreasury',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vestingFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const watchVestingFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: vestingFactoryAbi,
  address: vestingFactoryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vestingFactoryAbi}__ and `eventName` set to `"SupVestingCreated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const watchVestingFactorySupVestingCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    eventName: 'SupVestingCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vestingFactoryAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x3DF8A6558073e973f4c3979138Cca836C993E285)
 */
export const watchVestingFactoryTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: vestingFactoryAbi,
    address: vestingFactoryAddress,
    eventName: 'Transfer',
  })
