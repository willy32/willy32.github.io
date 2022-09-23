import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";

type Data = {
    message: string
};
type UserObj = {
    name?: string,
    email: string,
    password: string
};

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
    if(req.method === "GET"){
        let data:string = fs.readFileSync("data.json", {encoding: "utf-8"});
        res.status(200).json(JSON.parse(data));
    }
    else if(req.method === "POST"){
        let data:UserObj = JSON.parse(req.body);
        let fileData:UserObj[] = JSON.parse(fs.readFileSync("data.json", {encoding: "utf-8"}));
        fileData.push(data);
        fs.writeFileSync("data.json", JSON.stringify(fileData));
        res.status(200).json({ message: 'Success' });
    }
    else if(req.method === "PUT"){
        let data:UserObj = JSON.parse(req.body);
        let fileData:UserObj[] = JSON.parse(fs.readFileSync("data.json", {encoding: "utf-8"}));
        fileData.forEach((user) => {
            if(user.email === data.email && user.password === data.password){
                res.status(200).json({ message: 'Success! Welcome ' + user.name});
                return;
            }
        });
        res.status(403).json({ message: 'Failed' });
    }
}