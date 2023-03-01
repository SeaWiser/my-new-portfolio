import React, { Component } from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me"/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>1+ Year Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloribus in nesciunt. Alias esse
              incidunt praesentium sequi suscipit tempore. Accusantium aliquid aperiam dolores iure laboriosam possimus
              quidem sint unde vel!
            </p>

            <a href={"#contact"} className="btn btn-primary">Let's talk</a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
