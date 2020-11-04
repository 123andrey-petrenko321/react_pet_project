import React from 'react';
import './app-header.css';

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className="app-header d-flex">
            <h2>{allPosts} Постов, из них понравилось {liked}</h2>
        </div>
    );
};

export default AppHeader