import React, { Component } from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import 'animate.css';
import Block from "../shared/Block";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Block className="animate__fadeInLeft">
          <h5>Get To Know</h5>
        </Block>
        <Block className="animate__fadeInRight">
          <h2>About Me</h2>
        </Block>
        <div className="container about__container">
          <Block className="about__me animate__fadeInUpBig">
            <div className="about__me-image">
              <img src={ME} alt="About Me"/>
            </div>
          </Block>

          <div className="about__content">
            <div className="about__cards">
              <Block className="about__card animate__jackInTheBox" useArticle={true}>
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>1+ Year Working</small>
              </Block>
              <Block className="about__card animate__jackInTheBox" useArticle={true}>
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>5+ Worldwide</small>
              </Block>
              <Block className="about__card animate__jackInTheBox" useArticle={true}>
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </Block>
            </div>

            <Block className="animate__fadeInRight">
              <p>
                I am a full stack web developer with 4 years of experience, specializing in front-end development with
                Angular, Vue, and React, as well as back-end development with Php/Symfony and Node.js/Express. I am
                passionate about creating innovative, performant, and scalable web applications.
              </p>
            </Block>
            <Block className="animate__fadeInUpBig">
              <a href={"#contact"} className="btn btn-primary">Let's talk</a>
            </Block>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
