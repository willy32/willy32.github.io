import mysql from 'serverless-mysql';

const db = mysql({
    config:({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD    
    })
});

export default db;