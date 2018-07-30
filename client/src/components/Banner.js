import React, {Component} from 'react';
import PostInfo from './PostInfo';

import '../css/Banner.css';

class Banner extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="Banner">
                <PostInfo 
                    banner={true}
                    post={this.props.post}
                />
            </div>
        );
    }
}

export default Banner;