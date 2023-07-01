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
	if (!body.fullName || !body.organizationTitle || !body.company || !body.email || !body.phoneNumber || !body.message) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ message: 'body not complete' })
	}

	// API endpoint
	const endpoint = '/api/lead'

	axios.post(endpoint, {
		fullName: body.fullName,
		email: body.email,
		phoneNumber: body.phoneNumber,
		role: body.organizationTitle,
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
