import Image from 'next/image'
import LogoUGM from '@/assets/university/logo/ugm.svg'
import Head from 'next/head'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Link from 'next/link'
import { ReduxTypes } from '@/redux-reducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {

	const subscribed: boolean = useSelector((state: ReduxTypes) => state.userSession.newsletter)
	const dispatch = useDispatch()

	return (
		<>
			<Head>
				<title>Libels Campus Fair Dashboard</title>
				<meta name="description" content="Manage your profile." />
			</Head>
			{/* <LeftBlob /> */}
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
								Username / Email address
							</label>
							<div className="mt-2">
								<input
									id="username"
									name="username"
									type="text"
									autoComplete="username"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="text-sm">
									<Link href="/forgot-password" className="font-semibold text-fuchsia-600 hover:text-fuchsia-500">
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-fuchsia-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Belum menjadi anggota?{' '}
						<Link href="/account/register" className="font-semibold leading-6 text-fuchsia-600 hover:text-fuchsia-500">
							Daftar Sekarang
						</Link>
					</p>
				</div>
			</div>
			<RightBlob />
		</>
	)
}