import Image from 'next/image'
import LogoUGM from '@/assets/university/logo/ugm.svg'
import Head from 'next/head'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'

const universities = [{
	city: 'Jakarta',
	name: 'Universitas Indonesia',
	imageSrc: LogoUGM,
	href: '/university/UniversitasIndonesia',
},
{
	city: 'Jakarta',
	name: 'Universitas Gadjah Mada',
	imageSrc: LogoUGM,
	href: '/university/UniversitasGadjahMada',
},
{
	city: 'Jakarta',
	name: 'Universitas Sunter',
	imageSrc: LogoUGM,
	href: '/university/UniversitasSunter',
},
{
	city: 'Jakarta',
	name: 'Universitas Sunter',
	imageSrc: LogoUGM,
	href: '/university/UniversitasSunter',
},
{
	city: 'Jakarta',
	name: 'Universitas Sunter',
	imageSrc: LogoUGM,
	href: '/university/UniversitasSunter',
},
]

export default function UniversityLanding() {
	return (
		<>
			<Head>
				<title>Universities in Libels Campus Fair</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			{/* <LeftBlob /> */}
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
				<div className="mx-auto max-w-2xl pb-16 sm:pb-24 lg:max-w-none lg:pb-32">
					<div className="mt-6 justify-items-center grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-x-6 lg:grid-cols-5">
						{universities.map((university) => (
							<div key={university.city} className="group relative">
								<div className="relative h-48 w-48 overflow-hidden rounded-lg bg-white group-hover:opacity-75">
									<Image
										src={university.imageSrc}
										alt={'Logo ' + university.name}
										width={300}
										height={300}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<a href={university.href}>
										<span className="absolute inset-0" />
										{university.city}
									</a>
								</h3>
								<p className="text-base font-semibold text-gray-900">{university.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<RightBlob />
		</>
	)
}
