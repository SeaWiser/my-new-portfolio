import React from 'react';
import './experience.scss';
import { AiOutlineApi, AiOutlineHtml5 } from "react-icons/ai";
import {
  SiAngular,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";
import { FaSass } from "react-icons/fa";
import 'animate.css';
import { t } from "i18next";
import { Fade } from "react-reveal";

function Experience() {
  return (
    <section id="experience">
      <Fade left>
        <h5>{t('experience.subtitle')}</h5>
      </Fade>
      <Fade right>
        <h2>{t('experience.title')}</h2>
      </Fade>

      <div className="container experience__container">
        <Fade left>
          <div className="experience__frontend__backend">
            <h3>{t('front_end')}</h3>
            <div className="experience__content">
              <div className="experience__content__col">
                <article className="experience__details">
                  <AiOutlineHtml5 className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>HTML</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiJavascript className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Javascript</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiAngular className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Angular</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiVuedotjs className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Vue</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
              <div className="experience__content__col">
                <article className="experience__details">
                  <FaSass className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>CSS / SCSS</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiTypescript className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Typescript</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiReact className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>React</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiTailwindcss className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Tailwind</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience__content__for_very_small__devices">
              <div className="experience__content__col">
                <article className="experience__details">
                  <AiOutlineHtml5 className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>HTML</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <FaSass className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>CSS / SCSS</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiJavascript className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Javascript</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiTypescript className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Typescript</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiAngular className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Angular</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiTailwindcss className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Tailwind</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiReact className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>React</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiVuedotjs className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Vue</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="experience__frontend__backend">
            <h3>{t('back_end')}</h3>
            <div className="experience__content">
              <div className="experience__content__col">
                <article className="experience__details">
                  <SiNodedotjs className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Node JS</h4>
                    <small className="text-light">{t('experience.basic')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiPhp className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>PHP</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiLaravel className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Laravel</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <GrMysql className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>MySQL</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
              <div className="experience__content__col">
                <article className="experience__details">
                  <SiMongodb className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>MongoDB</h4>
                    <small className="text-light">{t('experience.basic')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiSymfony className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Symfony</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <FiDatabase className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>SQL</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <AiOutlineApi className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>API REST</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience__content__for_very_small__devices">
              <div className="experience__content__col">
                <article className="experience__details">
                  <SiNodedotjs className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Node JS</h4>
                    <small className="text-light">{t('experience.basic')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiMongodb className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>MongoDB</h4>
                    <small className="text-light">{t('experience.basic')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiPhp className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>PHP</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiSymfony className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Symfony</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <SiLaravel className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>Laravel</h4>
                    <small className="text-light">{t('experience.basic')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <FiDatabase className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>SQL</h4>
                    <small className="text-light">{t('experience.experienced')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <GrMysql className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>MySQL</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
                <article className="experience__details">
                  <AiOutlineApi className="experience__details-icon"/>
                  <div className="experience__details__text">
                    <h4>API REST</h4>
                    <small className="text-light">{t('experience.intermediate')}</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;