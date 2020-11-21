import PageTitle from "../components/PageTitle";
import React from "react";
import {posts} from '../store/posts'
import {useSelector} from "react-redux";
import Post from "../components/blog/single";

const Blog = () => {
    const blogPosts = useSelector(posts)

    return (
        <div className="blog-archive container">
            <PageTitle title="Blog"/>

            {blogPosts.map((post, index) => (
                <Post
                    post={post}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Blog