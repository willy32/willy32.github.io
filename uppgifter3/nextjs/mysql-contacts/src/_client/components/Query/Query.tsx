import React from 'react';
import mysql from "serverless-mysql";

type QueryProps = {
    sql: string
}

const Query = async({sql}: QueryProps) => {
    const db = mysql({
        config:({
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })
    });
    try {
        const results = await db.query(sql);
        db.end();
        return results;
    } catch (err) {
        return err;
    }
};

export default Query;