import React from 'react';

import '../css/PostInfo.css';

const PostInfo = props => (
    <div className={`PostInfo ${props.banner ? 'PostInfo--banner' : 'PostInfo--card'}`}>
        <span className="PostInfo__auther-date">
            {props.post.date} | By {props.post.author}
        </span>
        <h2 className="PostInfo__title">{props.post.title}</h2>
        <a className="PostInfo__more" href={`#${props.post.id}`}>Read More</a>
    </div>
);

export default PostInfo;