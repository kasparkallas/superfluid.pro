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

	// Token admin panel visibility - determines if Tokens collection appears in sidebar
	// Note: This returns boolean only (not Where) as admin access controls visibility, not data filtering
	static tokenAdminAccess: ({ req }: { req: { user?: unknown } }) => boolean = ({ req: { user } }) => {
		if (!user) return false
		const typedUser = user as User

		// Admins always see tokens
		if (typedUser.role === "admin") return true

		// Viewers never see tokens in admin
		if (typedUser.role !== "editor") return false

		// Editors with full token access
		if (typedUser.tokenPermissions?.canEditAllTokens !== false) {
			return true
		}

		// Editors with any specific token permissions
		const perms = typedUser.tokenPermissions
		const hasTagPerms = (perms?.allowedTags?.length ?? 0) > 0
		const hasAddrPerms = (perms?.allowedAddresses?.length ?? 0) > 0
		const hasChainPerms = (perms?.allowedChainIds?.length ?? 0) > 0

		return hasTagPerms || hasAddrPerms || hasChainPerms
	}

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

	// Campaign-specific access - filters by campaign ID
	static campaignAccess: Access = ({ req: { user } }) => {
		if (!user) return false
		const typedUser = user as User

		// Admins have full access
		if (typedUser.role === "admin") return true

		// Check if user can access all campaigns
		if (typedUser.campaignPermissions?.canAccessAllCampaigns) return true

		// Get allowed campaign IDs
		const allowedIds = typedUser.campaignPermissions?.allowedCampaignIds?.map((c) => c.campaignId) || []

		// If no campaigns configured, deny access
		if (allowedIds.length === 0) return false

		// Return query filter for allowed campaigns
		return { id: { in: allowedIds } }
	}

	// Campaign child entities access (PointEvents, PushRequests, ApiKeys) - filters by campaign relationship
	static campaignChildAccess: Access = ({ req: { user } }) => {
		if (!user) return false
		const typedUser = user as User

		if (typedUser.role === "admin") return true
		if (typedUser.campaignPermissions?.canAccessAllCampaigns) return true

		const allowedIds = typedUser.campaignPermissions?.allowedCampaignIds?.map((c) => c.campaignId) || []
		if (allowedIds.length === 0) return false

		return { campaign: { in: allowedIds } }
	}

	// For editors to create/update child entities in their campaigns
	static campaignChildEditorAccess: Access = ({ req: { user }, data }) => {
		if (!user) return false
		const typedUser = user as User

		if (typedUser.role === "admin") return true
		if (typedUser.role !== "editor") return false // Viewers cannot write

		if (typedUser.campaignPermissions?.canAccessAllCampaigns) return true

		const allowedIds = typedUser.campaignPermissions?.allowedCampaignIds?.map((c) => c.campaignId) || []
		if (allowedIds.length === 0) return false

		// For create: validate the campaign in data is allowed
		if (data?.campaign) {
			const campaignId = typeof data.campaign === "object" ? data.campaign?.id : data.campaign
			return allowedIds.includes(campaignId)
		}

		// For update/delete: return query filter
		return { campaign: { in: allowedIds } }
	}
}
