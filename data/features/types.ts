export interface SuperTokenData {
	// Token identification
	id: string; // Chain-prefixed token address
	address: string; // Token contract address
	chainId: number; // Blockchain network ID

	// Token metadata
	symbol: string; // Token symbol (enriched)
	name: string; // Token name (enriched)
	decimals: number; // Token decimals

	// Token properties
	isListed: boolean; // Listed on official token list
	isNativeAssetSuperToken: boolean;
	isPureSuperToken: boolean; // Super Token with no underlying asset (zero address)
	isWrapperSuperToken: boolean; // Super Token wrapping another token
	underlyingAddress: string | null;

	// Usage statistics
	totalNumberOfHolders: number; // Int scalar
	totalNumberOfActiveStreams: number;
	totalNumberOfClosedStreams: number;

	// Metadata
	lastUpdated: string; // ISO 8601 timestamp
}

// Also move AggregatedData since it depends on SuperTokenData
export interface AggregatedData {
	version: string; // Data format version
	timestamp: string; // ISO 8601 timestamp
	totalTokens: number;
	tokens: SuperTokenData[];
	chains: {
		[chainId: number]: {
			name: string;
			tokenCount: number;
			endpoint: string;
		};
	};
}
