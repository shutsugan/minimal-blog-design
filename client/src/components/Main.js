import React, {Component} from 'react';
import Banner from './Banner';
import PostsList from './PostsList';
import Subscription from './Subscription';

import '../css/Main.css';

class Main extends Component {
    state = {
        posts: [],
        banner_post: {}
    }

    componentDidMount() {
      fetch('/api/post/')
        .then(res => res.json())
        .then(posts => {
          const banner_post = posts.pop();

          this.setState({
            banner_post,
            posts
          });
        });
    }

    render() {
        return(
            <div className="Main">
                <Banner post={this.state.banner_post} />
                <PostsList posts={this.state.posts} />
                <Subscription />
            </div>
        );
    }
}

export default Main;
