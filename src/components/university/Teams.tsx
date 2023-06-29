import Image from 'next/image'

export default function Teams({ people, university }: {
	people: Array<{
		name: string,
		major: string,
		enrolled: number,
		imageUrl: string,
	}>,
	university: {
		name: string,
		description: string,
		features: Array<{
			name: string,
			description: string
		}>,
		contacts: Array<{
			type: string,
			href: string,
			text: string,
			name: string,
		}>,
	},
}) {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Staff dari {university.name}</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Libels Campus Fair akan menghadirkan orang yang hebat seperti mereka.
					</p>
				</div>
				<ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
					{people.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<Image className="h-16 w-16 rounded-full" width={256} height={256} src={person.imageUrl} alt="" />
								<div>
									<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
									<p className="text-sm font-semibold leading-6 text-teal-600">
										{person.major} <span className="font-normal text-teal-400">({person.enrolled})</span>
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
