// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Query from "../../../components/Query/Query"
import { Games } from "../../../components/Interface/Interface";

type Data = {
  name: Games[]
}

export default async function handler(req: NextApiRequest,res: NextApiResponse){
  const companyId = req.query.id;
  const sql = `SELECT * FROM game WHERE companyId=${companyId}`;
  const data = await Query({sql: sql});
  res.status(200).json(data)
}
