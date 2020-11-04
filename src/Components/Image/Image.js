import React from 'react';

const Image = ({ imgUrl }) => {
    return (
        <div>
            <img src={imgUrl}
                alt='img'
            />
        </div>
    );
};

export default Image;