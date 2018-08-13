import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from 'react-icons-kit';
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft';

import '../css/PostCard.css';

class PostCard extends Component {
  render() {
    const {author, title, body, poster, created} = this.props.post;
    return(
      <div className="PostCard">
        <img className="PostCard__image" src={poster} alt={poster} />
        <Link to='/' className="PostCard__back"><Icon icon={chevronLeft}/></Link>
        <div className="PostCard__info">
          <span className="PostCard__date">{(created) ? new Date(created).toLocaleDateString('en-US') : ''}</span>
          <h2 className="PostCard__title">{title}</h2>
          <br />
          <p className="PostCard__text">{body}</p>
        </div>
      </div>
    );
  }
}

export default PostCard;
