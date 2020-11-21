import React from "react";
import {blogAuthors} from '../../store/authors'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    const authors = useSelector(blogAuthors)

    const author = authors.find((author) => author.id === post.authorId)

    return (
        <div className="post single-post mb-4 p-4">
            <Link to={`/post/${post.id}`}>
                <h4 className="post-title mb-3 font-weight-bold">{post.title}</h4>
            </Link>
            <div className="post-body mb-3"
                 dangerouslySetInnerHTML={{
                     __html: post.body
                 }}
            />
            <div className="meta d-flex font-weight-light font-italic">
                <span className="date mr-3">Created at: {post.createdAt}</span>
                <span className="author mr-3">Created by: {author.name}</span>
            </div>
        </div>
    );
};

export default Post