import React from 'react';
import './contact.scss';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelephoneOutbound } from "react-icons/bs";
import { JackInTheBox } from "react-awesome-reveal";
import { Fade } from "react-reveal";
import { t } from "i18next";
import ContactForm from "./contact-form/ContactForm";

function Contact() {
  return (
    <section id="contact">
      <Fade left>
        <h5>{t('contact.subtitle')}</h5>
      </Fade>
      <Fade right>
        <h2>{t('contact.title')}</h2>
      </Fade>

      <div className="container contact__container">
        <div className="contact__options">
          <JackInTheBox triggerOnce={true} cascade={true}>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>contact@ygraillot.com</h5>
              <a href="mailto:graillot.yanis@gmail.com" rel="noreferrer" target="_blank">{t('contact.send_message')}</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messenger</h4>
              <h5>Yanis Graillot</h5>
              <a href="https://m.me/100090831364043" rel="noreferrer" target="_blank">{t('contact.send_message')}</a>
            </article>
            <article className="contact__option">
              <BsTelephoneOutbound className="contact__option-icon"/>
              <h4>{t('contact.phone')}</h4>
              <h5>+33698588270</h5>
              <a href="tel:+33698588270">{t('contact.call')}</a>
            </article>
          </JackInTheBox>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
}

export default Contact;