import Link from "next/link"
import Image from 'next/image'
import CommunityPhoto from '@/assets/about/community-photo.webp'

export default function ErrorPage() {
	return (
		<>
			<main className="flex lg:flex-row flex-col-reverse min-h-full w-full items-center bg-white px-8 py-24 sm:py-32 lg:px-16">
				<div className="lg:w-1/2">
					<p className="text-base font-semibold text-fuchsia-600">???</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&#39;t process your request.</p>
					<div className="mt-10">
						<Link
							href="/"
							className="rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
						>
							Go back home
						</Link>
					</div>
				</div>
				<div className="lg:w-1/2 h-80 mb-4 lg:mb-0">
					<Image
						className="h-full object-cover bg-gray-900 ring-1 ring-gray-400/10"
						alt="Potret Komunitas Kami" src={CommunityPhoto} />
				</div>
			</main>
		</>
	)
}
