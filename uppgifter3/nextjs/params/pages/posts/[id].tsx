import { useRouter } from 'next/router';
import React from 'react';
import Posts from '../../components/Posts/Posts';

type postsProps = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export async function getServerSideProps({params}) {
    console.log(params);
    

    const res: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const data: postsProps[] = await res.json();

    return {
      props: {data}, // will be passed to the page component as props
    }
}

const PostId = ({data}: {data:postsProps}) => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <Posts posts={[data]}/>
        </div>
    );
};

export default PostId;