import {isCurrentUser} from "../../helpers/helpers";
import React from "react";

const NavItem = ({author, currentUser, onUserClick}) => {
    const switchUser = (event) => {
        const authorId = event.target.dataset.author;
        onUserClick(authorId);
    };

    return (
        <div
            className={'nav-item btn mr-2 ' + (isCurrentUser(currentUser, author) ? 'btn-dark' : 'btn-light')}
            data-author={author.id}
            onClick={switchUser}
        >
            {author.name}
        </div>
    )
};

export default NavItem