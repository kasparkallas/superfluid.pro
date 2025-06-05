// TODO: add documentation

import type { TimeUnit } from "./constant.js";

export function calculateCurrentBalance({
	flowRate,
	balance,
	balanceTimestamp, // Unix timestamp
	currentTimestamp = new Date().getTime(),
}: {
	flowRate: bigint;
	balance: bigint;
	balanceTimestamp: number;
	currentTimestamp?: number;
}) {
	const timeElapsed = currentTimestamp - balanceTimestamp;
	const amountFlowed = BigInt(timeElapsed) * flowRate;
	return balance + amountFlowed;
}

export function calculateFlowratePerSecond({
	amountWei,
	timeUnit,
}: {
	amountWei: bigint;
	timeUnit: TimeUnit;
}) {
	return amountWei / BigInt(timeUnit);
}
