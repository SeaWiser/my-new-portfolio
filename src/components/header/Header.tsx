import React, { Component } from 'react';
import './header.css';
import CTA from "./CTA";
import ME from '../../assets/me-transparent.png';
import LOGO from '../../assets/only-logo-01.png';
import HeaderSocials from "./HeaderSocials";
import { Toaster } from "react-hot-toast";
import 'animate.css';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className="container header__container">
          <img src={LOGO} alt="logo" className="my_logo animate__animated animate__fadeInDown"/>
          <h5 className="animate__animated animate__fadeInLeft">Hello I'm</h5>
          <h1 className="animate__animated animate__fadeInRight">Yanis Graillot</h1>
          <h5 className="text-light animate__animated  animate__fadeInLeft">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me animate__animated animate__fadeInUpBig">
            <img src={ME} alt="me"/>
          </div>

          <a href={'#contact'} className="scroll__down">Scroll Down</a>
        </div>
      </header>
    );
  }
}

export default Header;