import Link from 'next/link'

const navigation = [
	{ name: 'Sponsors', href: '/' },
	{ name: 'About', href: '/about' },
]

export default function Footer() {
	return (
		<>
			<footer className="absolute inset-x-0 z-50">
				<nav className="flex items-center justify-between p-6 lg:px-8 text-sm" aria-label="Global">
					<div className="flex lg:flex-1">
						&copy; 2023 Libels Campus Fair &times; SABAKO
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link key={item.name} href={item.href} className="text-sm leading-6 text-gray-500 hover:text-gray-700">
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</footer>
		</>
	)
}