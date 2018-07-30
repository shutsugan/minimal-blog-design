import React from 'react';
import PostInfo from './PostInfo';

import '../css/Post.css';

const Post = props => (
    <div className="Post">
        <img className="Post__poster" src={props.post.poster} />
        <PostInfo
            banner={false}
            post={props.post} 
        />
    </div>
);

export default Post;