import React, { useState } from 'react';
import './header.scss';
import CTA from "./CTA";
import ME_PNG from '@/assets/me-transparent.png';
import ME_WEBP from '@/assets/me-transparent.webp';
import LOGO from '../../assets/Yanis_Logo_V2_2023.svg';
import HeaderSocials from "./HeaderSocials";
import { Toaster } from "react-hot-toast";
import 'animate.css';
import { Fade, Roll, Slide } from "react-reveal";
import { t } from "i18next";

function Header() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <header id="home">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="container header__container">
        <div className="titles_with_logo">
          <Fade top>
            <div className="my_logo">
              <img src={LOGO} alt="logo"/>
            </div>
          </Fade>
          <div className="titles_section">
            <Fade top>
              <h5>{t('header.title')}</h5>
            </Fade>
            <Fade right>
              <h1>Yanis Graillot</h1>
            </Fade>
            <Fade bottom>
              <h5>{t('header.job')}</h5>
            </Fade>
          </div>
        </div>
        <div className="me__container">
          <div className="header__socials__container">
            <HeaderSocials/>
          </div>
          <Slide bottom when={imageLoaded}>
            <div className="me">
              <div className="me_image">
                {imageLoaded ? (
                  <picture>
                    <source srcSet={ME_WEBP} type="image/webp" />
                    <source srcSet={ME_PNG} type="image/png" />
                    <img src={ME_PNG} alt="Me" />
                  </picture>
                ) : (
                  <picture className="no-image-loaded">
                    <source srcSet={ME_WEBP} type="image/webp" />
                    <source srcSet={ME_PNG} type="image/png" />
                    <img src={ME_PNG} alt="Me" onLoad={handleImageLoad} style={{ display: 'none' }} />
                  </picture>
                )}
              </div>
            </div>
          </Slide>
          <div className="scroll__down__container">
            <Roll right>
              <div className="scroll__down">
                <a href={'#contact'} className="scroll__down">{t('header.scroll_down')}</a>
              </div>
            </Roll>
          </div>
          <div className="cta__container">
            {imageLoaded && <CTA/>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;