// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

import { getToken } from "next-auth/jwt"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// const token = await getToken({ req })
	// res.send(JSON.stringify(token, null, 2))

	res.status(200).json({ name: 'John Doe' })
}
