import React, { Component } from 'react';
import CV from '../../assets/cv.pdf';
import 'animate.css';

class Cta extends Component {
  render() {
    return (
      <div className="cta">
        <a href={CV} download className="btn animate__animated animate__fadeInLeft">Download CV</a>
        <a href={'#contact'} className="btn btn-primary animate__animated animate__fadeInLeft">Let's Talk</a>
      </div>
    );
  }
}

export default Cta;