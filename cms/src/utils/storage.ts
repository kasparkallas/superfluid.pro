import { head, put } from "@vercel/blob";

export type StorageType = "blob" | "local";

export interface StorageConfig {
	type: StorageType;
	localPath?: string;
	blobReadWriteToken?: string;
}

export interface StorageProvider {
	get(key: string): Promise<string | null>;
}

class VercelBlobStorageProvider implements StorageProvider {
	constructor(private token: string) {}

	async get(key: string): Promise<string | null> {
		try {
			const blob = await head(key, { token: this.token });
			const response = await fetch(blob.downloadUrl);

			if (!response.ok) {
				return null;
			}

			return await response.text();
		} catch (error) {
			console.error(`Blob storage get operation failed for key ${key}:`, error);
			return null;
		}
	}
}

class LocalStorageProvider implements StorageProvider {
	constructor(private basePath: string = "./data") {}

	async get(key: string): Promise<string | null> {
		try {
			const { readFile } = await import("node:fs/promises");
			const { join } = await import("node:path");
			const filePath = join(this.basePath, key);
			return await readFile(filePath, "utf8");
		} catch (error) {
			console.error(`Local storage get operation failed for key ${key}:`, error);
			return null;
		}
	}
}

export function createStorageProvider(config: StorageConfig): StorageProvider {
	switch (config.type) {
		case "blob":
			if (!config.blobReadWriteToken) {
				throw new Error("Blob storage requires a read/write token");
			}
			return new VercelBlobStorageProvider(config.blobReadWriteToken);
		case "local":
			return new LocalStorageProvider(config.localPath);
		default:
			throw new Error(`Unsupported storage type: ${config.type}`);
	}
}

export function getStorageConfig(): StorageConfig {
	const isProduction = process.env.NODE_ENV === "production";
	return {
		type: isProduction ? "blob" : "local",
		localPath: process.env.LOCAL_STORAGE_PATH || "./data",
		blobReadWriteToken: process.env.BLOB_READ_WRITE_TOKEN,
	};
}
