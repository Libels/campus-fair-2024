// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CommunityPhoto from "@/assets/about/community-photo.webp"

import BuildingFacility from "@/assets/about/dummy/building_facility.jpg"
import Lecture from "@/assets/about/dummy/critics_lecture_architecture.jpg"
import Mascot from "@/assets/about/dummy/mascot_beaver.jpg"
import { Data } from './data'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>
) {
	res.status(200).json(Data)
}