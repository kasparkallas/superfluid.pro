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
      { name: 'collectedWeth', internalType: 'uint256', type: 'uint256' },
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
    outputs: [],
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
    stateMutability: 'nonpayable',
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
