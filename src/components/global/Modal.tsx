import { Dispatch, SetStateAction, Fragment, useRef, MutableRefObject } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal({ show, triggerModal, children, cancelButtonRef }: { show: boolean, triggerModal: Dispatch<SetStateAction<boolean>>, children: any, cancelButtonRef: MutableRefObject<null> }) {
	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={triggerModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export function SuccessModal({ show, triggerModal, title, children }: { show: boolean, triggerModal: Dispatch<SetStateAction<boolean>>, title: string, children: any }) {
	const cancelButtonRef = useRef(null)

	return (
		<Modal show={show} triggerModal={triggerModal} cancelButtonRef={cancelButtonRef}>
			<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="flex justify-center">
					<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0">
						<CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
					</div>
				</div>
				<div className="mt-3 text-center">
					<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
						{title}
					</Dialog.Title>
					<div className="mt-2">
						<p className="text-sm text-gray-500">
							{children}
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3"
					onClick={() => triggerModal(false)}
					ref={cancelButtonRef}
				>
					Okay
				</button>
			</div>
		</Modal>
	)
}

export function WarningModal({ show, triggerModal, title, children }: { show: boolean, triggerModal: Dispatch<SetStateAction<boolean>>, title: string, children: any }) {
	const cancelButtonRef = useRef(null)

	return (
		<Modal show={show} triggerModal={triggerModal} cancelButtonRef={cancelButtonRef}>
			<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="flex justify-center">
					<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0">
						<ExclamationTriangleIcon className="h-6 w-6 text-orange-600" aria-hidden="true" />
					</div>
				</div>
				<div className="mt-3 text-center">
					<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
						{title}
					</Dialog.Title>
					<div className="mt-2">
						<p className="text-sm text-gray-500">
							{children}
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3"
					onClick={() => triggerModal(false)}
					ref={cancelButtonRef}
				>
					Okay
				</button>
			</div>
		</Modal>
	)
}

export function ErrorModal({ show, triggerModal, title, children }: { show: boolean, triggerModal: Dispatch<SetStateAction<boolean>>, title: string, children: any }) {
	const cancelButtonRef = useRef(null)

	return (
		<Modal show={show} triggerModal={triggerModal} cancelButtonRef={cancelButtonRef}>
			<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div className="flex justify-center">
					<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0">
						<ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
					</div>
				</div>
				<div className="mt-3 text-center">
					<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
						{title}
					</Dialog.Title>
					<div className="mt-2">
						<p className="text-sm text-gray-500">
							{children}
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3"
					onClick={() => triggerModal(false)}
				>
					Deactivate
				</button>
				<button
					type="button"
					className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
					onClick={() => triggerModal(false)}
					ref={cancelButtonRef}
				>
					Cancel
				</button>
			</div>
		</Modal>
	)
}