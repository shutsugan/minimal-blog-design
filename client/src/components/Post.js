import React from 'react';
import PostInfo from './PostInfo';

import '../css/Post.css';

const Post = props => {
    let style = {
        top: props.top
    };

    console.log('=>', props.top);

    if (props.even) style.left = 0;
    else style.right = 0;

    return(
        <div className="Post" style={style}>
            <img className="Post__poster" src={props.post.poster} alt="poster" />
            <PostInfo
                banner={false}
                post={props.post} 
            />
        </div>
    );
};

export default Post;