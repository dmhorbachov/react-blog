import {createSlice, configureStore} from '@reduxjs/toolkit'

const authors = [
    {
        id: 1,
        name: 'Paul Davidson',
    },
    {
        id: 2,
        name: 'Nick Gregg',
    },
];

const slice = createSlice({
    name: 'author',
    initialState: authors,
    reducers: {
        add: (state, value) => state.push(value)
    },
});

export const {add} = slice.actions;
export const blogAuthors = state => state.author;

export default slice.reducer