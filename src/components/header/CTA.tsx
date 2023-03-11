import React from 'react';
import CV_FR from '/src/assets/cv_fr.pdf';
import CV_EN from '/src/assets/cv_en.pdf';
import 'animate.css';
import { Fade } from "react-reveal";
import { t } from "i18next";

function Cta() {
  return (
    <div className="cta">
      <Fade left big>
        <a href={t('language') === 'fr' ? CV_FR : CV_EN} download className="btn">{t('header.download_cv')}</a>
      </Fade>
      <Fade right big>
        <a href={'#contact'} className="btn btn-primary">{t('talk')}</a>
      </Fade>
    </div>
  );
}

export default Cta;