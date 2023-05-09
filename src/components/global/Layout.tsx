import Head from 'next/head'
import NavBar from '@/components/global/NavBar'
import Footer from '@/components/global/Footer'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Head>
				<title>Libels Campus Fair</title>
				<meta name="description" content="Reach your dream career through education." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-white min-h-screen relative isolate">
				<NavBar />
				<div className="relative isolate pt-14">
					{children}
				</div>
				<Footer />
			</div>
		</>
	)
}