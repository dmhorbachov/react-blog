import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../store/authors'
import userReducer from '../store/currentUser'
import postsReducer from '../store/posts'

export default configureStore({
    reducer: {
        author: authorReducer,
        user: userReducer,
        posts: postsReducer
    },
});