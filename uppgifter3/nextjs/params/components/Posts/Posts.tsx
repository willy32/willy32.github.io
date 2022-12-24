import Link from 'next/link';
import React from 'react';

type postsProps = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};
type PostsProps = {
    posts: postsProps[]
};

const Posts: React.FC<{posts: postsProps[]}> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post: postsProps) => (
                    <Link href={`/posts/${post.id}`}>
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <h3>Completed: {post.completed ? "Yes" : "No"}</h3>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Posts;