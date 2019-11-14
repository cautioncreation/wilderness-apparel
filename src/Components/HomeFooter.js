import React, { Component } from 'react';

import FacebookIcon from '../Assets/svg/FacebookIcon.svg';
import InstagramIcon from '../Assets/svg/InstagramIcon.svg';
import GoogleIcon from '../Assets/svg/GoogleIcon.svg';

class Footer extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="home-footer__container">
          <a href="https://facebook.com/byron-l-hill-585">
            <img className ="home-footer__social-icon" src={ FacebookIcon } alt="Facebook" />
          </a>
          <a href="https://instagram.com/cautioncreation">
            <img className ="home-footer__social-icon" src={ InstagramIcon } alt="Instagram" />
          </a>
          <a href="/">
            <img className ="home-footer__social-icon" src={ GoogleIcon } alt="Google+" />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;
