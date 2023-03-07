import React from 'react';
import './header.css';
import CTA from "./CTA";
import ME from '../../assets/me-transparent.png';
import LOGO from '../../assets/Yanis_Logo_V2_2023.svg';
import HeaderSocials from "./HeaderSocials";
import { Toaster } from "react-hot-toast";
import 'animate.css';

function Header() {
  return (
    <header id="home">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="container header__container">
        <div className="titles_with_logo">
          <img src={LOGO} alt="logo" className="my_logo animate__animated animate__fadeInDown"/>
          <div className="titles_section">
            <h5 className="animate__animated animate__fadeInLeft">Hello I'm</h5>
            <h1 className="animate__animated animate__fadeInRight">Yanis Graillot</h1>
            <h5 className="text-light animate__animated  animate__fadeInLeft">Fullstack Developer</h5>
          </div>
        </div>
        <div className="me__container">
          <div className="header__socials__container">
            <HeaderSocials/>
          </div>
          <div className="me animate__animated animate__fadeInUpBig">
            <div className="me_image">
              <img src={ME} alt="me"/>
            </div>
          </div>
          <div className="scroll__down__container">
            <a href={'#contact'} className="scroll__down animate__animated animate__rollIn">Scroll Down</a>
          </div>
          <div className="cta__container">
            <CTA/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;