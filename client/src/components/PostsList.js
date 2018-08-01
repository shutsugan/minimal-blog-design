import React, {Component} from 'react';
import Post from './Post';

import '../css/PostsList.css';

class PostsList extends  Component {
    render() {
        let top = 0;
        const posts = this.props.posts.map((post, index) => {

            //use bitwise and to determin if the index
            //value is even of odd
            const even = index & 1 ? false : true;

            if (index === 0) {
                console.log('first');
                top = 0;
            } else if (!even) {
                top += 120;
                console.log('second', top);
            } else {
                top += 456;
                console.log('therd', top);
            }

            return (
                <Post
                    key={index}
                    post={post}
                    even={even}
                    top={top}
                />
            );
        });

        return(
            <div className="PostsList">{posts}</div>
        );
    }
}

export default PostsList;
