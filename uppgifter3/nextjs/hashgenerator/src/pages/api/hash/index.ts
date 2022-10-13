// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {createHash, createHmac} from "crypto";

type Data = {
  name: string
};

const key: string = "yaboykongming";

function hash(input: string){
    return createHmac("sha256", key).update(input).digest("base64");
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const data: {text: string} = JSON.parse(req.body);
    res.status(200).json({hash: hash(data.text)});
}
