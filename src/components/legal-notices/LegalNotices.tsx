import React from 'react';
import "../../index.scss";
import "./legal-notices.scss";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

function LegalNotices() {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <section id="legal_notices">
        <div className="container">
          <h1>{t('legal_notices.title')}</h1>
          <p>{t('legal_notices.title_description')}</p>
          <h2>{t('legal_notices.subtitle_1')}</h2>
          <p>{t('legal_notices.description_1')}</p>
          <h2>{t('legal_notices.subtitle_2')}</h2>
          <p>{t('legal_notices.description_2')}</p>
          <h2>{t('legal_notices.subtitle_3')}</h2>
          <p>{t('legal_notices.description_3')}</p>
          <h2>{t('legal_notices.subtitle_4')}</h2>
          <p>{t('legal_notices.description_4')} </p>
        </div>
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default LegalNotices;