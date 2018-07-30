import React, {Component} from 'react';
import Post from './Post';

import '../css/PostsList.css';

class PostsList extends  Component {
    render() {
        let height = 0;
        const posts = this.props.posts.map((post, index) => {
            
            //use bitwise and to determin if the index 
            //value is even of odd
            const even = index & 1 ? false : true;
            let top = 0;

            if (index === 0) {
                console.log('first');
                top = 0;
            } else if (index === 1) {
                top = 120;
                height = 456;
            } else if (!even) {
                height += 456;
                top = height + 120;
                console.log('second', top, height);
            } else {
                top = height + 120;
                console.log('therd', top, height);
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