import {createSlice} from '@reduxjs/toolkit'

const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
    id: 2,
    name: 'Nick Gregg',
};

const slice = createSlice({
    name: 'user',
    initialState: {
        value: currentUser
    },
    reducers: {
        replace: (state, value) => {
            state.value = value.payload
            localStorage.setItem('currentUser', JSON.stringify(state.value))
        }
    },
});

export const {replace} = slice.actions;
export const user = state => state.user.value;

export default slice.reducer