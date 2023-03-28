import React, { useState } from 'react';
import { FormData } from "../../../models/contact-form/form";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import { t } from "i18next";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./contact-form.scss"
import { ClipLoader } from "react-spinners";

function ContactForm() {
  const WAIT_TIME = 120000;
  const NAME_MIN_LENGTH = 2;
  const NAME_MAX_LENGTH = 50;
  const EMAIL_MAX_LENGTH = 100;
  const MESSAGE_MIN_LENGTH = 10;
  const MESSAGE_MAX_LENGTH = 2000;
  const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  let countdownInterval: number | null = null;
  const [lastMessageSentTime, setLastMessageSentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [confirmName, setConfirmName] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting
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

  async function onSubmit(data: FormData) {
    const currentTime = new Date().getTime();
    const timeSinceLastMessage = currentTime - lastMessageSentTime;

    if (timeSinceLastMessage > WAIT_TIME) {
      if (!confirmName || !confirmEmail || !confirmMessage) {
        // Implement API Post Call for contact form submission here
        await axios.post('/api/contact', data)
          .then((response) => {
            console.log(response);
            toast.success(t("contact.success_message"));
            reset();
            setLastMessageSentTime(currentTime);
            setTimeLeft(WAIT_TIME);
            startCountdown(); // Démarre le compte à rebours
          })
          .catch((error) => {
            console.error(error);
            toast.error(t('contact.error_message_generic'));
          })
      } else {
        toast.error(t('contact.error_message_generic'));
      }
    } else {
      toast.error(t('contact.error_message', {seconds: Math.ceil((WAIT_TIME - timeSinceLastMessage) / 1000)}));
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <Fade top>
        <div className="form-group">
          <label>
            <input
              className={errors["name"] && "has-error"}
              aria-invalid={errors["name"] ? "true" : "false"}
              type="text"
              placeholder={t('contact.form_full_name')}
              maxLength={NAME_MAX_LENGTH}
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
            />
            <Fade bottom>
              {errors["name"] && <span className="error-message" role="alert">{errors["name"]?.message}</span>}
            </Fade>
          </label>
          <label className="name__confirm" htmlFor="name"></label>
          <input className="name__confirm" autoComplete="off" type="text" id="name" name="name"
                 placeholder="Your name here" onChange={(e) => setConfirmName(e.target.value)} tabIndex={-1}/>
        </div>
      </Fade>
      <Fade right>
        <div className="form-group">
          <label>
            <input
              className={errors["email"] && "has-error"}
              aria-invalid={errors["email"] ? "true" : "false"}
              type="email"
              placeholder={t('contact.form_email')}
              maxLength={EMAIL_MAX_LENGTH}
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
            />
            <Fade bottom>
              {errors["email"] && <span className="error-message" role="alert">{errors["email"]?.message}</span>}
            </Fade>
          </label>
          <label className="email__confirm" htmlFor="email"></label>
          <input className="email__confirm" autoComplete="off" type="text" id="email" name="email"
                 placeholder="Your Email here" onChange={(e) => setConfirmEmail(e.target.value)} tabIndex={-1}/>
        </div>
      </Fade>
      <Fade bottom>
        <div className="form-group">
          <label>
            <textarea rows={7}
                      maxLength={MESSAGE_MAX_LENGTH}
                      className={errors["message"] && "has-error"}
                      aria-invalid={errors["message"] ? "true" : "false"}
                      placeholder={t('contact.form_message')}
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
            />
            <Fade bottom>
              {errors["message"] &&
                <span className="error-message" role="alert">{errors["message"]?.message}</span>}
            </Fade>
          </label>
          <label className="message__confirm" htmlFor="message"></label>
          <input className="message__confirm" autoComplete="off" type="text" id="message" name="message"
                 placeholder="Your Message here" onChange={(e) => setConfirmMessage(e.target.value)} tabIndex={-1}/>
        </div>
      </Fade>
      <Fade bottom big>
        <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid || isSubmitting}>
          {isSubmitting && <ClipLoader className="loading__spinner" size={20} color="#1f1f38"/>}
          <span className="send__message__text">{t('contact.send_message')}</span>
        </button>
      </Fade>
    </form>
  );
}

export default ContactForm;