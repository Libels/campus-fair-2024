import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import Newsletter from '@/components/global/card/Newsletter'
import Sponsors from '@/components/fundraise/Sponsors'
import Prospect from '@/components/fundraise/Prospect'

export default function Fundraise() {
	return (
		<>
			<Head>
				<title>Libels Campus Fair Fundraising Programme</title>
				<meta name="description" content="Reach your dream career through education." />
			</Head>
			<LeftBlob />
			<div className="mx-auto max-w-2xl pt-32 lg:pt-40">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Mencari peluang kerja sama?{' '}
						<Link href="/fundraise/sponsor" className="font-semibold text-fuchsia-600">
							<span className="absolute inset-0" aria-hidden="true" />
							Mari Diskusi <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Fundraising Programme
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Kegiatan kami diselenggarakan tanpa mengejar keuntungan, namun ada biaya operasional yang memang tetap diperlukan untuk kegiatan ini. Kami mengajak anda untuk menyisihkan sedikit untuk membantu kegiatan ini secara langsung maupun tidak.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/fundraise/donate"
							className="rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
						>
							Donasi Sekarang
						</Link>
						<Link href="/fundraise/sponsor" className="text-sm font-semibold leading-6 text-gray-900">
							Registrasi mitra <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="pt-16 lg:pt-20">
				<Prospect />
			</div>
			<div className="pb-16 lg:pb-20">
				<Sponsors />
			</div>
			<Newsletter />
			<RightBlob />
		</>
	)
}
