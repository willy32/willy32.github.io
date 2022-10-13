// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Query from "../../../components/Query/Query"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const sql = "SELECT * FROM company"
    const data = await Query({sql: sql});
  res.status(200).json(data)
}
