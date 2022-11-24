import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerlessMysql } from 'serverless-mysql';
import withMySQL from '../../../_server/utils/withMySQL';

const handler = (
    req: NextApiRequest,
    res: NextApiResponse,
    db: ServerlessMysql
    ) => {
    const { id } = req.query;

    const edit = async (req: NextApiRequest, res: NextApiResponse, db: ServerlessMysql) => {
        console.log(id);
        db.query("UPDATE notes SET title='?',content='?' WHERE id=?", [req.body.title, req.body.content, id])
    }

    if (req.method === "POST"){
        edit(req, res, db);
    }
}

export default handler;