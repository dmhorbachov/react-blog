import React, {useState} from "react";
import {create} from '../store/posts'
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {user} from "../store/currentUser";
import {useHistory} from 'react-router-dom'
import PageTitle from "../components/PageTitle";
import {posts} from "../store/posts";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const currentUser = useSelector(user);
    const blogPosts = useSelector(posts);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        event.preventDefault();
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value);
        event.preventDefault();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!title || !body) {
            alert("Either title or body is empty");
            return;
        }

        dispatch(create({
            id: blogPosts.length + 1,
            title,
            body,
            createdAt: moment().format('lll'),
            authorId: currentUser.id
        }));

        history.push('/');
    };

    return (
        <div className="create-post container">
            <PageTitle title="Create post"/>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        placeholder="Post title"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="body"
                        className="form-control"
                        placeholder="Body"
                        onChange={handleBodyChange}
                    >
                        {body}
                    </textarea>
                </div>
                <input type="submit" value="Post" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default CreatePost