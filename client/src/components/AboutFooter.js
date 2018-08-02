import React, {Component} from 'react';
import Logo from './Logo';

import '../css/AboutFooter.css';

class AboutFooter extends Component {
  render() {
    return(
      <div className="AboutFooter">
        <Logo />
        <h3 className="AboutFooter__head">Health and Gym</h3>
        <p className="AboutFooter__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </p>
      </div>
    );
  }
}

export default AboutFooter;
