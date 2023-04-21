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

export default function DashboardLanding() {
	return (
		<>
			<Head>
				<title>Libels Campus Fair Dashboard</title>
				<meta name="description" content="Manage your profile." />
			</Head>
			{/* <LeftBlob /> */}
			<div>
				Dashboard
			</div>
			<RightBlob />
		</>
	)
}
