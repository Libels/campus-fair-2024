import Image from "next/image"
import ProgramPhoto from "@/assets/fundraise/program-photo.webp"

export default function Prospect() {
	return (
		<div className="relative overflow-hidden bg-white">
			<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<h2 className="font text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Bersama orang-orang hebat
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Tiap tahunnya kami mengumpulkan volunteer yang berprestasi untuk meningkatkan potensi siswa, dan tiap tahunnya selalu ada perkembangan untuk semua siswa dalam mengambil keputusan.
						</p>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Pertumbuhan siswa yang masuk PTN juga meningkat tiap tahunnya, namun juga tak sedikit yang masuk ke perusahaan bergengsi. Mungkin ini juga kesempatan anda untuk mengembangkan bisnis melalui kolaborasi bersama kami.
						</p>
					</div>
					<div>
						<div className="mt-10">
							<div
								aria-hidden="true"
								className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-full w-full overflow-hidden">
												<Image
													src={ProgramPhoto}
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
