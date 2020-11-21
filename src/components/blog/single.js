import React from "react";

const Post = ({post}) => {
    return (
        <div className="post single-post mb-4">
            <h2 className="post-title mb-3">{post.title}</h2>
            <div className="post-body mb-3">{post.body}</div>
            <div className="meta d-flex">
                <span className="date mr-3">Created at: {post.createdAt}</span>
                <span className="author mr-3">Created by: {post.authorId}</span>
            </div>
        </div>
    );
};

export default Post