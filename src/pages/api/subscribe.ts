// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	// Get data submitted in request's body.
	const body = req.body

	// Guard clause checks for first and last name,
	// and returns early if they are not found
	if (!body.email) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ message: 'email address required' })
	}

	// Found the name.
	// Sends a HTTP success code
	res.status(200).json({ message: body })
}
