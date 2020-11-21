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
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="btn btn-info mr-3">Create Post</div>
                    <span className="pt-2">Logged in as: {currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Index;