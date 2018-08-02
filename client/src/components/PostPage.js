import React, {Component} from 'react';

import '../css/PostPage.css';

class PostPage extends Component {
  state = {
      post: {}
  }

  componentDidMount() {
    const post_param = this.props.match.params.post;
    //fetch the post and update the setState
    //then render the post information.
  }

  render() {
    return(
      <div className="PostPage"></div>
    );
  }
}

export default PostPage;
