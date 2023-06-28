import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Newsletter from '@/components/global/card/Newsletter'
import isEmail from 'validator/lib/isEmail'

import { ChangeEvent, FormEvent, useState } from 'react'
import { SuccessModal, WarningModal } from '@/components/global/Modal'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Contact() {
	const [agreed, setAgreed] = useState<boolean>(false)
	const [isErrorOpen, setIsErrorOpen] = useState<boolean>(false)
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

	const [errorMessage, setErrorMessage] = useState<string>('Terjadi kendala yang tidak dapat dihindari, cobalah beberapa saat lagi.')

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// Initiate form input selector
		const target = event.target as typeof event.target & {
			fullName: { value: string },
			company: { value: string },
			email: { value: string },
			phoneNumber: { value: string },
			message: { value: string },
		}

		// Get data from the form selector
		const data = {
			fullName: target.fullName.value,
			company: target.company.value,
			email: target.email.value,
			phoneNumber: target.phoneNumber.value,
			message: target.message.value,
		}

		// API endpoint
		const endpoint = '/api/contact'
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)

		// Get the response data from server as JSON.
		const status = await response.status
		const body = await response.json()

		if (status === 400) setErrorMessage(body.message)

		return (status === 200) ? setIsDialogOpen(true) : setIsErrorOpen(true)
	}

	const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
		if (!isEmail(e.target.value)) {
			setIsErrorOpen(true)
			setErrorMessage("Alamat email tidak valid")
		}
	}

	return (
		<>
			<Head>
				<title>Libels Campus Fair Contact Form</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />

			<SuccessModal show={isDialogOpen} triggerModal={setIsDialogOpen} title="Berhasil mengirimkan">
				Pesan anda telah dikirimkan, tunggu balasan dari kami, kami mungkin perlu waktu sedikit lebih lama karena keterbatasan tim.
			</SuccessModal>

			<WarningModal show={isErrorOpen} triggerModal={setIsErrorOpen} title="Sepertinya ada yang salah">
				{errorMessage}
			</WarningModal>

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
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mari berdiskusi.</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Punya pertanyaan atau ada yang ingin disampaikan?
					</p>
				</div>
				<form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
								Nama <span className="text-red-500 text-sm">*</span>
							</label>
							<div className="mt-2.5">
								<input
									required
									type="text"
									name="fullName"
									id="fullName"
									autoComplete="name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
								Asal Institusi
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
								Email <span className="text-red-500 text-sm">*</span>
							</label>
							<div className="mt-2.5">
								<input
									required
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									onBlur={validateEmail}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
								Nomor Telpon (dapat dihubungi melalui WhatsApp) <span className="text-red-500 text-sm">*</span>
							</label>
							<div className="relative mt-2.5">
								<input
									required
									type="tel"
									name="phoneNumber"
									id="phoneNumber"
									autoComplete="tel"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
								Pesan <span className="text-red-500 text-sm">*</span>
							</label>
							<div className="mt-2.5">
								<textarea
									required
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
							<Link legacyBehavior href="/privacy" className="font-semibold text-fuchsia-600">
								<a target="_blank">privacy&nbsp;policy</a>
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
