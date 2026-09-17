import React from 'react';

interface PostPropsType {
    post: {
        title: string
        body: string
        
    }
}

const Post = ({post}: PostPropsType) => {
    return (
        <div className='border-2 m-2 border-gray-200'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;