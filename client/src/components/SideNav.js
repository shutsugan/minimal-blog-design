import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../css/SideNav.css';

class SideNav extends Component {
  render() {
    return(
      <div className={`SideNav ${this.props.open ? 'SideNav__activate' : ''}`}>
        <Link className="SideNav__link" to="/">Home</Link>
        <Link className="SideNav__link" to="/about">About</Link>
      </div>
    );
  }
}

export default SideNav;
