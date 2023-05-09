import Image from 'next/image'
import LogoUGM from '@/assets/university/logo/ugm.svg'
import Head from 'next/head'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Link from 'next/link'

import { signIn } from "next-auth/react"

export default function Register() {
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
						Sign up for account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						{/* <div>
							<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
								Username
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
						</div> */}

						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
								Phone Number
							</label>
							<div className="mt-2">
								<input
									id="phone"
									name="phone"
									type="tel"
									autoComplete="phone"
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
								className="primary-button w-full bg-fuchsia-600 text-white hover:bg-fuchsia-500 focus-visible:outline-fuchsia-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<div>
						<div className="relative mt-8 mb-4">
							<div className="absolute flex items-center inset-0">
								<div className="border-gray-300 border-t w-full"></div>
							</div>
							<div className="relative flex justify-center font-light text-sm text-gray-300">
								<div className="bg-white px-2">or</div>
							</div>
						</div>
						<div className="flex space-x-4">
							<button className="w-1/3 primary-button border border-gray-600 text-gray-600 focus-visible:outline-gray-600" onClick={() => signIn("google")}>Google</button>
							<button className="w-1/3 primary-button bg-[#24292f] text-white focus-visible:outline-[#24292f]" onClick={() => signIn("github")}>GitHub</button>
							<button className="w-1/3 primary-button bg-[#7289da] text-white focus-visible:outline-[#7289da]" onClick={() => signIn("discord")}>Discord</button>
						</div>
					</div>

					<p className="mt-10 text-center text-sm text-gray-500">
						Sudah punya akun?{' '}
						<Link href="/account/login" className="font-semibold leading-6 text-fuchsia-600 hover:text-fuchsia-500">
							Masuk Sekarang
						</Link>
					</p>
				</div>
			</div>
			<RightBlob />
		</>
	)
}