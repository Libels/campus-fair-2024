import Head from "next/head"
import Image from "next/image"
import LeftBlob from "@/components/global/decorations/LeftBlob"

import CommunityPhoto from "@/assets/about/community-photo.webp"
import Teams from "@/components/university/Teams"
import Link from "next/link"

const university = {
	name: 'Universitas Sunter',
	description: 'Sebuah kampus terakreditasi SSR, terletak di ginjal kota Jakarta. Kampus yang berisikan mahasiswa abadi tidak mengenal gelar dan lelah, selalu menjadi pribadi yang baik dan mampu menolong sesama hidup.',
	features: [
		{ name: 'Akreditas', description: 'Diakreditasi SSR oleh Bappebti.' },
		{ name: 'Catatan Pendiri', description: 'Dibangun oleh Fray Dalton (2023)' },
		{ name: 'Fakultas Unggulan', description: 'Ilmu Bar & Disco Millenial' },
		{ name: 'Lokasi', description: 'Sunter Agung, Tanjung Priok, Jakarta Utara' },
		{ name: 'Afiliasi', description: 'UI, UGM, BAN PT, HONDA, ASTRA, SUZUKI, YAMAHA, MIT' },
		{ name: 'Jenis Perguruan', description: 'Padepokan Tinggi Nusantara Swasta' },
	],
	contacts: [
		{
			type: 'WhatsApp',
			href: 'https://wa.me/6281285302139',
			text: '+62 812 8530 2139',
			name: 'Reyhan Fabiano',
		},
		{
			type: 'Line',
			href: 'https://line.me/ti/p/~gresik007',
			text: '@gresik007',
			name: 'Reyhan Fabiano',
		},
	],
}

const people = [
	{
		name: 'Ahmad Azhari',
		major: 'Hukum Rimba',
		enrolled: 2023,
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Fray Dalton',
		major: 'Hukum Rimba',
		enrolled: 2023,
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Desi Kristianti',
		major: 'Hukum Rimba',
		enrolled: 2023,
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Mutliqa Maimun',
		major: 'Hukum Rimba',
		enrolled: 2023,
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Hanna Balqis',
		major: 'Hukum Rimba',
		enrolled: 2023,
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

export default function UniversityItem({ params }: { params: { slug: string } }) {
	return (
		<>
			<Head>
				<title>University in Libels Campus Fair</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
				<div className="lg:col-span-2">
					<Image
						className="w-full h-80 object-cover rounded-lg"
						alt="Featured Image"
						src={CommunityPhoto}
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
						{university.features.map((feature) => (
							<div key={feature.name} className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-gray-900">{feature.name}</dt>
								<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
							</div>
						))}
					</dl>

					<div className="mt-16 text-gray-500">
						<h3 className="font-bold text-gray-900">Informasi Kontak</h3>
						{university.contacts.map((contact) => (
							<div key={contact.name} className="pt-2 text-sm grid grid-cols-2">
								<span className="font-medium text-gray-900">
									{contact.type}:
								</span>
								<Link className="text-gray-500 hover:text-gray-700" href={contact.href}>
									<span className="">{contact.text}</span>
									<span className="pl-1">({contact.name})</span>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
						alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
						alt="Top down view of walnut card tray with embedded magnets and card groove."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
						alt="Side of walnut card tray with card groove and recessed card area."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg bg-gray-100"
					/>
				</div>
			</div>
			<Teams people={people} university={university} />
		</>
	)
}
