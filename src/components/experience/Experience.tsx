import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";
import 'animate.css';
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

function Experience() {
  const {t} = useTranslation();

  return (
    <section id="experience">
      <div className="animate__animated animate__fadeInLeft">
        <h5>{t('experience.subtitle')}</h5>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <h2>{t('experience.title')}</h2>
      </div>

      <div className="container experience__container">
        <Fade left>
          <div className="experience__frontend__backend">
            <h3>{t('front_end')}</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">{t('experience.experienced')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">{t('experience.experienced')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Angular</h4>
                  <small className="text-light">{t('experience.experienced')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Vue</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="experience__frontend__backend">
            <h3>{t('back_end')}</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">{t('experience.basic')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">{t('experience.basic')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Symfony</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Laravel</h4>
                  <small className="text-light">{t('experience.basic')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>SQL</h4>
                  <small className="text-light">{t('experience.experienced')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>API REST</h4>
                  <small className="text-light">{t('experience.intermediate')}</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
    ;
}

export default Experience;