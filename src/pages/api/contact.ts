// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	const body = req.body

	// Guard clause checks required body,
	// and returns early if they are not found
	if (!body.fullName || !body.email || !body.phoneNumber || !body.message) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ message: 'Fill the required body' })
	}
	
	// !body.fullName || !body.company  || !body.email || !body.phoneNumber || !body.message

	// Sends a HTTP success code
	res.status(200).json({ message: body })
}
