import React, { Component } from 'react';
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";
import 'animate.css';
import Block from "../shared/Block";

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <Block className="animate__fadeInLeft">
          <h5>What Skills I Have</h5>
        </Block>
        <Block className="animate__fadeInRight">
          <h2>My Experience</h2>
        </Block>

        <div className="container experience__container">
          <Block className="experience__frontend__backend animate__fadeInLeft">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Angular</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Vue</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </Block>
          <Block className="experience__frontend__backend animate__fadeInRight">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Symfony</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Laravel</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>SQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>API REST</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </Block>
        </div>
      </section>
    );
  }
}

export default Experience;