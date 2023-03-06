import React, { Component } from 'react';
import './services.css';
import { BiCheck } from "react-icons/bi";
import Block from "../shared/Block";

interface ServicesProps {
  isMobile: boolean
}

class Services extends Component<{}, ServicesProps> {
  constructor(props: ServicesProps) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 600
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 600
      });
    }, false);
  }

  render() {
    return (
      <section id="services" className={this.state.isMobile ? 'mobile' : ''}>
        <Block className="animate__fadeInLeft">
          <h5>What I Offer</h5>
        </Block>
        <Block className="animate__fadeInRight">
          <h2>Services</h2>
        </Block>

        <div className="container services__container">
          <Block className="service animate__fadeInLeft" useArticle={true}>
            <div className="service__head">
              <h3>Front-End Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Design the structure and layout of the user interface</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Develop the user interface using markup languages such as HTML, CSS, and JavaScript</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Optimize the user interface for an efficient and user-friendly user experience</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Integrate libraries and frameworks such as Angular, Vue and React</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Perform compatibility tests with different browsers and screen resolutions</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Ensure consistency of the user interface with the brand identity</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Document design choices and features to facilitate future modifications.</p>
              </li>
            </ul>
          </Block>

          <Block className={"service " + (this.state.isMobile ? 'animate__fadeInRight' : 'animate__fadeInUp')} useArticle={true}>
            <div className="service__head">
              <h3>Back-End Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Analyze the client's functional needs for application development</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Design the database structure to store application data</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Develop server-side functionality using programming languages such as PHP and Javascript with Node
                  JS</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Ensure data security by implementing data protection measures and firewalls</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Perform performance testing to ensure the application is fast and responsive</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Deploy the application on an online server</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Document the application architecture to facilitate future modifications</p>
              </li>
            </ul>
          </Block>

          <Block className={"service " + (this.state.isMobile ? 'animate__fadeInLeft' : 'animate__fadeInRight')} useArticle={true}>
            <div className="service__head">
              <h3>Project Management</h3>
            </div>

            <ul className="service__list">
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Plan and organize project tasks, including deadlines and required resources</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Establish a delivery schedule and milestones for the project</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Communicate with the client throughout the project to ensure satisfaction</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Manage project risks and issues</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Ensure coordination between development team members and other stakeholders</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Monitor project progress and make adjustments as necessary</p>
              </li>
              <li>
                <div>
                  <BiCheck className="service__list-icon"/>
                </div>
                <p>Document the project to facilitate future maintenance and updates</p>
              </li>
            </ul>
          </Block>
        </div>
      </section>
    );
  }
}

export default Services;