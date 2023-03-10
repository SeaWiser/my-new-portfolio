import React, { Component } from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import 'animate.css';
import { Fade, Bounce } from "react-reveal";

class HeaderSocials extends Component {
  render() {
    return (
      <div className='header__socials'>
        <Bounce top>
          <a href="https://www.linkedin.com/in/yanis-graillot-94a765177" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </Bounce>
        <Fade left>
          <a href="https://github.com/SeaWiser" target="_blank" rel="noreferrer"><FaGithub/></a>
        </Fade>
      </div>
    );
  }
}

export default HeaderSocials;