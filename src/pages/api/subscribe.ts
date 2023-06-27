// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from '@/lib/axios'
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

	// API endpoint
	const endpoint = '/api/subscribe'

	axios.post(endpoint, {
		email: body.email
	}).then(response => {
		res.status(response.status).json({ message: response.data })
	}).catch(error => {
		res.status(500).json({ message: 'something went wrong' })
		console.log(error)
	})
}
