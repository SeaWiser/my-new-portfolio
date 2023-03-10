import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { JackInTheBox } from "react-awesome-reveal";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Form } from "../../models/contact-form/form";
import { toast } from "react-hot-toast";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

function Contact() {
  const {t} = useTranslation();
  const WAIT_TIME = 120000;
  const NAME_MIN_LENGTH = 2;
  const NAME_MAX_LENGTH = 50;
  const EMAIL_MAX_LENGTH = 100;
  const MESSAGE_MIN_LENGTH = 10;
  const MESSAGE_MAX_LENGTH = 400;
  const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  let countdownInterval: NodeJS.Timeout | null = null;
  const [lastMessageSentTime, setLastMessageSentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  function startCountdown() {
    countdownInterval = setInterval(() => {
      if (timeLeft === 0) {
        stopCountdown();
      }
    }, 1000); // Met à jour l'état toutes les secondes
  }

  function stopCountdown() {
    if (countdownInterval) {
      clearInterval(countdownInterval); // Arrête l'interval
      countdownInterval = null; // Réinitialise la propriété
      setTimeLeft(0);
    }
  }

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: {
      "name": "",
      "email": "",
      "message": ""
    }
  });

  function onSubmit(data: Form) {
    const currentTime = new Date().getTime();
    const timeSinceLastMessage = currentTime - lastMessageSentTime;
    const dataForm = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    if (timeSinceLastMessage > WAIT_TIME) {
      emailjs.send('service_gvxffb2', 'template_0nry3wu', dataForm, 'UPSI5R6e0J5PWUXl5').then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          toast.success("Message sent !");
          reset();
          setLastMessageSentTime(currentTime);
          setTimeLeft(WAIT_TIME);
          startCountdown(); // Démarre le compte à rebours
        },
        (error: { text: string; }) => {
          console.log(error.text);
        }
      );
    } else {
      toast.error('Please wait for ' + Math.ceil((WAIT_TIME - timeSinceLastMessage) / 1000) + ' seconds before sending another message.');
    }
  }

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
              <h5>graillot.yanis@gmail.com</h5>
              <a href="mailto:graillot.yanis@gmail.com" rel="noreferrer" target="_blank">{t('contact.send_message')}</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messenger</h4>
              <h5>Yanis Graillot</h5>
              <a href="https://m.me/100090831364043" rel="noreferrer" target="_blank">{t('contact.send_message')}</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+33698588270</h5>
              <a href="https://api.whatsapp.com/send?phone+33698588270">{t('contact.send_message')}</a>
            </article>
          </JackInTheBox>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fade top>
            <div className="form-group">
              <label>
                <input
                  {...register("name", {
                    required: t('contact.form_full_name') + t('contact.errors.required'),
                    minLength: {
                      value: NAME_MIN_LENGTH,
                      message: t('contact.form_full_name') + t('contact.errors.too_short', {minLength: NAME_MIN_LENGTH})
                    },
                    maxLength: {
                      value: NAME_MAX_LENGTH,
                      message: t('contact.form_full_name') + t('contact.errors.too_long', {maxLength: NAME_MAX_LENGTH})
                    },
                  })}
                  className={errors["name"] && "has-error"}
                  aria-invalid={errors["name"] ? "true" : "false"}
                  type="text"
                  placeholder="Your Full Name"
                />
                <Fade bottom>
                  {errors["name"] && <span className="error-message" role="alert">{errors["name"]?.message}</span>}
                </Fade>
              </label>
            </div>
          </Fade>
          <Fade right>
            <div className="form-group">
              <label>
                <input
                  {...register("email", {
                    required: t('contact.form_email') + t('contact.errors.required'),
                    maxLength: {
                      value: EMAIL_MAX_LENGTH,
                      message: t('contact.form_email') + t('contact.errors.too_long', {maxLength: EMAIL_MAX_LENGTH})
                    },
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: t('contact.form_email') + t('contact.errors.invalid')
                    },
                  })}
                  className={errors["email"] && "has-error"}
                  aria-invalid={errors["email"] ? "true" : "false"}
                  type="email"
                  placeholder="Your Email"
                />
                <Fade bottom>
                  {errors["email"] && <span className="error-message" role="alert">{errors["email"]?.message}</span>}
                </Fade>
              </label>
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-group">
              <label>
                <textarea rows={7}
                          {...register("message", {
                            required: t('contact.form_message') + t('contact.errors.required'),
                            minLength: {
                              value: MESSAGE_MIN_LENGTH,
                              message: t('contact.form_message') + t('contact.errors.too_short', {minLength: MESSAGE_MIN_LENGTH})
                            },
                            maxLength: {
                              value: MESSAGE_MAX_LENGTH,
                              message: t('contact.form_message') + t('contact.errors.too_long', {maxLength: MESSAGE_MAX_LENGTH})
                            },
                          })}
                          className={errors["message"] && "has-error"}
                          aria-invalid={errors["message"] ? "true" : "false"}
                          placeholder="Your Message"
                />
                <Fade bottom>
                  {errors["message"] &&
                    <span className="error-message" role="alert">{errors["message"]?.message}</span>}
                </Fade>
              </label>
            </div>
          </Fade>
          <Fade bottom big>
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>{t('contact.send_message')}</button>
          </Fade>
        </form>
      </div>
    </section>
  );
}

export default Contact;