import React from 'react';
import {Link} from 'react-router-dom';

import '../css/PostInfo.css';

const PostInfo = props => (
    <div className={`PostInfo ${props.banner ? 'PostInfo--banner' : 'PostInfo--card'}`}>
        <span className="PostInfo__auther-date">
            {props.post.date} | By {props.post.author}
        </span>
        <h2 className="PostInfo__title">{props.post.title}</h2>
        <Link className="PostInfo__more" to={`/post/${props.post.id}`}>Read More</Link>
    </div>
);

export default PostInfo;
