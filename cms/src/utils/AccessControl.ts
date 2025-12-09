import type { Access, AccessArgs, FieldAccess, Where } from "payload"
import type { User } from "../payload-types"

export class AccessControl {
	// Common access patterns
	static publicRead = () => true

	static requireRoles(...roles: Array<"admin" | "editor" | "viewer">) {
		return ({ req: { user } }: AccessArgs) => {
			if (!user) return false
			const typedUser = user as User
			return roles.includes(typedUser.role)
		}
	}

	// Preset role combinations
	static adminOnly = AccessControl.requireRoles("admin")
	static editorOrAdmin = AccessControl.requireRoles("admin", "editor")
	static viewerOrAbove = AccessControl.requireRoles("admin", "editor", "viewer")

	// Token-specific access with OR-based restrictions
	static tokenAccess: Access = ({ req: { user } }) => {
		if (!user) return false
		const typedUser = user as User

		// Admins have full access
		if (typedUser.role === "admin") return true

		// Non-editors have no write access
		if (typedUser.role !== "editor") return false

		// Editors with full token access
		if (typedUser.tokenPermissions?.canEditAllTokens !== false) {
			return true
		}

		// Build OR conditions for restricted editors
		const perms = typedUser.tokenPermissions
		const conditions: Where[] = []

		if (perms?.allowedTags?.length) {
			conditions.push({
				"tags.tag": {
					in: perms.allowedTags.map((t) => t.tag),
				},
			})
		}

		if (perms?.allowedAddresses?.length) {
			conditions.push({
				address: {
					in: perms.allowedAddresses.map((a) => a.address.toLowerCase()),
				},
			})
		}

		if (perms?.allowedChainIds?.length) {
			conditions.push({
				chainId: {
					in: perms.allowedChainIds.map((c) => c.chainId),
				},
			})
		}

		// If no restrictions configured, deny access
		return conditions.length > 0 ? { or: conditions } : false
	}

	// User collection specific helpers
	static selfOrAdmin({ req: { user }, id }: AccessArgs) {
		if (!user) return false
		const typedUser = user as User
		return typedUser.role === "admin" || user.id === id
	}

	static selfOnly({ req: { user }, id }: AccessArgs) {
		if (!user) return false
		return user.id === id
	}

	// Field-level access helper
	static fieldAdminOnly: FieldAccess = ({ req: { user } }) => {
		if (!user) return false
		const typedUser = user as User
		return typedUser.role === "admin"
	}
}
