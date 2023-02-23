import React, { Component } from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

class HeaderSocials extends Component {
  render() {
    return (
      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yanis-graillot-94a765177" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/SeaWiser" target="_blank" rel="noreferrer"><FaGithub/></a>
      </div>
    );
  }
}

export default HeaderSocials;