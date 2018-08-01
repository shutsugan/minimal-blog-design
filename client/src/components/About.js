import React, {Component} from 'react';
import Logo from './Logo';

import '../css/About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        <Logo />
        <h3 className="About__head">Health and Gym</h3>
        <p className="About__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </p>
      </div>
    );
  }
}

export default About;
