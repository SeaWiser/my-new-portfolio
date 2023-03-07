import React, { Component } from 'react';
import './footer.css';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import LOGO from "../../assets/Logo-02.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__logo">
          <a href="/#"><img src={LOGO} alt="Logo"/></a>
        </div>
        <ul className="permalinks">
          <li><a href="/#">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#background">Background</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100090831364043" rel="noreferrer"
             target="_blank"><FaFacebook/></a>
          <a href="https://www.linkedin.com/in/yanis-graillot-94a765177/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/SeaWiser" rel="noreferrer" target="_blank"><FaGithub/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Yanis GRAILLOT. All rights reserved.</small>
        </div>
      </footer>
    );
  }
}

export default Footer;