import React, { useEffect, useState } from 'react';
import './services.css';
import { BiCheck } from "react-icons/bi";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function Services() {
  const MEDIUM = 1200;
  const [isMedium, setIsMedium] = useState(window.innerWidth < 1200);
  const {t} = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth < MEDIUM);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="services">
      <Fade left>
        <h5>{t('services.subtitle')}</h5>
      </Fade>
      <Fade right>
        <h2>{t('services.title')}</h2>
      </Fade>

      <div className="container services__container">
        <Fade left>
          <article className="service">
            <div className="service__head">
              <h3>{t('front_end')}</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_1')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_2')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_3')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_4')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_5')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_6')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.front_end_skill_7')}</p>
              </li>
            </ul>
          </article>
        </Fade>
        <Fade bottom={!isMedium} right={isMedium}>
          <article className="service">
            <div className="service__head">
              <h3>{t('back_end')}</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_1')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_2')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_3')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_4')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_5')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_6')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.back_end_skill_7')}</p>
              </li>
            </ul>
          </article>
        </Fade>

        <Fade right={!isMedium} left={isMedium}>
          <article className="service">
            <div className="service__head">
              <h3>{t('services.project_management')}</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_1')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_2')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_3')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_4')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_5')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_6')}</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>{t('services.project_management_skill_7')}</p>
              </li>
            </ul>
          </article>
        </Fade>
      </div>
    </section>
  );
}

export default Services;