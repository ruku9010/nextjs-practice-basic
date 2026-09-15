import Link from "next/link";
import React from "react";

interface PostProps {
  post: {
    id: number;
    title: string;
    shortDescription: string;
  };
}

const Post = ({ post }: PostProps) => {
  const {id, title } = post;
  return (
    <div>
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p></p>
          <div className="justify-end card-actions">
            <Link href={`/blogs/${id}`}>
                <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
