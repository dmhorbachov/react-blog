import PageTitle from "../components/PageTitle";
import React, {useState} from "react";
import {posts} from '../store/posts'
import {useSelector} from "react-redux";
import Post from "../components/blog/single";
import {user} from '../store/currentUser'

const Blog = () => {
    let blogPosts = useSelector(posts);
    const currentUser = useSelector(user);

    const [currentUserOnly, setCurrentUserOnly] = useState(false);

    if(currentUserOnly) {
        blogPosts = blogPosts.filter((post) => post.authorId === currentUser.id);
    }

    const handleControlChange = (event) => {
        setCurrentUserOnly(event.target.checked);
    };

    return (
        <div className="blog-archive container">
            <PageTitle title="Blog"/>

            <div className="show-control form-check mb-5">
                <input
                    type="checkbox"
                    checked={currentUserOnly}
                    onChange={handleControlChange}
                    className="form-check-input"
                    id="show-user-posts"
                />
                <label htmlFor="show-user-posts" className="form-check-label">Show current user's posts only</label>
            </div>

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