import { useState, useEffect } from "react"

import Head from "next/head"
import Image from "next/image"
import LeftBlob from "@/components/global/decorations/LeftBlob"

import Teams from "@/components/university/Teams"
import Link from "next/link"

interface UniversityData {
	name: string,
	description: string,
	featuredImage: string,
	features: Array<{
		name: string,
		description: string
	}>,
	contacts: Array<{
		type: string,
		href: string,
		text: string,
		name: string,
	}>,
	gallery: Array<{
		url: string,
		alt: string,
		caption: string,
	}>,
	staff: Array<{
		name: string,
		major: string,
		enrolled: number,
		imageUrl: string,
	}>,
}

export default function UniversityItem({ params }: { params: { slug: string } }) {
	const [university, setData] = useState<UniversityData>({
		name: '',
		description: '',
		featuredImage: '',
		features: [],
		contacts: [],
		gallery: [],
		staff: [],
	})

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/university/0')

			if (!res.ok) {
				throw new Error('Failed to fetch data')
			}

			setData(await res.json())
		})()
	}, [])

	return (
		<>
			<Head>
				<title>{university.name} - Libels Campus Fair</title>
				<meta name="description" content={university.description} />
			</Head>
			<LeftBlob />
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div className="lg:col-span-2">
					<Image
						className="w-full h-80 object-cover rounded-lg"
						alt="Featured Image"
						src={university.featuredImage}
						width={1000}
						height={1000}
					/>
				</div>
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{university.name}</h2>
					<p className="mt-4 text-gray-500">
						{university.description}
					</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{university.features?.map((feature) => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-gray-900">{feature.name}</dt>
								<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
							</div>
						))}
					</dl>

					<div className="mt-16 text-gray-500">
						<h3 className="font-bold text-gray-900">Informasi Kontak</h3>
						{university.contacts.map((contact) => (
							<div key={contact.href} className="pt-2 text-sm grid grid-cols-2">
								<span className="font-medium text-gray-900">
									{contact.type}
								</span>
								<Link className="text-gray-500 hover:text-gray-700" href={contact.href}>
									<span className="">{contact.text}</span>
									<span className="pl-1">({contact.name})</span>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="gap-4 sm:gap-6 lg:gap-8 sm:columns-2">
					{university.gallery.map((picture) => (
						<div key={picture.url}>
							<Image
								className="w-full object-cover aspect-video"
								alt={picture.alt}
								src={picture.url}
								width={1000}
								height={1000}
							/>
							<div className="text-sm sm:text-xs text-gray-500 font-medium mt-2 mb-4">{picture.caption}</div>
						</div>
					))}
				</div>
			</div>
			<Teams people={university.staff} university={university} />
		</>
	)
}
