import React, {Component} from 'react';

import '../css/Links.css';

class Links extends Component {
  render() {
    return(
      <div className="Links">
      <h3 className="Links__head">{this.props.head}</h3>
      {this.props.children}
      </div>
    );
  }
}

export default Links;
