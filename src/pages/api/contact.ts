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
	const body = req.body

	// Guard clause checks required body,
	// and returns early if they are not found
	if (!body.fullName || !body.email || !body.phoneNumber || !body.message) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ message: 'Fill the required body' })
	}

	// API endpoint
	const endpoint = '/api/contact'

	axios.post(endpoint, {
		fullName: body.fullName,
		email: body.email,
		phoneNumber: body.phoneNumber,
		company: body.company,
		message: body.message
	}).then(response => {
		const success = response.data.success

		return res.status(
			success ? response.status : 400
		).json({
			message: success ? response.data : response.data.message
		})
	}).catch(error => {
		console.log(error)
	})

	res.status(500).json({ message: 'Server Maintenance' })
}
