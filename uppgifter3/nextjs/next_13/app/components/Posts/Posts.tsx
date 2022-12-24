import React from 'react';
import type postsProps from "../../../typings";

const Posts:React.FC<{posts: postsProps[]}> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id} className='p-4'>
                        <h1 className='font-bold'>{post.name}</h1>
                        <p>{post.country}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;