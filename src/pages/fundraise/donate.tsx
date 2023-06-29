import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Newsletter from '@/components/global/card/Newsletter'

import { useState } from 'react'
import { ChevronDownIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup, Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const paymentMethods = [
	{ name: 'BCA', isAvailable: false },
	{ name: 'MANDIRI', isAvailable: true },
	{ name: 'BRI', isAvailable: true },
	{ name: 'BNI', isAvailable: true },
	{ name: 'SHOPEEPAY', isAvailable: true },
	{ name: 'OVO', isAvailable: true },
	{ name: 'ALFAMART', isAvailable: true },
	{ name: 'INDOMARET', isAvailable: true },
]

export default function FundraiseDonation() {
	const [anonymous, toggleAnonymous] = useState(false)
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[2])

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
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bantu kegiatan ini.</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Kegiatan ini banyak membantu teman-teman untuk mendapatkan rencana masa depan yang lebih tertata.
					</p>
				</div>
				<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
								Nama
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="university" className="block text-sm font-semibold leading-6 text-gray-900">
								University
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="university"
									id="university"
									autoComplete="organization"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
								Email
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
								Phone number
							</label>
							<div className="relative mt-2.5">
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									autoComplete="tel"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="nominal" className="block text-sm font-medium leading-6 text-gray-900">
								Nominal
							</label>
							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<span className="text-gray-500 sm:text-sm">IDR</span>
								</div>
								<input
									type="text"
									name="nominal"
									id="nominal"
									className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
									placeholder="0.00"
								/>
								{/* <div className="absolute inset-y-0 right-0 flex items-center">
									<label htmlFor="currency" className="sr-only">
										Currency
									</label>
									<select
										id="currency"
										name="currency"
										className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm"
									>
										<option>USD</option>
										<option>CAD</option>
										<option>EUR</option>
									</select>
								</div> */}
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
								Message
							</label>
							<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
									defaultValue={''}
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<div className="flex items-center justify-between">
								<h3 className="text-sm font-medium text-gray-900">Metode Pembayaran</h3>
							</div>

							<RadioGroup value={selectedPaymentMethod} onChange={setSelectedPaymentMethod} className="mt-4">
								<RadioGroup.Label className="sr-only"> Choose a paymentMethod </RadioGroup.Label>
								<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
									{paymentMethods.map((paymentMethod) => (
										<RadioGroup.Option
											key={paymentMethod.name}
											value={paymentMethod}
											disabled={!paymentMethod.isAvailable}
											className={({ active }) =>
												classNames(
													paymentMethod.isAvailable
														? 'cursor-pointer bg-white text-gray-900 shadow-sm'
														: 'cursor-not-allowed bg-gray-50 text-gray-200',
													active ? 'ring-2 ring-teal-500' : '',
													'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
												)
											}
										>
											{({ active, checked }) => (
												<>
													<RadioGroup.Label as="span">{paymentMethod.name}</RadioGroup.Label>
													{paymentMethod.isAvailable ? (
														<span
															className={classNames(
																active ? 'border' : 'border-2',
																checked ? 'border-teal-500' : 'border-transparent',
																'pointer-events-none absolute -inset-px rounded-md'
															)}
															aria-hidden="true"
														/>
													) : (
														<span
															aria-hidden="true"
															className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
														>
															<svg
																className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
																viewBox="0 0 100 100"
																preserveAspectRatio="none"
																stroke="currentColor"
															>
																<line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
															</svg>
														</span>
													)}
												</>
											)}
										</RadioGroup.Option>
									))}
								</div>
							</RadioGroup>
						</div>
						<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
							<div className="flex h-6 items-center">
								<Switch
									checked={anonymous}
									onChange={toggleAnonymous}
									className={classNames(
										anonymous ? 'bg-teal-600' : 'bg-gray-200',
										'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
									)}
								>
									<span className="sr-only">Agree to policies</span>
									<span
										aria-hidden="true"
										className={classNames(
											anonymous ? 'translate-x-3.5' : 'translate-x-0',
											'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
										)}
									/>
								</Switch>
							</div>
							<Switch.Label className="text-sm leading-6 text-gray-600">
								Jadikan donasi saya sebagai anonim.
							</Switch.Label>
						</Switch.Group>
						<span className="text-sm leading-6 text-gray-600  sm:col-span-2">
							Dengan melanjutkan ke pembayaran, artinya anda setuju terhadap{' '}
							<Link legacyBehavior href="/privacy" className="font-semibold text-teal-600">
								<a target="_blank">privacy&nbsp;policy</a>
							</Link>.
						</span>
					</div>
					<div className="mt-10">
						<button
							type="submit"
							className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
						>
							Lanjutkan Pembayaran
						</button>
					</div>
				</form>
			</div>
			<Newsletter />
			<RightBlob />
		</>
	)
}
