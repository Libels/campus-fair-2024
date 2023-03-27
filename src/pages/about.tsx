import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import FeaturedSection from '@/components/about/FeaturedSection'
import Teams from '@/components/about/Teams'

const people = [
	{
		name: 'Ahmad Azhari',
		role: 'President',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Fray Dalton',
		role: 'Vice President',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Desi Kristianti',
		role: 'Babu #1',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Mutliqa Maimun',
		role: 'Babu #2',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Hanna Balqis',
		role: 'Babu #3',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

export default function About() {
	return (
		<>
			<Head>
				<title>About Libels Campus Fair</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-fuchsia-600">Tepat karir</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Tentukan pilihan yang terbaik untukmu
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Libels Campus Fair merupakan program rutin tahunan yang tujuan utamanya mengarahkan siswa yang ingin melanjutkan pendidikannya, hanya saja sangat disayangkan karena masih ada orang yang salah mengambil Program studi atau mungkin Universitas yang dituju.

						</p>
					</div>
				</div>
			</div>
			<FeaturedSection />
			<Teams people={people} />
			<RightBlob />
		</>
	)
}
