// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CommunityPhoto from "@/assets/about/community-photo.webp"

import BuildingFacility from "@/assets/about/dummy/building_facility.jpg"
import Lecture from "@/assets/about/dummy/critics_lecture_architecture.jpg"
import Mascot from "@/assets/about/dummy/mascot_beaver.jpg"

type Data = {
	message: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	// Get data submitted in request's body.
	const body = req.body

	// Optional logging to see the responses
	// in the command line where next.js app is running.
	console.log('body: ', body)

	// full - name
	// organization - title
	// company
	// email
	// phone - number
	// message

	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body.fullName || !body.organizationTitle || !body.company || !body.email || !body.phoneNumber || !body.message) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ message: 'First or last name not found' })
	}

	// Found the name.
	// Sends a HTTP success code
	res.status(200).json({ message: body })
}
