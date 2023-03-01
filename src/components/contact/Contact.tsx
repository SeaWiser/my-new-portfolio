import React, { ChangeEvent, Component } from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContactState } from "../../models/contact-form/contact-state";
import { toast } from "react-hot-toast";

class Contact extends Component<{}, ContactState> {
  private countdownInterval: NodeJS.Timeout | null = null;
  private waitTime = 120000;

  constructor(props: ContactState) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {name: '', email: '', message: ''},
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      lastMessageSentTime: 0,
      timeLeft: 0,
      isSubmitting: false
    };

    this.startCountdown = this.startCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - this.state.lastMessageSentTime;
      const timeLeft = Math.max(0, 120000 - elapsedTime); // Met à jour le temps restant

      this.setState({timeLeft}, () => {
        if (this.state.timeLeft === 0) {
          this.stopCountdown(); // Arrête le compte à rebours lorsque le temps est écoulé
        } else {
          this.forceUpdate(); // Met à jour le rendu avec le temps restant
        }
      });
    }, 1000); // Met à jour l'état toutes les secondes
  }

  stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval); // Arrête l'interval
      this.countdownInterval = null; // Réinitialise la propriété
      this.setState({timeLeft: 0}); // Met à jour le temps restant
      this.forceUpdate(); // Met à jour le rendu pour afficher 0
    }
  }


  handleSubmit(e: any) {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const timeSinceLastMessage = currentTime - this.state.lastMessageSentTime;

    // Set isSubmitting to true when submitting the form
    this.setState({isSubmitting: true});

    if (timeSinceLastMessage > this.waitTime) {
      emailjs.sendForm('service_gvxffb2', 'template_0nry3wu', e.target, 'UPSI5R6e0J5PWUXl5').then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          toast.success("Message sent !");
          this.setState({
            name: '',
            email: '',
            message: '',
            formErrors: {name: '', email: '', message: ''},
            nameValid: false,
            emailValid: false,
            messageValid: false,
            formValid: false,
            lastMessageSentTime: currentTime,
            timeLeft: this.waitTime,
            isSubmitting: false
          }); // Met à jour l'heure du dernier message envoyé et commence à compter le temps restant
          this.startCountdown(); // Démarre le compte à rebours

          // Set isSubmitting to false after successful submission
          this.setState({isSubmitting: false});
        },
        (error: { text: string; }) => {
          console.log(error.text);

          // Set isSubmitting to false after submission with error
          this.setState({isSubmitting: false});
        }
      );
    } else {
      toast.error('Please wait for ' + Math.ceil((this.waitTime - timeSinceLastMessage) / 1000) + ' seconds before sending another message.');

      // Set isSubmitting to false after submission with error
      this.setState({isSubmitting: false});
    }
  }

  handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({...this.state, [name]: value},
      () => {
        this.validateField(name, value);
        this.validateForm()
      });
  }

  validateField(fieldName: string, value: string) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = !!(value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        fieldValidationErrors.email = !value ? (emailValid ? '' : 'Email is required') : (emailValid ? '' : 'Email is invalid');
        break;
      case 'name':
        nameValid = !!(value && value.length >= 6);
        fieldValidationErrors.name = !value ? (nameValid ? '' : 'Name is required') : (nameValid ? '' : 'Name is too short');
        break;
      case 'message':
        messageValid = !!(value && value.length <= 200);
        fieldValidationErrors.message = !value ? (messageValid ? '' : 'Message is required') : (messageValid ? '' : 'Message is too long');
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      nameValid: nameValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid});
  }

  errorClass(error: string) {
    return (error.length === 0 ? '' : 'has-error');
  }

  toastButton() {
    toast.error("This didn't work.")
  }

  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>graillot.yanis@gmail.com</h5>
              <a href="mailto:graillot.yanis@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messenger</h4>
              <h5>Yanis Graillot</h5>
              <a href="https://m.me/100090831364043" rel="noreferrer" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+33698588270</h5>
              <a href="https://api.whatsapp.com/send?phone+33698588270">Send a message</a>
            </article>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              {this.state.formErrors.name && (
                <span className="error-message">{this.state.formErrors.name}</span>
              )}
              <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)} name="name"
                     placeholder="Your Full Name"
                     className={this.errorClass(this.state.formErrors.name)}
                     required/>
            </div>
            <div className="form-group">
              {this.state.formErrors.email && (
                <span className="error-message">{this.state.formErrors.email}</span>
              )}
              <input type="text" value={this.state.email} onChange={(event) => this.handleChange(event)} name="email"
                     className={this.errorClass(this.state.formErrors.email)}
                     placeholder="Your Email" required/>
            </div>
            <div className="form-group">
              {this.state.formErrors.message && (
                <span className="error-message">{this.state.formErrors.message}</span>
              )}
              <textarea name="message" value={this.state.message} onChange={(event) => this.handleChange(event)}
                        className={this.errorClass(this.state.formErrors.message)}
                        rows={7} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn"
                    disabled={!this.state.formValid || this.state.isSubmitting}>Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;