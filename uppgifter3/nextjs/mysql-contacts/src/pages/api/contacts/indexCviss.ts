// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Query from '../../../Query/Query';

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const sql = "SELECT * FROM contact"
    const data = await Query({sql: sql});
    //@ts-ignore
    res.status(200).json(data)
}
