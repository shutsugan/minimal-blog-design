import React, {Component} from 'react';
import PostCard from './PostCard';

import '../css/PostPage.css';

class PostPage extends Component {
  state = {
      post: {}
  }

  componentWillMount() {
    const post_param = this.props.match.params.post;

    fetch(`/api/post/${post_param}`)
      .then(res => res.json())
      .then(post => {
        const data = post[0];
        this.setState({post: data})
      });
  }

  render() {
    return(
      <div className="PostPage">
        <PostCard post={this.state.post} />
      </div>
    );
  }
}

export default PostPage;
