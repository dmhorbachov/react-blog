import moment from "moment";
import {createSlice} from "@reduxjs/toolkit";

const postsMock = JSON.parse(localStorage.getItem('posts')) || [
    {
        id: 1,
        title: 'Title 1',
        authorId: 1,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti ipsa magnam quae quo totam. Architecto, dignissimos dolor ducimus harum, itaque laudantium necessitatibus nobis nostrum quas, quisquam saepe vero.',
        createdAt: moment().format(),
    },
    {
        id: 2,
        title: 'Title 2',
        authorId: 1,
        body: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consectetur cum delectus\n' +
            '                    deleniti error eum iure iusto, magnam nemo neque nobis officia omnis pariatur porro, quae quo quos\n' +
            '                    recusandae?\n' +
            '                </div>\n' +
            '                <div>Ad aliquam atque blanditiis, consequuntur eligendi inventore labore, laudantium libero nam nulla,\n' +
            '                    obcaecati qui reiciendis sit temporibus velit. Accusantium, aliquam autem excepturi inventore odit\n' +
            '                    officiis reprehenderit sapiente! Modi, perferendis velit?\n' +
            '                </div>\n' +
            '                <div>Adipisci at corporis, dicta dolorem doloremque dolores exercitationem facilis fugit inventore\n' +
            '                    laboriosam modi nobis officiis placeat, repellendus sit ut velit veniam veritatis voluptatem\n' +
            '                    voluptatum! Fugit nam officia ullam. Accusantium, totam?\n' +
            '                </div>\n' +
            '                <div>Ab aperiam at blanditiis culpa, dolorem ea earum error ex facere fuga inventore ipsam laborum\n' +
            '                    magnam mollitia, nam nulla odit optio placeat qui repellat sed similique tempore ut voluptatem\n' +
            '                    voluptatum.\n' +
            '                </div>\n' +
            '                <div>Dolor facere incidunt inventore veniam vitae? Distinctio ducimus eos in, libero magnam odio\n' +
            '                    perspiciatis rerum sed voluptatum! Architecto consequuntur itaque minima optio pariatur perspiciatis\n' +
            '                    quae repellendus, sapiente tempora voluptas voluptate?\n' +
            '                </div>',
        createdAt: moment().format(),
    },
    {
        id: 3,
        title: 'Title 3',
        authorId: 2,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti ipsa magnam quae quo totam. Architecto, dignissimos dolor ducimus harum, itaque laudantium necessitatibus nobis nostrum quas, quisquam saepe vero.',
        createdAt: moment().format(),
    },
    {
        id: 4,
        title: 'Title 4',
        authorId: 1,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti ipsa magnam quae quo totam. Architecto, dignissimos dolor ducimus harum, itaque laudantium necessitatibus nobis nostrum quas, quisquam saepe vero.',
        createdAt: moment().format(),
    },
    {
        id: 5,
        title: 'Title 5',
        authorId: 2,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti ipsa magnam quae quo totam. Architecto, dignissimos dolor ducimus harum, itaque laudantium necessitatibus nobis nostrum quas, quisquam saepe vero.',
        createdAt: moment().format(),
    },
    {
        id: 6,
        title: 'Title 6',
        authorId: 1,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti ipsa magnam quae quo totam. Architecto, dignissimos dolor ducimus harum, itaque laudantium necessitatibus nobis nostrum quas, quisquam saepe vero.',
        createdAt: moment().format(),
    },
];

const slice = createSlice({
    name: 'posts',
    initialState: postsMock,
    reducers: {
        create: (state, value) => {
            state.push(value.payload)
            localStorage.setItem('posts', JSON.stringify(state))
        }
    }
});

export const posts = state => state.posts;

export default slice.reducer