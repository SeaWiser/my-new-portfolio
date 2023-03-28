import React from 'react';
import './footer.scss';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import LOGO from "@/assets/LOGO_Yanis_LightVersion_23.svg";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { t } from "i18next";
import ScrollToTop from "../../utils/ScrollToTop";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__logo">
        <HashLink to="/#home">
          <img src={LOGO} alt="Logo"/>
        </HashLink>
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

      <ScrollToTop><Link to="/legal-notices">{t('footer.legal_notices')}</Link></ScrollToTop>

      <div className="footer__copyright">
        <small>{t('footer.copyrights')}</small>
      </div>
    </footer>
  );
}

export default Footer;