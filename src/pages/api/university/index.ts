// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CommunityPhoto from "@/assets/about/community-photo.webp"

import BuildingFacility from "@/assets/about/dummy/building_facility.jpg"
import Lecture from "@/assets/about/dummy/critics_lecture_architecture.jpg"
import Mascot from "@/assets/about/dummy/mascot_beaver.jpg"

import LogoUGM from '@/assets/university/logo/ugm.svg'

type Data = {
	city: string,
	name: string,
	imageSrc: string,
	slug: string,
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>
) {
	res.status(200).json(
		[
			{
				city: 'Jakarta',
				name: 'Universitas Indonesia',
				imageSrc: LogoUGM,
				slug: 'universitas-indonesia',
			},
			{
				city: 'Jakarta',
				name: 'Universitas Gadjah Mada',
				imageSrc: LogoUGM,
				slug: 'universitas-gadjah-mada',
			},
			{
				city: 'Jakarta',
				name: 'Universitas Sunter',
				imageSrc: LogoUGM,
				slug: 'universitas-sunter',
			},
			{
				city: 'Jakarta',
				name: 'Universitas Sunter',
				imageSrc: LogoUGM,
				slug: 'universitas-sunter-1',
			},
			{
				city: 'Jakarta',
				name: 'Universitas Sunter',
				imageSrc: LogoUGM,
				slug: 'universitas-sunter-2',
			},
		]
	)
}