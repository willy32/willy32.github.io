import type { NextApiRequest, NextApiResponse } from 'next'
import {ServerlessMysql} from "serverless-mysql";
import withMySQL from '../../../_server/utilities/withMySQL';


async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  db: ServerlessMysql
) {
  const results = await db.query("SELECT * FROM contact");
  db.end();
  res.status(200).json(results);
}

export default withMySQL(handler);