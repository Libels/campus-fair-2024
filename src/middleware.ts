import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	switch (request.nextUrl.pathname) {
		case '/account/login':
		case '/account/register':
		case '/account/forgot-password':
			break
		default:
			return NextResponse.redirect(new URL('/account/login', request.url))
			break
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/account/:path*',
}