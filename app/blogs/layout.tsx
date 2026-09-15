import React, { ReactNode } from 'react';

type PostLayoutProps = { children: ReactNode }

const PostLayout = ({children}: PostLayoutProps) => {
    return (
        <div>

            <h2>Fixed Portion of blog layout</h2>
            <div>{children}</div>
        </div>
    );
};

export default PostLayout;