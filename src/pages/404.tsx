import Link from "next/link"
import Image from 'next/image'
import CommunityPhoto from '@/assets/about/community-photo.webp'

export default function NotFound() {
	return (
		<>
			<main className="flex min-h-full w-full items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="w-1/2">
					<p className="text-base font-semibold text-fuchsia-600">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&#39;t find the page you&#39;re looking for.</p>
					<div className="mt-10">
						<Link
							href="/"
							className="rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
						>
							Go back home
						</Link>
					</div>
				</div>
				<div className="w-1/2 h-80">
					<Image
						className="h-full object-cover bg-gray-900 ring-1 ring-gray-400/10"
						alt="Potret Komunitas Kami" src={CommunityPhoto} />
				</div>
			</main>
		</>
	)
}
