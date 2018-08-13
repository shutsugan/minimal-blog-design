import React, {Component} from 'react';
import AboutFooter from './AboutFooter';
import Links from './Links';
import CopyRight from './CopyRight';

import '../css/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="Footer">
        <div className="Footer__container">
          <AboutFooter />
          <div className="Footer__links">
            <Links head="Links">
              <a href="#">Magazine</a>
              <a href="#">Monthly Editions</a>
              <a href="#">Featured Blog</a>
              <a href="#">Search</a>
            </Links>
            <Links head="Support">
              <a href="#">FAQ</a>
              <a href="#">Contact us</a>
              <a href="#">Reading Setting</a>
              <a href="#">Press</a>
            </Links>
            <Links head="About Us">
              <a href="#">About us</a>
              <a href="#">Team</a>
              <a href="#">Writes</a>
              <a href="#">Blog</a>
            </Links>
          </div>
        </div>
        <CopyRight
          author="Mohamed Tajjiou"
          date={2018}
        />
      </footer>
    );
  }
}

export default Footer;
