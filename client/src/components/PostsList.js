import React, {Component} from 'react';
import Post from './Post';

import '../css/PostsList.css';

class PostsList extends  Component {
    render() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} post={post} />;
        });

        return(
            <div className="PostsList">{posts}</div>
        );
    }
}

export default PostsList;