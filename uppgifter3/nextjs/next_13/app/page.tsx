import Link from 'next/link';
import React from 'react';
import Posts from './components/Posts/Posts';
import db from "./components/config";

async function getData(id?: number) {
    if(!id){
        /*
        const res: Response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        return data;
        */
        const rows = await db.query({sql: "SELECT * FROM company"});
        return rows
    }else{
        const res: Response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id.toString());
        const data = await res.json();
        console.log(data);
        return data;
    }
}

async function page() {
    const data:any = await getData();
    console.log(data);

    return (
        <div className='min-h-screen'>
            HomePAGE
            <Link href={"/about"}>About</Link>
            <Posts posts={data}/>
        </div>
    )
}

export default page