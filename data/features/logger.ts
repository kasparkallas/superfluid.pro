type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
	level: LogLevel;
	message: string;
	data?: unknown;
	timestamp: string;
	prefix?: string;
}

function formatLog(entry: LogEntry): string {
	const { level, message, data, timestamp, prefix } = entry;
	const prefixStr = prefix ? `[${prefix}] ` : "";
	const dataStr = data ? ` ${JSON.stringify(data)}` : "";
	return `[${timestamp}] ${level.toUpperCase()} ${prefixStr}${message}${dataStr}`;
}

function log(level: LogLevel, prefix: string | undefined, message: string, data?: unknown) {
	const entry: LogEntry = {
		level,
		message,
		data,
		timestamp: new Date().toISOString(),
		prefix,
	};

	const formatted = formatLog(entry);

	switch (level) {
		case "error":
			console.error(formatted);
			break;
		case "warn":
			console.warn(formatted);
			break;
		case "debug":
			console.debug(formatted);
			break;
		default:
			console.log(formatted);
	}
}

export function createPrefixedLogger(prefix: string) {
	return {
		info: (message: string, data?: unknown) => log("info", prefix, message, data),
		warn: (message: string, data?: unknown) => log("warn", prefix, message, data),
		error: (message: string, data?: unknown) => log("error", prefix, message, data),
		debug: (message: string, data?: unknown) => log("debug", prefix, message, data),
	};
}
