// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerlessMysql } from 'serverless-mysql';
import withMySQL from '../../../_server/utils/withMySQL';


async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  db: ServerlessMysql
) {
    const get = async (req: NextApiRequest, res: NextApiResponse, db: ServerlessMysql) => {
        const rows = await db.query("SELECT * FROM notes");
        res.status(200).json(rows);
    }
    const post = async (req: NextApiRequest, res: NextApiResponse, db: ServerlessMysql) => {
        const { pid } = req.query;
        console.log(pid);
        
        db.query("INSERT INTO notes(title, content) VALUES(?, ?)", [req.body.title, req.body.content]);
        res.status(200).json({message: "Posted successfully!"});
    }
    const remove = async (req: NextApiRequest, res: NextApiResponse, db: ServerlessMysql) => {
        db.query("DELETE FROM notes WHERE id='?'", [req.body.id]);
        res.status(200).json({message: "Deleted successfully!"});
    }
    const edit = async (req: NextApiRequest, res: NextApiResponse, db: ServerlessMysql) => {

    }

    if(req.method === "GET"){
        get(req, res, db);
    }
    else if (req.method === "POST"){
        post(req, res, db);
    }
    else if (req.method === "DELETE"){
        remove(req, res, db);
    }
}

export default withMySQL(handler);