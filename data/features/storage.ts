import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { head, put } from "@vercel/blob";
import { createPrefixedLogger } from "./logger";

const logger = createPrefixedLogger("Storage");

// Helper to format file size in human-readable format
function formatFileSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

export type StorageType = "blob" | "local";

export interface StorageConfig {
	type: StorageType;
	localPath?: string; // Only used for local storage
	blobReadWriteToken?: string; // Only used for blob storage
}

export interface StorageProvider {
	put(key: string, content: string, options?: { contentType?: string }): Promise<void>;
	get(key: string): Promise<string | null>;
}

class VercelBlobStorageProvider implements StorageProvider {
	constructor(private token: string) {
		logger.info("Vercel blob storage provider initialized", {
			hasToken: !!token,
		});
	}

	async put(key: string, content: string, options?: { contentType?: string }): Promise<void> {
		const contentSizeBytes = Buffer.byteLength(content, "utf8");

		try {
			await put(key, content, {
				access: "public",
				contentType: options?.contentType || "application/octet-stream",
				token: this.token,
				allowOverwrite: true,
			});

			logger.info("Blob storage put operation completed", {
				key,
				contentSize: formatFileSize(contentSizeBytes),
			});
		} catch (error) {
			logger.error("Blob storage put operation failed", {
				key,
				contentSize: formatFileSize(contentSizeBytes),
				error: (error as Error).message,
			});
			throw error;
		}
	}

	async get(key: string): Promise<string | null> {
		try {
			// First get the blob metadata to retrieve the download URL
			const blob = await head(key, { token: this.token });

			// Fetch the content from the download URL
			const response = await fetch(blob.downloadUrl);

			if (!response.ok) {
				logger.warn("Blob storage get operation failed - not found", {
					key,
					status: response.status,
					statusText: response.statusText,
				});
				return null;
			}

			const content = await response.text();
			const contentSizeBytes = Buffer.byteLength(content, "utf8");

			logger.info("Blob storage get operation completed", {
				key,
				contentSize: formatFileSize(contentSizeBytes),
			});

			return content;
		} catch (error) {
			logger.error("Blob storage get operation failed", {
				key,
				error: (error as Error).message,
			});
			return null;
		}
	}
}

class LocalStorageProvider implements StorageProvider {
	constructor(private basePath: string = "./data") {
		logger.info("Local storage provider initialized", { basePath: this.basePath });
	}

	async put(key: string, content: string): Promise<void> {
		const contentSizeBytes = Buffer.byteLength(content, "utf8");
		const filePath = join(this.basePath, key);
		const dir = dirname(filePath);

		try {
			// Ensure directory exists
			await mkdir(dir, { recursive: true });

			// Write file
			await writeFile(filePath, content, "utf8");

			logger.info("Local storage put operation completed", {
				filePath,
				contentSize: formatFileSize(contentSizeBytes),
			});
		} catch (error) {
			logger.error("Local storage put operation failed", {
				key,
				filePath,
				contentSize: formatFileSize(contentSizeBytes),
				error: (error as Error).message,
			});
			throw error;
		}
	}

	async get(key: string): Promise<string | null> {
		const filePath = join(this.basePath, key);

		try {
			const { readFile } = await import("node:fs/promises");
			const content = await readFile(filePath, "utf8");
			const contentSizeBytes = Buffer.byteLength(content, "utf8");

			logger.info("Local storage get operation completed", {
				filePath,
				contentSize: formatFileSize(contentSizeBytes),
			});

			return content;
		} catch (error) {
			logger.warn("Local storage get operation failed - file not found or inaccessible", {
				key,
				filePath,
				error: (error as Error).message,
			});
			return null;
		}
	}
}

export function createStorageProvider(config: StorageConfig): StorageProvider {
	logger.info("Creating storage provider", {
		type: config.type,
		localPath: config.localPath,
		hasBlobToken: !!config.blobReadWriteToken,
	});

	switch (config.type) {
		case "blob":
			if (!config.blobReadWriteToken) {
				const error = new Error("Blob storage requires a read/write token");
				logger.error("Failed to create blob storage provider", { config, error: error.message });
				throw error;
			}
			return new VercelBlobStorageProvider(config.blobReadWriteToken);
		case "local":
			return new LocalStorageProvider(config.localPath);
		default: {
			const error = new Error(`Unsupported storage type: ${config.type}`);
			logger.error("Failed to create storage provider", { config, error: error.message });
			throw error;
		}
	}
}

// Helper to create storage configuration
export function getStorageConfig(
	storageType: StorageType,
	options?: { localPath?: string; blobReadWriteToken?: string },
): StorageConfig {
	const config: StorageConfig = {
		type: storageType,
		localPath: options?.localPath || "./data",
		blobReadWriteToken: options?.blobReadWriteToken || process.env.BLOB_READ_WRITE_TOKEN,
	};

	logger.info("Created storage configuration", {
		type: config.type,
		localPath: config.localPath,
		hasBlobToken: !!config.blobReadWriteToken,
	});

	return config;
}
