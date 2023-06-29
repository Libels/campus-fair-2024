import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, useEffect, useState } from 'react'

import { SuccessModal, WarningModal } from '@/components/global/Modal'

import { useDispatch, useSelector } from 'react-redux'
import { newsletterSubscribed, ReduxTypes, toggleLoading } from '@/redux-reducer'

import { EmailInput } from '@/components/forms/Input'

export default function Newsletter() {
	const [emailAddress, setEmailAddress] = useState<string>('')

	const subscribed: boolean = useSelector((state: ReduxTypes) => state.userSession.newsletter)
	const dispatch = useDispatch()

	const addressUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(event.currentTarget.value)

	const [isErrorOpen, setIsErrorOpen] = useState<boolean>(false)
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const [emailValidated, validateEmail] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('Terjadi kendala yang tidak dapat dihindari, cobalah beberapa saat lagi.')

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!emailValidated) return event.currentTarget.email.setCustomValidity("Email not properly formatted")

		dispatch(toggleLoading(true))

		// API endpoint
		const endpoint = '/api/subscribe'
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: emailAddress
			}),
		}

		// Send the form data to our forms API
		const response = await fetch(endpoint, options)

		// Get the response data from server as JSON.
		const status = await response.status

		const body = await response.json()

		dispatch(toggleLoading(false))

		setErrorMessage(body.message)

		return (status === 200) ? setIsDialogOpen(true) : setIsErrorOpen(true)
	}

	useEffect(() => {
		if (isSubmitted && !isDialogOpen) {
			dispatch(newsletterSubscribed())
		} else {
			setIsSubmitted(true)
		}
	}, [isDialogOpen])

	return (
		subscribed ? <></> :
			<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
				<SuccessModal show={isDialogOpen} triggerModal={setIsDialogOpen} title="Berhasil subscribe">
					Email anda telah terdaftar pada sistem, kami akan mengirimkan informasi terbaru kepada anda.
				</SuccessModal>

				<WarningModal show={isErrorOpen} triggerModal={setIsErrorOpen} title="Sepertinya ada yang salah">
					{errorMessage}
				</WarningModal>

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe for updates!</h2>
							<p className="mt-4 text-lg leading-8 text-gray-300">
								Jangan ketinggalan informasi terbaru dari kami, subscribe dan dapatkan email berlangganan dari kami.
							</p>
							<div>
								<form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4" action="/api/hello" method="post">
									<label htmlFor="email-address" className="sr-only">
										Email address
									</label>
									<EmailInput
										required
										id="email-address"
										name="email"
										type="email"
										value={emailAddress}
										onChange={addressUpdate}
										autoComplete="email"
										emailValidate={validateEmail}
										className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
										placeholder="Enter your email"
									/>
									<button
										type="submit"
										className="flex-none rounded-md bg-teal-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
									>
										Subscribe
									</button>
								</form>
							</div>
						</div>
						<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
							<div className="flex flex-col items-start">
								<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
									<CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
								</div>
								<dt className="mt-4 font-semibold text-white">Informasi rutin</dt>
								<dd className="mt-2 leading-7 text-gray-400">
									Update terkait Campus Fair akan dikirimkan langsung melalui email.
								</dd>
							</div>
							<div className="flex flex-col items-start">
								<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
									<HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
								</div>
								<dt className="mt-4 font-semibold text-white">Dapatkan penawaran menarik</dt>
								<dd className="mt-2 leading-7 text-gray-400">
									Sponsor kami mungkin memiliki penawaran yang menarik bagi anda.
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<svg
					className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
					viewBox="0 0 1155 678"
					fill="none"
				>
					<path
						fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
						fillOpacity=".3"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#9089FC" />
							<stop offset={1} stopColor="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
	)
}
