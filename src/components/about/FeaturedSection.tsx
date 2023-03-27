import Image from 'next/image'
import { BriefcaseIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import CommunityPhoto from '@/assets/about/community-photo.webp'

export default function FeaturedSection() {
	return (
		<div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
					className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							x="50%"
							y={-1}
							patternUnits="userSpaceOnUse"
						>
							<path d="M100 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
				</svg>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<p className="text-base font-semibold leading-7 text-fuchsia-600">Raih karirmu</p>
							<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bersama komunitas yang hebat</h1>
							<p className="mt-6 text-xl leading-8 text-gray-700">
								Program tahunan kami diadakan bersama komunitas yang berstandar tinggi, kini kami mencoba melakukan inovasi yang beradaptasi dengan keadaan sekarang.
							</p>
						</div>
					</div>
				</div>
				<div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<Image
						className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						alt="Potret Komunitas Kami" src={CommunityPhoto} />
					{/* <img
						className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						src="https://wordpress.org/files/2022/10/community-photo-2-q50-unscaled.webp"
						alt=""
					/> */}
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
							<p>
								Kami tahu betul jika anak muda atau remaja itu paling tidak suka kalau diatur apalagi dikekang, oleh karena itu kami membuat perubahan dimana program pelatihan kami ini dapat menjadi sesuatu yang menarik dan juga mengarahkan kalau sebenarnya pendidikan itu tidak melulu dalam dikekang.
							</p>
							<ul role="list" className="mt-8 space-y-8 text-gray-600">
								<li className="flex gap-x-3">
									<BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-fuchsia-600" aria-hidden="true" />
									<span>
										<strong className="font-semibold text-gray-900">Menentukan karir.</strong> Salah satu kunci dimana peserta mesti tahu karir apa yang ingin diambil.
									</span>
								</li>
								<li className="flex gap-x-3">
									<LightBulbIcon className="mt-1 h-5 w-5 flex-none text-fuchsia-600" aria-hidden="true" />
									<span>
										<strong className="font-semibold text-gray-900">Motivasi karir.</strong> Menyuluhkan betapa pentingnya karir, tapi sekaligus memberikan gambaran realita, karena mimpi tanpa realita itu hanya omong kosong.
									</span>
								</li>
								<li className="flex gap-x-3">
									<AcademicCapIcon className="mt-1 h-5 w-5 flex-none text-fuchsia-600" aria-hidden="true" />
									<span>
										<strong className="font-semibold text-gray-900">Menentukan pilihan.</strong> Sebenarnya bukan hal yang sulit, yang penting kita tahu prioritas dan di mana realistis lebih tinggi ketimbang gengsi.
									</span>
								</li>
							</ul>
							<p className="mt-8">
								Program ini diharapkan dapat memberikan pencerahan bagi kalian yang punya kendala atau masih plin-plan menentukan jalan perkuliahan. Bagi kalian yang sudah tahu ingin mengambil prodi apa namun tidak tahu mana perkuliahan yang harus dipilih juga jadi salah satu highlight dari program ini.
							</p>
							<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Tidak ingin melanjutkan kuliah? bukan masalah.</h2>
							<p className="mt-6">
								Kami tidak pernah memaksa untuk masuk ke dunia perkuliahan, kami lebih memilih untuk mengarahkan bagaimana meraih karir dengan jalan yang terbaik. Satu yang pasti kami tidak mau kamu salah mengambil prodi di perkuliahan, secara alternatif kami juga memberikan pengarahan terkait dunia kerja.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
