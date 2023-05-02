import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Newsletter from '@/components/global/card/Newsletter'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function FundraiseSponsor() {
	const [agreed, setAgreed] = useState(false)

	return (
		<>
			<Head>
				<title>Libels Campus Fair Fundraising Programme</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />
			<div className="isolate px-6 py-24 sm:py-32 lg:px-8">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div
						className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bergabung jadi mitra.</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Temukan pasar baru untuk produk anda.
					</p>
				</div>
				<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
								Nama
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="full-name"
									id="full-name"
									autoComplete="name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="organization-title" className="block text-sm font-semibold leading-6 text-gray-900">
								Posisi
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="organization-title"
									id="organization-title"
									autoComplete="organization-title"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
								Perusahaan / Lembaga / Nama Usaha
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="company"
									id="company"
									autoComplete="organization"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
								Email
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
								Nomor Telpon (dapat dihubungi melalui WhatsApp)
							</label>
							<div className="relative mt-2.5">
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									autoComplete="tel"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
								Pesan
							</label>
							<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
									defaultValue={''}
								/>
							</div>
						</div>
						<span className="text-sm leading-6 text-gray-600  sm:col-span-2">
							Dengan mengirimkan pesan, artinya anda setuju terhadap{' '}
							<Link href="/privacy" className="font-semibold text-fuchsia-600">
								privacy&nbsp;policy
							</Link>.
						</span>
					</div>
					<div className="mt-10">
						<button
							type="submit"
							className="block w-full rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
						>
							Mari diskusi lebih lanjut
						</button>
					</div>
				</form>
			</div>
			<Newsletter />
			<RightBlob />
		</>
	)
}
