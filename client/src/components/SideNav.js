import React, {Component} from 'react';

import '../css/SideNav.css';

class SideNav extends Component {
  render() {
    return(
      <div className={`SideNav ${this.props.open ? 'SideNav__activate' : ''}`}>
        <a className="SideNav__link">Home</a>
        <a className="SideNav__link">About</a>
      </div>
    );
  }
}

export default SideNav;
