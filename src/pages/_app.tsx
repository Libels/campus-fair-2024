import Layout from '@/components/global/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

import store, { persistor } from '@/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PersistGate>
			</Provider>
		</SessionProvider>
	)
}
