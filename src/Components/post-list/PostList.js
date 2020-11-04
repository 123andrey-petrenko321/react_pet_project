import React from 'react';
import PostListItem from '../post-list-item/PostListItem';
import './post-list.css';
const PostList = ({ posts, onDelete, onToggleLiked, imgUrl }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    imgUrl={imgUrl}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id)}

                />
            </li>
        )
    })
    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    );
};

export default PostList;