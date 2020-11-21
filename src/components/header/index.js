import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {
    blogAuthors
} from "../../store/authors";
import {
    replace,
    user
} from '../../store/currentUser'
import NavItem from "./nav";
import {Link} from "react-router-dom";

const Index = () => {
    const authors = useSelector(blogAuthors);
    const currentUser = useSelector(user);
    const dispatch = useDispatch();

    const switchUser = (authorId) => {
        const newUser = authors.find((author) => {
            return parseInt(authorId) === author.id
        })

        dispatch(replace(newUser))
    }

    return (
        <div className="header container py-2 mb-4">
            <div className="row">
                <div className="col-8">
                    <div className="nav d-flex">
                        {authors.map((author, index) => (
                            <NavItem
                                key={index}
                                author={author}
                                currentUser={currentUser}
                                onUserClick={switchUser}
                            />
                        ))}
                        <Link to='/'><span className="btn btn-primary">To Blog</span></Link>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <Link to='/create-post'>
                        <span className="btn btn-info mr-3">Create Post</span>
                    </Link>
                    <span className="pt-2">Logged in as: {currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Index;