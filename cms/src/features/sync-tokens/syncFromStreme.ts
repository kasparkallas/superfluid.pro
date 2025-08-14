import { payload } from "@/payload";
import type { Token } from "@/payload-types";
import { getAllExistingTokens, hasChanges } from ".";

// # Types
interface StremeToken {
	id: number;
	block_number: number;
	tx_hash: string;
	contract_address: string;
	requestor_fid: number;
	deployer: string;
	name: string;
	symbol: string;
	img_url: string;
	cast_hash: string;
	type: string;
	pair: string;
	presale_id: number | null;
	chain_id: number;
	metadata: unknown | null;
	tokenFactory: string;
	postDeployHook: string;
	liquidityFactory: string;
	postLpHook: string;
	poolConfig: {
		tick: number;
		pairedToken: string;
		devBuyFee: number;
	};
	timestamp: {
		_seconds: number;
		_nanoseconds: number;
	};
	staking_pool: string;
	pfp_url: string;
	staking_address: string;
	pool_address: string;
	username: string;
	lastTraded: {
		_seconds: number;
		_nanoseconds: number;
	};
	created_at: string;
}

// # Main Function
export async function syncFromStreme() {
	const allStremeTokens: StremeToken[] = [];
	let page = 1;
	let beforeTimestamp: number | undefined;
	const pageSize = 200; // API returns 200 tokens per page

	// Fetch all pages
	while (true) {
		const url = beforeTimestamp
			? `https://api.streme.fun/api/tokens?before=${beforeTimestamp}`
			: "https://api.streme.fun/api/tokens";

		console.log(
			`Fetching Streme tokens page ${page}${beforeTimestamp ? ` (before timestamp: ${beforeTimestamp})` : ""}`,
		);

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch tokens from Streme API: ${response.status} ${response.statusText}`);
		}

		const pageTokens: StremeToken[] = await response.json();

		if (pageTokens.length === 0) {
			console.log("No more tokens to fetch");
			break;
		}

		allStremeTokens.push(...pageTokens);
		console.log(`Fetched ${pageTokens.length} tokens on page ${page}. Total so far: ${allStremeTokens.length}`);

		// If we got fewer tokens than the page size, we've reached the end
		if (pageTokens.length < pageSize) {
			console.log("Reached the last page");
			break;
		}

		// Get the timestamp from the last token for the next page
		const lastToken = pageTokens[pageTokens.length - 1];
		if (lastToken.timestamp?._seconds) {
			beforeTimestamp = lastToken.timestamp._seconds;
		} else {
			console.log("Last token has no timestamp, stopping pagination");
			break;
		}

		page++;
	}

	console.log(`Fetched total of ${allStremeTokens.length} tokens from Streme API`);

	const stremeTokens = allStremeTokens;
	const existingTokensMap = await getAllExistingTokens();

	for (const stremeToken of stremeTokens) {
		const key = `${stremeToken.contract_address}-${stremeToken.chain_id}`;
		const existingToken = existingTokensMap.get(key);

		if (existingToken) {
			// Token exists, update with Streme information
			const updateData: Partial<Token> = {};

			// Update basic token information
			updateData.name = stremeToken.name;
			updateData.symbol = stremeToken.symbol;
			updateData.tokenType = "pureSuperToken";
			updateData.isListed = false;

			// Update logoUri if available and current one is empty
			if (stremeToken.img_url && (!existingToken.logoUri || existingToken.logoUri === "")) {
				updateData.logoUri = stremeToken.img_url;
			}

			// Add Streme-specific tags if they don't exist
			const existingTags = existingToken.tags || [];
			const stremeTags = ["streme", "supertoken"] as const;
			const missingTags = stremeTags.filter((tag) => !existingTags.includes(tag));

			if (missingTags.length > 0) {
				updateData.tags = [...existingTags, ...missingTags];
			}

			// Only update if there are changes
			if (hasChanges(existingToken, updateData)) {
				try {
					const updatedToken = await payload.update({
						collection: "tokens",
						id: existingToken.id,
						data: updateData,
					});
					console.log(`Updated Streme token with ID ${updatedToken.id}`);
				} catch (error) {
					console.error(
						`Failed to update Streme token ${stremeToken.contract_address} on chain ${stremeToken.chain_id}:`,
						error,
					);
				}
			}
		} else {
			// Token doesn't exist, create it
			try {
				const createdToken = await payload.create({
					collection: "tokens",
					data: {
						address: stremeToken.contract_address,
						chainId: stremeToken.chain_id,
						decimals: 18, // Streme tokens are typically 18 decimals
						name: stremeToken.name,
						symbol: stremeToken.symbol,
						logoUri: stremeToken.img_url || "",
						tags: ["streme", "supertoken"],
						tokenType: "pureSuperToken",
						underlyingAddress: undefined, // Pure super tokens don't have underlying address
						isListed: false,
					},
				});

				console.log(`Created Streme token with ID ${createdToken.id}`);
			} catch (error) {
				console.error(
					`Failed to create Streme token ${stremeToken.contract_address} on chain ${stremeToken.chain_id}:`,
					error,
				);
			}
		}
	}
}
