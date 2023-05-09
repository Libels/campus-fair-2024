declare namespace NodeJS {
	export interface ProcessEnv {
		NEXT_PUBLIC_BACKEND_URL: string
		NEXTAUTH_URL: string
		NEXTAUTH_SECRET: string
		GITHUB_ID: string
		GITHUB_SECRET: string
		DISCORD_ID: string
		DISCORD_SECRET: string
		TWITTER_ID: string
		TWITTER_SECRET: string
		GOOGLE_ID: string
		GOOGLE_SECRET: string
	}
}