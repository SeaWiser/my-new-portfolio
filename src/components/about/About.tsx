import React, { useState } from 'react';
import './about.scss';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import 'animate.css';
import { JackInTheBox } from "react-awesome-reveal";
import { Fade } from "react-reveal";
import { t } from "i18next";
import ME_ABOUT_PNG from '@/assets/me-about.png';
import ME_ABOUT_WEBP from "@/assets/me-about.webp";
import { Blurhash } from "react-blurhash";

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="about">
        <Fade left>
          <h5>{t('about.subtitle')}</h5>
        </Fade>
        <Fade right>
          <h2>{t('about.title')}</h2>
        </Fade>
      <div className="container about__container">
        <Fade bottom big>
          <div className="about__me">
            <div className="about__me-image">
              {imageLoaded ? (
                <picture>
                  <source srcSet={ME_ABOUT_WEBP} type="image/webp"/>
                  <source srcSet={ME_ABOUT_PNG} type="image/png"/>
                  <img src={ME_ABOUT_PNG} alt="About Me"/>
                </picture>
              ) : (
                <>
                  <Blurhash className="blurhash" hash="LgFP?TV[2ztQX7j[n$a}15oy-TV["/>
                  <picture>
                    <source srcSet={ME_ABOUT_WEBP} type="image/webp"/>
                    <source srcSet={ME_ABOUT_PNG} type="image/png"/>
                    <img src={ME_ABOUT_PNG} alt="Me" onLoad={handleImageLoad} style={{display: 'none'}}/>
                  </picture>
                </>
              )}
            </div>
          </div>
        </Fade>

        <div className="about__content">
          <div className="about__cards">
            <JackInTheBox triggerOnce={true} cascade={true}>
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>{t('about.experience_title')}</h5>
                <small>{t('about.experience_description', {years: 1})}</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>{t('about.clients_title')}</h5>
                <small>{t('about.clients_description', {clients: 5})}</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>{t('about.projects_title')}</h5>
                <small>{t('about.projects_description', {projects: 20})}</small>
              </article>
            </JackInTheBox>
          </div>

          <Fade right>
            <p>{t('about.description')}</p>
          </Fade>
          <Fade bottom>
            <a href={"#contact"} className="btn btn-primary">{t('talk')}</a>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
