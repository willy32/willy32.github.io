// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerlessMysql } from 'serverless-mysql';
import withMySQL from '../../_server/utils/withMySQL';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  db: ServerlessMysql
) {

  if(req.method === "GET"){
    const rows = await db.query("SELECT * FROM score ORDER BY score ASC")
    res.status(200).json(rows);
  }
  else if (req.method === "POST"){
    console.log(req.body);
    await db.query("INSERT INTO score(name, score) VALUES(?, ?)", [req.body.name, req.body.score]);
    res.status(200).json({message: "Score posted!"});
  }
}

export default withMySQL(handler);