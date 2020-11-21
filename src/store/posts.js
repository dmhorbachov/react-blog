import moment from "moment";
import {createSlice} from "@reduxjs/toolkit";

const postsMock = [
    {
        id: 1,
        title: 'Title 1',
        authorId: 1,
        body: 'body sample 1',
        createdAt: moment().format(),
    },
    {
        id: 2,
        title: 'Title 2',
        authorId: 1,
        body: 'body sample 2',
        createdAt: moment().format(),
    },
    {
        id: 3,
        title: 'Title 3',
        authorId: 2,
        body: 'body sample 3',
        createdAt: moment().format(),
    },
    {
        id: 4,
        title: 'Title 4',
        authorId: 1,
        body: 'body sample 4',
        createdAt: moment().format(),
    },
    {
        id: 5,
        title: 'Title 5',
        authorId: 2,
        body: 'body sample 5',
        createdAt: moment().format(),
    },
    {
        id: 6,
        title: 'Title 6',
        authorId: 1,
        body: 'body sample 6',
        createdAt: moment().format(),
    },
];

const slice = createSlice({
    name: 'posts',
    initialState: postsMock,
    reducers: {
        create: (state, value) => void(state.push(value.payload))
    }
});

export const posts = state => state.posts;

export default slice.reducer