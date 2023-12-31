import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

export type Person = {
	name: string
	role: string
	imageUrl: string
}

export default function Teams() {
	const [people, fillPeople] = useState<Person[]>([])

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/teams')

			if (!res.ok) {
				throw new Error('Failed to fetch data')
			}

			fillPeople(await res.json())
		})()
	}, [])

	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kenalan dulu yuk!</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Tahun ini, staff Libels Campus Fair ditunjuk dari orang yang berpengalaman di bidangnya.
					</p>
				</div>
				<ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
					<Suspense fallback={
						<div key="skeleton" className="group relative animate-pulse">
							<div className="h-48 w-48 overflow-hidden rounded-lg bg-gray-300"></div>
							<div className="relative h-4 w-24 bg-gray-300 rounded-lg mt-6 mb-2"></div>
							<div className="relative h-4 w-48 bg-gray-300 rounded-lg"></div>
						</div>
					}>
						{people.map((person) => (
							<li key={person.name}>
								<div className="flex items-center gap-x-6">
									<Image className="h-16 w-16 rounded-full object-cover" width={256} height={256} src={person.imageUrl} alt="" />
									<div>
										<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
										<p className="text-sm font-semibold leading-6 text-teal-600">{person.role}</p>
									</div>
								</div>
							</li>
						))}
					</Suspense>
				</ul>
			</div>
		</div>
	)
}
