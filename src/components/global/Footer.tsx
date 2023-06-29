import Link from 'next/link'

const navigation = [
	{ name: 'Sponsors', href: '/fundraise' },
	{ name: 'About', href: '/about' },
	{ name: 'Privacy', href: '/privacy' },
]

export default function Footer() {
	return (
		<>
			<footer className="absolute bottom-0 inset-x-0 z-50">
				<nav className="flex items-center justify-between p-6 lg:px-8 text-sm text-gray-500" aria-label="Global">
					<span>
						&copy; 2023 Libels Campus Fair &times;{' '}
						<Link legacyBehavior href="https://sabako.id/">
							<a target="_blank" className="text-teal-600 hover:text-teal-700">SABAKO</a>
						</Link>
					</span>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link key={item.name} href={item.href} className="leading-6 hover:text-gray-700">
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</footer>
		</>
	)
}