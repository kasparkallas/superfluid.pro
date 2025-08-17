import { headers as getHeaders } from "next/headers";
import { payload } from "@/payload";
import type { User } from "@/payload-types";

/**
 * Requires the current request to be authenticated as an admin user.
 * Returns either an error response to be returned to the client,
 * or the authenticated admin user.
 *
 * @example
 * ```ts
 * const auth = await requireAdmin()
 * if ('error' in auth) return auth.error
 *
 * // Continue with admin-only logic
 * console.log('Admin user:', auth.user.email)
 * ```
 */
export async function requireAdmin() {
	const headers = await getHeaders();
	const { user } = await payload.auth({ headers });

	if (!user) {
		return {
			error: Response.json({ error: "Unauthorized - Authentication required" }, { status: 401 }),
		};
	}

	const typedUser = user as User;

	if (typedUser.role !== "admin") {
		return {
			error: Response.json({ error: "Forbidden - Admin access required" }, { status: 403 }),
		};
	}

	return { user: typedUser };
}

/**
 * Requires the current request to be authenticated with one of the specified roles.
 * Returns either an error response to be returned to the client,
 * or the authenticated user.
 *
 * @example
 * ```ts
 * const auth = await requireRoles('admin', 'editor')
 * if ('error' in auth) return auth.error
 *
 * // Continue with authorized logic
 * console.log('User:', auth.user.email, 'Role:', auth.user.role)
 * ```
 */
export async function requireRoles(...roles: Array<"admin" | "editor" | "viewer">) {
	const headers = await getHeaders();
	const { user } = await payload.auth({ headers });

	if (!user) {
		return {
			error: Response.json({ error: "Unauthorized - Authentication required" }, { status: 401 }),
		};
	}

	const typedUser = user as User;

	if (!roles.includes(typedUser.role)) {
		return {
			error: Response.json({ error: `Forbidden - Requires one of: ${roles.join(", ")}` }, { status: 403 }),
		};
	}

	return { user: typedUser };
}

/**
 * Gets the current authenticated user if available.
 * Returns null if not authenticated.
 *
 * @example
 * ```ts
 * const user = await getCurrentUser()
 * if (user) {
 *   console.log('Logged in as:', user.email)
 * }
 * ```
 */
export async function getCurrentUser(): Promise<User | null> {
	const headers = await getHeaders();
	const { user } = await payload.auth({ headers });

	return user as User | null;
}
