import Link from 'next/link'
import LeftBlob from '@/components/global/decorations/LeftBlob'
import RightBlob from '@/components/global/decorations/RightBlob'
import QuotedCard from '@/components/home/QuotedCard'
import Newsletter from '@/components/global/card/Newsletter'
import HeroSection from '@/components/global/card/HeroSection'

export default function Home() {
	return (
		<>
			<LeftBlob />
			<div className="mx-auto max-w-2xl py-32 lg:py-40">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Shout out! untuk seluruh alumni yang aktif di Universitas.{' '}
						<Link href="/volunteer/register" className="font-semibold text-teal-600">
							<span className="absolute inset-0" aria-hidden="true" />
							Lebih lanjut <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Raih karirmu melalui pendidikan
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Kami percaya jika pendidikan tidak melulu hanya sekedar formalitas, membantu untuk menentukan berdasarkan career-path mereka adalah tugas kami.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="#"
							className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
						>
							Get started
						</Link>
						<Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
							Pelajari lebih lanjut <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
			<HeroSection />
			<QuotedCard
				fullName="Reyhan Fabiano"
				title="Mahasiswa Fisika di UNUD">
				Mimpi tanpa realistis adalah omong kosong, realita tanpa mimpi sama saja dengan bunuh diri.
			</QuotedCard>
			<Newsletter />
			<RightBlob />
		</>
	)
}
