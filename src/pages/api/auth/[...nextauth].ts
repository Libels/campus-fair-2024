import NextAuth, { NextAuthOptions } from "next-auth"

import { LaravelAdapter } from "@/lib/LaravelAdapter"

import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
// import TwitterProvider from "next-auth/providers/twitter"
// import AppleProvider from "next-auth/providers/apple"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
	// https://next-auth.js.org/configuration/providers/oauth
	adapter: LaravelAdapter(),
	providers: [
		/* 
		// Temporarily removing the Apple provider from the demo site as the
		// callback URL for it needs updating due to Vercel changing domains
	
		Providers.Apple({
		  clientId: process.env.APPLE_ID,
		  clientSecret: {
			allowDangerousEmailAccountLinking: true
			appleId: process.env.APPLE_ID,
			teamId: process.env.APPLE_TEAM_ID,
			privateKey: process.env.APPLE_PRIVATE_KEY,
			keyId: process.env.APPLE_KEY_ID,
		  },
		}),
		*/
		CredentialsProvider({
			id: 'libels-campus-fair',
			name: 'LCF Account',
			credentials: {
				username: { label: "Username / Email", type: "text" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				const res = await fetch("/your/endpoint", {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				})
				const user = await res.json()

				// If no error and we have user data, return it
				if (res.ok && user) {
					return user
				}
				// Return null if user data could not be retrieved
				return null
			}
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_ID,
			clientSecret: process.env.DISCORD_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		// TwitterProvider({
		// 	clientId: process.env.TWITTER_ID,
		// 	clientSecret: process.env.TWITTER_SECRET,
		// allowDangerousEmailAccountLinking: true
		// 	version: "2.0", // opt-in to Twitter OAuth 2.0
		// }),
	],
	theme: {
		colorScheme: "light",
	},
	callbacks: {
		async jwt({ token }) {
			// token.userRole = "admin"
			return token
		},
	},
}

export default NextAuth(authOptions)