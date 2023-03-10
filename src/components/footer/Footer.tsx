import React from 'react';
import './footer.css';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import LOGO from "../../assets/LOGO_Yanis_LightVersion_23.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="footer__logo">
        <a href="/#"><img src={LOGO} alt="Logo"/></a>
      </div>
      <ul className="permalinks">
        <li><a href="/#">{t('home')}</a></li>
        <li><a href="/#about">{t("about.about")}</a></li>
        <li><a href="/#experience">{t("experience.experience")}</a></li>
        <li><a href="/#services">{t("services.services")}</a></li>
        <li><a href="/#background">{t("background.background")}</a></li>
        <li><a href="/#contact">{t("contact.contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100090831364043" rel="noreferrer"
           target="_blank"><FaFacebook/></a>
        <a href="https://www.linkedin.com/in/yanis-graillot-94a765177/" rel="noreferrer"
           target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SeaWiser" rel="noreferrer" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>{t('footer.copyrights')}</small>
      </div>
    </footer>
  );
}

export default Footer;