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
	// const endpoint = '/api/subscribe'
	const endpoint = 'https://discord.com/api/webhooks/1163522620294180944/dVnUxEzk2LH_Izo5tF1g7tX85bS-KhaF038xcPAw6r872IxiByTa-Igfp-lsX0zhJ2yC?thread_id=1163525214999674961&wait=true'

	axios.post(endpoint, {
		content: `\`${body.email}\``
	}).then(response => {
		const success = response.data.author.bot
		// const success = response.data.success

		res.status(
			success ? response.status : 400
		).json({
			message: success ? response.data : 'Something Wrong'
		})
	}).catch(error => {
		console.log(error)
		res.status(500).json({ message: 'Server Maintenance' })
	})

}
