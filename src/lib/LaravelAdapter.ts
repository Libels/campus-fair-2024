import type {
	Adapter,
	AdapterUser,
	AdapterAccount,
	AdapterSession,
	VerificationToken,
} from "next-auth/adapters"

export async function fetchUser<T>(): Promise<T> {
	return new Promise((resolve, reject) => {

	})
}

export function LaravelAdapter(options = {}): Adapter {
	return {
		async createUser(user) {
			return await fetchUser()
		},
		async getUser(id) {
			return await fetchUser()
		},
		async getUserByEmail(email) {
			return await fetchUser()
		},
		async getUserByAccount({ providerAccountId, provider }) {
			return await fetchUser()
		},
		async updateUser(user) {
			return await fetchUser()
		},
		async deleteUser(userId) {
			return null
			// return await fetchUser()
		},
		async linkAccount(account) {
			return null
			// return await fetchUser()
		},
		async unlinkAccount({ providerAccountId, provider }) {
			// return await fetchUser()
		},
		async createSession({ sessionToken, userId, expires }) {
			return await fetchUser()
		},
		async getSessionAndUser(sessionToken) {
			return await fetchUser()
		},
		async updateSession({ sessionToken }) {
			return await fetchUser()
		},
		async deleteSession(sessionToken) {
			return null
			// return await fetchUser()
		},
		async createVerificationToken({ identifier, expires, token }) {
			return await fetchUser()
		},
		async useVerificationToken({ identifier, token }) {
			return await fetchUser()
		},
	}
}