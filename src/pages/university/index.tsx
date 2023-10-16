import Image from 'next/image'
import Head from 'next/head'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import HeroSection from '@/components/global/card/HeroSection'
import Newsletter from '@/components/global/card/Newsletter'

interface UniversityData {
	city: string,
	name: string,
	imageSrc: string,
	slug: string,
}

export default function UniversityLanding() {
	const [universities, setData] = useState<UniversityData[]>([])

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/university')

			if (!res.ok) {
				throw new Error('Failed to fetch data')
			}

			setData(await res.json())
		})()
	}, [])

	return (
		<>
			<Head>
				<title>Universities in Libels Campus Fair</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<div className="pt-24 sm:pt-32 pb-12 sm:pb-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-teal-600">Universitas terbaik</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Tentukan pilihan yang terbaik untukmu
						</p>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none pb-8 sm:pb-12 lg:pb-16">
					<div className="mt-6 justify-items-center grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-x-6 lg:grid-cols-5">
						<Suspense fallback={
							<div key="skeleton" className="group relative animate-pulse">
								<div className="h-48 w-48 overflow-hidden rounded-lg bg-gray-300"></div>
								<div className="relative h-4 w-24 bg-gray-300 rounded-lg mt-6 mb-2"></div>
								<div className="relative h-4 w-48 bg-gray-300 rounded-lg"></div>
							</div>
						}>
							{universities.map((university) => (
								<div key={university.slug} className="group relative">
									<div className="relative h-48 w-48 overflow-hidden rounded-lg bg-white group-hover:opacity-75">
										<Image
											src={university.imageSrc}
											alt={'Logo ' + university.name}
											width={300}
											height={300}
											className="h-full w-full object-contain object-center"
										/>
									</div>
									<h3 className="mt-6 text-sm text-gray-500">
										<a href={'/university/' + university.slug}>
											<span className="absolute inset-0" />
											{university.city}
										</a>
									</h3>
									<p className="text-base font-semibold text-gray-900">{university.name}</p>
								</div>
							))}
						</Suspense>
					</div>

					<div className="mt-12">
						<p>Belum dapat menentukan? kamu bisa pikirkan terlebih dahulu, atau mungkin ingin <Link href="/university/test" className="font-semibold text-teal-600">coba soal UTBK</Link>.?</p>
					</div>

				</div>
			</div>
			<HeroSection />
			<Newsletter />
		</>
	)
}
