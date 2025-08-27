/**
 * Formats an Ethereum address to show first and last characters
 * @param address - The full Ethereum address
 * @param startChars - Number of characters to show at start (default: 4)
 * @param endChars - Number of characters to show at end (default: 4)
 * @returns Formatted address like "0x1234...5678"
 */
export function formatAddress(address: string, startChars = 4, endChars = 4): string {
	if (!address || address.length < startChars + endChars) {
		return address
	}

	return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

/**
 * Copies text to clipboard and returns success/failure
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text)
		return true
	} catch (_error) {
		// Fallback for older browsers
		try {
			const textArea = document.createElement("textarea")
			textArea.value = text
			textArea.style.position = "fixed"
			textArea.style.left = "-999999px"
			textArea.style.top = "-999999px"
			document.body.appendChild(textArea)
			textArea.focus()
			textArea.select()
			const result = document.execCommand("copy")
			document.body.removeChild(textArea)
			return result
		} catch (fallbackError) {
			console.error("Failed to copy to clipboard:", fallbackError)
			return false
		}
	}
}
