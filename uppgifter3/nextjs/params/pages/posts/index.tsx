import React from 'react';
import Posts from '../../components/Posts/Posts';

type postsProps = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export async function getServerSideProps() {
    const res: Response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data: postsProps[] = await res.json();

    return {
      props: {data}, // will be passed to the page component as props
    }
}
  

function index({data}: {data:postsProps[]}) {
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default index;