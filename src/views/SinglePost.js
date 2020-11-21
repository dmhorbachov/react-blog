import {Link, useParams} from 'react-router-dom'
import {posts} from "../store/posts";
import {useSelector} from "react-redux";
import {blogAuthors} from "../store/authors";
import React from "react";
import PageTitle from "../components/PageTitle";

const SinglePost = () => {
    let {id} = useParams();
    const blogPosts = useSelector(posts);
    const authors = useSelector(blogAuthors)

    const currentPost = blogPosts.find((post) => {
        return post.id === parseInt(id)
    });

    const currentAuthor = authors.find((author) => author.id === currentPost.authorId);

    return (
        <div className="single-post container">
            <PageTitle title={currentPost.title}/>
            <div className="post-body mb-3"
                 dangerouslySetInnerHTML={{
                     __html: currentPost.body
                 }}
            />
            <div className="meta d-flex font-weight-light font-italic">
                <span className="date mr-3">Created at: {currentPost.createdAt}</span>
                <span className="author mr-3">Created by: {currentAuthor.name}</span>
            </div>
        </div>
    )
}

export default SinglePost;