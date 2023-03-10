import React from 'react';
import CV from '../../assets/cv.pdf';
import 'animate.css';
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

function Cta() {
  const {t} = useTranslation();
  return (
    <div className="cta">
      <Fade left big>
        <a href={CV} download className="btn">{t('header.download_cv')}</a>
      </Fade>
      <Fade right big>
        <a href={'#contact'} className="btn btn-primary">{t('talk')}</a>
      </Fade>
    </div>
  );
}

export default Cta;