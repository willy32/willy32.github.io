import { NextApiRequest, NextApiResponse } from 'next';
import mysql, { ServerlessMysql } from 'serverless-mysql';

export type NextApiHandlerWithMySQL<T = any> = (req: NextApiRequest, res: NextApiResponse<T>, db: ServerlessMysql) => unknown | Promise<unknown>;

const getMySQL = async () => {
  // @ts-ignore
  if(!global.__MYSQL__) {
    console.log('Creating MySQL instance');
    // @ts-ignore
    global.__MYSQL__ = mysql();    
    // @ts-ignore
    global.__MYSQL__.config({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });
    // @ts-ignore
    await global.__MYSQL__.connect();
  }
  // @ts-ignore
  return global.__MYSQL__;
}

const withMySQL = (handler: NextApiHandlerWithMySQL) => async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await getMySQL();
  return await handler(req, res, db);
}

export default withMySQL;